/** @format */

import aboutImg from "../../src/assets/images/about_us/parts.jpg";
import aboutPerson from "../../src/assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="mb-10">
        <div className="my-10">
      <h3 className="text-4xl text-center text-orange-400 font-bold mb-2">
        About
      </h3>
      <div className="flex gap-6 mb-10">
        <div className="w-1/2 relative mb-10">
          <img
            className="rounded w-[80%]"
            src={aboutPerson}
            alt=""
          />
          <img
            className="rounded border-[8px] border-orange-200 w-[60%] top-1/2 absolute right-0"
            src={aboutImg}
            alt=""
          />
        </div>
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl font-semibold">About section</h3>
          <h3 className="text-4xl font-semibold">
            We are qualified & of
            <br /> experience in this field
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
