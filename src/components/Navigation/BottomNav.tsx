import { NavLink } from "@/components/NavLink";
import { Home, Users, Briefcase, CheckSquare } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/clients", icon: Users, label: "Klienci" },
    { to: "/projects", icon: Briefcase, label: "Projekty" },
    { to: "/tasks", icon: CheckSquare, label: "Zadania" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center gap-1 text-muted-foreground transition-colors"
            activeClassName="text-primary"
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
