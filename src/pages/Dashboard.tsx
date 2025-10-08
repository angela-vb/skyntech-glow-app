import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Camera, Calendar, Home, ShoppingBag, Stethoscope, User } from "lucide-react";
import doctorIllustration from "@/assets/doctor-illustration.png";
import userIcon from "@/assets/user-icon.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
            <p className="text-sm text-muted-foreground">Track your skin journey</p>
          </div>
          <img src={userIcon} alt="User" className="w-12 h-12 rounded-full" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Hero Card */}
        <Card className="bg-gradient-to-br from-primary to-secondary p-8 text-white rounded-3xl shadow-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  READY FOR YOUR SKIN CHECK?
                </h1>
                <p className="text-white/90">
                  Start your personalized skin analysis journey
                </p>
              </div>
              <Button
                onClick={() => navigate("/scan")}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                size="lg"
              >
                Start Scan
              </Button>
            </div>
            <img 
              src={doctorIllustration} 
              alt="Dermatologist" 
              className="w-48 h-48 object-contain hidden md:block"
            />
          </div>
        </Card>

        {/* Skin Progress */}
        <Card className="p-6 rounded-3xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground">Your Skin Progress</h3>
            <span className="text-2xl font-bold text-primary">80%</span>
          </div>
          <Progress value={80} className="h-3 mb-4" />
          <p className="text-sm text-muted-foreground">
            You're doing great! Keep up with your routine.
          </p>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card 
            className="p-6 text-center space-y-3 cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
            onClick={() => navigate("/scan")}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <p className="font-medium text-sm">DermaScan</p>
          </Card>

          <Card 
            className="p-6 text-center space-y-3 cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
            onClick={() => navigate("/routine")}
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6 text-secondary" />
            </div>
            <p className="font-medium text-sm">GlowRoutine</p>
          </Card>

          <Card 
            className="p-6 text-center space-y-3 cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
            onClick={() => navigate("/market")}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6 text-accent" />
            </div>
            <p className="font-medium text-sm">Market</p>
          </Card>

          <Card 
            className="p-6 text-center space-y-3 cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
            onClick={() => navigate("/consult")}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Stethoscope className="w-6 h-6 text-primary" />
            </div>
            <p className="font-medium text-sm">Consult</p>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex items-center justify-around max-w-7xl mx-auto py-3">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/scan")}
          >
            <Camera className="w-6 h-6" />
            <span className="text-xs">Scan</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/market")}
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs">Market</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/consult")}
          >
            <Stethoscope className="w-6 h-6" />
            <span className="text-xs">Expert</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
