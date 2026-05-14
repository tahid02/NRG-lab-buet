import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Filter } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80',
    title: 'Lab Members at Annual Symposium 2024',
    category: 'Events',
    date: 'March 15, 2024',
    description:
      'Team gathering during the annual Nanocomposite Research Symposium held at BUET.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    title: 'Electron Microscope Session',
    category: 'Research',
    date: 'February 10, 2024',
    description:
      'High-resolution imaging of graphene nanostructures using our state-of-the-art TEM facility.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    title: 'New Composite Material Samples',
    category: 'Research',
    date: 'January 22, 2024',
    description:
      'Recently synthesized polymer nanocomposite samples ready for mechanical testing.',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    title: 'Guest Lecture by Prof. Smith',
    category: 'Events',
    date: 'December 5, 2023',
    description:
      'Distinguished lecture on advanced characterization techniques for nanomaterials.',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    title: 'Cleanroom Fabrication Work',
    category: 'Facilities',
    date: 'November 18, 2023',
    description:
      'Precision fabrication of nanodevices in our class 1000 cleanroom facility.',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    title: 'Team Outing 2023',
    category: 'Events',
    date: 'October 8, 2023',
    description:
      'Annual team building event at the Sundarbans mangrove forest.',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=80',
    title: 'Raman Spectroscopy Analysis',
    category: 'Research',
    date: 'September 14, 2023',
    description:
      'Characterizing carbon nanotube dispersions using Raman spectroscopy.',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1562774053-2e6da832c26b?w=800&q=80',
    title: 'Lab Inauguration Ceremony',
    category: 'Events',
    date: 'August 20, 2023',
    description:
      'Inauguration of the newly renovated nanocomposite synthesis laboratory.',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=800&q=80',
    title: 'Thermal Analysis Setup',
    category: 'Facilities',
    date: 'July 5, 2023',
    description:
      'Differential scanning calorimetry setup for polymer thermal characterization.',
  },
];

const categories = ['All', 'Research', 'Events', 'Facilities'];

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`gallery-lightbox-title-${image.id}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        ref={contentRef}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00897b]"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00897b]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00897b]"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Image */}
        <div className="flex-shrink-0 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={image.src}
            alt={image.title}
            className="w-full max-h-[60vh] object-contain"
            loading="eager"
          />
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00897b]/10 text-[#00897b]">
              {image.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Camera size={14} />
              {image.date}
            </span>
          </div>
          <h2
            id={`gallery-lightbox-title-${image.id}`}
            className="text-xl sm:text-2xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {image.title}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {image.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const { pathname } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  }, [currentIndex, filteredImages]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    } else {
      setSelectedImage(filteredImages[0]);
    }
  }, [currentIndex, filteredImages]);

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
                Visual Archive
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Gallery
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Explore moments from our lab life — research breakthroughs,
                team events, and the facilities that power our science.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Filter className="w-4 h-4 text-gray-400 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#630e1d] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.article
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer focus-within:ring-2 focus-within:ring-[#00897b] focus-within:ring-offset-2"
                    onClick={() => setSelectedImage(image)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedImage(image);
                      }
                    }}
                    role="button"
                    aria-label={`Open ${image.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-white/90 text-xs font-semibold text-[#630e1d] mb-2">
                          {image.category}
                        </span>
                        <h3
                          className="text-lg font-bold text-white leading-snug"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {image.title}
                        </h3>
                        <p className="text-white/80 text-sm mt-1">{image.date}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
