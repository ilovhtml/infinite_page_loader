import { useState,useRef,useEffect,useCallback} from 'react';
import './index.css'

//fetching 

const MemeLoaderPlayground=()=>{ 
    const[images,setimages] =useState([])
    const[page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const loader=useRef(null)
    
    
    const fetchMemes=useCallback( async()=>{
        if (loading)return
        setLoading(true)

        const response=await fetch(`https://meme-api.com/gimme/9`);
        const data= await response.json()
        setimages((previmages)=>[...previmages, ...data.memes])
        setLoading(false);
        console.log(data.memes)
        
    },[loading])
useEffect(()=>{

    fetchMemes()
},[page]
)
const handleObserver= useCallback((entries)=>{
const target = entries[0];
if (target.isIntersecting && !loading){
    setPage((prevPage)=>prevPage+1);
}
},[loading])
useEffect(()=>{
    const option = {root:null, rootMargin:"20px",threshold:0}
    const observer= new IntersectionObserver(handleObserver,option);
    const currentLoader=loader.current;
    if(currentLoader){
        observer.observe(currentLoader)
    }
    return()=>{
        if(currentLoader){observer.unobserve(currentLoader)};
    }
},[handleObserver])




    const Downloadit=()=>{

    }
    
return (
<div className='bg-gray-500' > <h1 className=' text-4xl text-white flex justify-center font-bold bg-gray-500' >INFINITE MEME LOADER</h1>
<div className='flex justify-center'> 

<button onClick={fetchMemes} className=' m-4 px-4 py-2 bg-cyan-500 rounded-full '>meme</button>

</div>
<div className="grid grid-cols-3 ...">

{images.map((meme,index)=>(
 

 <div className="bg-gray-800 border-solid border-orange-500 border-1 " onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}  key={`${meme.postLink}-${index}` }>
    <div className='grid grid-cols-10 bg-gray-800 p-2 pb-2.5'>
    <h1 className='text-white ml-2 col-span-9'>{meme.title} </h1>
     
    <button onClick={Downloadit}> 
            <img src="./resources/image.png" width={23} className={hoveredIndex===index?'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'}/></button>
    </div>
    <img src={meme.url} className="w-full h-80 object-contain "/>
 <p className='text-white pt-2'>from: r/{meme.subreddit}</p>
 </div> 

))}
{/* <button onClick={fetchMore} className=' m-4 px-4 py-2 bg-cyan-500 rounded-full '>more</button> */}


</div>
<div ref={loader}/>
</div>
)
}
export default MemeLoaderPlayground