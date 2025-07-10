import NavBar from "../components/nav";
import Footer from "../components/footer";
import HeroText from "../components/headings";
import MemberCard from "../components/team-card";
import ResidentialCard from "../components/residential";

function About() {
  return (
    <>
      <section className="about-heading">
        <NavBar />
        <HeroText
          className="aboutText"
          title={<>About Us</>}
          subtitle="Building More Than Houses — We Build Legacies"
        />
        <p>
          GodFather Real Homes offers you comfortable, safe, and affordable
          housing designed with elegance and simplicity. With our cluster-style
          layout, you can enjoy privacy, peace of mind, and the beauty of a
          clean, well-organized environment — perfect for you and your family.
        </p>
      </section>

      <section className="mission">
        <h1>Our Mission</h1>
        <p>
          Secure , convenient and modern day housing solutions with quality at
          heart delivering pristine Homes
        </p>
      </section>

      <secton className="services">
        <div className="services-text">
          <h1>Our Services</h1>
          <p>
            At GodFather Real Homes, we offer a range of tailored real estate
            solutions to meet your lifestyle, investment, and property needs.
          </p>
        </div>

        <div className="ServicesDiv">
          <ResidentialCard
            className="ServicesCard"
            units="Property Management"
            offerTitle=""
            bgImage="/apartment1.png"
            onButtonClick={() => console.log("Go to details")}
          />

          <ResidentialCard
            className="ServicesCard"
            units="Premium Residents Apartments"
            offerTitle=""
            bgImage="/apartments2.png"
            onButtonClick={() => console.log("Go to details")}
          />

          <ResidentialCard
            className="ServicesCard"
            units="Short-Let Apartments"
            offerTitle=""
            bgImage="/apartment3.png"
            onButtonClick={() => console.log("Go to details")}
          />
        </div>
      </secton>
      <section className="team">
          <h1>Meet Our Team</h1>
          <div className="team-gallery">
            <MemberCard
              name="Steve Johnson"
              role="Owner"
              image="/member-photo.png"
            />

            <MemberCard
              name="Steve Johnson"
              role="Owner"
              image="/member-photo.png"
            />

            <MemberCard
              name="Steve Johnson"
              role="Owner"
              image="/member-photo.png"
            />

            <MemberCard
              name="Steve Johnson"
              role="Owner"
              image="/member-photo.png"
            />

            <MemberCard
              name="Steve Johnson"
              role="Owner"
              image="/member-photo.png"
            />

            <MemberCard
              name="Steve Johnson"
              role="Owner"
              image="/member-photo.png"
            />
          </div>
        </section>
      <Footer />
    </>
  );
}

export default About;
