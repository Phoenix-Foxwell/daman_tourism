export default function About(): JSX.Element {
    return (
        <div className="w-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" width="100%" version="1.1" className="relative">
                <path xmlns="http://www.w3.org/2000/svg" className="-translate-y-80" d="M0 464L50 448.8C100 433.7 200 403.3 300 418.5C400 433.7 500 494.3 600 505C700 515.7 800 476.3 850 456.7L900 437L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z" fill="#1D222D" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
            <div className="bg-[#1D222D] f-full z-10 relative">
                <div className="bg-[#1D222D] grid grid-cols-1 lg:grid-cols-2 place-items-center mx-auto md:w-5/6 lg:w-4/5">
                    <div className="grid place-items-center"><img src="/images/about.png" alt="about us image" className=" inline-block w-full rounded-full h-80" /></div>
                    <div className="p-6">
                        <div>
                            <h2 className="w-40 text-white borsder-b-4 border-rose-500 font-medium text-4xl relative">
                                About Us
                            </h2>
                        </div>
                        <div className="mt-6 flex flex-col gap-y-4">
                            <div className="flex gap-x-2">
                                <div>
                                    <div className="h-2 w-2 bg-rose-500 rotate-45 translate-y-2"></div>
                                </div>
                                <p className="text-white font-normal text-sm">U.T. of Daman and Diu comprises two districts namely Daman and Diu. Both Districts are situated on western coast of India at a distance of about 700 kms. Daman is the head Quarter of this U.T.</p>
                            </div>
                            <div className="flex gap-x-2">
                                <div>
                                    <div className="h-2 w-2 bg-rose-500 rotate-45 translate-y-2"></div>
                                </div>
                                <p className="text-white font-normal text-sm">Daman is on main land near southern portion of Gujarat State. Vapi is the nearest Railway Station (13 kms) which is on Western Railway between Mumbai and Surat. Vapi is 167 kms from Mumbai Central and 95 kms from Surat.</p>
                            </div>
                            <div className="flex gap-x-2">
                                <div>
                                    <div className="h-2 w-2 bg-rose-500 rotate-45 translate-y-2"></div>
                                </div>
                                <p className="text-white font-normal text-sm">Diu is an island near Una of Junagarh District in Gujarat State. Nearest Railway Station is Delwada at the distance of 9 kms from Diu. But important trains are linked with Veraval which is 90 kms from Diu. A portion of Diu District is on main land which is named as Ghoghla. A small part of Diu known as Simbor is situated in Gujarat at a distance of 25 kms from Diu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="sm-translate-y-10 lg:-translate-y-20 z-0 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" width="100%" version="1.1"><path d="M0 134L50 149.2C100 164.3 200 194.7 300 179.5C400 164.3 500 103.7 600 93C700 82.3 800 121.7 850 141.3L900 161L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#1D222D" strokeLinecap="round" strokeLinejoin="miter" /></svg>
        </div>
    );
}