import { shapeById } from '../data/shapes'

/** Lo-fi vertical pitch diagram (attacking ↑). */
export function PitchMini({ shapeId, label }) {
  const shape = shapeById(shapeId)
  if (!shape) {
    return (
      <div className="pitch-mini pitch-mini--empty">
        <span className="pitch-mini__label">{label}</span>
        <p className="pitch-mini__missing">Unknown shape</p>
      </div>
    )
  }

  return (
    <div className="pitch-mini">
      <span className="pitch-mini__label">{label}</span>
      <svg
        className="pitch-mini__svg"
        viewBox="0 0 100 120"
        role="img"
        aria-label={`${shape.name} diagram`}
      >
        <title>{shape.name}</title>
        <rect x="2" y="2" width="96" height="116" rx="3" className="pitch-mini__grass" />
        <line x1="2" y1="60" x2="98" y2="60" className="pitch-mini__line" />
        <circle cx="50" cy="60" r="8" fill="none" className="pitch-mini__line" />
        <rect x="30" y="4" width="40" height="14" fill="none" className="pitch-mini__line" />
        <rect x="30" y="102" width="40" height="14" fill="none" className="pitch-mini__line" />
        {shape.dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x * 100}
            cy={100 - d.y * 100 + 10}
            r="3.2"
            className="pitch-mini__player"
          />
        ))}
      </svg>
      <p className="pitch-mini__name">{shape.shortLabel}</p>
    </div>
  )
}
