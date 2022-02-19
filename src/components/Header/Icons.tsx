type Props = {};
type CounterProps = { count: number };

function Counter({ count }: CounterProps) {
  return (
    <div className="counter flex items-center justify-center">
      <p>{count}</p>
    </div>
  );
}

function Icons({}: Props) {
  return (
    <div className="header-icons flex items-center justify-end">
      <a href="#" className="header-icon hide-for-desktop">
        <i className="fi fi-rr-search"></i>
      </a>
      <a href="#" className="header-icon">
        <Counter count={5} />
        <i className="fi fi-rr-bell"></i>
      </a>
      <a href="#" className="header-icon">
        <Counter count={5} />
        <i className="fi fi-rr-shopping-cart"></i>
      </a>
      <a href="#" className="header-icon">
        <i className="fi fi-rr-user"></i>
      </a>
    </div>
  );
}

export default Icons;
