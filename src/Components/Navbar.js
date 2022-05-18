import React, {useState } from 'react'
import data from './data/data.json'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  const allStudents = data.map((student) => student.StudentName)
  const reducedStudents = [...new Set(allStudents)]

  const averageStudent = (name) => {
    const filteredData = data
      .filter((item) => item.StudentName === name)
      .map((item) => (item.Difficulty + item.Fun));
    const averageScore =
        filteredData.reduce((a, b) => (a + b)) / filteredData.length;
    const round = averageScore.toFixed(1)
    return round;
  }

  const sumOfAverage = reducedStudents.map((student) => ({
      student: student,
      total: averageStudent(student)
    })
  )

  const [sortData, setSortData] = useState(sumOfAverage)

  const handleChange = (e) => {
    const id = e.target.value
    const sorted = [...sumOfAverage].sort((a, b) => (a.total - b.total))

    switch(id) {
      case 'low':
        setSortData(sorted)
      break;
      case 'high':
        setSortData(sorted.reverse())
      break;
      default: setSortData(sumOfAverage)
    }
  }

  return (
    <div className='navContainer'>
      <header className='navHeader'>
        <h1 className='title'><span className='letterS'>S</span>tudent <br/> <span className='letterD'>D</span>ashboard</h1>
      </header>
      <nav>
        <img src={require('../img/logo.png')} alt='logo' />
        <Link to='/' className='link'><h2 className='homeLink'>Home</h2></Link>  
          <select onChange={handleChange} defaultValue={'default'} className='selectStudent'>
            <option value='default'>All Students</option>
            <option value='low'>Average all projects: low - high</option>
            <option value='high'>Average all projects: high - low</option>
          </select>     
        {sortData.map(name => (
          <h3 key={name.student} className='studentNav'>
            <Link to={`/Students/${name.student}`} className='link'>
              {name.student}
              <h6>Total average: {name.total}</h6>
            </Link>
          </h3>))
        } 
      </nav>
    </div>
  )
}

export default Navbar