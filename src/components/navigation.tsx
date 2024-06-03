"use client";

import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { cartContext } from "@/app/context";
import { useContext } from "react";

export default function Navigation(){
    const [cartData , setCartData] : any = useContext(cartContext)
    return <nav className="w-full mb-10 shadow-md h-14 flex items-center justify-between px-6">
        <div className="mx-4 hover:cursor-pointer">
            <Image src={"/logo.png"} alt="logo" className="h-8" width={140} height={70}/>
        </div>
        <div className="hover:cursor-pointer" onClick={() => setCartData({do : 'open'})}>
            <FontAwesomeIcon icon={faShoppingBag} className="w-8 h-8 text-primary"/>
        </div>
    </nav>
}