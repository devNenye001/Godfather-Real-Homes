import NavBar from "./nav";
import HeroText from "./headings";
import Button from "./button";
import ResidentialCard from "./residential";
import FeatureBlock from "./features2";
import Footer from "./footer";

function Hero() {
  return (
    <>
      <section className="Hero">
        <NavBar />
        <HeroText
        className= "heroText"
          title={
            <>
              Welcome to GodFather <br /> Real Homes.
            </>
          }
          subtitle="Our space foster's Love"
        />
      </section>

      <section className="FeaturesSection">
        <h1>
          Enjoy Quality LIfe in <br />
          Godfather Real Homes
        </h1>
        <div className="featuresText">
          <div>
            Godfather real homes offers you Luxurious Comfortable and a Dream home experience in a serene environment.Designed with the feeling of a real home  styled with elegance our space Forster's Love
          </div>
          <div className="featuresNumbers">
            <div>
              <h1>+100</h1>
              <p>Unity Ready</p>
            </div>

            <div>
              <h1>+1K</h1>
              <p>Customers</p>
            </div>

            <div>
              <h1>+500</h1>
              <p>Review</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featureSection2">
        <div className="img"></div>
        <div className="features2text">
          <h1 className="heading">
            What Makes Us <br /> Different?
          </h1>

          <FeatureBlock
            title="Strategic Location"
            description="Located in a well-connected area, GodFather Real Homes offers quick access to the city center, airport, train station, bus terminal, and other major destinations — making your everyday movement seamless and stress-free."
          />
          <FeatureBlock
            title="Modern Design"
            description="Our homes are built spacious,with a Glimpse of the stunning view of our Dynamic  neighborhood.
Every detail is crafted to give you a sense of pride and satisfaction in where you live."
          />
          <FeatureBlock
            title="Guaranteed Security"
            description="Your safety is our priority. Each cluster is fully secured with:
Perimeter fencing
Gated entry points
Guard posts with professional security personnel"
          />
        </div>
      </section>

      <section className="residential">
        <div className="residentialText">
          <h1>
            Residential <br />
            Abuja Short Let Apartments
          </h1>
          <p>
            Enjoy luxury and convenience with our fully furnished short-let
            apartments in Abuja. Ideal for business travelers, tourists, or
            anyone seeking a temporary stay with all the comforts of home.
          </p>
        </div>
        <div className="residentialDiv">
          <ResidentialCard
            units="4 Apartments"
            offerTitle="HOT OFFER"
            bgImage="/apartment1.png"
            onButtonClick={() => console.log("Go to details")}
          />

          <ResidentialCard
            units="4 Apartments"
            offerTitle="HOT OFFER"
            bgImage="/apartments2.png"
            onButtonClick={() => console.log("Go to details")}
          />

          <ResidentialCard
            units="4 Apartments"
            offerTitle="HOT OFFER"
            bgImage="/apartment3.png"
            onButtonClick={() => console.log("Go to details")}
          />
        </div>
      </section>

      <section className="contact">
        <div className="classImg">
          <div className="contactText1">
            <h1>Contact Us</h1>
            <br />
            <p>
              We're here to answer your questions, schedule viewings, or help
              you find your perfect home.
            </p>
          </div>
          <br />
          <div className="contactText2">
            📍 <b>Address:</b> Plot 23, Gwarinpa Extension, Abuja, Nigeria{" "}
            <br /> <br />
            📞 <b>Phone:</b> +234 810 000 0000 <br /> <br />
            📧 <b>Email:</b> info@godfatherhomes.com <br /> <br />
            🕒 <b>Working Hours:</b> Mon–Sat | 9:00 AM – 6:00 PM
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Hero;
