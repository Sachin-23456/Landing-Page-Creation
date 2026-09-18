import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    title: "Business Cards",
    sub: "Make a lasting first impression",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85",
    color: "coral",
  },
  {
    title: "Marketing Materials",
    sub: "Flyers, brochures & more",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    color: "sky",
  },
  {
    title: "Signs & Banners",
    sub: "Big ideas deserve a big canvas",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
    color: "sun",
  },
  {
    title: "Custom Apparel",
    sub: "Put your brand in motion",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    color: "lilac",
  },
];

const services = [
  [
    "01",
    "Design that gets noticed",
    "From a spark of an idea to press-ready artwork, our designers make every detail matter.",
  ],
  [
    "02",
    "Print without compromise",
    "Rich colour, crisp detail, and premium stocks — crafted on presses we trust.",
  ],
  [
    "03",
    "Delivered right on time",
    "Local care and reliable shipping make getting your order refreshingly simple.",
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const submitNewsletter = (event) => {
    event.preventDefault();
    setNotice(
      email
        ? "You’re on the list — thank you!"
        : "Please enter your email address.",
    );
  };
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Free shipping on orders over $75</span>
          <div>
            <a href="#contact">Need help?</a>
            <span className="top-divider" /> <a href="#contact">Contact us</a>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Printwell home">
            <span className="brand-mark">
              <i />
              <i />
              <i />
            </span>
            <span>
              print<span>well</span>
            </span>
          </a>
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <a href="#products" onClick={() => setMenuOpen(false)}>
              Products
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About us
            </a>
          </nav>
          <div className="actions">
            <button className="icon-button" aria-label="Search">
              ⌕
            </button>
            <button className="icon-button account" aria-label="Account">
              ♙
            </button>
            <a className="quote-link" href="#contact">
              Get a quote <b>↗</b>
            </a>
            <button
              className="menu-button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A brighter way to print</p>
              <h1>
                Made to leave
                <br />
                <em>an impression.</em>
              </h1>
              <p className="hero-text">
                Beautiful print, made simple. From the first idea to the final
                delivery, we help your best work look its best.
              </p>
              <div className="hero-buttons">
                <a className="button button-dark" href="#products">
                  Shop products <b>→</b>
                </a>
                <a className="text-link" href="#how-it-works">
                  See how it works <b>↘</b>
                </a>
              </div>
              <div className="hero-rating">
                <div className="avatars">
                  <span>A</span>
                  <span>M</span>
                  <span>J</span>
                </div>
                <div>
                  <div className="stars">
                    ★★★★★ <small>4.9/5</small>
                  </div>
                  <p>Loved by 10,000+ makers and brands</p>
                </div>
              </div>
            </div>
            <div className="hero-art" aria-label="Colourful printed stationery">
              <div className="orange-blob" />
              <div className="paper paper-back">
                <span>
                  YOUR
                  <br />
                  NEXT
                  <br />
                  BIG IDEA
                </span>
              </div>
              <div className="paper paper-front">
                <div className="paper-logo">P</div>
                <div className="paper-title">
                  Create
                  <br />
                  <span>something</span>
                  <br />
                  brilliant.
                </div>
                <div className="paper-bottom">
                  <span>PRINT WELL</span>
                  <span>01 — 24</span>
                </div>
              </div>
              <div className="tape tape-one" />
              <div className="tape tape-two" />
              <div className="paint-dot dot-one" />
              <div className="paint-dot dot-two" />
              <div className="scribble">✦</div>
            </div>
          </div>
        </section>
        <section className="trust">
          <div className="container trust-grid">
            <p>Trusted by people who care about the details.</p>
            <div className="logos">
              <span>HORIZON</span>
              <span>northstar</span>
              <span>◎ Good Co.</span>
              <span>atelier.</span>
            </div>
          </div>
        </section>
        <section className="products section" id="products">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Find your perfect print</p>
                <h2>
                  Made for every
                  <br />
                  <em>kind of idea.</em>
                </h2>
              </div>
              <a className="text-link desktop-link" href="#products">
                Explore all products <b>→</b>
              </a>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <a
                  className={"product-card " + product.color}
                  href="#contact"
                  key={product.title}
                >
                  <div className="product-image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3>{product.title}</h3>
                      <p>{product.sub}</p>
                    </div>
                    <span className="circle-arrow">↗</span>
                  </div>
                </a>
              ))}
            </div>
            <a className="text-link mobile-link" href="#products">
              Explore all products <b>→</b>
            </a>
          </div>
        </section>
        <section className="statement" id="about">
          <div className="container statement-inner">
            <p className="eyebrow">More than ink on paper</p>
            <h2>
              We believe print is
              <br />a <em>feeling.</em>
            </h2>
            <p>
              It’s the pause before you open an invitation. The texture of a
              card in your hand. The unmistakable confidence of a brand that
              knows who it is.
            </p>
            <a className="button button-light" href="#contact">
              Meet Printwell <b>→</b>
            </a>
            <div className="statement-sticker">
              GOOD
              <br />
              THINGS
              <br />
              TAKE
              <br />
              SHAPE <span>✳</span>
            </div>
          </div>
        </section>
        <section className="process section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The easy part is next</p>
                <h2>
                  Good work, made
                  <br />
                  <em>simple.</em>
                </h2>
              </div>
            </div>
            <div className="service-list">
              {services.map(([number, title, text]) => (
                <article className="service" key={number}>
                  <span className="service-number">{number}</span>
                  <div className="service-icon">
                    {number === "01" ? "✎" : number === "02" ? "✳" : "⌁"}
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="cta" id="contact">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow">Let’s make something great</p>
              <h2>
                Got an idea?
                <br />
                <em>Let’s print it.</em>
              </h2>
            </div>
            <a
              href="mailto:hello@printwell.com"
              className="button button-coral"
            >
              Start a project <b>→</b>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-main">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">
                <i />
                <i />
                <i />
              </span>
              <span>
                print<span>well</span>
              </span>
            </a>
            <p>Print that feels like you.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <a href="#products">All products</a>
              <a href="#how-it-works">How it works</a>
              <a href="#about">Our story</a>
            </div>
            <div>
              <h4>Say hello</h4>
              <a href="mailto:hello@printwell.com">hello@printwell.com</a>
              <a href="tel:8005550110">(800) 555-0110</a>
              <a href="#contact">Request a quote</a>
            </div>
          </div>
          <form className="newsletter" onSubmit={submitNewsletter}>
            <h4>Good things in your inbox.</h4>
            <p>Fresh ideas, helpful tips, and an occasional offer.</p>
            <div>
              <input
                aria-label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
              />
              <button aria-label="Subscribe">→</button>
            </div>
            {notice && <small>{notice}</small>}
          </form>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Printwell Studio</span>
          <span>Made with care, everywhere.</span>
          <div>
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
