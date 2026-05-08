/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Target, 
  Palette, 
  Layout, 
  Cpu, 
  Layers, 
  Map as MapIcon, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useState } from 'react';

const sections = [
  { id: 'brand', title: '01 Brand Direction', icon: Target },
  { id: 'design', title: '02 Design System', icon: Palette },
  { id: 'architecture', title: '03 Site Architecture', icon: Layout },
  { id: 'technical', title: '04 Technical Features', icon: Cpu },
  { id: 'ui', title: '05 UI Components', icon: Layers },
  { id: 'roadmap', title: '06 Build Roadmap', icon: MapIcon },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('brand');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F2F2F2]">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-80 bg-[#1a1a1a] text-[#F2F2F2] p-8 flex flex-col sticky top-0 h-auto md:h-screen z-50">
        <div className="mb-12">
          <div className="w-12 h-12 bg-[#7B1E2E] mb-4 flex items-center justify-center">
            <span className="font-serif text-2xl font-bold italic">M.</span>
          </div>
          <h1 className="text-xl font-serif tracking-widest uppercase">M. Global</h1>
          <p className="text-[10px] tracking-[0.2em] opacity-50 uppercase mt-2 font-mono">Strategy & Design Document</p>
        </div>

        <div className="flex-1 space-y-6">
          {sections.map((section) => (
            <button
              id={`nav-${section.id}`}
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-4 w-full text-left group transition-all ${
                activeSection === section.id ? 'text-[#7B1E2E]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`w-1 h-1 rounded-full bg-current transition-all ${
                activeSection === section.id ? 'scale-150' : 'scale-0 group-hover:scale-100'
              }`} />
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest mb-1 italic opacity-70">
                  {section.title.split(' ')[0]}
                </p>
                <p className="font-serif text-lg tracking-tight leading-none uppercase">
                  {section.title.split(' ').slice(1).join(' ')}
                </p>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${
                activeSection === section.id ? 'translate-x-0' : '-translate-x-2'
              }`} />
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 mt-auto hidden md:block">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 italic">Live Strategic Plan</p>
          </div>
          <button className="text-[10px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
            Download PDF Brief <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-6 md:p-16 max-w-6xl mx-auto w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {activeSection === 'brand' && <BrandSection />}
            {activeSection === 'design' && <DesignSection />}
            {activeSection === 'architecture' && <ArchitectureSection />}
            {activeSection === 'technical' && <TechnicalSection />}
            {activeSection === 'ui' && <UISection />}
            {activeSection === 'roadmap' && <RoadmapSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function BrandSection() {
  return (
    <div className="space-y-16">
      <header>
        <span className="text-[#7B1E2E] font-serif italic text-xl">01 //</span>
        <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tight leading-[0.9] mt-4">Brand Direction</h2>
        <p className="max-w-xl text-lg mt-8 text-black/60 leading-relaxed font-sans font-light italic">
          Positioning M. Global as the definitive authority in strategic consulting across Francophone and Global markets.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 border border-black/5 bg-white space-y-6">
          <div className="w-10 h-10 border border-[#7B1E2E] flex items-center justify-center text-[#7B1E2E]">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-serif uppercase tracking-tighter">Strategic Positioning</h3>
          <p className="text-sm leading-relaxed text-black/70">
            A "Bicentennial Modern" aesthetic—blending the weight of established authority with the agility of modern innovation. We occupy the space between legacy corporate firms and boutique creative strategy houses.
          </p>
        </div>

        <div className="p-8 border border-black/5 bg-white space-y-6">
          <div className="w-10 h-10 border border-[#7B1E2E] flex items-center justify-center text-[#7B1E2E]">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-serif uppercase tracking-tighter">Target Audience</h3>
          <p className="text-sm leading-relaxed text-black/70">
            C-Suite executives, major NGOs, and governmental bodies in Canada, Europe, and Africa. Clients looking for linguistic nuance (EN/FR) and high-impact strategic framing.
          </p>
        </div>

        <div className="p-8 border border-black/5 bg-white space-y-4 md:col-span-2">
          <h3 className="text-sm uppercase tracking-[0.3em] font-serif italic mb-4">Tone of Voice</h3>
          <div className="flex flex-wrap gap-4">
            {['Decisive', 'Nuanced', 'Linguistic', 'Architectural', 'Global', 'Visionary'].map((word) => (
              <span key={word} className="px-6 py-2 border border-black/10 text-xs uppercase tracking-widest font-sans font-medium">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignSection() {
  return (
    <div className="space-y-16">
      <header>
        <span className="text-[#7B1E2E] font-serif italic text-xl">02 //</span>
        <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tight leading-[0.9] mt-4">Design System</h2>
        <p className="max-w-xl text-lg mt-8 text-black/60 leading-relaxed font-sans font-light italic">
          Extracted from the M. Global logo for visual continuity and psychological impact.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h3 className="text-xs uppercase tracking-[0.4em] mb-8 font-semibold opacity-50">Core Palette</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 h-48 border border-black/5 overflow-hidden">
            <div className="bg-[#1a1a1a] p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] tracking-widest uppercase mb-1">Midnight Black</span>
              <span className="font-mono text-xs opacity-50">#1A1A1A</span>
            </div>
            <div className="bg-[#7B1E2E] p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] tracking-widest uppercase mb-1">Crimson Prestige</span>
              <span className="font-mono text-xs opacity-50">#7B1E2E</span>
            </div>
            <div className="bg-[#F2F2F2] p-8 flex flex-col justify-end text-black">
              <span className="text-[10px] tracking-widest uppercase mb-1">Ivory Clarity</span>
              <span className="font-mono text-xs opacity-50">#F2F2F2</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-black/5">
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] mb-8 font-semibold opacity-50">Primary Typeface</h3>
            <p className="text-5xl font-serif italic mb-4">Cormorant Garamond</p>
            <p className="text-sm text-black/60 font-serif leading-relaxed">
              For authority, heritage, and refined intellectual depth. Used for headings, pull quotes, and major identifiers.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] mb-8 font-semibold opacity-50">Secondary Typeface</h3>
            <p className="text-5xl font-sans font-bold tracking-tighter mb-4 uppercase">Barlow</p>
            <p className="text-sm text-black/60 font-sans leading-relaxed">
              For clarity, precision, and modern accessibility. Used for long-form body text, data points, and technical labels.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function ArchitectureSection() {
  const pages = [
    { title: 'Home', sections: 'Hero Strategy, Impact Reel, Sectors Grid, Quote Block' },
    { title: 'About', sections: 'Our Philosophy, Founder Story, Global Reach, Values' },
    { title: 'Services', sections: 'Strategic Advisory, Market Entry, Governance, Training' },
    { title: 'Projects', sections: 'Impact Metrics, Case Study Grid, Success Stories' },
    { title: 'Sectors', sections: 'Government, NGO, Energy, Digital Infrastructure' },
    { title: 'Insights', sections: 'Whitepapers, Strategic Notes, News, Events' },
    { title: 'Partners', sections: 'Strategic Alliances, Network Map, Testimonials' },
    { title: 'Contact', sections: 'Global Offices, Inquiry Form, Office Hours' },
  ];

  return (
    <div className="space-y-16">
      <header>
        <span className="text-[#7B1E2E] font-serif italic text-xl">03 //</span>
        <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tight leading-[0.9] mt-4">Site Architecture</h2>
        <p className="max-w-xl text-lg mt-8 text-black/60 leading-relaxed font-sans font-light italic">
          An 8-core page structure designed for narrative flow and conversion-focused authority.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
        {pages.map((page, idx) => (
          <div key={page.title} className="bg-white p-8 group hover:bg-[#1a1a1a] transition-colors duration-500">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono opacity-30 group-hover:opacity-60 group-hover:text-white">0{idx + 1}</span>
              <div className="w-8 h-[1px] bg-[#7B1E2E]" />
            </div>
            <h3 className="text-3xl font-serif uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
              {page.title}
            </h3>
            <p className="text-xs tracking-widest uppercase opacity-50 group-hover:opacity-70 group-hover:text-white transition-colors">
              {page.sections}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalSection() {
  const features = [
    { title: 'Bilingual Engine', phase: 'Launch', desc: 'Seamless EN/FR toggle with path-aware content mirroring.' },
    { title: 'Semantic Search', phase: 'Phase 2', desc: 'AI-driven content discovery across whitepapers and insights.' },
    { title: 'Interactive Sectors', phase: 'Launch', desc: 'Dynamic sector-specific deep dives via filterable modules.' },
    { title: 'Global Impact Map', phase: 'Phase 2', desc: 'SVG-based interactive map tracking project footprint.' },
    { title: 'Lead Capture CRM', phase: 'Launch', desc: 'Secure inquiry routing to appropriate regional leads.' },
    { title: 'Member Portal', phase: 'Phase 3', desc: 'Secure document repository for active strategic clients.' },
  ];

  return (
    <div className="space-y-16">
      <header>
        <span className="text-[#7B1E2E] font-serif italic text-xl">04 //</span>
        <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tight leading-[0.9] mt-4">Technical Features</h2>
        <p className="max-w-xl text-lg mt-8 text-black/60 leading-relaxed font-sans font-light italic">
          Scalable functional intelligence for a global digital presence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-8 bg-white border border-black/5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7B1E2E]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">{f.phase}</span>
            </div>
            <h3 className="text-2xl font-serif uppercase mb-2">{f.title}</h3>
            <p className="text-sm text-black/60 font-sans leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function UISection() {
  const components = ['Hero Strategy', 'Stats Strip', 'Case Study Tiles', 'Navigation Rail', 'Impact Footer', 'Bilingual Toggle', 'Sector Filters', 'Founder Block', 'Service Cards'];

  return (
    <div className="space-y-16">
      <header>
        <span className="text-[#7B1E2E] font-serif italic text-xl">05 //</span>
        <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tight leading-[0.9] mt-4">UI Components</h2>
        <p className="max-w-xl text-lg mt-8 text-black/60 leading-relaxed font-sans font-light italic">
          A library of 9 reusable elements ensuring brand cohesion across every digital touchpoint.
        </p>
      </header>

      <div className="flex flex-wrap gap-4">
        {components.map((c) => (
          <div key={c} className="px-8 h-24 flex items-center justify-center bg-white border border-black/5 min-w-[200px] flex-1 text-center font-serif uppercase text-sm tracking-widest hover:border-[#7B1E2E] transition-colors cursor-crosshair">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapSection() {
  const stages = [
    { title: 'Foundation & Identity', est: 'Weeks 1-4', tasks: 'Brand assets, Site architecture, core UI definitions.' },
    { title: 'Core Launch', est: 'Weeks 5-10', tasks: 'Primary 8-page build, bilingual engine integration, testing.' },
    { title: 'Scale & Authority', est: 'Continuous', tasks: 'Phase 2 features, content expansion, interactive insights.' },
  ];

  return (
    <div className="space-y-16">
      <header>
        <span className="text-[#7B1E2E] font-serif italic text-xl">06 //</span>
        <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tight leading-[0.9] mt-4">Build Roadmap</h2>
        <p className="max-w-xl text-lg mt-8 text-black/60 leading-relaxed font-sans font-light italic">
          A phased strategic delivery from initial launch to global scaling.
        </p>
      </header>

      <div className="space-y-8">
        {stages.map((stage, idx) => (
          <div key={stage.title} className="flex flex-col md:flex-row gap-8 items-start p-8 bg-white border border-black/5">
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center font-serif text-3xl shrink-0">
              {idx + 1}
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-serif uppercase tracking-tight">{stage.title}</h3>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F2F2F2] rounded-full text-[10px] uppercase font-bold tracking-widest text-black/50">
                  <Clock className="w-3 h-3" /> {stage.est}
                </div>
              </div>
              <p className="text-black/60 italic font-serif text-lg">{stage.tasks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
