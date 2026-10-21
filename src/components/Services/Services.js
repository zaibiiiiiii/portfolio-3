import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { services } from '../../utils/data';
import './Services.css';

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" className="services" ref={ref}>
      <div className={`services__inner${isVisible ? ' services__inner--visible' : ''}`}>
        <div className="services__header">
          <p className="section-label">Services</p>
          <h2 className="section-title">What I can do for your team</h2>
          <p className="section-subtitle">
            The same stack and standards I use on production products, scoped to what you need.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
              <a className="service__link" href="#contact">
                Start a conversation <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
