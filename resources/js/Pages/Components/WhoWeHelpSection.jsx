import { IoRocketOutline } from "react-icons/io5";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdCorporateFare } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

export default function WhoWeHelpSection() {
    const data = [
        {
            label: "Startup Business",
            description:
                "Empowering visionary startups with cutting-edge software solutions and stunning websites designed to scale. We help bring your ideas to life and establish a strong digital foundation for growth.",
            icon: (
                <IoRocketOutline
                    size={33}
                    className="text-yellow-400 -rotate-45"
                />
            ),
        },
        {
            label: "Small Businesses",
            description:
                "Providing tailored solutions for small businesses to thrive online. From user-friendly websites to streamlined software tools, we’re here to simplify your operations and amplify your reach.",
            icon: <LuBriefcaseBusiness size={33} className="text-blue-400" />,
        },
        {
            label: "Corporations",
            description:
                "Delivering robust and scalable software and website solutions for corporations. Enhance efficiency, elevate your brand, and connect with customers like never before with our enterprise-level services.",
            icon: <MdCorporateFare size={33} className="text-red-400" />,
        },
        {
            label: "Students",
            description:
                "Supporting students with affordable and innovative tools to build, learn, and grow. Whether it’s a portfolio website or software for academic projects, we’ve got your back.",
            icon: <PiStudent size={33} className="text-gray-200 " />,
        },
    ];
    return (
        <section id="whowehelp" className="py-10">
            <h2 className="text-4xl font-bold text-white mb-10">
                # Who We Help?
            </h2>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {data.map((row, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-opacity-80 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                            {row.icon}
                        </div>
                        <div className="pt-3 sm:pt-5">
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                {row.label}
                            </h2>

                            <p className="mt-4 text-sm/relaxed">
                                {row.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
