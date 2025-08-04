export default function PostGrid() {

    const posts = [
        {
            title: "Sunrise Track: Follow the sun",
            location: "Dong",
            date: "Aug 20, 2025",
            image: "https://ekaxp.in/wp-content/uploads/2023/03/Dong-Valley-Trek-15_Arunachal-Tour_Eka-Experiences.jpg",
            cols: "col-span-2 row-span-2"
        },
        {
            title: "Village Beautification",
            location: "Kaho",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
        },
        {
            title: "Under Xposed: Photo Safari tour",
            location: "Dong",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/33252851/pexels-photo-33252851.jpeg",
        },
        {
            title: "Meet the Meyors: The Lost Tribe",
            location: "Walong and Kibithoo",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1050824/pexels-photo-1050824.jpeg",
        },
        {
            title: "Lest We Forget: A Day with Indian Army",
            location: "Kibithoo, Namti Plains",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
        },
        {
            title: "Catch And Release Angling: Hunt for Golden Mahseer",
            location: "Dong River",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
        }
    ];



    return (
        <section className="bg-white py-40 px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
                    Fun Activities to do
                </h2>
                <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive travel solutions designed to make your journey seamless and unforgettable
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map((post, idx) => (
                    <div key={idx} className={`relative overflow-hidden rounded-md ${post.cols || ''}`}>
                        <img
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white">
                            <h3 className="font-bold text-lg md:text-xl leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-sm opacity-90 mt-1">
                                {post.location} | {post.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <a href="#" className="text-sky-600 font-semibold text-sm hover:underline">
                    VIEW ALL
                </a>
            </div>
        </section>
    );
}
