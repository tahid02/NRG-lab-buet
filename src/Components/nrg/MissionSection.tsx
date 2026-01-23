import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#fff5f5] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fff5f5] rounded-full translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Mission
          </motion.p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Dedicated to understanding{' '}
            <span className="text-[#630e1d]">the atomic world</span> and
            transforming discovery into impact.
          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge synthesis techniques with advanced
            characterization to unlock the potential of nanostructured materials
            for energy, environment, and healthcare applications.
          </p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to={createPageUrl('About Us')}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#630e1d] text-[#630e1d] font-semibold rounded-full hover:bg-[#630e1d] hover:text-white transition-all group"
            >
              About The Lab
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
