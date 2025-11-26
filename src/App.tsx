import  { useState } from 'react';
import { Menu, X, Check, MapPin, Phone, Mail, ArrowRight, Star, Dumbbell, ChevronRight } from 'lucide-react';

const FmaGymLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold italic">F</div>
            <span className="text-xl font-black tracking-tighter uppercase">FMA GYM</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide uppercase">
            <a href="#home" className="hover:text-zinc-500 transition-colors">Home</a>
            <a href="#training" className="hover:text-zinc-500 transition-colors">Training</a>
            <a href="#membership" className="hover:text-zinc-500 transition-colors">Membership</a>
            <a href="#contact" className="hover:text-zinc-500 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="relative">
                <input type="text" placeholder="Search..." className="bg-zinc-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black w-32 focus:w-48 transition-all" />
             </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-100 p-6 flex flex-col gap-4">
            <a href="#home" className="text-lg font-bold">Home</a>
            <a href="#training" className="text-lg font-bold">Training</a>
            <a href="#membership" className="text-lg font-bold">Membership</a>
            <a href="#contact" className="text-lg font-bold">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest text-zinc-500 mb-2 uppercase">Achieve your fitness goals</p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            Unleash <br />
            <span className="text-outline-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-black" style={{WebkitTextStroke: '2px black'}}>Your Power</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-black pt-6">
            <h2 className="text-2xl font-bold uppercase mb-4 md:mb-0">Registration Now Open</h2>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all flex items-center gap-2">
              Join Now <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
          {/* Main Large Image */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop" 
              alt="Back Workout" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
              <span className="text-white font-bold uppercase tracking-wider">Strength Training</span>
            </div>
          </div>
          
          {/* Top Right Image */}
          <div className="col-span-1 relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" 
              alt="Weights" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Top Far Right Image */}
          <div className="col-span-1 relative group overflow-hidden rounded-2xl bg-black flex items-center justify-center p-6">
            <div className="text-center">
               <h3 className="text-white text-4xl font-black italic mb-2">30%</h3>
               <p className="text-zinc-400 text-sm uppercase">Discount for new members</p>
            </div>
          </div>

          {/* Bottom Right Wide */}
          <div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" 
              alt="Woman Training" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
             <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
               <p className="text-white font-bold text-xs uppercase">Crossfit Zone</p>
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black uppercase mb-8">Services:</h2>
              <ul className="space-y-6">
                {[
                  "Personal Training", 
                  "Customized Diet Plans (Fat Loss / Gain)", 
                  "Physiotherapy Functional Fitness Classes",
                  "Group HIIT Sessions",
                  "Olympic Lifting Workshops"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-2 h-2 bg-black rounded-full group-hover:w-4 transition-all" />
                    <span className="text-xl md:text-2xl font-medium group-hover:translate-x-2 transition-transform">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-6 bg-zinc-100 rounded-xl border border-zinc-200">
                <Dumbbell className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-zinc-600">Our certified coaches are dedicated to pushing you to your absolute limits safely.</p>
              </div>
            </div>

            {/* Phone-like Card Carousel Visualization */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className={`rounded-3xl overflow-hidden relative h-80 ${i === 2 ? 'mt-8' : ''} ${i === 3 ? 'hidden md:block mt-16' : ''}`}>
                    <img 
                      src={`https://images.unsplash.com/photo-15${i === 1 ? '81009146145-b5ef050c2e1e' : i === 2 ? '71019614242-c5c5dee9f50b' : '74680096197-1f8541e91bbd'}?q=80&w=600&auto=format&fit=crop`}
                      className="w-full h-full object-cover"
                      alt="service"
                    />
                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-2">
                         <span className="text-white text-xs">+</span>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
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
                <div className="text-5xl font-black mb-6">$320<span className="text-sm font-normal text-zinc-500">/month</span></div>
                <ul className="space-y-4 mb-8 text-zinc-300 text-sm">
                   <li className="flex items-center gap-2"><Check size={16} /> Personal Gold Trainer</li>
                   <li className="flex items-center gap-2"><Check size={16} /> All Facilities Access</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Free Dress & Supplements</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Diet Programs</li>
                </ul>
                <button className="w-full bg-white text-black py-3 rounded-full font-bold uppercase text-sm hover:bg-zinc-200 transition-colors">Book Now</button>
             </div>

             {/* Advanced */}
             <div className="bg-zinc-800 border-2 border-white/10 p-8 rounded-2xl scale-110 shadow-2xl relative z-20">
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                <h3 className="text-xl font-bold uppercase text-zinc-300 mb-2">Advanced</h3>
                <div className="text-5xl font-black mb-6">$120<span className="text-sm font-normal text-zinc-400">/month</span></div>
                <ul className="space-y-4 mb-8 text-zinc-200 text-sm">
                   <li className="flex items-center gap-2"><Check size={16} /> Professional Trainers</li>
                   <li className="flex items-center gap-2"><Check size={16} /> 20 Sessions</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Diet Program</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Sauna Access</li>
                </ul>
                <button className="w-full bg-white text-black py-4 rounded-full font-bold uppercase text-sm hover:bg-zinc-200 transition-colors shadow-lg">Book Now</button>
             </div>

             {/* Basic */}
             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold uppercase text-zinc-400 mb-2">Basic</h3>
                <div className="text-5xl font-black mb-6">$70<span className="text-sm font-normal text-zinc-500">/month</span></div>
                <ul className="space-y-4 mb-8 text-zinc-300 text-sm">
                   <li className="flex items-center gap-2"><Check size={16} /> Impressions Trainers</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Diet Programs</li>
                   <li className="flex items-center gap-2"><Check size={16} /> Locker Access</li>
                </ul>
                <button className="w-full bg-transparent border border-zinc-700 text-white py-3 rounded-full font-bold uppercase text-sm hover:bg-zinc-800 transition-colors">Book Now</button>
             </div>
          </div>
        </div>
      </section>

      {/* REAL STORIES SECTION */}
      <section className="bg-zinc-900 text-white py-20 px-6 border-t border-zinc-800">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
                  Real <br /> Stories. <br /> <span className="text-zinc-500">Real <br /> Results.</span>
               </h2>
               <p className="text-zinc-400 max-w-md mb-8">
                  Don't take our word for it. See what our community has to say about their transformation journey with FMA Gym.
               </p>
               <div className="flex gap-2">
                  {[1,2,3,4,5].map(s => <Star key={s} fill="white" size={20}/>)}
               </div>
            </div>

            <div className="md:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden h-[500px] w-full">
                  <img 
                     src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop" 
                     className="w-full h-full object-cover"
                     alt="Success Story"
                  />
                  {/* Floating Testimonial Card */}
                  <div className="absolute bottom-8 right-8 bg-white text-black p-6 rounded-xl max-w-xs shadow-2xl">
                     <div className="flex items-center gap-4 mb-3">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" alt="user" />
                        <div>
                           <h4 className="font-bold uppercase text-sm">Harvey Specter</h4>
                           <p className="text-xs text-zinc-500">Member since 2023</p>
                        </div>
                     </div>
                     <p className="text-sm font-medium italic">"Joining FMA was the best decision. The customized plan actually works with my busy schedule."</p>
                     <div className="mt-4 flex gap-2">
                        <div className="h-1 flex-1 bg-black rounded-full"></div>
                        <div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
                        <div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FOOTER / CTA */}
      <section id="contact" className="bg-black text-white py-20 px-6">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Contact Card */}
            <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
               <div>
                  <h2 className="text-3xl font-black uppercase mb-8">Join Us Today</h2>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <MapPin className="text-zinc-500 mt-1" />
                        <div>
                           <p className="font-bold uppercase text-sm text-zinc-500">Location</p>
                           <p className="text-lg">81st Floor, Spiral Tower, Jamshedpur</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Phone className="text-zinc-500 mt-1" />
                        <div>
                           <p className="font-bold uppercase text-sm text-zinc-500">Phone</p>
                           <p className="text-lg">+91 (0) 086 998 7880</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Mail className="text-zinc-500 mt-1" />
                        <div>
                           <p className="font-bold uppercase text-sm text-zinc-500">Email</p>
                           <p className="text-lg">info@fmagym.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 uppercase">© 2024 FMA Gym. All rights reserved.</p>
               </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-auto group">
               <img 
                  src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="Pushups"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-md border border-white/50 text-white w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                     <ChevronRight size={32} />
                  </button>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default FmaGymLanding;