import {FC} from "react";
import { ChildrenProps } from "@/utils/types";

const Number : FC<ChildrenProps> = ({children}) => {
    return <>{children ? parseInt(children.toString()).toLocaleString('fa-EG') : ""}</>
}

export default Number