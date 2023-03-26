import { useEffect, useState } from "react";
import Header from "./headers";

export default function HomePage() {


    const images: string[] = [
        "/images/gallery/2.png",
        "/images/gallery/3.png",
        "/images/gallery/9.png",
        "/images/gallery/5.png",
    ];

    const [index, setIndex] = useState<number>(0);

    const handelIndex = (val: number) => {
        setIndex((value) => val);
    }



    return (
        <div className="h-screen w-full flex flex-col">
            <Header></Header>
            <div className="w-full flex flex-col grow overflow-hidden">
                <div className="grow overflow-hidden">
                    <img src={images[index]} alt="images" className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-full flex  ">
                    <ImageTab num="1" title="Section" isActive={index == 0} index={1} onClick={() => handelIndex(0)}></ImageTab>
                    <ImageTab num="2" title="Section" isActive={index == 1} index={2} onClick={() => handelIndex(1)}></ImageTab>
                    <ImageTab num="3" title="Section" isActive={index == 2} index={3} onClick={() => handelIndex(2)}></ImageTab>
                    <ImageTab num="4" title="Section" isActive={index == 3} index={4} onClick={() => handelIndex(3)}></ImageTab>
                </div>
            </div>
        </div>
    );
}

interface ImageTabProps {
    index: number;
    num: string;
    title: string;
    isActive: boolean;
    onClick: () => void
}

const ImageTab: React.FC<ImageTabProps> = (props: ImageTabProps): JSX.Element => {
    return (
        <div className={`grow px-4 flex gap-4 justify-center py-2 ${props.isActive ? "border-t-2 border-white" : "border-transparent border-t-2"} `} onClick={props.onClick}>
            <div className="text-white text-xs font-semibold w-6 rounded-full h-6 border-2 grid place-items-center">{props.num}</div>
            <p className="text-center text-white font-semibold hidden sm:block">{props.title}</p>
        </div>
    );
}