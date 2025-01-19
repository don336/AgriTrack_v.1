import CustomButton from "../components/CustomButton/CustomButton";
import MobileScrollIndicator from "../components/MobileScrollIndicator";
import Navbar from "../components/Navbar/Navbar";
import StatusBar from "../components/StatusBar";

const Home = () => {
  return (
    <div className="flex flex-col gap-0 w-full h-full">
      <div className="relative min-h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl flex items-center">
            <div className="w-full py-8 sm:py-12 md:py-16">
              {/* Text Content */}
              <div className="max-w-xl md:max-w-2xl lg:max-w-3xl space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-raleway leading-tight">
                  Grow Smarter,{" "}
                  <span className="block sm:inline">Harvest Better.</span>
                </h1>

                <p className="text-base font-semibold sm:text-lg md:text-xl text-gray-200 font-montserrat leading-relaxed">
                  Empowering farmers with intelligent tools to optimize crop
                  yield, manage resources efficiently, and cultivate a
                  sustainable future.
                </p>

                {/* CTA Buttons */}
                <div className="pt-4 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <CustomButton
                    variant="primary"
                    className="w-full sm:w-44 text-sm sm:text-base"
                  >
                    GET STARTED
                  </CustomButton>
                  <CustomButton
                    variant="outline"
                    className="w-full sm:w-44 text-sm sm:text-base hidden sm:block text-white font-bold"
                  >
                    LEARN MORE
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Mobile scroll indicator */}
        <MobileScrollIndicator />
      </div>
      {/* Status bar */}
      <StatusBar />

      <div className="showCase flex flex-col md:flex-row py-4 md:py-20 px-4 w-full justify-center items-center gap-6 font-montserrat">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start px-4 md:px-10">
          <h2 className="text-slate-500 font-bold font-roboto-condensed text-3xl sm:text-4xl lg:text-5xl">
            Innovating the Future of Agriculture
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-col px-4 md:px-10 gap-4 justify-center items-center text-center md:items-start md:text-left max-w-xl">
          <p className="text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            corporis natus tempora accusamus id reprehenderit voluptatem, quasi,
            distinctio sapiente soluta rem explicabo harum illo autem nobis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
