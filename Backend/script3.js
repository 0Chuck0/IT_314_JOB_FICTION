import React,{useEffect,useState} from 'react';
import axios from "axios";

        const[data,setData]=useState([]);


        async function func(){

            await axios.post("http://localhost:5000/data",{

            }).then(res =>{

                setData(res.data);

            }).catch(err=>{

                alert(err);

            });
        }

        return (

            <div>{data}</div>

        );