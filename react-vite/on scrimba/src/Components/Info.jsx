import myself from "../assets/me.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info--image">
        <img src={myself} alt="" />
      </div>
      <div className="info--details">
        <h2 className="info--name">Radovan Botik</h2>
        <h3 className="info--occupation">Frontend Developer</h3>
        <h4 className="info--website">www.botik.sk</h4>
        <button className="info--button">Email</button>
      </div>
    </div>
  );
}
