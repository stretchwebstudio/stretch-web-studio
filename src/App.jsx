import React, { useEffect, useMemo, useState } from "react";

const navItems = ["Services", "Work", "Process", "Pricing", "Contact"];

const services = [
    {
        icon: "design",
        title: "Custom Website Design",
        description: "Modern, responsive websites built around your brand, goals, and customer experience.",
    },
    {
        icon: "growth",
        title: "Growth-Focused Pages",
        description: "Landing pages and service pages designed to guide visitors toward booking, calling, or buying.",
    },
    {
        icon: "seo",
        title: "SEO Starter Setup",
        description: "Clean page structure, search-friendly content, and metadata to help your business get discovered.",
    },
    {
        icon: "speed",
        title: "Smooth User Experience",
        description: "Fast-loading layouts, clear navigation, polished transitions, and mobile-first design.",
    },
    {
        icon: "brand",
        title: "Brand Direction",
        description: "Color, layout, copy, and visual direction that make your business feel consistent and trustworthy.",
    },
    {
        icon: "support",
        title: "Website Support",
        description: "Updates, small edits, launch help, and ongoing improvements after your site goes live.",
    },
];

const packages = [
    {
        name: "Managed Stretch",
        price: "$500 upfront",
        description: "Best for clients who want a website plus ongoing help, edits, upkeep, management, and updates.",
        features: [
            "$50/month for the first 12 months",
            "Unlimited requested updates and changes",
            "Website upkeep and basic management included",
            "Drops to $25/month after 12 months",
            "Cancel anytime after the first year",
        ],
        highlighted: true,
    },
    {
        name: "One-Time Stretch",
        price: "$700 upfront",
        description: "Best for clients who want a finished website with no monthly plan or ongoing update service.",
        features: [
            "One-time website build payment",
            "No additional monthly fees",
            "No ongoing edits or update service included",
            "Finished site delivered after launch",
            "Best for clients who want to manage changes themselves",
        ],
    },
];

const portfolio = [
    "Service Business Website",
    "Creative Brand Landing Page",
    "Booking-Focused Homepage",
    "Local Business Redesign",
];

const processSteps = [
    ["01", "Discover", "We talk through your business, audience, style, and what your website needs to accomplish."],
    ["02", "Design", "I create a modern direction that feels like your brand and makes the user path simple."],
    ["03", "Build", "The site is built responsive, clean, and easy to use across phone, tablet, and desktop."],
    ["04", "Launch", "We polish the details, test the experience, and get your website ready to stretch your reach."],
];

function runSelfTests() {
    console.assert(navItems.length === 5, "Expected five navigation items.");
    console.assert(navItems.includes("Contact"), "Navigation should include Contact.");
    console.assert(services.length === 6, "Expected six service cards.");
    console.assert(packages.length === 2, "Expected two pricing packages.");
    console.assert(packages.filter((plan) => plan.highlighted).length === 1, "Expected exactly one highlighted package.");
    console.assert(packages.some((plan) => plan.price.includes("$500")), "Expected a $500 upfront managed package.");
    console.assert(packages.some((plan) => plan.price.includes("$700")), "Expected a $700 upfront one-time package.");
    console.assert(portfolio.length === 4, "Expected four work examples.");
    console.assert(processSteps.length === 4, "Expected four process steps.");
    console.assert(services.every((service) => service.title && service.description), "Each service needs a title and description.");
}

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        runSelfTests();
    }, []);

    const floatingDots = useMemo(
        () =>
            Array.from({ length: 18 }, (_, i) => ({
                id: i,
                left: `${(i * 29) % 100}%`,
                top: `${(i * 47) % 100}%`,
                delay: `${(i % 6) * 0.35}s`,
                duration: `${5 + (i % 5)}s`,
            })),
        []
    );

    const scrollTo = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    return (
        <div className="site-shell">
            <style>{styles}</style>

            <div className="soft-grid" aria-hidden="true" />
            <div className="floating-layer" aria-hidden="true">
                {floatingDots.map((dot) => (
                    <span
                        key={dot.id}
                        className="floating-dot"
                        style={{ left: dot.left, top: dot.top, animationDelay: dot.delay, animationDuration: dot.duration }}
                    />
                ))}
            </div>

            <header className="site-header">
                <nav className="nav-container">
                    <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to home">
                        <span className="brand-mark">
                            <Icon name="stretch" />
                        </span>
                        <span className="brand-copy">
                            <strong>Stretch</strong>
                            <small>Web Studio</small>
                        </span>
                    </button>

                    <div className="desktop-nav">
                        {navItems.map((item) => (
                            <button key={item} onClick={() => scrollTo(item)}>
                                {item}
                            </button>
                        ))}
                    </div>

                    <button className="nav-cta" onClick={() => scrollTo("contact")}>
                        Stretch My Business
                    </button>

                    <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation menu">
                        <Icon name={menuOpen ? "x" : "menu"} />
                    </button>
                </nav>

                {menuOpen && (
                    <div className="mobile-nav">
                        {navItems.map((item) => (
                            <button key={item} onClick={() => scrollTo(item)}>
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            <main id="home">
                <section className="hero section-container">
                    <div className="hero-copy animate-up">
                        <div className="eyebrow-pill">
                            <Icon name="spark" />
                            Websites built to stretch your business further
                        </div>

                        <h1>
                            Modern websites that help your business <span>stretch, stand out,</span> and grow.
                        </h1>

                        <p className="hero-description">
                            Stretch Web Studio creates clean, creative, and conversion-focused websites for small businesses, personal brands, and local services that want to look sharper online.
                        </p>

                        <div className="hero-actions">
                            <button className="primary-button" onClick={() => scrollTo("contact")}>
                                Start Stretching <Icon name="arrow" />
                            </button>
                            <button className="secondary-button" onClick={() => scrollTo("work")}>
                                See the Style
                            </button>
                        </div>

                        <div className="quick-proof">
                            <div>
                                <strong>Responsive</strong>
                                <span>Looks great on every screen</span>
                            </div>
                            <div>
                                <strong>Creative</strong>
                                <span>Modern visuals and smooth flow</span>
                            </div>
                            <div>
                                <strong>Growth</strong>
                                <span>Built with clear next steps</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual animate-scale">
                        <div className="orbit orbit-one" />
                        <div className="orbit orbit-two" />

                        <div className="growth-card">
                            <div className="growth-top">
                                <span className="mini-logo"><Icon name="stretch" /></span>
                                <div>
                                    <strong>Stretch Score</strong>
                                    <small>Website growth preview</small>
                                </div>
                            </div>

                            <div className="growth-number">+128%</div>
                            <p>More trust, cleaner pages, and a stronger path from visitor to customer.</p>

                            <div className="stretch-graphic">
                                <span className="curve curve-one" />
                                <span className="curve curve-two" />
                                <span className="curve curve-three" />
                                <span className="curve curve-four" />
                                <span className="node node-one" />
                                <span className="node node-two" />
                                <span className="node node-three" />
                                <span className="node node-four" />
                                <span className="arrow-head" />
                            </div>

                            <div className="mini-metrics">
                                <span>Design</span>
                                <span>Speed</span>
                                <span>Trust</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="section-container section-padding">
                    <SectionHeader
                        eyebrow="What I Build"
                        title="Websites that feel creative, but still make business sense."
                        description="Every page is designed to be easy to use, visually polished, and focused on helping visitors take action."
                    />

                    <div className="services-grid">
                        {services.map((service) => (
                            <article key={service.title} className="glass-card lift-card reveal-card">
                                <span className="icon-bubble"><Icon name={service.icon} /></span>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="work" className="section-container section-padding work-section">
                    <div className="split-heading">
                        <SectionHeader
                            align="left"
                            eyebrow="Creative Direction"
                            title="A look and feel that matches the Stretch brand."
                            description="Your website should feel smooth, memorable, and professional without being boring. This section can become your project gallery once you have finished examples."
                        />
                        <div className="marquee-card">
                            <div className="marquee-track">
                                <span>Websites that stretch your reach</span>
                                <span>Better pages</span>
                                <span>Cleaner brands</span>
                                <span>More trust</span>
                                <span>Websites that stretch your reach</span>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-grid">
                        {portfolio.map((item, index) => (
                            <article key={item} className="portfolio-card lift-card">
                                <div className="portfolio-preview">
                                    <span className="preview-pill" />
                                    <span className="preview-title" />
                                    <span className="preview-copy" />
                                    <div className="preview-blocks">
                                        <span />
                                        <span />
                                    </div>
                                </div>
                                <div className="portfolio-label">
                                    <strong>{item}</strong>
                                    <span>0{index + 1}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="process" className="section-container section-padding">
                    <SectionHeader
                        eyebrow="How It Works"
                        title="A simple process from idea to launch."
                        description="I keep the project organized, visual, and easy to follow so the final website feels like you and works for your customers."
                    />

                    <div className="process-grid">
                        {processSteps.map(([number, title, text]) => (
                            <article key={title} className="process-card reveal-card">
                                <span>{number}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="pricing" className="section-container section-padding">
                    <SectionHeader
                        eyebrow="Packages"
                        title="Choose the package that fits how you want to manage your site."
                        description="Pick ongoing support for updates and upkeep, or choose a one-time build with no monthly fees."
                    />

                    <div className="pricing-grid">
                        {packages.map((plan) => (
                            <article key={plan.name} className={`price-card lift-card ${plan.highlighted ? "featured" : ""}`}>
                                {plan.highlighted && <span className="popular-tag">Best Value</span>}
                                <h3>{plan.name}</h3>
                                <p>{plan.description}</p>
                                <strong className="price">{plan.price}</strong>
                                <ul>
                                    {plan.features.map((feature) => (
                                        <li key={feature}><Icon name="check" /> {feature}</li>
                                    ))}
                                </ul>
                                <button className={plan.highlighted ? "price-button featured-button" : "price-button"} onClick={() => scrollTo("contact")}>
                                    Choose {plan.name}
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section-container section-padding">
                    <div className="statement-panel">
                        <div>
                            <span className="section-eyebrow">Brand Message</span>
                            <h2>Don’t just get online. Stretch what your business can become.</h2>
                        </div>
                        <div className="statement-list">
                            <div><Icon name="check" /> <p>Make your first impression feel more professional.</p></div>
                            <div><Icon name="check" /> <p>Give customers a smoother path to contact you.</p></div>
                            <div><Icon name="check" /> <p>Build a website that supports growth instead of just sitting there.</p></div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section-container section-padding contact-padding">
                    <div className="contact-panel">
                        <div>
                            <span className="section-eyebrow">Contact</span>
                            <h2>Ready to stretch your online presence?</h2>
                            <p>
                                Tell me about your business, what you want the website to do, and the style you are going for. I will help map out the next step.
                            </p>
                            <div className="contact-info">
                                <span>hello@stretchwebstudio.com</span>
                                <span>Web Design • Landing Pages • Marketing Support</span>
                                <span>Built for small businesses and personal brands</span>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                            <div className="form-row">
                                <Input label="Name" placeholder="Your name" />
                                <Input label="Email" placeholder="you@email.com" type="email" />
                            </div>
                            <Input label="Business Name" placeholder="Your business or brand" />
                            <label>
                                <span>What do you need?</span>
                                <select>
                                    <option>New website</option>
                                    <option>Website redesign</option>
                                    <option>Landing page</option>
                                    <option>Brand / design direction</option>
                                    <option>Ongoing website support</option>
                                </select>
                            </label>
                            <label>
                                <span>Project Details</span>
                                <textarea rows={5} placeholder="Tell me what you want to build..." />
                            </label>
                            <button className="primary-button full-button">
                                Send Message <Icon name="arrow" />
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <p>© 2026 Stretch Web Studio. Websites built to stretch your business further.</p>
            </footer>
        </div>
    );
}

function SectionHeader({ eyebrow, title, description, align = "center" }) {
    return (
        <div className={`section-header ${align === "left" ? "left" : "center"}`}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

function Input({ label, placeholder, type = "text" }) {
    return (
        <label>
            <span>{label}</span>
            <input type={type} placeholder={placeholder} />
        </label>
    );
}

function Icon({ name }) {
    const common = {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
    };

    const icons = {
        arrow: (
            <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        ),
        brand: (
            <svg {...common}><path d="M4 20 20 4" /><path d="M8 20h8" /><path d="M20 4v8" /></svg>
        ),
        check: (
            <svg {...common}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-5" /></svg>
        ),
        design: (
            <svg {...common}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
        ),
        growth: (
            <svg {...common}><path d="M3 17 9 11l4 4 8-8" /><path d="M14 7h7v7" /></svg>
        ),
        menu: (
            <svg {...common}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>
        ),
        seo: (
            <svg {...common}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" /></svg>
        ),
        spark: (
            <svg {...common}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /></svg>
        ),
        speed: (
            <svg {...common}><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" /></svg>
        ),
        stretch: (
            <svg {...common}><path d="M3 17c7 0 12-3 18-11" /><path d="M15 6h6v6" /><path d="M6 17c5-1 8-3 12-8" /></svg>
        ),
        support: (
            <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
        ),
        x: (
            <svg {...common}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        ),
    };

    return icons[name] || icons.stretch;
}

const styles = `
  :root {
    --orange: #ff6a00;
    --orange-2: #ff8a1f;
    --orange-3: #ffb06b;
    --ink: #20232a;
    --muted: #5d6470;
    --soft: #f7f4f1;
    --white: #ffffff;
    --line: rgba(32, 35, 42, 0.11);
    --shadow: 0 24px 70px rgba(32, 35, 42, 0.11);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  button, input, select, textarea { font: inherit; }
  button { cursor: pointer; }
  svg { width: 1.15em; height: 1.15em; flex-shrink: 0; }

  .site-shell {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--ink);
    background:
      radial-gradient(circle at 78% 8%, rgba(255, 106, 0, 0.18), transparent 28%),
      radial-gradient(circle at 10% 30%, rgba(255, 176, 107, 0.22), transparent 24%),
      linear-gradient(180deg, #ffffff 0%, #f7f4f1 48%, #ffffff 100%);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .soft-grid {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.38;
    background-image:
      linear-gradient(rgba(32,35,42,0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32,35,42,0.045) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(circle at center, black, transparent 72%);
  }

  .floating-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .floating-dot {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255, 106, 0, 0.28);
    animation: floatDot 7s ease-in-out infinite;
  }

  @keyframes floatDot {
    0%, 100% { transform: translate3d(0, -8px, 0) scale(0.8); opacity: 0.25; }
    50% { transform: translate3d(18px, 18px, 0) scale(1.2); opacity: 0.85; }
  }

  .site-header, main, .site-footer { position: relative; z-index: 2; }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid rgba(32, 35, 42, 0.09);
    background: rgba(255, 255, 255, 0.76);
    backdrop-filter: blur(18px);
  }

  .nav-container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .brand, .desktop-nav button, .menu-toggle {
    border: 0;
    background: transparent;
    color: inherit;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
  }

  .brand-mark, .mini-logo {
    display: grid;
    place-items: center;
    color: #fff;
    background: linear-gradient(135deg, var(--orange), var(--orange-2));
    box-shadow: 0 18px 34px rgba(255, 106, 0, 0.24);
  }

  .brand-mark {
    width: 46px;
    height: 46px;
    border-radius: 18px;
  }

  .brand-copy { display: grid; text-align: left; line-height: 1.05; }
  .brand-copy strong { font-size: 22px; letter-spacing: -0.04em; color: var(--orange); }
  .brand-copy small { margin-top: 5px; color: #2c2f36; text-transform: uppercase; letter-spacing: 0.24em; font-weight: 800; font-size: 11px; }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .desktop-nav button {
    color: #3b3f46;
    font-weight: 700;
    transition: color 180ms ease, transform 180ms ease;
  }

  .desktop-nav button:hover {
    color: var(--orange);
    transform: translateY(-1px);
  }

  .nav-cta, .primary-button, .secondary-button, .price-button {
    border: 0;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-weight: 850;
    transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, color 220ms ease;
  }

  .nav-cta, .primary-button, .featured-button {
    color: #fff;
    background: linear-gradient(90deg, var(--orange), var(--orange-2));
    box-shadow: 0 16px 34px rgba(255, 106, 0, 0.22);
  }

  .nav-cta { padding: 12px 18px; }
  .primary-button { padding: 15px 26px; }

  .nav-cta:hover, .primary-button:hover, .secondary-button:hover, .price-button:hover {
    transform: translateY(-3px);
  }

  .secondary-button, .price-button {
    padding: 15px 26px;
    color: var(--ink);
    background: rgba(255,255,255,0.78);
    border: 1px solid rgba(32,35,42,0.12);
  }

  .secondary-button:hover, .price-button:hover {
    color: var(--orange);
    border-color: rgba(255, 106, 0, 0.38);
    box-shadow: 0 14px 30px rgba(32, 35, 42, 0.08);
  }

  .menu-toggle {
    display: none;
    font-size: 25px;
  }

  .mobile-nav {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
    display: grid;
    gap: 8px;
    padding: 0 0 16px;
    animation: dropIn 220ms ease both;
  }

  .mobile-nav button {
    border: 1px solid rgba(32,35,42,0.1);
    background: rgba(255,255,255,0.72);
    border-radius: 16px;
    padding: 13px 14px;
    text-align: left;
    color: var(--ink);
    font-weight: 750;
  }

  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .section-container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
  }

  .section-padding { padding: 82px 0; }

  .hero {
    min-height: calc(100vh - 78px);
    padding: 84px 0;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 48px;
  }

  .animate-up { animation: revealUp 720ms cubic-bezier(.2,.7,.2,1) both; }
  .animate-scale { animation: revealScale 760ms cubic-bezier(.2,.7,.2,1) 120ms both; }

  @keyframes revealUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes revealScale {
    from { opacity: 0; transform: translateY(20px) scale(0.94); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .eyebrow-pill {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 10px 16px;
    border-radius: 999px;
    color: #c04d00;
    background: rgba(255, 106, 0, 0.1);
    border: 1px solid rgba(255, 106, 0, 0.17);
    font-weight: 800;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .hero h1 {
    margin: 0;
    max-width: 860px;
    font-size: clamp(48px, 7.2vw, 82px);
    line-height: 0.96;
    letter-spacing: -0.07em;
    font-weight: 980;
  }

  .hero h1 span {
    color: var(--orange);
    position: relative;
    white-space: nowrap;
  }

  .hero h1 span::after {
    content: "";
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 4px;
    height: 12px;
    background: rgba(255, 106, 0, 0.16);
    border-radius: 999px;
    z-index: -1;
  }

  .hero-description {
    max-width: 650px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.78;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }

  .quick-proof {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    max-width: 670px;
  }

  .quick-proof div {
    padding: 18px;
    border: 1px solid rgba(32,35,42,0.1);
    border-radius: 24px;
    background: rgba(255,255,255,0.68);
    box-shadow: 0 18px 40px rgba(32,35,42,0.06);
  }

  .quick-proof strong { display: block; color: var(--ink); font-size: 17px; }
  .quick-proof span { display: block; margin-top: 6px; color: var(--muted); font-size: 13px; line-height: 1.5; }

  .hero-visual {
    position: relative;
    min-height: 540px;
    display: grid;
    place-items: center;
  }

  .orbit {
    position: absolute;
    border-radius: 999px;
    border: 1px solid rgba(255, 106, 0, 0.18);
    animation: orbitSpin 12s linear infinite;
  }

  .orbit-one { width: 440px; height: 440px; }
  .orbit-two { width: 320px; height: 320px; animation-duration: 9s; animation-direction: reverse; }

  @keyframes orbitSpin {
    to { transform: rotate(360deg); }
  }

  .growth-card {
    position: relative;
    width: min(100%, 460px);
    border-radius: 38px;
    padding: 30px;
    border: 1px solid rgba(32,35,42,0.1);
    background: rgba(255,255,255,0.82);
    box-shadow: var(--shadow);
    backdrop-filter: blur(18px);
    overflow: hidden;
  }

  .growth-card::before {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;
    right: -80px;
    top: -80px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,106,0,0.22), transparent 64%);
  }

  .growth-top {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .mini-logo {
    width: 54px;
    height: 54px;
    border-radius: 20px;
    font-size: 24px;
  }

  .growth-top strong { display: block; font-size: 20px; }
  .growth-top small { color: var(--muted); font-weight: 700; }

  .growth-number {
    position: relative;
    margin-top: 28px;
    color: var(--orange);
    font-size: 72px;
    font-weight: 950;
    letter-spacing: -0.08em;
  }

  .growth-card p {
    position: relative;
    margin: 4px 0 0;
    color: var(--muted);
    line-height: 1.7;
  }

  .stretch-graphic {
    position: relative;
    height: 220px;
    margin-top: 28px;
  }

  .curve {
    position: absolute;
    left: 8px;
    bottom: 28px;
    border-radius: 999px;
    transform-origin: left center;
    background: linear-gradient(90deg, rgba(255,176,107,0.18), var(--orange));
    animation: stretchLine 2.5s ease-in-out infinite alternate;
  }

  .curve-one { width: 270px; height: 3px; transform: rotate(-2deg); opacity: 0.55; }
  .curve-two { width: 300px; height: 5px; transform: rotate(-13deg); opacity: 0.7; animation-delay: .2s; }
  .curve-three { width: 330px; height: 7px; transform: rotate(-24deg); opacity: 0.85; animation-delay: .4s; }
  .curve-four { width: 360px; height: 11px; transform: rotate(-34deg); animation-delay: .6s; }

  @keyframes stretchLine {
    from { width: 72%; filter: saturate(0.9); }
    to { width: 88%; filter: saturate(1.2); }
  }

  .node {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--orange);
    box-shadow: 0 10px 22px rgba(255,106,0,0.28);
    animation: pulseNode 1.8s ease-in-out infinite;
  }

  .node-one { left: 185px; bottom: 38px; }
  .node-two { left: 245px; bottom: 82px; animation-delay: .2s; }
  .node-three { left: 310px; bottom: 138px; animation-delay: .4s; }
  .node-four { left: 350px; bottom: 170px; animation-delay: .6s; }

  @keyframes pulseNode {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.22); }
  }

  .arrow-head {
    position: absolute;
    right: 18px;
    top: 12px;
    width: 0;
    height: 0;
    border-left: 34px solid var(--orange);
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
    transform: rotate(-35deg);
    filter: drop-shadow(0 16px 18px rgba(255, 106, 0, 0.22));
  }

  .mini-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .mini-metrics span {
    text-align: center;
    padding: 12px;
    border-radius: 18px;
    color: #c04d00;
    background: rgba(255, 106, 0, 0.1);
    font-weight: 850;
  }

  .section-header.center {
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
  }

  .section-header.left {
    max-width: 650px;
    text-align: left;
  }

  .section-eyebrow {
    display: inline-block;
    color: var(--orange);
    font-size: 13px;
    font-weight: 950;
    letter-spacing: 0.24em;
    text-transform: uppercase;
  }

  .section-header h2, .statement-panel h2, .contact-panel h2 {
    margin: 15px 0 0;
    font-size: clamp(34px, 5vw, 56px);
    line-height: 1.02;
    letter-spacing: -0.055em;
    font-weight: 950;
  }

  .section-header p, .contact-panel p {
    margin: 18px 0 0;
    color: var(--muted);
    line-height: 1.75;
    font-size: 16px;
  }

  .services-grid, .pricing-grid {
    margin-top: 48px;
    display: grid;
    gap: 20px;
  }

  .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .pricing-grid {
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .glass-card, .portfolio-card, .process-card, .price-card, .contact-panel {
    border: 1px solid rgba(32,35,42,0.1);
    background: rgba(255,255,255,0.74);
    backdrop-filter: blur(16px);
    box-shadow: 0 20px 50px rgba(32,35,42,0.07);
  }

  .glass-card {
    border-radius: 30px;
    padding: 28px;
  }

  .lift-card {
    transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
  }

  .lift-card:hover {
    transform: translateY(-9px);
    border-color: rgba(255,106,0,0.34);
    box-shadow: 0 28px 70px rgba(255,106,0,0.12);
  }

  .reveal-card {
    animation: fadeInUp both;
    animation-timeline: view();
    animation-range: entry 8% cover 26%;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .icon-bubble {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 20px;
    color: var(--orange);
    background: rgba(255,106,0,0.1);
    margin-bottom: 20px;
    font-size: 24px;
  }

  .glass-card h3, .process-card h3, .price-card h3 {
    margin: 0;
    font-size: 22px;
    letter-spacing: -0.025em;
  }

  .glass-card p, .process-card p, .price-card p {
    margin: 12px 0 0;
    color: var(--muted);
    line-height: 1.7;
  }

  .work-section { overflow: hidden; }

  .split-heading {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 34px;
    align-items: end;
  }

  .marquee-card {
    overflow: hidden;
    border-radius: 999px;
    border: 1px solid rgba(255,106,0,0.18);
    background: rgba(255,106,0,0.08);
    padding: 12px;
  }

  .marquee-track {
    display: flex;
    width: max-content;
    gap: 20px;
    animation: marquee 18s linear infinite;
  }

  .marquee-track span {
    color: #c04d00;
    font-weight: 900;
    white-space: nowrap;
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .portfolio-grid {
    margin-top: 44px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .portfolio-card {
    border-radius: 30px;
    padding: 16px;
  }

  .portfolio-preview {
    aspect-ratio: 4 / 3;
    border-radius: 24px;
    padding: 18px;
    overflow: hidden;
    background:
      radial-gradient(circle at 80% 20%, rgba(255,106,0,0.28), transparent 35%),
      linear-gradient(135deg, #272a31, #111318);
    transition: transform 350ms ease;
  }

  .portfolio-card:hover .portfolio-preview { transform: scale(1.035); }

  .preview-pill, .preview-title, .preview-copy {
    display: block;
    border-radius: 999px;
  }

  .preview-pill { width: 58px; height: 9px; background: rgba(255,255,255,0.28); }
  .preview-title { width: 82%; height: 20px; margin-top: 34px; background: rgba(255,255,255,0.44); }
  .preview-copy { width: 58%; height: 10px; margin-top: 14px; background: rgba(255,255,255,0.24); }

  .preview-blocks {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .preview-blocks span {
    height: 54px;
    border-radius: 18px;
    background: rgba(255,106,0,0.32);
  }

  .portfolio-label {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .portfolio-label strong { font-size: 15px; }
  .portfolio-label span { color: var(--orange); font-weight: 900; }

  .process-grid {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .process-card {
    border-radius: 30px;
    padding: 26px;
  }

  .process-card > span {
    display: inline-grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    color: #fff;
    background: linear-gradient(135deg, var(--orange), var(--orange-2));
    font-weight: 900;
    margin-bottom: 20px;
  }

  .price-card {
    position: relative;
    border-radius: 32px;
    padding: 30px;
    overflow: hidden;
  }

  .price-card.featured {
    border-color: rgba(255,106,0,0.48);
    background: linear-gradient(180deg, rgba(255,106,0,0.13), rgba(255,255,255,0.82));
    transform: translateY(-10px);
  }

  .popular-tag {
    display: inline-flex;
    margin-bottom: 16px;
    padding: 7px 12px;
    border-radius: 999px;
    color: #c04d00;
    background: rgba(255,106,0,0.13);
    font-weight: 900;
    font-size: 13px;
  }

  .price {
    display: block;
    margin-top: 24px;
    color: var(--orange);
    font-size: 44px;
    letter-spacing: -0.06em;
  }

  .price-card ul {
    list-style: none;
    padding: 0;
    margin: 24px 0;
    display: grid;
    gap: 12px;
  }

  .price-card li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #424852;
    font-weight: 700;
  }

  .price-card li svg { color: var(--orange); }
  .price-button { width: 100%; padding: 14px 18px; }

  .statement-panel {
    border-radius: 38px;
    padding: 40px;
    color: #fff;
    background:
      radial-gradient(circle at 90% 0%, rgba(255,176,107,0.34), transparent 30%),
      linear-gradient(135deg, #20232a, #111318);
    display: grid;
    grid-template-columns: 1fr 0.86fr;
    gap: 34px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .statement-panel .section-eyebrow { color: var(--orange-3); }

  .statement-list {
    display: grid;
    gap: 14px;
  }

  .statement-list div {
    display: flex;
    gap: 12px;
    padding: 16px;
    border-radius: 22px;
    background: rgba(255,255,255,0.09);
  }

  .statement-list svg { color: var(--orange-3); margin-top: 2px; }
  .statement-list p { margin: 0; color: rgba(255,255,255,0.84); line-height: 1.55; }

  .contact-padding { padding-bottom: 110px; }

  .contact-panel {
    border-radius: 38px;
    padding: 40px;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 36px;
  }

  .contact-info {
    margin-top: 28px;
    display: grid;
    gap: 12px;
    color: var(--muted);
    font-weight: 750;
  }

  .contact-form {
    display: grid;
    gap: 16px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  label { display: grid; gap: 8px; }
  label span { color: #30343b; font-weight: 850; }

  input, select, textarea {
    width: 100%;
    border: 1px solid rgba(32,35,42,0.12);
    border-radius: 18px;
    padding: 14px 16px;
    color: var(--ink);
    background: rgba(255,255,255,0.9);
    outline: none;
    transition: border-color 190ms ease, box-shadow 190ms ease, transform 190ms ease;
  }

  textarea { resize: vertical; }

  input:focus, select:focus, textarea:focus {
    border-color: rgba(255,106,0,0.55);
    box-shadow: 0 0 0 4px rgba(255,106,0,0.12);
    transform: translateY(-1px);
  }

  .full-button { width: 100%; }

  .site-footer {
    border-top: 1px solid rgba(32,35,42,0.1);
    background: rgba(255,255,255,0.72);
    text-align: center;
    padding: 26px 20px;
    color: var(--muted);
    font-weight: 700;
  }

  @media (max-width: 1050px) {
    .desktop-nav, .nav-cta { display: none; }
    .menu-toggle { display: inline-grid; place-items: center; }
    .hero, .split-heading, .statement-panel, .contact-panel {
      grid-template-columns: 1fr;
    }
    .hero-visual { min-height: 480px; }
    .services-grid, .pricing-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .portfolio-grid, .process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .price-card.featured { transform: none; }
  }

  @media (max-width: 680px) {
    .section-container, .nav-container, .mobile-nav { width: min(100% - 28px, 1180px); }
    .section-padding { padding: 62px 0; }
    .hero { padding: 58px 0; }
    .brand-copy strong { font-size: 19px; }
    .brand-copy small { font-size: 10px; letter-spacing: 0.18em; }
    .hero h1 { font-size: 42px; }
    .hero h1 span { white-space: normal; }
    .hero-description { font-size: 16px; }
    .quick-proof, .services-grid, .pricing-grid, .portfolio-grid, .process-grid, .form-row {
      grid-template-columns: 1fr;
    }
    .hero-visual { min-height: auto; padding: 20px 0 0; }
    .orbit { display: none; }
    .growth-card, .statement-panel, .contact-panel { border-radius: 28px; padding: 24px; }
    .growth-number { font-size: 56px; }
    .stretch-graphic { height: 180px; transform: scale(0.86); transform-origin: left center; }
    .statement-panel h2, .contact-panel h2, .section-header h2 { font-size: 34px; }
  }
`;
