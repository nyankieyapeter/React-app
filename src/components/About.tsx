import { Shield, Clock, Award, Users, Star, CheckCircle } from 'lucide-react';
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured Fleet",
      description: "All our vehicles are comprehensively insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and roadside assistance"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Well-maintained, regularly serviced vehicles from top brands"
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Experienced team committed to exceptional customer service"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Premium Vehicles" },
    { number: "5", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  const reasons = [
    "Transparent pricing with no hidden fees",
    "Flexible rental terms to suit your needs",
    "Free delivery and pickup within Nairobi",
    "Professional and courteous service",
    "Well-maintained and clean vehicles",
    "Competitive rates in the market"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Mdrive Fleet Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for premium car hire services in Kenya. 
            We provide reliable, comfortable, and affordable transportation solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Choose <span className="text-accent">Mdrive Fleet?</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Mdrive Fleet Services, we understand that your transportation needs are unique. 
              That's why we've built our reputation on providing exceptional service, 
              premium vehicles, and unmatched customer satisfaction.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-accent" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Customer First Approach
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Our commitment to excellence has made us one of Kenya's most trusted 
                  car hire services. We don't just rent cars, we provide peace of mind."
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-primary">— Mdrive Fleet Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;