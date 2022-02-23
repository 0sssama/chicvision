import Logo from "@/components/global/Header/Logo";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="Footer w-full">
      <div className="Footer-carousel w-full">
        <div className="wrapper padding-x">
          <h4 className="title secondary">Pourquoi Chic Vision?</h4>
          <p>Carousel here.</p>
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
