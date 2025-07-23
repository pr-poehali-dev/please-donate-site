import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  raised: number;
  goal: number;
  backers: number;
  daysLeft: number;
  category: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const progress = Math.round((project.raised / project.goal) * 100);
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Нет изображения</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-white text-gray-900">
          {project.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">
              {project.raised.toLocaleString('ru-RU')} ₽
            </span>
            <span className="text-gray-500">
              {project.goal.toLocaleString('ru-RU')} ₽
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{project.backers} спонсоров</span>
          <span>{project.daysLeft} дней осталось</span>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90">
          Поддержать проект
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
export type { Project };