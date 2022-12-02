const NavigationSidebar = () => {
    return(`
   <div class="list-group">
        <a href="" class="list-group-item list-group-item-action"><i class="fab fa-brands fa-twitter"></i></a>
        <a href="../home/home.html" class="list-group-item list-group-item-action"><i class="fa fa-home"></i>
            <span class="d-none d-xl-inline-block" style="">Home</span></a>
        <a href="../explore/index.html" class="list-group-item list-group-item-action active"><i class="fa fa-solid fa-hashtag"></i>
            <span class="d-none d-xl-inline-block" style="">Explore</span></a>
        <a href="../notifications.html" class="list-group-item list-group-item-action"><i class="fa fa-bell"></i>
            <span class="d-none d-xl-inline-block" style="">Notifications</span></a>
        <a href="../messages.html" class="list-group-item list-group-item-action"><i class="fa fa-envelope"></i>
            <span class="d-none d-xl-inline-block" style="">Messages</span></a>
        <a href="../bookmarks.html" class="list-group-item list-group-item-action"><i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-inline-block" style="">Bookmarks</span></a>
        <a href="../lists.html" class="list-group-item list-group-item-action"><i class="fa fa-list"></i>
            <span class="d-none d-xl-inline-block" style="">Lists</span></a>
        <a href="../profxile.html" class="list-group-item list-group-item-action"><i class="fa fa-user"></i>
            <span class="d-none d-xl-inline-block" style="">Profile</span></a>
        <a href="../more.html" class="list-group-item list-group-item-action"><span class="fa-stack" style="font-size: 50%"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>
            <span class="d-none d-xl-inline-block" style="">More</span></a>
    </div>
    <button class="btn btn-primary rounded-pill mt-2" style="width: 100%">Tweet</button>
 `);
}
export default NavigationSidebar;