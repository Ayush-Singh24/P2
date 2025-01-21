import { experiences } from "@/utils/constants";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Experience</h1>
      <ol className="relative border-s border-white/20">
        {experiences.map(({ timePeriod, company, role, description }) => {
          return (
            <li className="mb-10 ms-4 last:mb-0" key={company}>
              <div className="absolute w-3 h-3 bg-white rounded-full mt-3 -start-1.5 border border-white" />
              <div className="flex justify-between flex-col sm:flex-row">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary">
                    {company}
                  </h2>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-white/80">
                    {role}
                  </h3>
                </div>
                <div>
                  <time className="mb-1 text-xs md:text-sm font-normal leading-none text-white/50">
                    {timePeriod}
                  </time>
                </div>
              </div>
              <p className="mb-4 text-sm sm:text-base font-normal text-gray-500">
                {description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
