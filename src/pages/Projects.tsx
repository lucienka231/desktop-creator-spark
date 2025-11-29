import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    { id: 1, name: "Kampania Social Media Q1", client: "TechCorp", status: "W trakcie", progress: 75, deadline: "15.03.2025" },
    { id: 2, name: "Redesign strony www", client: "Fashion Brand", status: "W trakcie", progress: 45, deadline: "30.03.2025" },
    { id: 3, name: "SEO Optimization", client: "FoodDelivery", status: "Planowanie", progress: 20, deadline: "10.04.2025" },
    { id: 4, name: "Email Marketing", client: "EcoStore", status: "Ukończony", progress: 100, deadline: "28.02.2025" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "W trakcie":
        return "bg-primary/20 text-primary";
      case "Planowanie":
        return "bg-yellow-500/20 text-yellow-500";
      case "Ukończony":
        return "bg-green-500/20 text-green-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-pink p-6 pb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-white">Projekty</h1>
          <Button size="sm" className="bg-white text-primary hover:bg-white/90">
            <Plus className="h-4 w-4 mr-1" />
            Nowy
          </Button>
        </div>
        <p className="text-white/80">Zarządzaj projektami i kampaniami</p>
      </div>

      {/* Projects List */}
      <div className="px-4 -mt-4 space-y-3">
        {projects.map((project) => (
          <Card key={project.id} className="border-border bg-card shadow-card">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Postęp</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-pink transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Deadline: {project.deadline}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
