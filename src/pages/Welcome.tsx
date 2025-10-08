import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Camera, Calendar, Stethoscope } from "lucide-react";
import welcomeDoctor from "@/assets/welcome-doctor.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-4xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-scale-in">
          <img 
            src={welcomeDoctor} 
            alt="Dermatologist" 
            className="w-64 h-auto mx-auto drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Welcome to SkynTech!
          </h1>
          <p className="text-xl text-muted-foreground">
            Your personalized skincare journey starts here
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card 
            className="p-6 space-y-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl group"
            onClick={() => navigate("/scan")}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-foreground">Start Skin Scan</h3>
              <p className="text-sm text-muted-foreground">
                Analyze your skin with AI-powered technology
              </p>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-secondary text-white font-medium"
              size="lg"
            >
              Scan Now
            </Button>
          </Card>

          <Card 
            className="p-6 space-y-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl group"
            onClick={() => navigate("/routine")}
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors">
              <Calendar className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-foreground">View Routine</h3>
              <p className="text-sm text-muted-foreground">
                Build your personalized skincare routine
              </p>
            </div>
            <Button 
              className="w-full bg-secondary hover:bg-primary text-white font-medium"
              size="lg"
            >
              Build Routine
            </Button>
          </Card>

          <Card 
            className="p-6 space-y-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl group"
            onClick={() => navigate("/consult")}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
              <Stethoscope className="w-8 h-8 text-accent" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-foreground">Consult Expert</h3>
              <p className="text-sm text-muted-foreground">
                Connect with certified dermatologists
              </p>
            </div>
            <Button 
              className="w-full bg-accent hover:bg-secondary text-white font-medium"
              size="lg"
            >
              Book Now
            </Button>
          </Card>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            size="lg"
            className="px-12"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
