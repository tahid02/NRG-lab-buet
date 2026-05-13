import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const machinery = [
  {
    name: 'Contact angle measurement setup',
    description:
      'The Nanocomposite Research Group utilizes a high-precision Contact Angle Measurement Setup to characterize the surface energy, wettability, and interfacial properties of advanced materials. Equipped with a high-resolution, multi-spectral ADCAM-02 imaging system operating at a fine resolution of $0.1\ \mu\text{m}$, this specialized apparatus allows researchers to accurately capture and analyze liquid-solid interactions on a microscopic level. The system features a versatile z-axis translation range of 0–150 mm and is fully integrated with a dedicated MMC-8C multi-motor control module and MDU-4D micro-drive unit. This configuration ensures sub-micron accuracy during automated droplet deposition and substrate positioning, enabling highly repeatable static and dynamic contact angle evaluations.Understanding surface wetting characteristics is crucial for engineering high-performance nanocomposites. This facility plays a pivotal role in optimizing thin-film coatings, verifying the successful surface modification of nanomaterials, and predicting the dispersion and adhesion quality of nanofillers within polymer matrices. By providing quantitative data on hydrophobic or hydrophilic behaviors, this setup directly supports the development of tailored biomaterials, self-cleaning coatings, and robust functional composites.',
    image:
      'https://i.ibb.co/GQRBzNxG/image.png',
  },
  {
    name: 'UV-Vis double beam spectrophotometer',
    description:
      `The Nanocomposite Research Group's facilities feature a high-performance HALO DB-20S UV-Vis Double Beam Spectrophotometer, a cornerstone instrument for the optical and structural characterization of nanomaterials. Operating across a broad spectrum spanning ultraviolet (UV) and visible light wavelengths, this double-beam architecture simultaneously measures the sample and a reference blank. This design effectively eliminates light source fluctuations and drift, ensuring exceptional baseline stability, photometric accuracy, and reproducibility for demanding quantitative analyses.

In nanocomposite research, this facility is indispensable for investigating the optical properties, bandgap energy, and electronic structures of engineered materials. It allows researchers to actively monitor the synthesis of nanoparticles via localized surface plasmon resonance (LSPR) peaks, evaluate the transparency and UV-shielding efficiency of functional polymer films, and analyze the concentration and dispersion stability of nanofillers in various matrices. Integrated with dedicated data acquisition software, this system enables seamless kinetic studies, spectral scanning, and multi-wavelength analysis essential for advancing smart materials and thin-film technologies.`,
    image:
      'https://i.ibb.co/LzCKBwSS/image.png',
  },
  {
    name: 'Electrochemical workstation',
    description:
      `The laboratory is equipped with a high-precision Potentiostat/Galvanostat Electrochemical Workstation dedicated to exploring the electrical and interfacial phenomena of advanced material systems. This versatile system serves as a foundational platform for comprehensive electrochemical analysis, offering precise control over potential and current across a multi-electrode configuration. It supports an extensive suite of standard testing modalities, including Cyclic Voltammetry (CV), Linear Sweep Voltammetry (LSV), Chronoamperometry, and Electrochemical Impedance Spectroscopy (EIS), allowing for the rigorous evaluation of charge transfer kinetics and redox behaviors.

In the context of nanocomposite engineering, this facility is critical for characterizing energy storage and surface-active materials. Researchers utilize the workstation to evaluate the specific capacitance and cycling stability of supercapacitor electrodes, analyze the catalytic efficiency of novel nanocomposites, and investigate the corrosion inhibition properties of protective polymer coatings. By delivering high-resolution data on electron transport mechanisms, this system accelerates the design and optimization of functional nanomaterials for next-generation energy, sensor, and environmental applications.`,
    image:
      'https://i.ibb.co/q3BNF561/image.png',
  },
  {
    name: 'FTIR',
    description:
      '',
    image:
      'https://i.ibb.co/8gfSsX3D/image.png',
  },
  {
    name: 'Oven',
    description:
      '',
    image:
      'https://i.ibb.co/8njTX15F/image.png',
  },
  {
    name: 'Centrifuge mechine',
    description:
      '',
    image:
      'https://i.ibb.co/whkPzmfL/image.png',
  },
  {
    name: 'WM MS Sonicator',
    description:
      'precision balance ( left) ,Magnetic Stirrer(middle 2),  bath sonicator(right)',
    image:
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
