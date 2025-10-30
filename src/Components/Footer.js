import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-lg font-semibold">© 2025 Igwe Kitchen</p>
      <p className="text-sm text-gray-400">Designed by Igwe Emmanuel</p>
      <div className="flex justify-center space-x-6 mt-8 text-yellow-500 text-2xl">
        <a href="https://www.linkedin.com/in/emmanuel-igwe-406301385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="http://wa.me/2349151265480">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
}
