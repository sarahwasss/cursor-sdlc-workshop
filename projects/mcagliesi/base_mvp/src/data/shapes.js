/**
 * Canonical shape taxonomy (prototype). Diagram dots are normalized 0–1 on a vertical pitch
 * (own goal bottom, attacking toward top).
 */
export const SHAPES = [
  {
    id: '325-buildup',
    name: '3-2-5 (buildup)',
    shortLabel: '3-2-5',
    category: 'In possession',
    phaseHint: 'Buildup / deep progression',
    description:
      'Three center-backs with a double pivot ahead; wide players stretch the last line while interiors occupy half-spaces.',
    dots: [
      { x: 0.5, y: 0.08 },
      { x: 0.22, y: 0.22 },
      { x: 0.5, y: 0.22 },
      { x: 0.78, y: 0.22 },
      { x: 0.38, y: 0.38 },
      { x: 0.62, y: 0.38 },
      { x: 0.12, y: 0.58 },
      { x: 0.35, y: 0.62 },
      { x: 0.65, y: 0.62 },
      { x: 0.88, y: 0.58 },
      { x: 0.5, y: 0.82 },
    ],
  },
  {
    id: '235-attack',
    name: '2-3-5 (settled attack)',
    shortLabel: '2-3-5',
    category: 'In possession',
    phaseHint: 'Settled attack / final third',
    description:
      'Two build players (often CB + 6 or inverted FB) with a front five: wide high lanes, interiors, and a central reference.',
    dots: [
      { x: 0.35, y: 0.18 },
      { x: 0.65, y: 0.18 },
      { x: 0.2, y: 0.4 },
      { x: 0.5, y: 0.42 },
      { x: 0.8, y: 0.4 },
      { x: 0.08, y: 0.62 },
      { x: 0.32, y: 0.68 },
      { x: 0.5, y: 0.72 },
      { x: 0.68, y: 0.68 },
      { x: 0.92, y: 0.62 },
    ],
  },
  {
    id: '424-press',
    name: '4-2-4 high press',
    shortLabel: '4-2-4 press',
    category: 'Out of possession',
    phaseHint: 'High press',
    description:
      'Front four staggered to cover buildup lanes; second line of two screens central access; fullbacks jump to wide triggers.',
    dots: [
      { x: 0.2, y: 0.78 },
      { x: 0.42, y: 0.85 },
      { x: 0.58, y: 0.85 },
      { x: 0.8, y: 0.78 },
      { x: 0.35, y: 0.62 },
      { x: 0.65, y: 0.62 },
      { x: 0.15, y: 0.45 },
      { x: 0.38, y: 0.38 },
      { x: 0.62, y: 0.38 },
      { x: 0.85, y: 0.45 },
    ],
  },
  {
    id: '442-block',
    name: '4-4-2 mid / low block',
    shortLabel: '4-4-2 block',
    category: 'Out of possession',
    phaseHint: 'Mid or low block',
    description:
      'Compact two banks of four with strikers splitting access to pivot; wide mids tuck to deny half-space entries.',
    dots: [
      { x: 0.18, y: 0.72 },
      { x: 0.38, y: 0.75 },
      { x: 0.62, y: 0.75 },
      { x: 0.82, y: 0.72 },
      { x: 0.12, y: 0.52 },
      { x: 0.35, y: 0.52 },
      { x: 0.65, y: 0.52 },
      { x: 0.88, y: 0.52 },
      { x: 0.4, y: 0.32 },
      { x: 0.6, y: 0.32 },
    ],
  },
  {
    id: 'rest-3plus2',
    name: '3+2 rest defense',
    shortLabel: '3+2 rest',
    category: 'Rest defense',
    phaseHint: 'While attacking — behind the ball',
    description:
      'Three defenders plus two screening mids remain goal-side while the attack develops; wingers may lock rest width.',
    dots: [
      { x: 0.25, y: 0.2 },
      { x: 0.5, y: 0.18 },
      { x: 0.75, y: 0.2 },
      { x: 0.38, y: 0.36 },
      { x: 0.62, y: 0.36 },
    ],
  },
  {
    id: 'counterpress-433',
    name: 'Counter-press 4-3-3 shell',
    shortLabel: 'CP 4-3-3',
    category: 'Transitions',
    phaseHint: 'Counter-press after loss',
    description:
      'Immediate ball-near pressure with a tight triangle around the turnover; wide players pinch to shrink exits.',
    dots: [
      { x: 0.2, y: 0.7 },
      { x: 0.4, y: 0.78 },
      { x: 0.6, y: 0.78 },
      { x: 0.8, y: 0.7 },
      { x: 0.32, y: 0.55 },
      { x: 0.5, y: 0.52 },
      { x: 0.68, y: 0.55 },
      { x: 0.35, y: 0.35 },
      { x: 0.5, y: 0.32 },
      { x: 0.65, y: 0.35 },
    ],
  },
  {
    id: 'def-transition-451',
    name: 'Defensive transition 4-5-1',
    shortLabel: '4-5-1 drop',
    category: 'Transitions',
    phaseHint: 'Defensive transition',
    description:
      'Quick re-establishment of a midfield five in front of the back four; striker delays and curves pressure.',
    dots: [
      { x: 0.18, y: 0.72 },
      { x: 0.38, y: 0.75 },
      { x: 0.62, y: 0.75 },
      { x: 0.82, y: 0.72 },
      { x: 0.1, y: 0.52 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.48 },
      { x: 0.7, y: 0.5 },
      { x: 0.9, y: 0.52 },
      { x: 0.5, y: 0.28 },
    ],
  },
  {
    id: '3142-halfspace',
    name: '3-1-4-2 (half-space occupation)',
    shortLabel: '3-1-4-2',
    category: 'In possession',
    phaseHint: 'Buildup vs high line',
    description:
      'Solo pivot screens with a box of four ahead; two strikers pin the last line while interiors receive between lines.',
    dots: [
      { x: 0.22, y: 0.2 },
      { x: 0.5, y: 0.18 },
      { x: 0.78, y: 0.2 },
      { x: 0.5, y: 0.34 },
      { x: 0.12, y: 0.52 },
      { x: 0.35, y: 0.5 },
      { x: 0.65, y: 0.5 },
      { x: 0.88, y: 0.52 },
      { x: 0.4, y: 0.72 },
      { x: 0.6, y: 0.72 },
    ],
  },
]

export function shapeById(id) {
  return SHAPES.find((s) => s.id === id)
}
