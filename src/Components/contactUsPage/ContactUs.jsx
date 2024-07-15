import React from 'react'
import "./ContactUs.css"
import ScrollToTop from '../scrollToTop/ScrollToTop'
import phoneIcon from "../../Assets/phone.png";
import mailIcon from "../../Assets/mail.png";
import locationIcon from "../../Assets/location.png";

const ContactUs = () => {
  return (
    <>
      <ScrollToTop />
      <div class="contactUs">
        <div class="hero-section">
          <div class="hero-overlay">
            <h1 class="hero__overlay--text">Contact Us</h1>
          </div>
        </div>

        <div className="contactUs__small--content">
          <p className="small__content--text">
            We're here to help! Whether you have a question, feedback, or need
            support, we're all ears and ready to assist you. Reach out to us
            through any of the channels below, and we'll make sure to get back
            to you as soon as possible.
          </p>
        </div>

        <div className='flex justify-between gap-[100px] w-[100%] xl:px-[70px]'>
          <div class="contact-form w-[100%]">
            <form action="#" method="post">
              <div class="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-text"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Last Name"
                  required
                  className="input-text"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  id="email"
                  name="email"
                  placeholder="Phone"
                  required
                  className="input-text"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input-text"
                />
              </div>
              <div class="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  className="textarea"
                ></textarea>
              </div>
              <div class="contact__submit--btn">
                <input type="submit" value="Submit" class="submit-btn" />
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-10 items-start justify-center w-[100%]">
            <div className="flex flex-col gap-2.5 text-[#181616] items-center justify-center my-[34px]">
              <h2 className="text-[35px] font-medium">contact Us:</h2>
            </div>
            <div className="flex gap-5 items-start justify-center">
              <img src={phoneIcon} alt="" className="w-6 pt-1" />
              <div className="flex flex-col items-start justify-center gap-3">
                <h4 className="text-[24px] leading-[24px] font-medium">
                  Call Us
                </h4>
                <p className="text-lime-500 leading-[16px]">
                +234 817-391-9223
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start justify-center">
              <img src={mailIcon} alt="" className="w-6 pt-1" />
              <div className="flex flex-col items-start justify-center gap-3">
                <h4 className="text-[24px] leading-[24px] font-medium">
                  Mail Us
                </h4>
                <p className="text-lime-500 leading-[16px]">
                accounts@speedytranslators.org
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start justify-center">
              <img src={locationIcon} alt="" className="w-6 pt-1" />
              <div className="flex flex-col items-start justify-center gap-3">
                <h4 className="text-[24px] leading-[24px] font-medium">
                  Our Address
                </h4>
                <p className="text-lime-500 leading-[16px]">
                25 Church Avenue Iyana Ipaja Lagos, <br/> Lagos Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
