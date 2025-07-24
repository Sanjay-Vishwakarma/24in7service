import React from "react";
import PricingCard from '../components/PricingCard'

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="col-xl-12">

        <PricingCard/>
        <div className="utf-section-headline-item centered margin-bottom-30">
          <h3 style={{ marginTop: '7%' }}>Pay For What You Use</h3> 
          <p className="utf-slogan-text">
            Our customised price options enables you to go as per your needs and
            requirements. Our pricing and related services are most economical
            and best in the industry. Choose from our multiple package options
            and solve your helper problem today.
          </p>
        </div>
      </div>

      <div className="row mt-4 mb-1">
        <div className="utf-sidebar-widget-item">
          <h3 >Pricing process by MAID SERVICE</h3> 
          <ul className="utf-job-deatails-content-item">
            <li>
              <i className="icon-feather-arrow-right" />
              You need to pay us a "one-time" placement fee for hiring you a
              maid.
            </li>
            <li>
              <i className="icon-feather-arrow-right" /> You need to pay a
              registration fee of 1000/- Rs. to us when you confirm and select
              the maid which covers candidate’stravelling charges and other
              handling charges.
            </li>
            <li>
              <i className="icon-feather-arrow-right" /> Final Charges to be
              paid after joining of the maid and a satisfactory trial period of
              3 days
            </li>
            <li>
              <i className="icon-feather-arrow-right" /> The monthly salary of
              the maid needs to be given directly to the maid.
            </li>
            <li>
              <i className="icon-feather-arrow-right" /> 3 months replacement
              period - If the maid chooses to leave or you let the maid go, we
              will replace the maid for FREE. No questions asked!
            </li>
            <li>
              <i className="icon-feather-arrow-right" />
              Experienced, document-verified - maids whom we’ve personally met
              and shortlisted
            </li>
            <li>
              <i className="icon-feather-arrow-right" /> Only those maids who
              pass our quality tests are listed
            </li>
            <li>
              <i className="icon-feather-arrow-right" /> Excellent customer
              service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
