export default function HeaderSection() {
    return (
        <header className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6">
                It's time to take a break
            </h1>
            <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-2xl">
                Build your meditation skills with an app that gives you all you need!
            </p>

            <div className="flex items-center gap-4 pb-10 flex-wrap">
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="flex-1 px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent text-lg"
                />
                <button className="w-full md:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-3xl text-lg transition duration-300 whitespace-nowrap">
                    Start Now
                </button>
            </div>

            <div className="pt-5">
                <img
                    src="pic2.png"
                    alt="public"
                    className=""
                />
            </div>
        </header>
    )
}