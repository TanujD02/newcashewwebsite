import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { ProductSlider } from "@/components/product-slider";
import { ScrollReveal } from "@/components/scroll-reveal";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { ADDRESS, HELP_URL, INSTAGRAM_URL, MAP_URL, ORDER_URL, PHONE_DISPLAY, PHONE_URL } from "@/lib/site";

const ribbonLines = [
  "DIRECT FROM FARM • NO CHEMICALS • ORGANIC • PREMIUM • HANDPICKED • NATURAL •",
  "ORGANIC • PREMIUM • HANDPICKED • NATURAL • DIRECT FROM FARM • NO CHEMICALS •",
  "NO CHEMICALS • ORGANIC • PREMIUM • HANDPICKED • NATURAL • DIRECT FROM FARM •",
  "HANDPICKED • NATURAL • DIRECT FROM FARM • NO CHEMICALS • ORGANIC • PREMIUM •",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-photo" aria-hidden="true">
            <Image src="/images/hero-cashews.jpg" alt="" fill sizes="100vw" quality={85} priority className="object-cover" />
          </div>
          <div className="hero-fade" />
          <div className="hero-content relative z-10 mx-auto flex flex-col items-center text-center">
            <p className="hero-eyebrow">Organic. Authentic. Premium.</p>
            <h1 id="hero-title"><span>Cashews</span><span className="hero-origin">From Kokan</span></h1>
            <a href={ORDER_URL} className="button button-yellow hero-button" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="button-icon" /> Order on WhatsApp
            </a>
          </div>
        </section>

        <section id="purpose" className="purpose-section section-rule" aria-labelledby="purpose-title">
          <div className="page-width purpose-layout">
            <div className="purpose-copy" data-reveal>
              <p className="orchard-badge"><span aria-hidden="true" /> Direct from Kokan Orchards</p>
              <h2 id="purpose-title">Our <span>Purpose</span></h2>
              <p className="purpose-description">To bring the authentic taste of Kokan’s traditional, organic cashews to every home, fresh, pure, and chemical-free. We aim to support local farmers and promote healthy snacking with honesty and care.</p>
              <dl className="purpose-facts">
                <div><dt>100%</dt><dd>Organic &amp; Natural</dd></div>
                <div><dt>Local</dt><dd>Farmer Sourced</dd></div>
              </dl>
            </div>
            <div className="orchard-images" data-reveal>
              <figure className="orchard-card">
              <img src="/images/orchard-heritage.jpg" alt="Cashew fruits growing among green leaves in an orchard" className="h-full w-full object-cover" />
                <figcaption><span>Origin Heritage</span><strong>Native Orchards</strong></figcaption>
              </figure>
              <figure className="orchard-card orchard-card-second">
              <img src="/images/orchard-harvest.jpg" alt="Sun-ripened cashews on a leafy cashew tree" className="h-full w-full object-cover" />
                <figcaption><span>Ethical Harvest</span><strong>Sun-Ripened Quality</strong></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="cashews" className="products-section section-rule" aria-labelledby="products-title">
          <div className="products-heading text-center" data-reveal>
            <h2 id="products-title" className="script-heading">Our Cashews</h2>
            <p className="swipe-hint md:hidden">Swipe to explore products</p>
          </div>
          <ProductSlider />
        </section>

        <section id="story" className="story-section" aria-labelledby="story-title">
          <div className="story-ribbons" aria-hidden="true">
            {ribbonLines.map((line, index) => <p key={index} className={index % 2 ? "outline-ribbon" : ""}>{line}</p>)}
          </div>
          <div className="story-content relative z-10 flex flex-col items-center text-center" data-reveal>
            <div className="story-image">
              <Image src="/images/cashew-fruit.jpg" alt="Yellow cashew apples with their nuts growing on a tree" fill sizes="(max-width: 767px) 72vw, 450px" className="object-cover" quality={85} />
            </div>
            <h2 id="story-title">With every bite, feel a little closer to Kokan.</h2>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="button button-yellow instagram-button">
              <InstagramIcon className="button-icon" /> Follow us on Instagram
            </a>
          </div>
        </section>

        <section id="help" className="help-section" aria-labelledby="help-title">
          <div className="page-width help-layout">
            <div className="help-copy" data-reveal>
              <h2 id="help-title">Confused about<br className="hidden md:block" /> how to order?</h2>
              <p>Just send us ‘Hi’ on WhatsApp. We will reach you ASAP.</p>
              <a href={PHONE_URL} className="phone-link"><PhoneIcon className="phone-icon" />{PHONE_DISPLAY}</a>
              <a href={HELP_URL} target="_blank" rel="noopener noreferrer" className="button button-green help-button"><WhatsAppIcon className="button-icon" /> Send ‘Hi’ on WhatsApp</a>
            </div>
            <Image src="/images/cashew-illustration.png" width={584} height={715} sizes="(max-width: 767px) 200px, 440px" alt="" aria-hidden="true" className="help-illustration" data-reveal />
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand-link" aria-label="Kaju home"><Image src="/images/kaju-logo.png" alt="काजु" width={878} height={552} className="brand-logo" /></a>
            <div className="social-links flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Kaju on Instagram"><InstagramIcon /></a>
              <a href={HELP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with Kaju on WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>
          <div className="footer-address"><h2>Address</h2><address><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS}</a></address></div>
          <div className="footer-contact"><h2>Contact Us</h2><a href={PHONE_URL}>{PHONE_DISPLAY}</a></div>
          <p className="footer-copyright">© 2025 kaju.official.store</p>
        </div>
      </footer>
      <ScrollReveal />
    </>
  );
}
