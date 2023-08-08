import { NextPage } from "next"
import { Navbar } from "@/components/Navbar";
import '../../app/globals.css'

const Sculpture: NextPage = () => {
    return (
        <>
            <main>
                <Navbar />
                <section className="hero">
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Click me to show/hide content
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}

export default Sculpture; 