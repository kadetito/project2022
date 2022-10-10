import classNames from "classnames";

export const AuthLayout = (props: { children: any; className: any }) => {
  const { children, className } = props;

  return (
    <div className="row ">
      <div className="col-12">
        <div className="container">
          <div
            className={classNames(
              "vh-100 d-flex justify-content-center align-items-center ",
              { [className]: className }
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
