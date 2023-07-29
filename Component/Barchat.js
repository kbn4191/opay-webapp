import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartjs} from 'chart.js/auto';

const data ={
    labels:["Mon","Tue","Wed","Thus","Fri"],
    datasets:[
        {
            label:"7 days transaction",
            data:[100,200,300,400,500],
            backgroundColor:["#0AA379"],
            borderColor:"#0AA379",
            borderWidth:1,
        },
    ],
};

const BarChart=()=>{
    return(
        <div>
            <Bar data={data}/>
        </div>
    )
}
export default BarChart;