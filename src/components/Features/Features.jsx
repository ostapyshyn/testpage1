import React from 'react';
import s from './Features.module.scss';
import styles from '../../index.css';
import feature1 from '../../assets/1.png';
import feature2 from '../../assets/2.png';
import feature3 from '../../assets/3.png';
import feature4 from '../../assets/4.png';
import laptop from '../../assets/5.png';
import laptop_small from '../../assets/laptop_sm.png';

const Features = () => {
  return (
    <div className={s.content}>
      <section className={`max-w-3xl ${s.content_top}`}>
        <h2 className="font-semibold mb-3 text-true-violet">Features</h2>
        <h1 className={`font-semibold mb-5 text-true-black text-4xl ${s.line}`}>
          Overflowing with useful features
        </h1>
        <p className={`text-true-gray mb-16 text-xl ${s.line_30}`}>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </section>

      <div className={s.container}>
        <div className={s.features}>
          <section className={`max-w-[276px] ${s.feature}`}>
            <img src={feature1} alt="feature1" className="mb-5" />
            <h2 className={`font-semibold text-xl mb-2 text-true-black ${s.line_30}`}>
              Share team inboxes
            </h2>
            <p className="text-true-gray ">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same
              page and in the loop.
            </p>
          </section>
          <section className={`max-w-[276px] ${s.feature}`}>
            <img src={feature2} alt="feature2" className="mb-5" />
            <h2 className={`font-semibold text-xl mb-2 text-true-black ${s.line_30}`}>
              Deliver instant answers
            </h2>
            <p className="text-true-gray ">
              An all-in-one customer service platform that helps you balance everything your
              customers need to be happy.
            </p>
          </section>
          <section className={`max-w-[276px] ${s.feature}`}>
            <img src={feature3} alt="feature3" className="mb-5" />
            <h2 className={`font-semibold text-xl mb-2 text-true-black ${s.line_30}`}>
              Manage your team with reports
            </h2>
            <p className="text-true-gray ">
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and
              drilldown on the data in a couple clicks.
            </p>
          </section>
          <section className={`max-w-[276px] ${s.feature}`}>
            <img src={feature4} alt="feature4" className="mb-5" />
            <h2 className={`font-semibold text-xl mb-2 text-true-black ${s.line_30}`}>
              Connect with customers
            </h2>
            <p className="text-true-gray ">
              Solve a problem or close a sale in real-time with chat. If no one is available,
              customers are seamlessly routed to email without confusion.
            </p>
          </section>
        </div>
        <div className={s.laptop}>
          <img src={laptop} alt="laptop" />
        </div>
      </div>
      <div className={s.laptop_small}>
        <img src={laptop_small} alt="laptop_small" />
      </div>
    </div>
  );
};

export default Features;
