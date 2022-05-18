import React from 'react'
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import './charts.css'

const Barchart = (props) => {
  const data = props.data;

  return (
    <div className='chartContainer'>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <BarChart width={2000} height={300} data={data} margin={{top: 60, right: 40, left: 10, bottom: 30}}>
        <CartesianGrid strokeDasharray="1 1" stroke="white" />
        <XAxis dataKey="project" stroke="white" tick={{fontSize: "0.8rem"}} padding={{left: 5, right: 5}} />
        <YAxis type="number" domain={[0, 'dataMax']} stroke="white" tick={{fontSize: "0.9rem"}} />
        <Brush dataKey="project" height={20} stroke="#8884d8" />
        <Tooltip/>
        <Legend height={30} wrapperStyle={{paddingTop: "20px", fontSize: "1rem"}} />
        <Bar name="Difficulty Factor" dataKey="difficultyFactor" fill="#2bc9e6" />
        <Bar name="Fun Factor" dataKey="funFactor" fill="#F9418C" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Barchart

