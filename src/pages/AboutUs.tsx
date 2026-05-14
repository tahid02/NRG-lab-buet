import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  GraduationCap,
  ChevronDown,
  Users,
} from 'lucide-react';

const pi = {
  name: 'Dr. Muhammad Rakibul Islam',
  title: 'Professor & Principal Investigator',
  image:
    'https://placehold.net/avatar-2.png',
  bio: 'Dr. Muhammad Rakibul Islam is currently working as a Professor in the Department of Physics at Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh. He completed his Ph.D. in Physics from University of Central Florida (UCF), USA in May 2015. In his PhD, he worked on the fabrication of the carbon nanotube and 2D materials (more specifically, Graphene and MoS2) based nano-electronic devices and study their electron transport properties.',
  education: [
    'Ph.D. Physics, University of Central Florida (2015)',
    'M.Sc Physics, University of Central Florida (2011)',
    'M. Phil Physics, Bangladesh University of Engineering and Technology, BUET (2009)',
    'M.SC Physics, University of Dhaka (2002)',
    'B.S. Physics, University of Dhaka (2001)',
  ],
  professionalDevelopmentOutreach: [
    'Served as President at the Bangladesh student association at UCF, 2012-2013.',
    'Member, Graduate Society of Physics Students (GSPS)',
    'Member, American Physical Society (APS)',
    'Life member, Bangladesh Physical Society (BPS)',
  ],
  email: 'rahman@buet.ac.bd',
};

const currentMembers = [
  {
    name: 'Saifullah',
    role: 'Ph.D. student',
    image:
      '/images/members/Saifullah.jpeg',
  },
  {
    name: 'Jabir Islam',
    role: 'M.Sc. student',
    image:
      '/public/images/members/Jabir.jpeg',
  },
  {
    name: 'Md. Rifat Bhuiyan',
    role: 'M.Sc. student',
    image:
      '/public/images/members/Rifat.jpeg',
  },
  {
    name: 'Umme Sumiya',
    role: 'M.Sc. student',
    image:
      '/public/images/members/user_demo.png',
  },
  {
    name: 'Amena Mehazabin Momo',
    role: 'M.Sc. student',
    image:
      '/public/images/members/user_demo.png',
  },
];

const otherMembers = [
  {
    name: 'Emon Hossain',
    role: 'M.Sc. student',
    image:
      '/public/images/members/Emon.jpeg',
  },
  {
    name: 'Tamanna Tonni',
    role: 'M.Sc. student',
    image:
      '/public/images/members/user_demo.png',
  },
  {
    name: 'Sabbir Ahmed',
    role: 'M.Sc. student',
    image:
      '/public/images/members/user_demo.png',
  },
];

const alumni = [
  {
    name: '',
    degree: '',
    position: '',
    image:
      '/public/images/members/user_demo.png',
  },
  {
    name: '',
    degree: '',
    position: '',
    image:
      '/public/images/members/user_demo.png',
  },
  {
    name: '',
    degree: '',
    position: '',
    image:
      '/public/images/members/user_demo.png',
  },
  {
    name: '',
    degree: '',
    position: '',
    image:
      '/public/images/members/user_demo.png',
  },
  {
    name: '',
    degree: '',
    position: '',
    image:
      '/public/images/members/user_demo.png',
  },
];

export default function AboutUs() {
  const { pathname } = useLocation();
  const [showAllCurrent, setShowAllCurrent] = useState(false);
  const [showAllOthers, setShowAllOthers] = useState(false);
  const [showAllAlumni, setShowAllAlumni] = useState(false);
  const INITIAL_CURRENT_TO_SHOW = 8;
  const INITIAL_OTHERS_TO_SHOW = 4;
  const INITIAL_ALUMNI_TO_SHOW = 3;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <main>
        {/* Hero */}
        <section
          className="relative pt-48 pb-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          }}
        >
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-4">
                About Us
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Meet the Minds Behind the Research
              </h1>
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

                <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-[#00897b]/[0.06] via-white to-white p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-6">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00897b] to-[#00897b]/40"
                      aria-hidden
                    />
                    <div className="pl-3 sm:pl-4">
                      <div className="mb-5 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00897b]/15 text-[#00897b] shadow-inner">
                          <GraduationCap className="h-6 w-6" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h3
                            id="pi-education-heading"
                            className="text-base font-semibold tracking-tight text-gray-900 text-balance sm:text-lg"
                          >
                            Education
                          </h3>
                          <p className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">
                            Degrees and formal training
                          </p>
                        </div>
                      </div>
                      <ul
                        className="space-y-3"
                        aria-labelledby="pi-education-heading"
                      >
                        {pi.education.map((edu, i) => (
                          <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-[0.9375rem]">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00897b] ring-[3px] ring-[#00897b]/15"
                              aria-hidden
                            />
                            <span className="min-w-0">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-[#630e1d]/[0.05] via-white to-white p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-6">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#630e1d] to-[#630e1d]/40"
                      aria-hidden
                    />
                    <div className="pl-3 sm:pl-4">
                      <div className="mb-5 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#630e1d]/10 text-[#630e1d] shadow-inner">
                          <Users className="h-6 w-6" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h3
                            id="pi-outreach-heading"
                            className="text-base font-semibold tracking-tight text-gray-900 text-balance sm:text-lg"
                          >
                            Professional Development and Outreach
                          </h3>
                          <p className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">
                            Leadership and professional memberships
                          </p>
                        </div>
                      </div>
                      <ul
                        className="space-y-3"
                        aria-labelledby="pi-outreach-heading"
                      >
                        {pi.professionalDevelopmentOutreach.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-[0.9375rem]">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#630e1d] ring-[3px] ring-[#630e1d]/12"
                              aria-hidden
                            />
                            <span className="min-w-0">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 border border-[#00897b] text-[#00897b] font-medium rounded-full hover:bg-[#00897b] hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lab Members */}
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
                Lab <span className="text-[#630e1d]">Members</span>
              </h2>
            </motion.div>

            {/* Current Members subsection */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-10">
                <span className="px-4 py-1.5 bg-[#630e1d] text-white text-sm font-semibold rounded-full tracking-wide">
                  Current Members
                </span>
                <div className="flex-1 h-px bg-[#630e1d]/20" />
                <span className="text-sm text-gray-400 font-medium">
                  {currentMembers.length} members
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentMembers
                  .slice(0, showAllCurrent ? currentMembers.length : INITIAL_CURRENT_TO_SHOW)
                  .map((member, index) => (
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
                        <p className="text-sm text-[#00897b] font-medium">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {currentMembers.length > INITIAL_CURRENT_TO_SHOW && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setShowAllCurrent(!showAllCurrent)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#630e1d] text-white font-medium rounded-full hover:bg-[#4a0a15] transition-colors"
                  >
                    {showAllCurrent ? 'Show Less' : 'See More'}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${showAllCurrent ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              )}
            </div>

            {/* Others subsection */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="px-4 py-1.5 bg-[#00897b] text-white text-sm font-semibold rounded-full tracking-wide">
                  Others
                </span>
                <div className="flex-1 h-px bg-[#00897b]/20" />
                <span className="text-sm text-gray-400 font-medium">
                  {otherMembers.length} members
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {otherMembers
                  .slice(0, showAllOthers ? otherMembers.length : INITIAL_OTHERS_TO_SHOW)
                  .map((member, index) => (
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
                        <p className="text-sm text-[#00897b] font-medium">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {otherMembers.length > INITIAL_OTHERS_TO_SHOW && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setShowAllOthers(!showAllOthers)}
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#00897b] text-[#00897b] font-medium rounded-full hover:bg-[#00897b] hover:text-white transition-colors"
                  >
                    {showAllOthers ? 'Show Less' : 'See More'}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${showAllOthers ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              )}
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
              {alumni
                .slice(
                  0,
                  showAllAlumni ? alumni.length : INITIAL_ALUMNI_TO_SHOW
                )
                .map((alum, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={alum.image}
                        alt={alum.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {alum.name}{' '}
                        <span className="text-sm text-[#00897b] font-normal">
                          ({alum.degree})
                        </span>
                      </h4>
                      <p className="text-sm text-gray-600">{alum.position}</p>
                    </div>
                  </motion.div>
                ))}
            </div>

            {alumni.length > INITIAL_ALUMNI_TO_SHOW && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllAlumni(!showAllAlumni)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#630e1d] text-white font-medium rounded-full hover:bg-[#4a0a15] transition-colors"
                >
                  {showAllAlumni ? 'Show Less' : 'See More'}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${showAllAlumni ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
