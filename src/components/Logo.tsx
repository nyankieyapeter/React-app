import { Car } from 'lucide-react';

const Logo = ({ className = "h-10 w-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-lg ${className}`}>
      <Car className="text-white w-6 h-6" />
    </div>
  );
};

export default Logo;