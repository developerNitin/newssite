import PopularHeadine from "./components/popularheadine";
import HotHeadline from "./components/hotheadline";
import NewsLayout from "./components/newsLayout";
import OtherNewsData from "../lib/newsdata/otherNewsData";

export default function Travel() {
 const Classes = [
   "mr-0 pr-0 border-none mt-[50px] mb-0 pb-[60px]",
   "text-[24px]",
   "text-[32px]"
 ];

  return (
    <>
      <HotHeadline data = {OtherNewsData[0]} />
      <PopularHeadine Classes = {Classes} data={OtherNewsData[1]}></PopularHeadine>
      <NewsLayout data = {OtherNewsData[2]}/>
    </>
  );
}
