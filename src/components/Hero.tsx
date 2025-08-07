import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById('fleet');
    fleetSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 section-fade-in">
          <h1 className="hero-title">
            Reliable & Affordable Car Hire
            <span className="block text-accent">Services in Kenya</span>
          </h1>
          
          <p className="hero-subtitle mx-auto">
            Experience luxury and reliability with Mdrive Fleet Services. 
            Choose from our premium fleet of well-maintained vehicles for all your transportation needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToFleet}
              className="btn-primary text-lg px-10 py-4"
            >
              View Our Fleet
            </Button>
            
            <Button 
              variant="outline"
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/254727302890?text=Hi, I would like to know more about your car hire services.', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;