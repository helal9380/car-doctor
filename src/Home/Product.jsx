/** @format */

import img1 from "../../src/assets/images/products/1.png";
import img2 from "../../src/assets/images/products/2.png";
import img3 from "../../src/assets/images/products/3.png";
import img4 from "../../src/assets/images/products/4.png";
import img5 from "../../src/assets/images/products/5.png";
import img6 from "../../src/assets/images/products/6.png";

const Product = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Popular Products</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <p className="text-center">Rating: 2.3</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <p className="text-center">Rating: 2.3</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <p className="text-center">Rating: 2.3</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img4}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <p className="text-center">Rating: 2.3</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img5}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <p className="text-center">Rating: 2.3</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img6}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <p className="text-center">Rating: 2.3</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
