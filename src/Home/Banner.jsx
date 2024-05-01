const Banner = () => {
    return (
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full h-[75vh] relative">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
            alt="carousel-item"
          />
          <div className="absolute top-0 left-0 text-white right-0 bottom-0 px-10 bg-gradient-to-r from-black to-[#1515150f] z-10 p-4 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-2">Affordable Price For <br /> Car Servicing</h2>
            <p className="md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-2 mt-2">
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
            </div>
          </div>
        </div>
        {/* Add other carousel items similarly */}
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>
    );
  };
  
  export default Banner;
  