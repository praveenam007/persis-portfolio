/**
 * About Component
 * Displays user profile with:
 * - User image and badge
 * - Perspective toggle (Business/Technical)
 * - Dynamic description
 * - Experience cards
 * - Tools/Technologies list
 */

import { useState } from 'react';
import { getExperienceData, getAboutContent } from '../constants';
import PerspectiveToggle from './About/PerspectiveToggle';
import ExperienceCard from './About/ExperienceCard';
import ToolsList from './About/ToolsList';

export default function About() {
  const [isTechnical, setIsTechnical] = useState(false);

  const experienceData = getExperienceData(isTechnical);
  const { description } = getAboutContent(isTechnical);

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Header */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      {/* Main Content */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image */}
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/user-image.png"
            alt="Profile"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
          {/* Spinning Badge */}
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src="./assets/circular-text.png"
              alt="Badge"
              className="w-full animate-spin_slow"
            />
            <img
              src="./assets/dev-icon.png"
              alt="Icon"
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          {/* Perspective Toggle */}
          <PerspectiveToggle isTechnical={isTechnical} setIsTechnical={setIsTechnical} />

          {/* Dynamic Description */}
          <p className="mb-10 max-w-2xl font-Ovo leading-relaxed transition-all duration-300">
            {description}
          </p>

          {/* Experience Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-10">
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
          <ToolsList />
        </div>
      </div>
    </div>
  );
}