const posts = [
    {
      id: 1,
      title: "Building a blog website with a MERN Stack",
      publishDate: "2021-09-05",
      author: "Prince Nimako",
      coverImage: "/images/mern-stack.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "mern-stack",
    },
    {
      id: 2,
      title: "Building a Front end Application",
      publishDate: "2021-08-25",
      author: "Lilian Ortiz",
      coverImage: "/images/backend.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "front-stack",
    },
    {
      id: 3,
      title: "Building a serveless backend app",
      publishDate: "2021-08-11",
      author: "Negi Yogita",
      coverImage: "/images/backend.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "back-end",
    },
  ];

  export function getAllPost(){
    return posts;
  }

  export function getAllSlugs(){
    const slugs = [];
    getAllPost().map((post)=> {
        slugs.push(`/blog-post/${post.slug}`);
    });
    return slugs;
  }

  export function getPostData(slug){
   
    const post = getAllPost().find(p => p.slug === slug)
    console.log("post", post)
    console.log("slug", slug)
    return post;
  }