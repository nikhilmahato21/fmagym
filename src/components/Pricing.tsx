import { Check, MapPin, Phone, Mail, ArrowRight, Star, Dumbbell, ChevronRight } from 'lucide-react';



export const Pricing = () => {
  return (
    <section id="membership" className="bg-zinc-950 text-white py-24 px-6 rounded-t-[3rem] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Membership Plans<br/>That Suit Your Lifestyle</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
             {/* Premium */}
             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Star size={100} />
                </div>
                <h3 className="text-xl font-bold uppercase text-zinc-400 mb-2">Premium</h3>
                <div className="text-5xl font-black mb-6">₹6800<span className="text-sm font-normal text-zinc-500">/year</span></div>
                <ul className="space-y-4 mb-8 text-zinc-300 text-sm">
                   <li className="flex items-center gap-2"><Check size={16} /> Personalized Diet plan</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Customized Workout Plan</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Full Facilities Access</li>
                  <li className="flex items-center gap-2"><Check size={16} /> Body Assessment on Start</li>
                </ul>
                <button className="w-full bg-white text-black py-3 rounded-full font-bold uppercase text-sm hover:bg-zinc-200 transition-colors">Book Now</button>
             </div>

             {/* Advanced */}
             <div className="bg-zinc-800 border-2 border-white/10 p-8 rounded-2xl scale-110 shadow-2xl relative z-20">
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                <h3 className="text-xl font-bold uppercase text-zinc-300 mb-2">Advanced</h3>
                <div className="text-5xl font-black mb-6">₹3600<span className="text-sm font-normal text-zinc-400">/6 months</span></div>
                <ul className="space-y-4 mb-8 text-zinc-200 text-sm">
                   <li className="flex items-center gap-2"><Check size={16} /> Customized Workout Plan</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Full Facilities Access</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Trainer Guidance(General Support)</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Body Assessment on Start</li>
                  
                </ul>
                <button className="w-full bg-white text-black py-4 rounded-full font-bold uppercase text-sm hover:bg-zinc-200 transition-colors shadow-lg">Book Now</button>
             </div>

             {/* Basic */}
             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold uppercase text-zinc-400 mb-2">Basic</h3>
                <div className="text-5xl font-black mb-6">₹1950<span className="text-sm font-normal text-zinc-500">/3 months</span></div>
                <ul className="space-y-4 mb-8 text-zinc-300 text-sm">
                   <li className="flex items-center gap-2"><Check size={16} /> Basic Guidance for Beginners</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Full Facilities Access</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Body Assessment on Start</li>
                </ul>
                <button className="w-full bg-transparent border border-zinc-700 text-white py-3 rounded-full font-bold uppercase text-sm hover:bg-zinc-800 transition-colors">Book Now</button>
             </div>
          </div>
        </div>
      </section>
  )
}
