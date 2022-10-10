import classNames from "classnames";
import Header from "./Header";

export const BasicLayout = (props: { children: any; className: any }) => {
  const { children, className } = props;

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row m-0 p-0">
        <div
          className={classNames("col-12 m-0 p-0", { [className]: className })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
