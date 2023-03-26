import { Link } from "@remix-run/react";
import { cusSubstring } from "~/utils/string";

export default function EventSection() {

    type EventType = {
        title: string;
        description: string;
        image: string;
        link: string;
        date: string
    }

    const events: EventType[] = [
        {
            title: "DAMAN MARATHON",
            description: "Welcome to the 2nd Edition of the Daman Winter Half Marathon 2023 (Run for Fitness)! Join us on April 2nd, 2023 for an exciting run at the beautiful Light House Moti Daman, Daman & Diu & DNH.",
            date: "02ND April, 2023 ",
            image: "/images/events/daman_marathon.png",
            link: "/"
        },
        {
            title: "GO GIRLS! BEACHSIDE NIGHT RUN",
            description: "Join us for an empowering evening under the stars at 'Go Girls! Beachside Night Run' - a government initiative to encourage women's fitness and confidence.",
            date: "11TH MARCH,2023",
            image: "/images/events/go_girls_beachside_night_run.png",
            link: "/"
        },
        {
            title: "INTERNATIONAL WOMEN’S DAY,2023",
            description: "International Women's Day celebrated with enthusiasm in Daman. Guest special and motivational speaker Kajal Oza Vaidya ji made women aware on various issues.",
            date: "08TH MARCH,2023",
            image: "/images/events/womans_day.png",
            link: "/"
        },
    ];
    return (
        <div className="py-20 sm:py-0 sm:h-screen w-full grid place-items-center ">
            <div>
                <div className="grid place-items-center mb-8">
                    <p className=" py px-4 font-semibold text-lg my-4 text-center mx-auto text-rose-500 bg-white rounded-sm hover:text-white border-white border-2 hover:bg-transparent">Upcoming Events</p>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 place-items-center place-content-center justify-center items-center content-center align-center">
                    {
                        events.map((val: EventType, index: number) => (
                            <EventCard key={index} title={val.title} description={val.description} image={val.image} link={val.link} date={val.date}></EventCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

interface EventCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    date: string;
}

const EventCard: React.FC<EventCardProps> = (props: EventCardProps): JSX.Element => {
    return (
        <div className="w-48 h-72 bg-white rounded-md transition-all hover:scale-105 hover:-translate-y-2">
            <img src={props.image} alt="event imags" className="w-full h-28 object-cover object-center rounded-t-md" />
            <div className="p-3">
                <p className="text-sm text-left text-gray-900 font-medium">{cusSubstring(props.title, 16)}</p>
                <p className="text-xs text-left text-gray-900 font-normal">{cusSubstring(props.date, 16)}</p>
                <p className="text-xs text-left text-gray-600 font-normal h-20">{cusSubstring(props.description, 120)}</p>
                <Link to={props.link} className="w-full text-center border-cyan-500 text-white font-medium border-2 inline-block rounded-md my-2 bg-cyan-500 hover:text-cyan-500 hover:bg-transparent text-sm">Learn More</Link>
            </div>
        </div>
    );
}