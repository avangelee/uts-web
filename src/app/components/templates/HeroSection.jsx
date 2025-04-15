export default function HeroSection () {
    return (
        <div className='pt-20'>

        <div className='flex flex-col items-center justify-center text-center '>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pb-4">
                Get better everyday
            </h1>
            <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-4xl">
                Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
        </div>

        <button className='w-full md:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-3xl text-lg transition duration-300 whitespace-nowrap'>Start Now</button>

        <div className="pt-5">
            <img
                src="pic1.png"
                alt="public"
                className=""
            />

        </div>

    </div>
    )
}