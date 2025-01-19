const StatusBar = () => {
  return (
    <div className="bg-[#ECECEC] w-full px-4 py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Years of Experience */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              32<span className="text-green-500 font-bold">+</span>
            </h2>
            <p className="font-montserrat font-normal text-slate-700 text-sm sm:text-base lg:text-xl">
              Years of Experience
            </p>
          </div>

          {/* Fields in Progress */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              132<span className="text-green-500 font-bold">K</span>
            </h2>
            <p className="font-montserrat font-normal text-slate-700 text-sm sm:text-base lg:text-xl">
              Fields in Progress
            </p>
          </div>

          {/* Farmers World Wide */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              69<span className="text-green-500 font-bold">+</span>
            </h2>
            <p className="font-montserrat font-normal text-slate-700 text-sm sm:text-base lg:text-xl">
              Farmers World Wide
            </p>
          </div>

          {/* Agricultural Profits */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black whitespace-nowrap">
              $22<span className="text-green-500 font-bold">B</span>
            </h2>
            <p className="font-montserrat font-normal text-slate-700 text-sm sm:text-base lg:text-xl">
              Agricultural Profits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
