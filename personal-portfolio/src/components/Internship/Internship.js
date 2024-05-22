import React from "react";
import "./Internship.css";
import { INTERNSHIP } from "../../utils/data";
import InternshipCard from "./InternshipCard/InternshipCard";

const Internship = () => {
  return (
    <section className="internship-container">
      <h5>Internship</h5>
      <div className="internship-content">
        <InternshipCard details={INTERNSHIP[0]} />
      </div>
    </section>
  );
};

export default Internship;
