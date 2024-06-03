import { ReactNode , FC} from "react";

interface NumberProps { 
    children : ReactNode
}

const Number : FC<NumberProps> = ({children}) => {
    return <>{children ? parseInt(children.toString()).toLocaleString('fa-EG') : ""}</>
}

export default Number