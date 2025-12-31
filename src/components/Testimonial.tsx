import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Niranjan",
    since: "Member since 2025",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV8Lz83PEO9YlwUWCDqE1NEVClDubtlg62LgksWwA5cG5yXYUX4=w144-h144-p-rp-mo-br100",
    text: "Affordable gym with proper guidance."
  },
  {
    name: "Nikhil",
    since: "Member since 2025",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVuMJLQBkg58qJAq2PHBVnp4vfQknxHxGzgE7SU64x4JUKidrhs=w144-h144-p-rp-mo-br100",
    text: "Clean space, solid equipment and motivating environment."
  },
  {
    name: "Shekhar",
    since: "Member since 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010",
    text: "Clean supplements, verified quality, and real results. No gimmicks."
  }
];

const SLIDE_DURATION = 5000; // 5s

export const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Slide change
  useEffect(() => {
    setProgress(0);

    const slideTimer = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(slideTimer);
  }, [active]);

  // Progress animation
  useEffect(() => {
    const interval = 50; // smoothness
    const increment = 100 / (SLIDE_DURATION / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [active]);

  const current = testimonials[active];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* LEFT */}
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
            Real <br /> Stories. <br />
            <span className="text-zinc-500">Real <br /> Results.</span>
          </h2>

          <p className="text-zinc-400 max-w-md mb-8">
            Don't take our word for it. See what our community has to say about their transformation journey with FMA Gym.
          </p>

          <div className="flex gap-2">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} fill="white" size={20} />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden h-[500px] w-full">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Success Story"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-8 right-8 bg-white text-black p-6 rounded-xl max-w-xs shadow-2xl">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={current.image}
                  className="w-10 h-10 rounded-full"
                  alt={current.name}
                />
                <div>
                  <h4 className="font-bold uppercase text-sm">
                    {current.name}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {current.since}
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium italic">
                “{current.text}”
              </p>

              {/* PROGRESS BARS */}
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 bg-zinc-200 rounded-full overflow-hidden"
                  >
                    {i === active && (
                      <div
                        className="h-full bg-black transition-[width]"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
