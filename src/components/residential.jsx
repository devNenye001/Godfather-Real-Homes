import Button from "./button";

function ResidentialCard({ units, offerTitle, onButtonClick, bgImage, className }) {
  return (
    <div
      className={`residentialCard ${className || ""}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        padding: "30px",
        color: "white",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="residentialTitle">
        <p>{units}</p>
        <h1 style={{ fontWeight: 500 }}>{offerTitle}</h1>
      </div>
      <div className="btnDiv">
        <Button label="More Details" onClick={onButtonClick} />
      </div>
    </div>
  );
}

export default ResidentialCard;
