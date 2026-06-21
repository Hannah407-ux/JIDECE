import { FaFacebook, FaWhatsapp,} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      <a
        href="https://facebook.com/Jidece"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </a>

      <a
        href="https://whatsapp/08084654907"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>

      
    </div>
  );
}