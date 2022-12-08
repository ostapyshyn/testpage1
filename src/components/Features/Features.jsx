import React from 'react';
// import styles from './Features.module.scss';
import styles from '../../index.css';

const Features = () => {
  return (
    <div>
      <section>
        <h2>Features</h2>
        <h1>Overflowing with useful features</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </section>

      <div>
        <section>
          <h2>Share team inboxes</h2>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same
            page and in the loop.
          </p>
        </section>
        <section>
          <h2>Deliver instant answers</h2>
          <p>
            An all-in-one customer service platform that helps you balance everything your customers
            need to be happy.
          </p>
        </section>
        <section>
          <h2>Manage your team with reports</h2>
          <p>
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and
            drilldown on the data in a couple clicks.
          </p>
        </section>
        <section>
          <h2>Connect with customers</h2>
          <p>
            Solve a problem or close a sale in real-time with chat. If no one is available,
            customers are seamlessly routed to email without confusion.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Features;
