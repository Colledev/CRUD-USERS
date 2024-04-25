const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-80">
        <h1 className="text-5xl font-bol tracking-tight text-green-600">
          Discover restaurants near you.
        </h1>
        <span className="text-x1">Enter a city</span>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-40">
        <div className="flex flex-col items-center justify-center gap-2 text-center ">
          <img src={"./public/Img/Delivery.png"} className="w-72" />
          <span className="font-bold text-4xl tracking-tighter">
            Become a Delivery driver
          </span>
          <span className="text-2xl -mt-1">Earn money in your free-time</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center ">
          <img src={"./public/Img/Shop.png"} className="w-36" />
          <span className="font-bold text-4xl tracking-tighter">
            Become a Partner
          </span>
          <span className="text-2xl -mt-1">
            Open your business and reach new costumers
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
