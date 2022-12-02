const WhoToFollowListItem = (who) => {
    return(`
   <li class="list-group-item d-flex align-items-center">
                <div class="float-start">
                    <img src=${who.avatarIcon} height="50px" width="50px" class="me-3 rounded-circle">
                    <div class="float-end">
                        <span style="font-weight: bold">${who.userName}</span>
                        <span class="fa-stack" style="font-size: 50%">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-check fa-stack-1x fa-inverse"></i>
            </span>
                        <br/>
                        <span>${who.handle}</span>
                    </div>
                </div>
                <div class="ms-auto">
                    <button class="btn btn-primary rounded-pill">Follow</button>
                </div>
            </li>
 `);
}
export default WhoToFollowListItem;