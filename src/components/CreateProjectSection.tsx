import { Button } from "@/components/ui/button";

const CreateProjectSection = () => {
  return (
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
  );
};

export default CreateProjectSection;