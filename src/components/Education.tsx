import { education } from "@/utils/constants";
import { getRandomTextColor } from "@/utils/utils";

export default function Education() {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Education</h1>
      <ol className="relative border-s border-white/20">
        {education.map(
          ({ timePeriod, degree, institute, cgpa, percentage }) => {
            return (
              <li
                key={`${institute}-${degree}`}
                className="mb-10 ms-4 last:mb-0"
              >
                <div className="absolute w-3 h-3 bg-white rounded-full mt-3 -start-1.5 border border-white" />
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h2
                      className={`text-xl font-semibold ${getRandomTextColor()}`}
                    >
                      {institute}
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-900 text-white/80">
                      {degree}
                    </h3>
                  </div>
                  <div>
                    <time className="mb-1 text-sm font-normal leading-none text-white/50">
                      {timePeriod}
                    </time>
                  </div>
                </div>
                {cgpa && (
                  <p className="mb-4 text-base font-normal text-gray-500">
                    CGPA: {cgpa}
                  </p>
                )}
                {percentage && (
                  <p className="mb-4 text-base font-normal text-gray-500">
                    Percentage: {percentage}%
                  </p>
                )}
              </li>
            );
          },
        )}
      </ol>
    </section>
  );
}
