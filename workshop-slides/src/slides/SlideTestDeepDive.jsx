const SlideTestDeepDive = () => (
  <>
    <div className="phase-header">
      <div className="phase-number test">04</div>
      <h2>Test</h2>
    </div>
    <p className="small" style={{ marginBottom: '0.5rem' }}>
      Catching bugs before they ship — and why test coverage stays low despite good intentions
    </p>

    <div className="deepdive-cols">
      <div className="deepdive-col">
        <h3 style={{ color: 'var(--orange)' }}>Discovery Questions</h3>
        <div className="pain-list">
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"What's your current test coverage? Are you happy with it?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"Who writes tests — the same engineer who wrote the feature, or a QA team?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How often do bugs make it to production that tests should have caught?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How long does your CI pipeline take to run? Does it slow down shipping?"</span>
          </div>
        </div>

        <h3 style={{ color: 'var(--red)', marginTop: '0.75rem' }}>Common Pain Points</h3>
        <div className="pain-list">
          <div className="pain-item">
            <span className="pain-icon">📉</span>
            <span className="pain-text"><strong>Low test coverage</strong> — writing tests is tedious, so it gets skipped under deadline pressure. Coverage stays at 20-40%.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">🧪</span>
            <span className="pain-text"><strong>Tests that don't test the right things</strong> — brittle tests that break on refactors but miss real bugs. High maintenance, low value.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">⏱️</span>
            <span className="pain-text"><strong>Slow CI feedback</strong> — 30-60 min pipelines mean devs context-switch away and come back to failures they've already forgotten.</span>
          </div>
        </div>
      </div>

      <div className="deepdive-col">
        <h3 style={{ color: 'var(--orange)' }}>How Cursor Helps</h3>
        <div className="solution-card" style={{ borderColor: 'rgba(203, 75, 22, 0.2)', background: 'linear-gradient(135deg, rgba(203, 75, 22, 0.08), rgba(203, 75, 22, 0.02))' }}>
          <div className="solution-header">
            <span className="solution-icon">🧪</span>
            <span className="solution-title" style={{ color: 'var(--orange)' }}>AI-Generated Tests + Inline Fixing</span>
          </div>
          <div className="solution-steps">
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--orange)' }}>1</span>
              <span>Cursor generates meaningful tests alongside feature code — unit, integration, and edge-case tests based on actual implementation</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--orange)' }}>2</span>
              <span>When tests fail, Cursor reads the failure output and fixes the code or the test — right in the IDE, no context-switching</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--orange)' }}>3</span>
              <span>Background Agents can be tasked with improving test coverage across an entire module while you work on other things</span>
            </div>
          </div>
        </div>

        <div className="competitor-row">
          <span className="competitor-label">Tools today</span>
          <div className="tool-pills">
            <span className="tool-pill">GitHub Actions</span>
            <span className="tool-pill">Jenkins</span>
            <span className="tool-pill">CircleCI</span>
            <span className="tool-pill">Selenium</span>
          </div>
        </div>

        <div className="outcome-callout" style={{ background: 'linear-gradient(135deg, rgba(203, 75, 22, 0.1), rgba(203, 75, 22, 0.03))', borderColor: 'rgba(203, 75, 22, 0.25)' }}>
          <div className="outcome-label" style={{ color: 'var(--orange)' }}>Outcome</div>
          <div className="outcome-text">
            Testing goes from <strong style={{ color: 'var(--orange)' }}>a chore that gets skipped</strong> to something that happens automatically with every feature — coverage goes up without slowing teams down
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SlideTestDeepDive
