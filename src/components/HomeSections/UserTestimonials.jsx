import Marquee from "react-fast-marquee";

const UserTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Daniel Macron",
      role: "App Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41A81cAVOwJ6e58SZMxg_Fh-VSwnYIWb3Bw&s",
      testimonial:
        "Seamless Booking and Pickup! I rented a car from Carola, and the process was incredibly smooth. The online booking system is user-friendly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Parker",
      role: "UI Designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2wAyL3dsrCCA8y4UumyMcSCeRnGuZILBlcTgdPxIrTo9yWfNz4D-3mHefcROhsPdiqo&usqp=CAU",
      testimonial:
        "I loved the experience of renting a car from Carola. The cars are clean, well-maintained, and perfect for my needs.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "Business Analyst",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      testimonial:
        "GarirKhoj.com is my go-to for renting cars. Excellent customer service and amazing prices. Highly recommended!",
      rating: 5,
    },
    {
      id: 5,
      name: "Sarah Turner",
      role: "Marketing Manager",
      image:
        "https://static.vecteezy.com/system/resources/previews/005/965/035/non_2x/business-woman-female-user-icon-free-vector.jpg",
      testimonial:
        "The best car rental service I’ve ever used. Smooth process, fantastic customer support, and high-quality vehicles.",
      rating: 5,
    },
    {
      id: 6,
      name: "James Smith",
      role: "Freelancer",
      image: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      testimonial:
        "Booking was super easy, and the pickup was right on time. I’m definitely using Carola for my future rentals.",
      rating: 5,
    },
  ];
  return (
    <div className="w-11/12 mx-auto max-w-[1400px] py-4 pb-20">
      <div className="mx-auto text-center">
        <button className="text-base md:text-xl font-semibold py-3 px-6 rounded-full text-primary bg-red-100/60 border-primary border-2">
          Testimonials
        </button>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 mb-6 tracking-wider">
          Love From Clients
        </h1>
      </div>
      <div className="border rounded-2xl p-6">
        <Marquee>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white w-[400px] mr-6 h-full gird place-content-stretch p-6 rounded-lg shadow border"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-md text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex text-yellow-500">
                  {"⭐".repeat(testimonial.rating)}
                  {"⭐".repeat(5 - testimonial.rating).replace(/⭐/g, "☆")}
                </div>
              </div>

              <p className="mt-4 text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default UserTestimonials;
