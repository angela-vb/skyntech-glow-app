import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Star, Clock, MapPin } from "lucide-react";

const Consult = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Tina Young, MD",
      specialty: "Dermatology & Cosmetics",
      rating: 4.9,
      reviews: 234,
      experience: "15 years",
      location: "New York, NY",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Derek Chen, DPDS",
      specialty: "Clinical Dermatology",
      rating: 4.8,
      reviews: 189,
      experience: "12 years",
      location: "Los Angeles, CA",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Sarah Mitchell",
      specialty: "Acne & Skin Treatments",
      rating: 4.9,
      reviews: 312,
      experience: "18 years",
      location: "Chicago, IL",
      available: false,
    },
    {
      id: 4,
      name: "Dr. Alex Rivera",
      specialty: "Cosmetic Dermatology",
      rating: 4.7,
      reviews: 156,
      experience: "10 years",
      location: "Miami, FL",
      available: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Consult an Expert</h1>
            <p className="text-sm text-white/90">Get professional advice from certified dermatologists</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search doctors..." 
            className="pl-10 bg-card rounded-full"
          />
        </div>

        {/* Doctors List */}
        <div className="grid gap-4 md:grid-cols-2">
          {doctors.map((doctor) => (
            <Card 
              key={doctor.id} 
              className="p-6 rounded-3xl space-y-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/consult/${doctor.id}`)}
            >
              <div className="flex gap-4">
                {/* Doctor Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/30 rounded-full" />
                </div>
                
                {/* Doctor Info */}
                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-muted-foreground">({doctor.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <Button 
                className={`w-full ${
                  doctor.available 
                    ? 'bg-primary hover:bg-secondary text-white' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
                disabled={!doctor.available}
              >
                {doctor.available ? 'Book Consultation' : 'Unavailable'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consult;
