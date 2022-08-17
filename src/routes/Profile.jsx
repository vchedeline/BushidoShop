import React from "react";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import Loading from "../components/Loading";
import "../styles/profile.sass";

export default function Profile({ email }) {
  const loaded = () => {
    return (
      <div className="profile">
        <div className="profile-left">
          <form>
            <h4>General Information</h4>
            <div className="general">
              <label htmlFor="fname">
                First Name
                <input id="fname" placeholder="Enter your first name" />
              </label>
              <label htmlFor="lname">
                Last Name
                <input id="lname" placeholder="Enter your last name" />
              </label>
              <label htmlFor="bday">
                Birthday
                <input id="bday" placeholder="dd/mm/yyyy" />
              </label>
              <label htmlFor="gender">
                Gender
                <input id="gender" placeholder="Gender" />
              </label>
              <label htmlFor="email">
                Email
                <input id="email" placeholder="name@service.com" />
              </label>
              <label htmlFor="phone">
                Phone
                <input id="phone" placeholder="+1 234-567-8900" />
              </label>
            </div>
            <h4>Address</h4>
            <div className="address">
              <label htmlFor="addr">
                Address
                <input id="addr" placeholder="Enter your home address" />
              </label>
              <label htmlFor="num">
                Number
                <input id="num" placeholder="No." />
              </label>
              <label htmlFor="city">
                City
                <input id="city" placeholder="City" />
              </label>
              <label htmlFor="zip">
                Zip
                <input id="zip" placeholder="ZIP" />
              </label>
            </div>
            <button>Save All</button>
          </form>
        </div>
        <div className="profile-right">
          <div className="profile-pic">
            <img src="/images/profile.png" alt="..." />
            <h5>{email}</h5>
          </div>
          <div className="upload">
            <h5>Select Profile Photo</h5>
            <object>
              <img src="/images/profile.png" alt="..." />
              <button>📎</button>
              <p>
                Choose Image <br /> <br />
                JPEG, GIF or PNG
              </p>
            </object>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <SubHeader />
      {email ? loaded() : <Loading />}
    </Layout>
  );
}
