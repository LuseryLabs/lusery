interface BannerProps {
  title: string;
  subtitle: string;
  spanText: string;
  description: string;
}

function Banner({ title, subtitle, spanText, description }: BannerProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">{title}</h1>
        <h2 className="mt-5 md:mt-0">
          Bienvenidos
          <span className="underline decoration-4 decoration-[#0AABF7]">
            {spanText}
          </span>{" "}
          {subtitle}
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">{description}</p>
    </div>
  );
}

export default Banner;