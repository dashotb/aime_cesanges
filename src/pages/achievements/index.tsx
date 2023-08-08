import { NextPage } from "next"
import { Navbar } from "@/components/Navbar";
import '../../app/globals.css'
import one from "@/img/TBDD9788.jpg";
import two from "@/img/profile.jpg";
import three from "@/img/025home.jpg";


import Image from "next/image";

const Achievements:NextPage =  () =>  {
    return (
        <>
            <Navbar />
            
            <section className="hero">
                <div className="absolute mb-96 text-purple-700">
                    <h1> ACHIEVEMENTS </h1>
                </div>
                <div className="hero=content mockup-phone border-accent">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <section className="mx-auto">
                                <div className="carousel h-screen carousel-center carousel-vertical p-2 space-x-4 space-y-4 bg-accent">
                                    <div className="carousel-item ">
                                        <Image src={one} alt="Burger" className="rounded-box" />
                                    </div>
                                    <div className="carousel-item ">
                                        <Image src={two} alt="Burger" className="rounded-box" />
                                    </div>
                                    <div className="carousel-item ">
                                        <Image src={three} alt="Burger" className="rounded-box" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}

export default Achievements;