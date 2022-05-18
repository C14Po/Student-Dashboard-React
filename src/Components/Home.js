import React from 'react'
import data from './data/data.json'
import BasicTable from './Table/BasicTable'
import HomeOptions from './HomeOptions'

const Home = () => {
  const projects = data.map((item) => item.Project)
  const reducedProjects = [...new Set(projects)]

  const getAverage = (project, typeOfGrade) => {
    const filteredData = data
      .filter((i) => i.Project === project)
      .map((grade) => grade[typeOfGrade]);
    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;
    return averageScore;
  }

  const dataWithAverageScores = reducedProjects.map((project) => ({
      project: project,
      difficultyFactor: getAverage(project, 'Difficulty'),
      funFactor: getAverage(project, 'Fun'),
    })
  )

  return (
    <div className='homeContainer'>
      <header className='homeHeader'>
        <h1 className='homeTitle'>Dashboard Overview</h1>
        <p className='homeInfo'>The chart below shows an overview of the evaluations (fun & difficult) of all students. 
          <br />The scores are the average score (Y-axis) per assignment (X-axis).</p>
      </header>
    <div className='circleOne'></div>
    <div className='circleTwo'></div>
     <HomeOptions dataA={dataWithAverageScores} dataB={getAverage} dataC={reducedProjects} />
    <div className='tableInfo'>
        <h3 className='tableTitle'>Table Overview</h3>
        <p className='extraInfo'>Sort the difficulty and fun factor in ascending or descending order by clicking the heading. Search on project.</p>
    </div>
     <BasicTable data={dataWithAverageScores} />
    </div>
  )
}

export default Home

