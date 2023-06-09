import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
const Footer = () => {
  return (
    <div className="bg-mainlight pt-10 pb-10  flex flex-col justify-center text-sm text-footertextcolor font-normal w-full -mt-28 z-40 ">
      <div className="pt-5 text-center">
        <FontAwesomeIcon size="lg" color={"#0f2634"} icon={faFacebookF} />
        <FontAwesomeIcon
          className="ml-8"
          size="lg"
          color={"#0f2634"}
          icon={faInstagram}
        />
      </div>
      <div className="pt-5">
        <p className="text-center">
          Copyright © 2022 by Office Soft doo. All Rights Reserved.
        </p>
      </div>
      <div className="pt-5">
        <p className="text-center ">
          Hand-crafted & made with {" "}
          <FontAwesomeIcon
            size="lg"
            color={"#0f2634"}
            className="fa-beat"
            icon={faHeart}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
