import { CategoryButton } from '@/components/CategoryButton';
import { PlaceCard } from '@/components/PlaceCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: "Study spots", emoji: "📚" },
    { name: "Coffee", emoji: "☕" },
    { name: "Food", emoji: "🍔" },
    { name: "Gym", emoji: "🏋️" },
    { name: "Events", emoji: "🎉" }
  ];

  const places = [
    {
      name: "Central Library",
      category: "Quiet Zone",
      description: "Quiet place to focus with ample seating, reliable power outlets, and natural light.",
      imageUrl: "https://images.unsplash.com/photo-1568667256549-0943485ed74b?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Main St Coffee",
      category: "Coffee",
      description: "Student friendly coffee shop with fast wifi, artisan pastries, and great vibes.",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "University Gym",
      category: "Gym",
      description: "Affordable gym near campus with state-of-the-art equipment and group classes.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-white/20 flex flex-col">
      
      <Header activePath="/" />

      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center px-6 max-w-4xl mx-auto relative flex flex-col items-center w-full">
        {/* Subtle background glow effect could go here */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter text-white mb-6 leading-none relative z-10">
          STUDAID
        </h1>
        <p className="text-[19px] md:text-[22px] text-[#A1A1AA] font-medium max-w-2xl mx-auto mb-14 relative z-10 leading-relaxed">
          Discover useful places around your campus.
        </p>
        
        {/* Categories Section */}
        <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-3xl">
          {categories.map((cat) => (
             <CategoryButton key={cat.name} name={cat.name} emoji={cat.emoji} />
          ))}
        </div>
      </section>

      {/* Popular places Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 relative z-10 w-full flex-grow">
        <div className="flex justify-between items-end mb-10 pb-4 border-b border-white/[0.03]">
          <h2 className="text-[28px] font-bold tracking-tight text-white leading-none">
            Popular places
          </h2>
          <a href="/discover" className="text-[14px] font-semibold text-[#3b82f6] hover:text-blue-400 flex items-center gap-1.5 transition-colors pb-1">
            View all <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-6 md:gap-y-10">
          {places.map((place) => (
            <PlaceCard
              key={place.name}
              name={place.name}
              category={place.category}
              description={place.description}
              imageUrl={place.imageUrl}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}