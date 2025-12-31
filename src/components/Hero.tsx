import { ArrowRight} from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest text-zinc-500 mb-2 uppercase">Achieve your fitness goals</p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            Unleash <br />
            <span className="text-outline-black text-transparent bg-clip-text bg-linear-to-b from-zinc-800 to-black" style={{WebkitTextStroke: '2px black'}}>Your Power</span>
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
            <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black/80 to-transparent w-full">
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
               <h3 className="text-white text-4xl font-black italic mb-2">15-20%</h3>
               <p className="text-zinc-400 text-sm uppercase">Discount  for females , students on Registraion Fee. </p>
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
               <p className="text-white font-bold text-xs uppercase">Hypertrophy Training</p>
             </div>
          </div>
        </div>
      </section>
  )
}
