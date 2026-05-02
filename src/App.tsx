import { motion } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, CheckCircle, 
  Trees, Axe, HardHat, TrendingUp, ChevronRight,
  Facebook, Instagram, Star, Tag
} from 'lucide-react';
import { useState } from 'react';
import { cn } from './lib/utils';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quote Request Handler
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="font-sans text-brand-text bg-brand-bg flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-brand-surface border-b border-brand-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.png" alt="Bolton Tree Services Logo" className="h-12 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
              <span className="text-lg md:text-xl font-bold tracking-tight text-brand-text uppercase leading-tight">
                Bolton Tree<span className="font-normal text-brand-text-muted hidden sm:inline"> Services</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-brand-text-muted">
              <a href="#services" className="hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary pb-1 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary pb-1 transition-colors">Past Jobs</a>
              <a href="#about" className="hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary pb-1 transition-colors">About</a>
              <a 
                href="#quote" 
                className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md flex items-center gap-2"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center text-brand-text-muted">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-brand-text focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-brand-surface border-b border-brand-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg text-sm uppercase tracking-widest font-medium">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-brand-text-muted hover:text-brand-primary hover:bg-brand-surface-muted rounded-md">Services</a>
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-brand-text-muted hover:text-brand-primary hover:bg-brand-surface-muted rounded-md">Past Jobs</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-brand-text-muted hover:text-brand-primary hover:bg-brand-surface-muted rounded-md">About</a>
              <a href="#quote" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-brand-primary bg-brand-surface-muted rounded-md tracking-wider">Get a Free Quote</a>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Tree removal service professional" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
            <div className="md:w-2/3 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/80 text-white border border-brand-border/30 backdrop-blur-sm mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Monday - Friday 7AM-5PM</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif font-light text-white leading-tight mb-6"
              >
                Reliable Tree Care in <br/> <span className="italic font-medium text-brand-surface-muted">Bolton & Beyond</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-8 max-w-2xl font-light"
              >
                We specialize in storm clean-up, seasonal property maintenance, tree felling, full tree removal, and precise trimming services for your peace of mind.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#quote" 
                  className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 group"
                >
                  Request a Quote
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+15192784426" 
                  className="bg-brand-surface/10 hover:bg-brand-surface/20 text-white backdrop-blur-sm border border-brand-surface/20 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  519-278-4426
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-brand-surface relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-2">Our Services</h2>
              <h3 className="text-4xl font-serif font-light text-brand-text mb-4">Complete <span className="italic font-medium text-brand-primary">Tree Care</span> Solutions</h3>
              <p className="text-brand-text-muted">We utilize state-of-the-art equipment and specialized techniques to handle any tree care need.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Axe, 
                  title: 'Tree Removal', 
                  desc: 'Safe, precision removal of dead, dying, or hazardous trees. We specialize in tight-quarter removals avoiding property damage.' 
                },
                { 
                  icon: Trees, 
                  title: 'Pruning & Trimming', 
                  desc: 'Structural pruning to improve health, reduce wind resistance, and enhance the aesthetic value of your landscape.' 
                },
                { 
                  icon: TrendingUp, 
                  title: 'Stump Grinding', 
                  desc: 'Complete removal of unsightly stumps to below ground level, allowing you to replant or regain flat lawn space.' 
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-brand-surface rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-surface-muted rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-text mb-2">{service.title}</h4>
                  <p className="text-sm text-brand-text-muted leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Past Jobs */}
        <section id="portfolio" className="py-24 bg-brand-bg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-brand-border pb-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-serif font-light text-brand-text">Past Field Work</h3>
              </div>
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest cursor-pointer hover:text-brand-secondary transition-colors">VIEW ALL PROJECTS →</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: '/photo-1.jpg', title: 'Recent Tree Clearing', loc: 'Local Neighborhood' },
                { img: '/photo-2.jpg', title: 'Precision Pruning & Safety', loc: 'Residential Property' },
                { img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Emergency Storm Cleanup', loc: 'Nobleton' },
                { img: 'https://images.unsplash.com/photo-1611099614481-698e4f13fb40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Large Pine Takedown', loc: 'Palgrave' },
                { img: 'https://images.unsplash.com/photo-1617181057774-72a39eb230ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Commercial Clearing', loc: 'Kleinburg' },
                { img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Stump Grinding Prep', loc: 'Schomberg' },
              ].map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img src={job.img} alt={job.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-primary mix-blend-multiply opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">{job.loc}</p>
                    <h4 className="text-white/90 text-xs">{job.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-24 bg-brand-accent text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" border="0" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-brand-surface-muted font-bold tracking-widest uppercase text-[10px] mb-2">About The Team</h2>
                <h3 className="text-4xl font-serif font-light mb-6">Service You Can <span className="italic font-medium text-brand-primary">Trust</span>.</h3>
                <p className="text-brand-surface-muted/80 text-lg mb-4 leading-relaxed font-light">
                  Bolton Tree Cutting Services provides reliable and professional tree care solutions in the Bolton area and surrounding communities. We specialize in storm clean-up, seasonal property maintenance, tree felling, full tree removal, and precise trimming services.
                </p>
                <p className="text-brand-surface-muted/80 text-lg mb-8 leading-relaxed font-light">
                  Our team is committed to safe, efficient, and high-quality work, whether clearing storm debris or maintaining the health and appearance of your trees. We take pride in protecting your property while delivering dependable results.
                </p>
                <div className="space-y-4">
                  {[
                    'Fully Insured and Reliable',
                    'Flexible Availability',
                    'Safe & Efficient Equipment',
                    'Immaculate Property Cleanup'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-brand-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-brand-primary/20 absolute -inset-4 blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional team" 
                  className="rounded-3xl shadow-xl relative z-10 border border-white/5 opacity-90 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -left-8 bg-brand-surface text-brand-text rounded-2xl p-6 shadow-xl z-20 border border-brand-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-surface-muted p-3 rounded-xl text-brand-primary">
                      <HardHat className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-bold">100%</div>
                      <div className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Fully Insured</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section id="quote" className="py-24 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-2">Request Service</h2>
              <h3 className="text-3xl font-serif font-light text-brand-text mb-4">Get Your Free Quote</h3>
              <p className="text-brand-text-muted">Fill out the form below and we'll get back to you within 24 hours to schedule a site visit.</p>
            </div>

            <div className="bg-brand-surface rounded-3xl p-8 md:p-10 border border-brand-border shadow-xl relative overflow-hidden flex flex-col">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h4>
                  <p className="text-gray-600 text-lg mb-8">Thank you for reaching out. A TimberPro specialist will contact you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-primary font-medium hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">First Name</label>
                      <input type="text" id="firstName" required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Last Name</label>
                      <input type="text" id="lastName" required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Email Address</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Property Address</label>
                    <input type="text" id="address" required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="123 Main St, City, Zip" />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Service Needed</label>
                    <select id="serviceType" required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      <option value="removal">Tree Removal</option>
                      <option value="pruning">Pruning & Trimming</option>
                      <option value="stump">Stump Grinding</option>
                      <option value="emergency">Emergency Storm Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="details" className="block text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Project Details</label>
                    <textarea id="details" rows={4} required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-primary transition-colors hover:border-brand-primary resize-none" placeholder="Please describe the work needed... (e.g. 50ft oak tree leaning near the house)"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-brand-secondary shadow-lg shadow-brand-primary/20 transition-all mt-2"
                  >
                    Submit Request
                  </button>
                </form>
              )}
              
              {!isSubmitted && (
                <div className="absolute -bottom-10 -right-10 opacity-[0.08] pointer-events-none text-brand-primary">
                  <img src="/logo.png" alt="" className="w-64 h-64 object-contain grayscale" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-text text-white/70 py-12 border-t border-brand-text/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6 uppercase tracking-widest">
                <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="Bolton Tree Services Logo" className="h-full w-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
                <span className="font-bold text-xl text-white">Bolton Tree<span className="font-light text-white/70"> Services</span></span>
              </div>
              <p className="mb-6 max-w-xs text-sm font-light">Reliable and professional tree care solutions in the Bolton area and surrounding communities.</p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/BoltonTreeServices" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/boltontreeservices/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.homestars.com/profile/bolton-tree-services?_gl=1*7g8t54*_gcl_aw*R0NMLjE3NzczMzc5MTQuQ2owS0NRandrcnpQQmhDcUFSSXNBSk40NjBuWWRHbllVUmhVNm92cDlqWTFZa0FaWmcyVGloUUlsYVpZbDd2dWUzUFJkUDRnWFF4TzctNGFBc1RXRUFMd193Y0I.*_gcl_au*MTk4MjI5MzM3Ny4xNzc3MzM3OTEzLjEwNTUzODgxNzQuMTc3NzMzNzk5MC4xNzc3MzM3OTkw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="HomeStars">
                  <Star className="w-5 h-5 fill-current" />
                </a>
                <a href="https://www.kijiji.ca/m-profile/listings/1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Kijiji">
                  <Tag className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-surface-muted" />
                  <a href="tel:+15192784426" className="hover:text-white transition-colors">519-278-4426</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-surface-muted" />
                  <a href="mailto:Anthony.boltontrees@gmail.com" className="hover:text-white transition-colors">Anthony.boltontrees@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-surface-muted" />
                  <span>Serving Bolton & Surrounding Areas</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Service Area</h4>
              <ul className="space-y-2 text-sm font-light">
                <li>Bolton</li>
                <li>Caledon</li>
                <li>Nobleton</li>
                <li>Surrounding Communities</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brand-text/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-light tracking-wide uppercase">
            <p>&copy; {new Date().getFullYear()} Bolton Tree Cutting Services. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
