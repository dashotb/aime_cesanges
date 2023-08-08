import { NextPage } from "next"
import { Navbar } from "@/components/Navbar";
import '../../app/globals.css'

const Projects: NextPage = () => {
    return (
        <>
            <Navbar />
            <section className="hero">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Evenement</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Exposition</div>
                                            <div className="text-sm opacity-50">Saint-Gaudens</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Expo sur les fleurs
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Chapelle Saint-Jacques</span>
                                </td>
                                <td>N/A</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Vernissage</div>
                                            <div className="text-sm opacity-50">Albi</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Vente de sculptures
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Jean-Mich</span>
                                </td>
                                <td>11/24</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Marjy Ferencz</div>
                                            <div className="text-sm opacity-50">Russia</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Rowe-Schoen
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                </td>
                                <td>Crimson</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Yancy Tear</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td>Indigo</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                        {/* foot */}
                       
                    </table>
                </div>
            </section>
        </>

    );
}

export default Projects;