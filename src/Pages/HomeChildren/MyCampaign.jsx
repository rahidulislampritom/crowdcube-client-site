import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const cardDetailsUserNameEmailData = useLoaderData();
    const selectedCardData = cardDetailsUserNameEmailData.filter((card) => card.loggedInEmail == userEmail)


    return (
        <div className="py-16">
            <div className="overflow-x-auto p-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{ }</th>
                            <th>UserName</th>
                            <th>UserEmail</th>
                            <th>Title</th>
                            <th>CampaignType</th>
                            <th>DeadLine</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCardData.map((data, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{data.loggedInUserName}</td>
                                    <td>{data.loggedInEmail}</td>
                                    <td>{data.title}</td>
                                    <td>{data.campaignType}</td>
                                    <td>{moment(data.deadline).format('DD MMMM YYYY')}</td>
                                    <section>
                                        <button className="btn">Delete</button>
                                        <button className="btn btn-active">Edit</button>
                                        <button className="btn">Update</button>
                                    </section>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;