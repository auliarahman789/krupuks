"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Navbar = ({ color }: { color: any }) => {
    const [scrollLocation, setScrollLocation] = useState(0);
    const [prevScrollLocation, setPrevScrollLocation] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollLocation = window.scrollY;
            setScrollLocation(currentScrollLocation);

            // Check if scrollLocation is decreasing
            if (currentScrollLocation < prevScrollLocation) {
                // Scroll location is decreasing
                setScrollDirection("up");
            } else if (currentScrollLocation > prevScrollLocation) {
                // Scroll location is increasing
                setScrollDirection("down");
            }

            // Update prevScrollLocation with currentScrollLocation
            setPrevScrollLocation(currentScrollLocation);
        };

        window.addEventListener("scroll", handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollLocation]);

    return (
        <div
            className={`absolute w-full  flex justify-between items-center py-[25px] duration-200 
    ${scrollLocation >= 100 ? "bg-[#000820]" : "bg-transparent"}
    ${scrollLocation >= 100 && scrollDirection == "down"
                    ? "-translate-y-[90px]"
                    : ""
                }
    `}
        >
            <div style={{ background: `${color}` }} className='flex w-full fixed top-0 h-[70px] bg-[#d5bfaa] shadow-md backdrop-blur-md z-50 justify-center items-center'>

                <div className='flex w-full flex-col-1 justify-between gap-4 px-4'>
                    <div className='flex gap-3 items-center'>
                        {/* <a href='/#'>
                            <Image
                                src={'/belitung.png'}
                                width={200}
                                height={200}
                                alt={'logo'}
                                className=' w-28 h-16 '
                            />
                        </a>
                        <a href='/#'>
                            <Image
                                src={'/wonder.png'}
                                width={200}
                                height={200}
                                alt={'logo'}
                                className=' w-[160px] h-16 '
                            />
                        </a> */}
                        <a href='/#'>
                            <Image
                                src={'/keluarga.png'}
                                width={200}
                                height={200}
                                alt={'logo'}
                                className=' w-[80px] h-12 '
                            />
                        </a>
                    </div>
                    <div className='flex gap-4 flex-row'>
                        <button className='  text-[#F0F3FF] font-semibold text-base ' >
                            Indonesia
                        </button>
                        <button className=' text-[#F0F3FF] font-semibold text-base ' >
                            English
                        </button>
                        <button className=' text-[#F0F3FF] font-semibold text-base ' >
                            Mandarin
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
