import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ChildrenProps { 
    children : ReactNode
}  
export interface IconListProps { 
    icon: IconDefinition 
    text: string
}
export interface HeroProps {
    title: string;
    sampleVideoCover: string;
    sampleVideo: string;
    subTitle: string;
    enrollees: string;
    slug: string;
    price: number;
    list: IconList[];
}