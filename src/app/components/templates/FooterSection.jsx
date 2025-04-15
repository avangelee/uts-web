
export default function FooterSection() {
    const footerData = [
        {
            title: "Categories",
            links: ["User Interface", "User Experience", "Digital Media", "Lifesyle", "Programming", "Animation"],
        },
        {
            title: "Product",
            links: ["Pricing", "Overview", "Browse", "Accessibility", "Five", "Changelog"],
        },
        {
            title: "Solutions",
            links: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design", "Concept"],
        },
        {
            title: "Resources",
            links: ["Help Center", "Blog", "Tutorials", "FAQs", "Community", "Events"],
        },
        {
            title: "Support",
            links: ["Contact Us", "Developers", "Documentation", "Integrations", "Reports", "Webinar"],
        },
        {
            title: "Company",
            links: ["About", "Press", "Events", "Careers", "Customers", "Partners"],
        },
    ];

    return (
        <div className="mt-16 pt-8 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-left">
                    {footerData.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                <div className='flex justify-between items-center'>
                    <h1 className="text-l font-bold pr-2">
                        <span className="text-black-500">break</span>
                        <span className="text-fuchsia-600">io</span>
                    </h1>
                    <p className="text-xs text-gray-500"> © 2023 - All rights reserved.</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <img
                        src="ytb.png"
                        alt="public"
                        className="w-6"
                    />
                    <img
                        src="fcb.png"
                        alt="public"
                        className="w-5"
                    />
                    <img
                        src="twt.png"
                        alt="public"
                        className="w-5"
                    />
                    <img
                        src="igm.png"
                        alt="public"
                        className="w-5"
                    />
                    <img
                        src="lkd.png"
                        alt="public"
                        className="w-5"
                    />

                </div>
            </div>
        </div>
    )
}