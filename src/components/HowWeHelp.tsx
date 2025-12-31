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
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-xl md:text-2xl font-medium text-zinc-900 mb-14">
          Here’s how we can help you
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {helpItems.map((item) => (
            <div key={item.step} className="text-center">

              {/* Title pill */}
              <div className="inline-flex items-center justify-center border border-zinc-300 rounded-md px-6 py-3 mb-6">
                <span className="text-sm font-medium text-zinc-900">
                  {item.title}
                </span>
              </div>

              {/* Step number */}
              <div className="text-sm text-zinc-500 mb-3">
                {item.step}
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-600 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
