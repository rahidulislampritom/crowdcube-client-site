import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateMyCampaign = () => {
    const allDetailsData = useLoaderData();

    const { campaignType,
        deadline,
        description,
        email,
        minimumDonation,
        name,
        photo,
        title,
        _id } = allDetailsData;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const minimumDonation = form.minimumDonation.value;
        // .......... = 
        const deadline = form.deadline.value;
        // ..........
        const email = form.email.value;
        const name = form.name.value;

        const newCampaignInfo = {
            photo,
            title,
            campaignType,
            description,
            minimumDonation,
            deadline: new Date(deadline).toISOString(),
            email,
            name
        };
        console.log(newCampaignInfo);
        fetch(`https://crowdcube-server-site-gamma.vercel.app/details/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaignInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Update Successful!',
                        icon: 'success',

                    });

                };

                if (data.modifiedCount == 0) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Update Unsuccessful',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });
                };
            });

        form.reset();
    }

    // datepicker state 
    const [startDate, setStartDate] = useState(deadline);

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full md:min-w-xl shrink-0 shadow-2xl p-3">
                        <h1 className="text-5xl font-bold text-center">Add New Campaign!</h1>
                        <div className="card-body">
                            <form onSubmit={handleUpdate}>
                                <fieldset className="fieldset">
                                    <label className="label">Photo</label>
                                    <input name="photo" type="text" className="input w-full" placeholder="PhotoURL" defaultValue={photo} />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">Title</label>
                                    <input name="title" type="text" className="input w-full" placeholder="card title" defaultValue={title} />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">Campaign-Type</label>
                                    <select className="input w-full" name="campaignType" defaultValue={campaignType}>
                                        <option value="Disaster Relief">Disaster Relief</option>
                                        <option value="Recurring">Environment</option>
                                        <option value="Emergency">Food Security</option>
                                        <option value="Global Health">Global Health</option>
                                        <option value="Education">Education</option>
                                        <option value="Animal Welfare">Animal Welfare</option>
                                        <option value="Mental Health">Mental Health</option>
                                        <option value="Renewable Energy">Renewable Energy</option>
                                    </select>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">Description</label>
                                    <textarea name="description" className="input w-full h-24   whitespace-pre-wrap break-words" placeholder="add description" defaultValue={description}></textarea>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">Minimum-Donation-Amount</label>
                                    <input name="minimumDonation" type="number" className="input w-full" placeholder="minimum donation amount" defaultValue={minimumDonation} />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">Deadline</label>
                                    <DatePicker name="deadline" className="input w-full" selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">User-Email</label>
                                    <input name="email" type="email" className="input w-full" placeholder="Email" defaultValue={email} />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">User-Name</label>
                                    <input name="name" type="text" className="input w-full" placeholder="Name" defaultValue={name} />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <button className="btn btn-primary">Update</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateMyCampaign;