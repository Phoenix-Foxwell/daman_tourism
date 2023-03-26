import { faBarChart, faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
    const [isDark, setDark] = useState<boolean>(false);

    const setTheme = () => {
        setDark((val) => !val);
    }

    return (
        <div className="flex p-2 mx-2 sm:mx-6 items-center gap-x-2">
            <div className="flex text-center gap-2 items-center">
                <img src="/images/logo.png" alt="error" className="h-8 w-8 object-cover object-center rounded-md" />
                <p className="text-center text-white font-sm font-semibold">DAMAN Tourism</p>
            </div>
            <div className="grow"></div>
            <div onClick={setTheme}>
                <FontAwesomeIcon className="text-white text-lg" icon={isDark ? faMoon : faSun}></FontAwesomeIcon>
            </div>
            <div>
                <FontAwesomeIcon className="text-white text-lg" icon={faBars}></FontAwesomeIcon>
            </div>
        </div>
    );
} 