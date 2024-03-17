import axios from 'axios';

const API_URL = 'https://todoserver-s269.onrender.com/api/v1';

const token = localStorage.getItem('token');

export const fetchTodos = async () => {
    try {
      const headers = {};
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
      const apiResponse = await axios.get(`${API_URL}/todo/list`, { headers });
      return apiResponse.data; 
    } catch (err) {
      console.log(err, 'err');
      throw err; 
    }
  };

export const addTodo = async(todo) => {
try{
  const headers = {};
  if (token) {
      headers.Authorization = `Bearer ${token}`;
  }
  const apiResponse=  await axios.post(`${API_URL}/todo/`, todo, { headers });
  return apiResponse.data;
}catch(err){
  console.log(err,'err');
}
}

export const updateTodo = (id, todo) => {
  try{
    const headers = {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const apiResponse=  axios.put(`${API_URL}/todo/${id}`, todo, { headers });
    return apiResponse;
  }
  catch(err){
    console.log(err,'err');
  }
};

export const deleteTodo = (id) => {
  try{
    const headers = {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const apiResponse=  axios.delete(`${API_URL}/todo/${id}`, { headers });
    return apiResponse;
  }
  catch(err){
    console.log(err,'err');
  }
};