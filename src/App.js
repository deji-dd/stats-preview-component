import "./App.css";
import image from "./image.jpg";

function App() {
  return (
    <div className="main-card row mx-auto">
      <div className="col-6 col-text">
        <div className="text-div mx-auto">
          <div>
            <h1 className="text-h1">
              Get <span className="text-span">insights</span> that help your
              business grow.
            </h1>
          </div>
          <div className="text-div-p">
            <p className="my-0">
              Discover the benefits of data analytics and make better decisions
              regarding revenue customer experience and overall efficiency.
            </p>
          </div>
          <div className="row stat-row">
            <div className="col stat-div">
              <h1 className="stat-heading">10k+</h1>
              <h2 className="stat-p">COMPANIES</h2>
            </div>
            <div className="col stat-div">
              <h1 className="stat-heading">314</h1>
              <h2 className="stat-p">TEMPLATES</h2>
            </div>
            <div className="col stat-div">
              <h1 className="stat-heading">12M+</h1>
              <h2 className="stat-p">QUERIES</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-img img-div px-0">
        <img src={image} className="img" alt="stuff"></img>
        <span className="img-span"></span>
      </div>
    </div>
  );
}

export default App;
