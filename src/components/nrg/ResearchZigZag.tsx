import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const researchItems = [
  {
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    headline: 'How do we double battery life?',
    description:
      'Exploring nanostructured electrodes and solid-state electrolytes to create next-generation energy storage systems.',
    boxBg: 'bg-[#fff5f5]',
    imageLeft: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    headline: 'Can we build stronger materials?',
    description:
      'Engineering polymer-nanoparticle composites with unprecedented strength-to-weight ratios.',
    boxBg: 'bg-gray-50',
    imageLeft: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    headline: 'What makes catalysts efficient?',
    description:
      'Designing atomic-scale catalytic sites for sustainable chemical transformations.',
    boxBg: 'bg-[#fff5f5]',
    imageLeft: true,
  },
];

function ResearchRow({ item, index }) {
  const { image, headline, description, boxBg, imageLeft } = item;

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-0 ${
        !imageLeft ? 'lg:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden h-[300px] lg:h-[450px] ${
          !imageLeft ? 'lg:order-2' : ''
        }`}
      >
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Text Box */}
      <div
        className={`${boxBg} p-8 lg:p-16 flex flex-col justify-center ${
          !imageLeft ? 'lg:order-1' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#630e1d] leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {headline}
          </h3>
          <p className="mt-6 text-gray-600 leading-relaxed">{description}</p>
          <Link
            to={createPageUrl('Research')}
            className="inline-flex items-center gap-2 mt-8 text-[#00897b] font-semibold hover:gap-4 transition-all group"
          >
            View Research
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-2"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ResearchZigZag() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-4">
            Research Focus
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Questions That <span className="text-[#630e1d]">Drive Us</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {researchItems.map((item, index) => (
          <ResearchRow key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
