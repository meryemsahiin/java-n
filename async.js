let posts = [
    {author: '1', date: '2021'},
    {author: '2', date: '2000'},
    {author: '3', date: '2018'},
    {author: '4', date: '1996'},
    {author: '5', date: '2005'}
]

let listPosts = () => {
    posts.map(post => {
        console.log(post.author, post.date)
    })
}

const addPost = () => {
    const promiseAddPost = new Promise((resolve, reject)=> {
        posts.push({author: '6', date:'1999'});
        resolve('Yeni post eklendi!')
    })
    return promiseAddPost;
};

async function showPost() {
    try {
        await addPost();
        listPosts();
    } catch(err) {
        console.log('Bir hata oluştu', err)
    }
};

showPost()