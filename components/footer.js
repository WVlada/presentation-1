import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

config.autoAddCss = false;
const Footer = () => {
  return (
    <div className="bg-mainlight pt-10 pb-10  flex flex-col justify-center text-footertextcolor font-normal w-full -mt-28 z-40 text-lg ">
      <div className="pt-5 text-center">
        <Link href="https://x.com/ObracunRS">
          <FontAwesomeIcon size="2xl" color={"#0f2634"} icon={faTwitter} />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61551944593399">
          <FontAwesomeIcon className="ml-8" size="2xl" color={"#0f2634"} icon={faFacebookF} />
        </Link>
      </div>
      <div className="pt-5 px-4">
        <p className="text-center">Copyright © 2022 by Office Soft doo.</p>
        <p className="text-center">All Rights Reserved.</p>
      </div>
      <div className="pt-5 px-4">
        <p className="text-center ">
          Hand-crafted & made with <FontAwesomeIcon size="2xl" color={"#0f2634"} className="fa-beat ml-2" icon={faHeart} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
