import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";
import Swal from 'sweetalert2'


const MyCampaign = () => {

    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const cardDetailsUserNameEmailData = useLoaderData();
    // console.log(cardDetailsUserNameEmailData);
    const selectedCardData = cardDetailsUserNameEmailData.filter((card) => card.loggedInEmail == userEmail)


    const [campaignTableData, setCampaignTableData] = useState(selectedCardData)

    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crowdcube-server-site-gamma.vercel.app/details/${_id}`, {
                    method: 'DELETE'
                })
                    .then(() => {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = campaignTableData.filter(singleData => singleData._id !== _id)

                        setCampaignTableData(remaining)
                    })
                    .catch(() => {
                        Swal.fire("Error", "Failed to delete", "error");
                    })
            }
        });

    };

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
                            campaignTableData.map((data, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{data.loggedInUserName}</td>
                                    <td>{data.loggedInEmail}</td>
                                    <td>{data.title}</td>
                                    <td>{data.campaignType}</td>
                                    <td>{moment(data.deadline).format('DD MMMM YYYY')}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(data._id)} className="btn">Delete</button>
                                        <Link to={`/update/${data._id}`}><button className="btn btn-active">Update</button></Link>
                                    </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;