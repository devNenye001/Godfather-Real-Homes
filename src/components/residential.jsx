import Button from "./button";
import { useNavigate } from "react-router-dom";

function ResidentialCard({ units, offerTitle, bgImage, className }) {
  const navigate = useNavigate();
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
        <Button label="View Listings" onClick={() => navigate("/listings")} />
      </div>
    </div>
  );
}

export default ResidentialCard;
