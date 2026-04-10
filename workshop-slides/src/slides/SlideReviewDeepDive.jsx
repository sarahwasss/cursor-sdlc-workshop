const SlideReviewDeepDive = () => (
  <>
    <div className="phase-header">
      <div className="phase-number review">05</div>
      <h2>Review</h2>
    </div>
    <p className="small" style={{ marginBottom: '0.5rem' }}>
      Code review is the quality gate — but it's also the biggest queue in the pipeline
    </p>

    <div className="deepdive-cols">
      <div className="deepdive-col">
        <h3 style={{ color: 'var(--green)' }}>Discovery Questions</h3>
        <div className="pain-list">
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How long do PRs sit waiting for review? What's your average time-to-merge?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"How many people need to approve a PR before it merges? Is that bottleneck-ing your senior engineers?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"What kinds of issues do code reviews actually catch? Style nits, logic bugs, security gaps?"</span>
          </div>
          <div className="discovery-card">
            <span className="dq-icon">💬</span>
            <span className="dq-text">"Do you have review standards or checklists, or is it ad-hoc?"</span>
          </div>
        </div>

        <h3 style={{ color: 'var(--red)', marginTop: '0.75rem' }}>Common Pain Points</h3>
        <div className="pain-list">
          <div className="pain-item">
            <span className="pain-icon">⏳</span>
            <span className="pain-text"><strong>Review bottleneck</strong> — PRs sit for days waiting for a senior engineer who's already overloaded. It's the #1 source of development delay.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">🔍</span>
            <span className="pain-text"><strong>Shallow reviews</strong> — reviewers skim large diffs and rubber-stamp. Real bugs slip through because nobody has time to deeply read 500-line PRs.</span>
          </div>
          <div className="pain-item">
            <span className="pain-icon">🎨</span>
            <span className="pain-text"><strong>Bikeshedding</strong> — reviews devolve into style debates instead of catching real issues. Wastes everyone's time and energy.</span>
          </div>
        </div>
      </div>

      <div className="deepdive-col">
        <h3 style={{ color: 'var(--green)' }}>How Cursor Helps</h3>
        <div className="solution-card" style={{ borderColor: 'rgba(133, 153, 0, 0.2)', background: 'linear-gradient(135deg, rgba(133, 153, 0, 0.08), rgba(133, 153, 0, 0.02))' }}>
          <div className="solution-header">
            <span className="solution-icon">🤖</span>
            <span className="solution-title" style={{ color: 'var(--green)' }}>Bugbot + AI-Assisted Review</span>
          </div>
          <div className="solution-steps">
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--green)' }}>1</span>
              <span>Bugbot automatically reviews every PR — catches bugs, security issues, and logic errors that humans miss during quick scans</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--green)' }}>2</span>
              <span>AI-generated PR descriptions and summaries help reviewers understand changes without reading every line</span>
            </div>
            <div className="solution-step">
              <span className="step-num" style={{ background: 'var(--green)' }}>3</span>
              <span>Style and convention issues are caught by rules and linting, not by humans in review — freeing reviewers to focus on logic and architecture</span>
            </div>
          </div>
        </div>

        <div className="competitor-row">
          <span className="competitor-label">Tools today</span>
          <div className="tool-pills">
            <span className="tool-pill">GitHub PRs</span>
            <span className="tool-pill">CodeRabbit</span>
            <span className="tool-pill">SonarQube</span>
          </div>
        </div>

        <div className="outcome-callout" style={{ background: 'linear-gradient(135deg, rgba(133, 153, 0, 0.1), rgba(133, 153, 0, 0.03))', borderColor: 'rgba(133, 153, 0, 0.25)' }}>
          <div className="outcome-label" style={{ color: 'var(--green)' }}>Outcome</div>
          <div className="outcome-text">
            Senior engineers spend <strong style={{ color: 'var(--green)' }}>less time reviewing</strong> while code quality <strong style={{ color: 'var(--green)' }}>goes up</strong> — AI handles the tedious checks so humans focus on what matters
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SlideReviewDeepDive
