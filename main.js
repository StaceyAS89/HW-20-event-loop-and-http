let getPostUrl = 'https://jsonplaceholder.typicode.com/posts';
let titlePost = document.getElementById('title_id');
let descriptionPost = document.getElementById('description_id');
let listComments = document.getElementById('list_comments_id')

class Post {
  constructor(title, description, listComments, id = 1) {
    this.title = title;
    this.description = description;
    this.listComments = listComments;
    this.id = id;
  }
  async getPostInfo() {
    try {
      let response = await fetch(`${getPostUrl}/${this.id}`);
      return response.json();
    } catch (err) {
      console.log(err)
    }
  }

  renderPostInfo(postInfoData) {
    this.title.value = `Title: ${postInfoData.title}`
    this.description.value = `Description: ${postInfoData.body}`;
  }

  async showPostInfo() {
    try {
      let postInfo = await this.getPostInfo();
      this.renderPostInfo(postInfo);
    } catch (err) {
      console.log(err)
    }
  }

  async getComments() {
    try {
      let response = await fetch(`${getPostUrl}/${this.id}/comments`);
      return response.json();
    } catch (err) {
      console.log(err)
    }
  }

  async showCommentInfo() {
    try {
      let commentInfo = await this.getComments();
      this.renderCommentsInfo(commentInfo)
    } catch (err) {
      console.log(err)
    }
  }

  renderCommentsInfo(commentsData) {
    let commentsDataList = '';
    for (let index in commentsData) {
      if (!index) {
        return
      }
      commentsDataList += `&#8226;&nbsp${commentsData[index].name}\n`
      this.listComments.innerHTML = commentsDataList
    }
  }
}

let post1 = new Post(titlePost, descriptionPost, listComments, 1);
post1.showPostInfo();
post1.showCommentInfo();


console.log(1);
setTimeout(function () {
  console.log(2);
}, 100);

setTimeout(function () {
  console.log(3);
}, 0);

new Promise(function (resolve) {
  setTimeout(function () {
    resolve();
  }, 0);
}).then(() => {
  console.log(4);
});
console.log(5);