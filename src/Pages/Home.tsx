import CustomButton from "../components/CustomButton/CustomButton";
import Footer from "../components/Footer";
import MobileScrollIndicator from "../components/MobileScrollIndicator";
import Navbar from "../components/Navbar/Navbar";
import StatusBar from "../components/StatusBar";

const Home = () => {
  const partners = [
    {
      id: 1,
      name: "AgriTech Solutions",
      logo: "/api/placeholder/180/60",
      description: "Leading provider of agricultural technology solutions",
    },
    {
      id: 2,
      name: "FarmWise Systems",
      logo: "/api/placeholder/180/60",
      description: "Smart farming and automation specialists",
    },
    {
      id: 3,
      name: "EcoGrow International",
      logo: "/api/placeholder/180/60",
      description: "Sustainable farming practices innovator",
    },
    {
      id: 4,
      name: "BioHarvest Corp",
      logo: "/api/placeholder/180/60",
      description: "Organic farming solutions provider",
    },
  ];
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

                <p className="text-base font-semibold sm:text-lg md:text-xl text-white font-montserrat leading-relaxed">
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

      <section className="flex flex-col md:flex-row w-full justify-between py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto gap-12">
        {/* Content Left */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Innovating the Future of Agriculture
          </h2>
        </div>

        {/* Content Right */}
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-montserrat">
            Transform your agricultural practices with our cutting-edge
            solutions. We combine traditional farming wisdom with modern
            technology to create sustainable and efficient farming methods for
            the next generation.
          </p>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/african_woman.jpg"
              alt="Farmer harvesting fresh vegetables"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="w-full  space-y-6 px-20 py-10 mx-auto font-Roboto_condensed items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
          Transforming{" "}
          <span className="text-green-600">
            agriculture with smart solutions for a sustainable
          </span>{" "}
          future
        </h2>
      </div>

      <section className="w-full bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 font-Roboto_condensed">
              Our Partners
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-montserrat">
              We collaborate with industry leaders to bring you the most
              innovative and sustainable agricultural solutions.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-montserrat">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-full h-16 relative mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 font-Roboto_condensed">
                    {partner.name}
                  </h3>
                  <p className="text-slate-600 ">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
