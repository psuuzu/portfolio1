export default function Footer() {
    return (
        <section className="">
        <div className="flex justify-center relative">
            <h2 className="absolute translate-x-2 top-7 sm:top-7.5 text-[20px] md:text-[22px]">Coming Soon</h2>
            <img src="/images/signbus.png" className="w-[200px] sm:w-[220px] select-none pointer-events-none"></img>
        </div>
        <div className="h-[34vh]"></div>
        <div className="flex justify-end relative">
            <a href="#top" className="absolute top-5 sm:top-9 translate-x-[-60%] z-10"><p>Back to Top ↑</p></a>
            <img src="/images/chair.gif" className='w-[300px] sm:w-[330px] sm:mt-[10px] opacity-80 z-0 contrast-110 select-none pointer-events-none'/>
        </div>
        </section>
    );
}