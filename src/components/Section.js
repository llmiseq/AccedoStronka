import React from "react";

const Section = ({ id, children }) => (
  <section id={id} className="section fade-in-on-scroll">
    {children}
  </section>
);

export default Section;
