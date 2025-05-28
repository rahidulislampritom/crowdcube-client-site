import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyDonationsCard from "../../Components/MyDonationsCard";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const allData = useLoaderData();
    const myDonationsData = allData.filter(data => data.userEmailFromCard === userEmail)
    return (
        <div className="md:mt-16 md:pb-16">
            <h2 className="pb-6 text-4xl font-medium">Total added card by this user: {myDonationsData.length} </h2>
            <div className="md:grid grid-cols-3 gap-4">
                {
                    myDonationsData.map(singleData => <MyDonationsCard key={singleData._id} singleData={singleData}></MyDonationsCard>)
                }
            </div>
        </div>
    );
};

export default MyDonations;