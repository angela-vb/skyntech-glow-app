import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";

const Routine = () => {
  const navigate = useNavigate();

  const routineSteps = [
    { time: "Morning", steps: ["Cleanser", "Toner", "Serum", "Moisturizer", "Sunscreen"] },
    { time: "Evening", steps: ["Cleanser", "Toner", "Treatment", "Moisturizer"] },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
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
            <h1 className="text-2xl font-bold">GlowRoutine</h1>
            <p className="text-sm text-white/90">Build your perfect skincare routine</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Routine Builder */}
        {routineSteps.map((routine) => (
          <Card key={routine.time} className="p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">{routine.time} Routine</h3>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {routine.steps.map((step) => (
                <div 
                  key={step}
                  className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center text-center p-4 hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-white rounded-full mx-auto shadow-sm" />
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </div>
                </div>
              ))}
              
              <button className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center hover:bg-muted transition-colors border-2 border-dashed border-muted-foreground/30">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </button>
            </div>
          </Card>
        ))}

        <Button
          onClick={() => navigate("/market")}
          className="w-full bg-primary hover:bg-secondary text-white font-semibold"
          size="lg"
        >
          Shop Recommended Products
        </Button>
      </div>
    </div>
  );
};

export default Routine;
