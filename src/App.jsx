import {
  ArrowUpRight,
  Clock,
  Coffee,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Palette,
  Phone,
  Star,
  Wine,
} from "lucide-react";
import heroCafe from "./assets/hero-cafe.png";
import cafeDetails from "./assets/cafe-details.png";

const googleMapsUrl = "https://maps.app.goo.gl/CpWdgSQ5kZZi3RqE9";
const instagramUrl = "https://www.instagram.com/enchantecafe_/";

const features = [
  { label: "Espresso", Icon: Coffee },
  { label: "Filter", Icon: Leaf },
  { label: "Croissants", Icon: Heart },
  { label: "Wine", Icon: Wine },
  { label: "Art walls", Icon: Palette },
  { label: "Terrace", Icon: MapPin },
];

const reviews = [
  {
    quote: "Beautiful coffee. The best cup. The pastry was good as well.",
    name: "Google review",
  },
  {
    quote:
      "Great breakfast, specialty coffee and the kind of atmosphere that makes you stay.",
    name: "Guest note",
  },
  {
    quote: "Very good mocha, matcha and chai. Croissants were good too.",
    name: "Google review",
  },
];

const hours = [
  ["Mon-Thu", "10:00-18:00"],
  ["Fri-Sat", "10:00-19:00"],
  ["Sun", "10:00-18:00"],
];

function ExternalButton({ href, children, variant = "primary", ariaLabel }) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

function App() {
  return (
    <main>
      <section className="hero" id="top" aria-label="Enchanté Café">
        <img className="hero-image" src={heroCafe} alt="" />
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Enchanté Café home">
            <span className="brand-mark">E</span>
            <span>Enchanté Café</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#coffee">Coffee</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>
        </header>

        <div className="hero-content">
          <h1>
            <span>Enchanté</span>
            {" "}
            <em>Café</em>
          </h1>
          <p>
            Specialty coffee, French pastries and art on Eerikinkatu. A warm
            Helsinki corner for slow mornings, good conversations and one more
            cup.
          </p>
          <div className="hero-actions" aria-label="Main actions">
            <ExternalButton
              href={googleMapsUrl}
              ariaLabel="Open Enchanté Café on Google Maps"
            >
              <MapPin size={18} strokeWidth={2} aria-hidden="true" />
              Open Google Maps
            </ExternalButton>
            <ExternalButton
              href={instagramUrl}
              variant="ghost"
              ariaLabel="Open Enchanté Café Instagram"
            >
              <Instagram size={18} strokeWidth={2} aria-hidden="true" />
              Follow Instagram
            </ExternalButton>
          </div>
          <div className="hero-note">
            <span>Kamppi, Helsinki</span>
            <span>Specialty Coffee and Art</span>
          </div>
        </div>
      </section>

      <section className="story section" id="coffee">
        <div className="story-copy">
          <h2>A little corner of Paris in Helsinki</h2>
          <p>
            Enchanté feels small in the best way: espresso on marble, warm
            pastry trays, art on the walls, a terrace when the weather agrees
            and a team that makes the room feel alive.
          </p>
          <p>
            Come for breakfast and a proper coffee. Stay for the atmosphere,
            the wine after work and the tiny everyday rituals that make a cafe
            worth protecting.
          </p>
        </div>
        <div className="story-media">
          <img src={cafeDetails} alt="Coffee, pastries and art at a cafe counter" />
        </div>
        <div className="feature-strip" aria-label="Cafe highlights">
          {features.map(({ label, Icon }) => (
            <span key={label}>
              <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="reviews-head">
          <div>
            <h2>Loved by Helsinki coffee people</h2>
            <p>
              The best reviews are the quiet kind: people noticing the coffee,
              the breakfast, the pastries and the feeling of wanting to come
              back.
            </p>
          </div>
          <div className="rating" aria-label="Google rating">
            <span className="rating-number">4.8</span>
            <span className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" strokeWidth={1.8} />
              ))}
            </span>
            <span>on Google</span>
            <span>600+ kind notes</span>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.quote}>
              <p>“{review.quote}”</p>
              <span>{review.name}</span>
            </article>
          ))}
        </div>

        <div className="review-cta">
          <div>
            <h3>Had a good cup?</h3>
            <p>
              A short Google review helps more neighbors find the cafe and
              keeps the community around Enchanté growing.
            </p>
          </div>
          <ExternalButton
            href={googleMapsUrl}
            variant="light"
            ariaLabel="Leave a review for Enchanté Café on Google Maps"
          >
            <Star size={18} strokeWidth={2} aria-hidden="true" />
            Leave a Google review
          </ExternalButton>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-panel">
          <div className="visit-copy">
            <h2>Come by Eerikinkatu 9</h2>
            <p>
              Find the little French-Helsinki room near Kamppi, take the window
              seat, and let the day slow down for a moment.
            </p>
            <div className="contact-list">
              <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} strokeWidth={2} aria-hidden="true" />
                Eerikinkatu 9, 00100 Helsinki
              </a>
              <a href="tel:+3584578335392">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                +358 45 78335392
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <Instagram size={18} strokeWidth={2} aria-hidden="true" />
                @enchantecafe_
              </a>
            </div>
          </div>

          <div className="hours" aria-label="Opening hours">
            <div className="hours-title">
              <Clock size={18} strokeWidth={2} aria-hidden="true" />
              Opening hours
            </div>
            {hours.map(([day, time]) => (
              <div className="hours-row" key={day}>
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
            <ExternalButton
              href={googleMapsUrl}
              variant="primary"
              ariaLabel="Open Enchanté Café directions on Google Maps"
            >
              <MapPin size={18} strokeWidth={2} aria-hidden="true" />
              Open Google Maps
            </ExternalButton>
          </div>
        </div>

        <footer>
          <span>Enchanté Café — Specialty Coffee and Art</span>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </footer>
      </section>
    </main>
  );
}

export default App;
