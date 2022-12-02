import React, {useState} from "react";

const TuitStats = ({tuit}) => {
    const likeDisplays =
        {
            true:
                <>
                    <i className="bi bi-heart-fill me-2"></i>
                    <span>{tuit.likes + 1}</span>
                </>,
            false:
                <>
                    <i className="bi bi-heart me-2"></i>
                    <span>{tuit.likes}</span>
                </>
        }
        const [liked, setLiked] = useState(tuit.liked);
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-reply me-2"></i>
                {tuit.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat me-2"></i>
                <i className="fa fa-retweet"></i>
                {tuit.retuits}
            </div>
            <div className="col-3">
                <div onClick={(event => setLiked(!liked))}>
                    {liked ? likeDisplays.true : likeDisplays.false}
                </div>
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;