import Logo from "@/components/global/Header/Logo";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface cardProps {
  data: {
    icon: string;
    title: string;
    content: string;
  };
}

function Card({ data }: cardProps) {
  return (
    <div className="Card flex flex-col items-start">
      <img src={data.icon} alt={data.title} />
      <h6 className="title secondary">{data.title}</h6>
      <article className="text">{data.content}</article>
    </div>
  );
}

function Footer({}) {
  return (
    <div className="Footer w-full">
      <div className="Footer-carousel w-full">
        <div className="wrapper padding-x">
          <h4 className="title secondary">Pourquoi Chic Vision?</h4>
          <div className="Footer-carousel-wrapper w-full">
            {cards.map((card, i) => (
              <Card data={card} />
            ))}
          </div>
          <div className="Footer-carousel-navigation w-full">
            <div className="item previous disabled">
              <AiOutlineLeft />
            </div>
            <div className="item next">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-bottom w-full">
        <div className="wrapper padding-x">
          <Logo />
          <p className="address">
            Contactez nous au{" "}
            <Link href="tel:+212618102832">+212 6 18 10 28-32</Link> ou
            <br />
            Angle Rue Oubaida Ibn Jarrah Et Haroon Rachid Champs De Course, FES
            30000
            <br />
            Ou retrouvez nous sur social media :
          </p>
          <div className="social-media flex items-center">
            <Link href="#">
              <a>
                <BsFacebook size={22} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <BsInstagram size={22} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <BsWhatsapp size={22} />
              </a>
            </Link>
          </div>
          <p className="copyright">
            Chic Vision &copy; 2022 - Tous les droits resérvés.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const cards = [
  {
    icon: "/assets/icons/gem.svg",
    title: "Toujours près de vous",
    content:
      "Nous somme toujour a votre cote pour vous aider et a collaborer ensemble pour assurer la continuite de votre succes.",
  },
  {
    icon: "/assets/icons/happy.svg",
    title: "Le Service",
    content:
      "L'équipe de vente professionnelle fournira toujours des solutions tout-en-un pour votre entreprise de lunettes et vous aidera à générer plus de revenus de vente et d'aller avec votre business au next level.",
  },
  {
    icon: "/assets/icons/gem.svg",
    title: "Toujours près de vous",
    content:
      "Nous somme toujour a votre cote pour vous aider et a collaborer ensemble pour assurer la continuite de votre succes.",
  },
  {
    icon: "/assets/icons/medal.svg",
    title: "Partenariat",
    content:
      "Un partenariat commercial stratégique à long terme, y compris un soutien financier, une excellente communication et un investissement garantissant la croissance rapide de votre entreprise de lunettess.",
  },
  {
    icon: "/assets/icons/secure.svg",
    title: "Voir c'est croire!",
    content:
      "Lunettes de soleil et lunettes de lux en métal et acétate avec visite vidéo appelez-nous pour prendre rendez-vous maintenant! Expériences 100% garanties.",
  },
];
