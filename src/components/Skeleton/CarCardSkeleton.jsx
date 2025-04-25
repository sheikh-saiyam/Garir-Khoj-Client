const CarCardSkeleton = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1b1b1b] p-5 rounded-xl shadow grid place-content-stretch animate-pulse">
      <div className="relative">
        <div className="skeleton bg-gray-300 dark:bg-gray-700 h-[250px] w-full rounded-lg border dark:border-none" />

        <div className="absolute top-3 right-3">
          <div className="skeleton bg-gray-400 dark:bg-gray-900 h-8 w-32 rounded-3xl" />
        </div>

        <div className="absolute p-2 top-0 sm:top-[-29px] sm:left-[-30px] z-10">
          <div className="skeleton bg-gray-400 dark:bg-gray-900 h-8 w-24 rounded-lg sm:rounded-full" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="skeleton bg-gray-300 dark:bg-gray-700 h-7 w-3/5 rounded" />
        <div className="skeleton bg-gray-300 dark:bg-gray-700 h-5 w-11/12 rounded" />
        <hr className="border my-4" />

        <div className="space-y-2">
          <div className="skeleton bg-gray-300 dark:bg-gray-700 h-5 w-1/2 rounded" />
          <div className="skeleton bg-gray-300 dark:bg-gray-700 h-5 w-2/3 rounded" />
        </div>

        <div className="pt-2 flex items-center justify-between">
          <div className="skeleton bg-gray-300 dark:bg-gray-700 h-6 w-32 rounded" />
          <div className="skeleton bg-gray-300 dark:bg-gray-700 h-10 w-1/2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;
