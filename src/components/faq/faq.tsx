import React from "react";
import chevron from "../../assets/img/layout/chevron.png";

export type FaqPropsType = {
  faqItems: FaqItem[];
};

export type FaqItem = {
  question: string;
  response: string;
};

const Faq = ({ faqItems }: FaqPropsType) => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="accordion accordion-flush" id="faqlist">
              {faqItems.map((item, i) => (
                <div className={"accordion_item"} key={i}>
                  <h3 className="accordion-header">
                    <button
                      className={`collapsed accordion_button`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-content-${i}`}
                    >
                      <span className={"num"}>
                        <img src={chevron.src} alt="" />
                      </span>
                      {item.question}
                    </button>
                  </h3>
                  <div
                    id={`faq-content-${i}`}
                    className={`collapse accordion_collapse`}
                    data-bs-parent="#faqlist"
                  >
                    <div className={"accordion_body"}>{item.response}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
