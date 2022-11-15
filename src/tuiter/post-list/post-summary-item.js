import React from "react";
const PostSummaryItem= (
    {
        post = { }
    }

) => {
    console.log("tuit", post.tuit)
    return(
        <div className="row">
            <div className="col-1 ms-4">
                <img className="rounded-circle float-end" src={post.userImage} alt={'postUserImage'}  width="50px" height="50px"/>

            </div>
            <div className="col-10 ms-2">
                <div className="row ">
                    <div className="fw-bold float-start">
                        {post.username}
                        <i className="fa-solid fa-circle-check ps-1"></i>
                        <span className="text-secondary ps-1"> @{post.handle}</span>
                        <span className="text-secondary"> . {post.time}</span>
                        <span className="text-secondary float-end ">...</span>

                        <div className="fw-lighter">
                            {post.tuit}
                        </div>
                    </div>
                </div>
                

                <div className="row mt-3 text-secondary text-nowrap">
                    <div className="col-3 ">
                        <i className="fa-regular fa-comment"></i> <span className="ps-1">{post.comments}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa-solid fa-retweet"></i> <span className="ps-1">{post.retuits}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa-regular fa-heart"></i> <span className="ps-1">{post.likes}</span>
                    </div>
                    <div className="col-3 pe-0">
                        <i className="fa-solid fa-upload"></i>
                    </div>
                </div>
            </div>
                <hr className="mt-2"/>

        </div>

    );
};

export default PostSummaryItem;