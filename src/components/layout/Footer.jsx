import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-obsidian-soft border-t border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img src="/kkk.png" alt="Zekri Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-lg font-heading font-bold tracking-[0.2em] text-white">ZEKRI</h1>
          </Link>
          <p className="text-gray-400 text-xs leading-relaxed tracking-wide">
            L'excellence en dentisterie esthétique. Nous transformons des sourires avec précision et passion depuis plus de 10 ans.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
          <ul className="flex flex-col gap-4">
            {['Accueil', 'Services', 'Galerie', 'Patients', 'Contact'].map((item) => (
              <li key={item}>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-xs tracking-widest uppercase">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
          <ul className="flex flex-col gap-4 text-xs tracking-wide text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-gold" />
              <span>020 50 95 76</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-gold" />
              <span>contact@zekri-dental.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-gold" />
              <span>Ouled Yaïch, Blida, Algerie</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-gold/20 flex items-center justify-center rounded-full text-gray-400 hover:border-gold hover:text-gold transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-gold/20 flex items-center justify-center rounded-full text-gray-400 hover:border-gold hover:text-gold transition-all duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
          © {new Date().getFullYear()} Zekri Dental Clinic. Tous droits réservés.
        </p>
        <div className="flex gap-8 text-gray-600 text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:text-gold">Mentions Légales</a>
          <a href="#" className="hover:text-gold">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
