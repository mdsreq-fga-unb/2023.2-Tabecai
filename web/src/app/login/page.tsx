"use client";
import Image from "next/image";
import Logo from "../../assets/logo.svg";

import { motion } from "framer-motion";

export default function Login() {
    const animate = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },

        hiddenInputs: {
            opacity: 0,
            x: `2em`,
        },

        visibleInputs: {
            opacity: 1,
            x: `0em`,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.65, 0.5, 1],
            },
        },

        visibleLogo: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 2,
                ease: [0.4, 0.8, 1, 1],
            },
        },

        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.65, 0.3, 1],
            },
        },
    };

    return (
        <div className="flex bg-slate-100 justify-center items-center h-screen">
            <div className="md:w-6/12 p-16 bg-white shadow-xl rounded-2xl w-11/12 ">
                <motion.div
                    className="flex flex-row items-center"
                    initial={animate.hidden}
                    whileInView={animate.visibleLogo}
                >
                    <p className="text-2xl text-[#422F8A] font-extrabold mr-2">
                        Tabeçai
                    </p>
                    <Image src={Logo} alt="Logo" width={22} height={22} />
                </motion.div>
                <motion.h1
                    className="text-4xl my-16 text-center font-bold"
                    initial={animate.hidden}
                    whileInView={animate.visible}
                >
                    Login
                </motion.h1>
                <form
                    className="flex flex-col justify-center items-center gap-6"
                    action="/login"
                    method="post"
                >
                    <motion.input
                        initial={animate.hiddenInputs}
                        whileInView={animate.visibleInputs}
                        type="text"
                        className="w-10/12 md:w-8/12 p-4 mb-4 border-transparent bg-[#EEEEEE] rounded-lg shadow-lg placeholder-gray-500 font-bold text-xl"
                        placeholder="Usuário"
                    ></motion.input>
                    <motion.input
                        initial={animate.hiddenInputs}
                        whileInView={animate.visibleInputs}
                        type="password"
                        className="w-10/12 md:w-8/12 p-4 border-transparent bg-[#EEEEEE] rounded-lg shadow-lg placeholder-gray-500 font-bold text-xl"
                        placeholder="Senha"
                    ></motion.input>
                    <motion.button
                        initial={animate.hidden}
                        whileInView={animate.visible}
                        className="w-1/2 h-12 mt-4 bg-[#7839CD] text-white rounded-lg font-bold shadow-xl hover:bg-[#8c62c5] transition-all"
                        type="submit"
                    >
                        Entrar
                    </motion.button>
                </form>
            </div>
        </div>
    );
}
