"use client";

import IconList from "./icolist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { cartContext } from "@/app/context";
import { useContext} from "react";
import Button from "./button";
import Number from "./number";

function Hero({ data , list}: { data: any , list : any}) {
  const [cartData , setCartData] : any = useContext(cartContext)
  return (
    <div className="flex justify-between w-full max-xl:flex-wrap">
      <div className="mx-auto max-lg:px-4">
          <video className=" h-80 rounded-2xl object-cover my-2" controls poster={data.courseBySlug.sampleVideoCover}>
            <source src={data.courseBySlug.sampleVideo} type="video/mp4"/>
          </video>
      </div>
      <div className="max-w-xl max-xl:mx-auto max-xl:mt-4 lg:mx-6 max-lg:px-6">
        <h1 className="text-5xl font-bold">
          {data.courseBySlug.title}
        </h1>
        <h6 className="text-gray text-lg text-justify mt-8">
          {data.courseBySlug.subTitle}
        </h6>
        <div className="flex items-center mt-6">
        <FontAwesomeIcon icon={faUniversity} className="text-red-600"/>
        <span className="mr-2 font-bold ltr">+<Number>{data.courseBySlug.enrollees}</Number></span>
        <p className="-2 px-2 text-sm text-gray">هنرجو این دوره را تا کنون تهیه کرده اند.</p>
        </div>
        <div className="text-2xl text-red-600 mt-6 font-bold">
            <Number>{data.courseBySlug.price}</Number> تومان
        </div>
        <div className={`mt-8 lg:flex lg:flex-wrap w-full justify-between ${cartData.slugs.includes(data.courseBySlug.slug) && 'grayscale'}`}>
            <a onClick={() => {
                setCartData({do : 'add' , slug : data.courseBySlug.slug})
            }}>
                <Button mode="primary" text="خرید کنید"/>
            </a>
            <a href="tel://+989357008822">
                <Button mode="secondary" text="نیاز به مشاوره دارید؟"/>
            </a>
        </div>
      </div>
      <div className="mx-auto max-xl:mt-4 my-2">
      <IconList list={list}/>
      </div>
    </div>
  );
}

export default Hero;
