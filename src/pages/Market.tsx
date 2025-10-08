import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Star } from "lucide-react";

const Market = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Gentle Cleanser",
      category: "Cleanser",
      price: "$24.99",
      rating: 4.8,
      recommended: true,
    },
    {
      id: 2,
      name: "Hydrating Serum",
      category: "Serum",
      price: "$39.99",
      rating: 4.9,
      recommended: true,
    },
    {
      id: 3,
      name: "Daily Moisturizer",
      category: "Moisturizer",
      price: "$29.99",
      rating: 4.7,
      recommended: true,
    },
    {
      id: 4,
      name: "Balancing Toner",
      category: "Toner",
      price: "$19.99",
      rating: 4.6,
      recommended: false,
    },
    {
      id: 5,
      name: "SPF 50 Sunscreen",
      category: "Sunscreen",
      price: "$34.99",
      rating: 4.9,
      recommended: true,
    },
    {
      id: 6,
      name: "Night Repair Cream",
      category: "Treatment",
      price: "$44.99",
      rating: 4.8,
      recommended: false,
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
            <h1 className="text-2xl font-bold">Market</h1>
            <p className="text-sm text-white/90">AI-recommended products for your skin</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search products..." 
            className="pl-10 bg-card rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Recommended", "Cleanser", "Serum", "Moisturizer", "Sunscreen"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              className="rounded-full whitespace-nowrap"
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="p-4 rounded-3xl space-y-4 hover:shadow-lg transition-shadow">
              {product.recommended && (
                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3 fill-current" />
                  AI Recommended
                </div>
              )}
              
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full shadow-sm" />
              </div>
              
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{product.price}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-secondary text-white"
                size="sm"
              >
                Add to Cart
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
