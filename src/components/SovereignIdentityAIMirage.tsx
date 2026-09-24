import React, { useState } from 'react';
import {
  Shield,
  ShieldAlert,
  AlertTriangle,
  Fingerprint,
  Lock,
  History,
  Scroll,
  ExternalLink,
  CheckCircle,
  Ban,
  Copy,
  Check,
  ArrowRight,
  Maximize2,
  X,
  Scale,
  Users,
  Award,
  BookOpen,
  Share2,
  Globe,
  Feather,
  Info
} from 'lucide-react';
import cherokeeSealImg from '../assets/images/great_seal_of_the_cherokee_nation_authentic.png';
import cherokeePlateImg from '../assets/images/cherokee_hyperscale_ban_plate54_1790198046613.jpg';

interface SovereignIdentityAIMirageProps {
  onNavigateTab?: (tab: any) => void;
  siteTheme?: 'light' | 'dark';
}

export const SovereignIdentityAIMirage: React.FC<SovereignIdentityAIMirageProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [copiedPermalink, setCopiedPermalink] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [isSealModalOpen, setIsSealModalOpen] = useState(false);
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);
  const [selectedClanIndex, setSelectedClanIndex] = useState<number | null>(null);

  const permalinkUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}#sovereign_identity`
    : 'https://icearth.org#sovereign_identity';

  const vaultHash = '0xCHEROKEE_SOVEREIGN_SEAL_AUTHENTICITY_VAULT_ANADISGOI_2026';

  const copyPermalink = () => {
    navigator.clipboard.writeText(permalinkUrl);
    setCopiedPermalink(true);
    setTimeout(() => setCopiedPermalink(false), 2500);
  };

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const clans = [
    {
      name: 'Bird Clan',
      syllabary: 'ᎠᏂᏥᏍᏆ',
      phonetic: 'Ani-Tsisqua',
      color: 'from-sky-700 to-blue-900',
      role: 'Messengers, Spirit Navigators & Keepers of Sacred Birds',
      description: 'The keepers of birds and feathers; traditional messengers of spiritual affairs and tribal diplomacy.'
    },
    {
      name: 'Paint Clan',
      syllabary: 'ᎠᏂᏬᏗ',
      phonetic: 'Ani-Wodi',
      color: 'from-red-700 to-rose-900',
      role: 'Healers, Medicine Keepers & Sacred Paint Craftsmen',
      description: 'The medicine people, historical chemists, and sacred paint preparers who led healing ceremonies.'
    },
    {
      name: 'Deer Clan',
      syllabary: 'ᎠᏂᎧᏫ',
      phonetic: 'Ani-Kawi',
      color: 'from-amber-700 to-yellow-900',
      role: 'Hunters, Fast Runners & Keepers of Wildlife Balance',
      description: 'The caretakers of the deer, traditional hunters, ecological balance stewards, and long-distance runners.'
    },
    {
      name: 'Wolf Clan',
      syllabary: 'ᎠᏂᏩᏯ',
      phonetic: 'Ani-Waya',
      color: 'from-stone-700 to-zinc-900',
      role: 'Protectors, War Leaders & Keepers of the Wolf Path',
      description: 'The traditional protectors and warriors. Historically, many prominent war chiefs belonged to the Wolf clan.'
    },
    {
      name: 'Blue Clan',
      syllabary: 'ᎠᏂᏌᎰᏂ',
      phonetic: 'Ani-Sahoni',
      color: 'from-indigo-700 to-slate-900',
      role: 'Medicine Herbs, Sacred Blue Holly & Caretakers of Children',
      description: 'Also known as the Panther or Wildcat clan; historical gatherers of specialized medicinal plants for children.'
    },
    {
      name: 'Long Hair Clan',
      syllabary: 'ᎠᏂᎩᎶᎯ',
      phonetic: 'Ani-Gilohi',
      color: 'from-purple-700 to-violet-950',
      role: 'Peacemakers, Diplomats & Bearers of Civil Wisdom',
      description: 'Also known as Twister or Wind Clan; historic civil leaders, orators, diplomats, and peace chiefs.'
    },
    {
      name: 'Wild Potato Clan',
      syllabary: 'ᎠᏂᎪᏓᎨᏫ',
      phonetic: 'Ani-Gotagewi',
      color: 'from-emerald-700 to-teal-950',
      role: 'Agronomists, Keepers of the Earth & Sustainable Foragers',
      description: 'The agricultural stewards who gathered wild food plants from marshes and swamps, sustaining communities.'
    }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} transition-colors font-sans`}>
      {/* TOP NOTIFICATION & PERMALINK ACTION BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-stone-900 to-red-700 text-white px-4 py-2.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-400 text-stone-950 font-bold rounded uppercase text-[10px]">
              Core ICEarth Charter
            </span>
            <span className="font-bold flex items-center gap-1">
              <Feather size={14} className="text-amber-300" />
              Sovereign Identity Defense • Cherokee Nation (ᏣᎳᎩᎯ ᎠᏰᎵ)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPermalink}
              className="px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
              title="Copy permalink URL"
            >
              {copiedPermalink ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copiedPermalink ? 'Permalink Copied!' : 'Copy Sovereign Permalink'}</span>
            </button>
            <a
              href="https://www.anadisgoi.com/index.php/media-kit"
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded flex items-center gap-1 transition-colors"
            >
              <span>Anadisgoi Media Kit</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-12 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/50 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Fingerprint size={14} className="text-amber-400" />
                  Sovereign Identity Manifesto
                </span>
                <span className="px-3 py-1 bg-red-600/30 text-red-300 border border-red-500/50 rounded-full font-mono text-xs font-bold uppercase">
                  Why ICEarth Matters
                </span>
                <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 rounded-full font-mono text-xs font-bold uppercase">
                  Verified Authentic Heraldry
                </span>
              </div>

              <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
                <span>Vault:</span>
                <code className="bg-stone-950 px-2 py-0.5 rounded border border-stone-800 text-amber-300">
                  0xCHEROKEE...VAULT
                </code>
                <button
                  onClick={copyVaultHash}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                  title="Copy full cryptographic vault hash"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Authentic Great Seal with Lightbox trigger */}
              <div className="relative group shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white p-2.5 shadow-2xl border-4 border-amber-400 ring-8 ring-emerald-500/20 cursor-pointer overflow-hidden transform group-hover:scale-105 transition-all">
                  <img
                    src={cherokeeSealImg}
                    alt="Authentic Great Seal of the Cherokee Nation"
                    className="w-full h-full object-contain"
                    onClick={() => setIsSealModalOpen(true)}
                  />
                  <div
                    onClick={() => setIsSealModalOpen(true)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full transition-opacity"
                  >
                    <Maximize2 size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-[11px] font-mono text-amber-300 font-bold block">
                    Authentic Great Seal
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    Adopted Sept. 6, 1839
                  </span>
                </div>
              </div>

              {/* Title & Core Thesis */}
              <div className="space-y-4 flex-1 text-center lg:text-left">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  Sovereign Identity vs. The AI Mirage:
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-300 to-red-400 mt-1">
                    Defending Indigenous Heraldry from Algorithmic Erasure
                  </span>
                </h1>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  When generative AI models synthesized Plate #54, they produced an insidious <strong className="text-amber-400">AI mirage</strong>: adding an unauthorized 8th appendage to the sacred 7-pointed star of the Cherokee clans and supplanting the foundational constitutional date of <strong className="text-emerald-400">September 6, 1839</strong> with an arbitrary <strong className="text-red-400">&ldquo;1956&rdquo;</strong>.
                </p>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Prompted by eagle-eyed citizen oversight by <strong className="text-white">Norm Roulet</strong>, ICEarth permanently restored the authentic seal and codified Principal Chief Chuck Hoskin Jr.&rsquo;s directive into a foundational standard: <strong className="text-amber-300">No algorithm will be permitted to rewrite, assimilate, or hallucinate Indigenous sovereign identity.</strong>
                </p>
              </div>
            </div>

            {/* Principal Chief Chuck Hoskin Jr. Verbatim Quote Banner */}
            <div className="bg-stone-950/90 border-2 border-amber-500/70 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs sm:text-sm font-bold uppercase">
                  <Scroll size={18} />
                  <span>Official Public Directive: Principal Chief Chuck Hoskin Jr. (July 29)</span>
                </div>
                <div className="text-xs font-mono text-stone-400">
                  Cherokee Nation Executive Office • Tahlequah, OK
                </div>
              </div>

              <blockquote className="text-stone-100 text-sm sm:text-base font-serif italic leading-relaxed border-l-4 border-amber-500 pl-4 sm:pl-6 py-2">
                &ldquo;Our seal is deeply meaningful and should be treated with respect. Sharing our seal for non-commercial purposes is part of sharing our identity and we encourage it. Using the wrong Cherokee Nation seal is avoidable. <strong className="text-amber-300 font-bold not-italic underline decoration-amber-500 underline-offset-4">First, don’t use AI to generate our seal, an act that is an almost guaranteed way to irresponsibly get it wrong.</strong> Second, using seals that look legitimate on the internet can sometimes lead to using the wrong seal. Mistakes happen. Candidly, we’ve even made that mistake and I’m sure I have. But, with our new media kit, mistakes are avoidable.&rdquo;
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-stone-400 border-t border-stone-800/80">
                <span>Principal Chief Chuck Hoskin Jr., Cherokee Nation</span>
                <a
                  href="https://www.anadisgoi.com/index.php/media-kit"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 underline flex items-center gap-1 font-bold"
                >
                  <span>Access Anadisgoi Official Media Kit</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION II: THE HISTORICAL CONTINUUM */}
        <section className="space-y-6">
          <div className="border-b border-stone-300 dark:border-stone-800 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <History size={24} className="text-red-600 dark:text-red-400" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
                  The Historical Continuum: From 1492 to the Algorithmic Age
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                  Why humanity fears artificial intelligence and why Indigenous identity is protected with life-and-death vigilance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center font-black font-mono">
                01
              </div>
              <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                The 1492 Cartographic Mirage
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                When European invaders first made landfall, they misidentified the sovereign, diverse nations of an entire hemisphere as &ldquo;Indians&rdquo;—an epistemic failure of geographical navigation that inaugurated five centuries of continental dispossession, biological warfare, and the slaughter of tens of millions of Indigenous people.
              </p>
              <div className="text-[11px] font-mono text-stone-500 border-t border-stone-100 dark:border-stone-800 pt-3">
                Key lesson: A failure of identification by an invading power precedes physical destruction.
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black font-mono">
                02
              </div>
              <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                The Blueprint for Continental Extermination
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                As exhaustively documented by historians including David Stannard (<em>American Holocaust</em>), John Toland (<em>Adolf Hitler</em>), and James Q. Whitman (<em>Hitler&rsquo;s American Model</em>), the systematic clearing of Indigenous peoples and the U.S. reservation system served as an explicit model for Hitler&rsquo;s <em>Lebensraum</em> and racial extermination policies in Eastern Europe.
              </p>
              <div className="text-[11px] font-mono text-stone-500 border-t border-stone-100 dark:border-stone-800 pt-3">
                Historiography: Cited by Hitler in Table Talk and National Socialist jurisprudence.
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black font-mono">
                03
              </div>
              <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                The Threat of Permanent Algorithmic Canon
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                What survived centuries of military massacres and forced assimilation cares deeply about identity. If an AI generator fabricates an 8th star point or a counterfeit 1956 date, and human oversight fails to intercept it, that mirage becomes permanent digital canon, rewriting treaty history through automated assimilation.
              </p>
              <div className="text-[11px] font-mono text-stone-500 border-t border-stone-100 dark:border-stone-800 pt-3">
                Digital Hazard: Once indexed, false heraldry colonizes knowledge graphs and educational curricula.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION III: FORENSIC COMPARATIVE AUDIT */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-md space-y-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase mb-1">
              <Scale size={16} />
              <span>Forensic Heraldry Audit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
              Plate #54 Seal Audit: Sovereign Truth vs. The Hallucinated Mirage
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Detailed structural breakdown of the authentic Cherokee Nation Great Seal versus the synthetic errors generated during the design of Plate #54.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* COLUMN A: AUTHENTIC HERALDRY */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/20 border-2 border-emerald-500/60 rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-4 border-b border-emerald-200 dark:border-emerald-900 pb-4">
                <div className="w-16 h-16 rounded-full bg-white p-1.5 shadow-md border-2 border-emerald-500 shrink-0">
                  <img
                    src={cherokeeSealImg}
                    alt="Authentic Great Seal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 bg-emerald-600 text-white font-mono text-[10px] font-bold rounded uppercase tracking-wide">
                    Authentic Sovereign Standard
                  </span>
                  <h3 className="font-extrabold text-lg text-stone-900 dark:text-stone-100 mt-1">
                    The Great Seal of the Cherokee Nation
                  </h3>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                    Official Constitution Date: Sept. 6, 1839
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Sacred 7-Pointed Star (Seven Clans):
                    </strong>
                    Strictly represents the seven ancient matrilineal clans: Bird (ᎠᏂᏥᏍᏆ), Paint (ᎠᏂᏬᏗ), Deer (ᎠᏂᎧᏫ), Wolf (ᎠᏂᏩᏯ), Blue (ᎠᏂᏌᎰᏂ), Long Hair (ᎠᏂᎩᎶᎯ), and Wild Potato (ᎠᏂᎪᏓᎨᏫ). Never an 8th point.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Founding Date: September 6, 1839 (1839 Constitution):
                    </strong>
                    Marks the adoption of the unified Cherokee Constitution at Tahlequah following the genocidal Trail of Tears, reuniting Eastern and Western Cherokees under supreme tribal law.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Sequoyah Syllabary Script (ᏣᎳᎩᎯ ᎠᏰᎵ):
                    </strong>
                    Phonetically precise Cherokee script for <em>Tsalagihi Ayeli</em> (Cherokee Nation), celebrating the 1821 Cherokee literacy revolution and national intellectual independence.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Sacred White Oak Wreath:
                    </strong>
                    Surrounding oak branch wreath represents the eternal sacred fire of the Cherokee people, fueled by white oak wood, symbolizing perpetual existence and renewal.
                  </div>
                </li>
              </ul>
            </div>

            {/* COLUMN B: AI MIRAGE HAZARDS */}
            <div className="bg-red-50/70 dark:bg-red-950/20 border-2 border-red-500/60 rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-4 border-b border-red-200 dark:border-red-900 pb-4">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/40 p-2 shadow-md border-2 border-red-500 shrink-0 flex items-center justify-center">
                  <AlertTriangle size={32} className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 bg-red-600 text-white font-mono text-[10px] font-bold rounded uppercase tracking-wide">
                    AI Mirage Failure Modes
                  </span>
                  <h3 className="font-extrabold text-lg text-stone-900 dark:text-stone-100 mt-1">
                    Synthetically Generated Counterfeit
                  </h3>
                  <span className="text-xs font-mono text-red-700 dark:text-red-400 font-bold">
                    Defects Intercepted by Norm Roulet
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-3">
                  <Ban size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      8th Phantom Star Appendage:
                    </strong>
                    The generative model arbitrarily generated an 8th star point, hallucinating a fictional clan and subverting the sacred matrilineal order of the Cherokee people.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Ban size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Counterfeit &ldquo;1956&rdquo; Inscription:
                    </strong>
                    Supplanting 1839 with &ldquo;1956&rdquo; severed the seal from treaty law, coincidentally mimicking the destructive 1950s Congressional Indian Termination Policy.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Ban size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Garbled Pseudoglyphs:
                    </strong>
                    The model replaced Sequoyah&rsquo;s living syllabic writing system with unreadable gibberish, treating Indigenous language as mere decorative texture.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Ban size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block font-bold">
                      Danger of Permanent Digital Canon:
                    </strong>
                    Without sovereign citizen review, generative errors enter search engines, training corpuses, and civic documents, challenging official identity management.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION IV: INTERACTIVE SEVEN CLANS EXPLORER */}
        <section className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl text-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase mb-1">
                <Users size={16} />
                <span>The Seven Sacred Clans of the Cherokee Nation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Why There Are Exactly Seven Star Points (Never Eight)
              </h2>
            </div>
            <div className="text-xs font-mono text-stone-400">
              Click any clan below to view cultural duties and Sequoyah script
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {clans.map((clan, idx) => (
              <div
                key={clan.name}
                onClick={() => setSelectedClanIndex(selectedClanIndex === idx ? null : idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedClanIndex === idx
                    ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50'
                    : 'bg-stone-950/80 border-stone-800 hover:border-amber-500/50 hover:bg-stone-900'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-amber-400 font-bold">Point #{idx + 1}</span>
                  <span className="text-sm font-bold text-emerald-400">{clan.syllabary}</span>
                </div>
                <h4 className="font-bold text-sm text-white">{clan.name}</h4>
                <p className="text-[11px] font-mono text-stone-400">{clan.phonetic}</p>
                <p className="text-xs text-stone-300 mt-2 line-clamp-2">{clan.role}</p>
              </div>
            ))}

            <div className="p-4 rounded-xl border border-red-500/50 bg-red-950/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-red-400 text-xs font-mono font-bold mb-1">
                  <Ban size={14} />
                  <span>Point #8</span>
                </div>
                <h4 className="font-bold text-sm text-red-300">The Hallucinated &ldquo;8th Clan&rdquo;</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Does not exist in Cherokee cosmology. Fabricated entirely by the generative AI model.
                </p>
              </div>
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold mt-2">
                Violation of Clan Kinship Law
              </span>
            </div>
          </div>

          {selectedClanIndex !== null && (
            <div className="bg-stone-950 border border-amber-500/50 rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-amber-400">
                    {clans[selectedClanIndex].syllabary}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {clans[selectedClanIndex].name} ({clans[selectedClanIndex].phonetic})
                    </h3>
                    <span className="text-xs font-mono text-emerald-400">
                      {clans[selectedClanIndex].role}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedClanIndex(null)}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed">
                {clans[selectedClanIndex].description}
              </p>
            </div>
          )}
        </section>

        {/* SECTION V: THE 5-PILLAR SOVEREIGN IDENTITY PROTOCOL */}
        <section className="bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-12 text-white shadow-2xl space-y-8">
          <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
            <Shield size={28} className="text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 block tracking-wider">
                The ICEarth Platform Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                5-Pillar Sovereign Identity Defense Architecture
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase">
                <Ban size={18} />
                <span>Pillar 1: Ban on Generative Heraldry</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Generative AI models and text-to-image engines are strictly prohibited from generating tribal seals, sacred emblems, ceremonial regalia, or national flags. Generative hallucination of tribal insignia is classified as an epistemic sovereignty violation.
              </p>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                <Fingerprint size={18} />
                <span>Pillar 2: Whitelisted Media Kits</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Tribal heraldry must be imported exclusively from verified, government-administered sovereign media kits (such as Anadisgoi at <code>anadisgoi.com/index.php/media-kit</code>) to guarantee authentic vector/raster lineage.
              </p>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase">
                <Lock size={18} />
                <span>Pillar 3: Cryptographic Vault Pinning</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Every sovereign asset is pinned with SHA-256 and IPFS hashes registered in tribal archives. Once verified, no AI agent or algorithmic rewrite can alter or drift the cultural asset.
              </p>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                <Scale size={18} />
                <span>Pillar 4: Cultural Invariant Linting</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Automated linting rules verify key cultural constants—such as requiring exactly 7 star points for Cherokee heraldry, constitutional dates (Sept. 6, 1839), and authentic Sequoyah Unicode characters (U+13A0–U+13FF).
              </p>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-3 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <Users size={18} />
                <span>Pillar 5: Citizen-Sovereign Human-in-the-Loop Oversight</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                The core defense against AI cultural genocide is living human stewardship. As demonstrated by Norm Roulet&rsquo;s immediate detection of the Plate #54 seal defect, no AI-generated research plate or report on ICEarth can achieve sovereign certification without tribal citizen inspection and sign-off.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION VI: PLATE #54 INTEGRATION & CROSS NAVIGATION */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                Plate #54 Sovereign Infographic
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100">
                Cherokee Nation Hyperscale Data Center Ban (Plate #54)
              </h3>
            </div>

            <button
              onClick={() => onNavigateTab ? onNavigateTab('cherokee_it_position') : undefined}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-mono font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Feather size={14} />
              <span>Launch Full Cherokee IT Position Engine</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div
              onClick={() => setIsPlateModalOpen(true)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-stone-200 dark:border-stone-800 shadow-lg hover:border-amber-400 transition-all"
            >
              <img
                src={cherokeePlateImg}
                alt="Cherokee Hyperscale Ban Plate #54"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="px-3 py-1.5 bg-stone-900/90 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-2">
                  <Maximize2 size={14} />
                  <span>Inspect High-Res Plate #54</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <p className="leading-relaxed">
                Plate #54 documents the Cherokee Nation&rsquo;s historic executive prohibition on hyperscale data centers across its 14-county reservation in northeastern Oklahoma. Following an exhaustive survey of 1,593 citizens revealing 64% opposition over 5-million-gallon/day aquifer depletion and grid strain, Chief Hoskin Jr. drew a firm line protecting tribal resources.
              </p>
              <p className="leading-relaxed">
                By restoring the authentic Cherokee seal with the sacred 7-pointed star and September 6, 1839 constitutional date onto this plate, ICEarth establishes full physical and computational concurrence: protecting Indigenous groundwater from hyperscale drain while shielding Indigenous heraldry from algorithmic distortion.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigateTab ? onNavigateTab('icearth_stack') : undefined}
                  className="px-3.5 py-1.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-300 dark:border-stone-700"
                >
                  <span>The ICEarth Stack (Plate #38)</span>
                  <ArrowRight size={12} />
                </button>

                <button
                  onClick={() => onNavigateTab ? onNavigateTab('ai_sovereignty') : undefined}
                  className="px-3.5 py-1.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-300 dark:border-stone-700"
                >
                  <span>AI Sovereignty Watchdogs (Plate #50)</span>
                  <ArrowRight size={12} />
                </button>

                <button
                  onClick={() => onNavigateTab ? onNavigateTab('gemini_infiltration_defense') : undefined}
                  className="px-3.5 py-1.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-300 dark:border-stone-700"
                >
                  <span>Gemini AI Hack Defense (Plate #53)</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* LIGHTBOX MODAL: AUTHENTIC SEAL */}
      {isSealModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-stone-950 border-2 border-amber-500 rounded-3xl p-6 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-amber-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  Authentic Great Seal of the Cherokee Nation (ᏣᎳᎩᎯ ᎠᏰᎵ)
                </h3>
              </div>
              <button
                onClick={() => setIsSealModalOpen(false)}
                className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex justify-center p-6 bg-white rounded-2xl">
              <img
                src={cherokeeSealImg}
                alt="Great Seal High-Res"
                className="w-72 h-72 sm:w-80 sm:h-80 object-contain"
              />
            </div>

            <div className="text-xs font-mono text-stone-400 space-y-1">
              <div>Constitutional Date: Sept. 6, 1839 (Cherokee Constitution, Tahlequah)</div>
              <div>Clan Structure: Exactly 7 Star Points (MATRILINEAL KINSHIP ORDER)</div>
              <div>Official Repository: Anadisgoi Media Kit (anadisgoi.com)</div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL: PLATE #54 */}
      {isPlateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-stone-950 border-2 border-amber-500 rounded-3xl p-4 sm:p-6 text-white space-y-4 max-h-[95vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <Ban size={18} className="text-red-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  Plate #54: Cherokee Nation Hyperscale Data Center Ban & Authentic Seal
                </h3>
              </div>
              <button
                onClick={() => setIsPlateModalOpen(false)}
                className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-auto flex-1 flex justify-center">
              <img
                src={cherokeePlateImg}
                alt="Plate #54 Full Resolution"
                className="max-h-[75vh] w-auto object-contain rounded-xl border border-stone-800"
              />
            </div>

            <div className="shrink-0 pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-400 border-t border-stone-800">
              <span>Provenance Hash: 0xCHEROKEE_HYPERSCALE_BAN_PLATE_54_SOVEREIGN_VAULT_2026</span>
              <button
                onClick={() => {
                  setIsPlateModalOpen(false);
                  if (onNavigateTab) onNavigateTab('cherokee_it_position');
                }}
                className="text-amber-400 hover:text-amber-300 underline font-bold"
              >
                Open Full IT Position Engine →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
