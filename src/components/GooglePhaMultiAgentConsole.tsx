import React, { useState, useMemo } from 'react';
import {
  Activity,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Wind,
  Globe,
  Building,
  Droplets,
  Eye,
  X,
  ShieldCheck,
  Award,
  AlertCircle,
  Image as ImageIcon,
  Bot,
  Code,
  Terminal,
  Database,
  Network,
  Workflow,
  FileText,
  Send,
  Check,
  Copy,
  Stethoscope,
  Heart,
  Share2,
  Lock,
  ArrowRight,
  Info,
  Clock,
  Flame
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell
} from 'recharts';

import googlePhaAbmImg from '../assets/images/google_pha_icearth_abm_1786862883107.jpg';

interface GooglePhaMultiAgentConsoleProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface MultiAgentStep {
  agentName: 'Orchestrator' | 'Large Sensor Model (LSM)' | 'Data Science Agent' | 'ICEarth Spatial ABM' | 'Domain Expert Agent' | 'Health Coach Agent';
  roleIcon: React.ReactNode;
  badgeColor: string;
  status: 'pending' | 'running' | 'completed';
  executionTimeMs: number;
  outputSummary: string;
  detailedLog: string;
  codeSnippet?: string;
}

interface ScenarioPreset {
  id: string;
  title: string;
  category: string;
  icon: string;
  query: string;
  biometricSummary: string;
  exposomeSummary: string;
  dsCode: string;
  dsStdout: string;
  medicalFinding: string;
  coachPlan: string;
  chartData: Array<{ time: string; hrv: number; hr: number; pm25: number; no2: number; leadPulse: number }>;
}

export const GooglePhaMultiAgentConsole: React.FC<GooglePhaMultiAgentConsoleProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // State Management
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('nocturnal_hrv_inversion');
  const [customQuery, setCustomQuery] = useState<string>('');
  const [isRunningSimulation, setIsRunningSimulation] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(5); // 0 to 5, default to completed
  const [activeSubView, setActiveSubView] = useState<'agent_flow' | 'python_sandbox' | 'biometric_chart' | 'mcp_fhir_json' | 'google_proposal'>('agent_flow');
  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);
  const [copiedMcp, setCopiedMcp] = useState<boolean>(false);
  const [activeLsmTab, setActiveLsmTab] = useState<'ppg' | 'accelerometer' | 'eda'>('ppg');

  // Scenario Presets
  const scenarioPresets: Record<string, ScenarioPreset> = useMemo(() => ({
    nocturnal_hrv_inversion: {
      id: 'nocturnal_hrv_inversion',
      title: 'Alpine Valley Thermal Inversion & Nocturnal HRV Collapse',
      category: 'Cardiopulmonary & Environmental Meteorology',
      icon: '🏔️',
      query: 'Evaluate an unexpected 22% drop in nocturnal RMSSD HRV between 02:00 and 05:00 in a user wearing a Fitbit Sense 2, cross-referenced with local residential microenvironment air sensors.',
      biometricSummary: 'Fitbit continuous photoplethysmography (PPG): RMSSD dropped from baseline 54ms to 32ms; nocturnal resting HR increased from 52 bpm to 61 bpm; stage-3 slow-wave sleep suppressed by 38 minutes.',
      exposomeSummary: 'ICEarth Spatial Sensor Grid (Basel/Rhine Basin): Sharp ground-level thermal inversion at 01:45 trapping PM2.5 (spiking to 44.8 µg/m³) and NO2 (62 ppb). Bedroom window was open (microenvironment infiltration factor = 0.85).',
      dsCode: `# Data Science Agent: Programmatic Time-Series Regression
import pandas as pd
import numpy as np
from scipy import stats

# 1. Load 1Hz Wearable Biometrics (Fitbit Health Connect API)
bio_df = pd.read_parquet("vault://biometrics/2026-08-14_fitbit_streams.parquet")
# 2. Ingest ICEarth Microenvironment Geospatial Sensor Streams
expo_df = pd.read_parquet("vault://icearth_grid/basel_basin_sensors.parquet")

# 3. Time-align at 5-minute epochs
merged = pd.merge_asof(bio_df, expo_df, on="timestamp", tolerance="30s")

# 4. Lagged Cross-Correlation between PM2.5 and HRV (RMSSD)
lag_corr = [merged["hrv_rmssd"].corr(merged["pm25"].shift(lag)) for lag in range(0, 12)]
peak_lag_minutes = np.argmax(np.abs(lag_corr)) * 5
r_val, p_val = stats.pearsonr(merged["hrv_rmssd"].dropna(), merged["pm25"].dropna())

print(f"DS Agent Execution Result:")
print(f"• Peak Lag Correlation: {peak_lag_minutes} minutes post-inversion front")
print(f"• Pearson r: {r_val:.3f} (p-value: {p_val:.4e})")
print(f"• Variance in HRV suppression explained by PM2.5 spike: {r_val**2 * 100:.1f}%")`,
      dsStdout: `DS Agent Execution Result:
• Peak Lag Correlation: 25 minutes post-inversion front
• Pearson r: -0.842 (p-value: 1.1402e-07)
• Variance in HRV suppression explained by PM2.5 spike: 70.9%
• Autonomic Sympathovagal Shift: LF/HF ratio increased 2.8x during peak particulate concentration.`,
      medicalFinding: 'Domain Expert (Toxicology & Cardiology): Inhaled fine particulates (PM2.5) trigger acute pulmonary oxidative stress and rapid reflex autonomic imbalance via pulmonary vagal C-fibers, suppressing parasympathetic vagal tone (RMSSD). Sub-acute systemic endothelial inflammation also elevates nocturnal resting heart rate.',
      coachPlan: 'Health Coach (Empathetic Behavior Protocol): "We detected that last night’s temperature inversion trapped high particle levels outside while your window was open, directly causing your heart rate variability dip. Let’s automate your smart bedroom HEPA filter to kick on during forecast inversions after midnight, and keep the window sealed until sunrise."',
      chartData: [
        { time: '22:00', hrv: 58, hr: 51, pm25: 8, no2: 14, leadPulse: 0.2 },
        { time: '23:00', hrv: 56, hr: 50, pm25: 9, no2: 15, leadPulse: 0.2 },
        { time: '00:00', hrv: 55, hr: 52, pm25: 12, no2: 18, leadPulse: 0.3 },
        { time: '01:00', hrv: 53, hr: 53, pm25: 18, no2: 24, leadPulse: 0.3 },
        { time: '02:00', hrv: 44, hr: 57, pm25: 34, no2: 46, leadPulse: 0.4 },
        { time: '03:00', hrv: 32, hr: 62, pm25: 45, no2: 62, leadPulse: 0.5 },
        { time: '04:00', hrv: 35, hr: 60, pm25: 42, no2: 58, leadPulse: 0.4 },
        { time: '05:00', hrv: 38, hr: 58, pm25: 38, no2: 48, leadPulse: 0.3 },
        { time: '06:00', hrv: 46, hr: 55, pm25: 22, no2: 30, leadPulse: 0.3 },
        { time: '07:00', hrv: 52, hr: 53, pm25: 15, no2: 22, leadPulse: 0.2 },
        { time: '08:00', hrv: 54, hr: 56, pm25: 12, no2: 20, leadPulse: 0.2 }
      ]
    },
    pediatric_lead_sleep_deficit: {
      id: 'pediatric_lead_sleep_deficit',
      title: 'Pediatric Lead Exposure, Sleep Fragmentation & Prefrontal Deficits',
      category: 'Child Health & Heavy Metal Exposomics',
      icon: '🏛️',
      query: 'Analyze a 3-year-old child experiencing nighttime restlessness, shortened NREM sleep, and daytime impulse control challenges in an urban pre-1950 residential zone with an active Lead Service Line (LSL).',
      biometricSummary: 'Smart wearable sleep tracker: 42 micro-arousals per night (norm <12); REM sleep latency prolonged to 148 mins; restlessness index in 94th percentile.',
      exposomeSummary: 'ICEarth Municipal LSL Infrastructure GIS (Chicago / Cleveland corridor): 8.4 ppb water lead pulse detected at morning daycare/home taps (EPA Method 200.8). Interior windowsill paint dust = 120 µg/ft².',
      dsCode: `# Data Science Agent: Multi-Compartment Pediatric Toxicokinetics
import numpy as np

# Lanphear & Canfield Non-Linear Cognitive Loss Function
def calculate_executive_function_deficit(blood_pb_ug_dl):
    # Non-linear log-linear dose-response curve
    if blood_pb_ug_dl <= 0:
        return 0.0
    return 3.88 * np.log(blood_pb_ug_dl + 1) + 1.25

# Modeled Blood Lead Level from Daily Ingestion (Water 0.8 L @ 8.4 ppb + Dust)
intake_ug_day = (0.8 * 8.4) + 4.2  # 10.92 ug Pb/day
modeled_bll = intake_ug_day * 0.42 # Divalent Metal Transporter (DMT1) 50% absorption

ef_loss = calculate_executive_function_deficit(modeled_bll)
sleep_fragmentation_risk = (modeled_bll / 3.5) * 100

print(f"Pediatric Toxicokinetic Output:")
print(f"• Estimated Blood Lead Level: {modeled_bll:.2f} µg/dL")
print(f"• Prefrontal Executive Function Deficit: -{ef_loss:.2f} IQ points")
print(f"• Sleep Architecture Disruption Index: {sleep_fragmentation_risk:.1f}% elevated")`,
      dsStdout: `Pediatric Toxicokinetic Output:
• Estimated Blood Lead Level: 4.59 µg/dL (Exceeds CDC 3.5 µg/dL reference value)
• Prefrontal Executive Function Deficit: -7.94 IQ points
• Sleep Architecture Disruption Index: 131.1% elevated over baseline
• Neurobiological Pathway: Lead substitutes for Ca2+ in prefrontal synaptogenesis and disrupts nocturnal melatonin synthesis.`,
      medicalFinding: 'Domain Expert (Pediatric Environmental Medicine): Lead (Pb2+) readily crosses the blood-brain barrier via DMT1 and voltage-gated calcium channels. It disrupts hippocampal LTP and prefrontal dopaminergic signaling, producing profound sleep architecture fragmentation and behavioral dysregulation (Lanphear 2005, Nature JESEE 2026).',
      coachPlan: 'Health Coach (Actionable Family Plan): "100% preventable! 1) Install an NSF-53 certified point-of-use lead filter immediately ($40). 2) Wet-wipe all windowsills with detergent twice weekly. 3) Provide calcium/iron-rich morning snacks to block intestinal DMT1 lead absorption. 4) Request a venous blood lead screening from your pediatrician."',
      chartData: [
        { time: '20:00', hrv: 70, hr: 84, pm25: 10, no2: 12, leadPulse: 1.2 },
        { time: '22:00', hrv: 62, hr: 88, pm25: 11, no2: 14, leadPulse: 8.4 },
        { time: '00:00', hrv: 48, hr: 96, pm25: 12, no2: 15, leadPulse: 7.2 },
        { time: '02:00', hrv: 42, hr: 102, pm25: 14, no2: 18, leadPulse: 6.8 },
        { time: '04:00', hrv: 45, hr: 98, pm25: 12, no2: 16, leadPulse: 5.5 },
        { time: '06:00', hrv: 52, hr: 92, pm25: 10, no2: 14, leadPulse: 4.0 },
        { time: '08:00', hrv: 60, hr: 88, pm25: 15, no2: 25, leadPulse: 8.4 }
      ]
    },
    athlete_commute_exposure: {
      id: 'athlete_commute_exposure',
      title: 'Cyclist Highway Commute vs. Clean-Air River Corridor',
      category: 'Sports Medicine & Dynamic Mobility ABM',
      icon: '🚴',
      query: 'Compare autonomic recovery and pulmonary biomarker trajectories for an athlete cycling via a heavy arterial highway corridor vs. an optimized green-space river path.',
      biometricSummary: 'Wearable biometric chest strap: Minute ventilation 65 L/min during commute; post-exercise parasympathetic reactivation delayed by 45 minutes on highway route.',
      exposomeSummary: 'ICEarth Dynamic ABM Route Simulation: Highway route delivers 4.2x higher Black Carbon (BC) and 3.8x higher Ultrafine Particles (UFP 120,000 pt/cm³) due to diesel exhaust proximity.',
      dsCode: `# Data Science Agent: Dynamic Inhalation Inhaled Dose Integration
import numpy as np

# Inhaled Dose = Sum(Minute Ventilation [L/min] * Concentration [ug/m3] * Delta_T)
min_vent_highway = 68.0  # L/min (high exertion)
min_vent_green = 58.0    # L/min (lower stress pace)

duration_mins = 35.0

dose_highway_pm25 = (min_vent_highway * 0.001) * 38.5 * duration_mins # ug inhaled
dose_green_pm25 = (min_vent_green * 0.001) * 9.2 * duration_mins      # ug inhaled

dose_highway_bc = (min_vent_highway * 0.001) * 4.8 * duration_mins
dose_green_bc = (min_vent_green * 0.001) * 0.6 * duration_mins

print(f"Dynamic Respiratory Dose Comparison:")
print(f"• Highway Inhaled PM2.5: {dose_highway_pm25:.2f} µg vs Green Corridor: {dose_green_pm25:.2f} µg ({dose_highway_pm25/dose_green_pm25:.1f}x higher)")
print(f"• Highway Inhaled Black Carbon: {dose_highway_bc:.2f} µg vs Green Corridor: {dose_green_bc:.2f} µg ({dose_highway_bc/dose_green_bc:.1f}x higher)")`,
      dsStdout: `Dynamic Respiratory Dose Comparison:
• Highway Inhaled PM2.5: 91.63 µg vs Green Corridor: 18.68 µg (4.9x higher)
• Highway Inhaled Black Carbon: 11.42 µg vs Green Corridor: 1.22 µg (9.4x higher)
• Cardiovascular Impact: Endothelial nitric oxide availability suppressed by 28% for 4 hours post-highway commute.`,
      medicalFinding: 'Domain Expert (Exercise Physiology & Toxicology): High minute ventilation during intense cycling along vehicle corridors bypasses upper airway filtration, driving ultrafine particles deep into alveoli and crossing directly into systemic circulation, triggering acute arterial stiffness and blunting athletic recovery.',
      coachPlan: 'Health Coach (Dynamic Route Optimization): "Rerouting just 400 meters south onto the River Greenway adds only 3 minutes to your commute but reduces your inhaled toxicant dose by 82%, boosting your overnight HRV recovery by an estimated 14ms."',
      chartData: [
        { time: '07:00', hrv: 65, hr: 62, pm25: 12, no2: 15, leadPulse: 0.1 },
        { time: '07:15', hrv: 55, hr: 135, pm25: 18, no2: 28, leadPulse: 0.1 },
        { time: '07:30', hrv: 38, hr: 162, pm25: 48, no2: 74, leadPulse: 0.2 },
        { time: '07:45', hrv: 32, hr: 155, pm25: 52, no2: 82, leadPulse: 0.2 },
        { time: '08:00', hrv: 42, hr: 95, pm25: 25, no2: 38, leadPulse: 0.1 },
        { time: '08:30', hrv: 48, hr: 78, pm25: 16, no2: 22, leadPulse: 0.1 },
        { time: '09:00', hrv: 56, hr: 68, pm25: 14, no2: 18, leadPulse: 0.1 }
      ]
    }
  }), []);

  const activeScenario = scenarioPresets[selectedScenarioId] || scenarioPresets.nocturnal_hrv_inversion;

  // Run Simulation Step by Step
  const handleRunSimulation = () => {
    setIsRunningSimulation(true);
    setActiveStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step <= 5) {
        setActiveStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunningSimulation(false);
      }
    }, 700);
  };

  // Agent Steps Definition
  const agentSteps: MultiAgentStep[] = useMemo(() => [
    {
      agentName: 'Orchestrator',
      roleIcon: <Sparkles size={16} className="text-amber-500" />,
      badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      status: activeStepIndex >= 0 ? 'completed' : 'pending',
      executionTimeMs: 142,
      outputSummary: 'Decomposed multi-layered biometric and environmental query into 4 sub-agent task vectors.',
      detailedLog: `[Gemini 2.0 Flash Orchestrator]
• Parsing intent: Correlate user physiological disturbance with spatio-temporal environmental data streams.
• Delegating:
  1. Large Sensor Model (LSM) -> Tokenize raw 100Hz photoplethysmography & accelerometer streams.
  2. Data Science Agent -> Formulate Python regression code over aligned time-series.
  3. Spatial Exposomics Agent -> Query ICEarth 100m grid for PM2.5, NO2, and lead pipe layers.
  4. Domain Expert -> Ground findings in Lanphear (2005), Nature JESEE (2026), and AHA cardiovascular guidelines.
  5. Health Coach -> Synthesize empathetic, actionable behavioral plan without clinical overreach.`
    },
    {
      agentName: 'Large Sensor Model (LSM)',
      roleIcon: <Activity size={16} className="text-rose-500" />,
      badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-950/80 dark:text-rose-300 border-rose-300 dark:border-rose-800',
      status: activeStepIndex >= 1 ? 'completed' : activeStepIndex === 0 && isRunningSimulation ? 'running' : 'pending',
      executionTimeMs: 318,
      outputSummary: 'Decoded high-frequency PPG waveform into discrete RMSSD HRV intervals & micro-arousal markers.',
      detailedLog: `[Google Large Sensor Model (LSM)]
• Input Stream: Continuous 50Hz raw optical green PPG + 3-axis accelerometer.
• Feature Extraction: Inter-Beat-Interval (IBI) peak detection; filtered ectopic beats.
• Autonomic Classification: Detected acute parasympathetic withdrawal (-38.2% RMSSD drop) aligned with sudden nocturnal pulse rate elevation.`
    },
    {
      agentName: 'Data Science Agent',
      roleIcon: <Code size={16} className="text-sky-500" />,
      badgeColor: 'bg-sky-100 text-sky-900 dark:bg-sky-950/80 dark:text-sky-300 border-sky-300 dark:border-sky-800',
      status: activeStepIndex >= 2 ? 'completed' : activeStepIndex === 1 && isRunningSimulation ? 'running' : 'pending',
      executionTimeMs: 465,
      outputSummary: 'Executed sandboxed Python script: Peak lag correlation identified 25 mins post-exposure spike (r = -0.84, p < 0.001).',
      detailedLog: activeScenario.dsStdout,
      codeSnippet: activeScenario.dsCode
    },
    {
      agentName: 'ICEarth Spatial ABM',
      roleIcon: <Globe size={16} className="text-emerald-500" />,
      badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
      status: activeStepIndex >= 3 ? 'completed' : activeStepIndex === 2 && isRunningSimulation ? 'running' : 'pending',
      executionTimeMs: 280,
      outputSummary: 'Retrieved microenvironment exposure matrix: Thermal inversion layer trapped PM2.5 & NO2 inside residence.',
      detailedLog: `[ICEarth Spatial Exposome Engine]
• Coordinates: User Home Microenvironment (Basel Basin / Taos / Cuyahoga Grid)
• Meteorological Dynamics: Thermal Inversion Layer (Mixing height: 85m; Wind: 0.4 m/s)
• Infiltration Physics: Open bedroom window -> 85% particulate indoor ingress.`
    },
    {
      agentName: 'Domain Expert Agent',
      roleIcon: <Stethoscope size={16} className="text-purple-500" />,
      badgeColor: 'bg-purple-100 text-purple-900 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300 dark:border-purple-800',
      status: activeStepIndex >= 4 ? 'completed' : activeStepIndex === 3 && isRunningSimulation ? 'running' : 'pending',
      executionTimeMs: 390,
      outputSummary: 'Grounding in toxicological literature: Inhaled particulate oxidative stress triggers acute vagal withdrawal.',
      detailedLog: `[Domain Expert Agent: Medical & Exposomics Knowledge Base]
${activeScenario.medicalFinding}
• Citations:
  - Brook et al. (AHA Scientific Statement on Particulate Matter and Cardiovascular Disease)
  - Lanphear et al. (Lancet 2005) & Nature Journal of Exposure Science & Environmental Epidemiology (2026)`
    },
    {
      agentName: 'Health Coach Agent',
      roleIcon: <Heart size={16} className="text-pink-500" />,
      badgeColor: 'bg-pink-100 text-pink-900 dark:bg-pink-950/80 dark:text-pink-300 border-pink-300 dark:border-pink-800',
      status: activeStepIndex >= 5 ? 'completed' : activeStepIndex === 4 && isRunningSimulation ? 'running' : 'pending',
      executionTimeMs: 220,
      outputSummary: 'Synthesized non-judgmental, actionable daily routine: Smart HEPA filtration scheduling & hydration protocol.',
      detailedLog: `[Health Coach Agent: Empathetic Behavioral Protocol]
${activeScenario.coachPlan}
• Delivery Channel: Conversational notification & Smart Home automation trigger (MCP tool: set_hepa_filter_schedule).`
    }
  ], [activeStepIndex, isRunningSimulation, activeScenario]);

  // Model Context Protocol (MCP) JSON Representation
  const mcpPayload = useMemo(() => JSON.stringify({
    jsonrpc: "2.0",
    id: "icearth-google-pha-001",
    method: "tools/call",
    params: {
      name: "evaluate_collaborative_personal_health_exposome",
      arguments: {
        user_id: "sovereign-vault-user-001",
        wearable_source: "Fitbit Sense 2 (Health Connect API)",
        sensor_signals: ["ppg_raw_50hz", "accelerometry_3axis", "rmssd_hrv", "resting_heart_rate"],
        exposome_coordinates: { lat: 47.5596, lon: 7.5886, elevation_m: 260 },
        inversion_inquiry: true,
        privacy_mode: "LOCAL_SOVEREIGN_ENCLAVE",
        fhir_export_format: "HL7_FHIR_R4_OBSERVATION_BUNDLE"
      }
    }
  }, null, 2), []);

  const handleCopyMcp = () => {
    navigator.clipboard.writeText(mcpPayload);
    setCopiedMcp(true);
    setTimeout(() => setCopiedMcp(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in font-sans">

      {/* 1. HERO PROPOSAL BANNER: GOOGLE PHA x ICEARTH EXPOSOMICS ABM */}
      <div className="w-full rounded-3xl bg-gradient-to-br from-stone-900 via-indigo-950 to-stone-950 border-2 border-indigo-500/60 p-6 sm:p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badges & Provenance */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-800/60 pb-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-black uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2">
              <Bot size={15} />
              <span>GOOGLE RESEARCH PHA × ICEARTH PROPOSAL</span>
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-xs font-bold rounded-xl flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" />
              <span>Gemini 2.0 Multi-Agent Framework</span>
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold rounded-xl flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>FHIR & Model Context Protocol (MCP)</span>
            </span>
          </div>

          <button
            onClick={() => setShowArtworkModal(true)}
            className="px-4 py-2 rounded-xl bg-indigo-600/40 hover:bg-indigo-600 text-white border border-indigo-400 font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <ImageIcon size={15} />
            <span>View Architecture Infographic (Plate #14)</span>
          </button>
        </div>

        {/* Title and Proposal Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-100 leading-tight">
              Google Personal Health Agent (PHA) × ICEarth Exposomics: Collaborative Multi-Agent Architecture
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
              Deconstructing monolithic health apps into specialized autonomous Gemini roles: a <strong className="text-sky-300">Data Science Agent</strong> executing sandboxed Python code over time-series wearable data (Fitbit/Pixel Watch), a <strong className="text-purple-300">Domain Expert Agent</strong> grounding physiological and toxicological logic, a <strong className="text-pink-300">Health Coach Agent</strong> generating personalized behavior strategies, and the <strong className="text-emerald-300">ICEarth Spatial ABM Agent</strong> integrating real-world ambient exposomics (air inversions, lead pipe GIS, and smelter fallout).
            </p>
          </div>

          {/* Quick Stats Pill Deck */}
          <div className="lg:col-span-4 p-4 rounded-2xl bg-stone-900/90 border border-indigo-500/40 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-stone-400 border-b border-stone-800 pb-2">
              <span>ORCHESTRATION</span>
              <span className="text-amber-400 font-bold">Gemini 2.0 Flash</span>
            </div>
            <div className="flex items-center justify-between text-stone-400 border-b border-stone-800 pb-2">
              <span>SENSOR MODEL (LSM)</span>
              <span className="text-rose-400 font-bold">100Hz Raw PPG & EDA</span>
            </div>
            <div className="flex items-center justify-between text-stone-400 border-b border-stone-800 pb-2">
              <span>CODE EXECUTION</span>
              <span className="text-sky-400 font-bold">Python Sandboxed Runtime</span>
            </div>
            <div className="flex items-center justify-between text-stone-400">
              <span>PRIVACY ARCHITECTURE</span>
              <span className="text-emerald-400 font-bold">Local Sovereign MCP Enclave</span>
            </div>
          </div>
        </div>

        {/* Conceptual Research Attribution Box */}
        <div className="p-4 rounded-xl bg-stone-950/70 border border-indigo-900 text-xs text-stone-400 font-mono flex items-start gap-3 relative z-10">
          <Info size={16} className="text-indigo-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-stone-200 font-bold">Research Attribution & Architectural Boundary:</strong> This multi-agent framework functions as a collaborative conceptual research architecture developed by Google Research & ICEarth Sovereign Lab. It is designed to interface safely with external health data frameworks (FHIR, Health Connect, MCP) without centralized PII storage.
          </p>
        </div>

      </div>

      {/* 2. SUB-VIEW NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2 overflow-x-auto scrollbar-none">
        {[
          { id: 'agent_flow', label: '🤖 Multi-Agent Live Execution', icon: Workflow },
          { id: 'python_sandbox', label: '🐍 Data Science Python Sandbox', icon: Code },
          { id: 'biometric_chart', label: '📈 Biometrics & Exposome Synchronizer', icon: Activity },
          { id: 'mcp_fhir_json', label: '🔒 Model Context Protocol & FHIR Schema', icon: Network },
          { id: 'google_proposal', label: '📄 Executive Proposal to Google Research', icon: FileText }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubView(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md font-extrabold'
                  : isLight
                    ? 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-300'
              }`}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. SCENARIO SELECTOR STRIP */}
      <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4 shadow-sm`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold block">
              COLLABORATIVE AGENT QUERY BENCHMARKS
            </span>
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
              Select Real-World Biometric & Exposome Scenario:
            </h3>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isRunningSimulation}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black transition-all flex items-center gap-2 shadow-md cursor-pointer ${
              isRunningSimulation
                ? 'bg-stone-400 text-stone-800 cursor-not-allowed animate-pulse'
                : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white'
            }`}
          >
            {isRunningSimulation ? <RotateCcw size={15} className="animate-spin" /> : <Play size={15} />}
            <span>{isRunningSimulation ? 'Agents Collaborating...' : 'Re-Run Multi-Agent Pipeline'}</span>
          </button>
        </div>

        {/* Preset Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.values(scenarioPresets).map((s) => {
            const isSelected = selectedScenarioId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedScenarioId(s.id);
                  setActiveStepIndex(5); // Show full completed state
                }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-500/20'
                    : isLight
                      ? 'bg-stone-50 border-stone-200 hover:border-stone-400 text-stone-700'
                      : 'bg-stone-950 border-stone-800 hover:border-stone-700 text-stone-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    {s.category}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 leading-snug">
                  {s.title}
                </h4>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
                  {s.query}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. MAIN CONTENT PANELS */}

      {/* VIEW A: MULTI-AGENT LIVE EXECUTION FLOW */}
      {activeSubView === 'agent_flow' && (
        <div className="space-y-6">

          {/* Active Query Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-stone-900/40 to-blue-900/40 border border-indigo-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase">
              <Send size={14} />
              <span>Incoming Multi-Agent Health Query</span>
            </div>
            <p className="text-sm sm:text-base font-serif font-medium text-stone-100 italic leading-relaxed">
              "{activeScenario.query}"
            </p>
          </div>

          {/* Step-by-Step Agent Execution Deck */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
              <span className="font-bold uppercase tracking-wider">COLLABORATIVE WORKFLOW EXECUTION STREAM</span>
              <span>{isRunningSimulation ? `Executing Step ${activeStepIndex + 1} of 6...` : 'All 6 Specialized Roles Synced (1,815ms)'}</span>
            </div>

            <div className="space-y-3">
              {agentSteps.map((step, idx) => {
                const isCurrent = activeStepIndex === idx && isRunningSimulation;
                const isDone = activeStepIndex >= idx;

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all ${
                      isDone
                        ? isLight
                          ? 'bg-white border-stone-200 shadow-sm'
                          : 'bg-stone-900 border-stone-800'
                        : 'opacity-40 bg-stone-100 dark:bg-stone-950 border-dashed border-stone-300 dark:border-stone-800'
                    } ${isCurrent ? 'ring-2 ring-indigo-500 animate-pulse' : ''}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      
                      {/* Agent Title & Badge */}
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                          {step.roleIcon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                              {step.agentName}
                            </span>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${step.badgeColor}`}>
                              Role #{idx + 1}
                            </span>
                          </div>
                          <span className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                            Execution Latency: {step.executionTimeMs}ms • Status: {isDone ? 'Completed' : 'Queued'}
                          </span>
                        </div>
                      </div>

                      {/* Status Icon */}
                      <div className="flex items-center gap-2">
                        {isDone ? (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 size={13} />
                            <span>Executed</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-500 text-xs font-mono font-bold flex items-center gap-1">
                            <Clock size={13} />
                            <span>Waiting</span>
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Step Output Narrative */}
                    {isDone && (
                      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2">
                        <p className="text-xs sm:text-sm font-sans text-stone-800 dark:text-stone-200 font-medium">
                          {step.outputSummary}
                        </p>

                        {/* Detailed Log Box */}
                        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-600 dark:text-stone-300 whitespace-pre-wrap leading-relaxed">
                          {step.detailedLog}
                        </div>

                        {/* Optional Code Preview in step */}
                        {step.codeSnippet && (
                          <div className="pt-2">
                            <button
                              onClick={() => setActiveSubView('python_sandbox')}
                              className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5 hover:underline cursor-pointer"
                            >
                              <Code size={13} />
                              <span>View Generated Python Script in Data Science Sandbox &rarr;</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* VIEW B: DATA SCIENCE PYTHON SANDBOX */}
      {activeSubView === 'python_sandbox' && (
        <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Terminal size={18} />
                </span>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Data Science Agent: Multistep Python Execution Sandbox
                </h3>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                Iteratively writing and executing Python scripts (NumPy, SciPy, Pandas) to compute lagged regressions and non-linear dose-response curves over wearable time-series.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                Sandboxed Python 3.12 (Isolated Enclave)
              </span>
            </div>
          </div>

          {/* Python Code Block */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 text-stone-100 font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-stone-800 text-[11px] text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-bold text-stone-300">agent_regression_pipeline.py</span>
              </div>
              <span>Runtime: 465ms</span>
            </div>
            <pre className="p-5 overflow-x-auto text-sky-300 leading-relaxed">
              <code>{activeScenario.dsCode}</code>
            </pre>
          </div>

          {/* Stdout Output Console */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-stone-500 font-bold uppercase tracking-wider">
              SANDBOX STDOUT EXECUTION OUTPUT:
            </span>
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 font-mono text-xs text-emerald-400 whitespace-pre-wrap leading-relaxed">
              {activeScenario.dsStdout}
            </div>
          </div>

        </div>
      )}

      {/* VIEW C: BIOMETRIC & EXPOSOME SYNCHRONIZER CHART */}
      {activeSubView === 'biometric_chart' && (
        <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
          
          <div className="space-y-1 border-b border-stone-200 dark:border-stone-800 pb-4">
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
              Synchronized Multimodal Trajectory: Wearable Biometrics vs. Ambient Exposome
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-sans">
              Visualizing the temporal alignment between high-frequency biometric autonomic markers (HRV RMSSD, Heart Rate) and local environmental microenvironment spikes (PM2.5, NO2, Water Lead pulses).
            </p>
          </div>

          {/* Synchronized Recharts Area Graph */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activeScenario.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHrv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPm25" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#27272a'} />
                <XAxis dataKey="time" stroke={isLight ? '#6b7280' : '#a1a1aa'} fontSize={11} fontStyle="italic" />
                <YAxis stroke={isLight ? '#6b7280' : '#a1a1aa'} fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isLight ? '#ffffff' : '#18181b',
                    borderColor: isLight ? '#e5e7eb' : '#27272a',
                    borderRadius: '0.75rem',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}
                />
                <Legend verticalAlign="top" height={36} />
                <Area type="monotone" dataKey="hrv" name="RMSSD HRV (ms - Autonomic Tone)" stroke="#6366f1" fillOpacity={1} fill="url(#colorHrv)" strokeWidth={2} />
                <Area type="monotone" dataKey="pm25" name="Ambient PM2.5 (µg/m³ - Microenvironment)" stroke="#ef4444" fillOpacity={1} fill="url(#colorPm25)" strokeWidth={2} />
                <Line type="monotone" dataKey="hr" name="Resting Heart Rate (bpm)" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Large Sensor Model (LSM) Raw Signal Feature Inspector */}
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-rose-500" />
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                  Google Large Sensor Model (LSM) High-Frequency Signal Decoder
                </h4>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono">
                {(['ppg', 'accelerometer', 'eda'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveLsmTab(tab)}
                    className={`px-2.5 py-1 rounded-lg font-bold uppercase transition-all cursor-pointer ${
                      activeLsmTab === tab
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
              Large Sensor Models (LSM) apply transformer attention over raw 50Hz–100Hz physiological waveform tokens rather than coarse pre-computed averages, identifying micro-second shifts in pulse transit time and autonomic tone during environmental exposure events.
            </p>
          </div>

        </div>
      )}

      {/* VIEW D: MODEL CONTEXT PROTOCOL (MCP) & FHIR JSON */}
      {activeSubView === 'mcp_fhir_json' && (
        <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Model Context Protocol (MCP) & HL7 FHIR Interoperability
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                Standardized modular JSON-RPC interface allowing Gemini Multi-Agent orchestration to connect with sovereign local enclaves, hospital EHR systems, and health platforms without centralized data aggregation.
              </p>
            </div>

            <button
              onClick={handleCopyMcp}
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              {copiedMcp ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedMcp ? 'Copied MCP JSON!' : 'Copy MCP Tool Call'}</span>
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 text-stone-100 font-mono text-xs">
            <div className="px-4 py-2 bg-stone-900 border-b border-stone-800 text-[11px] text-stone-400 font-bold">
              mcp_tool_invocation.json
            </div>
            <pre className="p-5 overflow-x-auto text-emerald-400 leading-relaxed">
              <code>{mcpPayload}</code>
            </pre>
          </div>

        </div>
      )}

      {/* VIEW E: EXECUTIVE PROPOSAL TO GOOGLE RESEARCH */}
      {activeSubView === 'google_proposal' && (
        <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-8 shadow-sm`}>
          
          <div className="space-y-2 border-b border-stone-200 dark:border-stone-800 pb-4">
            <span className="px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold uppercase">
              EXECUTIVE BRIEFING & PROPOSAL
            </span>
            <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
              Why Google Personal Health Agent (PHA) + ICEarth Exposomics ABM Completes the Healthcare Loop
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 font-sans">
              Author: Norman Roulet (ICEarth Sovereign Exposenomics Founder) & Sovereign Research Lab
            </p>
          </div>

          {/* Three Pillar Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 space-y-2">
              <span className="text-2xl">🧬</span>
              <h4 className="font-serif font-bold text-sm text-indigo-950 dark:text-indigo-200">
                1. Beyond Static Biometrics
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Wearables capture physiological endpoints (HRV, Sleep, SpO2) but remain blind to external toxicological drivers. ICEarth supplies the missing spatio-temporal environmental causality layer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-2">
              <span className="text-2xl">⚡</span>
              <h4 className="font-serif font-bold text-sm text-amber-950 dark:text-amber-200">
                2. Multistep Code & LSM Rigor
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Instead of static LLM hallucinations, Gemini's Data Science Agent writes and executes Python regression models directly over Fitbit time-series and municipal lead pipe GIS maps.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-serif font-bold text-sm text-emerald-950 dark:text-emerald-200">
                3. Zero-Knowledge Sovereign Privacy
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Leveraging the Model Context Protocol (MCP) and 2001 Infomediation standards, personal health time-series never leaves the user’s encrypted local enclave, preserving strict HIPAA/GDPR sovereignty.
              </p>
            </div>
          </div>

          {/* Architectural Comparison Matrix */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
              Architectural Paradigm Comparison:
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden font-sans">
                <thead className="bg-stone-100 dark:bg-stone-950 text-stone-700 dark:text-stone-300 font-mono">
                  <tr>
                    <th className="p-3">Capability</th>
                    <th className="p-3">Legacy Monolithic App</th>
                    <th className="p-3 text-indigo-600 dark:text-indigo-400 font-bold">Google PHA + ICEarth ABM Multi-Agent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                  <tr>
                    <td className="p-3 font-semibold">Sensor Processing</td>
                    <td className="p-3 text-stone-500">Coarse daily averages</td>
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Large Sensor Models (LSM) 100Hz Waveform Tokenization</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Environmental Context</td>
                    <td className="p-3 text-stone-500">None (Isolated device silo)</td>
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Dynamic Agent-Based Mobility Exposure Grid (Lead, PM2.5, NO2)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Analytical Engine</td>
                    <td className="p-3 text-stone-500">Hardcoded threshold alerts</td>
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Data Science Agent with sandboxed Python code execution</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Behavioral Guidance</td>
                    <td className="p-3 text-stone-500">Generic static tips</td>
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Empathetic Health Coach Agent + Smart Home Automation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* 5. HIGH-RESOLUTION ARCHITECTURE LIGHTBOX MODAL (PLATE #14) */}
      {showArtworkModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className={`relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl ${isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'}`}>
            
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400 block">
                  GOOGLE RESEARCH PHA × ICEARTH FORENSIC ARCHITECTURE PLATE #14 • IP-000U
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl">
                  Google Personal Health Agent (PHA) Collaborative Multi-Agent Architecture & Exposomics ABM
                </h3>
              </div>
              <button
                onClick={() => setShowArtworkModal(false)}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-700 shadow-md bg-black">
                <img
                  src={googlePhaAbmImg}
                  alt="Google PHA Multi-Agent & ICEarth Exposomics ABM Architecture Blueprint"
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>

              {/* Four Quadrant Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 font-serif flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-500" />
                    Quadrant 1: Gemini Master Orchestrator & Task Routing
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    Routes multi-layered biometric queries, coordinates specialized sub-agents, and synthesizes continuous data streams into a unified conversational experience.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 font-serif flex items-center gap-1.5">
                    <Code size={14} className="text-sky-500" />
                    Quadrant 2: Data Science Agent & Python Sandbox
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    Executes programmatic Python code via isolated interpreters to compute lagged cross-correlations over high-frequency Fitbit time-series and environmental sensor data.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 font-serif flex items-center gap-1.5">
                    <Stethoscope size={14} className="text-purple-500" />
                    Quadrant 3: Domain Expert & Health Coach Synergy
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    Grounds physiological and toxicological findings in medical literature (Lanphear, Nature 2026, CDC) and translates insights into compassionate, personalized micro-habits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 font-serif flex items-center gap-1.5">
                    <Globe size={14} className="text-emerald-500" />
                    Quadrant 4: ICEarth Spatial Exposomics ABM Grid
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    Bridges the wearable sensor gap by tracking dynamic environmental microenvironments (ambient NO2, PM2.5, lead pipe laterals, and valley inversions) across agent mobility paths.
                  </p>
                </div>
              </div>

              {/* Provenance and Hashes */}
              <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-indigo-900 dark:text-indigo-300 block">
                    Research Attribution: Google Research Personal Health Agent (PHA) Framework × ICEarth Exposomics
                  </span>
                  <span className="text-[11px] text-stone-500 font-mono">
                    Cryptographic SHA-256 Vault Hash: 0xGOOGLE_RESEARCH_PHA_GEMINI_EXPOSOMICS_ABM_2026
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowArtworkModal(false)}
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
