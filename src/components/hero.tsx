"use client";

import IconList from "./iconlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faShoppingCart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "@/app/context";
import { useContext} from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import Number from "./number";
import { HeroProps } from "@/utils/types";


function Hero({
  title,
  sampleVideoCover,
  sampleVideo,
  subTitle,
  enrollees,
  slug,
  price,
  list,
}: HeroProps) {
  const [cartData, setCartData]: any = useContext(cartContext);
  return (
    <div className="flex justify-between w-full max-xl:flex-wrap">
      <div className="mx-auto max-lg:px-4">
        <video
          className=" h-80 rounded-2xl object-cover my-2"
          controls
          poster={sampleVideoCover}
        >
          <source src={sampleVideo} type="video/mp4" />
        </video>
      </div>
      <div className="max-w-xl max-xl:mx-auto max-xl:mt-4 lg:mx-6 max-lg:px-6">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h6 className="text-gray text-lg text-justify mt-8">{subTitle}</h6>
        <div className="flex items-center mt-6">
          <FontAwesomeIcon icon={faUniversity} className="text-red-600" />
          <span className="mr-2 font-bold ltr">
            +<Number>{enrollees}</Number>
          </span>
          <p className="-2 px-2 text-sm text-gray">
            هنرجو این دوره را تا کنون تهیه کرده اند.
          </p>
        </div>
        <div className="text-2xl text-red-600 mt-6 font-bold">
          <Number>{price}</Number> تومان
        </div>
        <div
          className={`mt-8 lg:flex lg:flex-wrap w-full justify-between`}
        >
          <a
            onClick={() => {
              setCartData({ do: "add", slug: slug });
            }}
          >
            <Button mode="primary" text="خرید کنید" Icon={faShoppingCart} slug={slug}/>
          </a>
          <a href="tel://+989357008822">
            <Button
              mode="secondary"
              text="نیاز به مشاوره دارید؟"
              Icon={faPhone}
            />
          </a>
        </div>
      </div>
      <div className="mx-auto max-xl:mt-4 my-2">
        <IconList list={list} />
      </div>
    </div>
  );
}

export default Hero;
