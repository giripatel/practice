import { useEffect, useState } from 'react'
import { useSocket } from '../hooks/useSocket'
import Button from '../components/Button';
import { GAME_OVER, INIT_GAME, MOVE } from '../lib/messages';
import { Chess } from 'chess.js';
import ChessBorad from '../components/ChessBorad';

const Game = () => {

  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  

  useEffect(() => {
    if(!socket) {
      return;
    }

    socket.onmessage = (event) => {

      const message = JSON.parse(event.data.toString());
      
      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess())
          setBoard(chess.board())
          break;
        // case GAME_OVER:
        //   console.log("game over")
        //   break;
      }
    }
  },[socket] )

  if(!socket){
    return <div>
         Lodaing .......
     </div>
   }
  
  return (
    <div className='flex justify-center'>
      <div className='pt-8 max-w-screen-lg w-full'>
        <div className='grid grid-cols-6 gap-4 w-full '>
          <div className='col-span-4  w-full '>
              <ChessBorad setBoard={setBoard} socket={socket} chess={chess} board={board}/>
          </div>
          <div className='col-span-2 w-full flex'>
            <div className='flex flex-col bg-gray-800 w-full rounded-md items-center justify-center'>
              <Button onClick={() => {
                socket.send(JSON.stringify({
                  type: INIT_GAME
                }))
              }}>
                  Play
              </Button>
              </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Game
