import moment from "moment";
import { Link } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Card = ({ singleCardData }) => {

    // changing date formation using moment
    const isoDate = singleCardData.deadline;
    const formattedDate = moment(isoDate).format("DD MMMM YYYY")


    const { campaignType, description, photo, title, _id } = singleCardData;
    return (
        <div className="max-w-7xl bg-base-300 mx auto  rounded-lg">
            <div className="hero rounded-lg">
                <div className="hero-content flex-col">


                    <a data-tooltip-id="my-tooltip" data-tooltip-content={title} data-tooltip-place="start">
                        <Tooltip id="my-tooltip" />
                        <img
                            src={photo}
                            alt={title} // Good for accessibility
                            className="rounded-lg shadow-2xl lg:h-80 md:h-52"
                        />

                    </a>
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="py-1"><span className='text-lg font-medium'>Campaign-Type:</span> {campaignType}</p>
                        <p className="py-1"><span className='text-lg font-medium'>Description:</span> {description}</p>
                        <p className="py-1"><span className='text-lg font-medium'>Deadline:</span> {formattedDate}</p>
                        <Link to={`/cardDetails/${_id}`} className="btn btn-primary">See more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;