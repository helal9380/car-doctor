/** @format */
import img1 from "../../src/assets/images/team/1.jpg";
import img2 from "../../src/assets/images/team/2.jpg";
import img3 from "../../src/assets/images/team/3.jpg";

const Team = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Out Team</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jhone</h2>
            <p>Speaker</p>
            
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Cotact</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jhone</h2>
            <p>Speaker</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Cotact</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jhone</h2>
            <p>Speaker</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Cotact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
