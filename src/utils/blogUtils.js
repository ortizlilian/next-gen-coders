export function getBlogPostsByCategory(category, blogData) {
    console.log('blogData:', blogData)
    return blogData.filter((post) => post.category === category);
}