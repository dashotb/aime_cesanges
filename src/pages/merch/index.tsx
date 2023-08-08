import { NextPage } from "next"
import { Navbar } from "@/components/Navbar";
import '../../app/globals.css'
import ComingSoon from "../../app/Coming-soon-diy.png"
import Image from "next/image";


const Merch: NextPage = () => {
    return (
        <>
            <Navbar />
            <Image className="mx-auto" src={ComingSoon} width={749} height={1052} alt="coming soon" />
            
        </>

    );
}

export default Merch;