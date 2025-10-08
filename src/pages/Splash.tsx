import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent animate-fade-in">
      <div className="text-center space-y-6 animate-scale-in">
        <img 
          src={logo} 
          alt="SkynTech Logo" 
          className="w-48 h-48 mx-auto drop-shadow-2xl"
        />
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            SKYNTECH
          </h1>
          <p className="text-xl text-white/90 font-light tracking-widest">
            SCAN. KNOW. GLOW.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
