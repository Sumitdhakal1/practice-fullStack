import axios from "axios";

export const apiComponent =  axios.create({
    BASE_URL:'http://localhost:5000/api',
    headers:{
        origin:"*",
        'Content-Type': 'application/json'
    }
})


const fetchData = (method = 'POST') => (url) =>async(
    data,
    option={
     params:{}
    }
 ) =>{
   const query ={
    method,
    url,
    data
   };
   if(option.params){
    query.params = option.params
   }
}
