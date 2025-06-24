import { div } from 'three/tsl'
import LiquidChrome from '../RenderedComp/LastBox'

function GetTouch() {
  return (
        <div className='bg-[#b5b2b5] p-[50px]'>
            <div className='border-[#7b797c] border-[2px] rounded-md'>
                    <div className='w-[100%] h-[300px] relative cursor-pointer'>
                    <LiquidChrome
                        baseColor={[0.1, 0.1, 0.1]}
                        speed={1.3}
                        amplitude={0}
                        interactive={true}
                    />
                    <div className='absolute top-30 left-30 text-4xl font-sm text-white font-[700] cursor-pointer'>GET in TOUCH</div>
                    </div>
            </div>
        </div>
  )
}

export default GetTouch
