function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl"> Programacion en web3 </h1>
        <h2 className="mt-5 md:mt-0">
          Bienvenidos
          <span className="underline decoration-4 decoration-[#0AABF7]">
            locos por la web3
          </span>{" "}
          a tu blog de confianza
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Noticias | Lo último en desarrollos | web3 y mucho más !
      </p>
    </div>
  );
}

export default Banner;
