import Link from "next/link";

type Props = {};

function Logo({}: Props) {
  return (
    <Link href="/">
      <a className="logo flex items-center justify-start">
        <img src="/assets/logo_dark.svg" alt="Chic Vision" />
      </a>
    </Link>
  );
}

export default Logo;
