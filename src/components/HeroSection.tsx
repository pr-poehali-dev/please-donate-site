import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;