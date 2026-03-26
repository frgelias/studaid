import { PlaceCard } from '@/components/PlaceCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Bookmark, Map, MapPin, Wifi, DollarSign, Clock, Star } from 'lucide-react';

export default function PlaceDetails() {
  const relatedPlaces = [
    {
      name: "Main St Coffee",
      category: "Coffee",
      description: "Student friendly coffee shop with fast wifi, artisan pastries, and great vibes.",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Quiet Study Hub",
      category: "Study spots",
      description: "Calm place with fast wifi and individual desks perfect for highly productive deep work.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
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
      <Header />

      {/* Hero Image Banner */}
      <div className="w-full h-[300px] md:h-[450px] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1568667256549-0943485ed74b?q=80&w=2000&auto=format&fit=crop" 
          alt="Central Library" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full -mt-24 md:-mt-32 relative z-10 flex-grow">
        
        {/* Place Information Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#1A1A1A] text-zinc-300 text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-white/[0.05]">
                Study spots
              </span>
              <div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-500 text-[12px] px-3 py-1.5 rounded-full font-bold border border-yellow-500/20">
                <Star size={14} className="fill-current" />
                4.8
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tighter text-white mb-5 leading-tight shadow-sm">
              Central Library
            </h1>
            
            <p className="text-[18px] md:text-[20px] text-[#A1A1AA] font-medium leading-relaxed">
              Quiet and modern library perfect for studying and focusing.
            </p>
          </div>

          <div className="flex flex-row md:flex-col lg:flex-row w-full md:w-auto gap-4 shrink-0 mt-2">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-4 rounded-xl font-bold text-[15px]">
              <Bookmark size={18} />
              Save place
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-[#1A1A1A] border border-white/10 transition-colors px-6 py-4 rounded-xl font-bold text-[15px]">
              <Map size={18} />
              Open map
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-10">
            {/* Long Description Section */}
            <div>
              <h2 className="text-[22px] font-bold tracking-tight text-white mb-5">About this place</h2>
              <div className="text-[#A1A1AA] text-[16px] leading-relaxed space-y-6">
                <p>
                  The Central Library is the premier study destination for students looking to maximize their
                  productivity. Featuring high ceilings, enormous windows with natural light, and a completely
                  noise-free environment, it is designed to help you concentrate on deep work.
                </p>
                <p>
                  In addition to the vast collection of academic resources, the library offers private study
                  rooms that can be booked in advance, comfortable ergonomic seating throughout the main halls,
                  and dedicated power outlets at every desk to keep your devices charged during long study sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Information Cards Section */}
            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex items-center gap-5 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <div className="text-[12px] text-[#71717A] font-bold uppercase tracking-wider mb-0.5">Location</div>
                <div className="text-white font-semibold text-[15px]">Near campus center</div>
              </div>
            </div>
            
            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex items-center gap-5 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0">
                <Wifi className="text-white" size={24} />
              </div>
              <div>
                <div className="text-[12px] text-[#71717A] font-bold uppercase tracking-wider mb-0.5">Wifi</div>
                <div className="text-white font-semibold text-[15px]">Available</div>
              </div>
            </div>

            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex items-center gap-5 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0">
                <DollarSign className="text-white" size={24} />
              </div>
              <div>
                <div className="text-[12px] text-[#71717A] font-bold uppercase tracking-wider mb-0.5">Price</div>
                <div className="text-white font-semibold text-[15px]">Free</div>
              </div>
            </div>

            <div className="bg-[#141414] rounded-[24px] p-6 border border-white/[0.05] flex items-center gap-5 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <div className="text-[12px] text-[#71717A] font-bold uppercase tracking-wider mb-0.5">Opening hours</div>
                <div className="text-white font-semibold text-[15px]">8:00 - 22:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related places section */}
        <div className="mb-8 pb-4 border-b border-white/[0.03]">
          <h2 className="text-[26px] font-bold tracking-tight text-white leading-none">
            Related places
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-6 md:gap-y-12 pb-16">
          {relatedPlaces.map((place) => (
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
