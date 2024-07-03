import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center p-5 min-h-screen bg-gray-800'>
        <div className='md:grid md:grid-cols-5 w-full'>
            <div className='col-span-3 flex w-full justify-center items-center'>

                <img className='w-2/3' src={"/chess-board.png"} alt="" />
            </div>
            <div className='md:col-span-2 '>
                <div className='flex flex-col justify-center  w-full h-full'>
                <div className='font-extrabold text-4xl w-56 text-center text-balance'>
                    Play Chess Online on the #3 Site!
                </div>
                <div className='mt-5 ps-14'>
                    <Button onClick={() => {
                        navigate('/game')
                    }}>Start Game</Button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
