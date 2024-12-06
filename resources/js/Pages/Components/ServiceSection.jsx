import { CgWebsite } from "react-icons/cg";
import { AiOutlineSolution } from "react-icons/ai";

export default function ServiceSection() {
    return (
        <section id="service" className="py-10">
            <h2 className="text-4xl font-bold text-white mb-10">
                # Our Service
            </h2>

            <div className="my-4">
                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-opacity-80 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                        <CgWebsite size={40} className="text-gray-200" />
                    </div>
                    <div className="pt-3 sm:pt-5">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                            Website Design & Development
                        </h2>

                        <p className="mt-4 text-sm/relaxed">
                            Transform your online presence with our exceptional
                            website design and development services. We craft
                            visually stunning, user-friendly, and responsive
                            websites tailored to your unique needs. Whether
                            you’re launching a new business, expanding your
                            online reach, or redefining your digital identity,
                            we bring your vision to life with precision and
                            creativity. Let us help you make a lasting
                            impression and drive results in today’s digital
                            landscape.
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-4">
                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-opacity-80 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                        <AiOutlineSolution
                            size={40}
                            className="text-gray-200"
                        />
                    </div>
                    <div className="pt-3 sm:pt-5">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                            Software Solutions for Startups and Organizations
                        </h2>
                        <p className="mt-4 text-sm/relaxed">
                            Empower your startup or organization with innovative
                            and scalable software solutions tailored to your
                            goals. We specialize in creating tools that
                            streamline operations, enhance efficiency, and drive
                            growth. Whether you're launching a new venture or
                            optimizing an established organization, our
                            solutions are designed to adapt to your evolving
                            needs and give you a competitive edge in today's
                            fast-paced digital world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
