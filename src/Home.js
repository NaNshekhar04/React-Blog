import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')  //APPLYING THE CUSTOM HOOK!



    //BEFORE MAKING A CUSTOM HOOKS!
    // const [blogs, setBlogs] = useState(null);     //Setting state for our blog!
    // const [isPending, setisPending] = useState(true);       //Setting state for our blog while Loading!
    // const [error, setError] = useState(null);           //Setting state for our Error Handling!

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         fetch('http://localhost:8000/blogs')
    //     .then (res =>{
    //             if(!res.ok){
    //                 throw Error('Unable to fetch... Internal server error.....');
    //             }
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setBlogs(data);
    //         setisPending(false);
    //         setError(null);         //If got data successfully don't try to set the error!
    //     })
    //         .catch(err=>{
    //             setisPending(false);    //If got an error make the loading state to be false
    //            setError(err.message);      //Else change the state of the error with error message!
    //         })
    //     }, 1000);   
    // }, []);
    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div> }
            {blogs && <BlogList blogs= {blogs} title= "All Blogs!"/>}
        </div>

     );
}
 
export default Home;
