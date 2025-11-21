import React, { useState, useEffect } from 'react'
import './App.css'

// REDESIGNED FOR: $67 "3-Day Etsy Accelerator VIP Experience"
// CORE INSIGHT: Life happens (kids, work, chaos) → recordings + tools solve this
// POSITIONING: Implementation over information, warm but premium, accessible not cheap

function App() {
  const [scrollProgress, setScrollProgress] = useState(75) // ~75% complete as specified

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(75 + (window.scrollY / totalHeight) * 25, 100)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* 0. ALERT BAR - Creates urgency without pressure */}
      {/* PSYCHOLOGY: Registration incomplete = open loop, brain needs closure */}
      <div className="alert-bar">
        <div className="alert-bar-content">
          <p className="alert-bar-text">YOUR REGISTRATION ISN'T COMPLETE YET – DON'T CLOSE THIS PAGE.</p>
          <div className="alert-bar-progress">
            <div className="alert-bar-progress-fill" style={{ width: `${scrollProgress}%` }}></div>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      {/* PSYCHOLOGY: "Life happens" hook creates immediate empathy and emotional connection */}
      {/* CREATIVE CHOICE: Two-column layout - problem/empathy left, solution/price right */}
      {/* CONVERSION: Video invitation adds Bailey's personal warmth immediately */}
      <section className="hero-section-etsy">
        <div className="hero-container-etsy">
          <div className="hero-left-etsy">
            {/* Chip badge */}
            <div className="chip-badge">
              <span className="badge-icon">✨</span>
              <span>VIP UPGRADE • 3-Day Etsy Accelerator</span>
            </div>

            {/* HEADLINE - emphasizes COMPLETE experience and personal support */}
            <h1 className="hero-h1-etsy">
              Yes! I Want The Complete 3-Day Experience{' '}
              <span className="highlight-pink">With Bailey's Personal Support</span>
            </h1>

            {/* SUBHEAD - core value prop: implementation not notes */}
            <p className="hero-subhead-etsy">
              Get everything you need to actually <strong>IMPLEMENT</strong> what you learn{' '}
              <span className="text-muted">(not just take notes that die in a drawer).</span>
            </p>

            {/* 3 bullets - distilled bundle value */}
            <ul className="hero-bullets-etsy">
              <li>
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#4ECDC4" opacity="0.2"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="#2F5F61" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span>
                  <strong>Lifetime access</strong> to all 3 days in HD, slides, and resources – rewatch whenever life gets chaotic.
                </span>
              </li>
              <li>
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#FF6B9D" opacity="0.2"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="#C7254E" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span>
                  <strong>Pre-challenge "Come Prepared" Quick Start Kit</strong> so you show up with a clear plan, not a blank screen.
                </span>
              </li>
              <li>
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#FFD166" opacity="0.2"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="#F4A261" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span>
                  <strong>7 days of private access to Bailey</strong> and VIP-only Q&A sessions so you're never figuring this out alone.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE: VIP PRICE CARD */}
          {/* PSYCHOLOGY: Clean, confident design makes $67 feel premium not cheap */}
          {/* CREATIVE CHOICE: Floating card with subtle glow (premium but accessible) */}
          <div className="hero-right-etsy">
            <div className="vip-price-card">
              <div className="price-card-header-etsy">
                <span className="price-card-label-etsy">The 3-Day Etsy Accelerator</span>
                <h3 className="price-card-title-etsy">VIP Experience</h3>
              </div>

              <div className="price-display-etsy">
                <span className="price-currency-etsy">$</span>
                <span className="price-amount-etsy">67</span>
              </div>

              <p className="price-card-note-etsy">One-time payment • Limited VIP spots</p>

              <div className="price-card-features-etsy">
                <div className="feature-check">✓ Lifetime recording access (all 3 days + slides)</div>
                <div className="feature-check">✓ "Come Prepared" Quick Start Kit</div>
                <div className="feature-check">✓ 7-day private WhatsApp with Bailey</div>
                <div className="feature-check">✓ VIP-only live Q&A sessions</div>
                <div className="feature-check">✓ Fast Action Toolkit (prompts, calculators, templates, mockups)</div>
              </div>

              <a href="#upgrade" className="btn-primary-etsy">
                YES, UPGRADE ME TO VIP FOR $67
              </a>

              <a href="#free" className="btn-secondary-text-etsy">
                No thanks, I'll stay on the free ticket
              </a>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION - Bailey's personal invitation */}
        {/* PSYCHOLOGY: Video adds warmth, personality, trust - critical for $67 impulse decision */}
        <div className="hero-video-section">
          <div className="video-container-etsy">
            <div className="video-placeholder">
              <div className="video-play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="#FF6B9D"/>
                  <path d="M26 22L42 32L26 42V22Z" fill="white"/>
                </svg>
              </div>
              <p className="video-caption">
                <span className="video-icon">▶</span>
                Your VIP invite from Bailey is already playing – click to listen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKET COMPARISON - FREE vs VIP */}
      {/* PSYCHOLOGY: Loss aversion - show what FREE ticket is missing */}
      {/* CREATIVE CHOICE: Side-by-side cards with visual distinction (muted vs vibrant) */}
      {/* CONVERSION: "Launch-Ready VIP" label emphasizes outcome over access */}
      <section className="comparison-section-etsy">
        <div className="comparison-container-etsy">
          <h2 className="section-headline-etsy">
            Choose Your Ticket Type Below:
          </h2>

          <div className="comparison-grid-etsy">
            {/* FREE CARD - De-emphasized, muted */}
            <div className="ticket-card-etsy free-ticket">
              <div className="ticket-header-etsy">
                <h3 className="ticket-title-etsy">Free Challenge Ticket</h3>
                <div className="ticket-price-etsy">
                  <span className="currency-symbol">$</span>
                  <span className="price-number">0</span>
                </div>
              </div>

              <ul className="ticket-features-etsy">
                <li className="feature-included">
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M6 10L9 13L14 8" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Access to all 3 main challenge days live</span>
                </li>
                <li className="feature-included">
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M6 10L9 13L14 8" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Standard challenge workbook</span>
                </li>
                <li className="feature-included">
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#CCCCCC"/>
                    <path d="M6 10L9 13L14 8" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Access to the main community chat</span>
                </li>
                <li className="feature-missing">
                  <svg className="x-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#EEEEEE"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#999999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-strike">No lifetime recording access</span>
                </li>
                <li className="feature-missing">
                  <svg className="x-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#EEEEEE"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#999999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-strike">No "Come Prepared" Quick Start Kit</span>
                </li>
                <li className="feature-missing">
                  <svg className="x-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#EEEEEE"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#999999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-strike">No 7-day private WhatsApp with Bailey</span>
                </li>
                <li className="feature-missing">
                  <svg className="x-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#EEEEEE"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#999999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-strike">No VIP-only live Q&A sessions</span>
                </li>
                <li className="feature-missing">
                  <svg className="x-icon" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" fill="#EEEEEE"/>
                    <path d="M7 7L13 13M7 13L13 7" stroke="#999999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-strike">No Fast Action Toolkit</span>
                </li>
              </ul>

              <button className="btn-free-ticket">
                NO, I'LL KEEP THE FREE TICKET
              </button>
            </div>

            {/* VIP CARD - Vibrant, glowing, elevated */}
            {/* PSYCHOLOGY: Visual prominence creates desire and perceived value */}
            <div className="ticket-card-etsy vip-ticket">
              <div className="vip-badge-top">LAUNCH-READY VIP</div>

              <div className="ticket-header-etsy">
                <h3 className="ticket-title-etsy">3-Day Etsy Accelerator VIP</h3>
                <div className="ticket-price-etsy">
                  <span className="currency-symbol">$</span>
                  <span className="price-number">67</span>
                </div>
              </div>

              <ul className="ticket-features-etsy">
                <li className="feature-included-vip">
                  <svg className="check-icon-vip" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ECDC4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span>Access to all 3 main challenge days live</span>
                </li>
                <li className="feature-included-vip">
                  <svg className="check-icon-vip" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ECDC4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>Lifetime HD recordings</strong> of all 3 days + slides</span>
                </li>
                <li className="feature-included-vip">
                  <svg className="check-icon-vip" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ECDC4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>"Come Prepared" Quick Start Kit</strong> (audit, shop walkthrough, decision matrix, 50 examples)</span>
                </li>
                <li className="feature-included-vip">
                  <svg className="check-icon-vip" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ECDC4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>7-day private WhatsApp</strong> with Bailey</span>
                </li>
                <li className="feature-included-vip">
                  <svg className="check-icon-vip" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ECDC4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>VIP-only live Q&A sessions</strong> (Day 2 + Day 4 implementation call)</span>
                </li>
                <li className="feature-included-vip">
                  <svg className="check-icon-vip" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ECDC4"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span><strong>Fast Action Toolkit</strong> (AI prompts, profit calculator, calendar, templates, mockup bundle)</span>
                </li>
              </ul>

              <button className="btn-vip-ticket">
                YES, I WANT THE COMPLETE 3-DAY VIP EXPERIENCE FOR $67
              </button>
            </div>
          </div>

          <p className="comparison-note-etsy">
            💡 <strong>Regardless of which ticket you choose,</strong> you're still in for the free challenge.
            VIP simply gives you recordings, direct access to Bailey, and all the tools to actually implement.
          </p>
        </div>
      </section>

      {/* 3. WHY UPGRADE NOW */}
      {/* PSYCHOLOGY: Addresses core insight "life happens" - empathy before selling */}
      {/* CREATIVE CHOICE: Narrative format with emotional storytelling */}
      <section className="why-upgrade-section-etsy">
        <div className="why-upgrade-container-etsy">
          <h2 className="section-headline-etsy">
            Why Upgrade to <span className="highlight-gradient">VIP</span> Before the Challenge Starts
          </h2>

          <p className="intro-paragraph-etsy">
            The <strong>free challenge</strong> gives you the strategy. <strong>VIP</strong> makes sure you can{' '}
            <strong>actually implement it</strong> – even if kids interrupt, work gets busy, or you need feedback on your specific shop.
          </p>

          <div className="why-upgrade-grid-etsy">
            <div className="why-card-etsy">
              <div className="why-icon-etsy">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#FFD166" opacity="0.2"/>
                  <path d="M24 12V24L32 28" stroke="#F4A261" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Life Happens – With Lifetime Recordings, You'll Never Miss a Breakthrough</h3>
              <p>
                Kids have meltdowns. Work calls happen. Timezones are confusing. With lifetime recording access,
                you can watch at 11pm when the house is finally quiet, or catch up on weekends. You won't miss a thing.
              </p>
            </div>

            <div className="why-card-etsy">
              <div className="why-icon-etsy">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#FF6B9D" opacity="0.2"/>
                  <path d="M24 8L32 24L24 32L16 24L24 8Z" stroke="#C7254E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Instead of Generic Advice, Get Bailey's Eyes on YOUR Shop</h3>
              <p>
                You won't end up with "good ideas for someone." In VIP Q&A sessions, Bailey reviews YOUR products,
                YOUR niche, and YOUR listings. This is personalized feedback, not one-size-fits-all strategy.
              </p>
            </div>

            <div className="why-card-etsy">
              <div className="why-icon-etsy">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#4ECDC4" opacity="0.2"/>
                  <path d="M12 24L20 32L36 16" stroke="#2F5F61" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>You Won't End the Week With "Someday" Ideas – You'll Have a Clear Plan</h3>
              <p>
                The Fast Action Toolkit gives you calculators, templates, AI prompts, and mockups. Not "figure it out yourself"
                homework. Actual plug-and-play tools so you can move immediately.
              </p>
            </div>

            <div className="why-card-etsy">
              <div className="why-icon-etsy">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#A8DADC" opacity="0.2"/>
                  <path d="M18 24C18 20.686 20.686 18 24 18C27.314 18 30 20.686 30 24C30 27.314 27.314 30 24 30M24 12V18M24 30V36M12 24H18M30 24H36" stroke="#457B9D" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>VIP is Where the Biggest Breakthroughs Happen – You're Not Alone</h3>
              <p>
                7-day private WhatsApp access means you can ask Bailey directly when you get stuck. Share your progress,
                get unstuck fast, and network with other serious sellers who are actually implementing.
              </p>
            </div>
          </div>

          <div className="cta-row-etsy">
            <a href="#upgrade" className="btn-primary-large-etsy">
              YES, I WANT THE COMPLETE 3-DAY VIP EXPERIENCE
            </a>
            <a href="#free" className="btn-text-link-etsy">
              No, I'll stick with the free ticket only
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHAT'S INSIDE YOUR VIP BUNDLE - 5 COMPONENTS */}
      {/* PSYCHOLOGY: Crescendo layout builds momentum, ends with strongest component (toolkit) */}
      {/* CREATIVE CHOICE: Each component gets progressively more visual treatment */}
      {/* CONVERSION: Tangible tools create "I'm getting so much" feeling */}
      <section className="components-section-etsy">
        <div className="components-container-etsy">
          <h2 className="section-headline-etsy">
            Here's Everything You Get Inside the{' '}
            <span className="highlight-gradient">$67 VIP Experience</span>
          </h2>

          {/* COMPONENT 1 - Simple card with icon */}
          <div className="component-card-simple">
            <div className="component-number">1</div>
            <div className="component-content">
              <h3 className="component-title">Lifetime Recording Access</h3>
              <ul className="component-list">
                <li>✓ All 3 challenge days in HD to rewatch whenever you need</li>
                <li>✓ Download the slides and resources so you never lose anything</li>
                <li>✓ Perfect if kids, work, or life interrupts – you can catch up on your schedule</li>
              </ul>
            </div>
            <div className="component-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38" stroke="#4ECDC4" strokeWidth="2" opacity="0.3"/>
                <circle cx="40" cy="40" r="12" fill="#4ECDC4"/>
                <rect x="36" y="32" width="3" height="16" fill="white"/>
                <rect x="43" y="32" width="3" height="16" fill="white"/>
              </svg>
            </div>
          </div>

          {/* COMPONENT 2 - Card with small visual */}
          <div className="component-card-medium">
            <div className="component-badge">Get this NOW before Day 1</div>
            <div className="component-layout-medium">
              <div className="component-left-medium">
                <div className="component-number">2</div>
                <h3 className="component-title">The "Come Prepared" Quick Start Kit</h3>
                <p className="component-intro">
                  Upgrade today and unlock Bailey's pre-work material so you show up on Day 1 ready to move.
                </p>
                <ul className="component-list-detailed">
                  <li>
                    <strong>Pre-Challenge Prep Video (30 min):</strong> "How to Audit Your Shop BEFORE Day 1"
                  </li>
                  <li>
                    <strong>Bailey's Shop Walkthrough (45 min):</strong> Behind-the-scenes of her actual $1M shop
                  </li>
                  <li>
                    <strong>The Delete Decision Matrix:</strong> Know exactly which listings to cut before we start
                  </li>
                  <li>
                    <strong>50 Winning Product Examples:</strong> Real products that sell, broken down so you can model them
                  </li>
                </ul>
              </div>
              <div className="component-visual-medium">
                <div className="mockup-box">
                  <div className="mockup-header">Quick Start Kit</div>
                  <div className="mockup-items">
                    <div className="mockup-item">📹 Prep Video</div>
                    <div className="mockup-item">🏪 Shop Tour</div>
                    <div className="mockup-item">📊 Decision Matrix</div>
                    <div className="mockup-item">🎯 50 Examples</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPONENT 3 - Expanded with screenshot/image */}
          {/* PSYCHOLOGY: WhatsApp = intimate, personal, "Bailey in your pocket" feeling */}
          <div className="component-card-expanded">
            <div className="component-layout-expanded">
              <div className="component-visual-expanded">
                {/* WhatsApp mockup - shows REAL interface to make it tangible */}
                <div className="whatsapp-mockup">
                  <div className="whatsapp-header">
                    <div className="whatsapp-avatar">
                      <span>BV</span>
                    </div>
                    <div className="whatsapp-info">
                      <div className="whatsapp-name">Bailey + VIP Group</div>
                      <div className="whatsapp-status">47 members • tap for info</div>
                    </div>
                  </div>
                  <div className="whatsapp-messages">
                    <div className="whatsapp-message">
                      <div className="message-bubble bailey">
                        <div className="message-text">
                          Welcome to VIP! 🎉 Drop your questions here anytime this week.
                          I'll be checking in with voice notes throughout the challenge.
                        </div>
                        <div className="message-audio">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <div className="audio-waveform">
                            <span></span><span></span><span></span><span></span><span></span>
                          </div>
                          <span className="audio-duration">0:47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="component-right-expanded">
                <div className="component-number">3</div>
                <h3 className="component-title">7-Day Private WhatsApp with Bailey</h3>
                <p className="component-description">
                  This is where VIP gets <em>personal</em>. You're not shouting into a crowded Facebook group.
                  You have direct access to Bailey and a small group of serious sellers.
                </p>
                <ul className="component-list">
                  <li>✓ Ask your specific questions inside a private VIP thread</li>
                  <li>✓ Share your progress and get quick feedback during the week</li>
                  <li>✓ Network with other serious sellers who are actually implementing</li>
                  <li>✓ Get Bailey's voice notes with personal tips throughout the challenge</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COMPONENT 4 - Feature section with side image */}
          <div className="component-card-feature">
            <div className="component-layout-feature">
              <div className="component-left-feature">
                <div className="component-number">4</div>
                <h3 className="component-title">VIP-Only Live Q&A Sessions</h3>
                <p className="component-description">
                  This is where you get Bailey's eyes on <strong>YOUR</strong> shop, <strong>YOUR</strong> products,
                  and <strong>YOUR</strong> specific situation. Not generic advice – personalized feedback.
                </p>
                <div className="qa-sessions">
                  <div className="qa-session-card">
                    <div className="qa-day">End of Day 2</div>
                    <div className="qa-duration">30-minute session</div>
                    <p>"Ask Bailey Anything" VIP-only call</p>
                  </div>
                  <div className="qa-session-card">
                    <div className="qa-day">Day 4</div>
                    <div className="qa-duration">60-minute session</div>
                    <p>Implementation Q&A call to review shops and unblock you</p>
                  </div>
                </div>
                <ul className="component-list">
                  <li>✓ Chance to get your shop or product ideas reviewed live</li>
                  <li>✓ Recordings provided so you can rewatch the feedback</li>
                  <li>✓ Learn from other VIPs' questions and shop reviews</li>
                </ul>
              </div>
              <div className="component-visual-feature">
                <div className="qa-visual-mockup">
                  <div className="qa-screen">
                    <div className="qa-screen-header">VIP Q&A Session</div>
                    <div className="qa-participants">
                      <div className="participant">
                        <div className="participant-avatar main">B</div>
                        <span>Bailey</span>
                      </div>
                      <div className="participant">
                        <div className="participant-avatar">JD</div>
                      </div>
                      <div className="participant">
                        <div className="participant-avatar">SM</div>
                      </div>
                      <div className="participant">
                        <div className="participant-avatar">TK</div>
                      </div>
                      <div className="participant-more">+43</div>
                    </div>
                    <div className="qa-chat">
                      <div className="qa-chat-message">
                        <strong>Bailey:</strong> Let me take a look at your shop...
                      </div>
                      <div className="qa-chat-message">
                        <strong>Bailey:</strong> I'd change your main photo to...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPONENT 5 - HERO TREATMENT - "Toolbox opening" visual */}
          {/* PSYCHOLOGY: Most tangible component, proves VIP = tools not just access */}
          {/* CREATIVE CHOICE: Maximum visual investment, shows all tools spread out */}
          {/* CONVERSION: This is the "wow I'm getting so much" moment */}
          <div className="component-card-hero">
            <div className="component-hero-badge">The Implementation Game-Changer</div>
            <div className="component-number-large">5</div>
            <h3 className="component-title-hero">The "Fast Action" Toolkit</h3>
            <p className="component-subtitle-hero">
              Plug-and-play tools so you can move from idea to first sale as fast as possible.
            </p>

            {/* TOOLBOX VISUAL - Shows all tools spreading out like opening a treasure chest */}
            <div className="toolkit-showcase">
              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="2" stroke="#4ECDC4" strokeWidth="2"/>
                    <path d="M14 18H34M14 24H34M14 30H26" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>AI Prompt Library</h4>
                <p>20 copy-paste templates for listings, SEO, and product ideas</p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="2" stroke="#FF6B9D" strokeWidth="2"/>
                    <path d="M16 20L24 28L32 20" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="24" cy="16" r="2" fill="#FF6B9D"/>
                  </svg>
                </div>
                <h4>Profit Calculator Spreadsheet</h4>
                <p>Quickly see what's worth your time before you invest effort</p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="8" width="28" height="32" rx="2" stroke="#FFD166" strokeWidth="2"/>
                    <path d="M16 16H32M16 22H32M16 28H26" stroke="#FFD166" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>2025 Seasonal Planning Calendar</h4>
                <p>Ride demand spikes instead of missing them</p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8L32 16L24 24L16 16L24 8Z" stroke="#A8DADC" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M16 24L24 32L32 24" stroke="#A8DADC" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>First Sale Template Pack</h4>
                <p>Messages, offers, and mini promotions to get sales in the door</p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="2" stroke="#C7254E" strokeWidth="2"/>
                    <circle cx="18" cy="22" r="4" stroke="#C7254E" strokeWidth="2"/>
                    <path d="M28 28L36 20" stroke="#C7254E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Mockup Magic Bundle</h4>
                <p>Bailey's personal collection to upgrade your listing photos instantly</p>
              </div>
            </div>

            <div className="toolkit-value-note">
              <p>
                💎 <strong>These aren't PDFs you'll download and forget.</strong> These are tools you'll use
                in the first 48 hours after the challenge to actually launch or improve your shop.
              </p>
            </div>
          </div>

          {/* CTA after components */}
          <div className="cta-row-etsy components-cta">
            <a href="#upgrade" className="btn-primary-large-etsy">
              YES, I WANT THE COMPLETE 3-DAY VIP EXPERIENCE
            </a>
            <a href="#free" className="btn-text-link-etsy">
              No, I'll stay on the free ticket only
            </a>
          </div>
        </div>
      </section>

      {/* 5. GUARANTEE SECTION */}
      {/* PSYCHOLOGY: Risk reversal - "try everything THEN decide" removes last objection */}
      {/* CREATIVE CHOICE: Warm, trustworthy design with badge visual */}
      <section className="guarantee-section-etsy">
        <div className="guarantee-container-etsy">
          <div className="guarantee-badge">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" stroke="#4ECDC4" strokeWidth="2"/>
              <path d="M40 12L46 26L60 32L46 38L40 52L34 38L20 32L34 26L40 12Z" fill="#4ECDC4"/>
              <text x="40" y="45" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">100%</text>
            </svg>
          </div>

          <h2 className="guarantee-headline">
            100% Money-Back Guarantee – Try the VIP Experience for the Whole Week
          </h2>

          <div className="guarantee-content">
            <p className="guarantee-description">
              Join the <strong>3-Day Etsy Accelerator VIP Experience</strong>, watch the recordings, use the Quick Start Kit,
              show up in the WhatsApp group, and attend the VIP Q&A sessions.
            </p>
            <p className="guarantee-description">
              If, within <strong>7 days after the challenge ends</strong>, you don't feel significantly more confident
              and clear about your Etsy shop and what to sell next, email us and we'll refund your $67.
            </p>
            <p className="guarantee-promise">
              <strong>No awkward questions. No hoops. Just an honest guarantee.</strong>
            </p>
          </div>

          <div className="guarantee-cta">
            <a href="#upgrade" className="btn-primary-large-etsy">
              YES, I WANT THE VIP EXPERIENCE FOR $67
            </a>
            <a href="#free" className="btn-text-link-etsy">
              No, I'm okay staying on the free ticket
            </a>
          </div>
        </div>
      </section>

      {/* 6. "IS VIP FOR YOU?" FILTER */}
      {/* PSYCHOLOGY: Self-identification - "that's literally me" creates commitment */}
      {/* CREATIVE CHOICE: Two columns with specific language that names their life */}
      {/* CONVERSION: Helps qualify leads, makes yes-people feel seen */}
      <section className="filter-section-etsy">
        <div className="filter-container-etsy">
          <h2 className="section-headline-etsy">
            Is the <span className="highlight-gradient">3-Day Etsy Accelerator VIP Experience</span> for You?
          </h2>

          <div className="filter-grid-etsy">
            {/* LEFT - Perfect for you */}
            <div className="filter-column perfect">
              <div className="filter-header perfect">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#4ECDC4"/>
                  <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <h3>Perfect for you if...</h3>
              </div>
              <ul className="filter-list">
                <li>
                  You know life might interrupt (kids, work, time zones) and you want <strong>lifetime access</strong> to everything.
                </li>
                <li>
                  You prefer seeing <strong>real examples</strong> (Bailey's $1M shop, 50 winning products) instead of guessing.
                </li>
                <li>
                  You don't want to figure this out alone – you want a <strong>small group and direct access to Bailey</strong>.
                </li>
                <li>
                  You're ready to <strong>implement during the challenge</strong>, not "someday when things are less busy."
                </li>
                <li>
                  You've taken free challenges before and ended up with notes in a drawer – <strong>this time you want tools and accountability</strong>.
                </li>
              </ul>
            </div>

            {/* RIGHT - Probably not for you */}
            <div className="filter-column not-perfect">
              <div className="filter-header not-perfect">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#E0E0E0"/>
                  <path d="M12 12L20 20M12 20L20 12" stroke="#999999" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <h3>Probably not for you if...</h3>
              </div>
              <ul className="filter-list">
                <li>
                  You're happy just watching the free sessions and taking casual notes.
                </li>
                <li>
                  You don't plan to launch or improve your shop in the next 30–60 days.
                </li>
                <li>
                  You don't really want feedback or accountability – you just want information.
                </li>
                <li>
                  Investing $67 to move faster and get support feels uncomfortable right now.
                </li>
                <li>
                  You prefer figuring everything out on your own without asking for help.
                </li>
              </ul>
            </div>
          </div>

          <div className="filter-cta">
            <p className="filter-encouragement">
              <strong>If you're on the fence, join VIP now.</strong> It's the same challenge, but with recordings,
              personal support, and tools that make it almost impossible not to implement.
            </p>
            <div className="cta-row-etsy">
              <a href="#upgrade" className="btn-primary-large-etsy">
                YES, I WANT THE COMPLETE VIP EXPERIENCE
              </a>
              <a href="#free" className="btn-text-link-etsy">
                No, I'll keep the free ticket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ + FINAL CTA */}
      {/* PSYCHOLOGY: Address objections, remove friction, reinforce value */}
      {/* CREATIVE CHOICE: Clean accordion-style (simplified here as expanded) */}
      <section className="faq-section-etsy">
        <div className="faq-container-etsy">
          <h2 className="section-headline-etsy">
            Frequently Asked Questions
          </h2>

          <div className="faq-grid-etsy">
            <div className="faq-item">
              <h3 className="faq-question">What exactly do I get in VIP?</h3>
              <p className="faq-answer">
                You get lifetime HD recordings of all 3 challenge days + slides, the "Come Prepared" Quick Start Kit
                (prep video, shop walkthrough, decision matrix, 50 examples), 7-day private WhatsApp access to Bailey,
                VIP-only live Q&A sessions (Day 2 + Day 4), and the Fast Action Toolkit (AI prompts, profit calculator,
                seasonal calendar, first sale templates, mockup bundle).
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What if I can't attend live / I'm in a different time zone?</h3>
              <p className="faq-answer">
                That's exactly why VIP includes <strong>lifetime recordings</strong>. Watch on your schedule – at 11pm when
                kids are asleep, on weekends, during nap time, whenever works for you. The WhatsApp group and Q&A recordings
                mean you won't miss anything important.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How does the 7-day WhatsApp group work?</h3>
              <p className="faq-answer">
                After you upgrade, you'll get a private WhatsApp invite link. The group is small (VIPs only) and Bailey
                checks in daily with voice notes and answers. You can ask specific questions, share your progress, and get
                quick feedback. It's active for 7 days starting Day 1 of the challenge.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Will my shop definitely get reviewed?</h3>
              <p className="faq-answer">
                Bailey reviews shops during the VIP Q&A sessions (Day 2 + Day 4). While she can't guarantee reviewing every
                single shop live, she prioritizes VIPs who show up and ask. Plus, you'll learn a ton from watching other
                VIP shop reviews – many "aha moments" come from seeing feedback on shops similar to yours.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How long do I keep access to everything?</h3>
              <p className="faq-answer">
                <strong>Lifetime.</strong> The recordings, toolkit, and all materials stay in your account forever.
                Rewatch anytime, download the tools, keep the templates. The only time-limited parts are the live Q&A
                sessions and 7-day WhatsApp group (which happen during the challenge week).
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I upgrade later?</h3>
              <p className="faq-answer">
                No. VIP upgrades close when registration closes (before the challenge starts). Once the challenge begins,
                VIP spots are gone and you can't add them later. This is your only chance to upgrade at this price.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How does the money-back guarantee work?</h3>
              <p className="faq-answer">
                Simple: Join VIP, participate in the challenge, use all the materials. If within 7 days after the challenge
                ends you don't feel more confident and clear about your Etsy shop, email us and we'll refund your $67.
                No awkward questions, no hoops, just email and we'll process it.
              </p>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="final-cta-box-etsy">
            <h2 className="final-cta-headline-etsy">
              Ready to Actually <span className="highlight-gradient">Implement</span> What You Learn?
            </h2>
            <p className="final-cta-description-etsy">
              If you're on the fence, join VIP now. It's the same challenge, but with recordings, personal support,
              and tools that make it almost impossible not to implement.
            </p>
            <div className="final-cta-price-display">
              <div className="final-price-etsy">
                <span className="final-currency-etsy">$</span>
                <span className="final-amount-etsy">67</span>
              </div>
              <div className="final-price-details-etsy">
                <p>One-time investment • Lifetime access • 7-day money-back guarantee</p>
              </div>
            </div>
            <a href="#upgrade" className="btn-primary-massive-etsy">
              YES, UPGRADE ME TO VIP FOR $67
            </a>
            <a href="#free" className="btn-text-link-etsy final">
              No thanks, I'll keep the free ticket
            </a>
          </div>

          <p className="final-ps-etsy">
            <strong>P.S.</strong> The difference between "I'll do this someday" and "I actually launched my shop"?
            Having recordings when life interrupts, tools when you're stuck, and Bailey in your pocket when you need
            feedback. This is your moment. Take it.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-etsy">
        <div className="footer-content-etsy">
          <p>© 2025 Bailey Vann | 3-Day Etsy Accelerator VIP Experience</p>
          <div className="footer-links-etsy">
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
