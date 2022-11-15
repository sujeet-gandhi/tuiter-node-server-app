import React from "react";
import TuitStat from "../tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks.js";

const TuitItem = (eachPost) => {
    console.log("each post", eachPost)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (

        <div>
            <div className="row border border-secondary border-opacity-60 ms-1 me-1">
                <div className="col-1 ms-4 mt-2">
                    <img className="rounded-circle float-end" src={eachPost.userImage} alt={'postUserImage'}  width="50px" height="50px"/>

                </div>
                <div className="col-10 ms-2 mt-2">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(eachPost._id)}></i>
                    <div className="row ">
                        <div className="fw-bold float-start">
                            {eachPost.username}
                            <i className="fa-solid fa-circle-check ps-1"></i>
                            <span className="text-secondary ps-1"> {eachPost.handle}</span>
                            <span className="text-secondary"> . {eachPost.time}</span>
                            <div className="fw-lighter">
                                {eachPost.tuit}
                            </div>
                        </div>
                    </div>
                    <TuitStat post={eachPost}/>
                </div>
            </div>


        </div>


    );
};

export default TuitItem;