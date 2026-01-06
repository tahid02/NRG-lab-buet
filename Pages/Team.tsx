import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  GraduationCap,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/nrg/Navbar';
import Footer from '@/components/nrg/Footer';

const pi = {
  name: 'Dr. Muhammad Rahman',
  title: 'Professor & Principal Investigator',
  image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  bio: 'Dr. Rahman is a Professor of Physics at BUET, specializing in nanomaterials synthesis and characterization. He received his Ph.D. from MIT and completed postdoctoral research at Stanford University. His work focuses on developing novel nanostructured materials for energy storage and conversion.',
  education: [
    'Ph.D. Materials Science, MIT (2008)',
    'M.S. Physics, BUET (2003)',
    'B.S. Physics, BUET (2001)',
  ],
  awards: [
    'National Science Award, Bangladesh (2024)',
    'TWAS Prize for Physics (2022)',
    'Young Scientist Award, IUPAP (2015)',
  ],
  email: 'rahman@buet.ac.bd',
};

const teamMembers = [
  {
    name: 'Dr. Fatima Ahmed',
    role: 'Associate Professor',
    specialization: 'Polymer Nanocomposites',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Dr. Kamal Islam',
    role: 'Assistant Professor',
    specialization: 'Electrocatalysis',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Rashid Hossain',
    role: 'Ph.D. Student',
    specialization: 'Solid-State Batteries',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Ayesha Khan',
    role: 'Ph.D. Student',
    specialization: 'Graphene Synthesis',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Tariq Mahmud',
    role: 'Ph.D. Student',
    specialization: 'Solar Cells',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Nadia Sultana',
    role: 'M.S. Student',
    specialization: 'Nanomaterial Characterization',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    name: 'Imran Ali',
    role: 'Research Associate',
    specialization: 'Lab Management',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Sadia Rahman',
    role: 'M.S. Student',
    specialization: 'Catalysis',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
  },
];

const alumni = [
  {
    name: 'Dr. Zahir Hossain',
    position: 'Assistant Professor, Dhaka University',
    year: '2022',
  },
  {
    name: 'Dr. Nasreen Akter',
    position: 'Researcher, Samsung SDI',
    year: '2021',
  },
  {
    name: 'Dr. Rafiq Ahmed',
    position: 'Postdoc, Stanford University',
    year: '2020',
  },
];

export default function Team() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
                Our Team
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Meet the Minds Behind the Research
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                A diverse team of researchers, students, and staff dedicated to
                advancing nanomaterials science at BUET.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principal Investigator */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#630e1d]/10 to-[#00897b]/10 rounded-3xl" />
                <img
                  src={pi.image}
                  alt={pi.name}
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-2">
                    Principal Investigator
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-[#630e1d]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {pi.name}
                  </h2>
                  <p className="text-lg text-gray-600 mt-1">{pi.title}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">{pi.bio}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                      <GraduationCap size={18} className="text-[#00897b]" />
                      Education
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {pi.education.map((edu, i) => (
                        <li key={i}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                      <BookOpen size={18} className="text-[#00897b]" />
                      Selected Awards
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {pi.awards.map((award, i) => (
                        <li key={i}>{award}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={`mailto:${pi.email}`}
                    className="flex items-center gap-2 px-6 py-3 bg-[#630e1d] text-white font-medium rounded-full hover:bg-[#4a0a15] transition-colors"
                  >
                    <Mail size={18} />
                    Contact
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 border border-[#00897b] text-[#00897b] font-medium rounded-full hover:bg-[#00897b] hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Team <span className="text-[#630e1d]">Members</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-[#00897b] font-medium">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {member.specialization}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Lab <span className="text-[#630e1d]">Alumni</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {alumni.map((alum, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">{alum.name}</h4>
                    <p className="text-sm text-gray-600">{alum.position}</p>
                  </div>
                  <span className="text-sm text-[#00897b] font-medium mt-2 sm:mt-0">
                    Graduated {alum.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Want to Join Our Team?
              </h2>
              <p className="mt-4 text-white/80 text-lg">
                We're always looking for motivated researchers at all levels.
              </p>
              <div className="mt-8">
                <Link
                  to={createPageUrl('Join')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all"
                >
                  View Open Positions
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
