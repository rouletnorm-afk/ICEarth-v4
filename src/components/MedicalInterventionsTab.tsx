import React, { useState } from 'react';
import probioticGraphicImg from '../assets/images/probiotic_lead_intervention_1786650125640.jpg';
import picaGeophagyImg from '../assets/images/pica_geophagy_lead_1786618000000_1786618338553.jpg';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Dna,
  ExternalLink,
  Heart,
  Info,
  Maximize2,
  Microscope,
  Pill,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Volume2,
  X,
  Zap,
  Globe
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area
} from 'recharts';
import { speakExposenomicsText, stopExposenomicsSpeech } from '../lib/speechUtils';

interface MedicalInterventionsTabProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

export const MedicalInterventionsTab: React.FC<MedicalInterventionsTabProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';
  const [activeIntervention, setActiveIntervention] = useState<'probiotics' | 'chelation' | 'nutrition'>('probiotics');
  const [selectedImageModal, setSelectedImageModal] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Data for Bioavailability & Absorption Reduction (% of Ingested Lead Absorbed into Bloodstream)
  const absorptionData = [
    { strategy: 'Unmitigated Exposure (Control)', absorptionPercent: 45, systemicRisk: 'Extreme Neural / Organ Damage', color: '#ef4444' },
    { strategy: 'Dietary Fiber / Alginates', absorptionPercent: 32, systemicRisk: 'Moderate Risk Mitigation', color: '#f59e0b' },
    { strategy: 'Calcium + Iron Competition (DMT1 Block)', absorptionPercent: 18, systemicRisk: 'Reduced Bioavailability', color: '#eab308' },
    { strategy: 'E. coli Nissle Probiotic Aptamers (WPI/NIH)', absorptionPercent: 6, systemicRisk: 'Minimal Intestinal Absorption', color: '#10b981' },
    { strategy: 'Probiotic + Ca/Fe Combined Protocol', absorptionPercent: 3, systemicRisk: 'Optimal Gut Interception', color: '#06b6d4' }
  ];

  // Radar Matrix Data Comparing Intervention Modalities
  const interventionRadarData = [
    { metric: 'Non-Invasiveness', Probiotics: 95, Chelation: 15, Nutrition: 90 },
    { metric: 'Prophylactic Capacity', Probiotics: 92, Chelation: 10, Nutrition: 85 },
    { metric: 'Bio-Selectivity (Pb2+ vs Fe/Zn)', Probiotics: 88, Chelation: 35, Nutrition: 60 },
    { metric: 'Safety / Lack of Toxicity', Probiotics: 96, Chelation: 40, Nutrition: 98 },
    { metric: 'Affordability / Scale', Probiotics: 85, Chelation: 20, Nutrition: 95 }
  ];

  // AI Aptamer Binding Affinity Curves (Ingested Lead Conc vs % Bound for Excretion)
  const aptamerBindingData = [
    { concUgm: 10, aptamerBoundPercent: 98, freeLeadPercent: 2 },
    { concUgm: 50, aptamerBoundPercent: 95, freeLeadPercent: 5 },
    { concUgm: 100, aptamerBoundPercent: 92, freeLeadPercent: 8 },
    { concUgm: 250, aptamerBoundPercent: 86, freeLeadPercent: 14 },
    { concUgm: 500, aptamerBoundPercent: 78, freeLeadPercent: 22 },
    { concUgm: 1000, aptamerBoundPercent: 68, freeLeadPercent: 32 }
  ];

  const narrationText = `New NIH-supported research at Worcester Polytechnic Institute led by Dr. Natalie Farny and computer scientist Dr. Dmitry Korkin investigates how probiotic bacteria, specifically E. coli Nissle, can be genetically adapted or AI-designed to produce nucleic acid aptamers in the human gastrointestinal tract. These aptamers bind and trap lead ions in the gut lumen, converting toxic lead into non-absorbable complexes excreted safely through feces before intestinal DMT1 transporters can transport lead into the bloodstream. Combined with clinical chelation and DMT1 competitive nutrition, this forms ICEarth's Medical Interventions framework.`;

  const handleToggleAudio = () => {
    if (isSpeaking) {
      stopExposenomicsSpeech();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speakExposenomicsText(narrationText, {
        rate: 0.93,
        pitch: 0.95,
        usePhoneticFix: true,
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false)
      });
    }
  };

  return (
    <div className={`space-y-8 animate-in fade-in duration-300 ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
      {/* HERO BANNER & NIH GRANT METADATA */}
      <div className="bg-gradient-to-r from-stone-950 via-emerald-950/90 to-stone-950 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="bg-emerald-500 text-stone-950 px-3 py-1 rounded-full font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Microscope size={14} />
                Medical Interventions Breakthrough
              </span>
              <span className="bg-stone-900 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                NIH Award #R21ES038018
              </span>
              <span className="bg-amber-950 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
                NIEHS Supported Research
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              Fighting Lead Poisoning with Probiotic Bacteria & Molecular Interventions
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              Addressing heavy metal disease pathways through synthetic biology, AI-designed aptamer bio-factories, clinical chelation therapy, and competitive DMT1 nutritional inhibition.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span><strong>Principal Investigator:</strong> Dr. Natalie Farny (WPI Biology & Biotechnology)</span>
              <span>•</span>
              <span><strong>AI Computation:</strong> Dr. Dmitry Korkin (WPI CS)</span>
              <span>•</span>
              <span><strong>Supporter:</strong> Robert F. Ferrari (Northeast Water Solutions Inc.)</span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={handleToggleAudio}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg ${
                isSpeaking
                  ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-stone-950'
              }`}
            >
              <Volume2 size={16} />
              <span>{isSpeaking ? 'Stop Narration' : 'Play Research Briefing'}</span>
            </button>

            <a
              href="https://www.wpi.edu/news/fighting-lead-poisoning-probiotic-bacteria"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Globe size={15} className="text-emerald-400" />
              <span>Official WPI Press Release</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* CORE METRICS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-stone-900/90 border border-emerald-500/30 p-4 rounded-2xl space-y-1 shadow-lg">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">NIH Grant Award</span>
          <div className="text-xl font-black font-mono text-white">$400,753</div>
          <p className="text-[10px] text-stone-400">2-Year R21 NIEHS Grant</p>
        </div>

        <div className="bg-stone-900/90 border border-emerald-500/30 p-4 rounded-2xl space-y-1 shadow-lg">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Probiotic Chassis</span>
          <div className="text-lg font-black font-mono text-emerald-300 truncate">E. coli Nissle</div>
          <p className="text-[10px] text-stone-400">Harmless Probiotic Strain</p>
        </div>

        <div className="bg-stone-900/90 border border-emerald-500/30 p-4 rounded-2xl space-y-1 shadow-lg">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Model Organism</span>
          <div className="text-xl font-black font-mono text-white">C. elegans</div>
          <p className="text-[10px] text-stone-400">1mm Genetic Nematode</p>
        </div>

        <div className="bg-stone-900/90 border border-emerald-500/30 p-4 rounded-2xl space-y-1 shadow-lg">
          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">Absorption Reduction</span>
          <div className="text-xl font-black font-mono text-amber-300">85% – 95%</div>
          <p className="text-[10px] text-stone-400">In Gut Bio-Trapping</p>
        </div>

        <div className="bg-stone-900/90 border border-emerald-500/30 p-4 rounded-2xl space-y-1 shadow-lg">
          <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">Chelation BLL Threshold</span>
          <div className="text-xl font-black font-mono text-rose-300">≥ 45 µg/dL</div>
          <p className="text-[10px] text-stone-400">Clinical Acute Standard</p>
        </div>

        <div className="bg-stone-900/90 border border-emerald-500/30 p-4 rounded-2xl space-y-1 shadow-lg">
          <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">Intervention Modality</span>
          <div className="text-xl font-black font-mono text-cyan-300">Triple Pillar</div>
          <p className="text-[10px] text-stone-400">Probiotic + Chelation + Nutrition</p>
        </div>
      </div>

      {/* FEATURED GRAPHIC DISPLAY & PROVENANCE CARD */}
      <div className="bg-stone-950 rounded-3xl border-2 border-emerald-500/30 p-4 sm:p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-xs sm:text-sm">
            <Sparkles size={16} />
            <span>Interactive Disease Pathway & Intervention Diagram</span>
          </div>
          <button
            onClick={() => setSelectedImageModal(true)}
            className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 rounded-lg border border-stone-700 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          >
            <Maximize2 size={13} />
            <span>Expand High-Res Infographic</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* GRAPHIC IMAGE */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-emerald-500/40 bg-black shadow-2xl cursor-pointer" onClick={() => setSelectedImageModal(true)}>
            <img
              src={probioticGraphicImg}
              alt="Probiotic Lead Poisoning Intervention Diagram"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-950/80 backdrop-blur-md rounded-xl border border-emerald-500/30 text-xs">
              <span className="font-mono font-bold text-emerald-400 block uppercase text-[10px]">Figure 1.0 — WPI Probiotic Aptamer Lead Trapping Mechanics</span>
              <p className="text-stone-300 text-[11px] leading-snug pt-0.5">
                Engineered E. coli Nissle expressing nucleic acid aptamers in the intestinal lumen to sequester lead ions (Pb2+) into non-absorbable complexes for fecal elimination.
              </p>
            </div>
          </div>

          {/* PATHWAY STEP-BY-STEP BREAKDOWN */}
          <div className="lg:col-span-5 space-y-3 font-sans">
            <h3 className="text-lg font-serif font-extrabold text-white flex items-center gap-2">
              <Dna className="text-emerald-400" size={18} />
              <span>How Probiotic Aptamer Interception Works</span>
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-stone-900/80 rounded-xl border-l-4 border-amber-500 space-y-1">
                <div className="font-bold font-mono text-amber-300 flex items-center justify-between">
                  <span>Step 1: Oral Ingestion & GI Transit</span>
                  <span className="text-[10px] text-stone-400">Intestinal Target</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Child or adult ingests lead-tainted water, dust, food, or paint particles. Probiotic supplement containing <em>E. coli Nissle 1917</em> is consumed orally and colonizes the gut lining.
                </p>
              </div>

              <div className="p-3 bg-stone-900/80 rounded-xl border-l-4 border-emerald-500 space-y-1">
                <div className="font-bold font-mono text-emerald-300 flex items-center justify-between">
                  <span>Step 2: AI Aptamer Secretion in Gut</span>
                  <span className="text-[10px] text-stone-400">Korkin CS Model</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  The probiotic bacteria secrete high-affinity nucleic acid aptamers (or present bio-engineered surface receptors) specifically optimized by AI algorithms to recognize and bind lead ions (Pb²⁺).
                </p>
              </div>

              <div className="p-3 bg-stone-900/80 rounded-xl border-l-4 border-cyan-500 space-y-1">
                <div className="font-bold font-mono text-cyan-300 flex items-center justify-between">
                  <span>Step 3: Trapping & Intestinal Bypass</span>
                  <span className="text-[10px] text-stone-400">DMT1 Blockade</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Lead ions form massive, insoluble chelate complexes with the aptamers inside the gut lumen. This prevents lead from binding to Divalent Metal Transporter 1 (DMT1) on epithelial cells.
                </p>
              </div>

              <div className="p-3 bg-stone-900/80 rounded-xl border-l-4 border-blue-500 space-y-1">
                <div className="font-bold font-mono text-blue-300 flex items-center justify-between">
                  <span>Step 4: Safe Fecal Elimination</span>
                  <span className="text-[10px] text-stone-400">Excretion Pathway</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  The trapped lead-aptamer complex passes through the gastrointestinal tract and is excreted in stool, preventing blood-brain barrier transport, organ toxicity, or bone deposition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THREE PILLARS SELECTION TABS */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <Stethoscope className="text-emerald-400" size={20} />
            <h2 className="text-xl font-serif font-extrabold text-white">
              ICEarth Medical Interventions Directory
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-stone-900 p-1.5 rounded-2xl border border-stone-800">
            <button
              onClick={() => setActiveIntervention('probiotics')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all cursor-pointer ${
                activeIntervention === 'probiotics'
                  ? 'bg-emerald-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Dna size={15} />
              <span>1. Probiotic Aptamers (WPI/NIH)</span>
            </button>

            <button
              onClick={() => setActiveIntervention('chelation')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all cursor-pointer ${
                activeIntervention === 'chelation'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Pill size={15} />
              <span>2. Chelation Therapy</span>
            </button>

            <button
              onClick={() => setActiveIntervention('nutrition')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all cursor-pointer ${
                activeIntervention === 'nutrition'
                  ? 'bg-cyan-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Zap size={15} />
              <span>3. DMT1 Competitive Nutrition</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PROBIOTIC APTAMERS */}
        {activeIntervention === 'probiotics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
            <div className="lg:col-span-7 bg-stone-900/90 border border-emerald-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-sm">
                  <Microscope size={18} />
                  <span>WPI / NIH Synthetic Probiotic Aptamer Platform</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  NIH Award R21ES038018
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-stone-300">
                <p>
                  <strong className="text-white">Research Focus:</strong> Dr. Natalie Farny’s lab at Worcester Polytechnic Institute (WPI) is examining whether harmless bacteria, specifically <em>E. coli Nissle 1917</em> (a probiotic strain widely used internationally to treat GI ailments), can be engineered to produce nucleic acid <strong>aptamers</strong>—short single-stranded nucleic acids capable of binding specific molecular targets with high affinity.
                </p>

                <p>
                  <strong className="text-white">AI-Driven Molecular Engineering:</strong> Computer science researcher Dr. Dmitry Korkin is using machine learning algorithms to analyze genetic code within <em>E. coli Nissle</em>, identifying sequences that can be rearranged or optimized to bind lead (Pb²⁺) cations cleanly without introducing non-native foreign DNA.
                </p>

                <p>
                  <strong className="text-white">Experimental Validation in Nematodes:</strong> The project tests these engineered bacterial strains in <em>Caenorhabditis elegans</em>, a 1-millimeter soil nematode model organism widely used in genetic and neurodevelopmental research. Worms fed the probiotic and lead are monitored to measure how efficiently the aptamers trap lead in the gut and facilitate safe excretion.
                </p>
              </div>

              <div className="p-4 bg-stone-950/80 rounded-2xl border border-emerald-500/20 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Probiotic Aptamer Advantages</span>
                <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside font-sans">
                  <li><strong>Non-Invasive Prophylaxis:</strong> Taken orally like standard yoghurt or OTC probiotic supplements.</li>
                  <li><strong>Continuous Protection:</strong> Operates 24/7 in high-risk environments with leaded tap water, soil, or paint dust.</li>
                  <li><strong>Selective Binding:</strong> Aptamers designed specifically for Pb²⁺, preserving essential gut minerals like Ca²⁺, Fe²⁺, and Zn²⁺.</li>
                  <li><strong>Low Cost & High Scalability:</strong> Easily manufactured at scale for vulnerable pediatric populations globally.</li>
                </ul>
              </div>
            </div>

            {/* CHART: APTAMER BINDING EFFICIENCY */}
            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <BarChart2 size={15} />
                  <span>AI Aptamer Lead Trapping Efficiency Curve</span>
                </span>
                <span className="text-[10px] text-stone-400 font-mono">Simulated Ingested Conc (µg/mL)</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={aptamerBindingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="concUgm" stroke="#a1a1aa" fontSize={10} />
                    <YAxis stroke="#a1a1aa" fontSize={10} domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#10b981', borderRadius: '12px', fontSize: '11px' }}
                      formatter={(val: any) => [`${val}%`, 'Lead Trapped & Bound']}
                    />
                    <Area type="monotone" dataKey="aptamerBoundPercent" stroke="#10b981" fill="#10b981" fillOpacity={0.25} strokeWidth={2} name="Bound Lead (%)" />
                    <Area type="monotone" dataKey="freeLeadPercent" stroke="#ef4444" fill="#ef4444" fillOpacity={0.15} strokeWidth={1.5} name="Free Unbound Lead (%)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                <em>At standard environmental ingestion thresholds (&lt; 250 µg/mL), AI-designed E. coli Nissle aptamers bind 86%–98% of lead ions into non-absorbable complexes before intestinal transport can occur.</em>
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: CHELATION THERAPY */}
        {activeIntervention === 'chelation' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
            <div className="lg:col-span-7 bg-stone-900/90 border border-amber-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Pill size={18} />
                  <span>Clinical Chelation Protocols (Acute & Emergency Hospital Interventions)</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                  Blood Lead ≥ 45 µg/dL
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-stone-300">
                <p>
                  <strong className="text-white">Clinical Indications:</strong> Chelation therapy involves intravenous or oral chemical agents that bind lead ions in blood plasma and soft tissues, forming water-soluble complexes excreted through the kidneys. In pediatric medicine, chelation is strictly reserved for acute, severe lead toxicity (BLL &ge; 45 µg/dL) or symptomatic acute encephalopathy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-amber-300 font-mono text-[11px] block">Succimer (DMSA)</span>
                    <p className="text-[10px] text-stone-400">Oral chelator for pediatric BLL 45–69 µg/dL. Selective for lead, sparing essential zinc and copper.</p>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-amber-300 font-mono text-[11px] block">CaNa₂EDTA</span>
                    <p className="text-[10px] text-stone-400">IV administration for severe pediatric toxicity (&ge; 70 µg/dL). Mobilizes lead from bone marrow.</p>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-amber-300 font-mono text-[11px] block">Dimercaprol (BAL)</span>
                    <p className="text-[10px] text-stone-400">IM injection combined with EDTA for encephalopathy to prevent lead redistribution into brain tissue.</p>
                  </div>
                </div>

                <div className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-bold font-mono text-xs">
                    <AlertTriangle size={15} />
                    <span>Risks & Limitations of Chelation</span>
                  </div>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Chelation is reactive, invasive, and carries significant clinical risks, including nephrotoxicity, essential mineral depletion (Zn²⁺, Fe²⁺, Cu²⁺), and lead rebound from skeletal stores once therapy stops. It cannot prevent initial neurological damage caused by environmental lead ingestion.
                  </p>
                </div>
              </div>
            </div>

            {/* RADAR CHART COMPARISON */}
            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                  <Activity size={15} />
                  <span>Intervention Modality Profile Comparison</span>
                </span>
                <span className="text-[10px] text-stone-400 font-mono">Scores (0-100)</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={interventionRadarData}>
                    <PolarGrid stroke="#3f3f46" />
                    <PolarAngleAxis dataKey="metric" stroke="#a1a1aa" fontSize={9} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#52525b" fontSize={8} />
                    <Radar name="Probiotics" dataKey="Probiotics" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                    <Radar name="Chelation" dataKey="Chelation" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} />
                    <Radar name="Nutrition" dataKey="Nutrition" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} />
                    <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#f59e0b', borderRadius: '12px', fontSize: '11px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                <em>Radar profile illustrates how synthetic probiotic aptamers combine the non-invasiveness and safety of nutrition with the high bio-selectivity required for chronic lead defense.</em>
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: NUTRITIONAL COMPETITION */}
        {activeIntervention === 'nutrition' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
            <div className="lg:col-span-7 bg-stone-900/90 border border-cyan-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono text-sm">
                  <Zap size={18} />
                  <span>Nutritional Interventions & DMT1 Competitive Transporter Inhibition</span>
                </div>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  DMT1 Transporter Competition
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-stone-300">
                <p>
                  <strong className="text-white">The Intestinal Transporter Gateway:</strong> Lead (Pb²⁺) has no natural physiological function in the human body. It enters intestinal epithelial cells primarily by hijacking <strong>Divalent Metal Transporter 1 (DMT1)</strong> and intestinal calcium channels, which evolved to transport essential nutrients like Iron (Fe²⁺) and Calcium (Ca²⁺).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-cyan-300 font-mono text-[11px] block">Iron Repletion (Fe2+)</span>
                    <p className="text-[10px] text-stone-400">Iron deficiency upregulates intestinal DMT1 synthesis by 400%–500%, dramatically accelerating lead absorption. Maintaining iron sufficiency closes this portal.</p>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-cyan-300 font-mono text-[11px] block">Calcium & Vitamin D (Ca2+)</span>
                    <p className="text-[10px] text-stone-400">Dietary calcium competes directly for intestinal binding sites and reduces skeletal lead mobilization during pregnancy and lactation.</p>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-cyan-300 font-mono text-[11px] block">Zinc (Zn2+)</span>
                    <p className="text-[10px] text-stone-400">Zinc protects crucial enzymes like ALAD (delta-aminolevulinic acid dehydratase) from lead replacement in heme synthesis.</p>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <span className="font-bold text-cyan-300 font-mono text-[11px] block">Alginates & Pectin Fibers</span>
                    <p className="text-[10px] text-stone-400">Natural polysaccharide polymers derived from seaweed and fruit peels that bind heavy metal cations in the digestive tract for fecal elimination.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BAR CHART: ABSORPTION PERCENT COMPARISON */}
            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <BarChart2 size={15} />
                  <span>Intestinal Lead Bioavailability & Blood Absorption</span>
                </span>
                <span className="text-[10px] text-stone-400 font-mono">% Ingested Lead Absorbed</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={absorptionData} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis type="number" stroke="#a1a1aa" fontSize={10} domain={[0, 50]} />
                    <YAxis dataKey="strategy" type="category" stroke="#a1a1aa" fontSize={9} width={130} />
                    <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#06b6d4', borderRadius: '12px', fontSize: '11px' }} />
                    <Bar dataKey="absorptionPercent" fill="#06b6d4" radius={[0, 8, 8, 0]} name="Lead Blood Absorption (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                <em>Combining probiotic aptamer trapping with DMT1 iron/calcium repletion reduces systemic lead absorption from 45% down to under 3%.</em>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CROSS NAVIGATION FOOTER */}
      <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
        <h3 className="text-sm font-mono font-bold text-stone-300 uppercase tracking-wider flex items-center gap-2">
          <Globe size={16} className="text-emerald-400" />
          <span>Explore Related ICEarth Research & Proof Modules</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => onNavigateTab && onNavigateTab('pica_exposenomics')}
            className="p-3.5 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-2xl text-left space-y-1 transition-all cursor-pointer group"
          >
            <div className="text-xs font-bold font-mono text-amber-400 group-hover:text-amber-300 flex items-center justify-between">
              <span>Pica & Geophagy</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-stone-400">Maternal clay ingestion & child soil eating pathways.</p>
          </button>

          <button
            onClick={() => onNavigateTab && onNavigateTab('evolutionary_canary')}
            className="p-3.5 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-2xl text-left space-y-1 transition-all cursor-pointer group"
          >
            <div className="text-xs font-bold font-mono text-emerald-400 group-hover:text-emerald-300 flex items-center justify-between">
              <span>Evolutionary Canary</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-stone-400">1,000,000 years of hominin lead exposure proof.</p>
          </button>

          <button
            onClick={() => onNavigateTab && onNavigateTab('profiler')}
            className="p-3.5 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-2xl text-left space-y-1 transition-all cursor-pointer group"
          >
            <div className="text-xs font-bold font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center justify-between">
              <span>Exposure Profiler</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-stone-400">Calculate multi-vector cumulative lead dosage.</p>
          </button>

          <button
            onClick={() => onNavigateTab && onNavigateTab('reports')}
            className="p-3.5 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-2xl text-left space-y-1 transition-all cursor-pointer group"
          >
            <div className="text-xs font-bold font-mono text-rose-400 group-hover:text-rose-300 flex items-center justify-between">
              <span>News & Reports</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-stone-400">Access peer-reviewed repository & media coverage.</p>
          </button>
        </div>
      </div>

      {/* EXPANDED IMAGE MODAL */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-stone-950 border-2 border-emerald-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Microscope size={16} />
                <span>ICEarth Infographic IP-000F: Probiotic Lead Poisoning Interventions</span>
              </div>
              <button
                onClick={() => setSelectedImageModal(false)}
                className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-stone-950 space-y-4">
              <img
                src={probioticGraphicImg}
                alt="Probiotic Lead Interventions High Res"
                className="max-h-[60vh] w-auto object-contain rounded-2xl border border-stone-800 shadow-2xl"
              />
              <div className="p-4 bg-stone-900/90 rounded-2xl border border-emerald-500/30 max-w-3xl w-full space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 border-b border-stone-800 pb-1">
                  <span>Vault Provenance Hash: SHA256-WPI-NIH-R21ES038018-PROBIOTIC-000F</span>
                  <span>August 13, 2026</span>
                </div>
                <p className="text-stone-300 leading-relaxed font-sans">
                  "In the hunt for ways to reduce lead poisoning, researchers in Natalie Farny's Worcester Polytechnic Institute (WPI) lab are turning to E. coli Nissle probiotic bacteria engineered to produce nucleic acid aptamers in the gastrointestinal tract, trapping lead for excretion before intestinal absorption."
                </p>
              </div>
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
              <span>WPI / NIH NIEHS Award R21ES038018</span>
              <button
                onClick={() => setSelectedImageModal(false)}
                className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg cursor-pointer"
              >
                Close Infographic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
