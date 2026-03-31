import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SEASONS, MATCHES, filterMatches, competitionsForSeason } from '../data/matches'
import { SHAPES } from '../data/shapes'

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function MatchListPage() {
  const [seasonId, setSeasonId] = useState(SEASONS[0].id)
  const [competition, setCompetition] = useState('all')
  const [shapeId, setShapeId] = useState('all')
  const [scoreBand, setScoreBand] = useState('all')

  const comps = useMemo(() => competitionsForSeason(seasonId), [seasonId])

  const rows = useMemo(
    () => filterMatches(seasonId, competition, shapeId, scoreBand),
    [seasonId, competition, shapeId, scoreBand],
  )

  const totalInSeason = MATCHES.filter((m) => m.seasonId === seasonId).length

  return (
    <div className="page match-list">
      <header className="page__hero">
        <p className="eyebrow">Prototype · analyst-authored segments</p>
        <h1>Tactical timeline</h1>
        <p className="lede">
          Liverpool match list with tactical fingerprints. Pick a match to scrub segments, or filter
          the season by competition, shape, or scoreline context.
        </p>
      </header>

      <section className="panel filters">
        <div className="filters__row">
          <label className="field">
            <span className="field__label">Season</span>
            <select value={seasonId} onChange={(e) => setSeasonId(e.target.value)}>
              {SEASONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field__label">Competition</span>
            <select value={competition} onChange={(e) => setCompetition(e.target.value)}>
              <option value="all">All competitions</option>
              {comps.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="filters__row">
          <label className="field">
            <span className="field__label">Shape used (any segment)</span>
            <select value={shapeId} onChange={(e) => setShapeId(e.target.value)}>
              <option value="all">Any shape</option>
              {SHAPES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.shortLabel} — {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field__label">Scoreline moment</span>
            <select value={scoreBand} onChange={(e) => setScoreBand(e.target.value)}>
              <option value="all">Any context</option>
              <option value="level">Level (any draw state in a segment)</option>
              <option value="leading">Leading in at least one segment</option>
              <option value="trailing">Trailing in at least one segment</option>
            </select>
          </label>
        </div>
        <p className="filters__meta">
          Showing <strong>{rows.length}</strong> of {totalInSeason} matches this season
        </p>
      </section>

      <ul className="match-cards">
        {rows.map((m) => (
          <li key={m.id}>
            <Link to={`/match/${m.id}`} className="match-card">
              <div className="match-card__top">
                <div>
                  <span className="match-card__comp">{m.competition}</span>
                  <h2 className="match-card__title">
                    Liverpool {m.venue === 'H' ? 'vs' : '@'} {m.opponent}
                  </h2>
                  <p className="match-card__meta">
                    {formatDate(m.date)} · {m.venue === 'H' ? 'Anfield' : 'Away'} ·{' '}
                    <span className="match-card__score">
                      {m.scoreLiverpool}–{m.scoreOpponent}
                    </span>
                  </p>
                </div>
                <span className="match-card__chev" aria-hidden>
                  →
                </span>
              </div>
              <div className="match-card__fingerprint">
                <span className="fingerprint__label">Fingerprint</span>
                <div className="fingerprint__shapes">
                  {m.fingerprint.topShapes.map((id) => {
                    const short = SHAPES.find((s) => s.id === id)?.shortLabel ?? id
                    return (
                      <span key={id} className="chip chip--shape">
                        {short}
                      </span>
                    )
                  })}
                </div>
                <ul className="fingerprint__triggers">
                  {m.fingerprint.notableTriggers.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {rows.length === 0 && (
        <p className="empty-state">No matches match these filters. Try widening the criteria.</p>
      )}
    </div>
  )
}
