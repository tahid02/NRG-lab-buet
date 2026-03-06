import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const machinery = [
  {
    name: 'X-Ray Diffraction (XRD) System',
    description:
      'Advanced X-ray diffraction system for crystal structure analysis and phase identification of nanomaterials. Provides precise measurements of lattice parameters and crystallinity. This system enables researchers to determine the atomic and molecular structure of crystalline materials with high accuracy, making it essential for characterizing synthesized nanoparticles, thin films, and bulk materials. The instrument features multiple detector options and automated sample handling for high-throughput analysis.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
  },
  {
    name: 'Scanning Electron Microscope (SEM)',
    description:
      'High-resolution scanning electron microscope for surface morphology analysis and elemental mapping. Capable of imaging nanostructures with sub-nanometer resolution. The SEM provides detailed topographical and compositional information through secondary and backscattered electron imaging. Equipped with energy-dispersive X-ray spectroscopy (EDS) for elemental analysis, allowing researchers to identify and map the distribution of elements within samples.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    name: 'Transmission Electron Microscope (TEM)',
    description:
      'State-of-the-art TEM for atomic-scale imaging and diffraction analysis. Essential for studying internal structure and defects in nanomaterials. This instrument offers resolution down to 0.1 nm, enabling direct observation of atomic arrangements. Features include selected area electron diffraction (SAED) for crystal structure determination and high-angle annular dark-field (HAADF) imaging for Z-contrast imaging.',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
  },
  {
    name: 'Glove Box System',
    description:
      'Inert atmosphere glove box for handling air-sensitive materials. Features oxygen and moisture levels below 1 ppm for safe manipulation of reactive compounds. The system includes antechambers for sample transfer without breaking the inert atmosphere, integrated solvent purification system, and gas monitoring sensors. Essential for handling air-sensitive precursors, nanomaterials, and conducting chemical reactions under controlled conditions.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    name: 'Electrochemical Workstation',
    description:
      'Multi-channel potentiostat/galvanostat for comprehensive electrochemical characterization. Supports battery testing, corrosion studies, and sensor development. Features include impedance spectroscopy, cyclic voltammetry, chronoamperometry, and galvanostatic cycling. Compatible with various cell configurations including coin cells, pouch cells, and three-electrode setups for fundamental electrochemical research.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
  },
  {
    name: 'Vacuum Furnace',
    description:
      'High-temperature vacuum furnace for material synthesis and annealing. Capable of reaching temperatures up to 1800°C under controlled atmosphere. The system features programmable temperature profiles, vacuum levels down to 10^-6 Torr, and gas flow control. Ideal for sintering ceramics, annealing thin films, and synthesizing materials under controlled thermal conditions with minimal contamination.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
  {
    name: 'Ball Mill System',
    description:
      'Planetary ball mill for mechanical alloying and nanoparticle synthesis. Provides precise control over milling speed and time for reproducible results. Features include variable rotation speeds (up to 1000 rpm), different milling media options, and programmable cycles. Essential for producing nanomaterials through mechanical grinding, alloying immiscible metals, and creating composite materials with uniform particle size distribution.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    name: 'Spectroscopy Suite',
    description:
      'Comprehensive spectroscopy equipment including FTIR, Raman, and UV-Vis spectroscopy. Essential for chemical composition and optical property analysis. The FTIR system provides molecular fingerprinting through infrared absorption, Raman spectroscopy offers vibrational analysis with high spatial resolution, and UV-Vis spectroscopy enables bandgap determination and optical characterization of nanomaterials.',
    image:
      'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80',
  },
];

export default function Facilities() {
  const { pathname } = useLocation();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const displayedMachinery = showAll ? machinery : machinery.slice(0, 3);

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
                Facilities
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                State-of-the-Art Research Equipment
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Our laboratory is equipped with cutting-edge instrumentation for
                advanced materials synthesis, characterization, and testing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Machinery Cards */}
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
                Lab <span className="text-[#630e1d]">Equipment</span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              {displayedMachinery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="lg:w-1/2 flex flex-col">
                      <h3
                        className="text-2xl font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {item.name}
                      </h3>
                      <p className="mt-4 text-gray-600 leading-relaxed text-base">
                        {item.description}
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
      </main>
    </div>
  );
}
