import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="vh-100 d-flex mun__backgopaced align-items-center justify-content-center">
      <div className="text-center">
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h5>Loading...</h5>
      </div>
    </div>
  );
};

export default Loader;
