const MobileScrollIndicator = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default MobileScrollIndicator;
