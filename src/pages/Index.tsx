import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "EcoTech - Зелёные технологии будущего",
      description: "Революционная система солнечных панелей для городских квартир",
      raised: 850000,
      goal: 1200000,
      backers: 342,
      daysLeft: 12,
      category: "Технологии"
    },
    {
      id: 2,
      title: "Арт-студия для детей",
      description: "Создаём креативное пространство для развития детского творчества",
      raised: 320000,
      goal: 500000,
      backers: 189,
      daysLeft: 25,
      category: "Образование"
    },
    {
      id: 3,
      title: "Умный дом для пожилых",
      description: "IoT-система безопасности и комфорта для старшего поколения",
      raised: 1150000,
      goal: 1500000,
      backers: 567,
      daysLeft: 8,
      category: "Здоровье"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary">
                PleaseDonate
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Проекты</a>
              <a href="#create" className="text-gray-600 hover:text-primary transition-colors">Создать проект</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Воплощайте идеи в жизнь
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Платформа краундфандинга для реализации ваших проектов. 
              Найдите поддержку для своих идей или поддержите интересные проекты других.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Создать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Просмотреть проекты
              </Button>
            </div>
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
            {featuredProjects.map((project) => {
              const progress = Math.round((project.raised / project.goal) * 100);
              
              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
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
            })}
          </div>
        </div>
      </section>

      {/* Create Project Section */}
      <section id="create" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Есть идея? Воплотите её в жизнь!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Создайте свой проект на нашей платформе и найдите людей, 
              которые поверят в вашу идею и поддержат её финансово.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Создать проект
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-gray-600">
              Простой процесс от идеи до реализации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Lightbulb" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Создайте проект</h3>
              <p className="text-gray-600">
                Опишите свою идею, установите цель сбора и сроки реализации
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Найдите поддержку</h3>
              <p className="text-gray-600">
                Расскажите о проекте друзьям и привлеките спонсоров через социальные сети
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Rocket" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Воплотите идею</h3>
              <p className="text-gray-600">
                Получите средства и реализуйте свой проект, делясь прогрессом с сообществом
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">PleaseDonate</span>
              </div>
              <p className="text-gray-400">
                Платформа для воплощения идей через краундфандинг
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Проекты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Популярные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новые</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Искусство</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">События</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёры</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PleaseDonate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;