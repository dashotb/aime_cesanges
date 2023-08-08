/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


export default function Home() {

  return (
    <>
      <Navbar />
      <main>

        <section className="hero">
          <div className="hero-content flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold ">Bienvenue !</h1>
              <h2 className="text-2xl ">Mon nom est Aime Cesanges, <br/>Je suis <a className="text-error">artiste</a> <a className="text-info">peintre</a> <a className="text-orange-900">sculpteur</a> <a className="text-success">contemporain</a> <a className="text-yellow-300">libre</a>. <br/>testostas</h2>
            </div>
            <Image className="w-full md:w-1/2 " src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2FEIKZ4309.JPG?alt=media&token=cb45d521-ea63-4883-9c58-40b505aa3e17" width={600} height={800} alt="home"/>

          </div>
        </section>


        <section>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>"Aime aime avant tout transmettre des emotions a travers son art, une quelconque oeuvre venant de lui a bien plus de valeur qu'un simple objet, cela va sans dire..."</p>
              </blockquote>
              <figcaption className="mt-10">
                <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2FChatNwarCarre.png?alt=media&token=cd1c1d46-71dc-4dbb-bf4c-e1e9e4efa6b1" width={600} height={600} alt="" className="mx-auto h-10 w-10 rounded-full" />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Chat Nwar</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="text-gray-600">Agent Artistique</div>
                </div><br/>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="text-center bg-accent">
          <h1 className="text-accent">|\/|</h1>
          <Link href="/achievements" className="btn text-sm pb-1 bg-base-100 text-accent ">Jetez un œil à mon travail... 👀</Link>
          
        </section>

        <section className="hero">
          <div className="carousel w-full carousel-center  p-4 space-x-40 bg-accent">
            <Link href="/gallery" className="carousel-item ">
              <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Ftableaux.png?alt=media&token=f059b1a8-72dd-4279-a48a-206a49ac92b1" width={400} height={400} alt="Burger" className="rounded-box" />
            </Link>
            <Link href="/gallery" className="carousel-item ">
              <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Fsculptures.png?alt=media&token=53d529e6-b731-414f-bba6-d9021eca83a1" width={400} height={400} alt="Burger" className="rounded-box" />
            </Link>
            <Link href="/merch" className="carousel-item ">
              <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Fmerch.png?alt=media&token=a1b7c137-5420-4cbe-922b-cd5f47d74b41" width={400} height={400} alt="Burger" className="rounded-box" />
            </Link>
            <Link href="https://opensea.io/_chat_nwar_" className="carousel-item ">
              <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/artboard%2FA3%2Fburning%20RR.jpg?alt=media&token=2f9f2700-524d-4a3b-8b46-97f8a6fb5031" width={400} height={400} alt="Burger" className="rounded-box" />
            </Link>
          </div>
        </section>

        
      </main>
    </>
  )
}

