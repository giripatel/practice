import { useEffect, useRef,  } from 'react'

const Receiver = () => {

    const videoRef = useRef<any>();
    useEffect(()=> {
        const socket = new WebSocket("ws://localhost:8000");

        socket.onopen = ()=> {
            socket.send(JSON.stringify({type:"receiver"}))
        }
        
        let ps:RTCPeerConnection = new RTCPeerConnection();
        
        socket.onmessage = async (data) => {
            
            const message = await JSON.parse(data.data);
            console.log("Trigger receiver");
            
            if(message.type === "createOffer"){
                
                
                ps.setRemoteDescription(message.sdp)
                let answer = await ps.createAnswer();
                ps.setLocalDescription(answer);
                socket.send(JSON.stringify({type: "createAnswer", sdp: answer}));
            }else if (message.type === "iceCandidate") {

                ps?.addIceCandidate(message.iceCandidate);

            }
            
            
        }
        ps.onicecandidate = (event: any) =>{
            socket?.send(JSON.stringify({type: "iceCandidate",iceCandidate : event.candidate}));
        }
                    
        ps.ontrack = (event: any) => {

            // alert("hlleo");
            console.log(event);

            let inboundStream = new MediaStream([event.track])
            if (videoRef.current){ 
                videoRef.current.srcObject = inboundStream;
                videoRef.current.play();
            }
          };


    }, [])


  return (
    <div>
      Receiver
      <video ref={videoRef} muted={true}></video>
    </div>
  )
}

export default Receiver
