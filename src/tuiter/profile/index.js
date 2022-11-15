import React from "react";
import {useSelector} from "react-redux"
import "./index.css"
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const profileData = useSelector((state) => state.profileReducer);
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const dateBornSplit = profileData.dateOfBirth.split('-')
    const dateBorn = months[dateBornSplit[1]-1] + " " + dateBornSplit[2] + ", " + dateBornSplit[0]
    const dateJoinedSplit = profileData.dateJoined.split('-')
    const dateJoined = months[dateJoinedSplit[0]-1] + ", " + dateJoinedSplit[1]
    console.log(dateBorn, dateJoined)

    return(
        <div>
            <div className="row mt-1">
                <div className="col-1 mt-2">
                <i className="fa-solid fa-arrow-left fs-5 float-right"></i>
                </div>
                <div className="col-11">
                    <span className="float-left fs-5 row">{profileData.firstName}&nbsp;{profileData.lastName}</span>
                    <span className="float-left fs-6 row">{profileData.numTuits} Tuits</span>
                </div>
            </div>
            <div className="row">
                <img className="" src={profileData.bannerPicture} alt={'postUserImage'}  width="50px" height="300px"/><br/>
            </div>
            <div className="row position-relative ">
                <div className="col-3 position-absolute">
                    <img className="rounded-circle  position-absolute wd-profile-image" src={profileData.profilePicture} alt={'postUserImage'}  height="140px"/>
                </div>
                <Link to="/tuiter/edit-profile">
                    <div className="col-8 position-absolute ">
                        <button className="float-end position-relative wd-profile-btn rounded-pill bg-black border">Edit Profile</button>
                    </div>
                </Link>
            </div>
            <div className="wd-profile-info">
                <div className="row fw-bold fs-5 ms-1">
                    {profileData.firstName}&nbsp;{profileData.lastName}
                </div>
                <div className="fw-secondary fw-light row float-left fs-6 ms-1">
                    {profileData.handle}
                </div>
                <div className="row ms-1 me-3 mt-3">
                    {profileData.bio}
                </div>
                <div className="row mt-2 me-3">
                    <div className="col-4">
                        <i className="fa fa-map-marker" ></i><span className="ms-1">{profileData.location}</span>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-birthday-cake"> </i><span className="ms-1">Born {dateBorn}</span>
                    </div>
                    <div className="col-4">
                        <i className="fa-solid fa-calendar-days"></i><span className="ms-1">Joined {dateJoined}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4 col-3 col-xl-3 col-xxl-3">
                        <span className="fw-bold">{profileData.followingCount}</span> Following
                    </div>
                    <div className="col-sm-4 col-3 col-xl-3 col-xxl-3">
                        <span className="fw-bold">{profileData.followersCount}</span> Followers
                    </div>
                </div>

            </div>
        </div>
    );
};
export default ProfileComponent;