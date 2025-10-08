import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Award } from "lucide-react";
import drTina from "@/assets/dr-tina.png";
import drDerek from "@/assets/dr-derek.png";
import drAlex from "@/assets/dr-alex.png";

const Consult = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Tina Martinez",
      specialty: "Acne & Anti-Aging",
      rating: 4.9,
      experience: "12 years",
      image: drTina,
      available: true,
    },
    {
      id: 2,
      name: "Dr. Derek Chen",
      specialty: "Skin Cancer & Dermatology",
      rating: 5.0,
      experience: "15 years",
      image: drDerek,
      available: true,
    },
    {
      id: 3,
      name: "Dr. Alex Rivera",
      specialty: "Cosmetic Dermatology",
      rating: 4.8,
      experience: "10 years",
      image: drAlex,
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Consult an Expert</h1>
          <p className="text-muted-foreground">
            Connect with certified dermatologists for personalized advice
          </p>
        </div>

        {/* Doctors List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card 
              key={doctor.id}
              className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 rounded-3xl group"
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {doctor.available && (
                  <div className="absolute top-0 right-1/4 w-4 h-4 bg-primary rounded-full ring-2 ring-card" />
                )}
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl text-foreground">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-medium">{doctor.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.experience}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  Certified
                </Badge>
                {doctor.available ? (
                  <Badge className="bg-primary text-white text-xs">
                    Available Now
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">
                    Busy
                  </Badge>
                )}
              </div>

              <Button 
                className="w-full bg-primary hover:bg-secondary text-white font-medium"
                size="lg"
                disabled={!doctor.available}
              >
                {doctor.available ? "Book Consultation" : "Not Available"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Why Consult Our Experts?
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Board-certified dermatologists with years of experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Personalized treatment plans based on your AI scan results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Secure video consultations from the comfort of your home</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Follow-up support and routine adjustments</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Consult;
