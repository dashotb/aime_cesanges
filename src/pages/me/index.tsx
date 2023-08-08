/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import '../../app/globals.css'
import Image from "next/image";

const Moi: NextPage = () => {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="hero-content flex-col md:flex-row">   

                    <div className=" bg-base-100 rounded-box rounded-lg rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center border-radius  bg-top p-4 undefined">
                        <label className="swap swap-flip text-9xl ">
                            <input type="checkbox" />
                            <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Fpaint-profile.JPG?alt=media&token=1dc4e1ab-fc49-4127-8398-c3ffac7fc117" width={180} height={220} alt="photo de profile" className="swap-on " />
                            <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Fprofile.JPG?alt=media&token=6abef32f-d732-4de1-8bbe-557c22693c4c" width={180} height={220} alt="photo de profile" className="swap-off " />
                        </label>
                    </div>

                    <div className="hero-content flex-col">
                        <h1>Presentation</h1>
                        <p>Je suis un artiste de 30ans autodidacte qui pratique l'art depuis plus de 1000 oeuvres <br /> Je m'affilie au courant de l'art contemporain en pratiquant toutes formes d'art: de la peinture, en passant par la sculpture, jusqu'au cinema... <br /> Je suis egalement l'auteur du recueil de poemes intitule "les fleurs du bien"<br />
                            <br/>À 17 ans j’ai eu des problèmes de santé et en voyant que l’art était un moyen de pouvoir aller mieux j’ai décidé d’en faire ma vocation...<br/>Je me suis investi et j’ai travailler l’art professionnellement durant 14 années.<br/>Depuis que mes amis ont décidés de produire au sein de "l’ordre collectif" je n’ai pas arrêté de produire<br/>
                            <br/>testostas
                        </p>
                       
                    </div>

                    <Link href="/">
                        <button className="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </Link>

                </div>
                

            </section>
        </>

    );
}

export default Moi;