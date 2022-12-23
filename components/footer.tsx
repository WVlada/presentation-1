import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
const Footer = () => {
  return (
    <div className="bg-mainlight pt-20 pb-20  flex flex-col justify-center text-sm text-footertextcolor font-normal ">
      <div className="pt-5 text-center">
        <FontAwesomeIcon size="lg" color={"#337ab7"} icon={faFacebookF} />
        <FontAwesomeIcon
          className="ml-8"
          size="lg"
          color={"#337ab7"}
          icon={faInstagram}
        />
      </div>
      <div className="pt-5">
        <p className="text-center">
          Copyright © 2022 by me. All Rights Reserved.
        </p>
      </div>
      <div className="pt-5">
        <p className="text-center ">
          Hand-crafted & made with heart{" "}
          <FontAwesomeIcon
            size="lg"
            color={"#e75040"}
            className="fa-beat"
            icon={faHeart}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
