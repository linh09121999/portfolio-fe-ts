import type React from "react";
import { useGlobal } from "../context/GlobalContext";

const Home: React.FC = () => {
    const { home } = useGlobal()
    return (
        <>
            <section className="flex items-center justify-between mt-[60px]">
                <div className="grid gap-6 items-center w-[45%]">
                    <p className="text-white text-[24px]">{home.textHello}</p>
                    <p className="bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent text-[100px] font-bold">{home.title}</p>
                    <p className="text-white">{home.slogan}</p>
                </div>
                <img alt={`${home.altImg}`} src={`${home.img}`} className="w-[500px]" />
                <button className="flex group  relative inline-flex mb-[20px] gap-2 place-self-end text-[18px] text-green-200 items-center before:content-[''] before:absolute before:left-[-20px] before:w-[100px] before:h-[100px] before:border-[3px] before:border-green-200 before:rounded-full  before:border-r-0 before:border-b-0 before:rotate-[-45deg]">
                    {home.btnContact}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        className="w-4 h-4  stroke-green-200 stroke-2 fill-none transition-transform duration-300 group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </section>
        </>

    )
}

export default Home