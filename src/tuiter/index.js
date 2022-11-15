import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import Whotofollow from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer"
import {Provider} from "react-redux";
import HomeComponent from "./home"
import ProfileComponent from "./profile"
import EditProfile from "./edit-profile"

const store = configureStore(
    {reducer: {whoReducer: whoReducer, tuitsData:tuitsReducer, profileReducer:profileReducer}});


function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-1">
                <div className="d-none d-sm-block col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path=""    element={<HomeComponent/>}/>
                        <Route path="profile"    element={<ProfileComponent/>}/>
                        <Route path="edit-profile"    element={<EditProfile/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                    <Whotofollow/>
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter