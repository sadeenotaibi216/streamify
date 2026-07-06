

function Footer() {
  return (
    <>
      <div className="flex justify-between ml-30 text-white mt-5">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Streamify-logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-semibold font-sans">
              Streamify
            </span>
          </div>

          <p className="text-xl font-sans text-gray-400 mt-3">
            Your favorite stories, all in one place.
            <br />
            Stream anytime, anywhere.
          </p>

          <img
            src="/all.png"
            alt="apps-logo"
            className="w-50 h-20"
          />
        </div>

        <div className="flex gap-20 mr-30">
          <div>
            <p className="font-semibold text-xl mb-4">Browse</p>
            <p className="text-gray-400 mb-2">TV Shows</p>
            <p className="text-gray-400 mb-2">Movies</p>
            <p className="text-gray-400 mb-2">Kids</p>
            <p className="text-gray-400 mb-2">My List</p>
          </div>

          <div>
            <p className="font-semibold text-xl mb-4">Company</p>
            <p className="text-gray-400 mb-2">About Us</p>
            <p className="text-gray-400 mb-2">Careers</p>
            <p className="text-gray-400 mb-2">Press</p>
            <p className="text-gray-400 mb-2">Contact Us</p>
          </div>

          <div>
            <p className="font-semibold text-xl mb-4">Support</p>
            <p className="text-gray-400 mb-2">Help Center</p>
            <p className="text-gray-400 mb-2">Terms of Use</p>
            <p className="text-gray-400 mb-2">Privacy Policy</p>
            <p className="text-gray-400 mb-2">Cookie Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
