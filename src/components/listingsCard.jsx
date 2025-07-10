import Button from "./button";

function MiniCard({ imageSrc, price, address, details, className, onButtonClick }) {
  return (
    <div className={`property ${className}`}>
      <img src={imageSrc} alt="Property" />
      <h1 className="price">{price}</h1>
      <h5 className="property-name">{address}</h5>
      <p className="minidetails">{details}</p>
      <br />
      <div>
        <Button label="More Details" onClick={onButtonClick} />
      </div>
    </div>
  );
}

export default MiniCard;
