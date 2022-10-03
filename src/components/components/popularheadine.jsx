import { AiOutlineLine } from "react-icons/ai";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

export default function PopularHeadine({ Classes, data }) {
  // console.log(data[1])
  return (
    <div className={`mb-[60px] last:mb-0 ${Classes[0]}`}>
      <div className="flex items-center mb-[50px]">
        <span className="mr-[30px] text-[30px] font-bold">POPULAR HEADING</span>
        <hr className="flex-1 border-[#A2A2A2]" />
      </div>
      <div className="flex overflow-scroll hide-scrollbar ">
        {data.map((NewsItem, idx) => (
          <div key={idx} className="flex-shrink-0 max-w-full">
            {NewsItem.map((i, idx) => (
              <div key={idx} className="">
                <div className=" sm:flex relative z-10 mb-[60px]">
                  <figure
                    className={`flex-[2] h-[50vh] bg-white border mr-[11px] sm:mr-[50px] mb-[50px]  sm:mb-[0] border-black relative 
                    before:absolute before:-z-[1] before:w-full before:h-full before:top-3 before:left-3 
                    before:bg-transparent before:border before:border-black ${
                      (idx & 1) !== 0 && "order-2 sm:mr-[12px]"
                    }`}
                  /> 
                  <div
                    className={`flex-[2] ${
                      (idx & 1) !== 0 && "order-1 mr-[50px]"
                    }`}
                  >
                    <p
                      className={`text-[20px] flex items-center mb-[30px] ${Classes[1]}`}
                    >
                      <span className="mr-[15px]">{i.auther}</span>
                      <AiOutlineLine className="mr-[15px]" />
                      <span>{i.date}</span>
                    </p>
                    <h1
                      className={`text-[26px] font-bold mb-[30px] cursor-pointer hover:underline ${Classes[2]}`}
                    >
                      {i.heading}
                    </h1>
                    <p className={`text-[20px] ${Classes[1]}`}>{i.brief}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <hr className="visible lg:hidden flex-1 border-[#A2A2A2]" />
        <div className="flex ml-[30px] lg:mr-[30px]">
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
        <hr className="hidden lg:block flex-1 border-[#A2A2A2]" />
      </div>
    </div>
  );
}
