
import { Link } from "react-router";
function FooterLink({ children }) {
  return <p className="text-gray-400 mb-2 text-sm md:text-base">{children}</p>;
}

function Footer() {
  return (
    <div className="text-white mt-5 px-6 md:px-16 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Streamify-logo" className="w-10 h-10" />
            <span className="text-2xl font-semibold font-sans">Streamify</span>
          </div>

          <p className="text-base md:text-xl font-sans text-gray-400 mt-3">
            Your favorite stories, all in one place.
            <br />
            Stream anytime, anywhere.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-20">
          <div>
            <p className="font-semibold text-lg md:text-xl mb-2 md:mb-4">
              Browse
            </p>
            <FooterLink>TV Shows</FooterLink>
            <FooterLink>Movies</FooterLink>
            <FooterLink>Kids</FooterLink>
            <FooterLink>My List</FooterLink>
          </div>

          <div>
            <p className="font-semibold text-lg md:text-xl mb-2 md:mb-4">
              Company
            </p>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Press</FooterLink>
            <Link to="/contact" className="text-gray-400 hover:text-green-400">
  Contact Us
</Link>
          </div>

          <div>
            <p className="font-semibold text-lg md:text-xl mb-2 md:mb-4">
              Support
            </p>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Terms of Use</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;