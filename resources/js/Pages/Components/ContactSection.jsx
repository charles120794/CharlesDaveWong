import { router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import ErrorList from "./ErrorList";
import { CiPhone } from "react-icons/ci";

export default function ContactSection() {
    const { props } = usePage();
    const { session } = props;
    const [loading, setLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const {
        data: form,
        setData: setForm,
        reset,
    } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        router.post("/contact", form, {
            preserveScroll: true,
            onStart: () => {
                setErrorMessages({});
                setLoading(true);
            },
            onFinish: (e) => {
                reset();
                setLoading(false);
            },
            onError: (e) => setErrorMessages(e),
        });
    };

    return (
        <section id="contact">
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            <div className="grid  xl:grid-cols-2 gap-4 my-4">
                <div className="">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-opacity-80 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                            <CiPhone
                                size={30}
                                strokeWidth={1}
                                className="text-white"
                            />
                        </div>

                        <div className="pt-3 sm:pt-5">
                            <h2 className="text-xl font-semibold text-center md:text-left text-black dark:text-white">
                                Ready to get started?
                            </h2>

                            <p className="mt-4 text-sm/relaxed">
                                Contact us today and let’s create something
                                extraordinary together!
                            </p>
                        </div>
                    </div>
                    <h2 className="my-2 text-4xl"></h2>
                    <p className="pl-1 text-xl"></p>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-opacity-80 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                    <div className="pt-3 w-full sm:pt-2">
                        <h2 className="text-md font-semibold text-black dark:text-white">
                            Name
                        </h2>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-600 bg-black rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
                        />
                    </div>
                    <div className="pt-3 w-full sm:pt-2">
                        <h2 className="text-md font-semibold text-black dark:text-white">
                            Email
                        </h2>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-600 bg-black rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
                        />
                    </div>
                    <div className="pt-3 w-full sm:pt-2">
                        <h2 className="text-md font-semibold text-black dark:text-white">
                            What can we help you with?
                        </h2>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full h-28 mt-1 border border-gray-600 bg-black rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
                        />
                    </div>
                    {errorMessages && (
                        <div>
                            <ErrorList {...errorMessages} />
                        </div>
                    )}
                    {/* Display the flashed message */}
                    {session?.message && (
                        <div>
                            <div className="text-green-500">
                                {session.message}
                            </div>
                        </div>
                    )}
                    <button
                        disabled={loading}
                        type="button"
                        onClick={handleSubmit}
                        class="text-white py-2 px-10 border border-gray-500 bg-transparent transition duration-300 hover:border-blue-800 font-semibold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-sm text-center me-2 inline-flex items-center"
                    >
                        {loading && (
                            <svg
                                aria-hidden="true"
                                role="status"
                                class="inline w-4 h-4 me-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                        Submit
                    </button>
                    {/* <button
                        type="button"
                        onClick={handleSubmit}
                        className="py-2 px-10 border border-gray-600 font-semibold text-gray-200 transition duration-200 rounded-md hover:shadow-md shadow-inherit hover:shadow-gray-500 hover:border-transparent hover:text-gray-300 active:bg-blue-800 hover:bg-blue-700"
                    >
                        <svg
                            aria-hidden="true"
                            role="status"
                            class="inline w-4 h-4 me-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                            />
                        </svg>
                        Submit
                    </button> */}
                </div>
            </div>
        </section>
    );
}
