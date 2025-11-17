import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white py-12 font-semibold">
      {/* ✅ Background image with soft overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer.jpeg"
          alt="Footer Background"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      {/* ✅ Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent-500/90 p-2 rounded-lg shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Kadam Sir Classes
                </h3>
                <p className="text-accent-300 font-medium">
                  Excellence in Education
                </p>
              </div>
            </div>
            <p className="text-gray-100 text-base leading-relaxed">
              Empowering students from Standards 5 to 10 with quality education
              in all subjects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-base">
              {["Home", "Courses", "Programs", "Gallery", "About"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        document
                          .getElementById(item.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-gray-100 hover:text-accent-300 font-semibold transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent-300">
              Contact Us
            </h4>
            <div className="space-y-3 text-base">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-300 mt-0.5" />
                <p className="text-gray-100 font-semibold">+91 9823972809</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-300 mt-0.5" />
                <p className="text-gray-100 font-semibold">
                  kadamsirclasses@gmail.com
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-300 mt-1 flex-shrink-0" />
                <div className="text-gray-100 leading-snug font-semibold">
                  <p>Congress Nagar Road, near Kasturba Kanya School,</p>
                  <p>Shyam Nagar, Amravati, Maharashtra 444606</p>
                  <a
                    href="https://maps.app.goo.gl/6AcJDzk5JQ7PrVGy7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-300 hover:underline text-sm font-semibold"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-accent-800/40 pt-8 text-center">
          <p className="text-gray-200 text-sm font-semibold">
            &copy; {new Date().getFullYear()} Kadam Sir Classes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
