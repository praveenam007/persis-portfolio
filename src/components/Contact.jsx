import { CONTACT_DETAILS, RESUME_LINKS } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="w-full px-[12%] py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-gray-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-8 md:p-12 dark:border-white/20 dark:from-darkTheme dark:via-[#1b0b2f] dark:to-darkHover">
        <h4 className="text-center mb-2 text-lg font-Ovo">Let&apos;s connect</h4>
        <h2 className="text-center text-5xl font-Ovo">Contact me</h2>
        <p className="mt-6 max-w-2xl mx-auto text-center font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
          I&apos;m open to Business Analyst and Data Analyst opportunities where data can be turned into practical
          decisions, strong reporting, and visible business results.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white/80 p-8 dark:bg-white/5">
            <h3 className="text-2xl font-Ovo text-gray-900 dark:text-white">Reach out directly</h3>
            <div className="mt-6 space-y-4">
              {CONTACT_DETAILS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'LinkedIn' || item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'LinkedIn' || item.label === 'Location' ? 'noreferrer' : undefined}
                  className="block rounded-2xl border border-gray-200 px-5 py-4 transition hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 dark:border-white/15 dark:hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base text-gray-700 dark:text-white/85">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white/80 p-8 dark:bg-white/5">
            <h3 className="text-2xl font-Ovo text-gray-900 dark:text-white">Resume snapshots</h3>
            <div className="mt-6 space-y-4">
              {RESUME_LINKS.map((resume) => (
                <a
                  key={resume.title}
                  href={resume.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-gray-200 px-5 py-5 transition hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 dark:border-white/15 dark:hover:bg-white/10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-Ovo text-gray-900 dark:text-white">{resume.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/75">
                        {resume.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-gray-900 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white dark:bg-white dark:text-gray-900">
                      Open
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gray-900 px-5 py-5 text-white dark:bg-white dark:text-gray-900">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60 dark:text-gray-500">Best fit</p>
              <p className="mt-3 text-lg font-Ovo">
                Business Analyst roles, Data Analyst roles, and hybrid analytics positions where strategy and
                implementation both matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
