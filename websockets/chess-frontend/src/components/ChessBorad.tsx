import { Chess, Color, PieceSymbol, Square } from 'chess.js';
import { useState } from 'react';
import { MOVE } from '../lib/messages';

type Box = {
  square: Square,
  type: PieceSymbol,
  color: Color;
}

const ChessBorad = ({board , socket, chess, setBoard}: {board : ({
    square: Square,
    type: PieceSymbol,
    color: Color;
} | null)[][],
    socket : WebSocket,
    chess : Chess,
    setBoard : any
}) => {
    
  const [from, setFrom] = useState<Square | null>()
  // const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  return (
    <div className=''>
      {board.map((row : any,i : number) => {
        return <div key={i} className='flex'>
            {row.map((square : Box,j : number) => {
              
                return <div
                          onClick={() => {

                            const position = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
                            // const position = columns[j] +""+ i as Square
                            
                            if(!from){
                              setFrom(position);
                            }else{
                              try{
                                chess.move({
                                  from, 
                                  to : position
                                })
                              socket.send(JSON.stringify({
                                type : MOVE,
                                move : {
                                  from, 
                                  to : position
                               }
                              }))
                              }catch(err){
                                console.error("Invalid move");
                              }
                              setBoard(chess.board())
                              setFrom(null)
                            }
                            
                          }}
                key={j} className={`w-20 h-20 ${(i+j)%2 === 0 ? "bg-green-500" : "bg-green-300"}`} >
                  
                    <div className='flex h-full justify-center'>
                      <div className='h-full flex flex-col justify-center'>
                        {square? square.color === "w"? square.type.toUpperCase() : square.type : "" }
                      </div>
                    </div>
                </div>
            })} 
        </div>
      })}
    </div>
  )
}

export default ChessBorad
