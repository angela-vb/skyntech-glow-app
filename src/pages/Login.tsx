import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <img 
            src={logo} 
            alt="SkynTech Logo" 
            className="w-32 h-32 mx-auto"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to SkynTech
            </h1>
            <p className="text-sm text-muted-foreground tracking-wider">
              SCAN. KNOW. GLOW.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email or Username
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-card pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="text-primary hover:text-secondary transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-medium"
            size="lg"
          >
            Sign In
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <button
              type="button"
              className="text-primary hover:text-secondary font-medium transition-colors"
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
