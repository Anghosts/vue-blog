import request from './ajax';

// 获取文章列表数据
export const reqGetArticleList = (data) => {
  return request({
    url: '/article/list',
    method: 'POST',
    data
  });
}
// 获取指定文章数据
export const reqGetArtInfo = (id) => {
  return request.get('/article/detail?postID=' + id);
}

// 获取文章详细内容
export const reqGetPostData = (url) => {
  return request.get(url);
}

// 获取留言板留言内容
export const reqGetComments = page => {
  return request({
    url: '/comments/page/' + page,
    method: 'GET'
  })
}

// 留言板留言
export const reqCommentsSave = (msg) => {
  return request({
    url: '/comments/save',
    method: 'POST',
    data: { msg }
  })
}
