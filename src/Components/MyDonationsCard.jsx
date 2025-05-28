import moment from "moment";

const MyDonationsCard = ({ singleData }) => {
    // console.log(singleData)
    const { campaignType, deadline, description, email, minimumDonation, name, photo, title } = singleData;

    return (

        <div className="max-w-7xl bg-base-300 mx auto  rounded-lg">
            <div className="hero rounded-lg">
                <div className="hero-content flex-col">

                    <img
                        src={photo}
                        className=" rounded-lg shadow-2xl lg:h-80 md:h-52"
                    />

                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="py-1"><span className='text-lg font-medium'>Campaign-Type:</span> {campaignType}</p>
                        <p className="py-1"><span className='text-lg font-medium'>Description:</span> {description}</p>
                        <p className="py-1"><span className='text-lg font-medium'>MinimumDonation:</span> {minimumDonation}</p>
                        <p className="py-1"><span className="text-lg font-medium">Deadline : </span> {moment(deadline).format('DD MMMM YYYY')}</p>
                        <div className="flex justify-end pt-4 text-accent">
                            <div>

                            </div>
                            <div>
                                <p>{name}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default MyDonationsCard;