import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {updateProfile} from "../profile/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
const EditProfile = () => {


    const profileInfo = useSelector((state) => state.profileReducer);
    const [currentState, setCurrentState] = useState(profileInfo);
    const origData = {...profileInfo}
    const dispatch = useDispatch();


    const cancelHandler = () => {
        dispatch(updateProfile(origData));
    }

    const saveHandler = () =>
    {
        dispatch(updateProfile(currentState));
    }
    const editHandler = (event) => {
        const indexInfo = event.target.name;
        const newVal = event.target.value;
        const newInfo = {
            ...currentState,
            [indexInfo]:newVal
        }
        setCurrentState(newInfo);
        console.log(currentState)
    }

    return(
        <div>
            <div className="row mt-2">
                <div className="col-1">
                <Link to="/tuiter/profile">
                      <i className="bi bi-x-lg float-end text-dark mt-2"
                         onClick={cancelHandler}></i>
                </Link>
                </div>
                <div className="col-4">
                    <span className="fs-4">Edit Profile</span>
                </div>
                <div className="col-6">
                    <Link to="/tuiter/profile">
                    <button className="btn rounded-pill float-end border"
                            onClick={saveHandler}>
                            Save</button>
                    </Link>
                </div>
                <div className="row mt-2">
                    <img className="" src={profileInfo.bannerPicture} alt={'postUserImage'}  width="50px" height="300px"/><br/>
                </div>
                <div className="row position-relative ">
                    <div className="col-3 position-absolute">
                        <img className="rounded-circle  position-absolute wd-profile-image" src={profileInfo.profilePicture} alt={'postUserImage'}  height="140px"/>
                    </div>
                </div>
            </div>
            <div className="row mt-5 me-2">
                <div className="row mt-5">
                    <label form="firstName">First Name</label>
                    <input type="text" className="form-control ms-2" id="firstName" name="firstName" value={currentState.firstName}
                    onChange={editHandler}/>
                </div>
                <div className="row mt-1">
                    <label form="lastName">Last Name</label>
                    <input type="text" className="form-control ms-2" id="lastName" name="lastName" value={currentState.lastName}
                           onChange={editHandler}/>
                </div>
                <div className="row mt-1">
                    <label form="bio">Bio</label>
                    <textarea className="form-control ms-2 h-auto" id="bio" name="bio" value={currentState.bio}
                           onChange={editHandler}/>
                </div>
                <div className="row mt-1">
                    <label form="location">Location</label>
                    <input type="text" className="form-control ms-2" id="location" name="location" value={currentState.location}
                           onChange={editHandler}/>
                </div>
                <div className="row mt-1">
                    <label htmlFor="dateOfBirth">Date Of Birth (DD/MM/YYY) </label>
                    <input type="date" className="form-control ms-2" id="dateOfBirth" name="dateOfBirth"  placeholder="www.google.com"
                           value={currentState.dateOfBirth} onChange={editHandler}/>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;



