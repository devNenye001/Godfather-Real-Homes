function PropertyCard({ imageSrc, price, address, details, className = "" }) {
  return (
    <div className={`property ${className}`}>
      <img src={imageSrc} alt="Property" />
      <h1 className="price">{price}</h1>
      <h5 className="property-name">{address}</h5>
      <p className="minidetails">{details}</p>
    </div>
  );
}

export default PropertyCard;
