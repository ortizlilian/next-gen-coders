# nextGenCoders

A blog that acts as a starting point for beginners who want to dive into the world of web development, as well as getting information about job opportunities in the field. One of the objective of the blog is to provide comprehensive and easy-to-understand information about web development, in order to teach junior developers about the fundamentals of coding languages, frameworks, and best practices.

This blog was developed using Nextjs and it has a MongoDB database to persist the blog posts. 

## User Story
>
> AS A user
>
> I WANT to be able to write and post blog posts on a Blog Website.

## Deployment

The blog was deployed on Vercel and can be accessed [here]()

## Usage

As this blog was fully deployed to Vercel, there is no need to install anything on your local machine to run it. However, if the user still wants to run this app locally, the following commands need to be run:

`npm i`
`npm run dev`

In addition, if the user wants to connect to MongoDB database, the steps below need to be followed:

1. Go to [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas/lp/dcp?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646473&adgroup=131761130532&cq_cmp=14412646473&gclid=CjwKCAjwzuqgBhAcEiwAdj5dRl9oWrjSfsLlAUNz-DHSA5_dxWRR53EiIiCWwhbfYjgOQo9r0_YefRoCoP8QAvD_BwE)
2. Click on `Try Free`
3. Create an account (this can be easily done using a google account)
4. Click on `Create Database`
5. Create a username and password (make sure to save your password somewhere, you'll need it for step number 11)
6. Click on `Connect`
7. Choose the `Connect your application` option
8. Copy the connection string
9. Go to the repo in your local machine
10. Go to the `.env` file located at the root folder
11. Replace the MONGODB_URI url with your connection string (don't forget to replace < PASSWORD > with your actual password)

## Blog features

- How to submit a blog post: Go to the `Write Post` button at the upper right hand side of the page, fill all the input fields and click on `Send Message` button
- How to search a blog post by category: on the Home Page, simply click on the wanted category at the left hand side of the page, and all the blog posts in that category will be render on the page.

## Screenshots

## Tech-Stack
- JavaScript
- Next.js
- Tailwind CSS
- Mongoose
- MongoDB

## Credits & Resoucres

Here's a list containing all the tutorials and/or references used in the project:
- [Creating a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app)
- [Mongoose NPM](https://www.npmjs.com/package/mongoose)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [Adding MongoDB (Mongoose) to Next.js APIs](https://dev.to/raphaelchaula/adding-mongodb-mongoose-to-next-js-apis-3af)
- [How to deploy with Vercel and MongoDB Atlas](https://www.infoworld.com/article/3664936/how-to-deploy-with-vercel-and-mongodb-atlas-without-even-trying.html#:~:text=You%20can%20now%20deploy%20your,Here's%20how.&text=One%20of%20the%20most%20interesting,release%20of%20Vercel%2DMongoDB%20integration)
- [Introduction to Mongoose for MongoDB](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)
- [Dynamic API Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes#index-routes-and-dynamic-api-routes)
- [Client-side data fetching](https://nextjs.org/docs/basic-features/data-fetching/client-side)
- [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

## Contributors

Thanks to the following people who have contributed to this project:\
[Lilian Ortiz](https://github.com/ortizlilian) \
[Obinna Obianuo](https://github.com/ObianuoObi)\
[Prince Andrews Nimako](https://github.com/nimscodes) \
[Yogita Negi](https://github.com/yogi-88)
