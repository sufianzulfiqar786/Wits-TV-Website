import React, { useEffect, useState } from "react";

import { Col, Row } from "antd";
import { Dropdown } from "semantic-ui-react";

import "../assets/css/LanguageSelector.scss";

import { getJsonFile, getLanguage } from "../services/service";

import LOGO from "../assets/images/PlayerScreen/header_logo.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export var Language = "";

export default function SelectLanguage() {
  const countryOptions = [
    {
      value: 1,
      text: "English",
    },
    {
      value: 2,
      text: "Arabic",
    },
  ];

  const [languageType, setLanguageType] = useState(1);

  const language = async (e, value) => {
    fetchData(value);
  };
  async function fetchData(value) {
    const data = {
      app_verion: "1.1",
      language: value,
    };
    const response = await getLanguage(data);

    if (response.success) {
      axios
        .get(response.response)
        .then((res) => {
          setLanguageType(res.data);
          console.log(res.data);

          // Convert JSON data to a string
          const jsonString = JSON.stringify(res.data);

          // Save stringified JSON data to local storage
          localStorage.setItem("Language", jsonString);

          Language = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    fetchData(1)
  }, []);

  return (
    <div className="div-cont" style={{ height: "100vh", overflowY: "hidden" }}>
      {/* <div ref={loading}>
      <Spinner />
    </div> */}
      {true ? (
        <Row justify="center">
          <Col xs={20} xl={6} sm={20} md={8}>
            <Row justify="center" className="div-cont-row1">
              <Col span={24}>
                <Row className="div-cont-row1-logo">
                  <Col className="" span={24}>
                    <img
                      style={{ marginBottom: "-85%", paddingLeft: "12px" }}
                      src={LOGO}
                      alt="Header logo"
                    />
                  </Col>
                </Row>
                <Row className="div-cont-row1-sign">
                  <Col className=" div-cont-row1-sign" span={24}>
                    {Language.translation
                      ? Language.translation.sign_in
                      : "SIGN IN"}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {/* <SelectLanguage
                text={true?.select_language}
                countryOptions={countryOptions}
                getSettings={getSettings}
                // loading={loading}
              /> */}

                <div className="selectLanguage">
                  <Row justify="center" className="selectLanguage-cont">
                    <Col span={24}>
                      <Row className="selectLanguage-cont-select ">
                        <Col
                          className="selectLanguage-cont-select-text"
                          span={24}
                        >
                          {" "}
                          {Language.translation
                            ? Language.translation.select_language
                            : "Select Language"}{" "}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <div className="selectLanguage-cont-dropdown">
                            <Dropdown
                              className="ui fluid search selection dropdown fluid-dropdown"
                              // placeholder={countryOptions[languageNumber]?.text}
                              placeholder="English"
                              //selectedLabel={countryOptions[0].text}
                              fluid
                              search
                              selection
                              upward={false}
                              // defaultValue={"engish"}
                              //   defaultValue={countryOptions[languageNumber]?.text}
                              defaultValue="hello"
                              options={countryOptions}
                              // onChange={(e, data) => handleSelect(e, data.value)}
                              onChange={(e, data) => {
                                language(e, data.value);
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row justify="center" className="div-cont-row3">
              <Col span={24}>
                <Row justify="center" className="div-cont-row3-text">
                  <Col span={24}>
                    <div className="div-cont-row3-text1">
                      {Language.translation
                        ? Language.translation
                            .use_the_app_in_your_preferred_language
                        : "Use WITS in your preferred language"}{" "}
                      {true?.use_the_app_in_your_preferred_language}
                    </div>
                  </Col>
                </Row>
                <Row justify="center" className="div-cont-row3-button">
                  <Col span={24} onClick={() => {}}>
                    {/* <AuthGoldenButton
                    title={true?.continue}
                    height={43}
                  /> */}
                    <Link to="/signin">
                      <button
                        className="auth-golden-button"
                        style={{ height: "43px" }}
                        // onClick={language}
                        //   type={type}
                      >
                        {Language.translation
                          ? Language.translation.continue
                          : "CONTINUE"}
                        {/* {title}
      {children} */}
                      </button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : null}
    </div>
  );
}
