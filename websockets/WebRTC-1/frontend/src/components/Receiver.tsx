// import { useEffect, useRef, useState } from 'react'

// const Receiver = () => {

//     const videoRef = useRef<any>();
//     useEffect(()=> {
//         const socket = new WebSocket("ws://localhost:8000");

//         socket.onopen = ()=> {
//             socket.send(JSON.stringify({type:"receiver"}))
//         }
        
//         let ps:RTCPeerConnection = new RTCPeerConnection();
        
//         socket.onmessage = async (data) => {
            
//             const message = await JSON.parse(data.data);
//             console.log("Trigger receiver");
            
//             if(message.type === "createOffer"){
                
                
//                 ps.setRemoteDescription(message.sdp)
//                 let answer = await ps.createAnswer();
//                 ps.setLocalDescription(answer);
//                 socket.send(JSON.stringify({type: "createAnswer", sdp: answer}));
//             }else if (message.type === "iceCandidate") {

//                 ps?.addIceCandidate(message.iceCandidate);

//             }
            
            
//         }
//         ps.onicecandidate = (event: any) =>{
//             socket?.send(JSON.stringify({type: "iceCandidate",iceCandidate : event.candidate}));
//         }
                    
//         ps.ontrack = (event: any) => {

//             // alert("hlleo");
//             console.log(event);

//             // let inboundStream = new MediaStream([event.track])
//             // if (videoRef.current){ 
//             //     videoRef.current.srcObject = inboundStream;
//             // }
//             const video = document.createElement('video');
//             document.body.appendChild(video);
//             video.play();

            
//             // if (ev.streams && ev.streams[0]) {
//             //   videoElem.srcObject = ev.streams[0];
//             // } else {
//             //   if (!inboundStream) {
//             //     inboundStream = new MediaStream();
//             //     videoElem.srcObject = inboundStream;
//             //   }
//             //   inboundStream.addTrack(ev.track);
//             // }
//           };


//     }, [])


//   return (
//     <div>
//       Receiver
//       {/* <video ref={videoRef}></video> */}
//     </div>
//   )
// }

// export default Receiver

import { useEffect } from "react"


 const Receiver = () => {
    
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000');
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'receiver'
            }));
        }
        startReceiving(socket);
    }, []);

    function startReceiving(socket: WebSocket) {
        const video = document.createElement('video');
        document.body.appendChild(video);

        const pc = new RTCPeerConnection();
        pc.ontrack = (event) => {
            console.log(event);
            
            video.srcObject = new MediaStream([event.track]);
            video.play();
        }

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createOffer') {
                pc.setRemoteDescription(message.sdp).then(() => {
                    pc.createAnswer().then((answer) => {
                        pc.setLocalDescription(answer);
                        socket.send(JSON.stringify({
                            type: 'createAnswer',
                            sdp: answer
                        }));
                    });
                });
            } else if (message.type === 'iceCandidate') {
                pc.addIceCandidate(message.candidate);
            }
        }
    }

    return <div>
        
    </div>
}

export default Receiver;    