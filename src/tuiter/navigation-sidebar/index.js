import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const location = useLocation();
    const {pathname, search} = location;
    console.log(pathname, search);
    const parts = pathname.split('/')
    console.log(parts[2]);
    return(
        <div className="list-group">
            <Link to="/tuiter/home" href="#" className={`
        ${parts[2] === 'home'  || parts.length <3 ? 'active': ''} list-group-item`}>
                <i className="fa-solid fa-house "></i>
                <span className = "d-none d-xl-inline-block focus" >&nbsp;Home</span>
            </Link>
            <Link to="/tuiter/explore"  href="#"
                  className={`
              ${parts[2] === 'explore' ? 'active':''}
              list-group-item
              `}>
                <i className="fa-solid fa-hashtag "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Explore</span>
            </Link>
            <Link to="/tuiter/notification" href="#"
                  className={`
              ${parts[2] === 'notification' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-bell "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Notification</span>
            </Link>
            <Link to="/tuiter/messages" href="#"
                  className={`
              ${parts[2] === 'messages' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-envelope "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks" href="#"
                  className={`
              ${parts[2] === 'bookmarks' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-bookmark "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists" href="#"
                  className={`
              ${parts[2] === 'lists' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-list "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Lists</span>
            </Link>
            <Link to="/tuiter/profile" href="#"
                  className={`
              ${parts[2] === 'profile' || parts[2] === 'edit-profile' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-user "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Profile</span>
            </Link>

            <Link to="/tuiter/more" href="#"
                  className={`
              ${parts[2] === 'more' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-ellipsis "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;More</span>
            </Link>
            <Link to="/" href="#"
                  className={`
              
            list-group-item`}>
                <i className="fa-solid fa-flask "></i>
                <span className="d-none d-xl-inline-block focus">&nbsp;Labs</span>
            </Link>

            <button className="mt-1 btn btn-primary rounded-pill w-100"> Tuit</button>
        </div>
    )
}
export default NavigationSidebar;