import React, {useState} from "react";
import Nav from "../nav";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

export const navLinks = [
    {name: "Home", component: <HomeComponent/>},
    {name: "Explore", component: <ExploreComponent/>},
    {name: "Notifications", component: ""},
    {name: "Messages", component: ""},
    {name: "Bookmarks", component: ""},
    {name: "Lists", component: ""},
    {name: "Profiles", component: ""},
    {name: "More", component: ""},
]

function Tuiter() {
    const [active, setActive] = useState("Explore");
    const activeComponent = navLinks.find((link) => link.name === active)
    return (
        <Provider store={store}>
            <div>
                <Nav/>
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar active={active} setActive={setActive}/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                        style={{"position": "relative"}}>
                        {activeComponent.component}
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;