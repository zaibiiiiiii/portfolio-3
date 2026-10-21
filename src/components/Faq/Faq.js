import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { faqs } from '../../utils/data';
import './Faq.css';

const Faq = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="faq" className="faq" ref={ref}>
      <div className={`faq__inner${isVisible ? ' faq__inner--visible' : ''}`}>
        <div className="faq__header">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Answers, before you ask</h2>
        </div>

        <div className="faq__list">
          {faqs.map((item) => (
            <details className="faq__item" key={item.question}>
              <summary>
                {item.question}
                <span className="faq__chevron" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
