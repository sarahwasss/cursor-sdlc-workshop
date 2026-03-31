/** Mock season data — illustrative only, not real match analysis. */

export const SEASONS = [{ id: '2024-25', label: '2024–25' }]

const seg = (
  startMin,
  endMin,
  matchContext,
  scoreBand,
  phaseFocus,
  inId,
  outId,
  roleNotes,
  trigger,
  confidence,
) => ({
  startMin,
  endMin,
  matchContext,
  scoreBand,
  phaseFocus,
  inPossessionShapeId: inId,
  outPossessionShapeId: outId,
  roleNotes,
  trigger,
  confidence,
})

export const MATCHES = [
  {
    id: 'm-pl-mci',
    seasonId: '2024-25',
    date: '2024-11-30',
    opponent: 'Manchester City',
    competition: 'Premier League',
    venue: 'H',
    scoreLiverpool: 2,
    scoreOpponent: 0,
    fingerprint: {
      topShapes: ['325-buildup', '424-press', '235-attack'],
      notableTriggers: ['Goal 1-0 → deeper block spell', 'HT team instruction'],
    },
    segments: [
      seg(0, 22, 'Level 0-0', 'level', 'Buildup', '325-buildup', '424-press', ['RB inverts to make 3rd CB', 'Double pivot staggered'], 'Kickoff plan', 'high'),
      seg(22, 38, 'Level 0-0', 'level', 'High press', '235-attack', '424-press', ['Front four jump on GK', 'Wide press traps'], 'City buildup rhythm', 'medium'),
      seg(38, 52, 'Leading 1-0', 'leading', 'Rest defense + attack', '235-attack', 'rest-3plus2', ['3+2 behind ball in settled attack', 'LB holds width rest'], 'Goal — Liverpool score', 'high'),
      seg(52, 68, 'Leading 1-0', 'leading', 'Mid block', '3142-halfspace', '442-block', ['Line of engagement drops ~8m', 'Wingers tuck to mids'], 'Fatigue / control phase', 'medium'),
      seg(68, 84, 'Leading 2-0', 'leading', 'Counter-press moments', '235-attack', 'counterpress-433', ['Immediate 5v5 around ball', 'Wide pinch on turnovers'], 'Second goal', 'high'),
      seg(84, 95, 'Leading 2-0', 'leading', 'Low block spells', '325-buildup', '442-block', ['CBs narrow', 'ST splits pivot access'], 'Late game management', 'medium'),
    ],
  },
  {
    id: 'm-pl-ars',
    seasonId: '2024-25',
    date: '2024-12-21',
    opponent: 'Arsenal',
    competition: 'Premier League',
    venue: 'A',
    scoreLiverpool: 1,
    scoreOpponent: 1,
    fingerprint: {
      topShapes: ['442-block', '325-buildup', 'counterpress-433'],
      notableTriggers: ['Arsenal changes front press shape', 'Equalizer'],
    },
    segments: [
      seg(0, 18, 'Level 0-0', 'level', 'Buildup', '325-buildup', '424-press', ['6 drops between CBs vs aggressive line'], 'Away plan', 'high'),
      seg(18, 35, 'Level 0-0', 'level', 'High press / transitions', '235-attack', 'counterpress-433', ['Turnovers in midfield third', 'Quick wide switches'], 'Open play intensity', 'medium'),
      seg(35, 52, 'Trailing 0-1', 'trailing', 'Defensive transition', '3142-halfspace', 'def-transition-451', ['Immediate 4-5-1 after conceding', 'ST curves press'], 'Opponent goal', 'high'),
      seg(52, 71, 'Trailing 0-1', 'trailing', 'Buildup to attack', '325-buildup', '442-block', ['More direct to wide forwards', 'Less central risk'], 'Chasing equalizer', 'medium'),
      seg(71, 90, 'Level 1-1', 'level', 'Mixed block / press', '235-attack', '442-block', ['Selective jumps on CB carries', 'Compact mid block default'], 'Liverpool equalizer', 'high'),
    ],
  },
  {
    id: 'm-ucl-lev',
    seasonId: '2024-25',
    date: '2025-01-21',
    opponent: 'Bayer Leverkusen',
    competition: 'UEFA Champions League',
    venue: 'H',
    scoreLiverpool: 4,
    scoreOpponent: 1,
    fingerprint: {
      topShapes: ['235-attack', '325-buildup', '424-press'],
      notableTriggers: ['Early press success', 'Subs refresh wide roles'],
    },
    segments: [
      seg(0, 25, 'Level 0-0', 'level', 'High press + buildup', '325-buildup', '424-press', ['Man-oriented jumps wide', 'Pivot screens central'], 'UCL tempo', 'medium'),
      seg(25, 45, 'Leading 2-0', 'leading', 'Settled attack', '235-attack', 'rest-3plus2', ['Front five pins back line', 'Interiors recycle'], 'Two-goal cushion', 'high'),
      seg(45, 60, 'Leading 2-0', 'leading', 'Mid block', '3142-halfspace', '442-block', ['Less aggressive rest press', 'Halfspace occupation'], 'Half-time adjustment', 'medium'),
      seg(60, 78, 'Leading 3-1', 'leading', 'Transitions', '235-attack', 'counterpress-433', ['Opponent goal → immediate reaction', 'Wide overloads'], 'Conceded then stabilized', 'medium'),
      seg(78, 93, 'Leading 4-1', 'leading', 'Low block / counters', '325-buildup', '442-block', ['CBs step into midfield sparingly', 'ST channel runs'], 'Late subs', 'low'),
    ],
  },
  {
    id: 'm-pl-eve',
    seasonId: '2024-25',
    date: '2025-02-12',
    opponent: 'Everton',
    competition: 'Premier League',
    venue: 'A',
    scoreLiverpool: 2,
    scoreOpponent: 2,
    fingerprint: {
      topShapes: ['442-block', '325-buildup', 'def-transition-451'],
      notableTriggers: ['Derby intensity', 'Red card opponent 10v11'],
    },
    segments: [
      seg(0, 30, 'Level 0-0', 'level', 'Buildup', '325-buildup', '424-press', ['FBs high rest in buildup', 'Pivot rotates'], 'Derby start', 'high'),
      seg(30, 55, 'Level 1-1', 'level', 'Transitions both ways', '235-attack', 'counterpress-433', ['Chaotic second balls', 'Wide 1v1s'], 'Goals exchanged', 'medium'),
      seg(55, 67, 'Leading 2-1', 'leading', 'Low block', '325-buildup', '442-block', ['Narrow defensive shape', 'ST holds channel'], 'Liverpool ahead', 'high'),
      seg(67, 82, 'Level 2-2', 'level', 'Defensive transition', '3142-halfspace', 'def-transition-451', ['Quick drop after conceding', 'Mids slide toward ball side'], 'Equalizer', 'high'),
      seg(82, 95, 'Level 2-2', 'level', 'Press + block mix', '235-attack', '442-block', ['Late winner chase', 'Risk on corners'], 'Final push', 'medium'),
    ],
  },
  {
    id: 'm-fa-ply',
    seasonId: '2024-25',
    date: '2025-02-09',
    opponent: 'Plymouth Argyle',
    competition: 'FA Cup',
    venue: 'A',
    scoreLiverpool: 1,
    scoreOpponent: 0,
    fingerprint: {
      topShapes: ['325-buildup', '235-attack', '442-block'],
      notableTriggers: ['Low block opponent', 'Rotation XI'],
    },
    segments: [
      seg(0, 40, 'Level 0-0', 'level', 'Buildup vs low block', '325-buildup', '442-block', ['Wide CB diagonals', '8s in half-spaces'], 'Cup rotation', 'medium'),
      seg(40, 75, 'Level 0-0', 'level', 'Settled attack', '235-attack', '442-block', ['Overload RHS', 'Underlap from CM'], 'Breaking compact block', 'medium'),
      seg(75, 90, 'Leading 1-0', 'leading', 'Game management', '3142-halfspace', '442-block', ['Safer central exits', 'Less rest height'], 'Goal + see out', 'high'),
    ],
  },
  {
    id: 'm-pl-che',
    seasonId: '2024-25',
    date: '2025-03-05',
    opponent: 'Chelsea',
    competition: 'Premier League',
    venue: 'H',
    scoreLiverpool: 1,
    scoreOpponent: 0,
    fingerprint: {
      topShapes: ['424-press', '325-buildup', 'rest-3plus2'],
      notableTriggers: ['Chelsea buildup focus', 'Late sub tightens mid'],
    },
    segments: [
      seg(0, 20, 'Level 0-0', 'level', 'High press', '235-attack', '424-press', ['Jump on wide CB', 'Cover shadow on 6'], 'Opening press', 'high'),
      seg(20, 45, 'Level 0-0', 'level', 'Buildup + rest', '325-buildup', 'rest-3plus2', ['Inverted RB tucks', 'LW high pin'], 'Control spell', 'medium'),
      seg(45, 70, 'Leading 1-0', 'leading', 'Mid / low block', '3142-halfspace', '442-block', ['Less aggressive rest', 'Compact 40m zone'], 'Goal', 'high'),
      seg(70, 95, 'Leading 1-0', 'leading', 'Mixed', '325-buildup', 'counterpress-433', ['Sub: fresh legs on wing', 'Selective jumps'], 'Subs', 'medium'),
    ],
  },
  {
    id: 'm-pl-new',
    seasonId: '2024-25',
    date: '2025-03-16',
    opponent: 'Newcastle United',
    competition: 'Premier League',
    venue: 'A',
    scoreLiverpool: 3,
    scoreOpponent: 2,
    fingerprint: {
      topShapes: ['235-attack', 'counterpress-433', '442-block'],
      notableTriggers: ['End-to-end spell', 'Lead changes'],
    },
    segments: [
      seg(0, 15, 'Level 0-0', 'level', 'Press', '235-attack', '424-press', ['ST splits CBs', 'Wide mids jump'], 'Away press', 'medium'),
      seg(15, 35, 'Trailing 0-1', 'trailing', 'Defensive transition', '325-buildup', 'def-transition-451', ['Drop and reset', 'Direct wide'], 'Conceded', 'high'),
      seg(35, 55, 'Level 1-1', 'level', 'Transitions', '235-attack', 'counterpress-433', ['High regains in opp half', 'Quick verticals'], 'Equalizer', 'high'),
      seg(55, 72, 'Leading 2-1', 'leading', 'Rest + attack', '235-attack', 'rest-3plus2', ['3+2 visible in settled play', 'FB tucks in rest'], 'Go-ahead goal', 'medium'),
      seg(72, 90, 'Leading 3-2', 'leading', 'Low block + counters', '325-buildup', '442-block', ['Narrow mids', 'ST isolates channel'], 'Late chaos', 'low'),
    ],
  },
  {
    id: 'm-ucl-psv',
    seasonId: '2024-25',
    date: '2024-12-10',
    opponent: 'PSV Eindhoven',
    competition: 'UEFA Champions League',
    venue: 'A',
    scoreLiverpool: 3,
    scoreOpponent: 1,
    fingerprint: {
      topShapes: ['325-buildup', '235-attack', '424-press'],
      notableTriggers: ['Group stage rotation', 'Wide overloads'],
    },
    segments: [
      seg(0, 30, 'Level 0-0', 'level', 'Buildup', '325-buildup', '424-press', ['CB carries step in', 'Wingers narrow to receive'], 'Rotation side', 'medium'),
      seg(30, 60, 'Leading 2-0', 'leading', 'Attack + rest', '235-attack', 'rest-3plus2', ['Sustained final-third presence', 'Recycle in U'], 'Two-goal lead', 'high'),
      seg(60, 90, 'Leading 3-1', 'leading', 'Mixed', '3142-halfspace', '442-block', ['Youth minutes adjust roles', 'Less aggressive press'], 'Second half', 'low'),
    ],
  },
]

export function matchById(id) {
  return MATCHES.find((m) => m.id === id)
}

export function competitionsForSeason(seasonId) {
  const set = new Set()
  MATCHES.filter((m) => m.seasonId === seasonId).forEach((m) => set.add(m.competition))
  return [...set].sort()
}

/** @param {'all' | string} competition */
export function filterMatches(seasonId, competition, shapeId, scoreBand) {
  return MATCHES.filter((m) => {
    if (m.seasonId !== seasonId) return false
    if (competition !== 'all' && m.competition !== competition) return false
    if (shapeId !== 'all') {
      const has = m.segments.some(
        (s) => s.inPossessionShapeId === shapeId || s.outPossessionShapeId === shapeId,
      )
      if (!has) return false
    }
    if (scoreBand !== 'all') {
      const has = m.segments.some((s) => s.scoreBand === scoreBand)
      if (!has) return false
    }
    return true
  })
}
