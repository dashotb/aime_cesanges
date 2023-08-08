import { NextPage } from "next"
import { Navbar } from "@/components/Navbar";
import Link from "next/link"
import Image from "next/image";
import '../../app/globals.css'

const Gallerie: NextPage = () => {
    return (
        <>
            <main>
                <Navbar />
                <section className="hero">
                    <div className="hero-content flex-col md:flex-row ">
                        <div className="collapse w-full bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl text-lwft font-medium">
                                Tableaux
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Ftableaux.png?alt=media&token=f059b1a8-72dd-4279-a48a-206a49ac92b1" width={400} height={400} alt=""/>
                        </div>
                        <div className="collapse w-full bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Sculptures
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Fsculptures.png?alt=media&token=53d529e6-b731-414f-bba6-d9021eca83a1" width={400} height={400} alt="" />
                        </div>
                        <div className="collapse w-full bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                NFT
                            </div>
                            <div className="collapse-content">
                                <p>Voir la Collection</p>
                                <Link href="https://opensea.io/_chat_nwar_" className="text-blue-800">OpenSea</Link>
                            </div>
                            <Image src="https://firebasestorage.googleapis.com/v0/b/projet-aime.appspot.com/o/web-app%2Fhome%2Ftableaux.png?alt=media&token=f059b1a8-72dd-4279-a48a-206a49ac92b1" width={400} height={400} alt="" />
                        </div>
                    </div>
                    
                </section>            
            </main>
        </>

    );
}

export default Gallerie; 