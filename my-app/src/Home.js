import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [item, setitem] = useState([]);
  console.log('item',item)
  const [nameserch, setnamserch] = useState('');
  const [dateserch, setdateserch] = useState('');
  const [idserch,setidserch] = useState()
  console.log('id',idserch)
  const url = "https://63c63ae34ebaa8028541b791.mockapi.io/get";
  const downloadFile = () => {
    axios
      .get(url)
      .then((response) => {
        setitem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   const handlcliar = () => {
   downloadFile();
   };
  useEffect(() => {
    downloadFile();
  }, []);
 
  const handelserch = (e) => {
    e.preventDefault();
      const data=item.filter((element)=>{
      return element?.name?.toLowerCase().includes(nameserch?.toLowerCase()) &&
     element?.createdAt?.toLowerCase().includes(dateserch?.toLowerCase())&&
     element?.id?.toLowerCase().includes(idserch?.toLowerCase())
    })
    setitem(data)
    console.log('data',data)
 
  };

  return (
    <div>
   
      <center>
         <button className="btn" onClick={handlcliar}>clear all</button> 
        <form onSubmit={handelserch}>
          <input
            type="search"
            value={nameserch}
            placeholder="Enter name"
            onChange={(e) => setnamserch(e.target.value)}
          />
          <input
            type="Date"
            value={dateserch}
            placeholder="Enter createdAt"
            onChange={(e) => setdateserch(e.target.value)}
          />
          <input type="text" 
          value={idserch}
          placeholder="Enter id"
          onChange={(e)=> setidserch(e.target.value)}
           />
          <button type="submit">submit</button>
        </form>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>createdAt</th>
            <th>avatar</th>
          </tr>
          </thead>
          <tbody>
            {
              item && item.map((val)=>{
               return(
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.createdAt}</td>
                  <td>
                    <img src={val.avatar}/>
                  </td>
                </tr>
               )
              })
            }
          </tbody>
     
         
        </table>
      </center>
    </div>
  );
};

export default Home;
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nikita2patel/mock-api.git
// git push -u origin main