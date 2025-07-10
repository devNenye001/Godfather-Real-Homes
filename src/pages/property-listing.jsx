import { useState } from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import HeroText from "../components/headings";
import Button from "../components/button";
import MiniCard from "../components/listingsCard";
import { useNavigate } from "react-router-dom";

function Property() {

  const listings = [
    {
      id: 1,
      type: "Living House",
      imageSrc: "/propertyimg.png",
      price: "$870,000",
      address: "123 Palm Street, Miami, FL",
      details: "3 BEDS | 4 BATHS | 3,250 SQ.FT."
    },
    {
      id: 2,
      type: "Living House",
      imageSrc: "/propertyimg.png",
      price: "$870,000",
      address: "123 Palm Street, Miami, FL",
      details: "3 BEDS | 4 BATHS | 3,250 SQ.FT."
    },
    {
      id: 3,
      type: "Living House",
      imageSrc: "/propertyimg.png",
      price: "$870,000",
      address: "123 Palm Street, Miami, FL",
      details: "3 BEDS | 4 BATHS | 3,250 SQ.FT."
    },
    {
      id: 4,
      type: "Living House",
      imageSrc: "/propertyimg.png",
      price: "$870,000",
      address: "123 Palm Street, Miami, FL",
      details: "3 BEDS | 4 BATHS | 3,250 SQ.FT."
    },
    {
      id: 5,
      type: "Apartments",
      imageSrc: "/propertyimg.png",
      price: "$650,000",
      address: "456 Ocean Drive, LA",
      details: "2 BEDS | 2 BATHS | 2,100 SQ.FT."
    },
    {
      id: 6,
      type: "Apartments",
      imageSrc: "/propertyimg.png",
      price: "$650,000",
      address: "456 Ocean Drive, LA",
      details: "2 BEDS | 2 BATHS | 2,100 SQ.FT."
    },
    {
      id: 7,
      type: "Apartments",
      imageSrc: "/propertyimg.png",
      price: "$650,000",
      address: "456 Ocean Drive, LA",
      details: "2 BEDS | 2 BATHS | 2,100 SQ.FT."
    },
    {
      id: 10,
      type: "Apartments",
      imageSrc: "/propertyimg.png",
      price: "$650,000",
      address: "456 Ocean Drive, LA",
      details: "2 BEDS | 2 BATHS | 2,100 SQ.FT."
    },
    {
      id: 11,
      type: "Real Estate",
      imageSrc: "/propertyimg.png",
      price: "$1,000,000",
      address: "789 Estate Blvd, NY",
      details: "4 BEDS | 5 BATHS | 4,500 SQ.FT."
    },{
      id: 12,
      type: "Real Estate",
      imageSrc: "/propertyimg.png",
      price: "$1,000,000",
      address: "789 Estate Blvd, NY",
      details: "4 BEDS | 5 BATHS | 4,500 SQ.FT."
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  return (
    <>
      <section className="property-heading">
        <NavBar />
        <HeroText
          className="propertyText"
          title={<>All Property Listings</>}
          subtitle="Browse through all available properties — from short-let apartments to premium homes and investment land opportunities."
        />
      </section>

      <div className="property-links">
  <Button
    label="Living House"
    onClick={() => setActiveCategory("Living House")}
    className={activeCategory === "Living House" ? "button active-button" : "button"}
  />
  <Button
    label="Apartments"
    onClick={() => setActiveCategory("Apartments")}
    className={activeCategory === "Apartments" ? "button active-button" : "button"}
  />
  <Button
    label="Real Estate"
    onClick={() => setActiveCategory("Real Estate")}
    className={activeCategory === "Real Estate" ? "button active-button" : "button"}
  />
</div>


      <section className="properties">
      {listings
        .filter(listing => activeCategory === "All" || listing.type === activeCategory)
        .map((listing) => (
          <MiniCard
            key={listing.id}
            imageSrc={listing.imageSrc}
            price={listing.price}
            address={listing.address}
            details={listing.details}
            className="featured-card"
            onButtonClick={() => navigate(`/details/${listing.id}`)}
          />
        ))}
    </section>

      <Footer />
    </>
  );
}


export default Property;
