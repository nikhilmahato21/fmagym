import { BadgeCheck } from "lucide-react";

const TrustPartners = () => {
  return (
    <section className="py-20 relative px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-[#2B2B2B] shadow-xl p-10 md:p-14">
          
          {/* FADED TRUST ICON (LIKE STAR) */}
          <BadgeCheck
            className="
              pointer-events-none
              absolute
              -right-10
              top-1/2
              -translate-y-1/2
              w-[320px]
              h-80
              text-white
              opacity-[0.05]
            "
          />

          {/* OPTIONAL: FADED BRAND LOGO */}
          <img
            src="/trustified-logo.png"
            alt=""
            className="pointer-events-none absolute right-[-120px] -bottom-10 w-[360px] opacity-[0.04]"
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Trusted supplements,
              <br />
              verified for purity.
            </h3>

            <p className="mt-4 text-gray-300 text-base leading-relaxed">
              All supplements sold through us are sourced via authorized
              HealthKart channels and independently tested by Trustified to
              ensure authenticity, purity, and safety.
            </p>

            {/* CTA */}
            <a href="https://www.trustified.in/passandfail">
              <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-100">
                View Certified Products
              </button>
            </a>

            {/* PARTNER LOGOS */}
            <div className="mt-10 flex items-center gap-8">
              <img
                src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/hklogo.png"
                alt="HealthKart"
                className="h-6 opacity-80"
              />
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1767206582/Picsart_26-01-01_00-12-18-930_frkysf.png"
                alt="Trustified"
                className="h-8 opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustPartners;
