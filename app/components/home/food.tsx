export default function Food() {
    return (
        <div className="py-20 xs:py-0">
            <div className="grid place-items-center mb-4">
                <p className=" py px-4 font-semibold text-lg my-4 text-center mx-auto text-rose-500 bg-white rounded-sm hover:text-white border-white border-2 hover:bg-transparent">Food</p>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-x-4  md:w-4/5 lg:w-3/5 mx-auto px-6 md:px-0">
                <div>
                    <img src="/images/food/crab.png" alt="crab food" className="w-80" />
                </div>
                <div>
                    <p className="text-white text-xl font-semibold text-center md:text-left">
                        The Crab Curry
                    </p>
                    <p className="text-white text-sm font-semibold text-center md:text-left">
                        Forget the shellers; Enrich your finger-licking experience on the spicy Crabs of Daman
                    </p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-x-4  md:w-4/5 lg:w-3/5 mx-auto px-6 md:px-0">
                <div className="order-2 md:order-1">
                    <p className="text-white text-xl font-semibold text-center md:text-left">
                        Mati Handi Mutton
                    </p>
                    <p className="text-white text-sm font-semibold text-center md:text-left">
                        Marinated with spices and simmered in an earthen pot
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img src="/images/food/mutton.png" alt="crab food" className="w-80" />
                </div>
            </div>
        </div>
    );
}