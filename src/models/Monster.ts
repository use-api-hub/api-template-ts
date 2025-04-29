export interface WeaknessInfo {
  element: string;
  stars: number;
  description: string;
}

export interface StatusEffect {
  name: string;
  effectiveness: number;
  description: string;
}

export interface BodyPart {
  name: string;
  weakness: WeaknessInfo[];
  breakable: boolean;
}

export interface Monster {
  id: string;
  name: string;
  type: string;
  description: string;
  habitat: string;
  size_range: {
    min: number;
    max: number;
  };
  weaknesses: WeaknessInfo[];
  status_effects: StatusEffect[];
  body_parts: BodyPart[];
  rewards: string[];
  tips: string[];
}
