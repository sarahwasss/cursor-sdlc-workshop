const SlideDesignDeepDive = () => (
  <>
    <div className="phase-header">
      <div className="phase-number design">02</div>
      <h2>Design</h2>
    </div>
    <p className="small" style={{ marginBottom: '0.5rem' }}>
      How visual design becomes working code — and why the handoff is so painful
    </p>

    <div className="deepdive-cols">
      <div className="deepdive-col">
        <h3 style={{ color: 'var(--purple)' }}>Discovery Questions</h3>
        <div className="pain-list">
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"Walk me through how a design goes from Figma to production code today."</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How many rounds of back-and-forth happen between designer and engineer before it looks right?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"Do you have a design system? How well does the implemented code match it?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How do designers give feedback on the built version — screenshots, staging links, Loom videos?"</span>
          </div>
        </div>

        <h3 style={{ color: 'var(--red)', marginTop: '0.75rem' }}>Common Pain Points</h3>
        <div className="pain-list">
          <div className="pain-item">
            <span className="pain-icon">🔄</span>
            <span className="pain-text"><strong>Endless iteration loops</strong> — designer mocks it, engineer builds it, designer says "that's not right," repeat 5-10 times</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">🎨</span>
            <span className="pain-text"><strong>Lost design intent</strong> — designers think in visual "vibe"; engineers think in divs and CSS. The translation is inherently lossy.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">⏳</span>
            <span className="pain-text"><strong>Both people blocked</strong> — designer waits for engineer to implement; engineer waits for designer to approve. Two expensive people sitting idle.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">📐</span>
            <span className="pain-text"><strong>Design system drift</strong> — implemented components slowly diverge from the source-of-truth designs. Nobody catches it until it's a mess.</span>
          </div>
        </div>
      </div>

      <div className="deepdive-col">
        <h3 style={{ color: 'var(--purple)' }}>How Cursor Helps</h3>
        <div className="solution-card" style={{ borderColor: 'rgba(108, 113, 196, 0.2)', background: 'linear-gradient(135deg, rgba(108, 113, 196, 0.08), rgba(108, 113, 196, 0.02))' }}>
          <div className="solution-header">
            <span className="solution-icon">🖼️</span>
            <span className="solution-title" style={{ color: 'var(--purple)' }}>Design-to-Code via MCPs</span>
          </div>
          <div className="solution-steps">
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--purple)' }}>1</span>
              <span>Designer finalises the mockup in Figma — pixel-perfect, exactly as they envision it</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--purple)' }}>2</span>
              <span>Cursor uses Figma MCP to read the design and translate it into code that matches the actual codebase's components, tokens, and patterns</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--purple)' }}>3</span>
              <span>The result is a working implementation — not a throwaway prototype — using real components from the design system</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--purple)' }}>4</span>
              <span>Engineer reviews and accepts instead of building from scratch. Designer's intent is preserved end-to-end.</span>
            </div>
          </div>
        </div>

        <div className="competitor-row">
          <span className="competitor-label">Tools today</span>
          <div className="tool-pills">
            <span className="tool-pill">Figma</span>
            <span className="tool-pill">Adobe XD</span>
            <span className="tool-pill">Sketch</span>
            <span className="tool-pill">Storybook</span>
          </div>
        </div>

        <div className="outcome-callout" style={{ background: 'linear-gradient(135deg, rgba(108, 113, 196, 0.1), rgba(108, 113, 196, 0.03))', borderColor: 'rgba(108, 113, 196, 0.25)' }}>
          <div className="outcome-label" style={{ color: 'var(--purple)' }}>Outcome</div>
          <div className="outcome-text">
            From <strong style={{ color: 'var(--purple)' }}>5-10 rounds of revision</strong> down to <strong style={{ color: 'var(--purple)' }}>review and accept</strong>.
            The tight AI feedback loop replaces the slow human telephone game.
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SlideDesignDeepDive
