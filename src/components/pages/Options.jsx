import React from 'react';

function Options() {
  return (
    <div className="options">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light">Options</h1>
          <p>
            As many students start to become independent, they are often left confused about their
            options. In California, you may choose to either have health insurance or go without. If
            you plan on being insured, here are your options.
          </p>
          <h5 className="font-weight-bold">Parent or Guardian</h5>
          <p>
            Most people can stay on the healthcare plan of their parent or guardian, usually up
            until the age of 26. This is appealing to a lot of people since it is often cheaper.
            However, it also means that they must be reliant on their parent or guardian.
          </p>
          <h5 className="font-weight-bold">Employer</h5>
          <p>
            Most employers provide affordable healthcare options for their employees. The cost of
            premiums are usually shared between the employer and employee. In addition to healthcare
            insurance, employers often also provide other benefits such as retirement plans and
            dental care.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Options;
