import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;