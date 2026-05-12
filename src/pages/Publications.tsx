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
  Sparkles,
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
  {
    title:
      'Advanced Antibacterial Packaging for Food Preservation Through Multifunctional Metal–Organic Framework Nanocomposite',
    authors: ['Khan MJ', 'Hafeez F', 'Islam MR', 'Zhu C', 'Xianyu Y'],
    journal: 'Small',
    year: 2025,
    volume: '21',
    pages: '2501111',
    doi: '10.1002/smll.202501111',
    citations: 14,
    category: 'Nanotechnology',
    recent: true,
  },
  {
    title:
      'Tuning the electrochemical performance of a hierarchical MoO₃/CdO binary heterostructure for supercapacitor applications',
    authors: ['Ullah S', 'Roy P', 'Zubair MA', 'Islam MR'],
    journal: 'Nanoscale Advances',
    year: 2025,
    volume: '7',
    pages: '5681-5700',
    doi: '10.1039/d5na00491h',
    citations: 8,
    category: 'Nanotechnology',
    recent: true,
  },
  {
    title:
      'Defect mediated modulation of electrochemical efficacy and stability of Fe₃O₄ nanodiamond incorporated MoS₂ based hierarchical 2D nanostructures for high performance supercapacitor electrodes',
    authors: ['Siddiki MR', 'Abtahee SA', 'Hasan M', 'Rahaman M', 'Islam MR', 'Zubair MA'],
    journal: 'Materials Advances',
    year: 2025,
    volume: '6',
    pages: '5126-5148',
    doi: '10.1039/d5ma00291e',
    citations: 5,
    category: '2D materials',
    recent: true,
  },
  {
    title:
      'Defect functionalized morphological, structural, and optical properties of MnS incorporated MoS₂ heterostructure: Experimental and theoretical insight',
    authors: ['Rahaman M', 'Islam MJ', 'Hossain KS', 'Islam MR'],
    journal: 'Heliyon',
    year: 2025,
    volume: '11',
    pages: 'e42490',
    doi: '10.1016/j.heliyon.2025.e42490',
    citations: 4,
    category: '2D materials',
    recent: true,
  },
  {
    title:
      'Effects of cellulose acetate on electrochemical performance in poly vinylidene fluoride-co-hexafluoropropylene solid-state electrolytes',
    authors: ['Nasib I', 'Islam MR', 'Firouzi M', 'Xie W', 'Davis RA', 'Toan S'],
    journal: 'Ionics',
    year: 2025,
    volume: '31',
    pages: '10489-10504',
    doi: '10.1007/s11581-025-06539-z',
    citations: 1,
    category: 'Nanotechnology',
    recent: true,
  },
];

const categories = [
  'All',
  'Most Recent',
  'Nanotechnology',
  'Carbon nanotube',
  '2D materials',
  'Thin film',
];
const years = ['All', '2025', '2019', '2016', '2014', '2009'];

// Dynamically compute which publications appear under "Most Recent":
// every paper from the latest year in the dataset + top-5 cited from the year before it.
const latestYear = Math.max(...publications.map((p) => p.year));
const prevYear = latestYear - 1;

const recentDois = new Set<string>([
  // All publications from the most recent year (e.g. 2026 once they exist)
  ...publications.filter((p) => p.year === latestYear).map((p) => p.doi),
  // Top 5 most-cited publications from the previous year
  ...publications
    .filter((p) => p.year === prevYear)
    .sort((a, b) => (b.citations ?? 0) - (a.citations ?? 0))
    .slice(0, 5)
    .map((p) => p.doi),
]);

export default function Publications() {
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [showAllPublications, setShowAllPublications] = useState(false);
  const INITIAL_PUBLICATIONS_TO_SHOW = 4;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setShowAllPublications(false);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setShowAllPublications(false);
  };

  const filtered = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Most Recent'
        ? recentDois.has(pub.doi)
        : pub.category === selectedCategory);
    const matchesYear =
      selectedYear === 'All' || pub.year.toString() === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const filteredPublications =
    selectedCategory === 'Most Recent'
      ? [...filtered].sort((a, b) => {
          if (b.year !== a.year) return b.year - a.year;
          return (b.citations ?? 0) - (a.citations ?? 0);
        })
      : filtered;

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
        <section className="py-6 bg-gray-50 sticky top-[72px] z-40 border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
            {/* Search */}
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search by title, author, or journal..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowAllPublications(false);
                }}
                className="pl-10 h-12 bg-white"
              />
            </div>

            {/* Category + Year row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 mr-1">
                  <Filter size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Topic
                  </span>
                </div>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(cat)}
                    className={`rounded-full text-xs h-8 gap-1 ${
                      cat === 'Most Recent'
                        ? selectedCategory === cat
                          ? 'bg-[#00897b] hover:bg-[#00796b] border-[#00897b]'
                          : 'hover:bg-[#00897b]/10 hover:text-[#00897b] hover:border-[#00897b]'
                        : selectedCategory === cat
                        ? 'bg-[#630e1d] hover:bg-[#4a0a15] border-[#630e1d]'
                        : 'hover:bg-[#fff5f5] hover:text-[#630e1d] hover:border-[#630e1d]'
                    }`}
                  >
                    {cat === 'Most Recent' && <Sparkles size={11} />}
                    {cat}
                  </Button>
                ))}
              </div>

              {/* Year pills */}
              <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide mr-1">
                  Year
                </span>
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleYearChange(year)}
                    className={`rounded-full text-xs h-8 ${
                      selectedYear === year
                        ? 'bg-[#00897b] hover:bg-[#00796b] border-[#00897b]'
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
            <p className="text-sm text-gray-400 mb-8">
              Showing {Math.min(
                showAllPublications ? filteredPublications.length : INITIAL_PUBLICATIONS_TO_SHOW,
                filteredPublications.length
              )} of {filteredPublications.length} result
              {filteredPublications.length !== 1 ? 's' : ''}
              {publications.length !== filteredPublications.length
                ? ` · ${publications.length} total`
                : ''}
            </p>

            <div className="space-y-5">
              {filteredPublications
                .slice(
                  0,
                  showAllPublications
                    ? filteredPublications.length
                    : INITIAL_PUBLICATIONS_TO_SHOW
                )
                .map((pub, index) => (
                  <motion.div
                    key={`${pub.doi}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#630e1d]/25 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex p-3 bg-[#fff5f5] rounded-lg text-[#630e1d] shrink-0 mt-0.5">
                        <FileText size={22} />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3
                          className="text-base font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors leading-snug"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {pub.title}
                        </h3>

                        {/* Authors */}
                        <div className="flex items-start gap-1.5 mt-2.5 text-sm text-gray-500">
                          <Users size={13} className="mt-0.5 shrink-0" />
                          <span className="leading-snug">{pub.authors.join(', ')}</span>
                        </div>

                        {/* Journal / Year / Volume */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-sm">
                          <span className="text-[#00897b] font-semibold">{pub.journal}</span>
                          <span className="text-gray-300">·</span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <Calendar size={12} />
                            {pub.year}
                          </span>
                          <span className="text-gray-300">·</span>
                          <span className="text-gray-400 text-xs">
                            Vol.&nbsp;{pub.volume},&nbsp;pp.&nbsp;{pub.pages}
                          </span>
                        </div>

                        {/* Footer: category + badges + DOI */}
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                          <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {pub.category}
                          </span>
                          {pub.recent && (
                            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                              2025 · New
                            </span>
                          )}
                          <span className="text-xs text-gray-400 ml-1">
                            {pub.citations} citation{pub.citations !== 1 ? 's' : ''}
                          </span>
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#00897b] text-white text-xs font-medium rounded-lg hover:bg-[#00796b] transition-colors ml-auto"
                          >
                            <ExternalLink size={13} />
                            View DOI
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* See More / Show Less */}
            {filteredPublications.length > INITIAL_PUBLICATIONS_TO_SHOW && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#630e1d] text-white text-sm font-medium rounded-full hover:bg-[#4a0a15] transition-colors"
                >
                  {showAllPublications ? 'Show Less' : `See All ${filteredPublications.length}`}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      showAllPublications ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            )}

            {/* Empty state */}
            {filteredPublications.length === 0 && (
              <div className="text-center py-16">
                <FileText size={44} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No publications found matching your criteria.</p>
              </div>
            )}

            {/* View All CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 mb-5">
                Showing a curated selection ·{' '}
                <span className="font-medium text-gray-700">93 total publications</span> on Google Scholar
              </p>
              <a
                href="https://scholar.google.com/citations?hl=en&user=orJTvSMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#630e1d] text-[#630e1d] font-semibold rounded-full hover:bg-[#630e1d] hover:text-white transition-all duration-300 group"
              >
                View All Publications on Google Scholar
                <ExternalLink
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
