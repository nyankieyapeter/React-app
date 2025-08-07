import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Kimani",
    role: "Business Executive",
    content: "Mdrive Fleet Services provided exceptional service for my business trip to Mombasa. The vehicle was immaculate and the driver was professional. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "John Mwangi",
    role: "Tourist",
    content: "Amazing experience! We hired their Land Cruiser for our safari trip and it was perfect. Clean, comfortable, and reliable. Will definitely use them again.",
    rating: 5
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    role: "Wedding Planner",
    content: "Professional and reliable service. They provided luxury cars for our client's wedding and everything went smoothly. Great communication throughout.",
    rating: 5
  },
  {
    id: 4,
    name: "David Ochieng",
    role: "Corporate Manager",
    content: "I've been using Mdrive for our company's transportation needs for over a year. Consistent quality service and competitive pricing. Excellent fleet!",
    rating: 5
  },
  {
    id: 5,
    name: "Mary Akinyi",
    role: "Event Organizer",
    content: "Fantastic service for our corporate event. Multiple vehicles, all on time, all clean. The team was very accommodating to our specific requirements.",
    rating: 5
  },
  {
    id: 6,
    name: "Peter Kamau",
    role: "Family Traveler",
    content: "Perfect for our family vacation. The SUV was spacious, clean, and fuel-efficient. Fair pricing and excellent customer service from start to finish.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
    setCurrentIndex((prevIndex) => prevIndex >= maxIndex ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
    setCurrentIndex((prevIndex) => prevIndex <= 0 ? maxIndex : prevIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-accent' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-4 ${
                    itemsPerPage === 1 ? 'w-full' : 
                    itemsPerPage === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <Card className="testimonial-card h-full">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 rounded-full bg-white shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rounded-full bg-white shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex) 
                    ? 'bg-accent scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;