import ToolsCard from "../molecules/ToolsCard";
export default function ToolsSection() {
    const tools = [
        {
            image: 'ic1.png',
            title: 'Sapien amet est',
            description: 'Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.',
        },
        {
            image: 'ic2.png',
            title: 'Tortor ornare',
            description: 'Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies.',
        },
        {
            image: 'ic3.png',
            title: 'Vel lacus',
            description: 'Porttitor quis lectus varius quis dolor morbi massa pellentesque.',
        },
        {
            image: 'ic4.png',
            title: 'Hendrerit blandit',
            description: 'A aliquam pharetra in nec vitae ultrices commodo placerat eget.',
        },
        {
            image: 'ic5.png',
            title: 'Enim risus turpis',
            description: 'Tristique dui vestibulum senectus ac duis etiam adipiscing sapien.',
        },
        {
            image: 'ic6.png',
            title: 'Aliquam lorem et',
            description: 'Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio est a mi a sed gravida.',
        },
        {
            image: 'ic7.png',
            title: 'Sed aliquam lectus',
            description: 'Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.',
        },
        {
            image: 'ic8.png',
            title: 'Cursus diam',
            description: 'Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.',
        },
        {
            image: 'ic9.png',
            title: 'Facilisi vel malesuada',
            description: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.',
        },
    ];
    return (
        <div className=' pt-20 pb-20'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pb-4">
                    Your favorite tools
                </h1>
                <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-4xl">
                    In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor.
                </p>
            </div>
            <div className="text-left">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {tools.map((feature, index) => (
                            <ToolsCard
                                key={index}
                                image={feature.image}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}