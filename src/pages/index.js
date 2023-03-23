import React from "react";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import BlogCards from '@/components/BlogCard';
import Categories from "@/components/Categories";

function Home() {
  return (
    <>
      <Head>
        <title>NextGen Coders</title>
        <meta name="description" content="A blog for new coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head>
      <main>      
        <div div className='flex gap-20'>
          <Categories />
          <BlogCards />       
        </div>
      </main>
      </>
      )
     }

export default Home;