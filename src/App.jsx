import heroBg from '/assets/hero-bg.jpg';
import editorialPortrait from '/assets/editorial-portrait.jpg';
import weddingThumb from '/assets/wedding-thumb.jpg';
import celebrationThumb from '/assets/celebration-thumb.jpg';
import engagementThumb from '/assets/engagement-thumb.jpg';
import motherhoodThumb from '/assets/motherhood-thumb.jpg';
import familyThumb from '/assets/family-thumb.jpg';
import portraitThumb from '/assets/portrait-thumb.jpg';
import teamPhoto from '/assets/team-photo.jpg';
import ctaPhoto from '/assets/cta-photo.jpg';
import quoteLeft from '/assets/quote-left.svg';
import quoteRight from '/assets/quote-right.svg';
import cameraIcon from '/assets/camera-icon.svg';
import envelopeIcon from '/assets/envelope-icon.svg';
import calendarIcon from '/assets/calendar-icon.svg';
import upArrowIcon from '/assets/up-arrow.svg';

const portfolioCards = [
  { id: '01', title: 'Weddings', image: weddingThumb },
  { id: '02', title: 'Celebrations', image: celebrationThumb },
  { id: '03', title: 'Engagements', image: engagementThumb },
  { id: '04', title: 'Motherhood', image: motherhoodThumb },
  { id: '05', title: 'Family stories', image: familyThumb },
  { id: '06', title: 'Portraits', image: portraitThumb },
];

const processCards = [
  {
    number: '01',
    label: 'LET’S CONNECT',
    title: 'Tell us your vision',
    description: ['Share your date, your people and', 'what you want to remember.', 'We’ll plan a session around you.'],
  },
  {
    number: '02',
    label: 'BE IN THE MOMENT',
    title: 'Relax. We’ll guide you.',
    description: ['With a little direction and plenty', 'of space to be yourself, we’ll', 'capture the real connections.'],
  },
  {
    number: '03',
    label: 'KEEP THE FEELING',
    title: 'Relive it, beautifully',
    description: ['Receive a thoughtfully edited', 'online gallery, ready to download,', 'share and turn into keepsakes.'],
  },
];

const serviceCards = [
  {
    title: 'Weddings',
    tagline: 'Love, unscripted',
    text: 'The big moments, the quiet glances, and everyone who makes it yours. Your wedding, remembered honestly.',
    image: weddingThumb,
  },
  {
    title: 'Portraits',
    tagline: 'Simply you',
    text: 'No perfect poses. No need to perform. Just gentle direction and room to be yourself, in your own beautiful way.',
    image: portraitThumb,
  },
  {
    title: 'Families',
    tagline: 'Every chapter',
    text: 'Tiny hands, growing families, and the joy of being together. We make space for the moments that matter.',
    image: familyThumb,
  },
];

const footerLinks = {
  explore: ['Our story', 'Photography', 'Our process', 'Selected work'],
  contact: ['Plan your session', 'Wedding enquiries', 'Portrait bookings', 'Follow our stories'],
};

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-mark">Still & Story</div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#studio">THE STUDIO</a>
          <a href="#work">OUR WORK</a>
          <a href="#experience">THE EXPERIENCE</a>
        </nav>

        <button type="button" className="nav-cta">
          BOOK A SESSION <span>↗</span>
        </button>
      </header>

      <main>
        <section className="hero" id="studio">
          <div className="hero-media">
            <img src={heroBg} alt="Wedding portrait" />
            <div className="hero-overlay" />
          </div>

          <div className="hero-content">
            <h1>
              For the moments
              <span>that become forever.</span>
            </h1>
          </div>

          <div className="slider-dots" aria-label="Hero slider controls">
            <span className="active" />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="story section-shell" id="work">
          <div className="story-portrait-wrap">
            <div className="story-portrait">
              <img src={editorialPortrait} alt="Editorial portrait" />
            </div>
            <p className="story-kicker">A THOUGHTFUL EYE. A HUMAN CONNECTION.</p>
          </div>

          <div className="story-copy">
            <div className="eyebrow">01 / THE STUDIO</div>
            <h2>
              Your story,
              <span>beautifully told.</span>
            </h2>
            <p className="lead">
              We capture weddings, portraits and the
              <span>beautiful in-between, just as they unfold.</span>
            </p>

            <blockquote>
              <img src={quoteLeft} alt="" aria-hidden="true" className="quote quote-left" />
              <img src={quoteRight} alt="" aria-hidden="true" className="quote quote-right" />
              Honest connection. Natural light.
              <span>Photographs that feel like you.</span>
            </blockquote>

            <div className="sig">Jonah g, CEO @ yoniPhotographery</div>

            <button className="secondary-button" type="button">
              GET TO KNOW US <span>↗</span>
            </button>
          </div>
        </section>

        <section className="gallery section-shell">
          <header className="section-header center-block">
            <div className="eyebrow">02 / WHAT WE PHOTOGRAPH</div>
            <h2>Life, in every frame.</h2>
            <p>For the big days, the small joys, and everything in between.</p>
          </header>

          <div className="gallery-grid">
            {portfolioCards.map((card) => (
              <article className="gallery-card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="card-label">
                  <span className="card-number">{card.id}</span>
                  <span className="card-title">{card.title}</span>
                  <span className="card-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>

          <div className="gallery-footer">
            <span className="divider" />
            <div className="gallery-meta">
              <p>A MOMENT TODAY. A MEMORY FOR ALWAYS.</p>
              <p>STILL & STORY / COLLECTIONS</p>
            </div>
          </div>
        </section>

        <section className="selected-stories section-shell" id="experience">
          <div className="selected-header">
            <h2>Selected stories</h2>
            <p>LOVE. LIFE. EVERYTHING BETWEEN.</p>
          </div>

          <div className="selected-grid">
            <div className="story-tile"><img src={engagementThumb} alt="Engagement story" /></div>
            <div className="story-tile"><img src={celebrationThumb} alt="Celebration story" /></div>
            <div className="story-tile"><img src={weddingThumb} alt="Wedding story" /></div>
            <div className="story-tile"><img src={portraitThumb} alt="Portrait story" /></div>
            <div className="story-tile"><img src={familyThumb} alt="Family story" /></div>
            <div className="story-tile"><img src={motherhoodThumb} alt="Motherhood story" /></div>
          </div>

          <button className="portfolio-button" type="button">
            EXPLORE THE PORTFOLIO <span>↗</span>
          </button>
        </section>

        <section className="process section-shell">
          <header className="section-header center-block reduced">
            <div className="eyebrow">04 / THE EXPERIENCE</div>
            <h2>From hello to heirloom</h2>
          </header>

          <div className="process-grid">
            {processCards.map((card) => (
              <article key={card.number} className="process-card">
                <span className="process-divider" />
                <div className="process-head">
                  <span className="process-number">{card.number}</span>
                  <span className="process-label">{card.label}</span>
                </div>
                <h3>{card.title}</h3>
                <p>
                  {card.description.map((line, index) => (
                    <span key={`${card.number}-${line}-${index}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>

          <button className="primary-button dark" type="button">
            BOOK A SESSION <span>↗</span>
          </button>
        </section>

        <section className="team section-shell">
          <div className="team-photo">
            <img src={teamPhoto} alt="Photographer team" />
          </div>

          <div className="team-band">
            <div className="eyebrow light">05 / THE PEOPLE</div>
            <h3>Meet the people behind the lens</h3>
            <div className="eyebrow light right">THE STUDIO <span>↗</span></div>
          </div>
        </section>

        <section className="services section-shell">
          <header className="section-header center-block reduced">
            <div className="eyebrow">06 / ALWAYS PERSONAL</div>
            <h2>A personal approach</h2>
          </header>

          <div className="services-grid">
            {serviceCards.map((card) => (
              <article key={card.title} className="service-card">
                <div className="service-divider" />
                <p className="service-copy">{card.text}</p>
                <div className="service-meta">
                  <img src={card.image} alt={card.title} />
                  <div>
                    <strong>{card.title}</strong>
                    <span>{card.tagline}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="eyebrow center">YOU BRING THE STORY. WE HELP YOU KEEP IT.</div>
        </section>

        <section className="cta section-shell">
          <div className="cta-media">
            <img src={ctaPhoto} alt="Couple walking together" />
            <div className="cta-overlay" />
          </div>

          <div className="cta-inner">
            <div className="eyebrow light">A NEW CHAPTER STARTS HERE</div>
            <h2>
              Let’s make something
              <span>worth keeping.</span>
            </h2>
            <p>Your next chapter starts with hello.</p>
            <button className="primary-button light" type="button">
              TELL US YOUR STORY <span>↗</span>
            </button>
          </div>

          <div className="cta-footer">
            <p>WEDDINGS / PORTRAITS / FAMILY STORIES</p>
            <p>STILL & STORY</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="brand-col">
            <div className="brand-mark footer-brand">Still & Story</div>
            <p className="brand-quote">Photography for life’s most meaningful moments.</p>
            <p className="brand-sub">Weddings, portraits & families. Beautifully seen. Honestly told.</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>EXPLORE</h4>
              {footerLinks.explore.map((link) => (
                <a href="#" key={link}>{link}</a>
              ))}
            </div>
            <div>
              <h4>GET IN TOUCH</h4>
              {footerLinks.contact.map((link) => (
                <a href="#" key={link}>{link}</a>
              ))}
            </div>
          </div>

          <div className="social-icons" aria-label="Quick links">
            <img src={cameraIcon} alt="Photography stories" />
            <img src={envelopeIcon} alt="Email enquiries" />
            <img src={calendarIcon} alt="Book a session" />
            <img src={upArrowIcon} alt="Back to top" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Still & Story Photography</span>
          <span>MADE FOR MEANINGFUL MOMENTS.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
