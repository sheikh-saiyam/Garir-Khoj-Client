const CarListCardSkeleton = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1b1b1b] p-5 flex items-center gap-4 rounded-xl shadow animate-pulse">
      {/* Image Section */}
      <div className="relative w-5/12 md:w-4/12">
        <div className="skeleton bg-gray-300 dark:bg-gray-800 h-[180px] sm:h-[230px] w-full rounded-lg" />
        <div className="absolute top-3 right-3">
          <div className="skeleton bg-gray-400 dark:bg-gray-800 h-8 w-24 rounded-3xl" />
        </div>
        <div className="absolute bottom-0 sm:top-0 sm:left-0 z-10">
          <div className="skeleton bg-gray-400 dark:bg-gray-800 h-8 w-24 rounded-lg" />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-7/12 md:w-8/12 space-y-2">
        <div className="skeleton bg-gray-300 dark:bg-gray-800 h-7 w-3/4 rounded" />
        <div className="skeleton bg-gray-300 dark:bg-gray-800 h-5 w-full rounded" />
        <hr className="border my-3" />
        <div className="space-y-2">
          <div className="skeleton bg-gray-300 dark:bg-gray-800 h-5 w-1/2 rounded" />
          <div className="skeleton bg-gray-300 dark:bg-gray-800 h-5 w-1/3 rounded" />
        </div>
        <div className="pt-4 flex justify-end">
          <div className="skeleton bg-gray-300 dark:bg-gray-800 h-10 w-2/5 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CarListCardSkeleton;
