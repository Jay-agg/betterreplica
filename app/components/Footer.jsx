import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Company Description and Services */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-12">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Better</h2>
            <p className="text-sm mb-4">
              Better is a family of companies serving all your homeownership
              needs.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-700">
                  Better Mortgage
                </h3>
                <p className="text-xs">
                  We can't wait to say "Welcome home." Apply 100% online, with
                  expert customer support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">
                  Better Real Estate
                </h3>
                <p className="text-xs">
                  Connect with a local Better Real Estate Partner Agent to find
                  out all the ways you can save.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">Better Cover</h3>
                <p className="text-xs">
                  Shop, bundle, and save on insurance coverage for home, auto,
                  life, and more.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">Better Inspect</h3>
                <p className="text-xs">
                  Get free repair estimates, 24-hour turnarounds on reports, and
                  rest easy with our 100-day inspection guarantee.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">
                  Better Settlement Services
                </h3>
                <p className="text-xs">
                  Get transparent rates when you shop for title insurance all in
                  one convenient place.
                </p>
              </div>
            </div>
          </div>

          {/* Three columns wrapper */}
          <div className="flex-1 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Resources Column */}
            <div className="flex-1">
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-700">
                    Home affordability calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Mortgage calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Free mortgage calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Mortgage calculator with taxes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Mortgage calculator with PMI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Rent vs buy calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    HELOC payment calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    HELOC vs cash-out refinance calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Buy a home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Sell a home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Get home inspection
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex-1">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Media
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Learning center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-700">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="flex-1">
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p className="text-sm">hello@better.com</p>
              <p className="text-sm">415-523-8837</p>
              <p className="text-sm">FAQ</p>
              <p className="text-sm">Glossary</p>

              <div className="mt-4">
                <h4 className="font-bold mb-2">Legal</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-green-700">
                      NMLS Consumer Access
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-700">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-700">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-700">
                      Disclosures & Licensing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-700">
                      Affiliated Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-700">
                      Browser Disclaimer
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex space-x-2">
                <img
                  src="/api/placeholder/50/30"
                  alt="Equal Housing Opportunity"
                  className="h-6"
                />
                <img
                  src="/api/placeholder/50/30"
                  alt="NMLS Consumer Access"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
