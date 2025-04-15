import Head from "next/head"
import PrimaryButton from "../atoms/PrimaryButton"
import HeaderSection from "../templates/HeaderSection"
import HeroSection from "../templates/HeroSection"
import StoriesSection from "../templates/StoriesSection"
import TestimonialSection from "../templates/TestimonialSection"
import ToolsSection from "../templates/ToolsSection"
import FaqSection from "../templates/FaqSection"
import FooterSection from "../templates/FooterSection"
import Navbar from "../organisms/Navbar"
export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Breakio - Take a Break</title>
                <meta name="description" content="Build your meditation skills with Breakio" />
                <link
                    rel="stylesheet"
                    href=""
                />
            </Head>
           
            <Navbar></Navbar>
            <main className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
                <HeaderSection></HeaderSection>
                <HeroSection></HeroSection>
                <StoriesSection></StoriesSection>
                <TestimonialSection></TestimonialSection>
                <ToolsSection></ToolsSection>
                <FaqSection></FaqSection>
                <FooterSection></FooterSection>
            </main>

        </div>
    )
}