/**
 * About Component
 * Displays user profile with:
 * - Dynamic description (based on Business/Technical perspective)
 * - Experience cards
 * - Tools/Technologies list
 */

import { getExperienceData, getAboutContent } from '../constants';
import ExperienceCard from './About/ExperienceCard';
import ToolsList from './About/ToolsList';

export default function About({ isTechnical }) {
  const experienceData = getExperienceData(isTechnical);
  const { description } = getAboutContent(isTechnical);

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Header */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      {/* Main Content */}
      <div className="flex w-full flex-col items-center justify-center my-20">
        {/* Content Section */}
        <div className="flex-1 text-center">
          {/* Dynamic Description */}
          <p className="mb-10 max-w-2xl font-Ovo leading-relaxed transition-all duration-300 mx-auto">
            {description}
          </p>

          {/* Experience Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mb-10 mx-auto">
            {experienceData.map((item, index) => (
              <ExperienceCard
                key={index}
                icon1={item.icon1}
                icon2={item.icon2}
                title={item.name}
                description={item.description}
              />
            ))}
          </ul>

          {/* Tools List */}
          <div className="mx-auto">
            <ToolsList />
          </div>
        </div>
      </div>
    </div>
  );
}