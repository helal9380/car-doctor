/** @format */

const ServiceCard = ({ service }) => {
  const { img,title,description,price } = service;
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="img"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"><span className="font-semibold">Name:</span> {title}</h2>
        <p><span className="font-semibold">Description : </span>{description.slice(0,100)}</p>
        <h3 className="font-bold">Price {price}</h3>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
