import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const machinery = [
  {
    name: 'Contact angle measurement setup',
    description:
      `Our high-precision Contact Angle Measurement Setup characterizes the surface energy, wettability, and interfacial properties of advanced materials. Equipped with a 0.1 μm multi-spectral ADCAM-02 imaging system and automated micro-drive controls (MMC-8C and MDU-4D), the apparatus ensures sub-micron accuracy during droplet deposition and substrate positioning. By precisely analyzing microscopic liquid-solid interactions, this facility actively supports the development of functional composites by evaluating nanofiller dispersion and adhesion within polymer matrices.`, image:
      '/public/images/facilities/contact angle measurement.png',
  },
  {
    name: 'UV-Vis double beam spectrophotometer',
    description:
      `Our facility features a high-performance HALO DB-20S UV-Vis Double Beam Spectrophotometer for the precise optical and structural characterization of nanomaterials. Its double-beam architecture measures both sample and reference simultaneously, ensuring exceptional baseline stability by eliminating light source fluctuations. This instrument is essential for determining bandgap energies, monitoring nanoparticle synthesis via localized surface plasmon resonance, and evaluating the transparency and UV-shielding efficiency of functional polymer films.`, image:
      '/public/images/facilities/uv_spectroscopy.jpeg',
  },
  {
    name: 'Electrochemical workstation',
    description:
      `Our high-precision Potentiostat/Galvanostat Electrochemical Workstation provides rigorous analysis of electrical and interfacial phenomena in advanced materials. Offering exact control over potential and current in multi-electrode configurations, it supports essential techniques including Cyclic Voltammetry (CV) and Electrochemical Impedance Spectroscopy (EIS). This facility is vital for characterizing energy storage and surface-active materials, enabling researchers to evaluate the specific capacitance of supercapacitor electrodes, analyze catalytic efficiency, and investigate corrosion inhibition in protective coatings.`, image:
      '/public/images/facilities/Electrochemical mechine.jpeg',
  },
  {
    name: 'FTIR',
    description:
      `Our facility features a high-performance Shimadzu IRSpirit FTIR Spectrophotometer equipped with a QATR-S ATR accessory for direct, non-destructive analysis of solids, liquids, and powders. By eliminating extensive sample preparation, the system rapidly generates high-resolution vibrational spectra for chemical identification. This instrument is essential for confirming nanomaterial surface functionalization, monitoring chemical cross-linking, and detecting interfacial bonding between nanofillers and host substrates.`,
    image:
      '/public/images/facilities/ftir.png',
  },
  {
    name: 'Oven',
    description:
      `Our facility features a series of high-performance Laboratory Drying Ovens designed for precise thermal processing, moisture removal, and sample conditioning. Equipped with digital PID controllers for uniform temperature regulation, the multi-unit configuration enables concurrent thermal cycles to maximize workflow efficiency. These ovens are essential for solvent evaporation, high-temperature curing, the controlled drying of synthesized nanoparticles, and the thermal cross-linking of functional polymer-matrix thin films.`,
    image:
      '/public/images/facilities/Oven.png',
  },
  {
    name: 'Centrifuge mechine',
    description:
      `Our facility utilizes a Biobase BKC-TH16II High-Speed Centrifuge for the precise liquid-phase separation and purification of chemical mixtures. Featuring a programmable microcomputer control system to regulate rotational speed, Relative Centrifugal Force (RCF), and acceleration profiles, it is essential for the isolation and washing steps in wet-chemical synthesis. This system enables researchers to efficiently harvest synthesized nanoparticles and functional materials by cleanly separating them from excess precursors and unreacted byproducts.`, image:
      '/public/images/facilities/centrifuge machine.png',
  },
  {
    name: 'Precision Synthesis & Dispersion Station',
    description:
      `Our integrated Material Synthesis and Preparation Station combines precision weighing, thermal mixing, and ultrasonic processing into a centralized workflow. The station features a high-resolution Analytical Precision Balance for the sub-milligram measurement of chemical precursors, alongside Hotplate Magnetic Stirrers that provide controlled heating and agitation for uniform dissolution. Additionally, a digital Ultrasonic Bath Sonicator utilizes acoustic cavitation to disrupt nanoparticle agglomerates, ensuring homogenous dispersion within polymer solutions and liquid reaction mixtures.`, image:
      '/public/images/facilities/WM_MS_Sonicator.png',
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
