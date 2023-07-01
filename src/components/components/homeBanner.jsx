import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineLine } from "react-icons/ai";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Banner({ headline }) {
  return (
    <article className="border-b border-[#a2a2a2] mb-4">
      <div className="flex gap-6 items-center justify-center my-[50px]">
        <p className="text-[30px] font-bold uppercase min-w-fit">Hot News</p>
        <div className="w-full h-[1px] bg-[#a2a2a2]" />
      </div>
      <div className="flex relative z-10 overflow-hidden">
        <figure
          className=" lg:mr-[60px] max-h-[70vh] flex-[100%]  bg-white border border-black relative 
                    before:absolute before:-z-10 before:w-full before:h-full before:top-4 before:left-4 
                    before:bg-transparent before:border before:border-black mb-[15px]"
        >
          <div className="max-h-[70vh] overflow-hidden flex justify-center items-center">
            <img
              className="w-[100%]"
              src={headline.urlToImage}
            />
          </div>
          <div
            className="hidden lg:flex absolute bottom-0 -right-[120px] h-10 w-[120px] bg-black 
                    text-white text-3xl font-bold items-center justify-end px-2"
          >
            01
          </div>
        </figure>
        <div className=" hidden lg:flex flex-col items-center gap-6 pb-14">
          <div className="button-styling-before text-2xl">
            <button className="button-styling px-3">
              <RiArrowDropUpLine />
            </button>
          </div>
          <div
            className="button-styling-before before:bg-white before:border 
                    before:border-black text-white text-2xl"
          >
            <button className="button-styling bg-black px-3">
              <RiArrowDropDownLine />
            </button>
          </div>
          <div className="w-[1px] h-full bg-[#a2a2a2]" />
        </div>
      </div>
      <div>
        <p className="flex items-center pt-[3.75rem] text-[20px] pb-2">
          <span className="mr-[20px]">
            {headline.author || headline.source.name}
          </span>
          <AiOutlineLine className="mr-[20px]" />
          <span>{headline.publishedAt.slice(0, 10)}</span>
        </p>
        <p className=" pb-[3.25rem] flex items-center justify-between text-[40px] font-bold uppercase">
          <Link
            to={`/news-page/${headline.title.replace(/ /g, "-")}`}
            className="cursor-pointer hover:underline"
          >
            {headline.description}
          </Link>
        </p>
      </div>
      <div className="flex lg:hidden mb-[50px] items-center">
        <hr className="flex-1 border-[#A2A2A2]" />
        <div className="flex ml-[30px]">
          <div className="button-styling-before mr-[20px] ">
            <button className="button-styling p-[12px] ">
              <RiArrowDropLeftLine className="h-[24px] w-[24px]" />
            </button>
          </div>
          <div
            className="button-styling-before before:bg-white before:border 
                    before:border-black text-white"
          >
            <button className="button-styling bg-black p-[12px]">
              <RiArrowDropRightLine className="h-[24px] w-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
