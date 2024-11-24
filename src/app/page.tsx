import Timer from "./components/timer";

const Home = () => {

  return (
    <section className="py-24 relative">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
            <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
                <div className="flex-col justify-center items-center gap-10 flex">
                    <div className="flex-col justify-start items-center gap-2.5 flex">
                        <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">Coming Soon</h2>
                    </div>
                    <Timer />
                    <div className="w-full flex-col justify-center items-center gap-5 flex">
                        <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed">Launched Date: Dec 31, 2024</h6>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

                                        
  );
};

export default Home;
