import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/804/109/small/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email-address-website-page-contact-us-or-e-mail-marketing-contact-us-in-customer-support-concept-photo.jpg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : yashg3600@gmail.com
          </p>
          <p className="mt-3">
           
          </p>
          <p className="mt-3">
            
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;