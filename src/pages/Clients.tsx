import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Mail, Phone } from "lucide-react";

const Clients = () => {
  const clients = [
    { id: 1, name: "TechCorp Sp. z o.o.", email: "kontakt@techcorp.pl", phone: "+48 123 456 789", projects: 5, status: "Aktywny" },
    { id: 2, name: "Fashion Brand", email: "info@fashionbrand.pl", phone: "+48 987 654 321", projects: 3, status: "Aktywny" },
    { id: 3, name: "FoodDelivery App", email: "hello@fooddelivery.pl", phone: "+48 555 444 333", projects: 2, status: "Potencjalny" },
    { id: 4, name: "EcoStore", email: "contact@ecostore.pl", phone: "+48 666 777 888", projects: 4, status: "Aktywny" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-pink p-6 pb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-white">Klienci</h1>
          <Button size="sm" className="bg-white text-primary hover:bg-white/90">
            <Plus className="h-4 w-4 mr-1" />
            Dodaj
          </Button>
        </div>
        <p className="text-white/80">Zarządzaj bazą klientów</p>
      </div>

      {/* Clients List */}
      <div className="px-4 -mt-4 space-y-3">
        {clients.map((client) => (
          <Card key={client.id} className="border-border bg-card shadow-card">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{client.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    client.status === "Aktywny" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {client.status}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{client.projects} projektów</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Clients;
