import PostSummaryList from "../PostSummaryList/index.js"

const exploreComponent = () => {
    return (`
        <div class="d-flex align-items-center">
            <div class="input-group position-relative d-flex align-items-center">
                <i class="fa fa-search position-absolute ms-3" style="z-index: 2"></i>
                <input type="search" placeholder="Search Twitter" class="rounded-pill form-control ps-5" style="width:95%">
            </div>
            <i class="fa fa-cog fa-2x align-items-center ms-auto ps-3 text-primary"></i>

        </div>
        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a href="for-you.html" class="nav-link active">For you</a>
            </li>
            <li class="nav-item">
                <a href="trending.html" class="nav-link">Trending</a>
            </li>
            <li class="nav-item">
                <a href="news.html" class="nav-link">News</a>
            </li>
            <li class="nav-item">
                <a href="sports.html" class="nav-link">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a href="entertainment.html" class="nav-link">Entertainment</a>
            </li>
        </ul>
        <div class="card">
            <img src="./ExploreScreen/spacex-launch.webp" width="100%" height="100%" class="card-img-top">
            <span class="card-img-overlay d-flex">
                <h1 class="mt-auto mb-0" style="font-weight: bold">SpaceX's Starship</h1>
            </span>
        </div>
        ${PostSummaryList()}
`);
}

export default exploreComponent;
