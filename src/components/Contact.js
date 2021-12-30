import React, { Component } from "react";

import breadcrumb from "../assets/img/core-img/breadcumb.png";
import map from "../assets/img/core-img/map.png";
import call from "../assets/img/core-img/call.png";
import message from "../assets/img/core-img/message.png";

import { Header, Footer } from "../components";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email:'',
      subject:'',
      message:''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleSubjectChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleMessageChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Email Sent: ' + this.state);
  }

  render() {
    return (
      <div>
        <Header />
        <div
          class="mosh-breadcumb-area"
          style={{
            backgroundImage: `url(${breadcrumb})`,
          }}
        >
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12">
                <div class="bradcumbContent">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="contact-area">
          <div class="contact-left">
            <form class="contact-form-area" onSubmit={this.handleSubmit}>
              <h2>Get in touch</h2>
              <input
                type="text"
                class="form-control"
                id="name"
                name="first_name"
                value={this.state.firstName}
                placeholder="Name"
                onChange={this.handleFirstNameChange}
              />
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                value={this.state.email}
                placeholder="E-mail"
                onChange={this.handleEmailChange}
              />
              <input
                type="text"
                class="form-control"
                id="subject"
                name="subject"
                value={this.state.subject}
                placeholder="Subject"
                onChange={this.handleSubjectChange}
              />
              <textarea
                name="message"
                value={this.state.message}
                class="form-control"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                onChange={this.handleMessageChange}
              ></textarea>
              <button class="mosh-btn mt-50" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div class="contact-right">
            <div class="contact-information">
              <h2>Contact</h2>
              <div class="single-contact-info d-flex">
                <div class="contact-icon mr-15">
                  <img src={map} alt="" class="contact-map-icon" />
                </div>
                <p>
                  <a href="https://g.page/sr-print-labels?share">
                    H- No: 5-35-269, Shakthipuram, Near Industrial Area, Kukatpally Hyderabad,
                    Telangana - 500072
                  </a>
                </p>
              </div>
              <div class="single-contact-info d-flex">
                <div class="contact-icon mr-15">
                  <img src={call} alt="" />
                </div>
                <p>Main: 040 3594 4136</p>
              </div>
              <div class="single-contact-info d-flex">
                <div class="contact-icon mr-15">
                  <img src={call} alt="" />
                </div>
                <p>Mobile: +91 9177446682</p>
              </div>
              <div class="single-contact-info d-flex">
                <div class="contact-icon mr-15">
                  <img src={message} alt="" />
                </div>
                <p>info@srprintlabels.com</p>
              </div>
              <div class="single-contact-info d-flex">
                <div class="contact-icon mr-15">
                  <img src={message} alt="" />
                </div>
                <p>srprintlabels@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        <div class="map-area">
          <div class="map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.503822634968!2d78.424826!3d17.477608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c6f502818315e47!2sSR%20Print%20Labels!5e0!3m2!1sen!2sin!4v1576904753515!5m2!1sen!2sin"
              frameborder="0"
              style={{ border: "0", margin: "0" }}
              width="100%"
              height="500vh"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
