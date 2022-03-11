import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <h2> What is Health Insurance? </h2>
            <p>
              Health Insurance is a contract that requires an insurance company to cover the cost of
              some or all medical and surgical expenses. It can also include dental and prescription
              drug expenses. The one receiving the insurance has to pay a premium, which is
              basically a monthly payment, to the insurance company.
            </p>
            <h2> Basic Health Insurance Terms </h2>
            <h5> Deductible </h5>
            <p>
              The amount you have to pay before your health insurance begins paying. After you pay
              your deductible, you usually pay only a copayment or coinsurance for covered services.
              The deductible is activated again every year. (Ex: if there’s a $1000 deductible, then
              you have to pay the first $1000 of medical bills every year with your own money.)
            </p>
            <h5> High Deductible Health Plan </h5>
            <h5> Health Savings Account </h5>
            <h5> Premium </h5>
            <h5> Copayment </h5>
            <p>
              A fixed amount of money that you pay when receiving covered health care services. This
              money is paid after the deductible. Some examples of health care services are a doctor
              visit or picking up prescription drugs. (Ex: If the copayment, or copay, is $35 for a
              doctor visit, then you need to pay $35 when you visit the doctor.)
            </p>
            <h5> Coinsurance </h5>
            <p>
              Similar to copayment, however, it’s when you pay a percent of the cost for a health
              care service. This is also paid after the deductible. (Ex: If the coinsurance is 20%,
              then you would pay 20% of the total cost, and the insurance company would pay the
              remaining 80%)
            </p>
            <h5> Out-of-Pocket Maximum </h5>
            <h5> Out-of-network care </h5>
            <h5> HMO </h5>
            <h5> POS </h5>
            <h5> PPO </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
