import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
const PAGE_NUMBER = 1;
function GetData() {
    const [posts,setPosts]= useState<any[]>([])
    const [page,setPage]= useState<any>(PAGE_NUMBER)
    
    useEffect(()=>{
        axios.get(`https://uniplato.staging.uniplato.us/api/v1/mock-data?page=${page}`)
            .then(res=>{
                 setPosts([...posts,...res.data.data.data])
            })
            .catch(e=>console.log(e))
    },[page])

    const scrollToEnd =()=>{
        setPage(page+1)
    }
    window.onscroll=function(){
        if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
            scrollToEnd()
        }
    }
    return (
    <div>
        {
            posts.map((post)=>{
                return(
                    <div className='padding' key={post.id}>
                        <img
                            src={post.image}
                            alt={"Post ID: "+post.id}
                        />
                        <br/> 
                        <b><p>{post.title}</p></b>
                        <p>{post.description}</p>
                        </div>
                )
            })
        }    
    </div>
  );
}

export default GetData;