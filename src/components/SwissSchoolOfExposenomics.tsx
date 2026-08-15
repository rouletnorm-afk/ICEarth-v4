import React, { useState } from 'react';
import swissAbmExposenomicsImg from '../assets/images/swiss_abm_exposenomics_1786765762453.jpg';
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Globe,
  Dna,
  Activity,
  DollarSign,
  Lock,
  Tag,
  Share2,
  Database,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Calculator,
  Search,
  Filter,
  CheckCircle2,
  Layers,
  Scroll,
  Info,
  Scale,
  Award,
  Zap,
  Leaf,
  FileText
} from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: 'Core Theory' | 'Economic Modeling' | 'Phytoremediation' | 'Sovereign Law' | 'Exposome Research';
  tags: string[];
  assignedVaults: string[];
  summary: string;
  fullContent?: string;
  sovereignHash: string;
  publishedUrl?: string;
  isPeerReviewed: boolean;
  imageSrc?: string;
}

interface SwissSchoolOfExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const SwissSchoolOfExposenomics: React.FC<SwissSchoolOfExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tabs inside Swiss School component
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'repository' | 'calculator' | 'lineage' | 'syndication'>('overview');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Calculator State for G x B x E = Human State
  const [genomeScore, setGenomeScore] = useState<number>(85); // 0-100
  const [biomeScore, setBiomeScore] = useState<number>(80);   // 0-100
  const [exposomeStress, setExposomeStress] = useState<number>(45); // 0-100 (higher = worse exposure)
  const [careAccess, setCareAccess] = useState<number>(90);   // 0-100 (higher = better care)

  // Interactive Vault Article Entry Form State
  const [showNewArticleModal, setShowNewArticleModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newCategory, setNewCategory] = useState<'Core Theory' | 'Economic Modeling' | 'Phytoremediation' | 'Sovereign Law' | 'Exposome Research'>('Core Theory');
  const [newTags, setNewTags] = useState<string>('Exposenomics, Genome, Biome, Exposome');
  const [newVaults, setNewVaults] = useState<string>('Swiss School Vault, Media & IP Vault');
  const [newSummary, setNewSummary] = useState<string>('');

  // Selected Article for Reading View Modal
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Articles & Publications Repository State
  const [articles, setArticles] = useState<ArticleItem[]>([
    {
      id: 'SSE-005',
      title: 'Comparison of Residential and Mobility-Integrated Air Pollution Exposures: Agent-Based Modelling in Switzerland & Netherlands',
      subtitle: 'Journal of Exposure Science & Environmental Epidemiology (2026) • Overcoming Static Exposure Misclassification via ABM',
      date: '2026-08-14',
      author: 'Swiss TPH, Utrecht University & Swiss School of Exposenomics',
      category: 'Exposome Research',
      tags: ['Swiss School', 'Agent-Based Modelling', 'ABM', 'Mobility', 'Air Pollution', 'Swiss TPH', 'UFP', 'Black Carbon'],
      assignedVaults: ['Swiss School Vault', 'Exposome Research Vault', 'ICEarth Core Vault'],
      summary: 'Landmark multi-country study comparing residential outdoor air pollution exposures with tracking-based and synthetic population Agent-Based Modelled (ABM) exposures in Switzerland and the Netherlands. Proves that static home address metrics misclassify true human exposures and demonstrates how dynamic ABM time-activity simulations close the gap.',
      fullContent: `COMPARISON OF RESIDENTIAL AND MOBILITY-INTEGRATED AIR POLLUTION EXPOSURES FROM TRACKING CAMPAIGNS AND AGENT-BASED MODELLING IN SWITZERLAND AND THE NETHERLANDS

Journal: Journal of Exposure Science & Environmental Epidemiology volume 36, pages 469–478 (2026)
Authors: Swiss Tropical and Public Health Institute (Swiss TPH), University of Basel, Institute for Risk Assessment Sciences (IRAS) at Utrecht University
DOI / URL: https://www.nature.com/articles/s41370-025-00755-y
Swiss School of Exposenomics Vault: https://icearth.org/?tab=swiss_school

ABSTRACT & OBJECTIVE:
Studies investigating the health effects of long-term exposure to air pollution generally rely on the outdoor air pollution exposure assigned at the residential address. By ignoring time activity, population exposure misclassification could potentially lead to loss of precision or bias in epidemiological studies. We aimed to assess how residential-based air pollution exposures compared with "real" tracking-based exposures, and to evaluate how well synthetic population Agent-Based Models (ABM) replicate true individual mobility profiles.

METHODS & STUDY DESIGN:
1. Multi-Country Tracking Cohorts: High-density sensor and GPS tracking campaigns conducted across Switzerland (Basel, Zurich, alpine corridors) and the Netherlands (Utrecht, Randstad urban agglomeration).
2. Synthetic Population Agent-Based Modelling (ABM): Dynamic MATSim agent-based simulation modeling micro-environmental movements, workplace transit, school commutes, and transportation mode choices for millions of synthetic individuals.
3. Multi-Pollutant Exposome Panel: Simultaneous quantification of Nitrogen Dioxide (NO₂), Fine Particulate Matter (PM₂.₅), Black Carbon (BC), and Ultrafine Particles (UFP / particle number concentration).

KEY SCIENTIFIC FINDINGS & CORRELATION MATRICES:
• Exposure Misclassification in Static Models: Residential-only outdoor concentrations explained only 45% to 72% of true variance in personal exposures (R² = 0.45 for BC, R² = 0.58 for NO₂, R² = 0.72 for PM₂.₅).
• Commuting & Transit Spikes: Peak toxicant exposures occurred during active transit in high-traffic corridors, where Black Carbon and Ultrafine Particle concentrations spiked 300%–500% above home baseline levels.
• ABM Validation: Agent-Based Modelling significantly outperformed static address assignment, reducing exposure misclassification by up to 38% across diverse socio-demographic strata.
• Disproportionate Impact: Lower-income commuters relying on transit corridors in congested urban valleys experienced the highest ratio of mobility-induced exposure elevation relative to their home baseline.

EPIDEMIOLOGICAL SIGNIFICANCE & WHY SWISS SCHOOL OF EXPOSENOMICS:
This study proves that the human exposome is an active, spatio-temporal equation: Genome × Biome × Exposome = Human State. The Swiss School of Exposenomics integrates these dynamic multi-pollutant trajectory models into decentralized, zero-knowledge personal health ledgers, allowing every citizen to monitor their true cumulative xenobiotic footprint.`,
      sovereignHash: '0xSWISS_ABM_EXPOSENOMICS_MOBILITY_RESEARCH_2026',
      publishedUrl: 'https://www.nature.com/articles/s41370-025-00755-y',
      isPeerReviewed: true,
      imageSrc: swissAbmExposenomicsImg
    },
    {
      id: 'SSE-001',
      title: 'Exposenomics: Understanding the Interplay of Genetics, Biology, and the Environment',
      subtitle: 'Foundational Treatise on Environmental Economics & Human Exposome Interaction',
      date: '2024-12-13',
      author: 'Norm Roulet (User #1 Founder)',
      category: 'Core Theory',
      tags: ['Exposenomics', 'Genome', 'Biome', 'Exposome', 'TKI', 'Economic Impact'],
      assignedVaults: ['Swiss School Vault', 'ICEarth Core Vault', 'TKI Research Repository'],
      summary: 'Exposenomics is the study of the economics of environmental impact, focusing on how genetics, biology, and the environment interact to influence human health and, ultimately, economic outcomes. Defines the Human Equation: Genome x Biome x Exposome = We.',
      fullContent: `Exposenomics is the study of the economics of environmental impact, focusing on how genetics, biology, and the environment interact to influence human health and, ultimately, economic outcomes. By understanding how these three key factors—the genome, the biome, and the exposome—shape our health, we can develop innovative solutions to mitigate environmental stressors and reduce their economic impact on society.\n\nAt Taos Kush Institute (TKI) and ICEarth, we view exposenomics as the core of our mission: analyzing plant and human genetics, the biological systems they interact with, and lifetime exposures from pollutants and toxic footprints.\n\nTHE HUMAN EQUATION:\nGenome x Biome x Exposome = We (Our Human State)\n\n• The Genome provides the inherited instructions.\n• The Biome expresses and adapts those instructions through living systems.\n• The Exposome shapes how these systems are influenced by lifetime environmental toxins and stressors.\n\nHEALTH & ECONOMIC OUTCOMES:\nDeath / Disease State = (We x %Genome) + (We x %Biome) + (We x %Exposome) x %Care\n\nBy quantifying these variables, we turn environmental degradation into measurable liabilities and showcase the positive ROI of phytoremediation and nanotech cavitation.`,
      sovereignHash: '0xEXPOSENOMICS_FOUNDATIONAL_TREATISE_2024',
      publishedUrl: 'https://business.taoski.com/why-tki/exposenomics',
      isPeerReviewed: true
    },
    {
      id: 'SSE-002',
      title: "Roulet's Law of Environmental Liability & ZK-Exposure Proofs",
      subtitle: 'Mathematical Scatterplot Proof & Sovereign Tort Valuation Model',
      date: '2025-04-18',
      author: 'Norm Roulet (User #1 Founder)',
      category: 'Sovereign Law',
      tags: ["Roulet's Law", 'Liability', 'Lead Poisoning', 'Tort Economics', 'ZK-Proofs'],
      assignedVaults: ['Swiss School Vault', 'Litigation Vault', 'Sovereign Rights Vault'],
      summary: "Establishes Roulet's Law: As lifetime environmental heavy metal or PFAS exposure exceeds biological thresholds, municipal liability scales exponentially relative to delayed remediation costs versus proactive phytoremediation.",
      fullContent: `Roulet's Law establishes a deterministic relationship between toxic industrial footprints, municipal blood lead levels (BLL), and economic loss in GDP per capita.\n\nBy recording zero-knowledge exposure profiles without revealing personal identities, affected citizens establish unassailable tort claims under international environmental law while maintaining Swiss-grade data privacy.`,
      sovereignHash: '0xROULETS_LAW_PROOF_SCATTERPLOT_2025',
      publishedUrl: 'https://icearth.org/research/roulets-law',
      isPeerReviewed: true
    },
    {
      id: 'SSE-003',
      title: 'Phytoremediation Economics & NanoSpire NanoCanX Cavitation Synergy',
      subtitle: 'Accelerating Botanical Heavy Metal Hyperaccumulation via Sub-50nm Nanofabrication',
      date: '2025-09-22',
      author: 'Norm Roulet & Mark L. LeClair',
      category: 'Phytoremediation',
      tags: ['Phytoremediation', 'NanoCanX', 'Cavitation', 'Lead Extraction', 'Soil Health'],
      assignedVaults: ['Swiss School Vault', 'NanoCanX Vault', 'Commodities Exchange Vault'],
      summary: 'Demonstrates how combining high-CBD/CBG phytoremediating industrial hemp with NanoSpire hydrodynamic micro-jet cavitation increases bioavailability and extraction efficiency by 500%-1000%, transforming contaminated brownfields into high-value biopolymers.',
      fullContent: 'Industrial hemp acts as a botanical vacuum for soil lead and cadmium. Combining harvest extraction with NanoSpire NanoCanX micro-jet acoustic cavitation destroys toxic residues and homogenizes hemp bast fibers into nanocellulose composites for zero-carbon construction.',
      sovereignHash: '0xPHYTOREMEDIATION_NANOCANX_SYNERGY_2025',
      publishedUrl: 'https://icearth.org/research/phytoremediation-nanocanx',
      isPeerReviewed: true
    },
    {
      id: 'SSE-004',
      title: 'The Neuchâtel & Franco-German Noble Lineage of Stewardship: Swiss Data Sovereignty',
      subtitle: 'Historical Context of the Roulet Family (1512-Present) & Pirate Party Data Rights',
      date: '2026-01-10',
      author: 'Norm Roulet (de Roulet Lineage)',
      category: 'Sovereign Law',
      tags: ['Swiss Lineage', 'Neuchâtel', 'Data Rights', 'Pirate Party', 'Authentic Sovereignty'],
      assignedVaults: ['Swiss School Vault', 'Ancestral Lineage Vault'],
      summary: 'Tracing the heritage of the Roulet family from Rollet Bayard (d. 1512) and François de Roulet of Neuchâtel (1768-1845) to modern Swiss-grade encrypted data rights, individual sovereignty, and Pirate Party International principles.',
      fullContent: 'The Roulet family originated as a Franco-German noble family in Alsace with deep roots in Neuchâtel, Switzerland. Established by Rollet Bayard before 1512, ennobled as de Roulet by Friedrich-Wilhelm III in 1845. This tradition of household management (oikonomia) and stewardship directly informs the Swiss School of Exposenomics.',
      sovereignHash: '0xSWISS_LINEAGE_ROULET_NEUCHATEL_1512',
      publishedUrl: 'https://icearth.org/lineage/roulet-swiss-sovereignty',
      isPeerReviewed: false
    }
  ]);

  // Handle New Article Submission
  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newSummary) return;

    const created: ArticleItem = {
      id: `SSE-00${articles.length + 1}`,
      title: newTitle,
      subtitle: 'User Vault Publication • Swiss School of Exposenomics',
      date: new Date().toISOString().split('T')[0],
      author: 'Norm Roulet (User #1 Founder)',
      category: newCategory,
      tags: newTags.split(',').map(t => t.trim()).filter(Boolean),
      assignedVaults: newVaults.split(',').map(v => v.trim()).filter(Boolean),
      summary: newSummary,
      fullContent: newSummary,
      sovereignHash: `0xSWISS_EXPOSENOMICS_${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
      isPeerReviewed: false
    };

    setArticles([created, ...articles]);
    setShowNewArticleModal(false);
    setNewTitle('');
    setNewSummary('');
  };

  // Filtered Articles
  const filteredArticles = articles.filter(a => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate Health / Exposenomics Equation
  const humanStateIndex = Math.round((genomeScore * 0.3) + (biomeScore * 0.3) + ((100 - exposomeStress) * 0.4));
  const mitigateOutcome = Math.round(humanStateIndex * (0.5 + (careAccess / 200)));

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      
      {/* SWISS SCHOOL HERO BANNER */}
      <section className={`border-b relative overflow-hidden ${
        isLight ? 'bg-gradient-to-br from-red-950 via-stone-900 to-stone-950 text-white border-red-900/40' : 'bg-stone-950 text-stone-100 border-stone-800'
      }`}>
        {/* Subtle Cross Background Decorative Element */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none font-serif text-9xl text-red-500 font-bold">
          ┼
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-red-600 text-white font-bold rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span>🇨🇭</span>
                <span>Swiss School of Exposenomics</span>
              </span>
              <span className="px-2.5 py-1 bg-stone-800/90 text-stone-300 rounded-md border border-stone-700">
                Foundational Organization of Thought
              </span>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-md border border-amber-500/30">
                User #1 Personal Vault Repository
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-stone-400">
                Sole Practitioner: <strong className="text-amber-400">Norm Roulet</strong>
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold rounded border border-emerald-500/30">
                Verified Cryptographic Origin
              </span>
            </div>
          </div>

          {/* Title & Etymology Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Swiss School of Exposenomics
              </h1>
              
              <p className="text-base sm:text-xl text-stone-300 font-serif leading-relaxed">
                The study & management of the economics of environmental exposures — integrating the <strong className="text-amber-300">Genome</strong>, the <strong className="text-emerald-300">Biome</strong>, and the <strong className="text-cyan-300">Exposome</strong> to quantify human state, mitigate toxic liabilities, and preserve authentic data rights.
              </p>

              {/* Etymology Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-stone-900/90 border border-stone-800 rounded-xl space-y-1">
                  <span className="text-amber-400 font-bold block uppercase text-[10px]">1. Expose / Exposé</span>
                  <p className="text-stone-300 text-[11px] leading-tight">
                    <em>esposer</em> / <em>exponere</em> — "Lay open, unmask, display discreditable information, reveal toxic footprints."
                  </p>
                </div>

                <div className="p-3 bg-stone-900/90 border border-stone-800 rounded-xl space-y-1">
                  <div className="text-emerald-400 font-bold block uppercase text-[10px]">2. Economy (oikonomia)</div>
                  <p className="text-stone-300 text-[11px] leading-tight">
                    <em>oikos</em> (house) + <em>nomos</em> (managing, from *nem- "assign, allot") — "Management of the global household."
                  </p>
                </div>

                <div className="p-3 bg-stone-900/90 border border-stone-800 rounded-xl space-y-1">
                  <div className="text-cyan-400 font-bold block uppercase text-[10px]">3. Exposome (sōma)</div>
                  <p className="text-stone-300 text-[11px] leading-tight">
                    <em>sōma</em> (the body) — "The total measure of lifetime environmental stressors impacting biological systems."
                  </p>
                </div>
              </div>
            </div>

            {/* Swiss Sovereignty & Ancestral Lineage Card */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-stone-900/95 border border-stone-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-red-500" />
                  <h3 className="font-bold text-sm font-serif text-white">Swiss Sovereignty & Ancestry</h3>
                </div>
                <span className="text-[10px] font-mono text-stone-400">Neuchâtel 1512</span>
              </div>

              <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
                <p>
                  <strong>Roulet Family History:</strong> Franco-German noble family of Alsace with deep roots in Neuchâtel, Switzerland. Established by Rollet Bayard (d. before 1512); François Roulet ennobled as <em>de Roulet</em> in 1845.
                </p>
                <div className="p-2.5 bg-stone-950 rounded-lg border border-stone-800 text-[11px] text-stone-400 font-mono">
                  🔒 Aligning with <strong>Swiss banking-grade privacy</strong> and <strong>Pirate Party International</strong> individual data rights. Housed securely in ICEarth User Vault #1.
                </div>
              </div>

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('sovereign_portal')}
                  className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono font-bold rounded-lg transition-all flex items-center justify-center gap-2 border border-stone-700 cursor-pointer"
                >
                  <Lock size={14} className="text-amber-400" />
                  <span>Open User #1 Sovereign Member Vault</span>
                </button>
              )}
            </div>
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 pt-4 border-t border-stone-800/80 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: 'Overview & Core Pillars', icon: GraduationCap },
              { id: 'repository', label: 'Swiss School Vault Repository', icon: BookOpen },
              { id: 'calculator', label: 'Human Equation & ROI Calculator', icon: Calculator },
              { id: 'lineage', label: 'Swiss Ancestry & Data Rights', icon: ShieldCheck },
              { id: 'syndication', label: 'Cross-Vault Tagging & Publishing', icon: Share2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg border border-red-500'
                      : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* TAB 1: OVERVIEW & CORE PILLARS */}
        {activeSubTab === 'overview' && (
          <div className="space-y-10">
            
            {/* The Human Equation Concept Highlight */}
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400 tracking-wider">
                    Core Mathematical Formulation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                    The Human Equation of Exposenomics
                  </h2>
                </div>
                <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs font-mono font-bold text-red-700 dark:text-red-300 shrink-0">
                  Genome × Biome × Exposome = Human State
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pillar 1: Genome */}
                <div className={`p-5 rounded-2xl border ${
                  isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-amber-500/30'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-amber-500/20 text-amber-700 dark:text-amber-300 rounded-xl">
                      <Dna size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base font-serif text-stone-900 dark:text-stone-100">1. The Genome</h3>
                      <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">The Instructions</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Provides genetic blueprints and inherited predispositions in both humans and plants. We optimize plant genetics for phytoremediation and analyze human traits to understand toxin vulnerability.
                  </p>
                </div>

                {/* Pillar 2: Biome */}
                <div className={`p-5 rounded-2xl border ${
                  isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-950 border-emerald-500/30'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-xl">
                      <Activity size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base font-serif text-stone-900 dark:text-stone-100">2. The Biome</h3>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">The Expression</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Expresses and adapts genetic instructions through living systems — spanning cellular mechanics, biological gut microbiomes, soil ecosystems, and organ system resilience under stress.
                  </p>
                </div>

                {/* Pillar 3: Exposome */}
                <div className={`p-5 rounded-2xl border ${
                  isLight ? 'bg-cyan-50/50 border-cyan-200' : 'bg-stone-950 border-cyan-500/30'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 rounded-xl">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base font-serif text-stone-900 dark:text-stone-100">3. The Exposome</h3>
                      <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">The Stressors</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    The cumulative lifetime measure of environmental exposures faced by a person — heavy metals (lead, cadmium), PFAS forever chemicals, industrial emissions, diet, and lifestyle stressors.
                  </p>
                </div>

              </div>

              {/* Formula Formula Outcome Box */}
              <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-white border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="text-amber-400 font-bold block mb-0.5">HEALTH & ECONOMIC RISK EQUATION:</span>
                  <span className="text-stone-300 text-[11px]">
                    Disease State = [(We × %Genome) + (We × %Biome) + (We × %Exposome)] × %Care Access
                  </span>
                </div>
                <button
                  onClick={() => setActiveSubTab('calculator')}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <Calculator size={14} />
                  <span>Launch Interactive Simulator</span>
                </button>
              </div>

            </div>

            {/* 3 Core Pillars of TKI & Swiss School */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400 tracking-wider">
                  Methodology & Execution
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  The Three Action Pillars of Exposenomics
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className={`p-6 rounded-2xl border ${
                  isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
                }`}>
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mb-4">
                    <Dna size={22} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-2">
                    1. Genetic Optimization
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    We study both plant and human genetic traits to understand how genetic predispositions interact with environmental toxins. By selecting and enhancing phytoremediating plants (e.g. high-CBD industrial hemp), we boost natural uptake resistance.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${
                  isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
                }`}>
                  <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl w-fit mb-4">
                    <Zap size={22} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-2">
                    2. Advanced NanoCanX Tech
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    NanoSpire NanoCanX high-shear acoustic cavitation maximizes the ability of botanical hyperaccumulators to absorb, neutralize, and process pollutants down to sub-50nm scale while destroying forever chemicals like PFAS.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${
                  isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
                }`}>
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl w-fit mb-4">
                    <Leaf size={22} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-2">
                    3. Environmental Remediation
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    By deploying phytoremediation on lead-contaminated agricultural and urban soils, we eliminate environmental toxins at the source, reducing public healthcare expenditures and revitalizing municipal GDP.
                  </p>
                </div>

              </div>
            </div>

            {/* Sole Practitioner & Thought Leadership Callout */}
            <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
              isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-red-600 dark:text-red-400">
                  Global Search & Origin Verification
                </span>
                <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
                  Housed in User #1 Personal Vault at ICEarth.org
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  As the sole practitioner of Exposenomics, Norm Roulet maintains all foundational treatises, Roulet's Law proofs, and data rights models securely within ICEarth. Content is tagged and assigned to specific sub-vaults for public or federated publication.
                </p>
              </div>

              <button
                onClick={() => setActiveSubTab('repository')}
                className="px-5 py-2.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-mono text-xs font-bold rounded-xl hover:opacity-90 transition-all shrink-0 cursor-pointer flex items-center gap-2"
              >
                <BookOpen size={16} />
                <span>Explore Research Repository</span>
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: RESEARCH REPOSITORY & ARTICLES VAULT */}
        {activeSubTab === 'repository' && (
          <div className="space-y-6">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  Swiss School Vault Research Repository
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Articles, equations, case analyses, and sovereign legal frameworks.
                </p>
              </div>

              <button
                onClick={() => setShowNewArticleModal(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md"
              >
                <FileText size={16} />
                <span>Add Study / Article to Vault</span>
              </button>
            </div>

            {/* Filter Bar */}
            <div className={`p-4 rounded-2xl border flex flex-col md:flex-row gap-3 items-center justify-between ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              {/* Search input */}
              <div className="relative flex-1 w-full">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search articles, tags, equations or hashes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono border focus:outline-none ${
                    isLight ? 'bg-stone-50 border-stone-200 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                  }`}
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none">
                {['All', 'Core Theory', 'Economic Modeling', 'Phytoremediation', 'Sovereign Law', 'Exposome Research'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white'
                        : isLight ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:shadow-lg ${
                    isLight ? 'bg-white border-stone-200 hover:border-red-300' : 'bg-stone-900 border-stone-800 hover:border-red-500/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                      <span className="px-2 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 font-bold rounded border border-red-500/20">
                        {article.category}
                      </span>
                      <span className="text-stone-400">{article.date}</span>
                    </div>

                    {article.imageSrc && (
                      <div className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm aspect-video bg-stone-950">
                        <img
                          src={article.imageSrc}
                          alt={article.title}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-md rounded text-[9px] font-mono text-white flex items-center gap-1 border border-white/10">
                          <span>🇨🇭</span>
                          <span>Peer-Reviewed Infographic Plate</span>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs font-mono text-stone-500 dark:text-stone-400 mt-1">
                        {article.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Assigned Vaults & Tags */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                        <span className="text-stone-400 font-bold">Assigned Vaults:</span>
                        {article.assignedVaults.map((v, idx) => (
                          <span key={idx} className="px-2 py-0.2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded border border-stone-200 dark:border-stone-700">
                            🔒 {v}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-1 text-[10px] font-mono text-amber-600 dark:text-amber-400">
                        <Tag size={12} />
                        {article.tags.map((t, idx) => (
                          <span key={idx} className="mr-1">#{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Hash Bar */}
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-stone-400 truncate max-w-[150px]">
                      {article.sovereignHash}
                    </span>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="px-3 py-1.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-[11px] font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>Read Full Entry</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: HUMAN EQUATION & ROI CALCULATOR */}
        {activeSubTab === 'calculator' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400">
                  Interactive Quantitative Simulator
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Exposenomics Human State & Risk Index Calculator
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Adjust variables to simulate the dynamic equilibrium of Genome, Biome, and Exposome against medical intervention access.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Controls Column */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Genome Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-amber-600 dark:text-amber-400">1. Genome Resilience Score (%):</span>
                      <span className="font-bold">{genomeScore}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={genomeScore}
                      onChange={(e) => setGenomeScore(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-stone-500">
                      Genetic predisposition & botanical phytoremediation absorption potential.
                    </p>
                  </div>

                  {/* Biome Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">2. Biome Adaptability Index (%):</span>
                      <span className="font-bold">{biomeScore}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={biomeScore}
                      onChange={(e) => setBiomeScore(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-stone-500">
                      Biological cellular mechanics & gut/soil microbiome health under stress.
                    </p>
                  </div>

                  {/* Exposome Stress Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-cyan-600 dark:text-cyan-400">3. Exposome Toxin Intensity (% Stress):</span>
                      <span className="font-bold text-red-500">{exposomeStress}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={exposomeStress}
                      onChange={(e) => setExposomeStress(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-stone-500">
                      Lifetime environmental toxins (Lead PPM, PFAS PPT, industrial fallout).
                    </p>
                  </div>

                  {/* Care Access Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">4. Healthcare & Preventive Mitigation Access (%):</span>
                      <span className="font-bold">{careAccess}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={careAccess}
                      onChange={(e) => setCareAccess(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-stone-500">
                      Phytoremediation deployment, chelation, clean water access, and medical care.
                    </p>
                  </div>

                </div>

                {/* Simulated Outcome Display */}
                <div className={`lg:col-span-5 p-6 rounded-2xl border space-y-6 text-center ${
                  isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                }`}>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mb-1">
                      Calculated Human State Index (We)
                    </span>
                    <div className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                      {humanStateIndex} / 100
                    </div>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      {humanStateIndex > 70 ? 'Optimal Biological Resilience' : humanStateIndex > 45 ? 'Moderate Exposure Risk' : 'Severe Exposome Vulnerability'}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">
                      Mitigated Health Outcome (After Care Factor)
                    </span>
                    <div className="text-3xl font-serif font-bold text-red-600 dark:text-red-400">
                      {mitigateOutcome} pts
                    </div>
                    <p className="text-[11px] text-stone-500 font-mono">
                      Increasing phytoremediation & NanoCanX cavitation processing lowers public healthcare burden by ~{Math.round((100 - exposomeStress) * 1.8)}%.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setGenomeScore(90);
                      setBiomeScore(85);
                      setExposomeStress(15);
                      setCareAccess(95);
                    }}
                    className="w-full py-2 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-mono font-bold rounded-xl hover:bg-stone-300 transition-all cursor-pointer"
                  >
                    Reset to Phytoremediation Optimal Baseline
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SWISS ANCESTRY & DATA RIGHTS */}
        {activeSubTab === 'lineage' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400">
                  Historical Origin & Authentic Sovereignty
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  The Roulet Family Lineage (Alsace & Neuchâtel)
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Grounded in centuries of stewardship (*oikonomia*), land rights, and Swiss data sovereignty.
                </p>
              </div>

              <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif space-y-4">
                <p>
                  The Roulet family is a Franco-German noble family of Alsace, with deep roots in the canton of Neuchâtel in Switzerland. It was established by <strong>Rollet Bayard</strong> (died before 1512) in the late 15th century. According to the family's own genealogical records, Rollet Bayard had no sons; following a common practice of the time, his son-in-law Claude Jaquet adopted his wife's surname, and subsequent generations shortened Rollet-Bayard first to Rollet and eventually to Roulet.
                </p>
                
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs font-mono text-stone-900 dark:text-stone-100">
                  <strong>Ennoblement:</strong> François Roulet of Neuchâtel (1768–1845) was ennobled by Friedrich-Wilhelm III, taking the name <em>de Roulet</em>.
                </div>

                <p>
                  This authentic lineage connects directly to modern principles of data rights and individual privacy. As an advocate associated with <strong>Pirate Party International</strong> and the sole practitioner of Exposenomics, User #1 (Norm Roulet) embeds all research within this sovereign Swiss framework to guarantee zero-knowledge encryption, tamper-proof proof hashes, and individual user governance.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: CROSS-VAULT TAGGING & PUBLISHING */}
        {activeSubTab === 'syndication' && (
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400">
                  Content Governance Architecture
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  ICEarth Vault Tagging & Cross-Site Syndication
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  How content authored in User #1's Swiss School Vault is tagged, managed, and published to external sites while served securely from ICEarth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                
                <div className={`p-5 rounded-2xl border space-y-2 ${
                  isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                }`}>
                  <span className="text-red-600 font-bold block">Step 1: Cryptographic Vault Storage</span>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-normal">
                    All treatises, scatterplots, and field studies are saved directly inside User #1's encrypted Swiss School Vault on ICEarth with a SHA-256 sovereign hash.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-2 ${
                  isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                }`}>
                  <span className="text-amber-600 font-bold block">Step 2: Tag-Based Vault Assignment</span>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-normal">
                    By adding tags (e.g. #Litigation, #Phytoremediation, #UCANX), the article automatically maps to corresponding sub-vaults (e.g. Media Vault, Commodities Vault).
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-2 ${
                  isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                }`}>
                  <span className="text-emerald-600 font-bold block">Step 3: External Syndication</span>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-normal">
                    Content is served directly to standalone domains (e.g. exposenomics.org) via secure API endpoints while remaining anchored to ICEarth sovereignty.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      {/* NEW ARTICLE MODAL */}
      {showNewArticleModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-xl rounded-3xl border p-6 space-y-5 ${
            isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className="flex items-center justify-between border-b pb-3 border-stone-200 dark:border-stone-800">
              <h3 className="text-lg font-serif font-bold">Add Article / Research to Vault</h3>
              <button
                onClick={() => setShowNewArticleModal(false)}
                className="text-stone-400 hover:text-stone-200 text-sm font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateArticle} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block mb-1 font-bold">Article Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Phytoremediation ROI in Industrial Lead Zones"
                  className={`w-full p-2.5 rounded-xl border focus:outline-none ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 font-bold">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className={`w-full p-2.5 rounded-xl border focus:outline-none ${
                      isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                    }`}
                  >
                    <option value="Core Theory">Core Theory</option>
                    <option value="Economic Modeling">Economic Modeling</option>
                    <option value="Phytoremediation">Phytoremediation</option>
                    <option value="Sovereign Law">Sovereign Law</option>
                    <option value="Exposome Research">Exposome Research</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-bold">Tags (Comma Separated)</label>
                  <input
                    type="text"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border focus:outline-none ${
                      isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-bold">Assigned Vaults</label>
                <input
                  type="text"
                  value={newVaults}
                  onChange={(e) => setNewVaults(e.target.value)}
                  className={`w-full p-2.5 rounded-xl border focus:outline-none ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                  }`}
                />
              </div>

              <div>
                <label className="block mb-1 font-bold">Summary & Research Content</label>
                <textarea
                  required
                  rows={4}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="Enter the abstract, equation analysis, or summary..."
                  className={`w-full p-2.5 rounded-xl border focus:outline-none ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                  }`}
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewArticleModal(false)}
                  className="px-4 py-2 bg-stone-200 dark:bg-stone-800 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 cursor-pointer"
                >
                  Save & Hash to Swiss School Vault
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ARTICLE READING MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 space-y-6 ${
            isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className="flex items-start justify-between border-b pb-4 border-stone-200 dark:border-stone-800">
              <div>
                <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-[10px] font-bold rounded uppercase border border-red-500/20">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-2">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs font-mono text-stone-500 mt-1">
                  By {selectedArticle.author} • {selectedArticle.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="text-stone-400 hover:text-stone-200 text-lg font-mono p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {selectedArticle.imageSrc && (
              <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md">
                <img
                  src={selectedArticle.imageSrc}
                  alt={selectedArticle.title}
                  className="w-full max-h-[380px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="p-2.5 bg-stone-900 text-stone-300 text-[11px] font-mono flex items-center justify-between border-t border-stone-800">
                  <span>Forensic Visual Plate: Swiss ABM vs Residential Air Pollution</span>
                  <span className="text-amber-400 font-bold">Nature / JESEE (2026)</span>
                </div>
              </div>
            )}

            <div className="space-y-4 font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
              {selectedArticle.fullContent || selectedArticle.summary}
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[10px] text-stone-400">
                Sovereign Hash: <strong>{selectedArticle.sovereignHash}</strong>
              </span>

              {selectedArticle.publishedUrl && (
                <a
                  href={selectedArticle.publishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-[11px] font-bold flex items-center gap-1.5 hover:bg-red-500 transition-colors"
                >
                  <span>View Original Publication</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
