import { Dumbbell} from 'lucide-react';

const services = [
  "Personal Training",
  "Customized Diet Plans (Fat Loss / Gain)",
  "Physiotherapy Functional Fitness Classes",
  "Group HIIT Sessions",
];

const serviceImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    offset: "",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop",
    offset: "mt-8",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800&auto=format&fit=crop",
    offset: "hidden md:block mt-16",
  },
];




export const Services = () => {
  return (
    <section className="bg-white py-20 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-10 tracking-tight">
              Services
            </h2>

            <ul className="space-y-6">
              {services.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-black rounded-full group-hover:w-4 transition-all duration-300" />
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-700 transition-transform duration-300 group-hover:translate-x-2">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* INFO CARD */}
            <div className="mt-12 p-6 bg-zinc-100 rounded-xl border border-zinc-200">
              <Dumbbell className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-zinc-600 leading-relaxed">
                Our certified coaches are dedicated to pushing you to your
                absolute limits safely.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE STACK */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceImages.map((item) => (
              <div
                key={item.id}
                className={`relative h-80 rounded-3xl overflow-hidden ${item.offset}`}
              >
                <img
                  src={item.image}
                  alt="service"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 w-full p-4 bg-linear-to-t from-black/90 to-transparent">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

