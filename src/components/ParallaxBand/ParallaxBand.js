import { motion, useReducedMotion } from 'framer-motion';
import contours from '../Assets/contours.png';
import { personalInfo } from '../../utils/data';
import './ParallaxBand.css';

const principles = [
  {
    index: '01',
    title: 'Built for dead zones',
    body: 'The apps I ship keep working when the network doesn’t. Data survives offline and syncs the moment signal returns — GPS punches, NFC checkpoints, live socket updates included.',
    chips: ['Offline sync', 'GPS & NFC', 'Realtime sockets'],
  },
  {
    index: '02',
    title: 'Easy to work with',
    body: personalInfo.availability,
    detail: personalInfo.responseTime,
    cta: 'Start a conversation',
  },
];

const ParallaxBand = () => {
  const reduceMotion = useReducedMotion();

  // Cards rise into place as they enter; the pinned artwork behind them holds still
  const rise = {
    initial: reduceMotion ? false : { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-12% 0px' },
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  };

  return (
    <section className="parallax-band" aria-label="Operating principles">
      <h2 className="sr-only">Operating principles</h2>
      <div className="parallax-band__img-wrap" aria-hidden="true">
        <img className="parallax-band__img" src={contours} alt="" />
      </div>

      <div className="parallax-band__track">
        <motion.article className="parallax-card parallax-card--quote" {...rise}>
          <p className="parallax-card__overline">Positioning</p>
          <p className="parallax-card__quote">
            Calm problem solving for operations-heavy products — the kind used by guards,
            drivers, and control rooms that cannot afford downtime.
          </p>
          <p className="parallax-card__foot">Field-tested · Karachi → UK</p>
        </motion.article>

        {principles.map((item, i) => (
          <motion.article
            key={item.index}
            className={`parallax-card ${i % 2 ? 'parallax-card--left' : 'parallax-card--right'}`}
            {...rise}
          >
            <div className="parallax-card__head">
              <span className="parallax-card__index">{item.index}</span>
              <h3 className="parallax-card__title">{item.title}</h3>
            </div>
            <p className="parallax-card__body">{item.body}</p>

            {item.chips && (
              <ul className="parallax-card__chips">
                {item.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            )}

            {item.detail && (
              <div className="parallax-card__detail">
                <span className="parallax-card__detail-label">Response</span>
                <span className="parallax-card__detail-value">{item.detail}</span>
              </div>
            )}

            {item.cta && (
              <a className="parallax-card__cta" href={`mailto:${personalInfo.email}`}>
                {item.cta} <span aria-hidden="true">→</span>
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ParallaxBand;
