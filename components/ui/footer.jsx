export default function Footer() {
    return (
        <section className="">
        <div className="flex justify-center relative">
            <h2 className="absolute translate-x-2 top-7 sm:top-8 text-[20px] md:text-[24px]">Coming Soon</h2>
            <img src="/images/signbus.png" className="w-[200px] sm:w-[230px]"></img>
        </div>
        <div className="mt-[33vh]"></div>
        <div className="flex justify-end relative">
            <a href="#top" className="absolute top-6 sm:top-10 translate-x-[-100%] z-10"><p>Back to Top ↑</p></a>
            <img src="/images/chair.gif" className='w-[300px] sm:w-[360px] sm:mt-[10px] opacity-80 z-0 contrast-110'/>
        </div>
        </section>
    );
}