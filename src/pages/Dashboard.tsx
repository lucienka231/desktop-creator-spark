import { StatCard } from "@/components/Dashboard/StatCard";
import { Users, Briefcase, TrendingUp, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-pink p-6 pb-12">
        <h1 className="text-3xl font-bold text-white mb-2">CRM Dashboard</h1>
        <p className="text-white/80">Witaj w panelu zarządzania</p>
      </div>

      {/* Stats Grid */}
      <div className="px-4 -mt-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            title="Klienci"
            value="48"
            icon={Users}
            trend="+12% w tym miesiącu"
          />
          <StatCard
            title="Projekty"
            value="23"
            icon={Briefcase}
            trend="8 aktywnych"
          />
          <StatCard
            title="Przychód"
            value="124K"
            icon={DollarSign}
            trend="+18% vs poprzedni"
          />
          <StatCard
            title="Konwersja"
            value="67%"
            icon={TrendingUp}
            trend="+5% wzrost"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-lg border border-border p-4 shadow-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Ostatnia aktywność</h2>
          <div className="space-y-3">
            {[
              { client: "TechCorp Sp. z o.o.", action: "Nowa kampania", time: "2 godz. temu" },
              { client: "Fashion Brand", action: "Zaktualizowano projekt", time: "4 godz. temu" },
              { client: "FoodDelivery App", action: "Spotkanie zaplanowane", time: "6 godz. temu" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.client}</p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
