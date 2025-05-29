import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";


const HomeLayout = () => {
    const allCardData = useLoaderData();
    // console.log(allCardData)
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
          
            <div className="md:grid grid-cols-3">
                {
                    allCardData.map((singleCard, index) => <Card key={index} singleCardData={singleCard}></Card>)
                }
            </div>

        </div>
    );
};

export default HomeLayout;