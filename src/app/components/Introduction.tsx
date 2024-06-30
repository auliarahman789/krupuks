
import React from "react";
import Image from "next/image";

const Introduction = () => {
    return (
        <section className="pt-16">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg1.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="w-full h-full absolute">
                <div className="w-full h-screen flex flex-col">
                    <div className=" h-[80%] inset-0 flex md:flex-row flex-col items-center w-full  md:py-0 py-[50%]">
                        <div className="px-[4%] text-white w-full flex flex-col items-start text-start  leading-[28px] md:mb-0 mb-5 gap-4">
                            <h1 className="light-text  text-[60px] font-bold md:leading-[65px] text-shadow-sm shadow-black">
                                KERUPUK
                            </h1>
                            <h1 className="light-text text-[37px] font-bold md:leading-[65px] text-shadow-sm shadow-black">
                                CAP KELUARGA
                            </h1>
                        </div>
                        <div className="text-white w-full flex flex-col md:items-end md:text-end items-start pt-[25%]">
                            <div className="flex flex-col w-[48%]  bg-[#dd9e62ae] shadow-sm px-3 py-2">
                                <h1 className="w-full md:w-8/12 text-[23px] text-start   font-semibold text-shadow-sm shadow-black">
                                    BELITUNG BEST CRACKER
                                </h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Introduction;