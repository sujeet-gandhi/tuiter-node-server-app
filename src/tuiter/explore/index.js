import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-10">
                    <div className="position-relative mt-1 ">
                        <input className="form-control rounded-pill ps-4" id="input1"
                               placeholder="Search Tuiter"/>
                            <i className="fa-solid fa-magnifying-glass position-absolute wd-search-icon"></i>
                    </div>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-4 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-tabs mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#foryou">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#trending">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#news">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#sports">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block" href="#entertainment">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="../../images/ai_day_3.webp" alt={'mainPostImage'} className="w-100"/>
                <h3 className="position-absolute wd-nudge-up text-white fw-bolder fs-4">
                    Tesla AI Day - Optimus Revealed&nbsp;<i className="fa-solid fa-robot"></i></h3>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;