import React, { useCallback } from "react"
import {useParams, useHistory} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import Week from "./week";
import { Button, ButtonToolbar } from 'react-bootstrap';



const Next = (props) => {
  
  const [cycle, setcycle] = React.useState(0);
    
  const history = useHistory();
  const parm = useParams();

  
  
  const KeyOpen = React.useRef(null);



    React.useEffect(() => {
        const press = (e) => {
            if([1,2,3,4,5].indexOf(Number(e.key)) !== -1) {
                setcycle(Number(e.key) )
                console.log(cycle);
            }else{
                alert("숫자키 입력하세요")
            }
            
        };
        window.addEventListener('keydown',press)

    return () => { 
        window.removeEventListener('keydown',press)
        }
    })
   
   
    

  const day_name = parm.key
//   console.log(day_name);
    return (
        <div style={{
            display: "cloum",
            margin: "50px auto",
            width: "350px",
            height: "90vh",
            border: "1px solid #ddd",
            boxSizing: "border-box",
            borderRadius: "6px"
          }}>

        {/* 평점남기기 글 */}
        
        <h5 style={{textAlign:"center", marginTop:"50px", fontWeight:"bold"}}>
            {day_name}요일
             평점 남기기
        </h5>
        {/* 동그라미 */}
        
        <div style={{display:"flex", marginLeft:"70px"}}>
        {Array.from({ length: 5 }, (po, i) => {
                    return (
                        <div 
                            onClick={()=>{setcycle(i+1)}}
                            style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                            margin: "5px",
                            backgroundColor: cycle < i+1 ? "#ddd":"#ffeb3b",
                            }}
                            ref={KeyOpen}
                            ></div>
                        // 
                        // 반복할거 사용가능
                        // 
                    );
                })}
        </div>



        {/* 버튼 */}
        <button style={{    
        width: "70%",
        backgroundColor: "purple",
        margin:"30px 0 0 53px",
        border: "none",
        borderRadius: "5px",
        padding: "1rem",
        color: "rgb(255, 255, 255)"}}
        onClick={()=>{history.push(`/`)}}>
            평점 남기기
        </button>




        </div>

    )
}

export default Next;