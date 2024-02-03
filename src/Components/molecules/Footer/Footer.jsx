import React from "react";
import "./Footer.scss";
import Container from "../../common/Container";
import { Link } from "react-router-dom";
import { iconImages } from "../../../lib/constants/images";
export default function Footer() {
  const leftText = ["Terms of services", "Privacy policy", "DMCA"];
  return (
    <div className="footer">
      <Container>
        <div className="footer">

      
        <div className="footer-left">
          {leftText.map((item, index) => (
            <React.Fragment key={index}>
              <Link to="/" className="link">{item}</Link>
            </React.Fragment>
          ))}
        </div>
        <div className="footer-right">
          {/* <div className="">
          © All rights reserved by Zelf. 2022
          </div>
          <div className="center">
            <img className="icon" src={iconImages.facebookIcon} />
            <img className="icon"  src={iconImages.tiktokIcon} />
            <img className="icon"  src={iconImages.instagramIcon} />
          </div> */}
        </div>
        </div>
      </Container>
    </div>
  );
}
