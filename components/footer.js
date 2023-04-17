import Link from "next/link"

export default function Footer() {

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Contact", path: "/contact" },
        { title: "Offer", path: "/offer" },
    ]

    return (
        <footer className="pt-10 bg-indigo-600">
            <div className="max-w-screen-xl mx-auto px-4 text-purple-400 md:px-8">
                <div className="">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link className="flex gap-2 text-white text-xl" href="/">
                                <img src="/icons/nextjs.svg" className="" />
                                MarkupVault
                            </Link>
                        </div>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                navigation?.map((item, idx) => (
                                    <li key={idx} className="text-white hover:text-purple-400 duration-150">
                                        <Link href={item?.path}>
                                            {item?.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-10 py-6 text-sm border-t md:text-center text-white">
                    <p>&copy; 2023 MarkupVault All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}