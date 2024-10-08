import { api } from "./useAuth";

export const handleComment = (e)=> {
    const data = {
        username,
        email,
        password
      };
      axios.post(`${api}/comment${id}`, data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
  
        if(error.response){
          setError(error.response.data);
            console.log(error.response);
        }else {
          setError('An error occurred. Please try again');
        }
      })
};