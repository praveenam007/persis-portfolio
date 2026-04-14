import { getServices } from '../constants';

export default function Services({ isTechnical }) {
  const services = getServices(isTechnical);

  return (
    <section id="services" className="w-full px-[12%] py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <h4 className="text-center mb-2 text-lg font-Ovo">What I do</h4>
        <h2 className="text-center text-5xl font-Ovo">Services</h2>
        <p className="mt-6 max-w-3xl mx-auto text-center font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
          I work across business and technical contexts, helping teams move from raw data to clear decisions,
          polished reporting, and measurable outcomes.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-white/70 p-8 transition duration-500 hover:-translate-y-1 hover:shadow-black dark:border-white/20 dark:bg-white/5 dark:hover:shadow-white/30"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-white/40">
                Service
              </p>
              <h3 className="mt-4 text-2xl font-Ovo text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-white/75">
                {service.description}
              </p>
              <div className="mt-6 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-gray-700 dark:bg-darkHover/40 dark:text-white/80">
                {service.highlight}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
