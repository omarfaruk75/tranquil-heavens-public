import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";




const Home = () => {
    const [hospitality, setHospitality] = useState([]);

    useEffect(() => {
        fetch('hospitality.json')
            .then(res => res.json())
            .then(data => setHospitality(data))
    }, [])

    return (
        <div>

            <div className="space-y-6">
                <h2 className="text-2xl italic font-semibold  text-slate-600 mt-6">
                    LUXURY CONDOMINIUMS
                </h2>
                <h1 className="text-5xl font-semibold text-slate-600">Fall in love with your home</h1>
                <p className="text-2xl">Our exclusive, distinguished residences feature striking architecture, inspired interiors and unparalleled, hotel-like services and amenities.</p>
                <Slider></Slider>
            </div>
            <div className="md:my-16">
                <h2 className="text-xl font font-semibold text-center my-12 text-slate-400">WHAT SETS US APART :{hospitality.length}</h2>
                <div className="grid  md:grid-cols-4 gap-2">
                    {
                        hospitality.map(h => <div key={h.id}>
                            <div className="card bg-base-100 shadow-lg">
                                <figure><img src={h.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{h.estate_title}</h2>
                                    <p>{h.description.slice(0, 100)}</p>
                                    <p><b className="mr-2">Price :</b>{h.price}</p>
                                    <p>
                                        <b>Facilities :</b>
                                        {h.facilities.map((facility, index) => (
                                            <span key={index}>
                                                {facility.trim()}
                                                {index !== h.facilities.length - 1 && ", "}
                                            </span>
                                        ))}
                                    </p>
                                    <p><b>Area : </b>{h.area}</p>
                                    <p><b>Location:</b>{h.location}</p>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Home;