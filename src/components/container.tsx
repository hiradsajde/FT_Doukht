import { IranYekan } from "@/utils/fonts";
import { ChildrenProps } from "@/utils/types";

const Container = ({children} : ChildrenProps) => {
  return (
    <div className={`flex justify-center ${IranYekan.className}`}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
