import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { matchById } from '../data/matches'
import { shapeById } from '../data/shapes'
import { PitchMini } from '../components/PitchMini'

const TABS = ['Timeline', 'Summary', 'Shapes', 'Players / roles']

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function segmentDuration(s) {
  return s.endMin - s.startMin
}

function confidenceClass(c) {
  if (c === 'high') return 'conf conf--high'
  if (c === 'medium') return 'conf conf--med'
  return 'conf conf--low'
}

export function MatchDetailPage() {
  const { matchId } = useParams()
  const match = matchById(matchId)
  const [tab, setTab] = useState(0)
  const [activeSeg, setActiveSeg] = useState(0)
  const [exportDone, setExportDone] = useState(false)

  const totalMin = useMemo(() => {
    if (!match) return 90
    const last = match.segments[match.segments.length - 1]
    return last ? last.endMin : 90
  }, [match])

  const uniqueShapeIds = useMemo(() => {
    if (!match) return []
    const ids = new Set()
    match.segments.forEach((s) => {
      ids.add(s.inPossessionShapeId)
      ids.add(s.outPossessionShapeId)
    })
    return [...ids]
  }, [match])

  const allRoleNotes = useMemo(() => {
    if (!match) return []
    const lines = []
    match.segments.forEach((s, i) => {
      s.roleNotes.forEach((note) => {
        lines.push({ i, range: `${s.startMin}–${s.endMin}′`, note })
      })
    })
    return lines
  }, [match])

  useEffect(() => {
    setActiveSeg(0)
    setTab(0)
  }, [matchId])

  if (!match) {
    return (
      <div className="page">
        <p>Match not found.</p>
        <Link to="/">← Back to matches</Link>
      </div>
    )
  }

  const safeSegIndex = Math.min(activeSeg, Math.max(0, match.segments.length - 1))
  const seg = match.segments[safeSegIndex]

  async function exportSummary() {
    const lines = [
      `${match.competition} · Liverpool ${match.venue === 'H' ? 'vs' : '@'} ${match.opponent}`,
      `${formatDate(match.date)} · ${match.scoreLiverpool}–${match.scoreOpponent}`,
      '',
      'Segments:',
      ...match.segments.map(
        (s, idx) =>
          `${idx + 1}. ${s.startMin}–${s.endMin}′ | ${s.matchContext} | ${s.phaseFocus}\n` +
          `   IP: ${shapeById(s.inPossessionShapeId)?.name ?? s.inPossessionShapeId}\n` +
          `   OOP: ${shapeById(s.outPossessionShapeId)?.name ?? s.outPossessionShapeId}\n` +
          `   Trigger: ${s.trigger}\n` +
          `   Confidence: ${s.confidence}`,
      ),
    ]
    const text = lines.join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setExportDone(true)
      window.setTimeout(() => setExportDone(false), 2500)
    } catch {
      window.prompt('Copy this summary:', text)
    }
  }

  return (
    <div className="page match-detail">
      <nav className="breadcrumb">
        <Link to="/">Matches</Link>
        <span aria-hidden> / </span>
        <span>{match.opponent}</span>
      </nav>

      <header className="match-header">
        <div>
          <p className="eyebrow">{match.competition}</p>
          <h1>
            Liverpool {match.scoreLiverpool}–{match.scoreOpponent} {match.opponent}
          </h1>
          <p className="match-header__sub">
            {formatDate(match.date)} · {match.venue === 'H' ? 'Anfield' : 'Away'}
          </p>
        </div>
        <div className="match-header__actions">
          <button type="button" className="btn btn--secondary" onClick={exportSummary}>
            Export segment summary
          </button>
          {exportDone && <span className="toast-inline">Copied to clipboard</span>}
        </div>
      </header>

      <div className="tabs">
        {TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            className={`tabs__btn${tab === i ? ' tabs__btn--on' : ''}`}
            onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <section className="panel timeline-panel">
          <h2 className="sr-only">Tactical timeline</h2>
          <div className="timeline-bar" role="list">
            {match.segments.map((s, i) => {
              const w = (segmentDuration(s) / totalMin) * 100
              return (
                <button
                  key={i}
                  type="button"
                  role="listitem"
                  className={`timeline-bar__seg${i === safeSegIndex ? ' timeline-bar__seg--on' : ''}`}
                  style={{ width: `${w}%` }}
                  onClick={() => setActiveSeg(i)}
                  title={`${s.startMin}–${s.endMin}′ · ${s.phaseFocus}`}
                >
                  <span className="timeline-bar__inner" />
                </button>
              )
            })}
          </div>
          <div className="timeline-labels">
            {match.segments.map((s, i) => {
              const w = (segmentDuration(s) / totalMin) * 100
              return (
                <div key={i} className="timeline-labels__cell" style={{ width: `${w}%` }}>
                  <span className="timeline-labels__text">{s.startMin}′</span>
                </div>
              )
            })}
          </div>

          <div className="segment-detail">
            <div className="segment-detail__head">
              <div>
                <p className="segment-detail__time">
                  {seg.startMin}–{seg.endMin}′
                </p>
                <h3>{seg.matchContext}</h3>
                <p className="segment-detail__phase">{seg.phaseFocus}</p>
              </div>
              <span className={confidenceClass(seg.confidence)}>{seg.confidence} confidence</span>
            </div>

            <div className="segment-detail__shapes">
              <PitchMini shapeId={seg.inPossessionShapeId} label="In possession" />
              <PitchMini shapeId={seg.outPossessionShapeId} label="Out of possession" />
            </div>

            <div className="segment-detail__block">
              <h4>Trigger</h4>
              <p>{seg.trigger}</p>
            </div>
            <div className="segment-detail__block">
              <h4>Role notes</h4>
              <ul>
                {seg.roleNotes.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
            <p className="disclaimer">
              Interpretation is subjective; segments are analyst-authored placeholders for this
              prototype.
            </p>
          </div>
        </section>
      )}

      {tab === 1 && (
        <section className="panel prose">
          <h2>Match summary</h2>
          <p>
            Liverpool faced <strong>{match.opponent}</strong> in the <strong>{match.competition}</strong>{' '}
            on {formatDate(match.date)} ({match.venue === 'H' ? 'home' : 'away'}), finishing{' '}
            <strong>
              {match.scoreLiverpool}–{match.scoreOpponent}
            </strong>
            .
          </p>
          <p>
            The timeline splits the match into <strong>{match.segments.length} segments</strong> where
            in-possession and out-of-possession shapes stay materially consistent. Use the Timeline
            tab to scrub and read triggers + role notes per segment.
          </p>
          <h3>Notable triggers (fingerprint)</h3>
          <ul>
            {match.fingerprint.notableTriggers.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      {tab === 2 && (
        <section className="panel">
          <h2>Shapes used in this match</h2>
          <ul className="shape-grid-mini">
            {uniqueShapeIds.map((id) => {
              const sh = shapeById(id)
              if (!sh) return null
              return (
                <li key={id} className="shape-grid-mini__item">
                  <PitchMini shapeId={id} label={sh.category} />
                  <p className="shape-grid-mini__desc">{sh.description}</p>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {tab === 3 && (
        <section className="panel">
          <h2>Players / roles</h2>
          <p className="prose">
            Role notes are attached to segments (not full player rosters in this prototype).
          </p>
          <ul className="role-list">
            {allRoleNotes.map((r, i) => (
              <li key={i}>
                <span className="role-list__range">{r.range}</span>
                {r.note}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
