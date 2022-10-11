import classNames from "classnames";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export const ContentLayout = (props: { children: any; className: any }) => {
  const { children, className } = props;

  return (
    <div className="container-fluid ">
      <Header />
      <div className="row ">
        <div
          className={classNames("col-12 p-0 m-0", { [className]: className })}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
