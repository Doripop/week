

import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Next from "./Next"
import {Route, Link} from "react-router-dom";



const Week = (props) => {
const history = useHistory();
const day = [
    {key: "월" ,  circleNum : Math.ceil(Math.random()*5)} ,
    {key: "화" ,  circleNum : Math.ceil(Math.random()*5)} ,
    {key: "수" ,  circleNum : Math.ceil(Math.random()*5)} ,
    {key: "목" ,  circleNum : Math.ceil(Math.random()*5)} ,
    {key: "금" ,  circleNum : Math.ceil(Math.random()*5)} ,
    {key: "토" ,  circleNum : Math.ceil(Math.random()*5)} ,
    {key: "일" ,  circleNum : Math.ceil(Math.random()*5)} 
]
let sum = 0;  
const avg = day.map((nd,i)=>(nd.circleNum));
avg.forEach((item)=> {sum+=item})  //forEach((나눌 배열) => {어떻게 하고싶은지})
const realavg = (sum/7).toFixed(1) // toFixed 는 괄호안만큼 소수점 정리
const [resetavg, setAvg] = useState(realavg);
const date = new Date().getDay()-1

const daytoo = day.map((v,i)=>{
  return i <= (date+2) ? day[i+date] : day[i-5]               
})
console.log(daytoo)




// console.log(realavg);
  
  
  return (
    <>
      <div style={{
        display: "cloum",
        margin: "50px auto",
        width: "350px",
        height: "90vh",
        border: "1px solid #ddd",
        boxSizing: "border-box",
        borderRadius: "6px"
      }}>
        
        <h3 style={{ textAlign: "center", marginBottom:"40px", marginTop:"40px" ,fontWeight:"bold", color:"purple"}}>내 일주일은?</h3>
    
        {daytoo.map((rd,i) => 
             
            <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom:"30px" }}>
                <h3 style={{fontWeight:"bold"}}>{rd.key}</h3>
                
                {Array.from({ length: 5 }, (po, i) => {
                    return (
                        <div style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                            margin: "5px",
                            backgroundColor: rd.circleNum < i + 1 ? "#ddd" : "#ffeb3b"
                        }}></div>
                        // 
                        // 반복할거 사용가능
                        // 
                    );
                })}
                        
                    <div style ={{appearance: "none",
                                 backgroundColor: "transparent",
                                borderColor: "transparent purple",
                                width: "0px; height: 0px",
                                borderTopWidth: "1rem",
                                borderTopStyle: "solid",
                                borderBottomWidth:"1rem", 
                                borderBottomStyle:"solid",
                                borderLeftWidth:"1.6rem",
                                borderLeftStyle:"solid",
                                color:"rgb(255, 255, 255)",
                                cursor:"pointer"
                                }}
                                onClick={()=>{history.push(`/Next/${rd.key}`)}}></div>
                        


                        

            </div>
            
                {/* 여기 작성가능 */}

            </>
        )}

         <div style={{display:"cloumn", color:"royalblue", fontSize:"25px",textAlign:"center",fontWeight:"bold"}}>평균 평점
         <div>{resetavg}</div>
         <div style={{display:"flex",justifyContent: "space-around"}}>
            <ButtonToolbar >
            <Button variant="primary" onClick={()=>{setAvg((0).toFixed(1))}}>Reset</Button>
            </ButtonToolbar>
         </div>
         
          </div>
         
          
        </div>
        </>
    );
}




export default Week;


