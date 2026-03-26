import { CategoryButton } from '@/components/CategoryButton';
import { PlaceCard } from '@/components/PlaceCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Search } from 'lucide-react';

export default function Discover() {
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
      category: "Study spots",
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
      name: "Food Corner",
      category: "Food",
      description: "Affordable meals near campus. Great place to grab a quick, healthy bite between classes.",
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "University Gym",
      category: "Gym",
      description: "Affordable gym membership with state-of-the-art equipment and complimentary group classes.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Student Events Hall",
      category: "Events",
      description: "Networking and campus events happen here every week. A central hub for student life.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Quiet Hub",
      category: "Study spots",
      description: "Calm place with fast wifi and individual desks perfect for highly productive deep work.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-white/20 flex flex-col">
      <Header activePath="/discover" />

      {/* Top Section */}
      <section className="py-16 md:py-24 text-center px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-[4rem] font-bold tracking-tighter text-white mb-5 leading-none">
          Discover
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#A1A1AA] font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          Explore useful places, services, and student spots near your campus.
        </p>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mx-auto mb-10">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#A1A1AA]" size={22} />
          <input 
            type="text" 
            placeholder="Search for places..." 
            className="w-full bg-[#111111] hover:bg-[#141414] border border-white/10 rounded-full py-4 pl-16 pr-6 text-white placeholder-[#71717A] focus:outline-none focus:border-white/30 transition-colors shadow-sm text-[16px]"
          />
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          <button className="flex items-center justify-center bg-white hover:bg-zinc-200 text-black transition-all duration-300 px-6 py-3 rounded-full whitespace-nowrap shadow-sm font-semibold tracking-wide text-[14px]">
            All places
          </button>
          {categories.map((cat) => (
             <CategoryButton key={cat.name} name={cat.name} emoji={cat.emoji} />
          ))}
        </div>
      </section>

      {/* Main content grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-6 md:gap-y-12">
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
