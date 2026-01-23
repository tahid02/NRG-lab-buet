import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  ExternalLink,
  FileText,
  Calendar,
  Users,
  Filter,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title:
      'High-Performance Solid-State Lithium Batteries Using Nanostructured Garnet Electrolytes',
    authors: ['Rahman M', 'Ahmed F', 'Hossain R'],
    journal: 'Nature Nanotechnology',
    year: 2024,
    volume: '19',
    pages: '234-245',
    doi: '10.1038/s41565-024-xxxxx',
    citations: 45,
    category: 'Energy Storage',
  },
  {
    title:
      'Graphene-Polymer Nanocomposites with Ultra-High Thermal Conductivity',
    authors: ['Ahmed F', 'Rahman M', 'Islam K'],
    journal: 'Advanced Materials',
    year: 2024,
    volume: '36',
    pages: '2301456',
    doi: '10.1002/adma.2024xxxxx',
    citations: 38,
    category: 'Nanocomposites',
  },
  {
    title: 'Atomically Dispersed Catalysts for Efficient CO2 Electroreduction',
    authors: ['Islam K', 'Khan A', 'Rahman M'],
    journal: 'Science',
    year: 2023,
    volume: '382',
    pages: '768-774',
    doi: '10.1126/science.xxxxx',
    citations: 156,
    category: 'Catalysis',
  },
  {
    title: 'MXene-Based Supercapacitors with Record Energy Density',
    authors: ['Hossain R', 'Rahman M'],
    journal: 'Joule',
    year: 2023,
    volume: '7',
    pages: '1523-1540',
    doi: '10.1016/j.joule.2023.xxxxx',
    citations: 89,
    category: 'Energy Storage',
  },
  {
    title: 'Interface Engineering for Efficient Perovskite Solar Cells',
    authors: ['Mahmud T', 'Rahman M', 'Ahmed F'],
    journal: 'Energy & Environmental Science',
    year: 2023,
    volume: '16',
    pages: '2890-2905',
    doi: '10.1039/d3ee00xxx',
    citations: 67,
    category: 'Solar Energy',
  },
  {
    title: 'Scalable Synthesis of 2D Transition Metal Dichalcogenides',
    authors: ['Khan A', 'Islam K', 'Rahman M'],
    journal: 'ACS Nano',
    year: 2023,
    volume: '17',
    pages: '4567-4580',
    doi: '10.1021/acsnano.3cxxxxx',
    citations: 52,
    category: '2D Materials',
  },
  {
    title: 'Nanostructured Electrodes for Next-Generation Batteries',
    authors: ['Rahman M', 'Hossain R'],
    journal: 'Chemical Reviews',
    year: 2022,
    volume: '122',
    pages: '12345-12400',
    doi: '10.1021/acs.chemrev.2cxxxxx',
    citations: 234,
    category: 'Energy Storage',
  },
  {
    title: 'Polymer-Clay Nanocomposites: A Comprehensive Review',
    authors: ['Ahmed F', 'Sultana N', 'Rahman M'],
    journal: 'Progress in Materials Science',
    year: 2022,
    volume: '130',
    pages: '100995',
    doi: '10.1016/j.pmatsci.2022.xxxxx',
    citations: 178,
    category: 'Nanocomposites',
  },
];

const categories = [
  'All',
  'Energy Storage',
  'Nanocomposites',
  'Catalysis',
  'Solar Energy',
  '2D Materials',
];
const years = ['All', '2024', '2023', '2022'];

export default function Publications() {
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((a) =>
        a.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || pub.category === selectedCategory;
    const matchesYear =
      selectedYear === 'All' || pub.year.toString() === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

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
                Publications
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Research Impact
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Explore our peer-reviewed publications in leading scientific
                journals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '150+', label: 'Total Publications' },
                { number: '8,500+', label: 'Total Citations' },
                { number: '42', label: 'h-index' },
                { number: '15', label: 'Journal Covers' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-3xl lg:text-4xl font-bold text-[#630e1d]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50 sticky top-[72px] z-40 border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Search by title, author, or journal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-white"
                />
              </div>
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">Category:</span>
                </div>
                {categories.slice(0, 4).map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full ${
                      selectedCategory === cat
                        ? 'bg-[#630e1d] hover:bg-[#4a0a15]'
                        : 'hover:bg-[#fff5f5] hover:text-[#630e1d] hover:border-[#630e1d]'
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2 w-full lg:w-auto">
                <span className="text-sm text-gray-500 self-center">Year:</span>
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                    className={`rounded-full ${
                      selectedYear === year
                        ? 'bg-[#00897b] hover:bg-[#00796b]'
                        : 'hover:bg-[#00897b]/10 hover:text-[#00897b] hover:border-[#00897b]'
                    }`}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-8">
              Showing {filteredPublications.length} of {publications.length}{' '}
              publications
            </p>

            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#630e1d]/20 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex p-3 bg-[#fff5f5] rounded-lg text-[#630e1d]">
                      <FileText size={24} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {pub.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                        <Users size={14} />
                        <span>{pub.authors.join(', ')}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm">
                        <span className="text-[#00897b] font-medium">
                          {pub.journal}
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <Calendar size={14} />
                          {pub.year}
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">
                          Vol. {pub.volume}, pp. {pub.pages}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {pub.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {pub.citations} citations
                        </span>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-[#00897b] hover:underline ml-auto"
                        >
                          <ExternalLink size={14} />
                          DOI
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPublications.length === 0 && (
              <div className="text-center py-16">
                <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">
                  No publications found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
