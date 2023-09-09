import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/Signin.css";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.scss";
import WLogo from "../assets/images/Signin/WLogo.png";
import { loginWithEmail } from "../services/service";
import withAuth from "../components/Auth";
// import { Language } from "./SelectLanguage";

const Signin = () => {
  const [empty, setEmpty] = useState(0);
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const [loading, setLoading] = useState(false);
  const [validData, setValidData] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    language: "1",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('count')){
      navigate("/today-prize")
    }
    if (!empty.email) {
      // setEmail(1)
    } else {
      setEmail(0);
    }

    if (!empty.password) {
      // setPassword(1)
    } else {
      setPassword(0);
    }
  },[]);

  const handleInput = (event) => {
    setEmpty((empty) => ({
      ...empty,
      [event.target.name]: event.target.value,
    }));

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!empty.email) {
      // alert("please enter email")
      setEmail(1);
    } else if (!empty.password) {
      // alert("please enter password")
      setPassword(1);
    } else {
      setEmail(0);
      setPassword(0);
      setLoading(true);
      const response = await loginWithEmail(formData);
      if (response.success) {
        localStorage.setItem("count", response.data.token);
        localStorage.setItem("host_id", response.data.ID);

        console.log("data true");
        navigate("/today-prize");
        // window.location.reload();
        setLoading(false);
        setValidData(0);
        // alert("hamza")
      } else {
        setLoading(false);
        setValidData(1);
      }
    }
  };

  const jsonString = localStorage.getItem("Language");

  // Parse JSON data back into a JavaScript object
  const Language = JSON.parse(jsonString);

  return (
    <>
      <div
        className="fluid-container d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          width: "100%",
          background:
            "radial-gradient(88.22% 88.22% at 50% 0%, rgba(11, 90, 98, 0.8) 0%, rgba(7, 67, 75, 0) 100%), #000B0C",
        }}
      >
        <div className="row" style={{ width: "27%" }}>
          <div className="col-12 d-flex justify-content-center">
            <img style={{ width: "7vw" }} src={WLogo} alt="" />
          </div>

          <div className="col-12 pl-2 mt-3 mb-4 mb-2 d-flex justify-content-center">
            <p style={{ color: "#d6a15e", fontSize: "2vw", fontWeight: "600" }}>
              {Language.translation ? Language.translation.sign_in : "SIGN IN"}
            </p>
          </div>

          <div className="col-12  d-flex justify-content-center">
            <input
              type="text"
              pla
              className="Wits-Signin form-control shadow-none"
              placeholder={
                Language.translation
                  ? Language.translation.your_email
                  : "Your email"
              }
              onChange={handleInput}
              name="email"
              value={empty.email}
            />
          </div>

          <div className="col-12">
            {email ? (
              <p
                className="errorMessage "
                style={{
                  fontSize: "0.91vw",
                  color: "red",
                  marginBottom: "-4%",
                  marginTop: "3.8%",
                }}
              >
                {Language.translation
                  ? Language.translation.email_required
                  : "Email is a required field"}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 mt-4 d-flex justify-content-center">
            <input
              type="password"
              className="Wits-Signin form-control shadow-none"
              placeholder={
                Language.translation
                  ? Language.translation.password
                  : "Password"
              }
              onChange={handleInput}
              name="password"
              value={empty.password}
            />
          </div>

          <div className="col-12 mb-2">
            {password ? (
              <p
                className="errorMessage "
                style={{
                  fontSize: "0.91vw",
                  color: "red",
                  marginBottom: "-4%",
                  marginTop: "3.8%",
                }}
              >
                {Language.translation
                  ? Language.translation.password_required
                  : "Password is a required field"}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12 my-3  d-flex justify-content-center">
            {validData ? (
              <p
                className="text-center"
                style={{ color: "white", fontSize: "15px" }}
              >
                {Language.translation
                  ? Language.translation.error_email_and_pass_dont_match
                  : "Your email and password does not match! please try again"}
                {/* Your email and password does not <br /> match! please try again */}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="col-12">
            <hr style={{ background: "#30aeba", opacity: "0.3" }} />
          </div>

          <div className="col-12 ">
            <button
              onClick={handleSubmit}
              className="wits-signin"
              style={{ cursor: "pointer" }}
            >
              {loading ? (
                <span class="loader"></span>
              ) : Language.translation ? (
                Language.translation.sign_in
              ) : (
                "SIGN IN"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default (Signin) ;
