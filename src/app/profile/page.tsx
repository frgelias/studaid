import { PlaceCard } from '@/components/PlaceCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Bookmark, Library, MapPin, Star } from 'lucide-react';

export default function Profile() {
  const savedPlaces = [
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
      name: "University Gym",
      category: "Gym",
      description: "Affordable gym membership with state-of-the-art equipment and complimentary group classes.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-white/20 flex flex-col">
      <Header activePath="/profile" />

      {/* Top Section */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-[3.5rem] font-bold tracking-tighter text-white mb-4 leading-none">
          Profile
        </h1>
        <p className="text-[18px] text-[#A1A1AA] font-medium leading-relaxed mb-16">
          Manage your account and saved places
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {/* Profile Card */}
          <div className="bg-[#141414] rounded-[32px] p-8 border border-white/[0.05] flex-grow lg:w-2/3 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group">
            {/* Subtle background glow effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
            
            <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-[28px] overflow-hidden border border-white/10 z-10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300" alt="Alex Chen" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col text-center md:text-left z-10 w-full pt-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3">
                <h2 className="text-[34px] font-extrabold text-white tracking-tight leading-none">Alex Chen</h2>
                <span className="bg-[#2563EB] text-white text-[10px] px-3 py-1.5 rounded-lg font-bold tracking-widest uppercase">
                  Premium Member
                </span>
              </div>
              <p className="text-[#A1A1AA] text-[17px] font-medium mb-8">Explore smarter. Study better.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/[0.05]">
                <div>
                  <div className="text-[11px] text-[#71717A] font-bold uppercase tracking-widest mb-1.5">University</div>
                  <div className="text-white font-semibold text-[15px]">Paris School of Business</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#71717A] font-bold uppercase tracking-widest mb-1.5">Campus</div>
                  <div className="text-white font-semibold text-[15px]">Paris</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#71717A] font-bold uppercase tracking-widest mb-1.5">Status</div>
                  <div className="text-white font-semibold text-[15px]">Student</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 gap-4 flex-grow lg:w-1/3 min-w-[300px]">
            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex flex-col justify-center hover:bg-[#1a1a1a] transition-colors">
              <Bookmark className="text-[#3b82f6] mb-3" size={22} />
              <div className="text-3xl font-extrabold text-white mb-0.5 tracking-tight">12</div>
              <div className="text-[#A1A1AA] text-[13px] font-medium">Saved places</div>
            </div>
            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex flex-col justify-center hover:bg-[#1a1a1a] transition-colors">
              <Library className="text-[#8b5cf6] mb-3" size={22} />
              <div className="text-3xl font-extrabold text-white mb-0.5 tracking-tight">8</div>
              <div className="text-[#A1A1AA] text-[13px] font-medium">Categories explored</div>
            </div>
            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex flex-col justify-center hover:bg-[#1a1a1a] transition-colors">
              <MapPin className="text-[#ec4899] mb-3" size={22} />
              <div className="text-3xl font-extrabold text-white mb-0.5 tracking-tight">156</div>
              <div className="text-[#A1A1AA] text-[13px] font-medium">Visits</div>
            </div>
            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex flex-col justify-center hover:bg-[#1a1a1a] transition-colors">
              <Star className="text-[#f59e0b] mb-3" size={22} />
              <div className="text-3xl font-extrabold text-white mb-0.5 tracking-tight">24</div>
              <div className="text-[#A1A1AA] text-[13px] font-medium">Reviews</div>
            </div>
          </div>
        </div>

        {/* Saved places section */}
        <div className="mb-8 pb-4 border-b border-white/[0.03]">
          <h2 className="text-[26px] font-bold tracking-tight text-white leading-none">
            Saved places
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-6 md:gap-y-12 pb-16">
          {savedPlaces.map((place) => (
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
