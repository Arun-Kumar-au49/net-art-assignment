import React from "react";
import "./Main.scss";

import { reward, achievement, workItems } from "../../../asserts";
const Main = () => {
  return (
    <div className="main-container">
      <div className="row">
        <article className="reward col50">
          <figure>
            <img src={reward} role="img" alt="reward" />
          </figure>
        </article>
        <article className="achievement col100">
          <h2>
            c.r.i pumps wins the national energy conservation award 2018 for the
            4th time.
          </h2>

          <ul className="achievement-description">
            <li>
              <p>
                C.R. I's energy effecient products are well recognised by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </li>
            <li>
              <p>
                C.RI's is the highest contributor in the country for the
                projects of EESL(Energy Efficient Services Limited) to replace
                the old Inefficient pumps with 5 start rated energy efficient
                smart pumps with IOT control panel.
              </p>
            </li>
          </ul>

        
          <figure>
            <img src={achievement} role="" alt="guest-award" />
            <figcaption>
              Government of the India has been awarded the
              <b>"National Energy Conservation Award 2018".</b> <i>Mr G. Selvaraj</i>
              ,joint Managing Director of <b>C.R.I.</b> Group received the award from
              <i> Smt Sumitra Mahajan</i> Speaker of Lok Sabha & <i>Shri Raj Kumar Singh</i>,
              Honorable Minister of State.
            </figcaption>
          </figure>
        </article>

        </div>


        <div className="work-history-wrapper">
          <div className="work-history">
            <h2>
              <p>
                installation over 10 lakhs start rated pumpsets across the
                country resulting in a cumulative saving of more then 9,000
                million units of the power from the nation.
              </p>
            </h2>
            <figure className="col961">
              <img src={workItems} alt-="what we deal with" role="image" />
            </figure>
            <p>
              Values-Pumps-Pipes-IOT Drives & Controllers -Wires & Cables -
              Solar System -Motors
            </p>
          </div>
        </div>

        <div className="site-info-wrap">
          <h3> c.r.i fluid syatems products cater to diverse segments</h3>
          <ul className="site-links">
            {[
              "chemicals & process",
              "power",
              "water & waste water",
              "oils & gas",
              "pharma",
              "sugars & distilleries",
              "paper & pulp",
              "marine & defence",
              "metal & mining",
              "food & beverage",
              "petrochemical & refineries",
              "solar",
              "building",
              "hvac",
              "fire fighting",
              "agriculture & residential",
            ].map((item, index) => {
              return <li key={index + 1}><a href="#" >{item}</a></li>;
            })}
          </ul>
        </div>
      
    </div>
  );
};

export default Main;
