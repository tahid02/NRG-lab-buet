import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, #fff5f5 30%, #ffe8e8 70%, #ffd4d4 100%)',
        }}
      />

      {/* Dotted texture - bottom corners */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, #630e1d 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, #630e1d 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-[#630e1d]/10 rounded-full" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#630e1d]/10 rounded-full" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <Sparkles className="text-[#00897b]" size={20} />
            <p className="text-sm uppercase tracking-[0.25em] text-[#b91c1c] font-bold">
              Why This Matters
            </p>
            <Sparkles className="text-[#00897b]" size={20} />
          </motion.div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            We use data-driven synthesis to{' '}
            <span className="text-[#630e1d]">
              solve the global energy crisis
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From improving solar cell efficiency to developing sustainable water
            purification systems, our research directly addresses humanity's
            most pressing challenges. Every discovery in our lab moves us closer
            to a cleaner, more sustainable future.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={createPageUrl('Join')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all hover:shadow-xl hover:shadow-[#00897b]/25 transform hover:-translate-y-1"
            >
              Join Our Lab
              <ArrowRight size={20} />
            </Link>
            <Link
              to={createPageUrl('Publications')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-[#630e1d] text-[#630e1d] font-semibold rounded-full hover:bg-[#630e1d] hover:text-white transition-all"
            >
              Read Our Publications
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '150+', label: 'Publications' },
            { number: '25', label: 'Team Members' },
            { number: '12', label: 'Active Projects' },
            { number: '8', label: 'Industry Partners' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-bold text-[#630e1d]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-gray-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
