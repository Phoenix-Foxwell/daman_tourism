export default function Gallery(): JSX.Element {

    const gallery = [
        "/images/gallery/1.png",
        "/images/gallery/2.png",
        "/images/gallery/3.png",
        "/images/gallery/4.png",
        "/images/gallery/5.png",
        "/images/gallery/6.png",
        "/images/gallery/7.png",
        "/images/gallery/8.png",
        "/images/gallery/9.png",
        "/images/gallery/10.png",
        "/images/gallery/11.png",
        "/images/gallery/12.png",
        "/images/gallery/13.png",
        "/images/gallery/14.png",
        "/images/gallery/15.png",
        "/images/gallery/1.png",
    ];
    return (
        <section className="w-full grid place-items-center">
            <div>
                <div className="grid place-items-center mb-4">
                    <p className=" py px-4 font-semibold text-lg my-4 text-center mx-auto text-rose-500 bg-white rounded-sm hover:text-white border-white border-2 hover:bg-transparent">Gallery</p>
                </div>
                <div className="grid gap-4 grid-cols-1 2xs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 p-4 place-items-center items-center justify-center align-middle content-center ">
                    {gallery.map((val: string, index: number) => (
                        <GalleryImages image={val} key={index}></GalleryImages>
                    ))
                    }
                    {/* <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(79).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(80).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(81).webp"></GalleryImages>
                    <GalleryImages image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(82).webp"></GalleryImages> */}
                </div>
            </div>
        </section>
    );
};


interface GalleryImagesProps {
    image: string;
}
const GalleryImages: React.FC<GalleryImagesProps> = (props: GalleryImagesProps): JSX.Element => {
    return (
        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
            <img
                src={props.image}
                alt="An image"
                className="rounded-md object-cover ease-in-out duration-500 group-hover:-rotate-6 group-hover:scale-125"
            />
            <div className="absolute  w-full h-full group-hover:opacity-80" />
        </div>
    );
}