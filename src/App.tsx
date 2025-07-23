import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

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

const projects: Project[] = [
  {
    id: 1,
    title: "EcoTech - Зелёные технологии будущего",
    description: "Революционная система солнечных панелей для городских квартир",
    raised: 850000,
    goal: 1200000,
    backers: 342,
    daysLeft: 12,
    category: "Технологии",
    image: "/img/0ca4ae8d-3951-4426-98c2-ba6024507089.jpg"
  },
  {
    id: 2,
    title: "Арт-студия для детей",
    description: "Создаём креативное пространство для развития детского творчества",
    raised: 320000,
    goal: 500000,
    backers: 189,
    daysLeft: 25,
    category: "Образование",
    image: "/img/4d835562-c991-41cd-8a62-c8c425e1e52e.jpg"
  },
  {
    id: 3,
    title: "Умный дом для пожилых",
    description: "IoT-система безопасности и комфорта для старшего поколения",
    raised: 1150000,
    goal: 1500000,
    backers: 567,
    daysLeft: 8,
    category: "Здоровье",
    image: "/img/0ca4ae8d-3951-4426-98c2-ba6024507089.jpg"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
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
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">₽{project.raised.toLocaleString()}</span>
            <span className="text-gray-500">из ₽{project.goal.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>{project.backers} спонсоров</span>
          <span>{project.daysLeft} дней осталось</span>
        </div>
        
        <Button className="w-full">Поддержать проект</Button>
      </CardContent>
    </Card>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={32} className="text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">CrowdFund</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Проекты
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                Как это работает
              </a>
              <a href="#create" className="text-gray-700 hover:text-blue-600 transition-colors">
                Создать проект
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Воплощайте идеи в жизнь вместе
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Краудфандинговая платформа для реализации ваших мечтаний
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Найти проекты
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Создать проект
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные проекты
            </h2>
            <p className="text-lg text-gray-600">
              Поддержите проекты, которые изменят мир к лучшему
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-gray-600">
              Простые шаги к успеху вашего проекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Создайте проект</h3>
              <p className="text-gray-600">
                Опишите свою идею, установите цель и сроки
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Найдите поддержку</h3>
              <p className="text-gray-600">
                Привлекайте спонсоров и развивайте сообщество
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Достигните цели</h3>
              <p className="text-gray-600">
                Получите финансирование и воплотите идею в жизнь
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Project CTA */}
      <section id="create" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы запустить свой проект?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Присоединяйтесь к тысячам успешных проектов на нашей платформе
          </p>
          <Button size="lg" variant="secondary">
            Создать проект
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">CrowdFund</span>
              </div>
              <p className="text-gray-400">
                Платформа для воплощения идей в жизнь через краудфандинг
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CrowdFund. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;