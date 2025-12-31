import { Check, MapPin, Phone, Mail, ArrowRight, Star, Dumbbell, ChevronRight } from 'lucide-react';

export const Footer = () => {
  return (
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
                           <p className="text-lg">SunCity , Chandil, Jharkhand</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Phone className="text-zinc-500 mt-1" />
                        <div>
                           <p className="font-bold uppercase text-sm text-zinc-500">Phone</p>
                           <p className="text-lg">+91 9241499491</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Mail className="text-zinc-500 mt-1" />
                        <div>
                           <p className="font-bold uppercase text-sm text-zinc-500">Email</p>
                           <p className="text-lg">fitnessmantraarena@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 uppercase">© 2025 FMA . All rights reserved.</p>
               </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-auto group">
               <img 
                  src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1767205261/WhatsApp_Image_2025-12-31_at_22.17.46_kzsped.jpg" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="Pushups"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <a href='https://share.google/EpnKX37gEwRzoGW1x'><button className="bg-white/20 backdrop-blur-md border border-white/50 text-white w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                     <ChevronRight size={32} />
                  </button></a>
               </div>
            </div>
         </div>
      </section>
  )
}
