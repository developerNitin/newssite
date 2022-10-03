import { AiOutlineLine } from "react-icons/ai";

export default function NewsLayout({ data }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] pb-[50px]">
      {data.map((i, idx) => (
        <div key={idx} className="w-full relative">
          <div className="w-full h-[250px] border border-black absolute top-2 left-2" />
          <figure className="w-full h-[250px] border border-black bg-white relative"></figure>
          <p className="flex items-center pt-[40px] text-[16px] pb-2">
            <span className="mr-[15px]">Luv Makin</span>
            <AiOutlineLine className="mr-[15px]" />
            <span>September 20, 22.</span>
          </p>

          <p className="mt-4 text-xl font-bold uppercase hover:underline cursor-pointer">
            {i.title}
          </p>
        </div>
      ))}
    </div>
  );
}
