import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";
import { useState } from "react";
import cleanser from "@/assets/cleanser.png";
import serum from "@/assets/serum.png";
import toner from "@/assets/toner.png";
import moisturizer from "@/assets/moisturizer.png";
import sunscreen from "@/assets/sunscreen.png";

const Market = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Cleanser", "Serum", "Toner", "Moisturizer", "Sunscreen"];

  const products = [
    {
      id: 1,
      name: "Gentle Cleanser",
      category: "Cleanser",
      price: "$24.99",
      rating: 4.8,
      image: cleanser,
      recommended: true,
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      category: "Serum",
      price: "$39.99",
      rating: 4.9,
      image: serum,
      recommended: true,
    },
    {
      id: 3,
      name: "Hydrating Toner",
      category: "Toner",
      price: "$19.99",
      rating: 4.7,
      image: toner,
      recommended: false,
    },
    {
      id: 4,
      name: "Daily Moisturizer",
      category: "Moisturizer",
      price: "$29.99",
      rating: 4.9,
      image: moisturizer,
      recommended: true,
    },
    {
      id: 5,
      name: "SPF 50 Sunscreen",
      category: "Sunscreen",
      price: "$34.99",
      rating: 5.0,
      image: sunscreen,
      recommended: true,
    },
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Skincare Market</h1>
          <p className="text-muted-foreground">AI-recommended products for your skin</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search products..." 
            className="pl-10 bg-card"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id}
              className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 rounded-3xl group cursor-pointer hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-2xl bg-background p-4"
                />
                {product.recommended && (
                  <Badge className="absolute top-2 right-2 bg-primary text-white">
                    AI Recommended
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
                  <span className="text-primary font-bold">{product.price}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>

                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-secondary text-white font-medium group-hover:bg-secondary"
                size="lg"
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
