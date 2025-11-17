import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center mb-4">
            <MapPin className="w-12 h-12 text-accent-500 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600">Find us at our location</p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="animate-fadeInUp">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Congress+Nagar+Rd,+near+Kasturba+Kanya+School,+Rajendra+Colony,+Shyam+Nagar,+Amravati,+Maharashtra+444606&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kadam Sir's Classes Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
