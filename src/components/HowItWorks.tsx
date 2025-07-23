import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;