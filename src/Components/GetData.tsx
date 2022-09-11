import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Ellipse from '../images/Ellipse.png'
const PAGE_NUMBER = 1;
function GetData() {
    {document.title = 'Post'}
    type post={
        id:number,
        image:string,
        title:string,
        description:string,
    }
    const [posts,setPosts]= useState<post[]>([])
    const [page,setPage]= useState<number>(PAGE_NUMBER)
    const [loading,setLoading]=useState<boolean>(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://uniplato.staging.uniplato.us/api/v1/mock-data?page=${page}`)
            .then(res=>{
                 setPosts([...posts,...res.data.data.data])
            })
            .catch(e=>console.log(e))
            .finally(()=>{
                setLoading(false)
            })
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
                        <h3>{post.title}</h3>
                        <p>{post.description.length>200?`${post.description.substring(0, 200)}...`:post.description}</p>
                        </div>
                )
            })
        }
        {loading&&<div className='loadingImage'>
      <img  src={Ellipse}/>
    </div>}
    </div>
  );
}

export default GetData;