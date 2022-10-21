const PostSummaryItem = (post) => {
    return(`
   <li class="list-group-item d-flex align-items-center">
                <div class="float-start me-5">
                    <span style="color:#6c757d">${post.topic}</span>
                    ${post.topic ? '<br/>' : ''}
                    <span style="font-weight: bold">${post.userName}</span>
                    <span class="fa-stack" style="font-size: 50%">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-check fa-stack-1x fa-inverse"></i>
          </span>
                    <span style="color:#6c757d">- ${post.time}</span>
                    <br/>
                    <span style="font-weight: bold">
            ${post.title}
          </span>
          ${post.title ? '<br/>' : ''}
           <span style="color:#6c757d">${post.tweets ? post.tweets: ''}</span>
                </div>
                <div class="ms-auto">
                    <img src=${post.image} width="90px" height="90px">
                </div>
            </li>
 `);
}
export default PostSummaryItem;