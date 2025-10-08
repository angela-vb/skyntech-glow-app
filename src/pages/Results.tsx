import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, Droplets, Sun, Activity } from "lucide-react";
import faceScanResult from "@/assets/scan-complete.png";

const Results = () => {
  const navigate = useNavigate();

  const skinIssues = [
    { 
      name: "Acne", 
      level: "Moderate", 
      color: "bg-red-500",
      percentage: 45,
      icon: AlertCircle
    },
    { 
      name: "Dryness", 
      level: "Mild", 
      color: "bg-yellow-500",
      percentage: 25,
      icon: Droplets
    },
    { 
      name: "Dark Spots", 
      level: "Low", 
      color: "bg-orange-500",
      percentage: 15,
      icon: Sun
    },
    { 
      name: "Fine Lines", 
      level: "Minimal", 
      color: "bg-blue-500",
      percentage: 10,
      icon: Activity
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
        <div className="flex items-center gap-4 max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">AI Result</h1>
            <p className="text-sm text-white/90">Your skin analysis is complete</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6 -mt-4">
        {/* Result Image */}
        <Card className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="relative max-w-sm mx-auto">
            <img 
              src={faceScanResult} 
              alt="Scan Result" 
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </Card>

        {/* Detected Issues */}
        <Card className="p-6 rounded-3xl space-y-4">
          <h2 className="text-xl font-bold text-foreground mb-4">Detected Skin Issues</h2>
          
          {skinIssues.map((issue) => {
            const Icon = issue.icon;
            return (
              <div key={issue.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${issue.color} rounded-full flex items-center justify-center text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{issue.name}</p>
                      <p className="text-sm text-muted-foreground">{issue.level}</p>
                    </div>
                  </div>
                  <span className="font-bold text-foreground">{issue.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${issue.color}`}
                    style={{ width: `${issue.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate("/routine")}
            className="w-full bg-primary hover:bg-secondary text-white font-semibold"
            size="lg"
          >
            Build Your GlowRoutine
          </Button>
          <Button
            onClick={() => navigate("/consult")}
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10"
            size="lg"
          >
            Book a Dermatologist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
