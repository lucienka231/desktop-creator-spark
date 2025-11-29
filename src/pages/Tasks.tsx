import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Przygotować propozycję kampanii", project: "TechCorp", priority: "Wysoki", completed: false },
    { id: 2, title: "Spotkanie z klientem", project: "Fashion Brand", priority: "Średni", completed: false },
    { id: 3, title: "Analiza konkurencji", project: "FoodDelivery", priority: "Niski", completed: true },
    { id: 4, title: "Raport miesięczny", project: "EcoStore", priority: "Wysoki", completed: false },
    { id: 5, title: "Optymalizacja grafik", project: "TechCorp", priority: "Średni", completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Wysoki":
        return "text-red-500";
      case "Średni":
        return "text-yellow-500";
      case "Niski":
        return "text-green-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-pink p-6 pb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-white">Zadania</h1>
          <Button size="sm" className="bg-white text-primary hover:bg-white/90">
            <Plus className="h-4 w-4 mr-1" />
            Dodaj
          </Button>
        </div>
        <p className="text-white/80">Lista zadań do wykonania</p>
      </div>

      {/* Tasks List */}
      <div className="px-4 -mt-4 space-y-3">
        {tasks.map((task) => (
          <Card key={task.id} className="border-border bg-card shadow-card">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <h3 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-muted-foreground">{task.project}</span>
                    <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
