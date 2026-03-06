import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Lazy load the 3D component for better performance
const BuckyballScene = lazy(() => import('./BuckyballScene').then(module => ({ default: module.BuckyballScene })));

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-white to-[#fff5f5]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#630e1d 1px, transparent 1px),
              linear-gradient(90deg, #630e1d 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#630e1d] leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Engineering
              <br />
              the Future.
            </motion.h1>

            <motion.p
              className="mt-6 text-2xl sm:text-3xl italic text-gray-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Defining the Nanoscale.
            </motion.p>

            <motion.p
              className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At the Nanocomposite Research Group, we harness the power of
              nanomaterials to revolutionize energy storage, create stronger
              composites, and pioneer sustainable technologies.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to={createPageUrl('Research')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all hover:shadow-xl hover:shadow-[#00897b]/25 transform hover:-translate-y-1"
              >
                Learn More About Our Work
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            className="order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00897b]/10 via-transparent to-transparent rounded-full blur-3xl" />

            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-lg" />
            }>
              <BuckyballScene />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[#630e1d]/30 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#630e1d]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
