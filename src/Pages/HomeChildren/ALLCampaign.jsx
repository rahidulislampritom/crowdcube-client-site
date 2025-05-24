import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card";

const ALLCampaign = () => {
    const allCardsData = useLoaderData();
    // console.log(allCardsData);
    return (
        <div>
            <h2>Number of campaign Card : {allCardsData.length}</h2>

            <div className="md:grid grid-cols-3">
                {
                    allCardsData.map((singleCardData, index) => <Card key={index} singleCardData={singleCardData}></Card>)
                }
            </div>
        </div>
    );
};

export default ALLCampaign;