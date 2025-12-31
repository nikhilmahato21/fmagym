const helpItems = [
  {
    step: "1",
    title: "Personal training",
    desc: "Personal training tailored to your goals with focused one-on-one guidance.",
  },
  {
    step: "2",
    title: "Nutrition coaching",
    desc: "Structured nutrition guidance to support fat loss, muscle gain, and recovery.",
  },
  {
    step: "3",
    title: "Group training",
    desc: "Small group sessions designed to improve performance and consistency.",
  },
];

export const HowWeHelp = () => {
  return (
    <section id="training" className="bg-white py-24 mb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-black  text-zinc-800 mb-14  uppercase">
          Here’s how we can help you
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {helpItems.map((item) => (
            <div key={item.step} >

              {/* Title pill */}
              <div className="inline-flex items-center justify-center border-2 border-zinc-400 rounded-md px-6 py-3 mb-6">
                <span className="text-lg font-black uppercase text-zinc-900">
                  {item.title}
                </span>
              </div>

              {/* Step number */}
              <div className="flex gap-2">
                <div className="text-3xl font-black text-zinc-600 mb-3">
                {item.step}
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-500 font-black  leading-relaxed max-w-2xs border-l-2 p-2 ">
                {item.desc}
              </p>
              </div>
              

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
