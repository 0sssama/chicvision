import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineSearch,
} from "react-icons/ai";

type Props = {};
type CounterProps = { count: number };

function Counter({ count }: CounterProps) {
  if (count === 0) {
    return <></>;
  }
  return (
    <div className="counter flex items-center justify-center">
      <p>{count}</p>
    </div>
  );
}

function Icons({}: Props) {
  return (
    <div className="header-icons flex items-center justify-end">
      <Link href="/search">
        <a href="#" className="header-icon hide-for-desktop">
          <AiOutlineSearch size={24} />
        </a>
      </Link>
      <Link href="/notifications">
        <a href="#" className="header-icon">
          <Counter count={5} />
          <AiOutlineBell size={24} />
        </a>
      </Link>
      <Link href="/cart">
        <a href="#" className="header-icon">
          <Counter count={5} />
          <AiOutlineShoppingCart size={24} />
        </a>
      </Link>
      <Link href="/account">
        <a href="#" className="header-icon">
          <AiOutlineUser size={24} />
        </a>
      </Link>
    </div>
  );
}

export default Icons;
