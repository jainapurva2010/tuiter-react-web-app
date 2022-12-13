import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        tuit = {
            "image": "spacex.png",
            "username": "SpaceX",
            "handle": "@spacex",
            "time": "2h"
        }

    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="Profile" width={50} className="rounded-circle" src={require(`../images/${tuit.image}`)}></img>
                </div>
                <div className="col-9">
                    <div>
                        <span className="fw-bold">{tuit.userName} </span>
                        <span className="fa-stack">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-check fa-stack-1x"></i>
                        </span>
                        {tuit.handle} ∙ {tuit.time}
                    </div>
                    <div>{tuit.tuit}</div>
                    <div>
                        {<TuitStats key={tuit._id} tuit={tuit}/>}
                    </div>
                </div>
                <div className="col-1">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
            </div>

        </li>
    );
};
export default TuitItem;
