import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О корпорации', icon: 'Building2' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'leadership', label: 'Руководство', icon: 'Users' },
  ];

  const newsItems = [
    {
      date: '15 ноября 2025',
      title: 'Расширение бизнеса на восточное побережье',
      content: 'Kingsman успешно завершила сделку по приобретению нескольких премиальных объектов недвижимости.'
    },
    {
      date: '8 ноября 2025',
      title: 'Новое партнёрство с Diamond Casino',
      content: 'Корпорация заключила эксклюзивное соглашение о сотрудничестве с крупнейшим казино города.'
    },
    {
      date: '1 ноября 2025',
      title: 'Благотворительный вечер в Vinewood',
      content: 'Руководство Kingsman организовало благотворительное мероприятие для элиты Лос-Сантоса.'
    }
  ];

  const leaders = [
    {
      name: 'Maksim Hartford',
      position: 'CEO & Основатель',
      description: 'Визионер и стратег, создавший империю Kingsman с нуля. Контролирует все ключевые направления бизнеса.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maksim&backgroundColor=d4af37'
    },
    {
      name: 'Alexie Morozov',
      position: 'Co-Founder & COO',
      description: 'Отвечает за операционную деятельность и международные связи корпорации. Правая рука CEO.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexie&backgroundColor=8b0000'
    }
  ];

  const departments = [
    {
      name: 'Viktor Sokolov',
      position: 'Глава отдела безопасности',
      description: 'Обеспечивает защиту всех активов и интересов корпорации.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Viktor&backgroundColor=1a1a1a'
    },
    {
      name: 'Elena Volkova',
      position: 'Директор по финансам',
      description: 'Управляет финансовыми потоками и инвестиционным портфелем.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=2a2a2a'
    },
    {
      name: 'Dmitry Petrov',
      position: 'Глава отдела развития',
      description: 'Курирует расширение бизнеса и новые проекты корпорации.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry&backgroundColor=3a3a3a'
    },
    {
      name: 'Marina Ivanova',
      position: 'Директор по связям',
      description: 'Отвечает за взаимодействие с партнёрами и общественностью.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marina&backgroundColor=4a4a4a'
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div 
            className="min-h-screen flex items-center justify-center relative"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/7650c88d-8950-4887-8f3d-631d7386e573/files/398644d4-6b68-4ba2-b4c9-17eb28a57da1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-wider">
                KINGSMAN
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto mb-8" />
              <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light tracking-wide">
                Элитная корпорация Лос-Сантоса
              </p>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light">
                Власть, престиж и безупречная репутация с 2020 года
              </p>
            </div>
          </div>
        );

      case 'about':
        return (
          <div 
            className="min-h-screen relative"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/7650c88d-8950-4887-8f3d-631d7386e573/files/0cfd604c-b001-4e21-ad48-1f19135aadfb.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 container mx-auto px-4 py-20">
              <h2 className="text-6xl font-bold text-white mb-8">О корпорации</h2>
              <div className="w-24 h-1 bg-primary mb-12" />
              
              <div className="max-w-4xl space-y-8">
                <Card className="bg-black/60 border-primary/30 p-8 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-primary mb-4">Наша миссия</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Kingsman — это не просто корпорация, это образ жизни элиты Лос-Сантоса. 
                    Мы создаём эксклюзивные возможности для тех, кто ценит власть, престиж и конфиденциальность.
                  </p>
                </Card>

                <Card className="bg-black/60 border-primary/30 p-8 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-primary mb-4">Направления деятельности</h3>
                  <ul className="text-white/90 text-lg space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Building2" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span>Премиальная недвижимость и инвестиции в элитную собственность</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span>Консалтинг и управление бизнес-активами высокого класса</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Shield" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span>Приватные услуги безопасности для VIP-клиентов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span>Организация эксклюзивных мероприятий и закрытых клубов</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-black/60 border-primary/30 p-8 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-primary mb-4">Наши принципы</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Icon name="Crown" className="text-primary mx-auto mb-3" size={40} />
                      <p className="text-white font-semibold text-xl">Престиж</p>
                    </div>
                    <div>
                      <Icon name="Lock" className="text-primary mx-auto mb-3" size={40} />
                      <p className="text-white font-semibold text-xl">Конфиденциальность</p>
                    </div>
                    <div>
                      <Icon name="Award" className="text-primary mx-auto mb-3" size={40} />
                      <p className="text-white font-semibold text-xl">Качество</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'news':
        return (
          <div 
            className="min-h-screen relative"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/7650c88d-8950-4887-8f3d-631d7386e573/files/3fe111a1-ba1a-4f07-a554-4d72d31e8d3d.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 container mx-auto px-4 py-20">
              <h2 className="text-6xl font-bold text-white mb-8">Новости</h2>
              <div className="w-24 h-1 bg-primary mb-12" />
              
              <div className="max-w-4xl space-y-6">
                {newsItems.map((news, index) => (
                  <Card 
                    key={index}
                    className="bg-black/60 border-primary/30 p-8 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Calendar" className="text-primary" size={20} />
                      <span className="text-primary text-sm font-semibold">{news.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{news.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{news.content}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'leadership':
        return (
          <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-6xl font-bold text-white mb-8">Руководство</h2>
              <div className="w-24 h-1 bg-primary mb-12" />
              
              <div className="mb-16">
                <h3 className="text-4xl font-bold text-primary mb-8">Основатели</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                  {leaders.map((leader, index) => (
                    <Card 
                      key={index}
                      className="bg-card/50 border-primary/30 p-8 backdrop-blur-sm hover:border-primary/60 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/50">
                          <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-2">{leader.name}</h4>
                        <p className="text-primary text-lg font-semibold mb-4">{leader.position}</p>
                        <p className="text-white/80 leading-relaxed">{leader.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary mb-8">Главы отделов</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {departments.map((dept, index) => (
                    <Card 
                      key={index}
                      className="bg-card/50 border-primary/30 p-6 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary/50">
                          <img src={dept.image} alt={dept.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{dept.name}</h4>
                        <p className="text-primary text-sm font-semibold mb-3">{dept.position}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{dept.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold text-primary tracking-wider">KINGSMAN</div>
            
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary scale-110'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  menu?.classList.toggle('hidden');
                }}
              >
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>

          <div id="mobile-menu" className="hidden md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-white/70'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {renderSection()}
      </div>

      <footer className="bg-black border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2025 Kingsman Corporation. Все права защищены.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Лос-Сантос, Калифорния | Элитные решения для избранных
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
