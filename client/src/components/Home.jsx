import pfp from '../assets/AndrewPfp.jpg'
export default function Home(){
    return(
        <section id='Home' className="ml-72">
            <div className='flex'>
                <img src={pfp} alt="" className='w-125 h-auto p-12 '/>
                <div>
                    <h1 className='text-4xl pt-12'>Hello, my name is Andrew and I am an aspiring physicist, amateur artists, part-time photographer, and coding hobbyist</h1>
                    <p className='text-2xl mt-4'>FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXTFILLER TEXT FILLER TEXT</p>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-medium pl-12'>Interests</h2>
                <div className='flex flex-row justify-left space-x-30 px-12 py-4'>
                    <div className='flex flex-col items-center justify-center w-75'>
                        <img src={pfp} alt="" className='w-75 h-auto '/>
                        <h3 className='text-2xl'>Physics</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-75'>
                        <img src={pfp} alt="" className='w-75 h-auto '/>
                        <h3 className='text-2xl'>Art</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-75'>
                        <img src={pfp} alt="" className='w-75 h-auto '/>
                        <h3 className='text-2xl'>Photography</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </section>
    )
}