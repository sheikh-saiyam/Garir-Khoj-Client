const FAQ = () => {
  const faqs = [
    {
      question: "What is GarirKhoj.com?",
      answer:
        "GarirKhoj.com is an online car rental platform that allows users to browse, rent, and manage car bookings easily. It offers a variety of vehicles, from budget-friendly options to luxury cars, ensuring a seamless rental experience.",
    },
    {
      question: "How does GarirKhoj.com work?",
      answer:
        "Users can browse available cars, select a preferred vehicle, choose rental dates, and complete the booking process. Once confirmed, they can pick up the car or have it delivered if the service is available.",
    },
    {
      question: "Do I need an account to rent a car?",
      answer:
        "Yes, an account is required to book a car. Users can register using their email and password or log in quickly with Google authentication.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, GarirKhoj.com ensures security through Firebase authentication and JWT protection, keeping user data and transactions safe.",
    },
    {
      question: "What types of cars are available for rent?",
      answer:
        "The platform offers a variety of cars, including sedans, SUVs, luxury vehicles, and electric cars, catering to different preferences and budgets.",
    },
    {
      question: "How do I book a car?",
      answer:
        "Users can search for cars using filters, select a car, enter the rental period, and confirm their booking. The booking details, including price and availability, will be displayed before final confirmation.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes, users can modify booking dates or cancel their reservation through the 'My Bookings' page before the rental period begins.",
    },
    {
      question: "How do I know if a car is available?",
      answer:
        "Each car listing includes an availability status, ensuring users can only book cars that are currently ready for rental.",
    },
    {
      question: "How much does renting a car cost?",
      answer:
        "The rental price varies based on the car model, rental duration, and location. Each car listing displays the daily rental price.",
    },
    {
      question: "Do I need to pay in advance?",
      answer:
        "Some cars require full or partial payment in advance, depending on the owner’s policy. Payment details are provided before confirming the booking.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Users can reach customer support via email, live chat on the website, or by calling the provided contact number for assistance.",
    },
  ];
  return (
    <>
      <div className="text-center mb-10">
        <button className="dark:text-primary dark:bg-white dark:border-none dark:font-bold text-base md:text-xl font-semibold py-3 px-6 rounded-full text-primary bg-red-100/60 border-primary border-2">
          F A Q ?
        </button>
        <p className="mt-6 font-medium mx-auto text-[#393939] text-sm md:text-lg max-w-3xl dark:text-white">
          Get all the answers you need about renting a car on GarirKhoj.com.
          From booking and pricing to cancellations and support, we’ve covered
          everything to ensure a smooth experience. Find the details below!
        </p>
      </div>
      {/* F A Q */}
      <div className="join join-vertical w-full dark:text-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border-base-300 border dark:border-2"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
