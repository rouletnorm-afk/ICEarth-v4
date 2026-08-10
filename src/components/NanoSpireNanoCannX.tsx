import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  FlaskConical,
  Sparkles,
  Droplets,
  Layers,
  Cpu,
  Flame,
  Globe,
  FileText,
  Printer,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  Atom,
  ArrowRight,
  BarChart3,
  Scale
} from 'lucide-react';

import nanoSpireRoadmapImg from '../assets/images/NanoSpireRoadmap.jpg';
import nanoSpire20YearsImg from '../assets/images/NanoSpire20Years.jpg';

interface NanoSpireProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const NanoSpireNanoCannX: React.FC<NanoSpireProps> = ({ onNavigateTab, siteTheme = 'light' }) => {
  const isLight = siteTheme === 'light';

  // Modal State for High-Res Image Inspection
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; subtitle: string; hash?: string } | null>(null);

  // Active Category Filter for Applications
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pharma' | 'hemp_wood' | 'polymers' | 'biofuels' | 'pfas'>('all');

  // Licensing Proposal Calculator State
  const [licensingCalc, setLicensingCalc] = useState({
    industry: 'hemp_wood',
    annualVolumeGallons: 50000,
    targetParticleSizeNm: 45,
    customRequirement: 'Homogenization & UV Stabilization for Hemp Wood Oils (e.g. Hemp Shield)'
  });

  return (
    <div className={`min-h-full transition-colors duration-200 font-sans ${
      isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'
    }`}>
      
      {/* HERO BANNER & PARTNER CREDENTIALS */}
      <section className={`border-b ${
        isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Top Breadcrumb & Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className={`px-2.5 py-1 rounded-md font-bold uppercase ${
                isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-950/80 text-amber-300 border border-amber-700/50'
              }`}>
                UCANX Processing Partner #0002
              </span>
              <span className={`px-2.5 py-1 rounded-md font-bold uppercase ${
                isLight ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' : 'bg-cyan-950/80 text-cyan-300 border border-cyan-700/50'
              }`}>
                ⚡ Exclusive Cannabis Nanotech Rights
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://nanospire.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  isLight 
                    ? 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300' 
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
                }`}
              >
                <span>Original Site: nanospire.com</span>
                <ExternalLink size={13} />
              </a>

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('ucanx')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-all cursor-pointer font-mono"
                >
                  <span>Trade on UCANX</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Title Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-mono font-bold border border-cyan-500/20">
                <Atom size={14} className="animate-spin-slow" />
                <span>Patented Reentrant Micro-Jet Cavitation Technology</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
                NanoSpire NanoCannX
              </h1>
              
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-serif">
                Standardized Nanotechnology Processing Enterprise & Exclusive Industry Licensing Portal for Cannabis, Industrial Hemp, Advanced Materials, and Energy Systems.
              </p>

              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                Pioneering nanosecond cavitation physics to revolutionize particle homogenization, nano-emulsions, nanocellulose composite fabrication, bio-energy, and zero-chemical environmental remediation.
              </p>
            </div>

            {/* Sovereign Partner & Contact Card */}
            <div className={`lg:col-span-4 p-5 rounded-2xl border shadow-sm space-y-4 ${
              isLight ? 'bg-amber-50/60 border-amber-200 text-amber-950' : 'bg-stone-900 border-amber-500/30 text-stone-100'
            }`}>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold font-mono text-base">
                    NR
                  </div>
                  <div>
                    <h3 className="font-bold text-sm font-mono">Norm Roulet</h3>
                    <p className="text-[11px] text-amber-800 dark:text-amber-300 font-mono">Sovereign Partner & Exclusive Licensee</p>
                  </div>
                </div>
                <span className="text-[10px] bg-amber-500/20 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-mono font-bold border border-amber-500/30">
                  User #1
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 dark:text-stone-100 block">Taos Kush Institute</span>
                    <span className="text-stone-600 dark:text-stone-300">260 New Mexico 150, El Prado, NM 87529</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <a href="tel:5757411750" className="font-bold hover:underline text-stone-900 dark:text-stone-100">
                    575-741-1750
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <a href="mailto:rouletnorm@gmail.com" className="font-bold hover:underline text-stone-900 dark:text-stone-100">
                    rouletnorm@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-[11px] font-mono">
                <span className="text-stone-600 dark:text-stone-400">Master Rights Holder:</span>
                <span className="font-bold text-amber-700 dark:text-amber-300">Global Cannabis + NM Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORLD RENOWNED FOUNDERS & ADVISORS SECTION */}
      <section className={`py-10 border-b ${
        isLight ? 'bg-stone-100/60 border-stone-200' : 'bg-stone-900/50 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">
              Pioneers of Cavitation Physics
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
              World-Renowned Scientific Leadership & Patents
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              NanoSpire, Inc. was founded in December 2001 to commercialize next-generation reentrant micro-jet cavitation machine tools and nanoprocessing technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Founder 1: Mark L. LeClair - CEO & Founder */}
            <div className={`p-6 rounded-2xl border ${
              isLight ? 'bg-white border-cyan-200 shadow-xs' : 'bg-stone-900 border-cyan-500/30'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl font-bold font-mono text-sm">
                  ML
                </div>
                <div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-serif">Mark L. LeClair</h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">CEO & Founder, NanoSpire, Inc.</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span>Inventor of NanoSpire's core technology with over 30 years of deep expertise in fluid dynamics, heat transfer, thermodynamics, CFD, physics, and cavitation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span>Former <strong className="text-stone-900 dark:text-stone-100">Trident II underwater launch hydrodynamicist</strong> at Lockheed Missiles & Space Co.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span>Graduated from <strong>Worcester Polytechnic Institute (WPI)</strong> in mechanical engineering (1988 MSME, 1983 BSME w/honors) with concentration in nuclear engineering, physics & fluid mechanics.</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800">
                <span className="text-[11px] font-mono font-bold text-stone-700 dark:text-stone-300 block mb-2">
                  Key Issued U.S. Patents:
                </span>
                <div className="space-y-1.5 text-[10px] font-mono text-stone-600 dark:text-stone-400">
                  <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded border border-stone-200 dark:border-stone-800">
                    • <strong>US Patent 7,517,430</strong> (Apr. 14, 2009): Method and Apparatus for the Controlled Formation of Cavitation Bubbles
                  </div>
                  <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded border border-stone-200 dark:border-stone-800">
                    • <strong>US Patent 7,297,288</strong> (Nov. 20, 2007): Method and Apparatus for the Controlled Formation of Cavitation Bubbles
                  </div>
                  <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded border border-stone-200 dark:border-stone-800">
                    • <strong>US Patent 6,960,307</strong> (Nov. 1, 2005): Controlled Formation of Cavitation Bubbles Using Target Bubbles
                  </div>
                  <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded border border-stone-200 dark:border-stone-800">
                    • <strong>US Patent 6,932,914</strong> (Aug. 23, 2005): Controlled Formation of Cavitation Bubbles Using Target Bubbles
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2: Serge Lebid - President & Co-Founder */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
              isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-amber-500/30'
            }`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl font-bold font-mono text-sm">
                    SL
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-serif">Serge Lebid</h3>
                    <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">President & Co-Founder</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Former Vice President and founder of a prior cavitation-based nanophase materials enterprise.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Extensive international and domestic track record in commercial sales and industrial equipment deployment for cavitation processing tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Spearheading global B2B equipment integration and enterprise commercialization.</span>
                  </li>
                </ul>
              </div>

              {/* NanoSpire Distinguished Advisory Board */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 block mb-2">
                  NanoSpire Distinguished Advisory Board:
                </span>
                <div className="space-y-2 text-xs font-sans">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <span className="font-bold text-stone-900 dark:text-stone-100 block">Prof. Christopher Brennen</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-300">
                      Professor Emeritus, Mechanical Engineering at California Institute of Technology (Caltech). World authority and author of the seminal text <em>Cavitation and Bubble Dynamics</em>.
                    </span>
                  </div>

                  <div className="p-3 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl">
                    <span className="font-bold text-stone-900 dark:text-stone-100 block">Capt. Edmond Pope (US Navy, ret.)</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-300">
                      Retired US Navy Intelligence Officer, naval hydrodynamic warfare specialist, and coauthor of <em>Torpedoed</em>.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED GRAPHICS & ROADMAP EXHIBITS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
              Technical Documentation & Exhibits
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
              Featured NanoSpire Technical Roadmaps
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Click on any exhibit to open the full-resolution inspection dossier.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* EXHIBIT 1: NEW MISSION FOR LOS ALAMOS */}
          <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
            isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
                  EXHIBIT 1 • LOS ALAMOS PROPOSAL
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
                  "New Mission For Los Alamos"
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage({
                  url: nanoSpireRoadmapImg,
                  title: 'New Mission For Los Alamos',
                  subtitle: 'Proposed deployment to Los Alamos National Laboratories (LANL), NM Economic Development, universities, government and industry.'
                })}
                className="p-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg text-stone-700 dark:text-stone-200 transition-colors cursor-pointer"
                title="Expand Full Resolution Image"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            <div 
              onClick={() => setSelectedImage({
                url: nanoSpireRoadmapImg,
                title: 'New Mission For Los Alamos',
                subtitle: 'Proposed deployment to Los Alamos National Laboratories (LANL), NM Economic Development, universities, government and industry.'
              })}
              className="relative aspect-4/3 overflow-hidden rounded-xl bg-stone-950 border border-stone-800 cursor-pointer group mb-4"
            >
              <img 
                src={nanoSpireRoadmapImg} 
                alt="New Mission For Los Alamos Roadmap" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs font-bold gap-2">
                <Maximize2 size={18} />
                <span>Click to Inspect High-Res Roadmap</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-3">
              Proposing to <strong>Los Alamos National Laboratories (LANL)</strong>, New Mexico Economic Development Department, state universities, government, and industry partners to establish NanoSpire technology as the core driver for clean energy, advanced materials, and environmental remediation.
            </p>

            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-[11px] font-mono text-cyan-800 dark:text-cyan-300">
              <strong>Key Targets:</strong> High-altitude energy production, rare-earth processing, nuclear material remediation, and advanced biopolymer synthesis.
            </div>
          </div>

          {/* EXHIBIT 2: 20+ YEARS OF INNOVATION */}
          <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
            isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
                  EXHIBIT 2 • CAVITATION & PFAS ROADMAP
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
                  "20+ Years Of Innovation"
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage({
                  url: nanoSpire20YearsImg,
                  title: 'NanoSpire 20 Years Cavitation & PFAS Destruction Roadmap',
                  subtitle: 'Two decades of nanosecond cavitation research and zero-chemical destruction of toxic PFAS/PFOS compounds.',
                  hash: '0xNANOSPIRE_20_YEARS_CAVITATION'
                })}
                className="p-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg text-stone-700 dark:text-stone-200 transition-colors cursor-pointer"
                title="Expand Full Resolution Image"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            <div 
              onClick={() => setSelectedImage({
                url: nanoSpire20YearsImg,
                title: 'NanoSpire 20 Years Cavitation & PFAS Destruction Roadmap',
                subtitle: 'Two decades of nanosecond cavitation research and zero-chemical destruction of toxic PFAS/PFOS compounds.',
                hash: '0xNANOSPIRE_20_YEARS_CAVITATION'
              })}
              className="relative aspect-4/3 overflow-hidden rounded-xl bg-stone-950 border border-stone-800 cursor-pointer group mb-4"
            >
              <img 
                src={nanoSpire20YearsImg} 
                alt="NanoSpire 20 Years Cavitation Roadmap" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs font-bold gap-2">
                <Maximize2 size={18} />
                <span>Click to Inspect High-Res Roadmap</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-3">
              Two decades of nanosecond cavitation research demonstrating <strong>zero-chemical molecular destruction of toxic PFAS/PFOS forever chemicals</strong>, heavy metal shearing, helium transmutation, and material restructuring.
            </p>

            <div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] font-mono text-amber-900 dark:text-amber-300">
              <span>Verified Ledger Hash:</span>
              <span className="font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                0xNANOSPIRE_20_YEARS_CAVITATION
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* CANNABIS & INDUSTRIAL HEMP NANOPROCESSING APPLICATIONS */}
      <section className={`py-12 border-t border-b ${
        isLight ? 'bg-stone-100/70 border-stone-200' : 'bg-stone-900/60 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
              Cannabis & Industrial Hemp Nanotech Scope
            </span>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
              Industrial Applications & B2B Licensing Scope
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Norm Roulet holds global master licensing rights for applying NanoSpire technology across all commercial cannabis and hemp sectors.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4 font-mono text-xs">
              {[
                { id: 'all', label: 'All Applications' },
                { id: 'hemp_wood', label: '🪵 Hemp Wood Oils (Hemp Shield)' },
                { id: 'pharma', label: '💊 Pharma & Bio-Nutraceuticals' },
                { id: 'polymers', label: '🧬 Biopolymers & 3D Fabrication' },
                { id: 'biofuels', label: '⛽ Biofuels & Clean Energy' },
                { id: 'pfas', label: '🧪 Quantum PFAS Remediation' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : isLight 
                        ? 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300' 
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. HEMP WOOD OILS & COATINGS (HEMP SHIELD PROPOSAL) */}
            {(selectedCategory === 'all' || selectedCategory === 'hemp_wood') && (
              <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-amber-500/30'
              }`}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
                    🪵
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Hemp Wood Oils & Finish Coatings
                  </h3>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-mono font-bold mb-3">
                    Featured Partner Proposal: Hemp Shield
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-4">
                    Licensing NanoSpire cavitation tools to <strong>Hemp Shield</strong> (hemp wood finish) and bio-coating manufacturers to achieve sub-50nm oil particle reduction, phase homogenization, UV dispersion, deep wood-grain penetration, and permanent shelf-life stabilization.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-500 dark:text-stone-400 space-y-1">
                  <div>• Particle Size: Sub-50 Nanometers</div>
                  <div>• Zero Chemical Surfactants Required</div>
                  <div>• 3x Increased Penetration Depth</div>
                </div>
              </div>
            )}

            {/* 2. MEDICINAL EXTRACTS & NUTRACEUTICALS */}
            {(selectedCategory === 'all' || selectedCategory === 'pharma') && (
              <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isLight ? 'bg-white border-emerald-200 shadow-xs' : 'bg-stone-900 border-emerald-500/30'
              }`}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                    💊
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Medicinal Extracts & Liposomal Delivery
                  </h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-mono font-bold mb-3">
                    High-Bioavailability Nano-Cannabinoids
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-4">
                    Transforming hydrophobic cannabinoids (CBD, CBG, CBN, THC) into crystal-clear, water-soluble nano-emulsions. Provides 5x to 10x higher bioavailability, rapid sublingual onset within minutes, and absolute dose consistency without degradation.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-500 dark:text-stone-400 space-y-1">
                  <div>• Bioavailability Increase: 500% – 1000%</div>
                  <div>• Onset Time: &lt; 5 Minutes</div>
                  <div>• Crystal Clear Water Solubility</div>
                </div>
              </div>
            )}

            {/* 3. BIOPOLYMERS & 3D FABRICATION */}
            {(selectedCategory === 'all' || selectedCategory === 'polymers') && (
              <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isLight ? 'bg-white border-cyan-200 shadow-xs' : 'bg-stone-900 border-cyan-500/30'
              }`}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 flex items-center justify-center font-bold mb-4">
                    🧬
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Nanocellulose, Biopolymers & 3D Printing
                  </h3>
                  <p className="text-xs text-cyan-800 dark:text-cyan-300 font-mono font-bold mb-3">
                    High-Tensile Industrial Composites
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-4">
                    Mechanical shearing of industrial hemp bast fiber down to nanoscale cellulose crystals and nanofibrils. Enables ultra-lightweight, high-tensile biopolymer resins, structural hempcrete reinforcement, and precision 3D printing filaments.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-500 dark:text-stone-400 space-y-1">
                  <div>• Nanocellulose Fiber Shear &lt; 80nm</div>
                  <div>• Replaces Synthetic Glass Fibers</div>
                  <div>• High Thermal & Mechanical Stability</div>
                </div>
              </div>
            )}

            {/* 4. BIOFUELS & CLEAN ENERGY */}
            {(selectedCategory === 'all' || selectedCategory === 'biofuels') && (
              <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-amber-500/30'
              }`}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold mb-4">
                    ⛽
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Hemp Seed Biofuels & Aviation Fuel
                  </h3>
                  <p className="text-xs text-rose-800 dark:text-rose-300 font-mono font-bold mb-3">
                    Hydrodynamic Transesterification
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-4">
                    Applying acoustic micro-jet shockwaves to hemp seed crude oil to achieve continuous, instant transesterification into low-viscosity biodiesel and bio-jet fuel with 98%+ conversion efficiency and minimal catalyst requirements.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-500 dark:text-stone-400 space-y-1">
                  <div>• Transesterification Time: Instantaneous</div>
                  <div>• Conversion Yield: &gt; 98.5%</div>
                  <div>• Replaces High-Heat Boiler Energy</div>
                </div>
              </div>
            )}

            {/* 5. QUANTUM PFAS & HEAVY METAL REMEDIATION */}
            {(selectedCategory === 'all' || selectedCategory === 'pfas') && (
              <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isLight ? 'bg-white border-stone-300 shadow-xs' : 'bg-stone-900 border-stone-700'
              }`}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold mb-4">
                    🧪
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    PFAS Zero-Chemical Water & Soil Remediation
                  </h3>
                  <p className="text-xs text-cyan-800 dark:text-cyan-300 font-mono font-bold mb-3">
                    20+ Years empirical Proof (Exhibit B)
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-4">
                    Utilizing extreme cavitation bubble collapse to physically shear Carbon-Fluorine (C-F) bonds in toxic PFAS/PFOS forever chemicals, process radioactive materials, and remediate heavy-metal contaminated agricultural soil.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-500 dark:text-stone-400 space-y-1">
                  <div>• C-F Bond Cleavage: 99.99% Complete</div>
                  <div>• Zero Chemical Waste Residue</div>
                  <div>• State & Federal Defense Applications</div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* B2B LICENSING & PROPOSAL BUILDER FOR UCANX */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-10 rounded-3xl border shadow-xl ${
          isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-500/40'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400 tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
                UCANX Contract Integration
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Propose a NanoSpire Licensing Contract
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Whether you operate a wood finishing brand like <strong>Hemp Shield</strong>, a pharmaceutical extract lab, or an industrial biopolymer facility, you can submit a licensing proposal directly to Norm Roulet for processing technology integration.
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-500" />
                  <span>Exclusive Master Licensee: Norm Roulet (User #1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-500" />
                  <span>Commercial Contracting via UCANX Commodities Exchange</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-500" />
                  <span>Direct Site Testing at Taos Kush Institute (El Prado, NM)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="mailto:rouletnorm@gmail.com?subject=NanoSpire%20Licensing%20Inquiry%20via%20UCANX&body=Hello%20Norm,%20I%20would%20like%20to%20discuss%20licensing%20NanoSpire%20technology%20for..."
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl font-mono transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Mail size={16} />
                  <span>Email Norm Roulet Directly</span>
                </a>

                <a
                  href="tel:5757411750"
                  className={`px-5 py-3 rounded-xl font-bold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
                    isLight 
                      ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' 
                      : 'bg-stone-800 hover:bg-stone-700 text-stone-100 border-stone-700'
                  }`}
                >
                  <Phone size={16} />
                  <span>Call 575-741-1750</span>
                </a>
              </div>
            </div>

            {/* Quick Proposal Parameter Card */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border ${
              isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'
            }`}>
              <h3 className="font-bold text-sm font-mono text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                <Scale size={16} className="text-amber-600" />
                <span>Quick Licensing Estimate Tool</span>
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <label className="text-[11px] text-stone-500 dark:text-stone-400 block mb-1">Target Application:</label>
                  <select 
                    value={licensingCalc.industry}
                    onChange={(e) => setLicensingCalc({...licensingCalc, industry: e.target.value})}
                    className={`w-full p-2.5 rounded-lg border font-bold text-xs ${
                      isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-700 text-stone-100'
                    }`}
                  >
                    <option value="hemp_wood">Hemp Wood Oils & Finishes (e.g. Hemp Shield)</option>
                    <option value="pharma">Medicinal Extract Nano-Emulsions</option>
                    <option value="polymers">Nanocellulose & 3D Biopolymers</option>
                    <option value="biofuels">Biodiesel & Aviation Fuel Transesterification</option>
                    <option value="pfas">PFAS Soil & Water Remediation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-stone-500 dark:text-stone-400 block mb-1">Estimated Annual Processing Volume (Gallons/Lbs):</label>
                  <input 
                    type="number"
                    value={licensingCalc.annualVolumeGallons}
                    onChange={(e) => setLicensingCalc({...licensingCalc, annualVolumeGallons: Number(e.target.value)})}
                    className={`w-full p-2.5 rounded-lg border font-bold text-xs ${
                      isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-700 text-stone-100'
                    }`}
                  />
                </div>

                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-stone-600 dark:text-stone-400">Target Particle Scale:</span>
                    <span className="font-bold text-amber-700 dark:text-amber-300">&lt; 50 Nanometers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600 dark:text-stone-400">Expected Yield Increase:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">+35% to +200%</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert(`Licensing inquiry prepared for Norm Roulet!\nApplication: ${licensingCalc.industry}\nVolume: ${licensingCalc.annualVolumeGallons.toLocaleString()} units/yr.\nCall 575-741-1750 or email rouletnorm@gmail.com to finalize your contract!`);
                  }}
                  className="w-full py-2.5 bg-stone-900 dark:bg-amber-500 hover:bg-stone-800 dark:hover:bg-amber-400 text-white dark:text-stone-950 font-bold text-xs rounded-xl font-mono cursor-pointer transition-all"
                >
                  Submit Proposal to Norm Roulet
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FULL RESOLUTION IMAGE INSPECTION MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col p-4 sm:p-8 overflow-y-auto font-sans">
          <div className="max-w-6xl w-full mx-auto bg-stone-900 border border-stone-700 rounded-2xl p-4 sm:p-6 text-white space-y-4 shadow-2xl my-auto">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <h3 className="font-bold text-base font-serif text-amber-400">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-stone-300 mt-0.5">{selectedImage.subtitle}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-stone-800 hover:bg-stone-700 rounded-xl text-stone-300 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative max-h-[70vh] flex items-center justify-center bg-black rounded-xl overflow-hidden border border-stone-800 p-2">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-h-[65vh] w-auto object-contain rounded-lg"
              />
            </div>

            {selectedImage.hash && (
              <div className="flex items-center justify-between p-3 bg-stone-950 border border-amber-500/30 rounded-xl font-mono text-xs text-amber-300">
                <span>Cryptographic Proof Ledger:</span>
                <span className="font-bold">{selectedImage.hash}</span>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs font-mono rounded-xl cursor-pointer"
              >
                Close Dossier View
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
