import React,  {useEffect} from "react";

import TuitItem from "../tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks.js";


const TuitsList = () => {
    const {tuitsArray, loading} = useSelector((state) => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findTuitsThunk())
    }, [])
    console.log("array", tuitsArray)
    return (
        <>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuitsArray?.map(eachPost =>
                    <TuitItem {...eachPost} /> )
            }
        </>
    );
};

export default TuitsList;