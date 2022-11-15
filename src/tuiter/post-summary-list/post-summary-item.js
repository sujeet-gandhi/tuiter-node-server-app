import React from "react";
const PostSummaryItem= (
    {
        post = { }
    }

) => {
    console.log('post',post)
    return(
        <li className="list-group-item ">
            <div className="row ms-1">
                <div className="col">
                    <div className="row position-relative">
                        <div className="row text-secondary">
                            {`${post.topic}`}
                        </div>
                        <div className="col ps-0 text-opacity-75 fw-bolder">
                            {`${post.userName}`}
                            <i className="fa-solid fa-circle-check ps-1"></i> <span
                            className="col-8 text-secondary position-absolute ps-2">
                        - {`${post.time}`}
                    </span>
                        </div>
                    </div>
                    <div className="row fw-bolder text-opacity-75">
                        {`${post.title}`}
                    </div>
                </div>
                <div className="col-3">
                    <img className="float-end rounded-1" src={`${post.image}`} alt={'postImage'} width="80px" height="80px"/>
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;