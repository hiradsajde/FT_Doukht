import { ReactNode, FC } from "react";
import { IranYekan } from "@/fonts";

interface ContainerProps { 
  children : ReactNode
}

const Container = (props : ContainerProps) => {
  return (
    <div className={`flex justify-center ${IranYekan.className}`}>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
