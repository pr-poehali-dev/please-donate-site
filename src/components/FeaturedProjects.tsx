import ProjectCard, { Project } from "./ProjectCard";

const featuredProjects: Project[] = [
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

const FeaturedProjects = () => {
  return (
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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;