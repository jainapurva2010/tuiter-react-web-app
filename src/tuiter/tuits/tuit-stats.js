import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row">
            <div className="col-2">
                <i className="bi bi-reply me-2"></i>
                {tuit.replies}
            </div>
            <div className="col-2 me-2">
                <i className="bi bi-arrow-repeat me-2"></i>
                <i className="fa fa-retweet"></i>
                {tuit.retuits}
            </div>
            <div className="col-3">
                <i
                    onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
                    className="bi bi-heart me-2">
                </i>
                {tuit.likes}
            </div>
            <div className="col-3">
                <i
                    onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))}
                    className="bi bi-hand-thumbs-down me-2">
                </i>
                {tuit.dislikes}
            </div>
            <div className="col-1">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;