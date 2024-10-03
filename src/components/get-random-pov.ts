import povData from "../data/povs.json";

interface WeightedOption {
  value: string;
  weight: number;
}

function getWeightedRandomOption(options: WeightedOption[]): string {
  const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);
  let randomWeight = Math.random() * totalWeight;

  for (const option of options) {
    if (randomWeight < option.weight) {
      return option.value;
    }
    randomWeight -= option.weight;
  }

  // Fallback to the last option if something goes wrong
  return options[options.length - 1].value;
}

export default function getRandomPOV() {
  const randomPOV: Record<string, string> = {};

  for (const [key, values] of Object.entries(povData)) {
    if (Array.isArray(values)) {
      randomPOV[key] = getWeightedRandomOption(values as WeightedOption[]);
    }
  }

  return randomPOV;
}
