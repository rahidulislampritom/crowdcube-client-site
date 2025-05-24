import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ALLCampaign from "../Pages/HomeChildren/ALLCampaign";
import AddNewCampaign from "../Pages/HomeChildren/AddNewCampaign";
import MyCampaign from "../Pages/HomeChildren/MyCampaign";
import MyDonations from "../Pages/HomeChildren/MyDonations";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../Pages/HomeChildren/HomeLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import CardDetails from "../Components/CardDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            // this are using in the home page 

            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                loader: () => fetch('http://localhost:5500/cardsHome'),
            },

            // they are deferent pages 
            {
                path: 'allCampaign',
                element: <ALLCampaign></ALLCampaign>,
                loader: () => fetch('http://localhost:5500/cards')

            },
            {
                path: 'addNewCampaign',
                element:
                    <PrivateRoute>
                        <AddNewCampaign></AddNewCampaign>
                    </PrivateRoute>
            },
            {
                path: 'myCampaign',
                element:
                    <PrivateRoute>
                        <MyCampaign></MyCampaign>
                    </PrivateRoute>,
                loader: () => fetch('http://localhost:5500/details')

            },
            {
                path: 'myDonations',
                element:
                    <PrivateRoute>
                        <MyDonations></MyDonations>
                    </PrivateRoute>
            },
        ]

    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '/cardDetails/:id',
        element:
            <PrivateRoute>
                <CardDetails></CardDetails>
            </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5500/cards/${params.id}`)
    }
])
export default router;