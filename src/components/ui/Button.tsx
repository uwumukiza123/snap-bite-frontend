import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

type ButtonProps = {
  className: string;
  path?: string;
};

const RoundedButton = ({
  className,
  path,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <div>
      <Link to={path || ""}>
        <button className={`${className}`}>{children}</button>
      </Link>
    </div>
  );
};

export default RoundedButton;
