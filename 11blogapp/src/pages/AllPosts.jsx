import appwriteService from '../appwrite/config'
import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'

function AllPosts() {
  const [posts, setPosts] = useState()
  useEffect(()=>{
    appwriteService.getPosts([]).then((posts) => {
      if(posts){
        setPosts(posts.documents)
      }
    })
  }, [])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post)=>(
            <div className='p-2 w1/4' key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts