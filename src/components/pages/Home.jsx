import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
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
            <p>
              A health insurance plan with lower premiums and higher deductibles than a traditional
              health plan.
            </p>

            <h5> Health Savings Account </h5>
            <p>
              A type of personal savings account where the money is used for qualified medical
              expenses. You control how the money is used, and the money deposited into a health
              savings account is not taxed. This can lower your overall health care costs if you
              stay relatively healthy. However, it can be risky especially due to the
              unpredictability of illness.
            </p>

            <h5> Premium </h5>
            <p>The payment you make monthly to your health care provider.</p>

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
            <p>
              The maximum amount you need to pay for covered services in one year. After spending
              that amount, the health plan covers all of the cost for covered benefits. (This
              includes payment for deductibles, copayments, and coinsurance for in-network care and
              services. This does not include payment for monthly premiums, anything you spend for
              services your plan does not cover, out-of-network care and services, and costs above
              the allowed amount for a service that a provider may charge
            </p>

            <h5> Out-of-network care </h5>
            <p>
              Physicians, hospitals or other healthcare providers that do not have a contract with
              your health insurance provider. This can sometimes lead to higher prices because the
              cost may not be covered by your health insurance.
            </p>

            <h5> HMO </h5>
            <p>
              A health maintenance organization (HMO) is a type of health insurance plan, where
              medical care is limited to doctors and providers that have a contract with the HMO.
              Although there are less options, they typically cost less than traditional health care
              plans. With an HMO plan, you are required to first receive medical care services from
              an assigned provider known as the primary care physician (PCP).
            </p>

            <h5> PPO </h5>
            <p>
              In a preferred provider organization (PPO) plan, you receive the most benefit when
              going to physicians and providers in the PPO network. However, there is still some
              coverage for out-of-network providers. Also, you can usually visit any provider
              without a referral from your primary physician.
            </p>

            <h5> POS </h5>
            <p>
              A plan of service (POS) health care plan is one where you pay less when using doctors,
              hospitals, and other health care providers in the plan’s network. Similar to HMO
              plans, in a POS plan, you need a referral from your primary care doctor in order to
              see a specialist. But like a PPO, in a POS plan patients may go outside of the
              provider network for health care services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
