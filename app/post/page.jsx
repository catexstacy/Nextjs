import React from 'react'

const page = async() => {
    try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
        return (
            <section className="w-full h-[80vh] flex gap-3 mt-[2rem] justify-center items-center">
          <article className="w-full max-w-[1200px]">
            <h1 className="font-semibold text-lg text-center w-full">Posts</h1>
            <section className="mt-">
              <h1 className="">post 1</h1>
            </section>
        
          </article>
        </section>
          )  
    } catch (error) {
        
    }
 
}

export default page
