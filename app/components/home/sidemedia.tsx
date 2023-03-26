import { faFacebook, faInstagram, faLinkedinIn, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faBold, faPoop, faShare, faShareNodes, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useSpring } from '@react-spring/web'
import { Link, useNavigate } from '@remix-run/react';
import { useState } from 'react';
export default function SideShereMedia(): JSX.Element {
    const [isOpen, setOpne] = useState<boolean>(false);
    const handelShare = () => {
        setOpne((val) => !val);
    }
    return (
            <div className="p-2 flex flex-col gap-2 fixed bottom-4 right-6 z-50">
                <SideMedieTab icon={faFacebook} color='text-blue-500' link='https://www.facebook.com/sharer/sharer.php?u=https://ddd.gov.in/tourism-2/&t=Tourism+Department' isActive={isOpen}></SideMedieTab>
                <SideMedieTab icon={faTwitter} color='text-cyan-500' link='https://twitter.com/share?url=https://ddd.gov.in/tourism-2/&via=TWITTER_HANDLE&text=Tourism+Department' isActive={isOpen}></SideMedieTab>
                <SideMedieTab icon={faLinkedinIn} color='text-cyan-500' link='http://www.linkedin.com/sharing/share-offsite/?url=https://ddd.gov.in/tourism-2/&mini=true' isActive={isOpen}></SideMedieTab>
                <SideMedieTab icon={isOpen ? faXmark : faShareNodes} color='text-rose-500' onClick={handelShare} isActive={true}></SideMedieTab>
            </div>
    );
}

interface SideMediaTabProps {
    icon: IconDefinition;
    color: string;
    onClick?: () => void;
    link?: string
    isActive: boolean
}

const SideMedieTab: React.FC<SideMediaTabProps> = (props: SideMediaTabProps): JSX.Element => {
    if (props.link == null || props.link == undefined || props.link == "") return (
        <div className={`${props.color} ${props.isActive ? "" : "hidden"} rounded-full bg-white w-8 h-8 grid place-items-center cursor-pointer`} onClick={props.onClick}>
            <FontAwesomeIcon className={`${props.color}`} icon={props.icon}></FontAwesomeIcon>
        </div>
    );
    return (
        <Link to={props.link} target='_blank'>
            <div className={`${props.color} ${props.isActive ? "" : "hidden"} rounded-full bg-white w-8 h-8 grid place-items-center cursor-pointer`} onClick={props.onClick}>
                <FontAwesomeIcon className={`${props.color}`} icon={props.icon}></FontAwesomeIcon>
            </div>
        </Link>
    );
}
