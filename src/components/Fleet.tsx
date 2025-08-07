import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import car1 from "@/assets/200_series.png";
import car2 from "@/assets/Mercedes_E250-removebg-preview.png";
import car3 from "@/assets/TX-removebg-preview.png";
import car4 from "@/assets/Harrier.png";
import car5 from "@/assets/Crown-removebg-preview.png";
import car6 from "@/assets/Cx5-removebg-preview.png";
import car7 from "@/assets/Toyota_Noah.png";
import car8 from "@/assets/Xtrail-removebg-preview.png";
import car9 from "@/assets/Mark_X-removebg-preview.png";
import car10 from "@/assets/Premio.png";
import car11 from "@/assets/Aliyon-removebg-preview.png";
import car12 from "@/assets/Mazda_Demio.png";


interface Vehicle {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Lc200 V8",
    description: "A powerful and luxurious 4x4 SUV built for off-road dominance, business trips and executive comfort.",
    price: 35000,
    image: car1,
    features: ["Automatic", "AC", "GPS", "Leather Seats", "7 Seater"]
  },
  {
    id: 2,
    name: "Mercedes E250",
    description: "Executive-class sedan with unmatched elegance, smooth performance, and prestige.",
    price: 21000,
    image: car2,
    features: ["4WD", "7 Seater", "AC", "GPS", "Luggage Space"]
  },
  {
    id: 3,
    name: "Prado J150",
    description: "Reliable mid-size SUV with rugged performance and upscale features for all terrains.",
    price: 15000,
    image: car3,
    features: ["Manual", "AC", "Bluetooth", "Economy", "5 Seater"]
  },
  {
    id: 4,
    name: "Toyota Harrier",
    description: "A stylish crossover SUV blending luxury, comfort, and advanced safety technologies.",
    price: 9000,
    image: car4,
    features: ["Convertible", "Sport Mode", "Premium Sound", "Manual", "5 Seater"]
  },
  {
    id: 5,
    name: "Toyota Crown",
    description: "Sophisticated luxury sedan offering premium ride quality needs and refined power.",
    price: 9000,
    image: car5,
    features: ["AWD", "5 Seater", "AC", "Safety Package"]
  },
  {
    id: 6,
    name: "Mazda Cx5",
    description: "Sleek and sporty compact SUV designed for performance and modern lifestyle.",
    price: 9000,
    image: car6,
    features: ["Luxury", "Automatic", "Premium Interior", "GPS", "5 Seater"]
  },
  {
    id: 7,
    name: "Toyota Noah",
    description: "Spacious and practical 7-seater van, ideal for families or group transport.",
    price: 8000,
    image: car7,
    features: ["AWD", "7 Seater", "Premium Sound", "Navigation", "Luxury"]
  },
  {
    id: 8,
    name: "Nissan Xtrail",
    description: "A rugged yet refined crossover SUV perfect for both city commutes and adventures.",
    price: 8000,
    image: car8,
    features: ["Automatic", "Quattro AWD", "Premium Interior", "GPS", "5 Seater"]
  },
  {
    id: 9,
    name: "Mark X",
    description: "Sporty and elegant executive sedan with powerful performance and modern design.",
    price: 7000,
    image: car9,
    features: ["AWD", "5 Seater", "Terrain Response", "Premium Audio"]
  },
  {
    id: 10,
    name: "Toyota Premio",
    description: "Comfortable and fuel-efficient sedan ideal for business or family use.",
    price: 6000,
    image: car10,
    features: ["Automatic", "AC", "Bluetooth", "Safety Features", "5 Seater"]
  },
  {
    id: 11,
    name: "Toyota Allion",
    description: "Balanced and stylish sedan offering great performance and excellent economy.",
    price: 4000,
    image: car11,
    features: ["Automatic", "AC", "Bluetooth", "Safety Features", "5 Seater"]
  },
  {
    id: 12,
    name: "Mazda Demio",
    description: "A compact hatchback known for its agility, efficiency, and easy city maneuverability.",
    price: 3500,
    image: car12,
    features: ["Automatic", "AC", "Bluetooth", "Safety Features", "5 Seater"]
  }
  
];

const Fleet = () => {
  const openWhatsApp = (carName: string) => {
    const message = `Hi, I'm interested in hiring the ${carName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/254727302890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="fleet" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-accent">Fleet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of well-maintained vehicles, each carefully selected for comfort, reliability, and style.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card
              key={vehicle.id}
              className="fleet-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="fleet-card-image"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{vehicle.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-accent">
                        KSH {vehicle.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">/day</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => openWhatsApp(vehicle.name)}
                    className="btn-whatsapp w-full"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967...z" />
                    </svg>
                    Hire Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
