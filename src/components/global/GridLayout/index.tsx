import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function GridLayout({ children }: Props) {
  return <div className="GridLayout w-full padding-x">{children}</div>;
}

export default GridLayout;
