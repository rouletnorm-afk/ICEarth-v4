import React, { useState } from 'react';
import picaGeophagyImg from '../assets/images/pica_geophagy_lead_1786618000000_1786618338553.jpg';
import natureSoilCanaryImg from '../assets/images/nature_soil_canary_1786614634627.jpg';
import {
  Apple,
  AlertTriangle,
  Globe,
  Dna,
  Heart,
  ShieldAlert,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Maximize2,
  X,
  Activity,
  BarChart2,
  Info,
  MapPin,
  Brain,
  Baby,
  Utensils
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';

interface PicaExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

export const PicaExposenomics: React.FC<PicaExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';
  const [activeTab, setActiveTab] = useState<'global_map' | 'vectors' | 'medical_risk'>('global_map');
  const [selectedImageModal, setSelectedImageModal] = useState<boolean>(false);

  // Global Pica Prevalence by Region (% of pregnant women experiencing geophagy/pica)
  const regionalPicaData = [
    { region: 'Central Africa', rate: 65, avgBLL: 18.5, color: '#f59e0b' },
    { region: 'East Africa', rate: 48, avgBLL: 15.2, color: '#d97706' },
    { region: 'South Asia (India/Bihar)', rate: 42, avgBLL: 16.8, color: '#ef4444' },
    { region: 'SE Asia (Indonesia/Vietnam)', rate: 35, avgBLL: 12.4, color: '#b45309' },
    { region: 'Latin America & Caribbean', rate: 29, avgBLL: 9.6, color: '#eab308' },
    { region: 'North America (USAnemia)', rate: 22, avgBLL: 4.2, color: '#10b981' },
    { region: 'Western Europe', rate: 11, avgBLL: 2.1, color: '#3b82f6' }
  ];

  // Lead Toxicity Concentration Comparison (PPM)
  const leadSourceData = [
    { source: 'EPA Residential Soil Standard', pbPpm: 200, hazardLevel: 'Threshold Baseline' },
    { source: 'Avg East Trenton Urban Soil (Nature 2026)', pbPpm: 580, hazardLevel: 'Severe Soil Hazard' },
    { source: 'Cultural Geophagy Clay (Calabash)', pbPpm: 1200, hazardLevel: 'Maternal Toxicity' },
    { source: 'Unregulated Traditional Kohl/Surma', pbPpm: 85000, hazardLevel: 'Extreme Neural Poison' },
    { source: 'Pre-1978 Sweet Lead Paint Flakes', pbPpm: 100000, hazardLevel: 'Fatal Child Hazard' }
  ];

  return (
    <div className={`space-y-8 animate-in fade-in duration-300 ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
      {/* TOP HERO BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 p-6 sm:p-10 border-2 border-amber-500/40 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-extrabold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
              <Utensils size={14} className="text-amber-400" />
              <span>ICEarth Sovereign Exposenomics • Pica & Geophagy Engine</span>
            </div>
            <span className="text-xs font-mono text-amber-300/80 bg-stone-900/80 px-3 py-1 rounded-xl border border-stone-800">
              Published: 12–13 August 2026 • Mom.com & Nature Exposome Parallel
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight leading-tight">
                Pica Disorder & Maternal Geophagy:
                <span className="block text-amber-400 mt-1">
                  The Ancient Urge to Eat Soil Driven by Anemia & Toxic Lead Topsoil
                </span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                A landmark study published in the <em>International Journal of Women's Health and Reproductive Sciences</em> reveals that up to <strong className="text-amber-300 font-bold">46% of women experience Pica during pregnancy</strong>, persistently craving soil, sand, and clay driven by gestational anemia and micronutrient deficiencies. When combined with 1,000,000 years of anthropogenic soil lead accumulation and sweet lead paint chips, Pica stands as a primary driver of heavy metal poisoning affecting <strong className="text-amber-300 font-bold">1 in 3 children worldwide (800 million)</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('evolutionary_canary')}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-xl shadow-lg border border-amber-300 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                  >
                    <Dna size={16} />
                    <span>🐤 Cross-Reference H. sapiens Canary Model</span>
                    <ArrowRight size={14} />
                  </button>
                )}

                <a
                  href="https://www.mom.com/2234790/crave-dirt-when-pregnant-meaning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold rounded-xl border border-stone-800 flex items-center gap-1.5 transition-all"
                >
                  <span>Mom.com Source Report</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* ARTWORK DISPLAY PANEL */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => setSelectedImageModal(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-stone-950 cursor-pointer group shadow-2xl"
              >
                <img
                  src={picaGeophagyImg}
                  alt="Pica Disorder & Maternal Geophagy Infographic"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-amber-500 text-stone-950 font-mono font-black text-xs rounded-xl shadow-xl flex items-center gap-2">
                    <Maximize2 size={15} />
                    <span>Click to Expand High-Res Infographic</span>
                  </span>
                </div>
                <div className="p-3 bg-stone-950/90 border-t border-stone-800 font-mono text-[11px] text-amber-300 flex items-center justify-between">
                  <span>Plate #03 • Pica & Geophagy Exposenomics</span>
                  <span className="text-stone-400">0xPICA_GEOPHAGY_LEAD_2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE SCIENTIFIC STATS BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="p-5 rounded-2xl bg-stone-900 border border-amber-500/30 space-y-1">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <Apple size={14} className="text-amber-400" />
            <span>US Maternal Pica Rate</span>
          </div>
          <div className="text-3xl font-black text-amber-400">Up to 46%</div>
          <p className="text-[11px] text-stone-300">Of pregnant women crave soil/clay due to gestational anemia.</p>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 border border-amber-500/30 space-y-1">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <Globe size={14} className="text-amber-400" />
            <span>Global Anemic Risk</span>
          </div>
          <div className="text-3xl font-black text-amber-400">1.6x Higher</div>
          <p className="text-[11px] text-stone-300">Likelihood of developing pica in anemic pregnant mothers.</p>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 border border-amber-500/30 space-y-1">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <Baby size={14} className="text-red-400" />
            <span>Sweet Lead Paint Danger</span>
          </div>
          <div className="text-3xl font-black text-red-400">100,000 ppm</div>
          <p className="text-[11px] text-stone-300">Lead acetate paint chips taste sweet to toddlers with Pica.</p>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 border border-amber-500/30 space-y-1">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <AlertTriangle size={14} className="text-amber-400" />
            <span>Children Affected</span>
          </div>
          <div className="text-3xl font-black text-white">800 Million</div>
          <p className="text-[11px] text-stone-300">1 in 3 children worldwide suffer elevated blood lead levels (&gt;5 µg/dL).</p>
        </div>
      </div>

      {/* ANALYTICAL NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-3 font-mono text-xs">
        <button
          onClick={() => setActiveTab('global_map')}
          className={`px-4 py-2 rounded-xl font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'global_map'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
          }`}
        >
          <MapPin size={15} />
          <span>1. Global Pica Prevalence & Regional Hotspots</span>
        </button>

        <button
          onClick={() => setActiveTab('vectors')}
          className={`px-4 py-2 rounded-xl font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'vectors'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
          }`}
        >
          <BarChart2 size={15} />
          <span>2. Pica Exposure Vectors & Lead Concentration</span>
        </button>

        <button
          onClick={() => setActiveTab('medical_risk')}
          className={`px-4 py-2 rounded-xl font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'medical_risk'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
          }`}
        >
          <Brain size={15} />
          <span>3. Maternal-Fetal Medical Risk & Roulet's Law</span>
        </button>
      </div>

      {/* TAB 1: GLOBAL PICA PREVALENCE & REGIONAL HOTSPOTS */}
      {activeTab === 'global_map' && (
        <div className="space-y-8">
          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Globe className="text-amber-400" size={22} />
                <span>Maternal Pica & Geophagy Prevalence by World Region</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Pica disorder and geophagy (soil ingestion) are deeply rooted in cultural practices, dietary traditional preparations (such as calabash clay), and gestational anemia. In Sub-Saharan Africa and South Asia, over 40% to 65% of pregnant women report soil consumption, directly exposing developing fetuses to heavy metal toxicities in polluted soil.
              </p>
            </div>

            <div className="h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalPicaData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" domain={[0, 80]} tick={{ fill: '#94a3b8', fontSize: 11 }} unit="%" />
                  <YAxis type="category" dataKey="region" tick={{ fill: '#f8fafc', fontSize: 11 }} width={140} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#f59e0b', borderRadius: '12px' }}
                    formatter={(value: any) => [`${value}% of pregnant women`, 'Pica Prevalence']}
                  />
                  <Bar dataKey="rate" radius={[0, 8, 8, 0]}>
                    {regionalPicaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-800 font-mono text-xs">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                <div className="text-amber-400 font-bold flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>Central & East Africa</span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Highest global geophagy rates (48%–65%). Traditional clay (calabash/sikor) sold openly in markets contains high lead and cadmium concentrations.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                <div className="text-amber-400 font-bold flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>South Asia (India/Bihar)</span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  42% prevalence among rural pregnant women. Combined with traditional kohl/surma eye cosmetics and lead-glazed pottery.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                <div className="text-amber-400 font-bold flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>United States & Americas</span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Up to 46% reported in specific US cohort studies during pregnancy, driven by gestational iron deficiency anemia and urban soil access.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PICA EXPOSURE VECTORS & LEAD CONCENTRATION */}
      {activeTab === 'vectors' && (
        <div className="space-y-8">
          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <BarChart2 className="text-amber-400" size={22} />
                <span>Pica Lead Toxicity Concentration Comparison (PPM Lead)</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Soil lead concentration from 1,000,000 years of hominin fires and 20th century petrol exhaust creates severe hazard levels. However, toddlers with Pica who ingest sweet-tasting lead paint chips absorb up to <strong className="text-amber-300">100,000 ppm lead</strong>—causing immediate encephalopathy and permanent cognitive destruction.
              </p>
            </div>

            <div className="h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadSourceData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="source" tick={{ fill: '#94a3b8', fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                  <YAxis tick={{ fill: '#f8fafc', fontSize: 11 }} unit=" ppm" scale="log" domain={[100, 200000]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ef4444', borderRadius: '12px' }}
                    formatter={(value: any) => [`${value.toLocaleString()} PPM Lead`, 'Lead Content']}
                  />
                  <Bar dataKey="pbPpm" fill="#ef4444" radius={[8, 8, 0, 0]}>
                    {leadSourceData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index === 4 ? '#dc2626' : index === 3 ? '#ea580c' : '#f59e0b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="p-5 bg-amber-950/40 rounded-2xl border border-amber-500/40 space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <ShieldAlert size={16} />
                <span>Why Sweet Lead Paint Chips Driven by Pica Destroy Toddler Brains</span>
              </div>
              <p className="text-stone-300 text-xs leading-relaxed font-sans">
                Lead(II) acetate, historically called "sugar of lead," has a distinct sweet taste. Toddlers going through normal developmental hand-to-mouth activity or Pica disorder actively seek out peeling lead paint flakes because they taste like candy. Ingesting just a single millimeter chip containing 10% lead paint provides thousands of times the daily allowable adult threshold, causing acute prefrontal cortex necrosis.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MATERNAL-FETAL MEDICAL RISK & ROULET'S LAW */}
      {activeTab === 'medical_risk' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6 font-sans">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <Brain className="text-amber-400" size={22} />
              <span>Maternal-Fetal Heavy Metal Toxicity & Roulet's Law Synthesis</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Medical toxicology establishes that lead readily crosses the placental barrier, exposing the developing fetal brain to heavy metals at the precise moment of neural tube formation and prefrontal synaptogenesis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <h3 className="text-amber-400 font-serif font-bold text-lg flex items-center gap-2">
                <Heart size={18} className="text-red-400" />
                <span>1. Gestational Anemia Vicious Cycle</span>
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Gestational anemia (iron deficiency) triggers an instinctual physiological drive to consume soil or clay (Pica/geophagy) to acquire minerals. However, heavy metals like lead use the exact same DMT-1 (Divalent Metal Transporter-1) pathways in the intestine, dramatically increasing lead absorption when iron levels are depleted!
              </p>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <h3 className="text-amber-400 font-serif font-bold text-lg flex items-center gap-2">
                <Dna size={18} className="text-amber-400" />
                <span>2. Universal Evolutionary Harm (Roulet's Law)</span>
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Roulet's Law proves that because there is NO SAFE BLOOD LEAD LEVEL in human biology, maternal soil ingestion from cave hearth fires, Roman lead vessels, lead petrol dust, and modern industrial topsoil has caused continuous intergenerational prefrontal cortex impairment across <em>Homo sapiens</em>.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-stone-400">ICEarth Sovereign Exposenomics Ledger • Pica Proof</span>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('evolutionary_canary')}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-all"
              >
                <Dna size={15} />
                <span>Launch Evolutionary Canary Proof</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* HIGH-RES IMAGE MODAL */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-stone-900 border-2 border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 sm:p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-serif">
                    Plate #03: Pica Disorder, Maternal Geophagy & Soil Lead Toxicity Infographic
                  </h3>
                  <p className="text-[10px] font-mono text-amber-400">
                    Sovereign Hash: 0xPICA_GEOPHAGY_LEAD_2026
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedImageModal(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-stone-950">
              <img
                src={picaGeophagyImg}
                alt="Pica Disorder & Maternal Geophagy Infographic"
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-2xl border border-stone-800 shadow-2xl"
              />
            </div>

            <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-stone-400">ICEarth Sovereign Graphical Journal • Co-Created Asset</span>
              <button
                onClick={() => setSelectedImageModal(false)}
                className="px-4 py-2 bg-stone-800 text-stone-200 font-bold rounded-xl hover:bg-stone-700 transition-colors cursor-pointer"
              >
                Close Artwork
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
