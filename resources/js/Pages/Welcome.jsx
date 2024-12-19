import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import IntroSection from "./Components/IntroSection";
import HeaderSection from "./Components/HeaderSection";
import FooterSection from "./Components/FooterSection";
import "./Components/style.css";
import ServiceSection from "./Components/ServiceSection";
import AboutSection from "./Components/AboutSection";
import WhyUsSection from "./Components/WhyUsSection";
import ContactSection from "./Components/ContactSection";
import WhoWeHelpSection from "./Components/WhoWeHelpSection";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [page, setPage] = useState(true);

    useEffect(() => {
        // setTimeout(() => setPage(true), 0);
        const hash = window.location.hash;

        if (hash) {
            setTimeout(() => scrollToSection(hash.replace("#", "")), 100);
            return;
        }
    }, []);

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        console.log(element);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start", // Align to the start of the section
            });
        }
    };

    return (
        <>
            <Head title="ProBuilder Web Expert" />
            <div
                id="home"
                className={`bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 transition-opacity ${
                    page ? "opacity-100" : "opacity-0"
                } duration-300 bg-fixed bg-cover bg-opacity-70 bg-[url('/images/wp9015864.jpg')]`}
            >
                {/* <img
                    id="background"
                    className="bg-fixed"
                    src="/images/wp9015864.jpg"
                    // src="https://laravel.com/assets/img/welcome/background.svg"
                /> */}
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <HeaderSection />

                        <IntroSection />

                        <section className="py-10 mb-4 text-center text-sm md:text-xl text-gray-100 bg-black bg-opacity-40">
                            <div className="py-3 border-t border-cyan-600">
                                <h2>
                                    Unleash Your Business Potential with
                                    ProBuilder Web Expert!
                                </h2>
                            </div>
                        </section>

                        <AboutSection />

                        <ServiceSection />

                        <WhyUsSection />

                        <WhoWeHelpSection />

                        <ContactSection />

                        <FooterSection />
                    </div>
                </div>
            </div>
        </>
    );
}
