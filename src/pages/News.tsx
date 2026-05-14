import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  Award,
  Newspaper,
  Users,
  Microscope,
  X,
} from 'lucide-react';

interface NewsItem {
  date: string;
  category: string;
  icon: React.ElementType;
  title: string;
  summary: string;
  description: React.ReactNode;
  highlights: string[];
  impact: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const newsItems: NewsItem[] = [
  {
    date: 'March 17, 2026',
    category: 'Publication',
    icon: Newspaper,
    title: 'NRG Lab Publishes Breakthrough in ACS Applied Nano Materials',
    summary:
      'Our lab engineered a novel MoSe₂/V₂O₅ nanocomposite that significantly enhances ion intercalation and energy storage capabilities for symmetric supercapacitors.',
    description: (
      <>
        <p className="mb-4">
          The Nanocomposite Laboratory at BUET has achieved a major milestone with the publication of its latest work in ACS Applied Nano Materials, a highly respected peer-reviewed journal in the field. The study demonstrates a novel binary heterostructure architecture for symmetric supercapacitors that delivers exceptional energy density, impressive specific capacitance, and remarkable long-term stability.
        </p>
        <p className="mb-4">
          <strong>Technical Innovation.</strong> The breakthrough centers on incorporating V2O5 nanobelts into 2H-MoSe2 nanoflowers via a carefully controlled hydrothermal approach. By optimizing the integration to a 1% V2O5 concentration, the team achieved significant interfacial passivation and defect mediation. This engineered structural modification expands the interlayer spacing and introduces disorder-induced surface sites, creating a highly efficient dual-storage mechanism. This synergy allows for diffusion-driven ion intercalation alongside standard surface adsorption, striking an effective balance between high redox activity and rapid charge and ion transport.
        </p>
        <p>
          <strong>Scalability and Prototyping.</strong> Beyond the theoretical framework, the optimized nanocomposite electrode exhibited a remarkable specific capacitance of 948.13 F/g at 0.33 A/g in a three-electrode setup. When assembled into a symmetric two-electrode configuration, the device achieved an energy density of 21.02 Wh/kg at a power density of 4000 W/kg, while maintaining an outstanding 98.6% capacity retention over 12,000 cycles. To demonstrate real-world viability, the team successfully fabricated a coin cell prototype that continuously illuminated red, yellow, and green LED lamps. This positions the advanced MoSe2/V2O5 technology as a highly promising and dependable candidate for integration into the next generation of sustainable energy storage systems.
        </p>
      </>
    ),
    highlights: [
      'Record volumetric energy density of >120 Wh·L⁻¹ for a graphene supercapacitor',
      'Dual-storage mechanism combining EDLC and pseudocapacitance',
      'Pouch-cell prototypes validated for industrial roll-to-roll manufacturing',
      'Stable operation across −20 °C to 60 °C temperature window',
      'Featured in Nature Nanotechnology with an accompanying News & Views article',
    ],
    impact:
      'This work redefines the practical ceiling for supercapacitor energy density and provides a credible roadmap for high-power, long-lifetime energy storage in electric mobility and renewable grid stabilization. Several industry partners have initiated licensing discussions.',
    tags: ['Supercapacitors', 'Graphene', 'Nature Nanotechnology', 'Energy Storage', 'EVs'],
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    featured: true,
  },

];

const categoryColors: Record<string, string> = {
  Publication: 'bg-[#00897b]/10 text-[#00897b]',
  Award: 'bg-amber-100 text-amber-700',
  Partnership: 'bg-blue-100 text-blue-700',
  Event: 'bg-purple-100 text-purple-700',
  Grant: 'bg-green-100 text-green-700',
};

function NewsModal({ news, onClose }: { news: NewsItem; onClose: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleKeyDown]);

  const Icon = news.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`news-modal-title-${news.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        ref={contentRef}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00897b]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Banner Image */}
          <div className="relative h-56 sm:h-72 lg:h-80">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#00897b]/90 text-white">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                  {news.category}
                </span>
                <span className="flex items-center gap-1.5 text-white/70 text-sm">
                  <Calendar size={14} />
                  {news.date}
                </span>
              </div>
              <h2
                id={`news-modal-title-${news.title}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {news.title}
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#00897b]/10 text-[#00897b] text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base sm:text-lg">
              {news.description}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function News() {
  const { pathname } = useLocation();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const featuredNews = newsItems.filter((n) => n.featured);
  const regularNews = newsItems.filter((n) => !n.featured);

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
                News & Media
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Latest Updates from the Lab
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Stay informed about our research achievements, awards, events,
                and partnerships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2
                className="text-3xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Featured <span className="text-[#630e1d]">Stories</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => {
                const Icon = news.icon;
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer focus-within:ring-2 focus-within:ring-[#00897b] focus-within:ring-offset-2"
                    onClick={() => setSelectedNews(news)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedNews(news);
                      }
                    }}
                    role="button"
                    aria-label={`Open details for ${news.title}`}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[news.category]
                            }`}
                        >
                          {news.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/80 text-sm">
                          <Calendar size={14} />
                          {news.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {news.title}
                      </h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {news.summary}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNews(news);
                        }}
                        className="mt-4 inline-flex items-center gap-2 text-[#00897b] font-semibold hover:gap-4 transition-all group/btn"
                      >
                        Read More
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover/btn:translate-x-2"
                        />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-20 bg-[#fff5f5]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2
                className="text-3xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                All <span className="text-[#630e1d]">News</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[...featuredNews, ...regularNews].map((news, index) => {
                const Icon = news.icon;
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer focus-within:ring-2 focus-within:ring-[#00897b] focus-within:ring-offset-2"
                    onClick={() => setSelectedNews(news)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedNews(news);
                      }
                    }}
                    role="button"
                    aria-label={`Open details for ${news.title}`}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[news.category]
                              }`}
                          >
                            {news.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                            <Calendar size={14} />
                            {news.date}
                          </span>
                        </div>
                        <h3
                          className="text-lg font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {news.title}
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                          {news.summary}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedNews(news);
                          }}
                          className="mt-3 inline-flex items-center gap-2 text-[#00897b] font-medium text-sm hover:gap-4 transition-all"
                        >
                          Read More
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedNews && (
          <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
