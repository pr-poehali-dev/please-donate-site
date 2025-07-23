import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;