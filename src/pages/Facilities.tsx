import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const machinery = [
  {
    name: 'Contact angle measurement setup',
    description:
`The laboratory utilizes a high-precision Contact Angle Measurement Setup to characterize the surface energy, wettability, and interfacial properties of advanced materials. Equipped with a high-resolution, multi-spectral ADCAM-02 imaging system operating at $0.1\ \mu\text{m}$, this apparatus allows researchers to accurately capture and analyze liquid-solid interactions on a microscopic level. Fully integrated with an MMC-8C multi-motor control module and MDU-4D micro-drive unit, this configuration ensures sub-micron accuracy during automated droplet deposition and substrate positioning. 
\n\n This setup directly supports the development of functional composites by evaluating the dispersion and adhesion quality of nanofillers within polymer matrices.`,    image:
      'https://i.ibb.co/GQRBzNxG/image.png',
  },
  {
    name: 'UV-Vis double beam spectrophotometer',
    description:
     `The facilities feature a high-performance HALO DB-20S UV-Vis Double Beam Spectrophotometer, a cornerstone instrument for the optical and structural characterization of nanomaterials. Operating across ultraviolet and visible light wavelengths, its double-beam architecture simultaneously measures the sample and a reference blank to eliminate light source fluctuations and ensure exceptional baseline stability. This facility is indispensable for investigating optical properties, bandgap energy, and electronic structures. It allows researchers to monitor nanoparticle synthesis via localized surface plasmon resonance peaks and evaluate the transparency and UV-shielding efficiency of functional polymer films.`,    image:
      'https://i.ibb.co/LzCKBwSS/image.png',
  },
  {
    name: 'Electrochemical workstation',
    description:
`The laboratory is equipped with a high-precision Potentiostat/Galvanostat Electrochemical Workstation dedicated to exploring the electrical and interfacial phenomena of advanced material systems. Offering precise control over potential and current across a multi-electrode configuration, it supports an extensive suite of standard testing modalities, including Cyclic Voltammetry (CV) and Electrochemical Impedance Spectroscopy (EIS). This facility is critical for characterizing energy storage and surface-active materials. Researchers utilize the workstation to evaluate the specific capacitance of supercapacitor electrodes, analyze catalytic efficiency, and investigate the corrosion inhibition properties of protective coatings.`, image:
      'https://i.ibb.co/q3BNF561/image.png',
  },
  {
    name: 'FTIR',
    description:
      `The facility features a compact, high-performance Shimadzu IRSpirit Fourier Transform Infrared (FTIR) Spectrophotometer, equipped with a QATR-S single-reflection Attenuated Total Reflection (ATR) accessory. This setup allows for the direct, non-destructive analysis of solid, liquid, and powder samples without requiring extensive preparation such as KBr pellet pressing. By measuring characteristic infrared absorption and molecular vibrations, the system generates high-resolution spectra for rapid chemical identification. It is primarily utilized to confirm the successful surface functionalization of nanomaterials, monitor chemical cross-linking, and detect interfacial bonding between nanofillers and host substrates.`,
    image:
      'https://i.ibb.co/8gfSsX3D/image.png',
  },
  {
    name: 'Oven',
    description:
      `The laboratory features a series of high-performance Laboratory Drying Ovens designed for precise thermal processing, moisture removal, and sample conditioning. These units provide reliable, uniform temperature control across a broad operating range, featuring digital PID controllers and integrated observation windows for safe, real-time monitoring. The multi-unit configuration allows researchers to concurrently run independent thermal cycles—such as solvent evaporation or high-temperature curing—maximizing workflow efficiency. These ovens are routinely utilized for the controlled drying of synthesized nanoparticles and the thermal cross-linking of functional polymer-matrix thin films.`,
    image:
      'https://i.ibb.co/8njTX15F/image.png',
  },
  {
    name: 'Centrifuge mechine',
    description:
      `The facility utilizes a Biobase BKC-TH16II High-Speed Centrifuge for the liquid-phase separation, purification, and processing of chemical mixtures. Equipped with a microcomputer control system, it allows users to precisely program parameters such as rotational speed, Relative Centrifugal Force (RCF), processing time, and acceleration profiles via a digital display. In advanced materials synthesis, this centrifuge is foundational for the isolation and washing steps of wet-chemical processes. Researchers employ the system to harvest synthesized nanoparticles or functionalized nanotubes from liquid reaction mixtures, cleanly separating them from excess precursors and unreacted byproducts.`, image:
      'https://i.ibb.co/whkPzmfL/image.png',
  },
  {
    name: 'WM MS Sonicator',
    description:
`The laboratory features an integrated Material Synthesis and Preparation Station, combining precision weighing, thermal mixing, and ultrasonic processing equipment into a centralized workflow. On the left, a high-resolution Analytical Precision Balance enclosed in a draft shield provides accurate measurement of chemical precursors down to sub-milligram levels. In the center, a pair of Hotplate Magnetic Stirrers offers independent control over rotational speed and heating for uniform dissolution and steady chemical reactions. Completing the station on the right is a digital Ultrasonic Bath Sonicator, which utilizes acoustic cavitation to disrupt agglomerated nanoparticles and ensure uniform dispersion within polymer solutions.`, image:
      'https://i.ibb.co/chNzLb4t/WM-MS-Sonicator.png',
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
