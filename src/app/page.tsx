import Timer from "./components/timer";

const Home = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-end gap-10 rounded-2xl px-10 pb-10 pt-10 md:gap-16 md:px-16 md:pt-16 lg:gap-28">
          <div className="flex flex-col items-center justify-end gap-10 lg:gap-16">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-start gap-2.5">
                <h2 className="font-manrope text-center text-5xl font-bold leading-normal text-emerald-400 md:text-6xl">
                  Coming Soon
                </h2>
              </div>
              <Timer />
              <div className="flex w-full flex-col items-center justify-center gap-5">
                <h6 className="text-center text-base font-semibold leading-relaxed text-emerald-400">
                  Launched Date: Dec 31, 2024
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
