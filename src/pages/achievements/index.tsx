import { NextPage } from "next"
import { Navbar } from "@/components/Navbar";
import '../../app/globals.css'



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
                                        <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Fprofile.JPG?alt=media&token=6abef32f-d732-4de1-8bbe-557c22693c4c" alt="Burger" className="rounded-box" />
                                    </div>
                                    <div className="carousel-item ">
                                        <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fachievements%2FAODU4990.JPG?alt=media&token=dfe4d018-e2d3-458e-9eb8-c6ce8bdc6611" alt="Burger" className="rounded-box" />
                                    </div>
                                    <div className="carousel-item ">
                                        <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fachievements%2FEIKZ4309.JPG?alt=media&token=f4aa4680-e34d-4c1c-bbcc-82591014b978" alt="Burger" className="rounded-box" />
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