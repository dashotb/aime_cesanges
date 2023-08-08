import Link from "next/link"

export const Navbar:React.FC = () => {
    return <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/me">Me</Link ></li>
                    <li><Link href="/achievements">Achievements</Link ></li>
                    <li><Link href="/projects">Projects</Link ></li>
                    <li><Link href="/gallery">Gallery</Link ></li>
                    <li><Link href="/comu">Community</Link ></li>
                    <li><Link href="/merch">Merch</Link ></li>

                </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link className="btn btn-ghost normal-case text-xl" href="/">Aime Cesanges</Link>
        </div>
        <div className="navbar-end">
        </div>
    </div>
}