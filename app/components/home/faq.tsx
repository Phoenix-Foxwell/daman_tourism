import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FAQs(): JSX.Element {
    interface Question {
        question: string;
        answer: string;
    }
    const questions: Question[] = [
        {
            question: "What is Daman?",
            answer: "Daman is a city located in the Union Territory of Dadra and Nagar Haveli and Daman and Diu in India. It is a popular tourist destination known for its beaches, historic forts, and Portuguese colonial architecture."
        },
        {
            question: "What are some popular tourist attractions in Daman? ",
            answer: "Some popular tourist attractions in Daman include Devka Beach, Jampore Beach, Moti Daman Fort, Nani Daman Fort, Bom Jesus Church, and St. Jerome Fort."
        },
        {
            question: "Can I find information about accommodations in Daman on this website?",
            answer: "Yes, you can find information about accommodations in Daman on our website. We provide a list of recommended hotels, guesthouses, and resorts, along with contact information for each one."
        },
        {
            question: "How do I get to Daman?",
            answer: "Daman is well-connected by road, rail, and air. The nearest airport is in Mumbai, which is about 170 km away. You can also take a train to Vapi, which is the nearest railway station, and then take a taxi or bus to Daman."
        },
        {
            question: "What is the best time to visit Daman?",
            answer: "The best time to visit Daman is from October to March, when the weather is mild and pleasant."
        },
        {
            question: "Are there any cultural events or festivals in Daman?",
            answer: "Yes, Daman is known for its vibrant cultural events and festivals. Some popular festivals include the Daman Music Festival, Daman International Film Festival, and Daman Festival."
        },
    ];

    const [openq, setOpenQue] = useState<boolean[]>(Array(questions.length).fill(false));

    const openQuestions = (index: number): void => {
        setOpenQue((value: boolean[]) => value.map((val, i) => i === index ? !val : false));
    }

    return (
        <div className="w-full xs:h-screen grid place-items-center py-20 xs:py-0">
            <div className="px-4 sm:w-3/5 ">
                <p className="text-center font-medium text-white text-md sm:text-2xl">FAQs, Frequently Asked Questions</p>
                {
                    questions.map((val: Question, index: number) => (
                        <FaqQuestions key={index} question={val.question} answer={val.answer} isOpen={openq[index]} onClick={() => openQuestions(index)}></FaqQuestions>
                    ))
                }
            </div>
        </div>
    );
}

interface FaqQuestionsProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}

const FaqQuestions: React.FC<FaqQuestionsProps> = (props: FaqQuestionsProps): JSX.Element => {
    return (
        <div className="bg-white my-4 shadow-xl">
            <div className="flex items-center p-2">
                <p className="text-gray-800 font-medium text-sm ">
                    {props.question}
                </p>
                <div className="grow"></div>
                <div onClick={props.onClick}>
                    <FontAwesomeIcon className="text-gray-800 font-medium text-sm cursor-pointer" icon={faCircleArrowDown}></FontAwesomeIcon>
                </div>
            </div>
            <div className={`${props.isOpen ? "" : "hidden"} border-l-4 transition-all border-cyan-500 text-xs p-2`}>
                <p className="text-justify">{props.answer}</p>
            </div>
        </div>
    );
}