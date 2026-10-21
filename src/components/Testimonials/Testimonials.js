import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { testimonials } from '../../utils/data';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className={`testimonials__inner${isVisible ? ' testimonials__inner--visible' : ''}`}>
        <div className="testimonials__header">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What people say</h2>
          <p className="section-subtitle">
            Working with founders, engineering leads, and product teams across security, logistics, and ERP.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <article key={item.name} className="testimonial" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial__quote">
                <span aria-hidden="true">“</span>
                <p>{item.body}</p>
              </div>
              <div className="testimonial__author">
                <div className="testimonial__author-info">
                  <h4 className="testimonial__author-name">{item.name}</h4>
                  <p className="testimonial__author-role">{item.role}</p>
                </div>
                {item.company && (
                  <span className="testimonial__author-company">{item.company}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;