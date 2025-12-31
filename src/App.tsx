
import { Check, MapPin, Phone, Mail, ArrowRight, Star, Dumbbell, ChevronRight } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import TrustPartners from './components/TrustPartners';
import { HowWeHelp } from './components/HowWeHelp';
const FmaGymLanding = () => {
  

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white">
      
      {/* NAVIGATION */}
<Navbar/>

      {/* HERO SECTION */}
      <Hero/>
      

      {/* SERVICES SECTION */}
      <Services/>
      <HowWeHelp/>
      

      {/* MEMBERSHIP SECTION */}
      <Pricing/>
      <TrustPartners/>
      

      {/* REAL STORIES SECTION */}
      <Testimonial/>
      

      {/* FOOTER / CTA */}
      <Footer/>
     

    </div>
  );
};

export default FmaGymLanding;