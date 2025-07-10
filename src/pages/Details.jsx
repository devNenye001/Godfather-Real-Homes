import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Button from "../components/button";
import MiniCard from "../components/listingsCard";

const listings = [
  {
    id: 1,
    type: "Living House",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$870,000",
    address: "123 Palm Street, Miami, FL",
    details: "3 BEDS | 4 BATHS | 3,250 SQ.FT.",
  },
  {
    id: 2,
    type: "Living House",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$870,000",
    address: "123 Palm Street, Miami, FL",
    details: "3 BEDS | 4 BATHS | 3,250 SQ.FT.",
  },
  {
    id: 3,
    type: "Living House",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$870,000",
    address: "123 Palm Street, Miami, FL",
    details: "3 BEDS | 4 BATHS | 3,250 SQ.FT.",
  },
  {
    id: 4,
    type: "Living House",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$870,000",
    address: "123 Palm Street, Miami, FL",
    details: "3 BEDS | 4 BATHS | 3,250 SQ.FT.",
  },
  {
    id: 5,
    type: "Apartments",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$650,000",
    address: "456 Ocean Drive, LA",
    details: "2 BEDS | 2 BATHS | 2,100 SQ.FT.",
  },
  {
    id: 6,
    type: "Apartments",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$650,000",
    address: "456 Ocean Drive, LA",
    details: "2 BEDS | 2 BATHS | 2,100 SQ.FT.",
  },
  {
    id: 7,
    type: "Apartments",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$650,000",
    address: "456 Ocean Drive, LA",
    details: "2 BEDS | 2 BATHS | 2,100 SQ.FT.",
  },
  {
    id: 10,
    type: "Apartments",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$650,000",
    address: "456 Ocean Drive, LA",
    details: "2 BEDS | 2 BATHS | 2,100 SQ.FT.",
  },
  {
    id: 11,
    type: "Real Estate",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$1,000,000",
    address: "789 Estate Blvd, NY",
    details: "4 BEDS | 5 BATHS | 4,500 SQ.FT.",
  },
  {
    id: 12,
    type: "Real Estate",
    imageSrc: "/propertyimg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
      "/house4.png",
      "/house5.png",
    ],
    price: "$1,000,000",
    address: "789 Estate Blvd, NY",
    details: "4 BEDS | 5 BATHS | 4,500 SQ.FT.",
  },
];

function Details() {
const navigate = useNavigate();
  const { id } = useParams();
  const property = listings.find((item) => item.id === parseInt(id));

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <>
      <section className="details-heading">
        <NavBar />
        <div className="details-section">
          <h1>Overview</h1>
          <div className="house-images">
            <img src={property.images[0]} alt="Main House" />
            <div className="other-house-images">
              {property.images.slice(1).map((img, index) => (
                <img src={img} alt={`house-${index}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="house-details">
        <div className="house-name-address">
          <h1>{property.address}</h1>
          <p>{property.details}</p>
        </div>

        <div className="house-main-details">
          <div className="house-description">
            <h1>House Description</h1>
            <p>{property.description}</p>
          </div><br />

          <div className="house-exterior-details">
            <h1>Extra Details</h1>
            <ul>
              <li>
                <b>Price:</b> {property.price}
              </li>
              <li>
                <b>Address:</b> {property.address}
              </li>
              <li>
                <b>Size:</b> {property.details}
              </li>
            </ul>
          </div>
        </div>

        <div className="buttonDiv">
          <Button
            label="Contact Agent"
            onClick={() =>
              window.open(
                "https://wa.me/2348123456789?text=Hi%20Godfather%20Real%20Homes%2C%20I%27m%20interested%20in%20this%20property!",
                "_blank"
              )
            }
          />
        </div>
      </section>


       <section className="Similar-listing">
        <h1 className="h1">SIMILAR LISTING</h1>
        <div className="div">
          {listings
            .filter((item) => item.id !== property.id) 
            .slice(0, 3)
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
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Details;
