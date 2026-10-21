import contours from '../Assets/contours.png';
import './ParallaxBand.css';

const ParallaxBand = () => (
  <section className="parallax-band">
    <div
      className="parallax-band__bg"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 19, 22, 0.78), rgba(12, 19, 22, 0.86)), url(${contours})`,
      }}
    />
    <div className="parallax-band__content">
      <p className="parallax-band__overline">Field-tested · Karachi → UK</p>
      <p className="parallax-band__quote">
        Calm problem solving for operations-heavy products — the kind used by guards,
        drivers, and control rooms that cannot afford downtime.
      </p>
    </div>
  </section>
);

export default ParallaxBand;
