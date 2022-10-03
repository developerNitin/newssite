import PopularHeadine from "./components/popularheadine";
import NewsLayout from "./components/newsLayout";
import { AiOutlineLine } from "react-icons/ai";

import Banner from "./components/homeBanner";

import HomeNewsData from "../lib/newsdata/homeNewsData";

export default function Headlines() {
  return (
    <>
      <Banner />
      <div className="flex justify-between mt-[50px] mb-[60px]">
        <div className=" w-[100%] lg:pr-[40px] lg:mr-[40px] lg:border-r-[1px] lg:w-[75%] border-[#A2A2A2]">
          <PopularHeadine Classes={""} data={HomeNewsData[0]} />
          <PopularHeadine Classes={""} data={HomeNewsData[0]} />
        </div>

        <div className="w-[25%] relative z-40 mb-auto hidden lg:block">
          <div className="flex items-center mb-[40px]">
            <span className="mr-[30px] text-[30px] font-bold uppercase">
              trending
            </span>
            <hr className="flex-1 border-[#A2A2A2]" />
          </div>
          {HomeNewsData[1].map((i, idx) => (
            <div
              key={idx}
              className="border-b-[1px] border-[#A2A2A2] mb-[30px] pb-[30px]"
            >
              <div>
                <div className="flex items-center mb-[30px]">
                  <figure
                    className="h-[50px] w-[50px] bg-white border mr-[40px] border-black relative flex items-center justify-center
                    before:absolute before:-z-[1] before:w-full before:h-full before:top-[5px] before:left-[5px] 
                    before:bg-transparent before:border before:border-black "
                  >
                    <p className="text-[22px] font-bold">{idx + 1}.</p>
                  </figure>
                  <span className="text-[22px] font-bold cursor-pointer hover:underline">
                    {i.heading}
                  </span>
                </div>
                <p className="text-[16px] mb-[30px]">{i.brief}</p>
                <p className="flex items-center text-[16px] pb-2">
                  <span className="mr-[15px]">{i.auther}</span>
                  <AiOutlineLine className="mr-[15px]" />
                  <span>{i.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewsLayout data={HomeNewsData[2]} />
    </>
  );
}
