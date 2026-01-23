import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Users,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Send,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const positions = [
  {
    title: 'Ph.D. Position - Solid-State Battery Research',
    type: 'Ph.D.',
    icon: GraduationCap,
    deadline: 'Rolling',
    requirements: [
      'M.S. in Physics, Chemistry, or Materials Science',
      'Strong background in electrochemistry',
      'Experience with material synthesis',
      'Good communication skills',
    ],
    description:
      'Join our lab working on next-generation solid-state batteries. You will develop novel electrolyte materials and characterize their electrochemical properties.',
  },
  {
    title: 'Postdoctoral Researcher - 2D Materials',
    type: 'Postdoc',
    icon: Briefcase,
    deadline: 'March 31, 2025',
    requirements: [
      'Ph.D. in Physics, Chemistry, or related field',
      'Publications in peer-reviewed journals',
      'Experience with CVD synthesis',
      'Strong analytical skills',
    ],
    description:
      'We seek a motivated postdoctoral researcher to lead projects on 2D material synthesis and applications in electronics and catalysis.',
  },
  {
    title: 'M.S. Research Position - Solar Cells',
    type: 'M.S.',
    icon: GraduationCap,
    deadline: 'Rolling',
    requirements: [
      'B.S. in Physics or Engineering',
      'Interest in photovoltaics',
      'Basic lab experience',
      'Strong academic record',
    ],
    description:
      'Research opportunity for M.S. students interested in developing efficient perovskite solar cells through interface engineering.',
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: 'World-Class Training',
    description:
      'Access to state-of-the-art equipment and mentorship from experienced researchers.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Work alongside talented researchers from diverse backgrounds in a supportive atmosphere.',
  },
  {
    icon: Briefcase,
    title: 'Career Development',
    description:
      'Opportunities for conference presentations, publications, and industry collaborations.',
  },
];

export default function Join() {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
                Join Our Lab
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Shape the Future of Materials Science
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                We're looking for passionate researchers at all levels to join
                our mission of developing transformative nanomaterials for a
                sustainable future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20 bg-white">
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
                Why Join <span className="text-[#630e1d]">NRG?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#00897b]/10 rounded-2xl flex items-center justify-center">
                      <Icon className="text-[#00897b]" size={32} />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-[#fff5f5]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
                Open <span className="text-[#630e1d]">Positions</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {positions.map((position, index) => {
                const Icon = position.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="p-4 bg-[#630e1d]/10 rounded-xl flex-shrink-0 self-start">
                        <Icon className="text-[#630e1d]" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3
                              className="text-xl font-bold text-gray-900"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              {position.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                              <span className="px-3 py-1 bg-[#00897b]/10 text-[#00897b] text-sm font-medium rounded-full">
                                {position.type}
                              </span>
                              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                                <Clock size={14} />
                                Deadline: {position.deadline}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 text-gray-600">
                          {position.description}
                        </p>

                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-800 mb-2">
                            Requirements:
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {position.requirements.map((req, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle
                                  size={16}
                                  className="text-[#00897b] flex-shrink-0 mt-0.5"
                                />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#630e1d] text-white font-medium rounded-full hover:bg-[#4a0a15] transition-colors">
                          Apply Now
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-3xl font-bold text-gray-900"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Get in <span className="text-[#630e1d]">Touch</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  Interested in joining our lab or have questions? Send us a
                  message and we'll get back to you soon.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#fff5f5] rounded-lg">
                      <Mail className="text-[#630e1d]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:nrg@buet.ac.bd"
                        className="font-medium text-gray-900 hover:text-[#00897b]"
                      >
                        nrg@buet.ac.bd
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#fff5f5] rounded-lg">
                      <MapPin className="text-[#630e1d]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium text-gray-900">
                        Department of Physics, BUET
                        <br />
                        Dhaka-1000, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position of Interest
                    </label>
                    <Input
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      placeholder="Ph.D., Postdoc, M.S., etc."
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your background and research interests..."
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#00897b] hover:bg-[#00796b] rounded-full font-semibold"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
