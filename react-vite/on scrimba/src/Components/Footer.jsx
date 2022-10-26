import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import messenger from "../assets/icons/messenger.svg";
import twitter from "../assets/icons/twitter.svg";

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        <li className="icon">
          <img src={facebook} alt="" />
        </li>
        <li className="icon">
          <img src={instagram} alt="" />
        </li>
        <li className="icon">
          <img src={messenger} alt="" />
        </li>
        <li className="icon">
          <img src={twitter} alt="" />
        </li>
        <li className="icon">
          <img src={twitter} alt="" />
        </li>
      </ul>
    </footer>
  );
}
