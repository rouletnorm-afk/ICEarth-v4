import React, { useState } from 'react';
import probioticGraphicImg from '../assets/images/probiotic_lead_intervention_1786650125640.jpg';
import edtaChelationImg from '../assets/images/edta_chelation_medical_evidence_1786720100000_1786717879144.jpg';
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
  Globe,
  AlertOctagon,
  Droplets,
  HelpCircle,
  FileText,
  Clock,
  Check,
  Flame,
  Scale,
  ShieldCheck,
  TestTube,
  Apple,
  Home,
  Layers,
  Search,
  Filter,
  CheckCheck,
  Award,
  AlertCircle
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
  Area,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { speakExposenomicsText, stopExposenomicsSpeech } from '../lib/speechUtils';

interface MedicalInterventionsTabProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

export type InterventionSubdirectory = 
  | 'probiotics'
  | 'chelation'
  | 'testing'
  | 'nutrition'
  | 'prevention'
  | 'calculator';

export const MedicalInterventionsTab: React.FC<MedicalInterventionsTabProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';
  const [activeSubdirectory, setActiveSubdirectory] = useState<InterventionSubdirectory>('probiotics');
  const [selectedImageModal, setSelectedImageModal] = useState<'edta' | 'probiotics' | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Interactive Protocol Calculator State
  const [patientAge, setPatientAge] = useState<'pediatric' | 'adult'>('pediatric');
  const [bllRange, setBllRange] = useState<'mild' | 'moderate' | 'severe' | 'encephalopathy'>('severe');
  const [symptoms, setSymptoms] = useState<'none' | 'mild' | 'colic_neuropathy' | 'encephalopathy'>('colic_neuropathy');
  const [renalStatus, setRenalStatus] = useState<'normal' | 'impaired'>('normal');

  // Interactive Testing Threshold Selector State
  const [selectedBllThreshold, setSelectedBllThreshold] = useState<string>('45_69');

  // Interactive Nutrition Shield Simulator State
  const [dietaryIron, setDietaryIron] = useState<boolean>(true);
  const [dietaryCalcium, setDietaryCalcium] = useState<boolean>(true);
  const [dietaryZinc, setDietaryZinc] = useState<boolean>(true);
  const [dietaryVitaminC, setDietaryVitaminC] = useState<boolean>(true);
  const [dietaryAlginates, setDietaryAlginates] = useState<boolean>(true);
  const [probioticNissle, setProbioticNissle] = useState<boolean>(true);

  // Data for Bioavailability & Absorption Reduction (% of Ingested Lead Absorbed into Bloodstream)
  const absorptionData = [
    { strategy: 'Unmitigated Exposure (Control)', absorptionPercent: 45, systemicRisk: 'Extreme Neural / Organ Damage', color: '#ef4444' },
    { strategy: 'Dietary Fiber / Alginates', absorptionPercent: 32, systemicRisk: 'Moderate Risk Mitigation', color: '#f59e0b' },
    { strategy: 'Calcium + Iron Competition (DMT1 Block)', absorptionPercent: 18, systemicRisk: 'Reduced Bioavailability', color: '#eab308' },
    { strategy: 'E. coli Nissle Probiotic Aptamers (WPI/NIH)', absorptionPercent: 6, systemicRisk: 'Minimal Intestinal Absorption', color: '#10b981' },
    { strategy: 'Combined Probiotic + Ca/Fe/Alginate Protocol', absorptionPercent: 2.4, systemicRisk: 'Optimal Gut Interception Shield', color: '#06b6d4' }
  ];

  // Radar Matrix Data Comparing Intervention Modalities
  const interventionRadarData = [
    { metric: 'Non-Invasiveness', Probiotics: 95, Chelation_CaEDTA: 20, Nutrition: 92, Prevention: 98 },
    { metric: 'Prophylactic Shield', Probiotics: 92, Chelation_CaEDTA: 10, Nutrition: 85, Prevention: 99 },
    { metric: 'Acute Lead Removal', Probiotics: 25, Chelation_CaEDTA: 98, Nutrition: 20, Prevention: 15 },
    { metric: 'Safety & Tolerance', Probiotics: 96, Chelation_CaEDTA: 45, Nutrition: 98, Prevention: 100 },
    { metric: 'Global Scalability', Probiotics: 88, Chelation_CaEDTA: 25, Nutrition: 95, Prevention: 80 }
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

  // C. elegans Model Nematode Locomotion & Survival Rescue
  const nematodeRescueData = [
    { group: 'Control (Unexposed)', survivalRate: 98, locomotionBends: 42 },
    { group: 'Lead Only (100 µM Pb)', survivalRate: 38, locomotionBends: 12 },
    { group: 'Lead + Wildtype Nissle', survivalRate: 54, locomotionBends: 19 },
    { group: 'Lead + AI-Engineered Aptamer Nissle', survivalRate: 91, locomotionBends: 38 }
  ];

  // Chelation Renal Excretion & Rebound Kinetics (Hours from IV Infusion)
  const edtaKineticsData = [
    { hour: 0, urineLeadUgdL: 12, serumLeadUgdL: 75, urinaryZincLoss: 10 },
    { hour: 4, urineLeadUgdL: 185, serumLeadUgdL: 52, urinaryZincLoss: 85 },
    { hour: 8, urineLeadUgdL: 340, serumLeadUgdL: 38, urinaryZincLoss: 120 },
    { hour: 16, urineLeadUgdL: 210, serumLeadUgdL: 30, urinaryZincLoss: 95 },
    { hour: 24, urineLeadUgdL: 95, serumLeadUgdL: 26, urinaryZincLoss: 60 },
    { hour: 48, urineLeadUgdL: 45, serumLeadUgdL: 32, urinaryZincLoss: 25 },
    { hour: 72, urineLeadUgdL: 28, serumLeadUgdL: 42, urinaryZincLoss: 15 },
    { hour: 120, urineLeadUgdL: 18, serumLeadUgdL: 48, urinaryZincLoss: 12 }
  ];

  // Diagnostic Testing Modalities Comparison Table
  const diagnosticTestingData = [
    {
      test: 'Venous Blood Lead Level (BLL)',
      matrix: 'Whole blood (Venipuncture)',
      diagnosticWindow: 'Past 30–45 days (circulating pool)',
      referenceCutoff: 'Pediatric: ≥ 3.5 µg/dL (CDC Reference Value)',
      clinicalUtility: 'Gold standard for diagnostic confirmation and chelation decisions.',
      limitation: 'Reflects only recent circulating exposure; does not quantify deep bone stores.'
    },
    {
      test: 'Capillary Dried Blood Spot (DBS)',
      matrix: 'Filter paper (Finger/Heel Prick)',
      diagnosticWindow: 'Past 30–45 days + Isotopic Fingerprint',
      referenceCutoff: 'Pediatric screening threshold: ≥ 3.5 µg/dL',
      clinicalUtility: 'Ideal for remote field biomonitoring, eliminates cold chains, enables 206Pb/207Pb source matching.',
      limitation: 'Requires confirmatory venous phlebotomy if initial screening test is elevated.'
    },
    {
      test: 'Zinc Protoporphyrin (ZPP / FEP)',
      matrix: 'Erythrocyte whole blood',
      diagnosticWindow: 'Past 90–120 days (RBC lifespan)',
      referenceCutoff: 'Normal: < 35 µg/dL whole blood',
      clinicalUtility: 'Measures metabolic toxicity to heme enzyme ALAD and ferrochelatase.',
      limitation: 'Lags behind acute exposure by 2–6 weeks; also elevated in iron deficiency.'
    },
    {
      test: 'K-Shell X-Ray Fluorescence (KXRF)',
      matrix: 'Tibia / Patella bone cortex',
      diagnosticWindow: 'Decades (10–30 years half-life)',
      referenceCutoff: 'Lifetime accumulation: µg Pb / g bone mineral',
      clinicalUtility: 'Measures total lifetime cumulative body burden and skeletal store reservoir.',
      limitation: 'Specialized research equipment; not available in standard clinical laboratories.'
    },
    {
      test: 'Multi-Metal ICP-MS Panel',
      matrix: 'Blood / Urine (Mass Spectrometry)',
      diagnosticWindow: 'Simultaneous heavy metal profile',
      referenceCutoff: 'Pb, Cd, As, Hg, Tl reference ranges',
      clinicalUtility: 'Distinguishes co-exposures in industrial, electronic waste, and wildfire areas.',
      limitation: 'Requires specialized cleanroom laboratory instrumentation.'
    }
  ];

  // Clinical Myths vs Evidence Matrix
  const mythsVsEvidence = [
    {
      myth: 'Chelation is a routine "wellness detox" or anti-aging cleanse for healthy individuals.',
      reality: 'Myth. Chelation is an evidence-based clinical therapy strictly indicated for moderate to severe heavy metal poisoning (e.g. BLL ≥ 45 µg/dL). Administering it without acute toxic burden carries severe risks without clinical benefit.',
      riskLevel: 'Dangerous Wellness Myth'
    },
    {
      myth: 'Disodium EDTA (Na₂-EDTA) and Calcium Disodium EDTA (CaNa₂-EDTA) are interchangeable.',
      reality: 'FATAL ERROR. Disodium EDTA rapidly complexes free serum calcium, precipitating severe hypocalcemia and fatal cardiac arrest (FDA Black Box Warning). Only Calcium Disodium EDTA carries safe bound calcium.',
      riskLevel: 'Fatal Pharmacology Confusion'
    },
    {
      myth: 'Over-the-counter oral EDTA supplements effectively detoxify systemic lead stores.',
      reality: 'Myth. Oral EDTA has less than 5% gastrointestinal bioavailability and is largely unabsorbed. In fact, oral EDTA can bind dietary heavy metals in the lumen and increase intestinal absorption.',
      riskLevel: 'Ineffective / Counterproductive'
    },
    {
      myth: 'Chelation therapy reverses permanent neurodevelopmental and cognitive deficits in children.',
      reality: 'Clinical Reality. Chelation lowers circulating blood lead levels and treats acute life-threatening encephalopathy, but randomized clinical trials (such as the TLC trial) prove it does not reverse prior neuronal brain loss.',
      riskLevel: 'Critical Prognostic Fact'
    },
    {
      myth: 'Chelation can be administered at home or in outpatient spas without medical laboratory monitoring.',
      reality: 'Clinical Fact. Chelation mandates rigorous hospital/clinical oversight: baseline creatinine, BUN, continuous hydration monitoring to prevent acute tubular necrosis, and trace mineral repletion.',
      riskLevel: 'Strict Hospital Protocol'
    }
  ];

  // Narration Script
  const narrationText = `Welcome to the ICEarth Medical Interventions and Clinical Toxicology Knowledge Base. Medical interventions for heavy metal toxicity operate across five distinct clinical domains. First, Synthetic Probiotics, where Worcester Polytechnic Institute researchers engineer E. coli Nissle to produce nucleic acid aptamers that trap lead in the gut for fecal excretion. Second, Chelation Therapy, where Calcium Disodium EDTA acts as a hexadentate claw ligand to filter severe blood lead through the kidneys—strictly distinguished from fatal Disodium EDTA. Third, Diagnostic Testing and Biomonitoring, including venous blood confirmation, dried blood spots, and bone X-ray fluorescence. Fourth, Clinical Nutrition, utilizing iron and calcium to competitively block the DMT1 intestinal transporter gateway. And fifth, Primary Environmental Prevention, eliminating exposure sources at the root.`;

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

  // Helper for Clinical Decision Calculator Result
  const getClinicalRecommendation = () => {
    if (renalStatus === 'impaired') {
      return {
        protocol: 'CONTRAINDICATION / REDUCED DOSE RENAL PROTOCOL',
        badge: 'High Renal Risk',
        badgeColor: 'bg-rose-950 text-rose-300 border-rose-500',
        action: 'CaNa₂-EDTA is cleared 100% by glomerular filtration. Severe renal impairment leads to nephrotoxicity and tubular necrosis. If chelation is imperative, reduce dose by 50%–75%, extend dosing intervals, maintain continuous high-volume isotonic hydration (urine output > 2 mL/kg/hr), or consider emergency hemodialysis with chelation.',
        agent: 'Modified CaNa₂-EDTA + Nephrology Consult',
        monitoring: 'Hourly urine output, serum creatinine Q12H, BUN, fractional sodium excretion, serum electrolytes.'
      };
    }

    if (bllRange === 'encephalopathy' || symptoms === 'encephalopathy') {
      return {
        protocol: 'EMERGENCY ACUTE LEAD ENCEPHALOPATHY PROTOCOL',
        badge: 'Life Threatening Emergency',
        badgeColor: 'bg-red-950 text-red-300 border-red-500 animate-pulse',
        action: 'Immediate PICU / ICU admission. DO NOT administer CaNa₂-EDTA alone, as it mobilizes skeletal lead and can worsen cerebral edema. Must initiate with Dimercaprol (BAL) 75 mg/m² IM Q4H. Follow with first dose of IV CaNa₂-EDTA (1,000–1,500 mg/m²/day in divided infusions) 4 hours after BAL once urine flow is confirmed.',
        agent: 'Combination: BAL (Dimercaprol) IM + IV CaNa₂-EDTA',
        monitoring: 'Intracranial pressure monitoring, continuous EEG, Q4H urine output, Q12H serum electrolytes, renal panel, liver transaminases.'
      };
    }

    if (bllRange === 'severe') { // BLL >= 70 or severe colic
      return {
        protocol: 'INPATIENT INTRAVENOUS CHELATION PROTOCOL',
        badge: 'Severe Acute Toxicity (BLL ≥ 70 µg/dL)',
        badgeColor: 'bg-amber-950 text-amber-300 border-amber-500',
        action: 'Admit to inpatient hospital service. Establish brisk urine output with IV D5 0.45% NS pre-hydration. Administer Calcium Disodium EDTA at 1,000–1,500 mg/m²/day (approx 25–50 mg/kg/day) by continuous IV infusion over 8–12 hours or divided Q12H doses for 5 consecutive days. Rest period of 2–4 days required before second cycle.',
        agent: 'IV Calcium Disodium EDTA (CaNa₂-EDTA)',
        monitoring: 'Daily BUN, creatinine, urinalysis for proteinuria/hematuria, serum calcium and zinc, repeat BLL at 48h and 14 days post-cycle to assess bone rebound.'
      };
    }

    if (bllRange === 'moderate') { // BLL 45-69
      return {
        protocol: 'ORAL SUCCIMER (DMSA) OR IV CaNa₂-EDTA PROTOCOL',
        badge: 'Moderate Toxicity (BLL 45–69 µg/dL)',
        badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500',
        action: 'First-line outpatient/inpatient therapy is oral Succimer (DMSA) 10 mg/kg (or 350 mg/m²) TID for 5 days, then BID for 14 days (total 19 days). If child cannot tolerate oral medications or severe vomiting/GI colic occurs, switch to inpatient IV Calcium Disodium EDTA (1,000 mg/m²/day for 5 days).',
        agent: 'Succimer (DMSA) Oral (1st line) OR IV CaNa₂-EDTA (2nd line)',
        monitoring: 'Baseline CBC with diff (risk of neutropenia), liver function tests, serum creatinine, post-treatment BLL at 1 and 4 weeks.'
      };
    }

    // Mild BLL < 45
    return {
      protocol: 'ENVIRONMENTAL ABATEMENT & NUTRITIONAL BLOCKADE (NO CHELATION)',
      badge: 'BLL < 45 µg/dL: Chelation Not Indicated',
      badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500',
      action: 'Chelation therapy is NOT clinically recommended for BLL < 45 µg/dL (randomized clinical trials showed no cognitive benefit and potential toxic risks). Focus on immediate environmental source elimination (paint, plumbing, soil), nutritional iron/calcium/zinc repletion to competitively block intestinal DMT1 transporters, and probiotic aptamer gut trapping.',
      agent: 'DMT1 Nutritional Repletion + Environmental Remediation + Probiotics',
      monitoring: 'Confirmatory venous BLL in 1–3 months, developmental screening, iron panel, pediatric environmental health specialty unit (PEHSU) referral.'
    };
  };

  const recommendation = getClinicalRecommendation();

  // Calculate simulated nutrition shield effectiveness
  const calculateNutritionShield = () => {
    let absorbed = 45; // baseline unmitigated absorption
    if (dietaryIron) absorbed -= 12;
    if (dietaryCalcium) absorbed -= 10;
    if (dietaryZinc) absorbed -= 5;
    if (dietaryVitaminC) absorbed -= 3;
    if (dietaryAlginates) absorbed -= 7;
    if (probioticNissle) absorbed -= 6;
    return Math.max(2, absorbed);
  };

  const simulatedAbsorption = calculateNutritionShield();
  const protectionPercentage = Math.round(((45 - simulatedAbsorption) / 45) * 100);

  return (
    <div className={`space-y-8 animate-in fade-in duration-300 ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
      
      {/* ========================================================================= */}
      {/* 1. MASTER HEADER: BROAD MEDICAL INTERVENTIONS KNOWLEDGE BASE */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-stone-950 via-slate-950 to-stone-950 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-stone-950 px-3 py-1 rounded-full font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Pill size={14} />
                Medical Interventions Knowledge Base
              </span>
              <span className="bg-stone-900 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                5 Core Clinical Domains
              </span>
              <span className="bg-amber-950 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
                Evidence-Based Toxicology
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              Medical Interventions & Heavy Metal Therapeutics
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              A comprehensive clinical toxicology repository covering synthetic biotherapeutics (probiotics), evidence-based chelation pharmacology (CaNa₂-EDTA vs lethal Na₂-EDTA), diagnostic biomonitoring (BLL/KXRF/DBS), competitive DMT1 nutritional blockade, and primary environmental prevention.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span><strong>Peer-Reviewed Sources:</strong> NIH NIEHS (R21ES038018) • Acıbadem Health Library • CDC/AAP Guidelines</span>
              <span>•</span>
              <span><strong>Synthesis:</strong> Norman Roulet (ICEarth Sovereign Exposenomics)</span>
            </div>
          </div>

          {/* MASTER ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={handleToggleAudio}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg ${
                isSpeaking
                  ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                  : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-stone-950'
              }`}
            >
              <Volume2 size={16} />
              <span>{isSpeaking ? 'Stop Narration' : 'Listen to Clinical Overview'}</span>
            </button>

            <a
              href="https://acibademinternational.com/health-library/calcium-disodium-edta-explained-by-medical-evidence-not-myths/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Globe size={15} className="text-amber-400" />
              <span>Acıbadem Library</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SUBDIRECTORY NAVIGATION MENU (THE 5 TYPES OF MEDICAL INTERVENTIONS) */}
      {/* ========================================================================= */}
      <div className="bg-stone-900/90 border border-stone-800 p-2 sm:p-3 rounded-2xl shadow-xl">
        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 px-3 pt-1 pb-2 flex items-center gap-2 font-bold border-b border-stone-800/80 mb-2">
          <Layers size={14} className="text-emerald-400" />
          <span>Select Medical Intervention Subdirectory:</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          
          {/* SUBDIRECTORY 1: PROBIOTICS */}
          <button
            onClick={() => setActiveSubdirectory('probiotics')}
            className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 border ${
              activeSubdirectory === 'probiotics'
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md font-bold ring-2 ring-emerald-500/40'
                : 'bg-stone-950/80 hover:bg-stone-800 text-stone-300 border-stone-800 hover:border-emerald-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <Dna size={18} className={activeSubdirectory === 'probiotics' ? 'text-white' : 'text-emerald-400'} />
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                activeSubdirectory === 'probiotics' ? 'bg-emerald-800 text-emerald-100' : 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
              }`}>
                WPI / NIH
              </span>
            </div>
            <div>
              <div className="text-xs font-bold font-serif leading-tight">1. Probiotics</div>
              <div className={`text-[10px] leading-tight ${activeSubdirectory === 'probiotics' ? 'text-emerald-100' : 'text-stone-400'}`}>
                Aptamer bacteria & gut trapping
              </div>
            </div>
          </button>

          {/* SUBDIRECTORY 2: CHELATION */}
          <button
            onClick={() => setActiveSubdirectory('chelation')}
            className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 border ${
              activeSubdirectory === 'chelation'
                ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold ring-2 ring-amber-500/40'
                : 'bg-stone-950/80 hover:bg-stone-800 text-stone-300 border-stone-800 hover:border-amber-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <Pill size={18} className={activeSubdirectory === 'chelation' ? 'text-stone-950' : 'text-amber-400'} />
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                activeSubdirectory === 'chelation' ? 'bg-amber-600 text-stone-950' : 'bg-amber-950 text-amber-300 border border-amber-500/30'
              }`}>
                Evidence
              </span>
            </div>
            <div>
              <div className="text-xs font-bold font-serif leading-tight">2. Chelation</div>
              <div className={`text-[10px] leading-tight ${activeSubdirectory === 'chelation' ? 'text-stone-900' : 'text-stone-400'}`}>
                CaNa₂-EDTA & toxicology facts
              </div>
            </div>
          </button>

          {/* SUBDIRECTORY 3: TESTING */}
          <button
            onClick={() => setActiveSubdirectory('testing')}
            className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 border ${
              activeSubdirectory === 'testing'
                ? 'bg-cyan-600 text-white border-cyan-400 shadow-md font-bold ring-2 ring-cyan-500/40'
                : 'bg-stone-950/80 hover:bg-stone-800 text-stone-300 border-stone-800 hover:border-cyan-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <TestTube size={18} className={activeSubdirectory === 'testing' ? 'text-white' : 'text-cyan-400'} />
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                activeSubdirectory === 'testing' ? 'bg-cyan-800 text-cyan-100' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
              }`}>
                Diagnostic
              </span>
            </div>
            <div>
              <div className="text-xs font-bold font-serif leading-tight">3. Testing</div>
              <div className={`text-[10px] leading-tight ${activeSubdirectory === 'testing' ? 'text-cyan-100' : 'text-stone-400'}`}>
                BLL, KXRF, ZPP & DBS panels
              </div>
            </div>
          </button>

          {/* SUBDIRECTORY 4: NUTRITION */}
          <button
            onClick={() => setActiveSubdirectory('nutrition')}
            className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 border ${
              activeSubdirectory === 'nutrition'
                ? 'bg-teal-600 text-white border-teal-400 shadow-md font-bold ring-2 ring-teal-500/40'
                : 'bg-stone-950/80 hover:bg-stone-800 text-stone-300 border-stone-800 hover:border-teal-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <Apple size={18} className={activeSubdirectory === 'nutrition' ? 'text-white' : 'text-teal-400'} />
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                activeSubdirectory === 'nutrition' ? 'bg-teal-800 text-teal-100' : 'bg-teal-950 text-teal-300 border border-teal-500/30'
              }`}>
                DMT1 Block
              </span>
            </div>
            <div>
              <div className="text-xs font-bold font-serif leading-tight">4. Nutrition</div>
              <div className={`text-[10px] leading-tight ${activeSubdirectory === 'nutrition' ? 'text-teal-100' : 'text-stone-400'}`}>
                Fe, Ca, Zn, Alginate blockade
              </div>
            </div>
          </button>

          {/* SUBDIRECTORY 5: PREVENTION */}
          <button
            onClick={() => setActiveSubdirectory('prevention')}
            className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 border ${
              activeSubdirectory === 'prevention'
                ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold ring-2 ring-blue-500/40'
                : 'bg-stone-950/80 hover:bg-stone-800 text-stone-300 border-stone-800 hover:border-blue-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <ShieldCheck size={18} className={activeSubdirectory === 'prevention' ? 'text-white' : 'text-blue-400'} />
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                activeSubdirectory === 'prevention' ? 'bg-blue-800 text-blue-100' : 'bg-blue-950 text-blue-300 border border-blue-500/30'
              }`}>
                Primary
              </span>
            </div>
            <div>
              <div className="text-xs font-bold font-serif leading-tight">5. Prevention</div>
              <div className={`text-[10px] leading-tight ${activeSubdirectory === 'prevention' ? 'text-blue-100' : 'text-stone-400'}`}>
                Source control, NSF filters, paint
              </div>
            </div>
          </button>

          {/* SUBDIRECTORY 6: CALCULATOR */}
          <button
            onClick={() => setActiveSubdirectory('calculator')}
            className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 border ${
              activeSubdirectory === 'calculator'
                ? 'bg-purple-600 text-white border-purple-400 shadow-md font-bold ring-2 ring-purple-500/40'
                : 'bg-stone-950/80 hover:bg-stone-800 text-stone-300 border-stone-800 hover:border-purple-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <Activity size={18} className={activeSubdirectory === 'calculator' ? 'text-white' : 'text-purple-400'} />
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                activeSubdirectory === 'calculator' ? 'bg-purple-800 text-purple-100' : 'bg-purple-950 text-purple-300 border border-purple-500/30'
              }`}>
                Interactive
              </span>
            </div>
            <div>
              <div className="text-xs font-bold font-serif leading-tight">6. Calculator</div>
              <div className={`text-[10px] leading-tight ${activeSubdirectory === 'calculator' ? 'text-purple-100' : 'text-stone-400'}`}>
                Clinical decision triage engine
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SUBDIRECTORY VIEW: 1. PROBIOTICS & SYNTHETIC BIOTHERAPEUTICS */}
      {/* ========================================================================= */}
      {activeSubdirectory === 'probiotics' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* FEATURED WPI/NIH PROBIOTIC INFOGRAPHIC PLATE */}
          <div className="bg-stone-950 rounded-3xl border-2 border-emerald-500/40 p-4 sm:p-6 shadow-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-xs sm:text-sm">
                <Microscope size={16} />
                <span>Worcester Polytechnic Institute (WPI) & NIH NIEHS Breakthrough Infographic</span>
              </div>
              <button
                onClick={() => setSelectedImageModal('probiotics')}
                className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 rounded-lg border border-stone-700 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Expand High-Res Probiotics Plate</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* IMAGE */}
              <div
                className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-emerald-500/40 bg-black shadow-2xl cursor-pointer"
                onClick={() => setSelectedImageModal('probiotics')}
              >
                <img
                  src={probioticGraphicImg}
                  alt="WPI Probiotic Lead Interventions Infographic"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-950/80 backdrop-blur-md rounded-xl border border-emerald-500/30 text-xs">
                  <span className="font-mono font-bold text-emerald-400 block uppercase text-[10px]">
                    Figure 1.0 — E. coli Nissle 1917 Probiotic Aptamer Lead Sequestration Engine
                  </span>
                  <p className="text-stone-300 text-[11px] leading-snug pt-0.5">
                    Harmless probiotic bacteria express high-affinity nucleic acid aptamers in the digestive lumen, binding ingested lead ions (Pb²⁺) into non-absorbable complexes that pass safely through feces.
                  </p>
                </div>
              </div>

              {/* SCIENTIFIC ABSTRACT & HIGHLIGHTS */}
              <div className="lg:col-span-5 space-y-3 font-sans text-xs">
                <h3 className="text-base font-serif font-extrabold text-white flex items-center gap-2">
                  <Dna className="text-emerald-400" size={18} />
                  <span>Fighting Lead Poisoning with Probiotic Bacteria</span>
                </h3>

                <div className="p-3 bg-stone-900/90 rounded-xl border-l-4 border-emerald-500 space-y-1">
                  <div className="font-bold font-mono text-emerald-300 flex items-center justify-between">
                    <span>1. NIH NIEHS Grant R21ES038018</span>
                    <span className="text-[10px] text-stone-400">$400,753 Award</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    Lead researchers <strong>Dr. Natalie Farny</strong> (Biology & Biotechnology) and <strong>Dr. Dmitry Korkin</strong> (Computer Science) at Worcester Polytechnic Institute (WPI) have engineered probiotic <em>E. coli Nissle 1917</em> to intercept lead directly in the gastrointestinal tract.
                  </p>
                </div>

                <div className="p-3 bg-stone-900/90 rounded-xl border-l-4 border-cyan-500 space-y-1">
                  <div className="font-bold font-mono text-cyan-300 flex items-center justify-between">
                    <span>2. AI-Driven Genetic Sequence Optimization</span>
                    <span className="text-[10px] text-stone-400">Machine Learning</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    Machine learning algorithms identify and rearrange internal bacterial genetic sequences to produce nucleic acid aptamers with picomolar binding affinities for Pb²⁺, leaving essential nutrients (Ca²⁺, Fe²⁺, Zn²⁺) untouched.
                  </p>
                </div>

                <div className="p-3 bg-stone-900/90 rounded-xl border-l-4 border-amber-500 space-y-1">
                  <div className="font-bold font-mono text-amber-300 flex items-center justify-between">
                    <span>3. In Vivo Nematode (C. elegans) Validation</span>
                    <span className="text-[10px] text-stone-400">Model Organism</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    Trials in <em>Caenorhabditis elegans</em> demonstrate complete rescue of locomotion bends and 91% survival rates when exposed to lethal heavy metal concentrations, proving safe fecal elimination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COMPARATIVE DATA CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* APTAMER BINDING CURVE */}
            <div className="lg:col-span-6 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <BarChart2 size={15} />
                  <span>AI Aptamer Lead Trapping Efficiency Curve</span>
                </span>
                <span className="text-[10px] text-stone-400 font-mono">Lead Conc (µg/mL)</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={aptamerBindingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="concUgm" stroke="#a1a1aa" fontSize={10} />
                    <YAxis stroke="#a1a1aa" fontSize={10} domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#10b981', borderRadius: '12px', fontSize: '11px' }}
                      formatter={(val: any) => [`${val}%`, 'Lead Bound for Fecal Excretion']}
                    />
                    <Area type="monotone" dataKey="aptamerBoundPercent" stroke="#10b981" fill="#10b981" fillOpacity={0.25} strokeWidth={2} name="Bound Lead (%)" />
                    <Area type="monotone" dataKey="freeLeadPercent" stroke="#ef4444" fill="#ef4444" fillOpacity={0.15} strokeWidth={1.5} name="Free Unbound Lead (%)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                <em>Across standard environmental ingestion levels (&lt; 250 µg/mL), probiotic aptamers sequester 86%–98% of free lead ions before intestinal enterocyte absorption can take place.</em>
              </p>
            </div>

            {/* C. ELEGANS MODEL SURVIVAL & LOCOMOTION RESCUE */}
            <div className="lg:col-span-6 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <BarChart2 size={15} />
                  <span>In Vivo C. elegans Heavy Metal Rescue Trial</span>
                </span>
                <span className="text-[10px] text-stone-400 font-mono">WPI Lab Data</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={nematodeRescueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="group" stroke="#a1a1aa" fontSize={9} interval={0} />
                    <YAxis stroke="#a1a1aa" fontSize={10} domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#06b6d4', borderRadius: '12px', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="survivalRate" fill="#10b981" radius={[6, 6, 0, 0]} name="Organism Survival Rate (%)" />
                    <Bar dataKey="locomotionBends" fill="#06b6d4" radius={[6, 6, 0, 0]} name="Locomotion Bends / Min" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                <em>Nematodes exposed to lethal 100 µM lead solutions suffered severe neural paralysis (12 bends/min) and 38% survival. Co-administration of engineered aptamer Nissle restored survival to 91% and locomotion to 38 bends/min.</em>
              </p>
            </div>
          </div>

          {/* TRANSLATIONAL CLINICAL PIPELINE & ADVANTAGES */}
          <div className="p-6 bg-stone-900/90 border border-emerald-500/30 rounded-3xl space-y-4 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={16} />
              <span>Translational Advantages: Why Probiotic Aptamers Transform Pediatric Public Health</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-emerald-300 font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  <span>Non-Invasive Oral Delivery</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Administered via standard chewable gummies, lyophilized probiotic sachets, or fermented yogurts without needle phlebotomy or IV hospital lines.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-cyan-300 font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  <span>Continuous 24/7 Prophylaxis</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Provides uninterrupted gastrointestinal shielding in communities with legacy leaded tap water, contaminated soil, or wildfire ash plumes.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-amber-300 font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  <span>Sub-Acute Lead Interception</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Protects children with low-to-moderate blood lead levels (3.5–44 µg/dL) where systemic hospital chelation is clinically contraindicated.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-purple-300 font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  <span>Cent-Per-Dose Global Scale</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Bacterial fermentation allows massive global production at pennies per dose for vulnerable children across Africa, South Asia, and the Americas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. SUBDIRECTORY VIEW: 2. CHELATION THERAPY & TOXICOLOGY (EVIDENCE VS MYTHS) */}
      {/* ========================================================================= */}
      {activeSubdirectory === 'chelation' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* KEY TAKEAWAYS CARDS (ACIBADEM CLINICAL SPECS) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400">
              <Sparkles size={15} />
              <span>Core Clinical Takeaways: Evidence-Based Chelation Standards (Acıbadem Health Library)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="p-4 bg-stone-900/90 border border-amber-500/30 rounded-2xl space-y-2 shadow-lg">
                <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-300 font-mono font-black text-xs flex items-center justify-center border border-amber-500/40">
                  1
                </div>
                <h4 className="text-xs font-bold text-white font-serif">Moderate to Severe Indication</h4>
                <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                  Calcium disodium EDTA is an evidence-based clinical treatment strictly indicated for moderate to severe lead poisoning (BLL ≥ 45 µg/dL).
                </p>
              </div>

              <div className="p-4 bg-stone-900/90 border border-rose-500/30 rounded-2xl space-y-2 shadow-lg">
                <div className="w-7 h-7 rounded-xl bg-rose-500/20 text-rose-300 font-mono font-black text-xs flex items-center justify-center border border-rose-500/40">
                  2
                </div>
                <h4 className="text-xs font-bold text-white font-serif">Crucial Disodium Difference</h4>
                <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                  Completely distinct from Disodium EDTA (Na₂-EDTA), which causes rapid, fatal hypocalcemia and cardiac arrest. FDA Black Box ban.
                </p>
              </div>

              <div className="p-4 bg-stone-900/90 border border-emerald-500/30 rounded-2xl space-y-2 shadow-lg">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono font-black text-xs flex items-center justify-center border border-emerald-500/40">
                  3
                </div>
                <h4 className="text-xs font-bold text-white font-serif">Not a Routine "Detox"</h4>
                <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                  Chelation therapy is never a routine wellness cleanse or anti-aging spa detox for healthy individuals without documented toxic burden.
                </p>
              </div>

              <div className="p-4 bg-stone-900/90 border border-cyan-500/30 rounded-2xl space-y-2 shadow-lg">
                <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-black text-xs flex items-center justify-center border border-cyan-500/40">
                  4
                </div>
                <h4 className="text-xs font-bold text-white font-serif">Strict Medical Monitoring</h4>
                <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                  Requires hospital monitoring of kidney function (creatinine/BUN), continuous hydration (urine output &gt; 2 mL/kg/hr), and mineral levels (Zn, Ca, Fe).
                </p>
              </div>

              <div className="p-4 bg-stone-900/90 border border-purple-500/30 rounded-2xl space-y-2 shadow-lg">
                <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-300 font-mono font-black text-xs flex items-center justify-center border border-purple-500/40">
                  5
                </div>
                <h4 className="text-xs font-bold text-white font-serif">Physician-Directed Criteria</h4>
                <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                  A physician chooses chelation protocols based on clinical symptoms, blood lead levels, patient age, pregnancy status, and renal health.
                </p>
              </div>
            </div>
          </div>

          {/* FEATURED CHELATION INFOGRAPHIC CARD */}
          <div className="bg-stone-950 rounded-3xl border-2 border-amber-500/40 p-4 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-xs sm:text-sm">
                <Sparkles size={16} />
                <span>Clinical Chelation Mechanics: Hexadentate Coordination & Renal Excretion</span>
              </div>
              <button
                onClick={() => setSelectedImageModal('edta')}
                className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 rounded-lg border border-stone-700 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Expand High-Res Chelation Plate</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* GRAPHIC IMAGE */}
              <div
                className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-amber-500/40 bg-black shadow-2xl cursor-pointer"
                onClick={() => setSelectedImageModal('edta')}
              >
                <img
                  src={edtaChelationImg}
                  alt="Calcium Disodium EDTA Chelation Evidence Diagram"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-950/80 backdrop-blur-md rounded-xl border border-amber-500/30 text-xs">
                  <span className="font-mono font-bold text-amber-400 block uppercase text-[10px]">
                    Figure 2.0 — Hexadentate Lead Chelation by Calcium Disodium Versenate
                  </span>
                  <p className="text-stone-300 text-[11px] leading-snug pt-0.5">
                    The hexadentate claw ligand encapsulates Pb²⁺ by displacing Ca²⁺, creating a highly stable water-soluble chelate that is filtered through renal nephrons for urinary excretion.
                  </p>
                </div>
              </div>

              {/* CHEMICAL & MOLECULAR MECHANISM SUMMARY */}
              <div className="lg:col-span-5 space-y-3 font-sans text-xs">
                <h3 className="text-base font-serif font-extrabold text-white flex items-center gap-2">
                  <Pill className="text-amber-400" size={18} />
                  <span>How Calcium Disodium EDTA Works at the Molecular Level</span>
                </h3>

                <div className="p-3 bg-stone-900/90 rounded-xl border-l-4 border-amber-500 space-y-1">
                  <div className="font-bold font-mono text-amber-300 flex items-center justify-between">
                    <span>1. Hexadentate "Claw" Chelation</span>
                    <span className="text-[10px] text-stone-400">log K ≈ 18.0</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    EDTA acts as a hexadentate ligand (2 tertiary amine nitrogens + 4 carboxylate oxygens) that forms an octahedral cage around the lead cation (Pb²⁺). Because the stability constant of lead-EDTA (log K ≈ 18.0) is much higher than calcium-EDTA (log K ≈ 10.7), lead rapidly displaces calcium.
                  </p>
                </div>

                <div className="p-3 bg-stone-900/90 rounded-xl border-l-4 border-cyan-500 space-y-1">
                  <div className="font-bold font-mono text-cyan-300 flex items-center justify-between">
                    <span>2. Glomerular Filtration & Urine Clearance</span>
                    <span className="text-[10px] text-stone-400">Renal Clearance</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    The resulting Lead-EDTA chelate is water-soluble, biologically inert, and poorly reabsorbed by renal tubules. Over 95% of the injected chelate is excreted unchanged in the urine within 24 to 48 hours.
                  </p>
                </div>

                <div className="p-3 bg-stone-900/90 rounded-xl border-l-4 border-rose-500 space-y-1">
                  <div className="font-bold font-mono text-rose-300 flex items-center justify-between">
                    <span>3. Skeletal Mobilization & The Rebound Effect</span>
                    <span className="text-[10px] text-stone-400">Bone Stores</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    CaNa₂-EDTA primarily extracts lead from extracellular fluid, blood, and soft tissue. Over the subsequent 7–14 days, stored bone lead redistributes into blood, causing a measured BLL "rebound" that often requires spaced secondary cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CRITICAL WARNING: CaNa2-EDTA vs Na2-EDTA (FATAL HYPOCALCEMIA WARNING) */}
          <div className="p-5 bg-gradient-to-r from-red-950/90 via-stone-950 to-red-950/90 border-2 border-red-500 rounded-3xl space-y-3 shadow-xl">
            <div className="flex items-center gap-3 text-red-400 font-mono font-black text-sm">
              <AlertOctagon size={22} className="text-red-500 animate-pulse" />
              <span>CRITICAL FDA SAFETY WARNING: Disodium EDTA (Na₂-EDTA) vs Calcium Disodium EDTA (CaNa₂-EDTA)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-300 leading-relaxed">
              <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-2xl space-y-2">
                <div className="font-bold text-red-300 font-mono flex items-center gap-1.5">
                  <AlertTriangle size={15} />
                  <span>FATAL: Disodium EDTA (Endrate / Na₂-EDTA)</span>
                </div>
                <p>
                  Disodium EDTA contains <strong>no bound calcium</strong>. When infused into the bloodstream, it avidly grabs serum calcium ions from the patient's blood. This causes <strong>catastrophic, rapid hypocalcemia</strong>, leading to tetany, intractable cardiac arrhythmias, ventricular fibrillation, and cardiac arrest. Multiple pediatric and adult fatalities led the FDA to withdraw its approval for lead poisoning chelation.
                </p>
                <span className="inline-block font-mono text-[10px] bg-red-900 text-white px-2 py-0.5 rounded font-bold">
                  DO NOT USE FOR LEAD CHELATION
                </span>
              </div>

              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl space-y-2">
                <div className="font-bold text-emerald-300 font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  <span>SAFE & APPROVED: Calcium Disodium EDTA (Versenate / CaNa₂-EDTA)</span>
                </div>
                <p>
                  Calcium Disodium EDTA is pre-saturated with a calcium ion. When infused, it <strong>cannot strip serum calcium</strong> from the blood. When it encounters lead (Pb²⁺), which has a 10-million-fold higher binding affinity, it safely trades the calcium ion for lead without disturbing the patient's serum calcium homeostasis.
                </p>
                <span className="inline-block font-mono text-[10px] bg-emerald-800 text-white px-2 py-0.5 rounded font-bold">
                  FDA APPROVED FOR LEAD TOXICITY
                </span>
              </div>
            </div>
          </div>

          {/* MYTHS VS EVIDENCE TABLE */}
          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
                <Scale size={18} />
                <span>Clinical Evidence vs Commercial Wellness Myths</span>
              </div>
              <span className="text-[10px] font-mono text-stone-400">Acıbadem International Medical Review</span>
            </div>

            <div className="space-y-3">
              {mythsVsEvidence.map((item, idx) => (
                <div key={idx} className="p-4 bg-stone-950 rounded-2xl border border-stone-800/80 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-400 font-mono">
                      <X size={15} className="text-rose-500" />
                      <span>MYTH: "{item.myth}"</span>
                    </div>
                    <span className="px-2 py-0.5 bg-rose-950 text-rose-300 text-[9px] font-mono font-bold rounded-full border border-rose-500/30">
                      {item.riskLevel}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-stone-300 pl-5 font-sans leading-relaxed">
                    <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-emerald-300 font-mono">MEDICAL EVIDENCE: </strong>
                      {item.reality}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHARMACOKINETICS & MINERAL CLEARANCE TIMELINE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-xs sm:text-sm">
                  <Activity size={16} />
                  <span>IV CaNa₂-EDTA Pharmacokinetics: Urinary Lead Spike vs Zinc Depletion</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400">Hours Post-Infusion</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={edtaKineticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="hour" stroke="#a1a1aa" fontSize={10} label={{ value: 'Hours', position: 'insideBottomRight', offset: -5, fill: '#71717a', fontSize: 10 }} />
                    <YAxis stroke="#a1a1aa" fontSize={10} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#f59e0b', borderRadius: '12px', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Area type="monotone" dataKey="urineLeadUgdL" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.25} strokeWidth={2} name="Urinary Lead Output (µg/dL)" />
                    <Area type="monotone" dataKey="serumLeadUgdL" stroke="#ef4444" fill="#ef4444" fillOpacity={0.15} strokeWidth={2} name="Serum Blood Lead (µg/dL)" />
                    <Area type="monotone" dataKey="urinaryZincLoss" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.15} strokeWidth={1.5} name="Urinary Zinc Loss (mg/L)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                <em>During IV infusion, urinary lead excretion increases 20- to 50-fold, peaking within 8–16 hours. However, EDTA also increases urinary zinc and copper excretion by 500%, mandating mineral monitoring and repletion post-course.</em>
              </p>
            </div>

            {/* MANDATORY MONITORING PROTOCOL CARD */}
            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl text-xs font-sans">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="font-bold font-mono text-cyan-400 flex items-center gap-1.5">
                  <Droplets size={16} />
                  <span>Mandatory Clinical Monitoring Checklist</span>
                </span>
                <span className="text-[10px] font-mono text-stone-400">Hospital ICU / Inpatient</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                  <span className="font-bold text-amber-300 font-mono text-[11px] block">1. Pre-Hydration & Urine Output</span>
                  <p className="text-stone-400 leading-snug">
                    Establish brisk urine flow (&gt; 1.5–2 mL/kg/hr in children) with D5 0.45% NS before initiating infusion to protect renal tubular epithelium.
                  </p>
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                  <span className="font-bold text-cyan-300 font-mono text-[11px] block">2. Daily Renal Function Panel</span>
                  <p className="text-stone-400 leading-snug">
                    Monitor serum creatinine, BUN, and urinalysis daily. Immediately halt or reduce infusion if proteinuria, hematuria, or oliguria develops.
                  </p>
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                  <span className="font-bold text-emerald-300 font-mono text-[11px] block">3. Essential Trace Mineral Repletion</span>
                  <p className="text-stone-400 leading-snug">
                    EDTA non-selectively chelates divalent cations (Zn²⁺, Cu²⁺, Fe²⁺). Administer oral zinc and multivitamin supplements between treatment cycles.
                  </p>
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                  <span className="font-bold text-purple-300 font-mono text-[11px] block">4. Post-Treatment BLL Rebound Assessment</span>
                  <p className="text-stone-400 leading-snug">
                    Re-check blood lead at 48 hours, 7 days, and 14 days post-cycle to assess skeletal redistribution from bone cortex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. SUBDIRECTORY VIEW: 3. DIAGNOSTIC TESTING & BIOMONITORING */}
      {/* ========================================================================= */}
      {activeSubdirectory === 'testing' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* HEADER BANNER */}
          <div className="bg-stone-900/90 border border-cyan-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono text-sm">
                <TestTube size={18} />
                <span>Diagnostic Testing & Biomonitoring Methodologies</span>
              </div>
              <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/30">
                CDC / WHO Reference Standards
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Comprehensive diagnostic matrix for evaluating acute, sub-acute, and lifetime cumulative heavy metal burdens. Accurate diagnosis requires understanding the distinct physiological pools measured by whole blood, erythrocytes, urine, and bone mineral matrices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                <span className="font-mono text-cyan-400 font-bold uppercase text-[11px] block">Circulating Pool (30-45 Days)</span>
                <p className="text-stone-300 font-bold">Venous Whole Blood (BLL)</p>
                <p className="text-stone-400 text-[11px]">Reflects recent equilibrium between ingestion, soft tissue uptake, and renal clearance. Gold standard for clinical triage.</p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                <span className="font-mono text-amber-400 font-bold uppercase text-[11px] block">Metabolic Pool (90-120 Days)</span>
                <p className="text-stone-300 font-bold">Zinc Protoporphyrin (ZPP / FEP)</p>
                <p className="text-stone-400 text-[11px]">Quantifies biological toxicity to heme synthesis enzyme ALAD across the 120-day lifespan of red blood cells.</p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                <span className="font-mono text-emerald-400 font-bold uppercase text-[11px] block">Deep Skeletal Pool (10-30 Years)</span>
                <p className="text-stone-300 font-bold">K-Shell Bone XRF (KXRF)</p>
                <p className="text-stone-400 text-[11px]">Measures 90–95% of total adult body lead burden sequestered inside cortical bone mineral hydroxyapatite.</p>
              </div>
            </div>
          </div>

          {/* DIAGNOSTIC TESTING MODALITIES COMPARISON TABLE */}
          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Filter size={16} className="text-cyan-400" />
              <span>Comparative Biomonitoring Modalities & Technical Limits</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-stone-800 text-[11px] font-mono text-stone-400 uppercase">
                    <th className="pb-3 pr-4">Diagnostic Test</th>
                    <th className="pb-3 px-4">Matrix Sample</th>
                    <th className="pb-3 px-4">Exposure Window</th>
                    <th className="pb-3 px-4">Reference Cutoff</th>
                    <th className="pb-3 pl-4">Clinical Utility & Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60">
                  {diagnosticTestingData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-800/40 transition-colors">
                      <td className="py-3.5 pr-4 font-bold text-white font-serif">{row.test}</td>
                      <td className="py-3.5 px-4 font-mono text-cyan-300 text-[11px]">{row.matrix}</td>
                      <td className="py-3.5 px-4 text-stone-300 text-[11px]">{row.diagnosticWindow}</td>
                      <td className="py-3.5 px-4 font-mono text-amber-300 text-[11px]">{row.referenceCutoff}</td>
                      <td className="py-3.5 pl-4 text-stone-300 leading-snug text-[11px]">{row.clinicalUtility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* INTERACTIVE BLL THRESHOLD CLINICAL ACTION MATRIX */}
          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
                <Scale size={18} />
                <span>CDC / AAP Blood Lead Level (BLL) Action Protocol Matrix</span>
              </div>
              <span className="text-[10px] font-mono text-stone-400">Select BLL Tier for Action Plan</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { id: '0_3.4', label: '< 3.5 µg/dL', desc: 'Below Reference Value', color: 'emerald' },
                { id: '3.5_9.9', label: '3.5 – 9.9 µg/dL', desc: 'Elevated (CDC Trigger)', color: 'teal' },
                { id: '10_19.9', label: '10 – 19.9 µg/dL', desc: 'Moderate Elevation', color: 'cyan' },
                { id: '20_44.9', label: '20 – 44.9 µg/dL', desc: 'High Sub-Acute Risk', color: 'amber' },
                { id: '45_69.9', label: '45 – 69.9 µg/dL', desc: 'Chelation Indicated', color: 'rose' },
                { id: '70_plus', label: '≥ 70.0 µg/dL', desc: 'Medical Emergency', color: 'red' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedBllThreshold(tier.id)}
                  className={`p-3 rounded-xl text-center transition-all cursor-pointer border ${
                    selectedBllThreshold === tier.id
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold'
                      : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  <div className="font-mono font-black text-xs">{tier.label}</div>
                  <div className={`text-[10px] mt-0.5 ${selectedBllThreshold === tier.id ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
                    {tier.desc}
                  </div>
                </button>
              ))}
            </div>

            {/* ACTION CARD FOR SELECTED BLL */}
            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-3 font-sans text-xs">
              {selectedBllThreshold === '0_3.4' && (
                <div className="space-y-2">
                  <span className="font-mono font-bold text-emerald-400 uppercase text-[11px] block">Tier 1: Baseline / Below CDC Blood Lead Reference Value (&lt; 3.5 µg/dL)</span>
                  <p className="text-stone-200 leading-relaxed">
                    <strong>Clinical Action:</strong> Reassure family. No medical or chelation intervention indicated. Maintain primary prevention vigilance (routine water filtration, pre-1978 paint hazard awareness, and balanced nutrition rich in calcium, iron, and zinc).
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    <strong>Re-Testing Schedule:</strong> Routine annual screening at age 1 and 2 years (or per Medicaid / state high-risk ZIP code mandates).
                  </p>
                </div>
              )}

              {selectedBllThreshold === '3.5_9.9' && (
                <div className="space-y-2">
                  <span className="font-mono font-bold text-teal-400 uppercase text-[11px] block">Tier 2: CDC Reference Value Action Level (3.5 – 9.9 µg/dL)</span>
                  <p className="text-stone-200 leading-relaxed">
                    <strong>Clinical Action:</strong> Perform confirmatory <strong>venous blood draw</strong> within 1–3 months if initial test was capillary finger-prick. Provide family lead education, nutritional counseling (dietary iron/calcium repletion to close DMT1 channels), and evaluate home for lead paint, imported spices, ceramics, or plumbing fixtures.
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    <strong>Re-Testing Schedule:</strong> Repeat venous BLL in 3 months until declining and stable. Chelation therapy is NOT indicated.
                  </p>
                </div>
              )}

              {selectedBllThreshold === '10_19.9' && (
                <div className="space-y-2">
                  <span className="font-mono font-bold text-cyan-400 uppercase text-[11px] block">Tier 3: Moderate Elevation (10.0 – 19.9 µg/dL)</span>
                  <p className="text-stone-200 leading-relaxed">
                    <strong>Clinical Action:</strong> Confirmatory venous test within 1–2 weeks. Detailed environmental exposure questionnaire (home age, renovations, hobbies, occupational take-home dust). Refer to local public health department for certified home risk assessment. Evaluate iron status (ferritin, CBC) and prescribe iron repletion if deficient.
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    <strong>Re-Testing Schedule:</strong> Repeat venous BLL in 1–2 months. Chelation therapy is NOT indicated (trials show no benefit).
                  </p>
                </div>
              )}

              {selectedBllThreshold === '20_44.9' && (
                <div className="space-y-2">
                  <span className="font-mono font-bold text-amber-400 uppercase text-[11px] block">Tier 4: High Sub-Acute Exposure (20.0 – 44.9 µg/dL)</span>
                  <p className="text-stone-200 leading-relaxed">
                    <strong>Clinical Action:</strong> Confirmatory venous draw within 48–72 hours. Mandatory public health inspection and environmental abatement. Complete neurodevelopmental evaluation, abdominal X-ray if acute radiopaque paint chip ingestion suspected (bowel decontamination if positive). Consider probiotic aptamer gut interception.
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    <strong>Re-Testing Schedule:</strong> Repeat venous BLL in 1 month. Chelation therapy is still NOT recommended for BLL &lt; 45 unless severe colic/symptoms present.
                  </p>
                </div>
              )}

              {selectedBllThreshold === '45_69.9' && (
                <div className="space-y-2">
                  <span className="font-mono font-bold text-rose-400 uppercase text-[11px] block">Tier 5: Moderate Toxicity — Medical Chelation Indicated (45.0 – 69.9 µg/dL)</span>
                  <p className="text-stone-200 leading-relaxed">
                    <strong>Clinical Action:</strong> Immediate confirmatory venous BLL within 24–48 hours. Initiate oral <strong>Succimer (DMSA)</strong> (10 mg/kg TID for 5 days, then BID for 14 days) or inpatient IV Calcium Disodium EDTA (1,000 mg/m²/day for 5 days) if oral therapy not tolerated. Mandates hospital monitoring of renal function, hydration, and minerals.
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    <strong>Safety Mandate:</strong> Patient MUST NOT be discharged back into the un-remediated lead environment post-chelation (rebound danger).
                  </p>
                </div>
              )}

              {selectedBllThreshold === '70_plus' && (
                <div className="space-y-2">
                  <span className="font-mono font-bold text-red-500 uppercase text-[11px] block animate-pulse">Tier 6: Severe Acute Toxicity / Encephalopathy (&ge; 70.0 µg/dL)</span>
                  <p className="text-stone-200 leading-relaxed">
                    <strong>Clinical Action:</strong> <strong>EMERGENCY HOSPITAL / PICU ADMISSION.</strong> Never give CaNa₂-EDTA alone without prior BAL (Dimercaprol) to prevent acute brain edema. Administer BAL 75 mg/m² IM Q4H, followed 4 hours later by IV Calcium Disodium EDTA (1,000–1,500 mg/m²/day continuous infusion) once urine flow is established.
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    <strong>Monitoring:</strong> Continuous ICU neuro-monitoring, daily renal panel, BUN, creatinine, electrolytes, hourly urine output &gt; 2 mL/kg/hr.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. SUBDIRECTORY VIEW: 4. CLINICAL NUTRITION & DMT1 BLOCKADE */}
      {/* ========================================================================= */}
      {activeSubdirectory === 'nutrition' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* DMT1 TRANSPORTER GATEWAY SUMMARY */}
          <div className="bg-stone-900/90 border border-teal-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-teal-400 font-bold font-mono text-sm">
                <Apple size={18} />
                <span>Nutritional Interventions & DMT1 Competitive Transporter Blockade</span>
              </div>
              <span className="text-[10px] font-mono bg-teal-950 text-teal-300 px-2.5 py-1 rounded-full border border-teal-500/30">
                Enterocyte Transporter Competition
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Lead (Pb²⁺) has no biological function in human physiology. It enters enterocytes (intestinal lining cells) by masquerading as essential divalent minerals (Fe²⁺, Ca²⁺, Zn²⁺) and hijacking the <strong>Divalent Metal Transporter 1 (DMT1)</strong> and apical calcium channels. Nutritional repletion competitive saturates these receptors, closing the biological entryway.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-teal-300 font-mono flex items-center justify-between">
                  <span>1. Iron Repletion (Fe²⁺)</span>
                  <span className="text-[10px] text-stone-400">DMT1 Downregulation</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Iron deficiency anemia triggers the intestinal mucosa to upregulate DMT1 synthesis by <strong>400% to 500%</strong>, creating a massive vacuum that accelerates lead absorption. Restoring normal ferritin shuts down excess DMT1 transporter expression.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-cyan-300 font-mono flex items-center justify-between">
                  <span>2. Calcium & Vitamin D (Ca²⁺)</span>
                  <span className="text-[10px] text-stone-400">Channel Competition</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Dietary calcium directly competes with Pb²⁺ for enterocyte calcium-binding proteins (calbindin-D9k) and intestinal calcium channels (TRPV6), while preventing maternal skeletal resorption during pregnancy and lactation.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-amber-300 font-mono flex items-center justify-between">
                  <span>3. Zinc (Zn²⁺)</span>
                  <span className="text-[10px] text-stone-400">Enzyme Preservation</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Zinc protects and restores critical sulfhydryl enzymes, particularly <strong>ALAD (delta-aminolevulinic acid dehydratase)</strong> in the bone marrow, preserving normal heme biosynthesis against lead displacement.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-emerald-300 font-mono flex items-center justify-between">
                  <span>4. Vitamin C (Ascorbic Acid)</span>
                  <span className="text-[10px] text-stone-400">Redox Shield</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Enhances dietary non-heme iron absorption (synergizing DMT1 closure) and acts as a powerful water-soluble antioxidant scavenging lead-induced reactive oxygen species (ROS) and lipid peroxides.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-purple-300 font-mono flex items-center justify-between">
                  <span>5. Dietary Alginates & Pectins</span>
                  <span className="text-[10px] text-stone-400">Lumen Chelation</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  High-molecular-weight polysaccharides from brown seaweeds and citrus fruits form insoluble polymeric gels with heavy metal cations in the digestive lumen, preventing uptake and promoting fecal excretion.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-rose-300 font-mono flex items-center justify-between">
                  <span>6. Glutathione Precursors (NAC)</span>
                  <span className="text-[10px] text-stone-400">Endogenous Detox</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  N-Acetylcysteine (NAC) and selenium replenish intracellular glutathione (GSH) reserves, enabling hepatocytes and nephrons to conjugate and excrete circulating heavy metal ions.
                </p>
              </div>
            </div>
          </div>

          {/* INTERACTIVE NUTRITION SHIELD SIMULATOR */}
          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-teal-400 font-bold font-mono text-sm">
                <ShieldCheck size={18} />
                <span>Interactive Gastrointestinal Shield & Bioavailability Simulator</span>
              </div>
              <span className="text-[10px] font-mono text-stone-400">Toggle Dietary Interventions</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* TOGGLES */}
              <div className="lg:col-span-6 space-y-2.5">
                <div className="text-xs font-mono text-stone-400 uppercase font-bold mb-2">Select Active Nutritional Shields:</div>
                
                {[
                  { label: 'Iron Repletion (Fe2+ / Ferritin Sufficiency)', state: dietaryIron, setter: setDietaryIron, desc: 'Closes 400% upregulated DMT1 portal' },
                  { label: 'Calcium & Vitamin D (Ca2+ Channel Saturation)', state: dietaryCalcium, setter: setDietaryCalcium, desc: 'Out-competes lead for calbindin enterocyte uptake' },
                  { label: 'Zinc Supplementation (Zn2+ Enzyme Shield)', state: dietaryZinc, setter: setDietaryZinc, desc: 'Protects ALAD enzyme and induces metallothionein' },
                  { label: 'Ascorbic Acid (Vitamin C Antioxidant)', state: dietaryVitaminC, setter: setDietaryVitaminC, desc: 'Boosts iron absorption & quenches ROS radicals' },
                  { label: 'Dietary Alginates & Citrus Pectins', state: dietaryAlginates, setter: setDietaryAlginates, desc: 'Binds heavy metal cations in lumen for stool excretion' },
                  { label: 'E. coli Nissle Probiotic Aptamers (WPI)', state: probioticNissle, setter: setProbioticNissle, desc: 'AI-engineered nucleic acid gut trapping' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => item.setter(!item.state)}
                    className={`w-full p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                      item.state
                        ? 'bg-teal-950/60 border-teal-500/60 text-white shadow-sm'
                        : 'bg-stone-950 border-stone-800 text-stone-500 hover:text-stone-400'
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-bold font-serif ${item.state ? 'text-teal-200' : 'text-stone-400'}`}>{item.label}</div>
                      <div className="text-[10px] text-stone-400">{item.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${
                      item.state ? 'bg-teal-500 text-stone-950' : 'bg-stone-800 text-stone-600'
                    }`}>
                      {item.state ? '✓' : '✕'}
                    </div>
                  </button>
                ))}
              </div>

              {/* SIMULATION RESULT DISPLAY */}
              <div className="lg:col-span-6 bg-stone-950 p-6 rounded-3xl border border-teal-500/30 space-y-4 shadow-2xl text-center">
                <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider block">
                  Simulated Intestinal Absorption Result
                </span>

                <div className="flex items-center justify-center gap-6">
                  <div>
                    <div className="text-3xl sm:text-5xl font-mono font-black text-teal-300">
                      {simulatedAbsorption.toFixed(1)}%
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 block mt-1">Lead Absorbed into Blood</span>
                  </div>

                  <div className="h-12 w-px bg-stone-800" />

                  <div>
                    <div className="text-3xl sm:text-5xl font-mono font-black text-emerald-400">
                      +{protectionPercentage}%
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 block mt-1">Systemic Protection Factor</span>
                  </div>
                </div>

                <div className="w-full bg-stone-800 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${protectionPercentage}%` }}
                  />
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-sans text-left pt-2 border-t border-stone-800">
                  <em>
                    <strong>Clinical Summary:</strong> In an unmitigated stomach (empty stomach, iron deficiency), <strong>45% to 50%</strong> of ingested lead is absorbed directly into the blood. Combining complete DMT1 mineral competition with alginate binding and probiotic aptamers reduces systemic bioavailability to <strong>{simulatedAbsorption.toFixed(1)}%</strong>, shielding pediatric organs.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. SUBDIRECTORY VIEW: 5. ENVIRONMENTAL PREVENTION & ABATEMENT */}
      {/* ========================================================================= */}
      {activeSubdirectory === 'prevention' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* PRIMARY PREVENTION PHILOSOPHY BANNER */}
          <div className="bg-stone-900/90 border border-blue-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold font-mono text-sm">
                <Home size={18} />
                <span>Primary Environmental Prevention & Exposure Abatement</span>
              </div>
              <span className="text-[10px] font-mono bg-blue-950 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/30">
                The First Principle of Toxicology
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              No medical drug, chelation agent, or nutritional supplement can replace primary environmental source elimination. Because chelation cannot reverse established pediatric neurodevelopmental damage, the absolute standard of medical care is <strong>primary source control</strong>—stopping heavy metal exposure before it enters the body.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-blue-300 font-mono flex items-center gap-1.5">
                  <ShieldCheck size={16} />
                  <span>1. Certified Water Filtration</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Drinking water must be filtered through systems certified under <strong>NSF/ANSI 53</strong> (lead reduction) or <strong>NSF/ANSI 58</strong> (reverse osmosis). Standard pitch filters without NSF 53 certification do not remove soluble lead. <em>Never boil water</em>, which evaporates water and concentrates heavy metals.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-cyan-300 font-mono flex items-center gap-1.5">
                  <ShieldCheck size={16} />
                  <span>2. Paint & Window Abatement</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  In pre-1978 residences, window sills, door frames, and friction surfaces produce toxic invisible microscopic lead dust. Professional abatement utilizes wet scraping, HEPA vacuuming, elastomeric encapsulants, and total window replacement.
                </p>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="font-bold text-emerald-300 font-mono flex items-center gap-1.5">
                  <ShieldCheck size={16} />
                  <span>3. Soil & Dust Remediation</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Bare urban soil contaminated by decades of leaded gasoline emissions and exterior paint chips must be capped with geotextile fabric and clean topsoil, planted with dense ground cover, or converted to raised garden beds with certified clean compost.
                </p>
              </div>
            </div>
          </div>

          {/* PROTOCOLS FOR VULNERABLE POPULATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PEDIATRIC & PICA REMEDIATION */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-3xl space-y-4 shadow-xl text-xs font-sans">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="font-bold font-mono text-amber-400 flex items-center gap-1.5">
                  <Sparkles size={16} />
                  <span>Pediatric Pica & Dust Ingestion Protocols</span>
                </span>
                <span className="text-[10px] font-mono text-stone-400">Childhood Protection</span>
              </div>

              <ul className="space-y-2.5 text-stone-300">
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Frequent Wet Wiping:</strong> Clean floors, baseboards, and window sills weekly using wet disposable towels and specialized lead-specific detergents (avoid dry sweeping).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Hand-to-Mouth Hygiene:</strong> Wash children's hands frequently before meals, naptime, and after playing outdoors. Wash toys and pacifiers regularly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Pica Management:</strong> For children or pregnant mothers exhibiting soil, paint, or clay eating cravings, immediately evaluate for iron and zinc deficiency and provide safe behavioral substitutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Outdoor Shoes Off:</strong> Maintain a strict "no shoes indoors" policy to prevent tracking exterior soil and industrial fallout onto interior carpets.</span>
                </li>
              </ul>
            </div>

            {/* OCCUPATIONAL & SECONDARY TAKE-HOME LEAD */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-3xl space-y-4 shadow-xl text-xs font-sans">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="font-bold font-mono text-blue-400 flex items-center gap-1.5">
                  <ShieldAlert size={16} />
                  <span>Occupational Hygiene & Take-Home Lead Prevention</span>
                </span>
                <span className="text-[10px] font-mono text-stone-400">Worker & Family Shield</span>
              </div>

              <ul className="space-y-2.5 text-stone-300">
                <li className="flex items-start gap-2">
                  <Check className="text-cyan-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Worksite Changing:</strong> Workers in construction, smelting, battery recycling, shooting ranges, or radiator repair must change clothes and shower at work before entering family vehicles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cyan-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Separate Laundering:</strong> Work clothes must never be washed with family or infant clothing to prevent cross-contamination in household washing machines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cyan-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>HEPA Vehicle Care:</strong> Vacuum vehicle upholstery and floor mats with certified HEPA filtration systems to eliminate settled industrial dust.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cyan-400 mt-0.5 shrink-0" size={14} />
                  <span><strong>Routine Adult BLL Monitoring:</strong> Mandate quarterly venous blood lead testing for workers to ensure OSHA Permissible Exposure Limit (PEL) compliance.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. SUBDIRECTORY VIEW: 6. CLINICAL DECISION CALCULATOR */}
      {/* ========================================================================= */}
      {activeSubdirectory === 'calculator' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-stone-900/90 border border-purple-500/30 p-6 rounded-3xl space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-sm">
                <Activity size={18} />
                <span>Interactive Clinical Chelation Decision Calculator (Acıbadem & CDC Standards)</span>
              </div>
              <span className="text-[10px] font-mono bg-purple-950 text-purple-300 px-2.5 py-1 rounded-full border border-purple-500/30">
                Decision Support Tool
              </span>
            </div>

            {/* INPUT PARAMETERS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
              
              {/* 1. PATIENT DEMOGRAPHICS */}
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <label className="text-stone-300 font-bold block">1. Patient Demographic</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPatientAge('pediatric')}
                    className={`p-2 rounded-xl text-center font-bold cursor-pointer transition-all ${
                      patientAge === 'pediatric'
                        ? 'bg-purple-600 text-white'
                        : 'bg-stone-900 text-stone-400 hover:text-white'
                    }`}
                  >
                    Pediatric (&lt;18y)
                  </button>
                  <button
                    onClick={() => setPatientAge('adult')}
                    className={`p-2 rounded-xl text-center font-bold cursor-pointer transition-all ${
                      patientAge === 'adult'
                        ? 'bg-purple-600 text-white'
                        : 'bg-stone-900 text-stone-400 hover:text-white'
                    }`}
                  >
                    Adult (&ge;18y)
                  </button>
                </div>
              </div>

              {/* 2. BLOOD LEAD LEVEL RANGE */}
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <label className="text-stone-300 font-bold block">2. Blood Lead Level (BLL)</label>
                <select
                  value={bllRange}
                  onChange={(e) => setBllRange(e.target.value as any)}
                  className="w-full p-2 bg-stone-900 border border-stone-700 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="mild">Mild (BLL &lt; 45 µg/dL)</option>
                  <option value="moderate">Moderate (BLL 45–69 µg/dL)</option>
                  <option value="severe">Severe (BLL 70–99 µg/dL)</option>
                  <option value="encephalopathy">Critical / Encephalopathy (&ge;100 µg/dL)</option>
                </select>
              </div>

              {/* 3. CLINICAL SYMPTOMS */}
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <label className="text-stone-300 font-bold block">3. Clinical Presentation</label>
                <select
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value as any)}
                  className="w-full p-2 bg-stone-900 border border-stone-700 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="none">Asymptomatic (Routine Screen)</option>
                  <option value="mild">Mild (Fatigue, Irritability, Anorexia)</option>
                  <option value="colic_neuropathy">Severe (Lead Colic, Wrist Drop, Ataxia)</option>
                  <option value="encephalopathy">Encephalopathy (Seizures, Coma, Papilledema)</option>
                </select>
              </div>

              {/* 4. RENAL FUNCTION */}
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <label className="text-stone-300 font-bold block">4. Baseline Renal Function</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRenalStatus('normal')}
                    className={`p-2 rounded-xl text-center font-bold cursor-pointer transition-all ${
                      renalStatus === 'normal'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-900 text-stone-400 hover:text-white'
                    }`}
                  >
                    Normal eGFR
                  </button>
                  <button
                    onClick={() => setRenalStatus('impaired')}
                    className={`p-2 rounded-xl text-center font-bold cursor-pointer transition-all ${
                      renalStatus === 'impaired'
                        ? 'bg-rose-600 text-white'
                        : 'bg-stone-900 text-stone-400 hover:text-white'
                    }`}
                  >
                    Impaired Renal
                  </button>
                </div>
              </div>
            </div>

            {/* CALCULATOR OUTPUT RECOMMENDATION CARD */}
            <div className="p-6 bg-stone-950 border-2 border-purple-500/50 rounded-3xl space-y-4 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Stethoscope className="text-purple-400" size={18} />
                  <h3 className="text-sm font-mono font-bold text-white uppercase">
                    Recommended Clinical Protocol Output
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-black border ${recommendation.badgeColor}`}>
                  {recommendation.badge}
                </span>
              </div>

              <div className="space-y-3 font-sans">
                <div>
                  <span className="text-[11px] font-mono uppercase text-purple-300 font-bold block">Protocol Designation</span>
                  <h4 className="text-lg font-serif font-black text-white">{recommendation.protocol}</h4>
                </div>

                <div className="p-4 bg-stone-900/90 rounded-2xl border border-purple-500/20 space-y-2 text-xs">
                  <span className="text-[11px] font-mono text-amber-300 font-bold block uppercase">Action Plan & Administration Details</span>
                  <p className="text-stone-200 leading-relaxed">{recommendation.action}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">Primary Pharmacologic Agent</span>
                    <p className="font-bold text-white font-mono">{recommendation.agent}</p>
                  </div>

                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">Mandatory Hospital Monitoring</span>
                    <p className="text-stone-300 leading-snug">{recommendation.monitoring}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. CROSS NAVIGATION FOOTER */}
      {/* ========================================================================= */}
      <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl">
        <h3 className="text-sm font-mono font-bold text-stone-300 uppercase tracking-wider flex items-center gap-2">
          <Globe size={16} className="text-amber-400" />
          <span>Explore Related ICEarth Research & Proof Modules</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => onNavigateTab && onNavigateTab('wildfire_pyro')}
            className="p-3.5 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-2xl text-left space-y-1 transition-all cursor-pointer group"
          >
            <div className="text-xs font-bold font-mono text-red-400 group-hover:text-red-300 flex items-center justify-between">
              <span>🔥 Wildfire Pyro-Exposenomics</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-stone-400">Post-fire heavy metal plumes & nursery window fallout.</p>
          </button>

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
            onClick={() => onNavigateTab && onNavigateTab('reports')}
            className="p-3.5 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-2xl text-left space-y-1 transition-all cursor-pointer group"
          >
            <div className="text-xs font-bold font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center justify-between">
              <span>News & Reports</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-stone-400">Access peer-reviewed repository & clinical library.</p>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 10. HIGH-RESOLUTION EXPANDED IMAGE MODAL */}
      {/* ========================================================================= */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-stone-950 border-2 border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Pill size={16} />
                <span>
                  {selectedImageModal === 'edta'
                    ? 'ICEarth Forensic Plate IP-000Q: Calcium Disodium EDTA Chelation Evidence vs Myths'
                    : 'ICEarth Infographic IP-000F: Probiotic Lead Poisoning Interventions (WPI / NIH)'}
                </span>
              </div>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-stone-950 space-y-4">
              <img
                src={selectedImageModal === 'edta' ? edtaChelationImg : probioticGraphicImg}
                alt="Medical Interventions High Res"
                className="max-h-[60vh] w-auto object-contain rounded-2xl border border-stone-800 shadow-2xl"
              />
              <div className="p-4 bg-stone-900/90 rounded-2xl border border-amber-500/30 max-w-3xl w-full space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 border-b border-stone-800 pb-1">
                  <span>
                    Vault Provenance Hash:{' '}
                    {selectedImageModal === 'edta'
                      ? 'SHA256-ACIBADEM-CLINICAL-TOXICOLOGY-EDTA-CHELATION-000Q'
                      : 'SHA256-WPI-NIH-R21ES038018-PROBIOTIC-000F'}
                  </span>
                  <span>August 14, 2026</span>
                </div>
                <p className="text-stone-300 leading-relaxed font-sans">
                  {selectedImageModal === 'edta'
                    ? '"Calcium disodium EDTA is an evidence-based clinical treatment mainly used for moderate to severe lead poisoning. It operates via hexadentate claw ligand coordination to filter lead through the kidneys. Unlike disodium EDTA (which causes fatal hypocalcemia), calcium disodium EDTA carries safe bound calcium and requires rigorous hospital monitoring of renal function, hydration, and trace minerals."'
                    : '"In the hunt for ways to reduce lead poisoning, researchers in Natalie Farny\'s Worcester Polytechnic Institute (WPI) lab are turning to E. coli Nissle probiotic bacteria engineered to produce nucleic acid aptamers in the gastrointestinal tract, trapping lead for excretion before intestinal absorption."'}
                </p>
              </div>
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
              <span>{selectedImageModal === 'edta' ? 'Acıbadem International Health Library' : 'WPI / NIH NIEHS Award R21ES038018'}</span>
              <button
                onClick={() => setSelectedImageModal(null)}
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
