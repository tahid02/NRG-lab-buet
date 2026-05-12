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
  ChevronDown,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'Photoluminescence quenching in gold–MoS₂ hybrid nanoflakes',
    authors: ['Bhanu U', 'Islam MR', 'Tetard L', 'Khondaker SI'],
    journal: 'Scientific Reports',
    year: 2014,
    volume: '4',
    pages: '5575',
    doi: '10.1038/srep05575',
    citations: 333,
    category: '2D materials',
  },
  {
    title:
      'Structural, optical and photocatalysis properties of sol-gel deposited Al-doped ZnO thin films',
    authors: ['Islam MR', 'Rahman M', 'Farhad SFU', 'Podder J'],
    journal: 'Surfaces and Interfaces',
    year: 2019,
    volume: '16',
    pages: '120-126',
    doi: '10.1016/j.surfin.2019.05.007',
    citations: 325,
    category: 'Thin film',
  },
  {
    title:
      'Tuning the electrical property via defect engineering of single layer MoS₂ by oxygen plasma',
    authors: [
      'Islam MR',
      'Kang N',
      'Bhanu U',
      'Paudel HP',
      'Erementchouk M',
      'Tetard L',
      'Leuenberger MN',
      'Khondaker SI',
    ],
    journal: 'Nanoscale',
    year: 2014,
    volume: '6',
    pages: '10033-10039',
    doi: '10.1039/C4NR02142H',
    citations: 304,
    category: '2D materials',
  },
  {
    title:
      'Optical properties of ZnO nano fiber thin films grown by spray pyrolysis of zinc acetate precursor',
    authors: ['Islam MR', 'Podder J'],
    journal: 'Crystal Research and Technology',
    year: 2009,
    volume: '44',
    pages: '286-292',
    doi: '10.1002/crat.200800326',
    citations: 227,
    category: 'Thin film',
  },
  {
    title:
      'Two-dimensional lateral heterojunction through bandgap engineering of MoS₂ via oxygen plasma',
    authors: ['Choudhary N', 'Islam MR', 'Kang N', 'Tetard L', 'Jung Y', 'Khondaker SI'],
    journal: 'Journal of Physics: Condensed Matter',
    year: 2016,
    volume: '28',
    pages: '364002',
    doi: '10.1088/0953-8984/28/36/364002',
    citations: 99,
    category: '2D materials',
  },
];

const categories = [
  'All',
  'Nanotechnology',
  'Carbon nanotube',
  '2D materials',
  'Thin film',
];
const years = ['All', '2019', '2016', '2014', '2009'];

export default function Publications() {
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [showAllPublications, setShowAllPublications] = useState(false);
  const INITIAL_PUBLICATIONS_TO_SHOW = 3;

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
                Explore our peer-reviewed publications on 2D materials,
                nanotechnology, and thin film research in leading scientific
                journals.
              </p>
            </motion.div>
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
              {filteredPublications
                .slice(
                  0,
                  showAllPublications
                    ? filteredPublications.length
                    : INITIAL_PUBLICATIONS_TO_SHOW
                )
                .map((pub, index) => (
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
                            className="flex items-center gap-2 px-4 py-2 bg-[#00897b] text-white text-sm font-medium rounded-lg hover:bg-[#00796b] transition-colors ml-auto"
                          >
                            <ExternalLink size={16} />
                            DOI
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {filteredPublications.length > INITIAL_PUBLICATIONS_TO_SHOW && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#630e1d] text-white font-medium rounded-full hover:bg-[#4a0a15] transition-colors"
                >
                  {showAllPublications ? 'Show Less' : 'See More'}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      showAllPublications ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            )}

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
