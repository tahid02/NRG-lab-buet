import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  Award,
  Newspaper,
  Users,
  Microscope,
} from 'lucide-react';

const newsItems = [
  {
    date: 'December 15, 2024',
    category: 'Publication',
    icon: Newspaper,
    title: 'NRG Lab Publishes Breakthrough in Nature Nanotechnology',
    summary:
      'Our latest research on graphene-based supercapacitors achieves record energy density, opening new pathways for next-generation energy storage devices.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    featured: true,
  },
  {
    date: 'November 28, 2024',
    category: 'Award',
    icon: Award,
    title: 'Dr. Rahman Receives National Science Award',
    summary:
      'Principal Investigator Dr. Muhammad Rahman has been honored with the prestigious National Science Award for his outstanding contributions to sustainable energy materials research.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    featured: true,
  },
  {
    date: 'October 10, 2024',
    category: 'Partnership',
    icon: Users,
    title: 'New Industry Partnership with Samsung SDI',
    summary:
      'NRG announces a collaborative research project with Samsung SDI to develop next-generation solid-state battery technology for electric vehicles.',
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    featured: false,
  },
  {
    date: 'September 5, 2024',
    category: 'Event',
    icon: Microscope,
    title: 'NRG Hosts International Nanomaterials Symposium',
    summary:
      'Over 200 researchers from 15 countries gathered at BUET for the 3rd International Symposium on Nanomaterials for Energy Applications.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    featured: false,
  },
  {
    date: 'August 20, 2024',
    category: 'Award',
    icon: Award,
    title: 'Ph.D. Student Wins Best Poster Award',
    summary:
      'Rashid Hossain received the Best Poster Award at the Asian Conference on Electrochemistry for his work on solid-state electrolytes.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    featured: false,
  },
  {
    date: 'July 12, 2024',
    category: 'Grant',
    icon: Newspaper,
    title: 'New Research Grant from Ministry of Science',
    summary:
      'NRG secures a 3-year research grant worth BDT 2.5 crore to develop high-performance solid-state batteries for renewable energy storage.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: false,
  },
];

const categoryColors = {
  Publication: 'bg-[#00897b]/10 text-[#00897b]',
  Award: 'bg-amber-100 text-amber-700',
  Partnership: 'bg-blue-100 text-blue-700',
  Event: 'bg-purple-100 text-purple-700',
  Grant: 'bg-green-100 text-green-700',
};

export default function News() {
  const { pathname } = useLocation();

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
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
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
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            categoryColors[news.category]
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
                      <button className="mt-4 inline-flex items-center gap-2 text-[#00897b] font-semibold hover:gap-4 transition-all group/btn">
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
              {regularNews.map((news, index) => {
                const Icon = news.icon;
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
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
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              categoryColors[news.category]
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
                        <button className="mt-3 inline-flex items-center gap-2 text-[#00897b] font-medium text-sm hover:gap-4 transition-all">
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

        {/* Newsletter */}
        <section className="py-20 bg-[#630e1d]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Stay Updated
              </h2>
              <p className="mt-4 text-white/80 text-lg">
                Subscribe to our newsletter for the latest research updates and
                news.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
