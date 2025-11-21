import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const drinks = [
    { name: "Signature Latte", description: "Smooth espresso with steamed milk and latte art", price: "₹180" },
    { name: "Cold Brew", description: "Slow-steeped cold coffee with a smooth finish", price: "₹200" },
    { name: "Cappuccino", description: "Classic Italian espresso with frothy milk", price: "₹160" },
    { name: "Mocha", description: "Rich chocolate and espresso blend", price: "₹190" },
    { name: "Iced Americano", description: "Chilled espresso with water and ice", price: "₹150" },
    { name: "Green Tea", description: "Premium green tea leaves, hot or iced", price: "₹120" },
  ];

  const desserts = [
    { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "₹250" },
    { name: "Chocolate Brownie", description: "Rich, fudgy brownie with vanilla ice cream", price: "₹220" },
    { name: "Red Velvet Cake", description: "Moist red velvet with cream cheese frosting", price: "₹240" },
    { name: "Cheesecake", description: "New York style cheesecake with berry compote", price: "₹280" },
    { name: "Apple Pie", description: "Warm apple pie with cinnamon and vanilla ice cream", price: "₹230" },
    { name: "Panna Cotta", description: "Silky Italian custard with seasonal fruits", price: "₹260" },
  ];

  const food = [
    { name: "Club Sandwich", description: "Triple-decker with grilled chicken and fresh vegetables", price: "₹320" },
    { name: "Margherita Pizza", description: "Fresh mozzarella, basil, and tomato sauce", price: "₹380" },
    { name: "Pasta Alfredo", description: "Creamy fettuccine with parmesan and herbs", price: "₹350" },
    { name: "Caesar Salad", description: "Crisp romaine with classic Caesar dressing", price: "₹280" },
    { name: "Paneer Tikka", description: "Grilled cottage cheese with mint chutney", price: "₹300" },
    { name: "Bruschetta", description: "Toasted bread with fresh tomatoes and basil", price: "₹240" },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Menu</h1>
          <p className="text-xl text-muted-foreground">
            Crafted with care, served with passion
          </p>
        </div>

        <Tabs defaultValue="drinks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>

          <TabsContent value="drinks" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {drinks.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-semibold text-lg">{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {desserts.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-semibold text-lg">{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {food.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-semibold text-lg">{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-8 bg-secondary/30 rounded-2xl text-center">
          <p className="text-muted-foreground text-lg">
            All prices are inclusive of taxes. Menu items and prices are subject to change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
