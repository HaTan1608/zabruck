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
          {/* <Image
            width={100}
            height={100}
            alt="logo"
            // src="https://cdndev2.ntlogistics.vn/uploads/default/2022/12/01/e539c562d9d5490d88591ee406fe88ec/logozeb.jpeg"
          /> */}
          <h4
            style={{
              fontSize: "36px",
              marginTop: "36px",
              marginLeft: "-6px",
              color: "rgb(121,121,121)",
            }}
          >
            ebruck
          </h4>
        </Link>
      </div>
      <p className="footer__intro__msg">{state.intro}</p>
    </div>
  );
};
export default FooterIntro;
