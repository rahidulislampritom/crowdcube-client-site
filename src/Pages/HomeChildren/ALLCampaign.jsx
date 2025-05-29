import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card";

const ALLCampaign = () => {
    const allCardsData = useLoaderData();
    // console.log(allCardsData);
    return (
        <div>
            <h2 className="text-4xl font-medium pb-6">Total Number of Campaign : {allCardsData.length}</h2>

            <div className="md:grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                {
                    allCardsData.map((singleCardData, index) => <Card key={index} singleCardData={singleCardData}></Card>)
                }
            </div>
        </div>
    );
};

export default ALLCampaign;