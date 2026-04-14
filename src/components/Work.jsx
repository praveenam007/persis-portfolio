import { getWorkItems } from '../constants';

export default function Work({ isTechnical }) {
  const workItems = getWorkItems(isTechnical);

  return (
    <section id="work" className="w-full px-[12%] py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <h4 className="text-center mb-2 text-lg font-Ovo">Selected projects</h4>
        <h2 className="text-center text-5xl font-Ovo">My Work</h2>
        <p className="mt-6 max-w-3xl mx-auto text-center font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
          A few projects and analytics systems that show how I combine structured thinking, technical depth,
          and business impact.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {workItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white/80 transition duration-500 hover:-translate-y-1 hover:shadow-black dark:border-white/20 dark:bg-white/5 dark:hover:shadow-white/30"
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-white/40">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-Ovo text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-white/75">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.stack.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium text-rose-500 dark:text-rose-300">{item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
