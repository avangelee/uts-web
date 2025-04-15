import StoriesCard from "../molecules/StoriesCard";
export default function StoriesSection() {
    const stories = [
        {
            coverImage: "https://th.bing.com/th/id/OIP.H4HfT4BrO5Yz19buEDw1dwHaEK?rs=1&pid=ImgDetMain",
            avatar: "pic4.png",
            title: "Flower Decoration",
            author: "Melvina Spring",
        },
        {
            coverImage: "https://th.bing.com/th/id/OIP.H4HfT4BrO5Yz19buEDw1dwHaEK?rs=1&pid=ImgDetMain",
            avatar: "pic5.png",
            title: "Flower Decoration",
            author: "Melvina Spring",
        },
        {
            coverImage: "https://th.bing.com/th/id/OIP.H4HfT4BrO5Yz19buEDw1dwHaEK?rs=1&pid=ImgDetMain",
            avatar: "pic6.png",
            title: "Splash",
            author: "Rwanda Melfor",
        },
        {
            coverImage: "https://th.bing.com/th/id/OIP.H4HfT4BrO5Yz19buEDw1dwHaEK?rs=1&pid=ImgDetMain",
            avatar: "pic7.png",
            title: "Colorful Face",
            author: "Melvina Spring",
        },
    ];


    return (
        <div className='flex flex-col items-center justify-center text-center pt-20 pb-20'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pb-4">
                Stories from our users
            </h1>
            <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-4xl">
                Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
            </p>

            <div className='grid grid-cols-1 gap-3 lg:grid-cols-4 sm:grid-cols-2'>
                {stories.map((story, index) => (
                    <StoriesCard
                        key={index}
                        coverImage={story.coverImage}
                        avatar={story.avatar}
                        title={story.title}
                        author={story.author}
                    />
                ))}
            </div>
        </div>
    )
}