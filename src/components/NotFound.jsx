import scarecrow from '../assets/scarecrow.png'


const NotFound = () => {
    return (
        <div className>

            <header className="font-incon font-bold uppercase text-[24px] pt-7 tracking-[-2px] xl:wrapper mx-[24px]">
                404 not found
            </header>
            <div className=" h-screen xl:wrapper flex flex-col xl:items-center xl:justify-center mt-[63px] xl:mt-0 ">

                <hero className="flex flex-col w-full xl:justify-between xl:flex-row items-center xl:items-stretch ">

                    {/* LEFT */}
                    <div className='xl:max-w-[500px] w-full flex items-center justify-center '>
                        <img src={scarecrow} alt="scarecrow" className='xl:max-w-[539.22px] max-w-[500px] w-full px-[24px] xl:px-0' />
                    </div>

                    {/* RIGHT */}
                    <div className='flex flex-col justify-between  xl:w-[586px] max-w-[586px] xl:mx-0 mx-[24px] pt-[40px] xl:pt-0'>
                        <h1 className='font-space xl:text-[64px] text-[48px] font-bold tracking-[-2px]'>
                            I have bad news for you
                        </h1>
                        <p className='xl:w-[381px] w-[328px] xl:text-[24px] text-[18px] tracking-[-1px] pt-[30px] xl:pt-0 '>
                            The page you are looking for might be removed or is temporarily unavailable
                        </p>

                        <button className='uppercase inline bg-[#333] text-[#FFF] text-[14px] tracking-[0px] font-bold w-[216px] py-[24px] mt-[66px] xl:mt-0 '>
                            back to homepage
                        </button>
                    </div>

                </hero>
            </div>

        </div>
    )
}

export default NotFound