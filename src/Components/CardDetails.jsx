import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import moment from "moment";

const CardDetails = () => {


    const { user } = useContext(AuthContext);
    const loggedInEmail = user?.email;
    const loggedInUserName = user?.displayName;

    const cardDetailsData = useLoaderData();
    // console.log(cardDetailsData);
    const { campaignType, deadline, description, email, minimumDonation, name, photo, title, _id } = cardDetailsData;

    // changing date formation using moment
    const isoDate = cardDetailsData.deadline;
    const formattedDate = moment(isoDate).format("DD MMMM YYYY")

    const allDataCardDetails = {
        loggedInEmail,
        loggedInUserName,
        campaignType,
        deadline,
        description,
        email,
        minimumDonation,
        name,
        photo,
        title,
    }
    // console.log(allDataCardDetails);



    const handleCardDetailsUserNameEmailData = () => {
        fetch('http://localhost:5500/details', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDataCardDetails)
        })
            .then((result) => {
                console.log(result.user);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto bg-base-200 py-16">
                <div className="">
                    <div className=" flex-col ">

                        <img
                            src={photo}
                            className=" rounded-lg rounded-b-none shadow-2xl  lg:w-4xl lg:h-[600px] mx-auto bg-gray-300 p-4 border border-b-0 border-gray-400 "
                        />

                        <div className="max-w-4xl mx-auto bg-gray-300 p-4 shadow-2xl border border-gray-400">
                            <h1 className="text-2xl font-bold text-start">{title}</h1>
                            <p className="py-1"><span className='text-lg font-medium'>Campaign-Type:</span> {campaignType}</p>
                            <p className="py-1"><span className='text-lg font-medium'>Description:</span> {description}</p>
                            <p className="py-1"><span className='text-lg font-medium'>Minimum-Donation-Amount:</span> {minimumDonation}tk</p>
                            <p className="py-1"><span className='text-lg font-medium'>Deadline:</span> {formattedDate}</p>
                            <p className="py-1"><span className='text-lg font-medium'>Email:</span> {email}</p>
                            <p className="py-1"><span className='text-lg font-medium'>Name:</span> {name}</p>
                            <Link><button onClick={handleCardDetailsUserNameEmailData} className="btn w-full btn-active">Donate</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;