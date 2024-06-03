"use client";

import { IranYekan } from "@/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faClose , faTrash} from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../app/context";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "@/utils/queries";
import { useContext } from "react";
import Image from "next/image";

const ItemDisplay = ({slug , dispatch} : {slug : string , dispatch : Function}) => {
  const { loading, error, data } = useQuery(GET_PRODUCT , {
    variables : {
      slug : slug
    }
  });

  if (loading) return <p>در حال بارگذاری</p>;
  if (error) return <p>خطا : {error.message}</p>;
  return <div className="flex items-center justify-between px-2">
    <div className="flex gap-2 items-center">
      <Image src={data.courseBySlug.thumbnail} width={64} height={64} alt={data.courseBySlug.title} className="rounded-xl w-16 h-16"/>
      {data.courseBySlug.title}
    </div>
    <div className="text-gray" onClick={() => {dispatch({do:'remove', slug:slug})}}>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  </div>;
}

const Cart: any = () => {
  const [cartData , setCartData] : any = useContext(cartContext)
  return (
        cartData.open && (
          <div className={`relative ${IranYekan.className}`}>
            <div className="fixed backdrop-blur-xl w-full h-full z-20">
              <div className="left-0 w-96 bg-white z-30 h-full shadow-lg absolute p-6">
                <div className="w-full flex justify-between items-center text-gray">
                  <div className=" flex items-center gap-4 text-xl">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <h3>سبد خرید شما</h3>
                  </div>
                  <div className="text-2xl mt-1" onClick={() => setCartData({do : "close"})}>
                    <FontAwesomeIcon icon={faClose} />
                  </div>
                </div>
                <div className="mt-6">
                  {cartData.slugs.map((slug : string , index : number) => <ItemDisplay slug={slug} key={index} dispatch={setCartData}/>)}
                </div>
              </div>
            </div>
          </div>
        )
  );
};

export default Cart;
