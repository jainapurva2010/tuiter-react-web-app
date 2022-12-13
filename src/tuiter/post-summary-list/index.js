import React from "react";
import tuits from "../tuits/tuits.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                tuits.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;