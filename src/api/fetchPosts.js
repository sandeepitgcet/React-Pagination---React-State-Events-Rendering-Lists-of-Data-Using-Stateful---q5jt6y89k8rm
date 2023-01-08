const fetchPosts = async (page, limit) => {
    const URL = 'https://jsonplaceholder.typicode.com/posts?_page='+page+'&_limit='+limit;
    const data = await (fetch(URL).then(response => response.json()));
    console.log(typeof data);
    return data;
}

export { fetchPosts }