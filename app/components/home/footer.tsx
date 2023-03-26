import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-white dark:bg-gray-900 relative">
            <div className="h-full w-full bg-black bg-opacity-60 relative z-10 flex flex-col py-4">
                <div className="grow"></div>

                {/* social media */}
                <div className="flex mt-4 space-x-6 justify-center sm:mt-0 py-10">
                    <div className="hover:border-blue-500 border-white rounded-full border-2 w-8 h-8 grid place-items-center text-white hover:text-blue-500 text-lg">
                        <Link to={"http://www.linkedin.com/sharing/share-offsite/?url=https://ddd.gov.in/tourism-2/&mini=true"}>
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <div className="hover:border-blue-500 border-white rounded-full border-2 w-8 h-8 grid place-items-center text-white hover:text-blue-500 text-lg">
                        <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ddd.gov.in/tourism-2/&t=Tourism+Department"}>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <div className="hover:border-cyan-500 border-white rounded-full border-2 w-8 h-8 grid place-items-center text-white hover:text-cyan-500 text-lg">
                        <Link to={"https://twitter.com/share?url=https://ddd.gov.in/tourism-2/&via=TWITTER_HANDLE&text=Tourism+Department"}>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>

                <div className="md:flex md:justify-between px-8">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SmartTech</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-2 text-sm font-semibold text-gray-100 uppercase">Resources</h2>
                            <ul className="text-gray-200 dark:text-gray-400">
                                <FooterLinks new={false} link={"/home"} title="Services"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Features"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Places"></FooterLinks>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-2 text-sm font-semibold text-gray-100 uppercase">Follow us</h2>
                            <ul className="text-gray-200">
                                <FooterLinks new={true} link={"https://www.facebook.com/sharer/sharer.php?u=https://ddd.gov.in/tourism-2/&t=Tourism+Department"} title="Facebook"></FooterLinks>
                                <FooterLinks new={true} link={"https://twitter.com/share?url=https://ddd.gov.in/tourism-2/&via=TWITTER_HANDLE&text=Tourism+Department"} title="Twitter"></FooterLinks>
                                <FooterLinks new={true} link={"http://www.linkedin.com/sharing/share-offsite/?url=https://ddd.gov.in/tourism-2/&mini=true"} title="LinkedIn"></FooterLinks>
                            </ul>
                        </div>
                        <div>
                            <h2 className="m2-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-200">
                                <FooterLinks new={false} link={"/home"} title="Privacy Policy"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Terms &amp; Conditions"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Contact Us"></FooterLinks>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-10">
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex text-white text-xs">
                            <Link to="/">Privacy Policy</Link>
                            <div className="mx-2 h-4 bg-white w-[2px]"></div>
                            <Link to="/">Terms &amp; Conditions</Link>
                        </div>
                        <div className="grow"></div>
                        <p className="text-sm text-gray-100 dark:text-gray-400 text-center sm:text-right">© 2023 <a href="#" target="_blank" className="hover:underline">Smart Tech</a>. All Rights Reserved.
                        </p>
                    </div>
                </div>

            </div>

            {/* <div className="mx-auto w-full container p-4 sm:p-6 z-10 relative bg-black bg-opacity-40 flex flex-col h-full">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Smart Tech</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <FooterLinks new={false} link={"/home"} title="Services"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Features"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Places"></FooterLinks>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <FooterLinks new={true} link={"https://www.facebook.com/sharer/sharer.php?u=https://ddd.gov.in/tourism-2/&t=Tourism+Department"} title="Facebook"></FooterLinks>
                                <FooterLinks new={true} link={"https://twitter.com/share?url=https://ddd.gov.in/tourism-2/&via=TWITTER_HANDLE&text=Tourism+Department"} title="Twitter"></FooterLinks>
                                <FooterLinks new={true} link={"http://www.linkedin.com/sharing/share-offsite/?url=https://ddd.gov.in/tourism-2/&mini=true"} title="LinkedIn"></FooterLinks>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <FooterLinks new={false} link={"/home"} title="Privacy Policy"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Terms &amp; Conditions"></FooterLinks>
                                <FooterLinks new={false} link={"/home"} title="Contact Us"></FooterLinks>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
                    <div className="hover:border-blue-500 border-gray-500 rounded-full border-2 w-8 h-8 grid place-items-center">
                        <Link className="text-gray-500 hover:text-blue-500 text-lg" to={"http://www.linkedin.com/sharing/share-offsite/?url=https://ddd.gov.in/tourism-2/&mini=true"}>
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <div className="hover:border-blue-500 border-gray-500 rounded-full border-2 w-8 h-8 grid place-items-center">
                        <Link className="text-gray-500 hover:text-blue-500 text-lg" to={"https://www.facebook.com/sharer/sharer.php?u=https://ddd.gov.in/tourism-2/&t=Tourism+Department"}>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <div className="hover:border-cyan-500 border-gray-500 rounded-full border-2 w-8 h-8 grid place-items-center">
                        <Link className="text-gray-500 hover:text-cyan-500 text-lg" to={"https://twitter.com/share?url=https://ddd.gov.in/tourism-2/&via=TWITTER_HANDLE&text=Tourism+Department"}>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
                <div className="grow"></div>
            
            </div> */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img src="/images/background/warlibg1.jpg" alt="error" className="w-full h-full object-cover object-bottom" />
            </div>
        </footer >
    );
}

interface FooterLinkProps {
    link: string
    title: string
    new: boolean
}

const FooterLinks: React.FC<FooterLinkProps> = (props: FooterLinkProps): JSX.Element => {
    if (props.new) return (
        <li className="mb-2">
            <Link to={props.link} target="_blank" className="hover:underline">{props.title}</Link>
        </li>
    );

    return (
        <li className="mb-2">
            <Link to={props.link} className="hover:underline">{props.title}</Link>
        </li>
    );
}