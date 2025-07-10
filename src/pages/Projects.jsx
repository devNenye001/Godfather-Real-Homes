import NavBar from "../components/nav";
import Footer from "../components/footer";
import HeroText from "../components/headings";
import PropertyCard from "../components/property-card";

function Projects() {
  return (
    <>
      <section className="project-heading">
        <NavBar />
        <HeroText
          className="projectText"
          title={<>Our Projects</>}
          subtitle="Discover the homes and communities we've built with excellence, elegance, and precision."
        />
      </section>

      <section className="projects">
        <PropertyCard
          imageSrc="/propertyimg.png"
          price=""
          address="20724 Visa Court, London, CA 95476"
          details="4 BEDS | 5 BATHS | 5,776 SQ.FT."
          className="property"
        />
        <PropertyCard
          imageSrc="/propertyimg.png"
          price=""
          address="20724 Visa Court, London, CA 95476"
          details="4 BEDS | 5 BATHS | 5,776 SQ.FT."
          className="property"
        />
        <PropertyCard
          imageSrc="/propertyimg.png"
          price=""
          address="20724 Visa Court, London, CA 95476"
          details="4 BEDS | 5 BATHS | 5,776 SQ.FT."
          className="property"
        />
        <PropertyCard
          imageSrc="/propertyimg.png"
          price=""
          address="20724 Visa Court, London, CA 95476"
          details="4 BEDS | 5 BATHS | 5,776 SQ.FT."
          className="property"
        />
        <PropertyCard
          imageSrc="/propertyimg.png"
          price=""
          address="20724 Visa Court, London, CA 95476"
          details="4 BEDS | 5 BATHS | 5,776 SQ.FT."
          className="property"
        />
        <PropertyCard
          imageSrc="/propertyimg.png"
          price=""
          address="20724 Visa Court, London, CA 95476"
          details="4 BEDS | 5 BATHS | 5,776 SQ.FT."
          className="property"
        />
      </section>
      <Footer />
    </>
  );
}

export default Projects;
