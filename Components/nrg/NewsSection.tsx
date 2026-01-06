import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    date: 'December 15, 2024',
    headline: 'NRG Team Publishes Breakthrough in Nature Nanotechnology',
    summary:
      'Our latest research on graphene-based supercapacitors achieves record energy density.',
  },
  {
    date: 'November 28, 2024',
    headline: 'Dr. Rahman Receives National Science Award',
    summary:
      'Principal Investigator honored for contributions to sustainable energy materials.',
  },
  {
    date: 'October 10, 2024',
    headline: 'New Industry Partnership with Samsung SDI',
    summary:
      'Collaborative project to develop next-generation solid-state battery technology.',
  },
];

export default function NewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#fff5f5]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-4">
            Stay Updated
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Latest <span className="text-[#630e1d]">News</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={createPageUrl('News')}
                className="block py-8 border-b border-[#630e1d]/10 hover:bg-white/50 transition-colors px-6 -mx-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-[#630e1d] font-medium shrink-0 lg:w-48">
                    <Calendar size={16} />
                    <span className="text-sm">{item.date}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.headline}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm lg:text-base">
                      {item.summary}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-[#00897b] font-semibold shrink-0">
                    <span className="text-sm hidden sm:inline">Read More</span>
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to={createPageUrl('News')}
            className="inline-flex items-center gap-2 text-[#630e1d] font-semibold hover:gap-4 transition-all"
          >
            View All News
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
