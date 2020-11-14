/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  return (
    <div className="container-faq">
      <div className=" heading d-flex jus-con-spacearound">
        <div className="question fnt-w-700">QUESTIONS</div>
        <div className="fnt-w-700">VIDEOS</div>
      </div>
      <div className="paragraph">
        <h5 className="fnt-w-700">What is the best way to loose fat?</h5>
        <p className="mrg-top-10">
          The simple and (complex) answer is that there is no best way to loose
          Fat.Each client will respond differently to a training program.However
          there are some principles fitness professionals can apply when
          designing their clients programs.
        </p>
      </div>
      <div className="paragraph-B">
        <h5 className="fnt-w-700">How often Should I workout/Lift Weights?</h5>
        <p className="mrg-top-10">
          According to american college of sports medicines (ACSM),Your clients
          should exercise 20 to 60 minutes ,three to five days a week for
          healthy/fitness promotion.The simple and (complex) answer is that
          there is no best way to loose Fat.Each client will respond differently
          to a training program.However there are some principles fitness
          professionals can apply when designing their clients programs.
        </p>
      </div>
    </div>
  );
};
