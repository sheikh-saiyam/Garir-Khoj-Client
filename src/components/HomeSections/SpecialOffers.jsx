const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Get 15% off for weekend rentals!",
      buttonText: "Book Now",
      bgImage:
        "https://i.ibb.co.com/kQfWPvR/Leonardo-Phoenix-10-A-vibrant-and-inviting-advertisement-offer-0.jpg",
    },
    {
      id: 2,
      title: "Luxury cars at $99/day this holiday season!",
      buttonText: "Learn More",
      bgImage:
        "https://i.ibb.co.com/bKzrSZj/Leonardo-Phoenix-10-A-glamorous-advertisement-showcasing-luxur-2.jpg",
    },
    {
      id: 3,
      title: "Family SUV rentals starting at $49/day!",
      buttonText: "Explore Deals",
      bgImage:
        "https://i.ibb.co.com/TMvGfS2/Leonardo-Phoenix-10-A-professional-advertisement-for-family-SU-0.jpg",
    },
    {
      id: 4,
      title: "Business rentals with 20% discount for first-time customers!",
      buttonText: "Explore Deals",
      bgImage:
        "https://i.ibb.co.com/1zn79p4/Leonardo-Phoenix-10-A-professional-and-stylish-advertisement-f-0.jpg",
    },
    {
      id: 5,
      title: "Electric cars for eco-friendly drives at $79/day!",
      buttonText: "View Options",
      bgImage:
        "https://i.ibb.co.com/MhF9T9y/Leonardo-Phoenix-10-A-vibrant-and-ecoconscious-advertisement-f-3.jpg",
    },
    {
      id: 6,
      title: "Compact cars perfect for city drives at $39/day!",
      buttonText: "Book Now",
      bgImage:
        "https://i.ibb.co.com/FbVV4Ws/Leonardo-Phoenix-10-A-compact-car-driving-through-a-bustling-c-2.jpg",
    },
  ];

  return (
    <div className="pb-20">
      <div className="text-center">
        <button className="text-base md:text-xl font-semibold py-3 px-6 rounded-full text-primary bg-red-100/60 border-primary border-2">
          Special Offers
        </button>
        <p className="mt-6 font-medium mx-auto text-[#393939] text-sm md:text-lg max-w-3xl">
          Discover amazing car rental deals tailored just for you. Whether
          it&apos;s a weekend getaway or a luxury experience, we have the
          perfect ride for every occasion.
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-11 mt-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative hover:shadow-2xl hover:shadow-[#363636] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div>
              <img
                className="h-[300px] w-full rounded-t-box"
                src={offer.bgImage}
                alt=""
              />
              <button className="btn w-1/2 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 mt-4 hover:scale-105 transition-transform backdrop-blur-sm bg-transparent border-2 border-b-gray-300 border-white/40 rounded-lg text-[#2e2d2d] font-bold tracking-wider text-sm md:text-lg hover:!bg-transparent">
                {offer.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
