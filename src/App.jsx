import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* STICKY ALERT BAR - Creates urgency */}
      <div className="alert-bar">
        <div className="alert-bar-content">
          <p className="alert-bar-text">🎯 LIMITED TIME: Upgrade to VIP Before Registration Closes</p>
          <div className="alert-bar-progress">
            <div className="alert-bar-progress-fill" style={{ width: `${scrollProgress}%` }}></div>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      {/* TECHNIQUE 1: Asymmetric 60/40 grid */}
      {/* TECHNIQUE 4: Dramatic scale - VIP at 120px */}
      {/* TECHNIQUE 7: Curved arrow (implemented in CSS) */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge-wrapper">
              <span className="badge badge-teal">
                <span>✨ ONE-TIME OPPORTUNITY</span>
              </span>
            </div>

            <h1 className="hero-h1">
              You're <span className="text-gradient">Already In.</span>
              <span className="vip-highlight">Now Go VIP.</span>
            </h1>

            {/* TECHNIQUE 7: Curved arrow connecting to price */}
            <svg className="curved-arrow" width="200" height="120" viewBox="0 0 200 120" fill="none">
              <path
                d="M20 20 Q 80 60, 140 100"
                stroke="#E85C7B"
                strokeWidth="2"
                strokeOpacity="0.5"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M135 95 L 140 100 L 135 105"
                stroke="#E85C7B"
                strokeWidth="2"
                strokeOpacity="0.5"
                fill="none"
              />
            </svg>

            <p className="hero-subhead">
              The <strong>Boring Business Challenge</strong> is your ticket to a 7-figure strategy.
              But the <strong className="text-vip-pink">Launch-Ready VIP Experience</strong> is where strategy
              becomes <em>reality</em> — with personalized feedback, accountability, and a clear path forward.
            </p>

            <ul className="hero-bullets">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#A8B5A4" opacity="0.3"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="#2F5F61" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span><strong>FREE Ticket:</strong> You get the strategy challenge (amazing start!)</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#D4AF37" opacity="0.4"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="#8B2635" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span><strong>VIP Ticket:</strong> You get strategy + implementation + personalized feedback</span>
              </li>
            </ul>
          </div>

          {/* TECHNIQUE 6: Layout with overlapping card (40% width) */}
          <div className="hero-right">
            <div className="price-card">
              <div className="price-card-header">
                <span className="price-card-badge">VIP UPGRADE</span>
                <p className="price-card-label">One-Time Investment</p>
              </div>
              <div className="price-card-price">
                <span className="price-currency">$</span>
                <span className="price-amount">297</span>
              </div>
              <p className="price-card-note">Regular Price: $497 | Save $200 Today</p>
              <a href="#upgrade" className="btn btn-primary btn-large">
                Upgrade to VIP Now
              </a>
              <p className="price-card-guarantee">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="#D4AF37"/>
                </svg>
                30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TICKET COMPARISON */}
      {/* TECHNIQUE 5: ALL 7 dominance techniques applied */}
      <section className="comparison-section">
        <div className="comparison-container">
          {/* TECHNIQUE 8: Large decorative section number */}
          <div className="section-number">02</div>

          <h2 className="section-headline">
            Here's What You're <span className="text-gradient">Really</span> Choosing
          </h2>

          <p className="intro-paragraph">
            Both tickets get you into the challenge. But only ONE gives you what you actually need to
            launch successfully: <strong>personalized guidance, accountability, and confidence</strong>.
          </p>

          {/* TECHNIQUE 5: VIP vs FREE comparison with all dominance techniques */}
          <div className="comparison-grid">
            {/* VS element */}
            <div className="comparison-vs">VS</div>

            {/* FREE CARD - Small, muted, de-emphasized */}
            {/* TECHNIQUE 5: Scale (75%), Color (grayscale), Shadow (1 layer), Position (lower), minimal animation */}
            <div className="ticket-card free">
              <div className="ticket-header">
                <h3>Free Challenge Ticket</h3>
              </div>
              <div className="ticket-price">
                <span className="currency">$</span>0
              </div>
              <ul className="features-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M6 10L9 13L14 8" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Access to 5-day challenge</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M6 10L9 13L14 8" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Core strategy framework</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M6 10L9 13L14 8" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Group community access</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="line-through">Personal feedback</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="line-through">Implementation plan</span>
                </li>
              </ul>
              <p className="ticket-note">Great starting point</p>
            </div>

            {/* VIP CARD - Large, glowing, premium */}
            {/* TECHNIQUE 5: All 7 dominance techniques */}
            {/* TECHNIQUE 2: 4 layered shadows with pink glow */}
            <div className="ticket-card vip">
              {/* BEST VALUE badge */}
              <div className="best-value-badge">
                BEST VALUE
                {/* TECHNIQUE 7: Wavy underline */}
                <svg className="wavy-underline" width="100" height="8" viewBox="0 0 100 8" fill="none">
                  <path d="M0 4 Q 25 0, 50 4 T 100 4" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
                </svg>
              </div>

              <div className="ticket-header">
                <h3>Launch-Ready VIP Ticket</h3>
              </div>
              <div className="ticket-price">
                <span className="currency">$</span>297
              </div>
              <p className="ticket-value-note">Everything in Free, PLUS:</p>
              <ul className="features-list">
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#A8B5A4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>Personal strategy audit</strong> from Bailey's team</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#A8B5A4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>7-Figure Clinic Method</strong> implementation guide</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#A8B5A4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>Personalized feedback</strong> on your business model</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#A8B5A4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>VIP-only Q&A sessions</strong> with Bailey</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#A8B5A4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>Launch-ready action plan</strong> you can execute immediately</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#A8B5A4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>Bonus:</strong> Revenue Forecasting Calculator ($197 value)</span>
                </li>
              </ul>
              <a href="#upgrade" className="btn btn-vip">
                Upgrade to VIP Now → $297
              </a>
              <p className="ticket-note">This is the ONCE moment. Don't miss it.</p>
            </div>
          </div>

          <p className="bottom-note">
            💡 <strong>Reality check:</strong> The free ticket gives you ideas. The VIP ticket gives you
            <em> execution</em>. Which one actually gets you to 7 figures?
          </p>
        </div>
      </section>

      {/* SECTION 3: WHY UPGRADE NOW */}
      {/* TECHNIQUE 1: Asymmetric grid (1fr / 400px) */}
      {/* TECHNIQUE 8: Editorial magazine layout */}
      <section className="why-upgrade-section">
        <div className="why-upgrade-container">
          {/* TECHNIQUE 8: Large decorative section number */}
          <div className="section-number-bg">03</div>

          <div className="why-upgrade-content">
            <h2 className="section-headline-left">
              Why Upgrade <span className="text-gradient">Right Now</span>
            </h2>

            <p className="intro-paragraph">
              You're already committed to the challenge. But here's what most people don't realize
              until it's too late...
            </p>

            {/* TECHNIQUE 8: Pull quote as graphic element */}
            <blockquote className="pull-quote">
              "Strategy without execution is just expensive procrastination."
              <cite>— Every entrepreneur who waited</cite>
            </blockquote>

            {/* TECHNIQUE 7: Connecting lines between points */}
            <div className="arrow-bullets-container">
              <ul className="arrow-bullets">
                <li>
                  <span className="arrow-number">01</span>
                  <div>
                    <h4>You Already Said Yes to Growth</h4>
                    <p>You registered for this challenge because you're ready. Don't stop at ideas—get the roadmap that turns strategy into revenue.</p>
                  </div>
                </li>
                <li>
                  <span className="arrow-number">02</span>
                  <div>
                    <h4>Feedback is the Fast Lane</h4>
                    <p>The difference between 6 months of guessing and 6 weeks of momentum? Someone who knows the path showing you exactly what to fix.</p>
                  </div>
                </li>
                <li>
                  <span className="arrow-number">03</span>
                  <div>
                    <h4>This Window Closes Fast</h4>
                    <p>Once the challenge starts, VIP spots are gone. This is your only chance to upgrade at this price with this access.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* TECHNIQUE 6: Sidebar with sticky card */}
          <div className="why-upgrade-sidebar">
            <div className="sticky-card">
              <div className="sticky-card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#E85C7B" strokeWidth="2" fill="none"/>
                  <path d="M24 12V24L32 28" stroke="#E85C7B" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Time-Sensitive</h3>
              <p className="sticky-card-time">
                Registration closes in:<br/>
                <strong className="countdown-timer">3 Days 14 Hours</strong>
              </p>
              <a href="#upgrade" className="btn btn-secondary-outline">
                Upgrade Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT HAPPENS IN VIP */}
      {/* TECHNIQUE 6: Layout E - Grid of 3 cards */}
      <section className="what-happens-section">
        <div className="what-happens-container">
          {/* TECHNIQUE 8: Section number as design element */}
          <div className="section-number">04</div>

          <h2 className="section-headline">
            What Actually Happens in <span className="text-gradient">VIP</span>
          </h2>

          <p className="intro-paragraph centered">
            Not just "more content." You get personalized strategy implementation
            that turns your specific business idea into a launch-ready plan.
          </p>

          {/* TECHNIQUE 6: Grid of 3 elevated cards */}
          {/* TECHNIQUE 2: Layered shadows */}
          {/* TECHNIQUE 7: Connecting lines between cards */}
          <div className="what-happens-grid">
            <div className="phase-card">
              <div className="phase-number">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#E85C7B" opacity="0.1"/>
                  <text x="30" y="40" fontSize="32" fontWeight="700" fill="#E85C7B" textAnchor="middle">1</text>
                </svg>
              </div>
              <h3>Week 1: Your Strategy Audit</h3>
              <p>
                Submit your business idea and get personalized feedback from Bailey's team.
                We'll identify your biggest opportunities and potential pitfalls before you waste time on the wrong things.
              </p>
              <ul className="phase-deliverables">
                <li>✓ Custom strategy analysis</li>
                <li>✓ Revenue model review</li>
                <li>✓ Market positioning audit</li>
              </ul>
            </div>

            <div className="phase-card">
              <div className="phase-number">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#2F5F61" opacity="0.1"/>
                  <text x="30" y="40" fontSize="32" fontWeight="700" fill="#2F5F61" textAnchor="middle">2</text>
                </svg>
              </div>
              <h3>Week 2-3: Implementation</h3>
              <p>
                Work through the 7-Figure Clinic Method with your personalized action plan.
                You'll know exactly what to build, how to price it, and who to sell it to.
              </p>
              <ul className="phase-deliverables">
                <li>✓ Step-by-step action plan</li>
                <li>✓ VIP Q&A access</li>
                <li>✓ Weekly accountability check-ins</li>
              </ul>
            </div>

            <div className="phase-card">
              <div className="phase-number">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#D4AF37" opacity="0.1"/>
                  <text x="30" y="40" fontSize="32" fontWeight="700" fill="#D4AF37" textAnchor="middle">3</text>
                </svg>
              </div>
              <h3>Week 4: Launch Ready</h3>
              <p>
                Leave the challenge with a complete, launch-ready business model.
                Not "someday." Not "maybe." Ready to execute and generate revenue.
              </p>
              <ul className="phase-deliverables">
                <li>✓ Launch-ready business plan</li>
                <li>✓ Revenue forecasting tool</li>
                <li>✓ 90-day execution roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF */}
      {/* TECHNIQUE 6: Layout B - Asymmetric testimonials (70/30) */}
      {/* TECHNIQUE 7: Circular frames */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-headline">
            What <span className="text-gradient">VIP Members</span> Are Saying
          </h2>

          <div className="testimonial-card">
            <div className="testimonial-content">
              {/* TECHNIQUE 8: Pull quote style */}
              <blockquote className="testimonial-quote">
                "The personalized feedback alone was worth 10x the investment. Bailey's team spotted
                the ONE thing holding my offer back—and fixing it added $40K to my first launch."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <p className="author-name">Sarah Mitchell</p>
                  <p className="author-title">Business Coach</p>
                  <p className="author-result">$127K in first 90 days</p>
                </div>
              </div>
            </div>
            {/* TECHNIQUE 7: Circular frame (hand-drawn feel) */}
            <div className="testimonial-image-wrapper">
              <div className="testimonial-image-frame">
                <div className="testimonial-image-placeholder">SM</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card reverse">
            <div className="testimonial-image-wrapper">
              <div className="testimonial-image-frame">
                <div className="testimonial-image-placeholder">JC</div>
              </div>
            </div>
            <div className="testimonial-content">
              <blockquote className="testimonial-quote">
                "I almost skipped VIP to 'save money.' Thank God I didn't. The implementation plan
                saved me 6 months of trial and error. I launched in 3 weeks instead of 'someday.'"
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <p className="author-name">James Chen</p>
                  <p className="author-title">Digital Product Creator</p>
                  <p className="author-result">Launched in 21 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      {/* TECHNIQUE 8: Editorial ONCE moment */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          {/* TECHNIQUE 8: Large decorative text as graphic element */}
          <div className="once-moment">
            <span className="once-text">ONCE</span>
          </div>

          <h2 className="final-cta-headline">
            This is the <span className="text-gradient-reverse">ONCE</span> Moment
          </h2>

          <p className="final-cta-description">
            You get one chance to upgrade at this price with this access.<br/>
            After registration closes, VIP is gone. No extensions. No second chances.
          </p>

          <div className="final-cta-price-box">
            <div className="final-price-wrapper">
              <p className="final-price-label">VIP Upgrade Investment</p>
              <div className="final-price">
                <span className="final-price-currency">$</span>
                <span className="final-price-amount">297</span>
              </div>
              <p className="final-price-note">
                <span className="strike-price">Regular: $497</span> | Save $200 Today
              </p>
            </div>

            <a href="#upgrade" className="btn btn-primary btn-massive">
              Yes! Upgrade Me to VIP
            </a>

            <div className="final-cta-guarantees">
              <div className="guarantee-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#D4AF37"/>
                </svg>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="guarantee-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#2F5F61" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="#2F5F61" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Instant Access After Purchase</span>
              </div>
              <div className="guarantee-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" fill="#E85C7B"/>
                </svg>
                <span>Closes in 3 Days</span>
              </div>
            </div>
          </div>

          <p className="final-cta-ps">
            <strong>P.S.</strong> The difference between "someday" and "7 figures"?
            Personalized guidance from someone who's already there. This is your moment. Take it.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Bailey Vann | Boring Business Challenge</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
