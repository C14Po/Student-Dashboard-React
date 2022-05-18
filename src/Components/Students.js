import React, { useState }  from 'react'
import { useParams } from 'react-router-dom'
import Barchart from './Charts/Barchart';
import data from './data/data.json'
import Linechart from './Charts/Linechart';
import BasicTable from './Table/BasicTable';

const Students = () => {
  const { name } = useParams()

  const allData = data.map((i) => ({
      name: i.StudentName,
      project: i.Project,
      difficultyFactor: i.Difficulty,
      funFactor: i.Fun
    })
  )

  const filtered = allData.filter(student => student.name === name)

  const [toggle, setToggle] = useState(true)
  const [buttonText, setButtonText] = useState('Show Linechart')

  const triggerToggle = () => {
      setToggle(!toggle)
      toggle ? setButtonText('Show Barchart') : setButtonText('Show Linechart')
    } 

  return (
    <div className='studentContainer'>
      <header className='studentPage'>
        <h1 className='studentTitle'>Student Overview: {name}</h1>
        <p className='studentInfo'>The chart below shows an overview of the evaluations (fun & difficult) of student {name}. 
        <br /> The scores are the total score (Y-axis) per assignment (X-axis).</p>
      </header>
      <button onClick={triggerToggle} className='toggleBtn'>{buttonText}</button>
         {toggle ? <Barchart data={filtered} /> : <Linechart data={filtered} />}
    <div className='circleThree'></div>
    <div className='circleFour'></div>
    <div className='tableInfo'>
        <h3 className='tableTitle'>Table Overview {name}</h3>
        <p className='extraInfo'>Sort the difficulty and fun factor in ascending or descending order by clicking the heading. Search on project.</p>
    </div>
      <BasicTable data={filtered} />
    </div>
  )
}

export default Students