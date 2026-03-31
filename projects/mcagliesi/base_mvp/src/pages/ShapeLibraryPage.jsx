import { SHAPES } from '../data/shapes'
import { PitchMini } from '../components/PitchMini'

export function ShapeLibraryPage() {
  return (
    <div className="page shape-library">
      <header className="page__hero">
        <p className="eyebrow">Glossary</p>
        <h1>Shape library</h1>
        <p className="lede">
          Canonical shapes used in match timelines. Diagrams are abstract (lo-fi); real product would
          tie these to analyst definitions and optional tracking overlays.
        </p>
      </header>

      <ul className="library-grid">
        {SHAPES.map((s) => (
          <li key={s.id} className="library-card">
            <div className="library-card__top">
              <div>
                <span className="library-card__cat">{s.category}</span>
                <h2>{s.name}</h2>
                <p className="library-card__phase">{s.phaseHint}</p>
              </div>
              <PitchMini shapeId={s.id} label="Pattern" />
            </div>
            <p className="library-card__body">{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
