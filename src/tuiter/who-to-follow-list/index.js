import React from "react";
// import whoArray from './who.json';
import '../../index.css'
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.whoReducer);
    return(
        <ul className="list-group">
            <div className="rounded">
                <li className="list-group-item fw-bolder fs-5">Who to follow</li>
            </div>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;