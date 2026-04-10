const SlidePlanDeepDive = () => (
  <>
    <div className="phase-header">
      <div className="phase-number plan">01</div>
      <h2>Plan</h2>
    </div>
    <p className="small" style={{ marginBottom: '0.5rem' }}>
      How teams go from idea to actionable work — and where it breaks down
    </p>

    <div className="deepdive-cols">
      <div className="deepdive-col">
        <h3 style={{ color: 'var(--cyan)' }}>Discovery Questions</h3>
        <div className="pain-list">
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How do you turn a business request into a ticket or spec that an engineer can act on?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How long does it take from 'we want X' to 'an engineer is writing code for X'?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"Who writes specs / PRDs? How much back-and-forth happens before engineering starts?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How often does an engineer start building and realise the spec was unclear or incomplete?"</span>
          </div>
        </div>

        <h3 style={{ color: 'var(--red)', marginTop: '0.75rem' }}>Common Pain Points</h3>
        <div className="pain-list">
          <div className="pain-item">
            <span className="pain-icon">🐢</span>
            <span className="pain-text"><strong>Slow spec handoff</strong> — weeks of meetings, docs, and Slack threads before a single line of code</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">🔄</span>
            <span className="pain-text"><strong>Ambiguous requirements</strong> — PMs describe intent; engineers need precision. Context is lost in translation.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">📋</span>
            <span className="pain-text"><strong>Ticket sprawl</strong> — stories/subtasks multiply, dependencies get tangled, nobody has the full picture</span>
          </div>
        </div>
      </div>

      <div className="deepdive-col">
        <h3 style={{ color: 'var(--cyan)' }}>How Cursor Helps</h3>
        <div className="solution-card">
          <div className="solution-header">
            <span className="solution-icon">⚡</span>
            <span className="solution-title">AI-Assisted Planning</span>
          </div>
          <div className="solution-steps">
            <div className="solution-step">
              <span className="step-num">1</span>
              <span>Describe the feature in natural language — Cursor generates a structured PRD with acceptance criteria, edge cases, and implementation notes</span>
            </div>
            <div className="solution-step">
              <span className="step-num">2</span>
              <span>The PRD lives in the repo (markdown), so it evolves with the code — no stale Confluence pages</span>
            </div>
            <div className="solution-step">
              <span className="step-num">3</span>
              <span>Engineers can ask Cursor to break the PRD into tasks, estimate scope, and identify technical risks before writing code</span>
            </div>
          </div>
        </div>

        <div className="competitor-row">
          <span className="competitor-label">Tools today</span>
          <div className="tool-pills">
            <span className="tool-pill">Jira</span>
            <span className="tool-pill">Linear</span>
            <span className="tool-pill">Notion</span>
            <span className="tool-pill">Confluence</span>
            <span className="tool-pill">GitHub Issues</span>
          </div>
        </div>

        <div className="outcome-callout">
          <div className="outcome-label">Outcome</div>
          <div className="outcome-text">
            Go from idea to actionable, code-ready spec in <strong style={{ color: 'var(--cyan)' }}>minutes instead of weeks</strong> — specs stay in sync with reality because they live next to the code
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SlidePlanDeepDive
