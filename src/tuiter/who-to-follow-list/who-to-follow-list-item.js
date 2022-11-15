import React from "react";
const WhoToFollowListItem = (
    {
        who = { }
    }
    
) => {
    return(
         <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <img className="rounded-circle " src={`${who.avatarIcon}`} height="90%" width="70%" alt={''}/>
                </div>
                <div className="col-6 ps-0 fw-bold position-relative text-nowrap align-content-start">
                    {`${who.userName}`}
                    <i className="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                    <div className="text-secondary fw-lighter"> @ {`${who.handle}`}</div>
                </div>
                <div className="col-3 position-relative">
                    <button className="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;