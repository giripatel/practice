import { useEffect, useRef, useState } from 'react'

const Sender = () => {
    const [socket, setSocket] = useState< WebSocket | null>(null)
    const videoRef = useRef<any>();

    useEffect(()=> {
        const socket = new WebSocket("ws://localhost:8000");
        socket.onopen = () => {
            socket.send(JSON.stringify({type:"sender"}));
        }
        setSocket(socket);
    }, [])

    const createOffer = async () => {
        
        if(!socket) return;
        // socket?.send()

        let ps = new RTCPeerConnection();

        ps.onnegotiationneeded = async ()=> {
            let offer = await ps.createOffer();
            ps.setLocalDescription(offer);
            socket?.send(JSON.stringify({type: "createOffer",sdp: offer}));
        }

        ps.onicecandidate = (event) =>{
            socket?.send(JSON.stringify({type: "iceCandidate",iceCandidate : event.candidate}));
        }

        socket.onmessage = async (evnet: any) =>{
            const message = JSON.parse(evnet.data);
            if(message.type === "createAnswer") {
                console.log(message.sdp);
                
                ps.setRemoteDescription(message.sdp);
            }
            else if(message.type === "iceCandidate") {
                ps.addIceCandidate(message.iceCandidate);
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
        ps.addTrack(stream.getVideoTracks()[0]);
        videoRef.current.srcObject = stream;
        videoRef.current?.play()
    }

  return (
    <div>
      Sender
      <button onClick={createOffer}>Start</button>
      <video ref={videoRef}></video>
    </div>
  )
}

export default Sender
