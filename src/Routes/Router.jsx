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
import UpdateMyCampaign from "../Components/UpdateMyCampaign";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            // this are using in the home page 

            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                loader: () => fetch('https://crowdcube-server-site-gamma.vercel.app/cardsHome'),
            },

            // they are deferent pages 
            {
                path: 'allCampaign',
                element: <ALLCampaign></ALLCampaign>,
                loader: () => fetch('https://crowdcube-server-site-gamma.vercel.app/cards')

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
                loader: () => fetch('https://crowdcube-server-site-gamma.vercel.app/details')

            },
            {
                path: 'myDonations',
                element:
                    <PrivateRoute>
                        <MyDonations></MyDonations>
                    </PrivateRoute>,
                loader: () => fetch('https://crowdcube-server-site-gamma.vercel.app/cards')
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
        loader: ({ params }) => fetch(`https://crowdcube-server-site-gamma.vercel.app/cards/${params.id}`)
    },
    {
        path: '/update/:id',
        element: <UpdateMyCampaign></UpdateMyCampaign>,
        loader: ({ params }) => fetch(`https://crowdcube-server-site-gamma.vercel.app/details/${params.id}`)

    }

])
export default router;