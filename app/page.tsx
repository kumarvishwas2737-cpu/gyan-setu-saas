"use client";

import React, { useState } from 'react';
import { Menu, X, BookOpen, Award, Users, Star, CheckCircle, Phone, Mail, MapPin, MessageCircle, GraduationCap, Target, TrendingUp, Shield, Clock, Sparkles, ChevronDown, Brain, Heart, Headphones, Globe, Zap, Trophy, Calendar, ArrowRight, Building2, Lightbulb, FileText, Video, BarChart } from 'lucide-react';

const WHATSAPP_NUMBER = "918318807594";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to enquire about premium tutoring");
const openWhatsApp = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank');

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const faqs = [
    {
      question: "How do you select and verify your tutors?",
      answer: "Every tutor undergoes a rigorous 3-stage selection process: subject expertise assessment, teaching demonstration, and background verification including police clearance. We only accept tutors with proven track records, strong academic credentials, and genuine passion for teaching. Only 1 in 10 applicants make it through our selection process."
    },
    {
      question: "What if we're not satisfied with the tutor?",
      answer: "Your satisfaction is paramount. If you're not completely happy with your assigned tutor within the first 3 sessions, we'll provide a replacement tutor at no additional cost. We also offer a 7-day money-back guarantee on all new enrollments if you're unsatisfied with our service."
    },
    {
      question: "Are sessions conducted online or at home?",
      answer: "We specialize in premium home tutoring where our tutors come to your residence. This eliminates travel time for students, provides a comfortable learning environment, and allows parents to monitor sessions. For students who prefer online sessions, we can arrange that as well with the same quality of instruction."
    },
    {
      question: "Can we change the session timings if needed?",
      answer: "Absolutely! We understand that family schedules can change. You can reschedule sessions with 24-hour notice without any penalty. Our tutors work with you to find mutually convenient timings. We also offer makeup sessions for any classes missed due to unforeseen circumstances."
    },
    {
      question: "Do you provide study material and practice tests?",
      answer: "Yes! All our plans include comprehensive study material aligned with your child's curriculum. Premium and Elite plans include additional practice worksheets, previous year papers, and full-length mock tests. For competitive exam preparation, we provide chapter-wise tests and detailed performance analysis."
    },
    {
      question: "How do you track and report student progress?",
      answer: "Tutors maintain detailed session logs documenting topics covered, student performance, and areas needing attention. You receive regular progress reports (monthly for Essential, weekly for Premium, daily for Elite). We also schedule parent-tutor meetings to discuss development, address concerns, and plan future learning strategies."
    },
    {
      question: "What are your tutor-to-student ratios?",
      answer: "We exclusively offer one-on-one tutoring. Each student receives 100% of the tutor's attention during sessions. This personalized approach ensures concepts are thoroughly understood, doubts are immediately addressed, and learning is tailored to the individual student's pace and style."
    },
    {
      question: "Do you offer support for competitive exams like JEE and NEET?",
      answer: "Yes! Our Science Excellence program is specifically designed for JEE and NEET aspirants. We provide specialized coaching covering the complete syllabus, advanced problem-solving techniques, time management strategies, and regular mock tests with detailed analysis. Our tutors are experts with proven track records in competitive exam coaching."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>GYAN SETU</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('programs')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">Programs</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('excellence')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">Excellence</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">Testimonials</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">Contact</button>
              <button onClick={openWhatsApp} className="bg-[#D4AF37] text-[#0a0a0a] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#c4a037] transition-all duration-200">
                Enquire Now
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#D4AF37]">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-[#D4AF37]/20">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">Programs</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">About</button>
              <button onClick={() => scrollToSection('excellence')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">Excellence</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">Testimonials</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-2">Contact</button>
              <button onClick={openWhatsApp} className="w-full bg-[#D4AF37] text-[#0a0a0a] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#c4a037] transition-all duration-200">
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <p className="text-[#D4AF37] font-semibold tracking-wider">AAKASH GANGA VIHAR, KANPUR</p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Premium Home <span className="text-[#D4AF37]">Tutoring</span>
            <br />Excellence at Your Doorstep
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Experience transformative one-on-one education with India's finest tutors. We bring personalized, expert-led learning directly to your home for Classes 1-12, ensuring academic excellence through customized attention and proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={openWhatsApp} className="bg-[#D4AF37] text-[#0a0a0a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c4a037] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#D4AF37]/20 flex items-center space-x-2">
              <span>Book Free Session</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToSection('programs')} className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF37]/10 transition-all duration-200">
              Explore Programs
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
              <p className="text-gray-400">Students Taught</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>98%</div>
              <p className="text-gray-400">Success Rate</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>15+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>24/7</div>
              <p className="text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#D4AF37]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="text-[#D4AF37]">Programs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Carefully crafted curriculum designed to build strong foundations and achieve academic excellence at every stage of your child's educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Foundation Program */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#D4AF37]/30 rounded-2xl p-8 lg:p-10 hover:border-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-10 h-10 text-[#D4AF37]" />
                <h3 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Foundation Program</h3>
              </div>
              <p className="text-[#D4AF37] font-semibold mb-4 text-lg">Classes 1-10</p>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Building unshakeable academic foundations through comprehensive subject mastery, critical thinking development, and personalized attention that adapts to each student's unique learning style and pace.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">All Core Subjects Covered</h4>
                    <p className="text-gray-400">Mathematics, Science, English, Social Studies, and Hindi with comprehensive curriculum alignment to CBSE, ICSE, and State boards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Conceptual Clarity Focus</h4>
                    <p className="text-gray-400">Deep understanding through visual learning, practical examples, and interactive problem-solving sessions that make learning engaging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Regular Assessments</h4>
                    <p className="text-gray-400">Weekly tests, monthly evaluations, and detailed progress reports to track improvement and identify areas needing additional focus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Homework & Assignment Support</h4>
                    <p className="text-gray-400">Complete guidance for school assignments, projects, and homework with emphasis on independent thinking and problem-solving skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Exam Preparation Excellence</h4>
                    <p className="text-gray-400">Strategic preparation for board exams, competitive exams like NTSE, Olympiads, and scholarship tests with proven techniques</p>
                  </div>
                </div>
              </div>
              <button onClick={openWhatsApp} className="w-full mt-8 bg-[#D4AF37] text-[#0a0a0a] py-4 rounded-lg font-bold text-lg hover:bg-[#c4a037] transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Enroll in Foundation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Science Excellence Program */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#D4AF37]/30 rounded-2xl p-8 lg:p-10 hover:border-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-10 h-10 text-[#D4AF37]" />
                <h3 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Science Excellence</h3>
              </div>
              <p className="text-[#D4AF37] font-semibold mb-4 text-lg">Classes 11-12 (PCM/PCB)</p>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Advanced coaching for JEE, NEET, and Board aspirants with intensive problem-solving, concept mastery, and competitive exam strategies delivered by subject matter experts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">JEE & NEET Preparation</h4>
                    <p className="text-gray-400">Comprehensive coaching for IIT-JEE (Main & Advanced) and NEET with advanced problem-solving techniques, previous year analysis, and mock tests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Physics, Chemistry, Mathematics & Biology</h4>
                    <p className="text-gray-400">In-depth coverage of all topics with focus on numerical problem-solving, theory clarity, and application-based learning for competitive edge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Board + Competitive Dual Focus</h4>
                    <p className="text-gray-400">Strategic balance between 95%+ board exam scores and top competitive exam ranks with time-tested preparation methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Doubt Clearing Sessions</h4>
                    <p className="text-gray-400">24/7 WhatsApp support and dedicated doubt-clearing sessions ensuring no question goes unanswered during crucial preparation phase</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Study Material & Test Series</h4>
                    <p className="text-gray-400">Premium study material, chapter-wise tests, full-length mock exams, and detailed performance analysis aligned with latest exam patterns</p>
                  </div>
                </div>
              </div>
              <button onClick={openWhatsApp} className="w-full mt-8 bg-[#D4AF37] text-[#0a0a0a] py-4 rounded-lg font-bold text-lg hover:bg-[#c4a037] transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Enroll in Science Excellence</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                About <span className="text-[#D4AF37]">Gyan Setu</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Gyan Setu represents the bridge between aspiration and achievement, connecting students with exceptional educational opportunities right in the comfort of their homes. Since our inception, we have been committed to revolutionizing home tutoring in Kanpur by bringing world-class education to your doorstep.
                </p>
                <p>
                  Our name "Gyan Setu" literally translates to "Knowledge Bridge" – a philosophy that drives everything we do. We believe that quality education should be accessible, personalized, and transformative. Every student deserves a dedicated mentor who understands their unique learning needs, challenges, and potential.
                </p>
                <p>
                  We carefully select tutors who are not just subject experts but passionate educators with proven track records. Each tutor undergoes rigorous screening, including subject matter assessments, teaching demonstrations, and background verification to ensure we maintain the highest standards of academic excellence and child safety.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to personalized education. Unlike crowded coaching centers, our one-on-one approach ensures that every lesson is tailored to your child's learning style, pace, and academic goals. We don't just teach subjects; we build confidence, critical thinking, and lifelong learning skills.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300">
                <Target className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Personalized Learning</h3>
                <p className="text-gray-400">Custom teaching methods adapted to each student's unique needs and learning style</p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300">
                <Users className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Expert Tutors</h3>
                <p className="text-gray-400">Highly qualified educators with proven expertise and passion for teaching</p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300">
                <Shield className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Verified & Safe</h3>
                <p className="text-gray-400">Complete background verification and safety protocols for your peace of mind</p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Proven Results</h3>
                <p className="text-gray-400">Consistent track record of academic excellence and competitive exam success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section id="excellence" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#D4AF37]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Choose <span className="text-[#D4AF37]">Gyan Setu</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We go beyond traditional tutoring to deliver transformative educational experiences that create lasting impact on your child's academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Sparkles className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Individual Attention</h3>
              <p className="text-gray-400 leading-relaxed">
                Unlike crowded classrooms, our 1:1 approach ensures every question is answered, every concept is mastered, and every student receives undivided attention tailored to their learning needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Clock className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Flexible Scheduling</h3>
              <p className="text-gray-400 leading-relaxed">
                We understand busy family schedules. Choose session timings that work best for you – mornings, evenings, or weekends. Our tutors adapt to your convenience, not the other way around.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <BookOpen className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Curriculum Aligned</h3>
              <p className="text-gray-400 leading-relaxed">
                Complete alignment with CBSE, ICSE, and State board syllabi. We stay updated with latest curriculum changes and examination patterns to ensure relevant, focused learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <BarChart className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Progress Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Regular progress reports, parent-tutor meetings, and detailed performance analysis keep you informed about your child's academic development and areas of improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Trophy className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Exam Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Specialized exam preparation strategies, time management techniques, and stress management support to help students excel in board exams and competitive tests with confidence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Shield className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Safe & Secure</h3>
              <p className="text-gray-400 leading-relaxed">
                Complete background verification of all tutors, adherence to safety protocols, and professional conduct standards ensure a secure learning environment for your child at home.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Brain className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Conceptual Mastery</h3>
              <p className="text-gray-400 leading-relaxed">
                Focus on deep understanding rather than rote learning. Our teaching methodology emphasizes why and how, not just what, creating lasting knowledge and analytical thinking.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Heart className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Holistic Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Beyond academics, we nurture confidence, communication skills, and critical thinking. We develop well-rounded individuals prepared for life's challenges beyond examinations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <Headphones className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Continuous Support</h3>
              <p className="text-gray-400 leading-relaxed">
                24/7 doubt resolution via WhatsApp, dedicated parent helpline, and emergency session booking ensure you're never alone in your educational journey with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Parent & Student <span className="text-[#D4AF37]">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from families who have experienced the Gyan Setu difference in their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "My daughter's confidence in Mathematics improved dramatically within just 3 months. The tutor's patient approach and ability to explain complex concepts simply made all the difference. She scored 98% in her Class 10 boards!"
              </p>
              <div>
                <p className="font-bold text-white">Mrs. Priya Sharma</p>
                <p className="text-[#D4AF37] text-sm">Mother of Class 10 Student</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The personalized attention my son received for JEE preparation was outstanding. The tutor identified his weak areas and worked systematically to strengthen them. He secured admission in NIT Trichy!"
              </p>
              <div>
                <p className="font-bold text-white">Mr. Rajesh Kumar</p>
                <p className="text-[#D4AF37] text-sm">Father of JEE Aspirant</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Gyan Setu's Science tutor made learning enjoyable for my daughter. Her approach of relating concepts to real-life examples kept my daughter engaged. She went from struggling in Science to becoming a top performer!"
              </p>
              <div>
                <p className="font-bold text-white">Mrs. Anjali Verma</p>
                <p className="text-[#D4AF37] text-sm">Mother of Class 8 Student</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The flexibility in scheduling was a lifesaver for our busy family. The tutor adapted to our timings without any hassle. My son's grades improved across all subjects, and he's much more confident now."
              </p>
              <div>
                <p className="font-bold text-white">Mr. Amit Singh</p>
                <p className="text-[#D4AF37] text-sm">Father of Class 6 Student</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "I was preparing for NEET and the Biology tutor from Gyan Setu was exceptional. Her depth of knowledge and ability to simplify complex topics helped me secure an AIR under 500. Highly recommended!"
              </p>
              <div>
                <p className="font-bold text-white">Sneha Gupta</p>
                <p className="text-[#D4AF37] text-sm">NEET 2024 Qualifier</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The regular progress reports and parent-tutor communication kept me updated on my daughter's development. The tutor genuinely cared about her success. Best investment in her education!"
              </p>
              <div>
                <p className="font-bold text-white">Mrs. Kavita Mishra</p>
                <p className="text-[#D4AF37] text-sm">Mother of Class 12 Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#D4AF37]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Transparent <span className="text-[#D4AF37]">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your child's academic journey. All plans include personalized attention, progress tracking, and dedicated tutor support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Plan */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Essential</h3>
              <p className="text-gray-400 mb-6">Perfect for foundation building</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>₹8,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">12 sessions per month (3 per week)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Single subject coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Monthly progress reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">WhatsApp doubt support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Study material included</span>
                </li>
              </ul>
              <button onClick={openWhatsApp} className="w-full bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] py-3 rounded-lg font-bold hover:bg-[#D4AF37]/10 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#D4AF37] rounded-2xl p-8 relative shadow-2xl shadow-[#D4AF37]/20 transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-[#0a0a0a] px-6 py-1 rounded-full font-bold text-sm">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Premium</h3>
              <p className="text-gray-400 mb-6">Comprehensive academic support</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>₹15,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">20 sessions per month (5 per week)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">2-3 subjects coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Weekly progress reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">24/7 doubt support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Premium study material & tests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Parent-tutor monthly meetings</span>
                </li>
              </ul>
              <button onClick={openWhatsApp} className="w-full bg-[#D4AF37] text-[#0a0a0a] py-3 rounded-lg font-bold hover:bg-[#c4a037] transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Elite</h3>
              <p className="text-gray-400 mb-6">For competitive exam aspirants</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>₹25,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">30 sessions per month (daily)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">All subjects (PCM/PCB)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Daily progress tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Priority doubt resolution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">JEE/NEET test series & analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Weekly parent meetings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Career counseling included</span>
                </li>
              </ul>
              <button onClick={openWhatsApp} className="w-full bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] py-3 rounded-lg font-bold hover:bg-[#D4AF37]/10 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg">
            All plans come with a 7-day satisfaction guarantee. Not happy? Get a full refund, no questions asked.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently Asked <span className="text-[#D4AF37]">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our premium home tutoring services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <button
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-bold text-[#D4AF37] pr-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                      selectedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#D4AF37]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your child's academic journey? Contact us today for a free consultation and demo session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                  <MapPin className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Our Location</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Aakash Ganga Vihar, Kanpur<br />
                    Uttar Pradesh, India<br />
                    Serving all areas of Kanpur
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                  <Phone className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Phone</h3>
                  <p className="text-gray-400 leading-relaxed">
                    +91 8318807594<br />
                    Available 9 AM - 9 PM (All Days)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                  <Mail className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Email</h3>
                  <p className="text-gray-400 leading-relaxed">
                    info@gyansetu.com<br />
                    support@gyansetu.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>WhatsApp</h3>
                  <p className="text-gray-400 mb-3 leading-relaxed">
                    Get instant responses to your queries
                  </p>
                  <button onClick={openWhatsApp} className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20ba5a] transition-all duration-200 flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Book Your Free Demo Session</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Experience the Gyan Setu difference firsthand. Book a complimentary demo session with one of our expert tutors. No obligations, just quality education.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span>60-minute personalized demo session</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span>Learning style assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span>Customized learning plan recommendation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span>Meet your potential tutor</span>
                    </li>
                  </ul>
                </div>
                <button onClick={openWhatsApp} className="w-full bg-[#D4AF37] text-[#0a0a0a] py-4 rounded-lg font-bold text-lg hover:bg-[#c4a037] transition-all duration-200">
                  Book Free Demo Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-[#D4AF37]" />
                <span className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>GYAN SETU</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bridging aspirations with achievements through premium personalized education.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('programs')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">Programs</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">About Us</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">Pricing</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">Testimonials</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Foundation (Class 1-10)</li>
                <li>Science Excellence (11-12)</li>
                <li>JEE Preparation</li>
                <li>NEET Preparation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Aakash Ganga Vihar, Kanpur</li>
                <li>+91 8318807594</li>
                <li>info@gyansetu.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gyan Setu. All rights reserved. | Empowering Education, Transforming Futures</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-200 transform hover:scale-110 z-50"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
