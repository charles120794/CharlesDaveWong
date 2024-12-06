import { Link } from "@inertiajs/react";
import { CiLocationOn } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export default function FooterSection() {
    const handleSubmit = () => {};
    return (
        <footer className="py-16 px-5 text-center text-sm bg-black bg-opacity-50 text-black dark:text-white/70">
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-1 items-start xl:grid-cols-3">
                    {/* Column 1: Company Info */}
                    <div className="space-y-5">
                        <Link className="" href="/">
                            <img src="/PB orig.png" className="h-24" />
                        </Link>
                        <div className="space-y-4 cursor-default">
                            <div className="flex items-start space-x-5">
                                <CiLocationOn size={30} strokeWidth={1} />
                                <p className="text-lg">
                                    Quezon City, Metro Manila
                                </p>
                            </div>
                            <div className="flex items-start space-x-5 ml-[0.2px]">
                                <CiHeadphones size={30} strokeWidth={1} />
                                <p className="text-lg">0999 (955) (4869)</p>
                            </div>
                            <div className="flex items-start space-x-5 ml-[0.2px]">
                                <MdOutlineEmail size={30} />
                                <p>probuilderwebexph@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: About Us */}
                    <div className="text-left">
                        <div className="my-5">
                            <h3 className="text-left text-white text-xl font-bold mb-4">
                                Quick Links
                            </h3>
                        </div>
                        <ul className="space-y-3 text-base font-medium">
                            <li className="mb-2">
                                <Link
                                    href="#profile"
                                    className=" hover:font-bold hover:text-white transition ease-in-out"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="#about"
                                    className=" hover:font-bold hover:text-white transition ease-in-out"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="#contact"
                                    className=" hover:font-bold hover:text-white transition ease-in-out"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    {/* <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="/life-insurance"
                                    className="hover:text-blue-400"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/health-insurance"
                                    className="hover:text-blue-400"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/accidental-coverage"
                                    className="hover:text-blue-400"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/investment-plans"
                                    className="hover:text-blue-400"
                                >
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    {/* Column 4: Connect with Us */}
                    <div className="text-left">
                        <h2 className=" text-xl text-white font-bold my-5">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-sm mb-2">
                            Stay updated with the latest offers and exclusive
                            deals. Join our community today!
                        </p>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="bg-transparent border-none text-gray-200 mb-2 px-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-700 rounded-md"
                            />
                            <div className="border-b w-full mb-2"></div>
                            <button className="w-full py-2 bg-black text-white border border-white px-4 rounded-lg hover:bg-gray-950 focus:ring focus:ring-red-300 transition ease-in-out">
                                Subscribe
                            </button>
                        </form>
                        <div className="hidden space-x-4">
                            <a
                                href="https://facebook.com"
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-blue-400 hover:text-blue-500"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-blue-600 hover:text-blue-700"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-pink-500 hover:text-pink-600"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-cyan-700 text-sm mt-8 border-t border-cyan-700 pt-4">
                <p>&copy; 2024 Probuilder Web Expert. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
