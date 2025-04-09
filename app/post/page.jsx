import React from 'react'

const page = async() => {
    try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
        return (
            <section className="w-full h-[80vh] flex gap-3 mt-[2rem] justify-center items-center">
          <article className="w-full max-w-[1200px]">
            <h1 className="font-semibold text-lg text-center w-full">Posts</h1>
            <section className="mt-[1rem] flex flex-col gap-3">
              {data?.map[(post) => {
                return (
                    <>
                    <h1 className=""> {post.title}</h1>
                    </>
                )
              }]}
            </section>
        
          </article>
        </section>
          )  
    } catch (error) {
        console.log(error);
        return (
            <section className="w-full mt-[2rem] flex items-center justify-center ">
                <h1 className="text-center text-lg text-bold w-full">There was an error</h1>
            </section>
        )
        
    }
 
}

export default page
