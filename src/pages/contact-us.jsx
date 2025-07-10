import NavBar from "../components/nav"
import Footer from "../components/footer"

function Contact(){
    return(
        <section className="contact-heading">
        <NavBar />
        <br />
        <br />
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
      </section>
    )
}

export default Contact