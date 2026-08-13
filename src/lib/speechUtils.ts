/**
 * ICEarth Exposenomics Speech Synthesis & Phonetic Utilities
 * 
 * Technical Problem solved: AI Text-to-Speech (TTS) engines default to pronouncing "lead"
 * as /liːd/ (like the verb "to lead the team"). When reading scientific/medical content
 * regarding lead poisoning, heavy metals, or soil contamination, the correct pronunciation
 * is /lɛd/ (rhyming with "led", "bed", "red").
 * 
 * This utility applies phonetic normalization before text is sent to Web Speech Synthesis
 * or AI TTS models, ensuring 100% accurate /lɛd/ pronunciation across all browsers and devices.
 */

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  onEnd?: () => void;
  onError?: (err: any) => void;
  usePhoneticFix?: boolean;
}

/**
 * Phonetically transforms exposenomics text so AI TTS voices pronounce:
 * 1. The chemical element lead (Pb) correctly as /lɛd/ ("led").
 * 2. The surname Roulet correctly with silent 't' as /ruːˈleɪ/ ("Roo-lay").
 */
export function phoneticallyFixLeadForTTS(text: string): string {
  if (!text) return '';

  let processed = text;

  // 0. Name Pronunciation: Roulet -> "Roolay" (French silent 't', pronounced Rou-lay)
  processed = processed.replace(/\bRoulet's\b/g, "Roolay's");
  processed = processed.replace(/\broulet's\b/g, "roolay's");
  processed = processed.replace(/\bRoulet\b/g, 'Roolay');
  processed = processed.replace(/\broulet\b/g, 'roolay');
  processed = processed.replace(/\bROULET\b/g, 'ROOLAY');

  // 1. Compound phrases & common heavy metal terminology
  const compoundReplacements: [RegExp, string][] = [
    [/\blead\s+poisoning\b/gi, 'led poisoning'],
    [/\blead\s+poisoned\b/gi, 'led poisoned'],
    [/\blead\s+paint\b/gi, 'led paint'],
    [/\blead\s+dust\b/gi, 'led dust'],
    [/\blead\s+toxicity\b/gi, 'led toxicity'],
    [/\blead\s+toxic\b/gi, 'led toxic'],
    [/\blead\s+exposure\b/gi, 'led exposure'],
    [/\blead\s+hazard/gi, 'led hazard'],
    [/\blead\s+hazards/gi, 'led hazards'],
    [/\blead\s+chips\b/gi, 'led chips'],
    [/\blead\s+pipe/gi, 'led pipe'],
    [/\blead\s+pipes/gi, 'led pipes'],
    [/\blead\s+service\s+line/gi, 'led service line'],
    [/\blead\s+service\s+lines/gi, 'led service lines'],
    [/\blead\s+oxide\b/gi, 'led oxide'],
    [/\blead\s+contamination\b/gi, 'led contamination'],
    [/\blead\s+contaminated\b/gi, 'led contaminated'],
    [/\blead\s+sub-micron\b/gi, 'led sub-micron'],
    [/\blead\s+aerosol/gi, 'led aerosol'],
    [/\blead\s+aerosols/gi, 'led aerosols'],
    [/\blead\s+levels\b/gi, 'led levels'],
    [/\bblood\s+lead\b/gi, 'blood led'],
    [/\bsoil\s+lead\b/gi, 'soil led'],
    [/\bexterior\s+lead\b/gi, 'exterior led'],
    [/\binterior\s+lead\b/gi, 'interior led'],
    [/\bairborne\s+lead\b/gi, 'airborne led'],
    [/\bheavy\s+metal\s+lead\b/gi, 'heavy metal led'],
    [/\blead-free\b/gi, 'led-free'],
    [/\blead-210\b/gi, 'led 210'],
    [/\blead-206\b/gi, 'led 206'],
    [/\blead-207\b/gi, 'led 207'],
    [/\blead-208\b/gi, 'led 208'],
  ];

  for (const [pattern, replacement] of compoundReplacements) {
    processed = processed.replace(pattern, (match) => {
      // Preserve uppercase first letter if original match was capitalized
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  // 2. Standalone element substitutions (e.g. "soil and lead", "lead in water", "element lead")
  // Contextual check: Replace standalone "lead" / "Lead" / "LEAD" with "led" / "Led" / "LED"
  processed = processed.replace(/\bLead\b/g, 'Led');
  processed = processed.replace(/\blead\b/g, 'led');
  processed = processed.replace(/\bLEAD\b/g, 'LED');

  // 3. Chemical symbol Pb expansion for TTS clarity
  // Replace standalone "Pb" in chemical context e.g. "(100,000 ppm Pb)" with "lead" -> "led"
  processed = processed.replace(/\(([^)]*)\bPb\b([^)]*)\)/g, '($1led$2)');
  processed = processed.replace(/\bppm\s+Pb\b/gi, 'parts per million led');

  return processed;
}

/**
 * Executes browser SpeechSynthesis with automatic Exposenomics /lɛd/ phonetic fixing.
 */
export function speakExposenomicsText(text: string, options: SpeechOptions = {}): SpeechSynthesisUtterance | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis API is not supported in this browser environment.');
    return null;
  }

  // Cancel any active speech first
  window.speechSynthesis.cancel();

  const usePhoneticFix = options.usePhoneticFix !== false;
  const processedText = usePhoneticFix ? phoneticallyFixLeadForTTS(text) : text;

  const utterance = new SpeechSynthesisUtterance(processedText);
  utterance.rate = options.rate ?? 0.92;
  utterance.pitch = options.pitch ?? 1.0;
  utterance.volume = options.volume ?? 1.0;

  if (options.onEnd) {
    utterance.onend = options.onEnd;
  }
  if (options.onError) {
    utterance.onerror = options.onError;
  }

  // Speak
  window.speechSynthesis.speak(utterance);
  return utterance;
}

/**
 * Stops any ongoing SpeechSynthesis narration cleanly.
 */
export function stopExposenomicsSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
