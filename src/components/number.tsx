import { ReactNode , FC} from "react";

interface NumberProps { 
    children : ReactNode
}

const Number : FC<NumberProps> = ({children}) => {
    const persianNums = "۰۱۲۳۴۵۶۷۸۹".split("")
    return <>{children ? parseInt(children.toString()).toLocaleString('fa-EG') : ""}</>
}

export default Number