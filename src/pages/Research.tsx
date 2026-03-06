import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const researchAreas = [
  {
    title: 'Energy Storage',
    description:
      'Developing next-generation lithium-ion batteries, solid-state electrolytes, and supercapacitors using nanostructured materials for higher energy density and faster charging.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
  },
  {
    title: 'Nanocomposites',
    description:
      'Engineering polymer-nanoparticle composites with enhanced mechanical, thermal, and electrical properties for aerospace and automotive applications.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    title: 'Catalysis',
    description:
      'Designing atomic-scale catalytic sites on 2D materials for sustainable chemical transformations, including CO2 reduction and hydrogen evolution.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
  {
    title: 'Solar Energy',
    description:
      'Improving perovskite and quantum dot solar cells through interface engineering and novel charge transport layers.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    title: 'Characterization',
    description:
      'Advanced microscopy and spectroscopy techniques for understanding structure-property relationships at the nanoscale.',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
  },
  {
    title: '2D Materials',
    description:
      'Synthesis and application of graphene, MXenes, and transition metal dichalcogenides for electronics and sensing.',
    image:
      'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80',
  },
];

const activeProjects = [
  {
    title: 'High-Performance Solid-State Batteries',
    funder: 'Ministry of Science & Technology',
    duration: '2023-2026',
    pi: 'Dr. Rahman',
    status: 'Active',
  },
  {
    title: 'Graphene-Enhanced Polymer Composites',
    funder: 'Samsung SDI Partnership',
    duration: '2024-2025',
    pi: 'Dr. Ahmed',
    status: 'Active',
  },
  {
    title: 'Nanostructured Photocatalysts for Water Splitting',
    funder: 'BUET Research Grant',
    duration: '2022-2025',
    pi: 'Dr. Islam',
    status: 'Active',
  },
];

export default function Research() {
  const { pathname } = useLocation();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const displayedResearchAreas = showAll
    ? researchAreas
    : researchAreas.slice(0, 3);

  return (
    <div>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-white to-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-4">
                Research
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Pushing the Boundaries of Materials Science
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Our research spans the fundamental understanding of
                nanomaterials to their application in solving real-world
                challenges in energy, environment, and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Research <span className="text-[#630e1d]">Themes</span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              {displayedResearchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-2/5 h-80 overflow-hidden rounded-xl">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="lg:w-3/5 flex flex-col">
                      <h3
                        className="text-2xl font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {area.title}
                      </h3>
                      <p className="mt-4 text-gray-600 leading-relaxed text-base">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {!showAll && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center pt-8"
                >
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all hover:shadow-lg hover:shadow-[#00897b]/25"
                  >
                    See More
                    <ArrowDown size={20} />
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-20 bg-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Active <span className="text-[#630e1d]">Projects</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {activeProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold text-[#630e1d]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Principal Investigator: {project.pi}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="px-4 py-1.5 bg-[#00897b]/10 text-[#00897b] text-sm font-medium rounded-full">
                        {project.duration}
                      </span>
                      <span className="text-sm text-gray-500">
                        {project.funder}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
