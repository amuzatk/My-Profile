import React from "react";
import Typical from "react-typical";

export default function () {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://ads.google.com/aw/campaigns/new/express?campaignId=11892391380&ocid=618705347&cmpnInfo=%7B%228%22%3A%222054aa56-12ab-4b1a-bf57-ea4525bf1257%22%7D&subid=ng-en-ha-aw-sk-c-bau%21o3~Cj0KCQjw1ZeUBhDyARIsAOzAqQKn8QyTkTpXIJPpkwG9ttQZnl43rYAZMOMRIb1JseTIj2eDyT9Zf9saAjP9EALw_wcB~121284246149~kwd-298854906879~12973051369~519253412581&step=cbss&euid=471094039&__u=4558734111&uscid=618705347&__c=1425674603&authuser=0&mode=signup&sourceid=emp">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCaDG7MSRJoieWaeCZ_5ZCKg">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/AmuzatKazeem">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Kazeem</span>
            </span>
          </div>
          <div className="profile-detaile-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Front-End Developer",
                    1000,
                    "React-JS",
                    1000,
                    "JavaScript",
                    1000,
                    "Bootstrap",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagLine">
                Knack of building applications with Front-End operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              HIRE ME {""}
            </button>
            <a href="kzcv.doc" download="Kazeem kzcv.doc">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-name"></div>
        </div>
      </div>
    </div>
  );
}
