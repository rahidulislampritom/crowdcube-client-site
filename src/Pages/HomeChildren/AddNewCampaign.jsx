import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddNewCampaign = () => {
    const { user } = useContext(AuthContext)

    const userEmailFromCard = user.email;

    const handleAddCard = (e) => {
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
            deadline: new Date(deadline),
            email,
            name,
            userEmailFromCard
        };
        // console.log(newCampaignInfo);
        fetch('https://crowdcube-server-site-gamma.vercel.app/cards', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaignInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Registration Successful!',
                        icon: 'success',
                    })
                    // console.log(data)
                }
            })

        form.reset();
    }

    // datepicker state 
    const [startDate, setStartDate] = useState();
    // ..................

    // ..................
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full md:min-w-xl shrink-0 shadow-2xl p-3">
                    <h1 className="text-5xl font-bold text-center">Add New Campaign!</h1>
                    <div className="card-body">
                        <form onSubmit={handleAddCard}>
                            <fieldset className="fieldset">
                                <label className="label">Photo</label>
                                <input name="photo" type="text" className="input w-full" placeholder="PhotoURL" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Title</label>
                                <input name="title" type="text" className="input w-full" placeholder="card title" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Campaign-Type</label>
                                <select className="input w-full" name="campaignType" required>
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
                                <textarea name="description" className="input w-full" placeholder="add description" required></textarea>
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Minimum-Donation-Amount</label>
                                <input name="minimumDonation" type="number" className="input w-full" placeholder="minimum donation amount" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Deadline</label>
                                <DatePicker name="deadline" className="input w-full" selected={startDate} onChange={(date) => setStartDate(date)} required></DatePicker>
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">User-Email</label>
                                <input name="email" type="email" className="input w-full" placeholder="Email" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">User-Name</label>
                                <input name="name" type="text" className="input w-full" placeholder="Name" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <button className="btn btn-primary">Add</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddNewCampaign;