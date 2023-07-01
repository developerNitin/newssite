import PopularHeadine from "./components/popularheadine";
import NewsLayout from "./components/newsLayout";
import { AiOutlineLine } from "react-icons/ai";
import trendingNew from "../../trendingNews.json";
// import axios from "axios";
import NewsPage from "./newsPage";

import Banner from "./components/homeBanner";

import HomeNewsData from "../lib/newsdata/homeNewsData";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
// import { render } from "react-dom";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=c857d7e0df974cbe9d7cd70344c5a5a7";
export default function Headlines() {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setTrendingNews(json.articles);
      });
  }, []);

  return (
    <>
      {trendingNews[0] && <Banner headline={trendingNews[0]} />}
      <div className="flex justify-between mt-[50px] mb-[60px]">
        <div className=" w-[100%] lg:pr-[40px] lg:mr-[40px] lg:border-r-[1px] lg:w-[75%] border-[#A2A2A2]">
          {trendingNews.slice(1, 3) && (
            <PopularHeadine Classes={""} data={trendingNews.slice(1, 3)} />
          )}
          {trendingNews.slice(3, 5) && (
            <PopularHeadine Classes={""} data={trendingNews.slice(3, 5)} />
          )}
        </div>

        <div className="w-[25%] relative z-40 mb-auto hidden lg:block">
          <div className="flex items-center mb-[40px]">
            <span className="mr-[30px] text-[30px] font-bold uppercase">
              trending
            </span>
            <hr className="flex-1 border-[#A2A2A2]" />
          </div>
          {trendingNews.slice(5, 10).map((i, idx) => (
            <div
              key={idx}
              className="border-b-[1px] border-[#A2A2A2] mb-[30px] pb-[30px]"
            >
              <div>
                <div className="flex items-center mb-[30px]">
                  <figure
                    className="h-[50px] bg-white border mr-[40px] border-black relative flex items-center justify-center
                    before:absolute before:-z-[1] before:w-full before:h-full before:top-[5px] before:left-[5px] 
                    before:bg-transparent before:border before:border-black "
                  >
                    <p className="text-[22px] text-center w-[50px] font-bold">
                      {idx + 1}.
                    </p>
                  </figure>
                  <Link
                    to={`news-page/${i.title && i.title.replace(/ /g, "-")}`}
                    className="text-[22px] font-bold cursor-pointer hover:underline"
                  >
                    {i.title && i.title.slice(0, 55)}...
                  </Link>
                </div>
                <p className="text-[16px] mb-[30px]">
                  {i.description && i.description}
                </p>
                <p className="flex items-center text-[16px] pb-2 justify-between">
                  <span className="flex items-center w-[50%]">
                    {i.author || i.source.name && i.author || i.source.name}

                    {/* <AiOutlineLine className="mr-[15px]" /> */}
                  </span>
                  <span>{i.publishedAt && i.publishedAt.slice(0, 10)}</span>
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
