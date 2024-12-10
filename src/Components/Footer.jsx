import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-red-900 text-white">
      {/* Footer top section */}
      <div className="footer-top py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between text-start items-start md:items-center text-lg">
            {/* Footer Contact */}
            <div className="footer-contact mb-8 md:mb-0">
              <h3 className="text-white text-2xl mb-4">LOCATION</h3>
              <p className="text-sm text-white">
                2620 Regatta Drive <br /> Las Vegas, NV <br /> 89128 <br />
                <br />
                <strong>Phone:</strong> +000000000000000 <br />
                <strong>Email:</strong> info@AmericanaLasvegas.com <br />
              </p>
            </div>

            {/* Useful Links */}
            <div className="footer-links mb-8 md:mb-0">
              <h4 className="text-xl mb-4">HOURS</h4>
              <ul className="text-white">
                <li><p>Lunch 11:30AM-3:00PM</p></li>
                <li><p>Tuesday-Saturday</p></li>
                <li><p>Brunch 11:00 AM- 3:00PM</p></li>
                <li><p>Sunday</p></li>
                <li><p>Dinner Tuesday, Wednesday,</p></li>
                <li><p>Thursday, Sunday, 3:00PM-9:00PM</p></li>
                <li><p>Dinner Friday & Saturday 3:00PM-9:30PM</p></li>
              </ul>
            </div>

            {/* Social Networks */}
            <div className="footer-links">
              <h4 className="text-xl mb-4">Find us on...</h4>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="social-links flex space-x-3">
                <a href="/" className="social-icon">
                  <i className="bx bxl-twitter text-2xl"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="bx bxl-facebook text-2xl"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="bx bxl-instagram text-2xl"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="bx bxl-skype text-2xl"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="bx bxl-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section (copyright and credits) */}
      <div className="py-4 bg-blue-900 border-t-4 border-white w-full text-lg">
        <div className="text-center">
          <div className="copyright mb-2">
           &copy; Powered by <strong><span className="text-yellow-500">SpotHooper</span></strong>. All Rights Reserved
          </div>
          <div className="credits text-sm">
          Designed by <a href="/" className="text-white">Website design, Social Media marketing and Email marketing provided by SpotHopper.</a>
        </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
