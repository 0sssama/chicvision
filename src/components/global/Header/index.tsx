import Logo from "./Logo";
import Icons from "./Icons";
import { Input } from "@/components";

type Props = {};

function index({}: Props) {
  return (
    <header>
      <div className="header-content flex items-center justify-between padding-x">
        <Logo />
        <Input
          type="header-search"
          name="search"
          placeholder="Rechercher"
          className="hide-for-mobile"
        />
        <Icons />
      </div>
    </header>
  );
}

export default index;
