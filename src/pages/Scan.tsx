import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import faceScan from "@/assets/face-scan.png";

const Scan = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      navigate("/results");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-card/80"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">DermaScan</h1>
          <p className="text-sm text-muted-foreground">AI Skin Analysis</p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Instructions */}
        <Card className="p-6 rounded-3xl text-center">
          <p className="text-foreground">
            <strong>Hold your phone at eye level</strong> and make sure your face is well-lit and within the frame
          </p>
        </Card>

        {/* Scan Frame */}
        <Card className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            {/* Scanning Animation */}
            {scanning && (
              <div className="absolute inset-0 bg-primary/20 animate-pulse rounded-3xl z-10" />
            )}
            
            {/* Face Preview */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-primary">
              <img 
                src={faceScan} 
                alt="Face Scan" 
                className="w-full h-full object-cover"
              />
              
              {/* Corner Markers */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-secondary" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-secondary" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-secondary" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-secondary" />

              {scanning && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                  <div className="text-white text-xl font-bold animate-pulse">
                    Analyzing...
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Scan Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleScan}
            disabled={scanning}
            className="w-20 h-20 rounded-full bg-primary hover:bg-secondary text-white shadow-2xl"
            size="icon"
          >
            <Camera className="w-8 h-8" />
          </Button>
        </div>

        {scanning && (
          <p className="text-center text-muted-foreground animate-pulse">
            Please hold still while we analyze your skin...
          </p>
        )}
      </div>
    </div>
  );
};

export default Scan;
