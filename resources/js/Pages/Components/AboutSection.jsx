export default function AboutSection() {
    return (
        <section id="about" className="my-10">
            <h2 className="text-4xl font-bold text-white mb-10">About</h2>

            <div className="my-4">
                <div
                    href="#about"
                    className="flex flex-col items-center md:flex-row md:items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#2d2ddd] lg:pb-10 dark:bg-opacity-80 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                        <img src="/images/logo.png" className="h-10" />
                    </div>

                    <div className="pt-3 sm:pt-5">
                        <h2 className="text-xl font-semibold text-center md:text-left text-black dark:text-white">
                            ProBuilder Web Expert
                        </h2>

                        <p className="mt-4 text-sm/relaxed text-justify md:text-left">
                            ProBuilder Web Expert is system creator specializing
                            in designing and developing custom web solutions,
                            including responsive websites, complex applications,
                            and backend systems, tailored to meet the specific
                            needs of businesses and clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
