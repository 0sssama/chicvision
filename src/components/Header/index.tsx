import Logo from "./Logo";
import Icons from "./Icons";
import { Input } from "@/components";

type Props = {};

function index({}: Props) {
  return (
    <header className="padding-x">
      <div className="header-content flex items-center justify-between">
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
