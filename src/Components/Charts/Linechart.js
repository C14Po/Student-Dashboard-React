import React from 'react'
import {
  LineChart,
  Line,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import './charts.css'

const Linechart = (props) => {
  const data = props.data;

  return (
    <div className='chartContainer'>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <LineChart width={2000} height={300} data={data} margin={{top: 60, right: 40, left: 10, bottom: 30}}>
        <CartesianGrid strokeDasharray="1 1" stroke="white" />
        <XAxis dataKey="project" stroke="white" tick={{fontSize: "0.9rem"}}/>
        <YAxis type="number" domain={[1, 'dataMax']} stroke="white" tick={{fontSize: "0.8rem"}}/>
        <Brush dataKey="project" height={20} stroke="#8884d8"/>
        <Tooltip />
        <Legend height={30} wrapperStyle={{paddingTop: "20px", fontSize: "1rem"}} />
        <Line name="Average Score Difficulty Factor" dataKey="difficultyFactor" stroke="#70E5F6" />
        <Line name="Fun Factor" dataKey="funFactor" stroke="#F9418C" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Linechart


