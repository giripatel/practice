// import React, { useEffect, useState } from 'react'

// const Sender = () => {
//     const [socket, setSocket] = useState< WebSocket | null>(null)

//     useEffect(()=> {
//         const socket = new WebSocket("ws://localhost:8000");
//         socket.onopen = () => {
//             socket.send(JSON.stringify({type:"sender"}));
//         }
//         setSocket(socket);
//     }, [])

//     const createOffer = async () => {
        
//         if(!socket) return;
//         // socket?.send()

//         let ps = new RTCPeerConnection();

//         ps.onnegotiationneeded = async ()=> {
//             let offer = await ps.createOffer();
//             ps.setLocalDescription(offer);
//             socket?.send(JSON.stringify({type: "createOffer",sdp: offer}));
//         }

//         ps.onicecandidate = (event) =>{
//             socket?.send(JSON.stringify({type: "iceCandidate",iceCandidate : event.candidate}));
//         }

//         socket.onmessage = async (evnet: any) =>{
//             const message = JSON.parse(evnet.data);
//             if(message.type === "createAnswer") {
//                 console.log(message.sdp);
                
//                 ps.setRemoteDescription(message.sdp);
//             }
//             else if(message.type === "iceCandidate") {
//                 ps.addIceCandidate(message.iceCandidate);
//             }
//         }

//         const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
//         ps.addTrack(stream.getVideoTracks()[0]);

//     }

//   return (
//     <div>
//       Sender
//       <button onClick={createOffer}>Start</button>
//     </div>
//   )
// }

// export default Sender


import { useEffect, useState } from "react"

const Sender = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [pc, setPC] = useState<RTCPeerConnection | null>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        setSocket(socket);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'sender'
            }));
        }
    }, []);

    const initiateConn = async () => {

        if (!socket) {
            alert("Socket not found");
            return;
        }

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createAnswer') {
                await pc.setRemoteDescription(message.sdp);
            } else if (message.type === 'iceCandidate') {
                pc.addIceCandidate(message.candidate);
            }
        }

        const pc = new RTCPeerConnection();
        setPC(pc);
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket?.send(JSON.stringify({
                    type: 'iceCandidate',
                    candidate: event.candidate
                }));
            }
        }

        pc.onnegotiationneeded = async () => {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket?.send(JSON.stringify({
                type: 'createOffer',
                sdp: pc.localDescription
            }));
        }
            
        getCameraStreamAndSend(pc);
    }

    const getCameraStreamAndSend = (pc: RTCPeerConnection) => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            // this is wrong, should propogate via a component
            document.body.appendChild(video);
            stream.getTracks().forEach((track) => {
                pc?.addTrack(track);
            });
        });
    }

    return <div>
        Sender
        <button onClick={initiateConn}> Send data </button>
    </div>
}

export default Sender;
