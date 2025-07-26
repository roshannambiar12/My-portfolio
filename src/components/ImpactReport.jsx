import React from 'react';
import Image from 'next/image';
import impact from "../assets/impact.png";

const ImpactReport = () => {
  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            Project Highlights
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Frontend Development Impact Report
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Key metrics from over 12 websites for education, agriculture, and IT.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* Image Column */}
            <div className="order-last lg:order-first">
              <Image
                className="w-full rounded-lg shadow-xl"
                src={impact}
                alt="A visual report showing improvements in performance, user engagement, and conversion rates."
                width={300}
                height={350}
                layout="responsive"
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Performance Optimization</h3>
                <p className="mt-2 text-base text-gray-600">
                  Migrated 12+ sites to a modern tech stack (Next.js, React), boosting Core Web Vitals.
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-green-800 bg-green-200 rounded-full">✓</span>
                    <p className="text-gray-600">Performance score increased from ~72 to ~88.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-green-800 bg-green-200 rounded-full">✓</span>
                    <p className="text-gray-600">Accessibility score boosted from ~82 to over ~95.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">Reusable Component Library</h3>
                <p className="mt-2 text-base text-gray-600">
                  Built a library used by 5 teams, achieving a <span className="font-bold">60% reduction in redundant code</span> and accelerating feature deployment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">User Engagement & CRO</h3>
                <p className="mt-2 text-base text-gray-600">
                  Redesigned dashboards and streamlined checkout funnels based on user behavior analysis.
                </p>
                <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-green-800 bg-green-200 rounded-full">✓</span>
                        <p className="text-gray-600">Led to a <span className="font-bold">35% reduction in user drop-off</span> at checkout.</p>
                    </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">Cross-Functional Collaboration</h3>
                <p className="mt-2 text-base text-gray-600">
                  Translated Figma prototypes into pixel-perfect React components, resulting in a <span className="font-bold">50% reduction in post-launch design revisions</span>.
                </p>
                 <p className="mt-4 text-lg text-gray-600 font-bold">
                 (All checked by Google Analytics Tools ans Microsoft Clarity.)
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800">Featured  Work</h4>
                <div className="flex flex-wrap mt-3 gap-x-4 gap-y-2">
                  <a href="https://www.egniol.co.in/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Egniol</a>
                  <a href="https://lyoninstitute.edu.eu/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Ligmr</a>
                  <a href="https://www.link2campus.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Link 2 Campus</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactReport;