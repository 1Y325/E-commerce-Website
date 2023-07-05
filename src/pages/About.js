import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"about"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.shutterstock.com/image-illustration/about-us-concept-hand-pressing-260nw-203514820.jpg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our Project is about E-commerce Website
            here you find all items in one place.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;