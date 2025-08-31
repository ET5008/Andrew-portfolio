
export default function PhysicsHome ({ theme }){
    return(
        <section id='Home' className="pl-72 h-[94vh] bg-home-background">
            <div className='flex'>
                <img src={pfp} alt="" className='w-125 h-auto p-12 '/>
                <div>
                    <h1 className='text-4xl pt-12 text-home-text'>Hello, my name is Andrew and I am an aspiring physicist, amateur artists, part-time photographer, and coding hobbyist</h1>
                    <p className='text-2xl mt-4 text-home-text'>FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXTFILLER TEXT FILLER TEXT</p>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-medium pl-12 text-home-text'>Interests</h2>
                <div className='flex flex-row justify-left space-x-30 px-12 py-4'>
                    <div className='flex flex-col items-center justify-center w-75'>
                        <img src={pfp} alt="" className='w-75 h-auto '/>
                        <h3 className='text-2xl text-home-text'>Physics</h3>
                        <p className='text-home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-75'>
                        <img src={pfp} alt="" className='w-75 h-auto '/>
                        <h3 className='text-2xl text-home-text'>Art</h3>
                        <p className='text-home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-75'>
                        <img src={pfp} alt="" className='w-75 h-auto '/>
                        <h3 className='text-2xl text-home-text'>Photography</h3>
                        <p className='text-home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </section>
    )
}