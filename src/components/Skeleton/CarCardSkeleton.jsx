const CarCardSkeleton = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1b1b1b] p-5 rounded-xl shadow grid place-content-stretch animate-pulse">
      <div className="relative">
        <div className="skeleton h-[250px] w-full rounded-lg border dark:border-none" />

        <div className="absolute top-3 right-3">
          <div className="skeleton h-8 w-32 rounded-3xl" />
        </div>

        <div className="absolute p-2 top-0 sm:top-[-29px] sm:left-[-30px] z-10">
          <div className="skeleton h-8 w-24 rounded-lg sm:rounded-full" />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="skeleton h-7 w-3/4 rounded" />
        <div className="skeleton h-5 w-full rounded" />
        <hr className="border my-3" />

        <div className="space-y-2">
          <div className="skeleton h-5 w-2/3 rounded" />
          <div className="skeleton h-5 w-1/2 rounded" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="skeleton h-6 w-32 rounded" />
          <div className="skeleton h-10 w-1/2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;
