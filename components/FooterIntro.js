/* eslint-disable */

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const FooterIntro = () => {
  const [state] = useState({
    logo: "/assets/footer/logo.png",
    intro:
      "Zebruck chuyên phân phối sản phẩm chính hãng của Starbuck, mang đến chất lượng dịch vụ tốt nhất cho bạn",
  });
  return (
    <div className="footer__intro">
      <div className="footer__logo">
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <h4
            style={{
              fontSize: "36px",
              marginTop: "18px",
              color: "rgb(121,121,121)",
            }}
          >
            Zebruck
          </h4>
        </Link>
      </div>
      <p className="footer__intro__msg">{state.intro}</p>
    </div>
  );
};
export default FooterIntro;
