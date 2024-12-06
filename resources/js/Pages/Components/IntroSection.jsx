import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function IntroSection() {
    const [animate, setAnimate] = useState({
        visibleIntro0: false,
        visibleIntro1: false,
        visibleIntro2: false,
        visibleIntro3: false,
        visibleIntro4: false,
        visibleIntro5: false,
    });

    useEffect(() => {
        setTimeout(
            () =>
                setAnimate((prev) => ({
                    ...prev,
                    visibleIntro0: true,
                })),
            0
        );
        setTimeout(
            () =>
                setAnimate((prev) => ({
                    ...prev,
                    visibleIntro1: true,
                })),
            300
        );
        setTimeout(
            () =>
                setAnimate((prev) => ({
                    ...prev,
                    visibleIntro2: true,
                })),
            500
        );
        setTimeout(
            () =>
                setAnimate((prev) => ({
                    ...prev,
                    visibleIntro3: true,
                })),
            1000
        );
        setTimeout(
            () =>
                setAnimate((prev) => ({
                    ...prev,
                    visibleIntro4: true,
                })),
            1500
        );
        setTimeout(
            () =>
                setAnimate((prev) => ({
                    ...prev,
                    visibleIntro5: true,
                })),
            2000
        );
    }, []);

    return (
        <div className={`my-16 md:px-20 space-y-3 cursor-default`}>
            <h2
                className={`text-5xl md:text-7xl text-white font-extrabold hover:text-shadow-lg transition-opacity ${
                    animate.visibleIntro1 ? "opacity-100" : "opacity-0"
                } duration-[1500ms]`}
            >
                Transforming{" "}
            </h2>
            <p
                className={`text-4xl md:text-6xl mx-3 font-extrabold text-blue-500 transition-opacity ${
                    animate.visibleIntro2 ? "opacity-100" : "opacity-0"
                } duration-[1500ms]`}
            >
                Ideas
            </p>
            <p
                className={`text-3xl md:text-5xl mx-3.5  font-extrabold text-sky-600 transition-opacity ${
                    animate.visibleIntro3 ? "opacity-100" : "opacity-0"
                } duration-[1500ms]`}
            >
                Into
            </p>
            <h2
                className={`text-4xl md:text-6xl mx-3 text-gray-200 font-extrabold transition-opacity ${
                    animate.visibleIntro4 ? "opacity-100" : "opacity-0"
                } duration-[1500ms]`}
            >
                Digital Reality
            </h2>
            <p
                className={`text-sm md:text-base italic mx-3 transition left-6 ${
                    animate.visibleIntro5
                        ? "opacity-100 translate-x-20"
                        : "opacity-0 translate-x-0"
                } duration-[1500ms]`}
            >
                {"<-- Code your vision Online -->"}
            </p>
            <button
                type="button"
                onClick={() =>
                    router.visit("#whychooseus", {
                        preserveScroll: true,
                    })
                }
                className="py-3 px-10 border border-blue-600 bg-gray-900 text-sm md:text-base font-semibold text-blue-500 transition duration-300 rounded-md mt-10 mx-3 hover:shadow-md shadow-inherit hover:shadow-gray-500 hover:text-gray-100 active:bg-blue-700 hover:bg-blue-600"
            >
                LEARN MORE
            </button>
        </div>
    );
}
