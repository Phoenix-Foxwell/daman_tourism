import { Form, useNavigation } from "@remix-run/react";
import { ChangeEvent, useRef, useState } from "react";




export const Contactus: React.FC = (): JSX.Element => {
    const [chatcount, setCharcount] = useState<number>(0);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    const textaredHandel = (e: ChangeEvent) => {
        console.log(messageRef.current?.value)
        setCharcount(messageRef.current?.value.length ?? 0);
    }
    const navigation = useNavigation();
    const isSubmitting = navigation.state == "submitting";
    return (
        <>
            <div className="xs:h-screen w-full grid place-items-center">
                <div className="flex justify-center gap-x-6 sm:gap-x-20 flex-col items-center sm:flex-row mt-20 px-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg">
                    <div className="w-52 my-10">
                        <h4 className="text-white text-5xl font-semibold">CONTACT
                        </h4>
                        <div className="flex items-center">
                            <div className="w-full bg-white h-1 mr-2"></div>
                            <h4 className="text-white text-5xl font-semibold">US
                            </h4>
                        </div>
                        <h4 className="text-sm text-white font-normal mt-20 hidden sm:block">
                            It is very important for us to touch with you, so we are always ready to answer any question that interests  you. Shoot!
                        </h4>
                    </div>
                    <div className="sm:w-72 py-4 sm:py-0">
                        <Form method="post">
                            <input type={"text"} className={"w-full bg-transparent border-b-2 outline-none p-1 text-white text-md placeholder:text-white"} placeholder="Your name" name="name" />
                            <br />
                            <br />
                            <input type={"text"} className={"w-full bg-transparent border-b-2 outline-none p-1 text-white text-md placeholder:text-white"} placeholder="email" name="email" />
                            <br />
                            <br />
                            <textarea maxLength={1000} onChange={(e) => textaredHandel(e)} ref={messageRef} className={"w-full h-28 bg-transparent border-b-2 outline-none p-1 text-white text-md placeholder:text-white resize-none"} placeholder="Share Your Thought" name="message" >
                            </textarea>
                            <div className="flex">
                                <div className="grow"></div>
                                <div className="text-sm text-white font-normal">{chatcount}/1000</div>
                            </div>
                            <button disabled={isSubmitting} className="text-rose-500 px-4 py-1 mt-4 bg-white text-md font-medium rounded-sm w-full">  {isSubmitting ? "Sending..." : "Share Your Feedback"}</button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}