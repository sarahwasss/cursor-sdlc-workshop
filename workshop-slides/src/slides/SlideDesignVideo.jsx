const SlideDesignVideo = () => (
  <>
    <div className="phase-header">
      <div className="phase-number design">02</div>
      <h2>Design — In Practice</h2>
    </div>

    <div className="video-placeholder">
      <span className="vp-icon">🎬</span>
      <span className="vp-title">Customer / SE Video: Design-to-Code Pain</span>
      <span className="vp-desc">
        Short clip of a designer or engineering lead describing the back-and-forth
        between design and implementation — and how Figma MCP eliminated the iteration cycle
      </span>
    </div>

    <div className="outcome-callout" style={{ marginTop: '1rem', background: 'linear-gradient(135deg, rgba(108, 113, 196, 0.1), rgba(108, 113, 196, 0.03))', borderColor: 'rgba(108, 113, 196, 0.25)' }}>
      <div className="outcome-label" style={{ color: 'var(--purple)' }}>Key message</div>
      <div className="outcome-text">
        Imagine describing a visual design to someone over the phone —
        that's what the designer-to-engineer handoff feels like today.
        <strong style={{ color: 'var(--purple)' }}> AI closes that communication gap </strong>
        by translating pixels directly into code.
      </div>
    </div>
  </>
)

export default SlideDesignVideo
