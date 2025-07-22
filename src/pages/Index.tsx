import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "EcoTech - Зелёные технологии будущего",
      description: "Революционная система солнечных панелей для городских квартир",
      image: "/img/0ca4ae8d-3951-4426-98c2-ba6024507089.jpg",
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
      image: "/img/4d835562-c991-41cd-8a62-c8c425e1e52e.jpg",
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
      image: "/img/0ca4ae8d-3951-4426-98c2-ba6024507089.jpg",
      raised: 1150000,
      goal: 1500000,
      backers: 567,
      daysLeft: 8,
      category: "Здоровье"
    }
  ];

  const faqItems = [
    {
      question: "Как работает краундфандинг на PleaseDonate?",
      answer: "Авторы проектов размещают свои идеи на платформе, указывают цель сбора и сроки. Пользователи могут поддержать понравившиеся проекты любой суммой. Если цель достигнута — средства переходят автору, если нет — деньги возвращаются спонсорам."
    },
    {
      question: "Какая комиссия платформы?",
      answer: "Мы берём 5% с успешно профинансированных проектов. Никаких скрытых платежей — вы платите только за результат."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы поддерживаем все популярные платёжные системы: банковские карты, СБП, Яндекс.Деньги, QIWI, PayPal и криптовалюты."
    },
    {
      question: "Могу ли я отменить поддержку проекта?",
      answer: "Да, вы можете отменить поддержку в любое время до завершения кампании. Средства будут возвращены на ваш счёт в течение 3-5 рабочих дней."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PleaseDonate
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Проекты</a>
              <a href="#create" className="text-gray-600 hover:text-primary transition-colors">Создать проект</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Воплощайте
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> мечты</span> в реальность
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Присоединяйтесь к крупнейшей краундфандинговой платформе России. 
                  Поддерживайте инновации или реализуйте собственные идеи с помощью сообщества.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти проекты
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать проект
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2,847</div>
                  <div className="text-sm text-gray-500">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">₽127M</div>
                  <div className="text-sm text-gray-500">Собрано средств</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tertiary">45,692</div>
                  <div className="text-sm text-gray-500">Участников</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/928f2371-9c04-4dbc-9acb-1027ded72677.jpg" 
                alt="Краундфандинг платформа" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Горячие проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Поддержите инновационные идеи и станьте частью будущего уже сегодня
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Собрано</span>
                      <span className="text-sm font-medium">
                        {Math.round((project.raised / project.goal) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(project.raised / project.goal) * 100} 
                      className="h-2"
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="font-bold text-primary">₽{project.raised.toLocaleString()}</div>
                      <div className="text-gray-500">из ₽{project.goal.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{project.backers}</div>
                      <div className="text-gray-500">спонсоров</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{project.daysLeft}</div>
                      <div className="text-gray-500">дней</div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Поддержать проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
              Посмотреть все проекты
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Create Project CTA */}
      <section id="create" className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Есть идея? Воплотите её с нами!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Создайте свой проект на PleaseDonate и получите поддержку тысяч единомышленников. 
              Это проще, чем кажется!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Icon name="Lightbulb" size={20} className="mr-2" />
                Создать проект
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  О платформе PleaseDonate
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Мы создали PleaseDonate, чтобы каждый мог реализовать свою мечту и найти поддержку. 
                  Наша платформа объединяет энтузиастов, инноваторов и тех, кто готов поддержать хорошие идеи.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  За 5 лет работы мы помогли реализовать тысячи проектов в различных сферах: 
                  от технологических стартапов до социальных инициатив.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">45,000+</div>
                  <div className="text-gray-600">Пользователей</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Icon name="Target" size={32} className="text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">89%</div>
                  <div className="text-gray-600">Успешных проектов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">100% Безопасность</h3>
                      <p className="text-gray-600">Все платежи защищены</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Быстрый запуск</h3>
                      <p className="text-gray-600">Создайте проект за 10 минут</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
                      <Icon name="Heart" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Поддержка 24/7</h3>
                      <p className="text-gray-600">Мы всегда рядом</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о работе платформы
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Новости и статьи
            </h2>
            <p className="text-xl text-gray-600">
              Следите за последними событиями в мире краундфандинга
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Новости</Badge>
                <CardTitle className="text-lg">Интеграция с международными платёжными системами</CardTitle>
                <CardDescription>15 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Теперь пользователи из любой страны могут поддерживать российские проекты...</p>
                <Button variant="link" className="p-0 h-auto text-primary mt-4">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Успехи</Badge>
                <CardTitle className="text-lg">Проект EcoTech привлёк 2 миллиона рублей</CardTitle>
                <CardDescription>12 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Стартап по производству экологичных солнечных панелей превысил изначальную цель в 2 раза...</p>
                <Button variant="link" className="p-0 h-auto text-primary mt-4">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Обучение</Badge>
                <CardTitle className="text-lg">Как создать успешный краундфандинговый проект</CardTitle>
                <CardDescription>10 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Пошаговое руководство от экспертов PleaseDonate для начинающих авторов проектов...</p>
                <Button variant="link" className="p-0 h-auto text-primary mt-4">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Есть вопросы или предложения? Мы всегда готовы помочь
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <CardTitle>Электронная почта</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">support@pleasedonate.ru</p>
                <p className="text-gray-300">press@pleasedonate.ru</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">+7 (495) 123-45-67</p>
                <p className="text-gray-300">Ежедневно, 9:00 - 21:00</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-tertiary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={28} className="text-white" />
                </div>
                <CardTitle>Социальные сети</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-300">@pleasedonate</p>
                <div className="flex justify-center space-x-4 pt-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Icon name="Twitter" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">PleaseDonate</h3>
              </div>
              <p className="text-gray-400">
                Краундфандинговая платформа для воплощения мечтаний в реальность
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Проекты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Все проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Искусство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Социальные проекты</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёрство</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 PleaseDonate. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;