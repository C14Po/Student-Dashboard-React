<!-- Student Dashboard -->

<!-- - Informatie uit CSV file omzetten naar JSON (mijn ingeving) -->
- Bar Chart of evaluations of all students op 'beginpagina' --> difficult en fun --> optellen of gemiddelde?
- Routing per student: lijst met namen van studenten --> klik op student en alleen data van die student in bar chart
- Slicing & Dicing

.map methode over de JSON file --> vervolgens difficult en fun optellen en cijfer tonen in bar chart

routing: klik op student --> alleen die data eruit filteren en in bar chart 

1 pagina met bar chart creëren: deze is altijd hetzelfde, maar met verschillende data. 



const getAverageDifficulty = (project, difficultyFactor) => {
    const filteredDifficulty = allData
      .filter((item) => item.project === project)
      .map((item) => item[difficultyFactor]);
    const averageScore =
      filteredDifficulty.reduce((a, b) => a + b) / filteredDifficulty.length;
    return averageScore;
  };

const getAverageFun = (project, funFactor) => {
    const filteredFun = allData
      .filter((item) => item.project === project)
      .map((item) => item[funFactor]);
    const averageScore =
      filteredFun.reduce((a, b) => a + b) / filteredFun.length;
    return averageScore;
  };

  // labels: {
  //       fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
  //       fontSize: 12,
  //       letterSpacing: "normal",
  //       padding: 8,
      
  //     }
  //   }
//       title: {
//         fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
//         fontSize: 12,
//         letterSpacing: "normal",
//         padding: 5,
//         fill: "#455A64",
//         stroke: "transparent",
//         strokeWidth: 0
//       }
//   }

  // tickValues={[1, 2, 3, 4, 5]}
                  // labels={dataWithAverageScores.map((e) => e.project)}
                  // labelComponent={<VictoryLabel angle={-45} dy={50} style={[{fontSize: 10}]} />}

  tickFormat={() => ''

  https://stackoverflow.com/questions/65049361/react-routing-with-names-instead-of-ids

  https://stackoverflow.com/questions/68043762/list-of-students-click-and-redirect-to-page-react

  https://www.better.dev/route-parameters-with-react-router

  // const theme = {
//     fontSize: 4
// }


      // <VictoryChart domainPadding={20} width={1200} maxDomain={{ y: 4 }}>
      //   {/* //containerComponent={<VictoryZoomContainer allowZoom={false} zoomDomain={{x: [0, 2], y: [0, 4]}}/>} */}
      //       <VictoryGroup offset={10} colorScale={["orange", "gold"]} style={{data: {width: 12}}}>
      //           <VictoryBar
      //           labelComponent={<VictoryTooltip />}
      //           data={labels}
      //           x="project"
      //           y="difficultyFactor"
      //           // tickFormat={labels.map(e => e.assignment)}
      //           // tickLabelComponent={<VictoryLabel angle={45} dy={20}/>}
      //           />
      //           <VictoryBar
      //           labelComponent={<VictoryTooltip />}
      //           data={labels}
      //           x="project"
      //           y="funFactor"
      //           // tickFormat={labels.map(e => e.assignment)}
      //           // tickLabelComponent={<VictoryLabel angle={45} dy={20}/>}
      //           />
                
      //           {/* <VictoryAxis dependentAxis />
      //           <VictoryAxis style={{ tickLabels: { fontSize: 8, angle: 0 } }} fixLabelOverlap={true}/> */}
      //       </VictoryGroup>
           
      //   </VictoryChart>





        // const [selectedStudent, setSelectedStudent] = useState({});
  // const fetchStudent = () => {
  //   const student = allData.filter((student) => student.name === {name})
  //   setSelectedStudent(student)
  // }

  // useEffect(() =>{
  //   fetchStudent();
  // }, [])

  //  const fetchStudent = () => {
  //   const student = match.params.id
  //   console.log(student)
  //   setSelectedStudent(selectedStudent)
  // }

  // const allStudents = data.map((student) => student.StudentName)
  // const reducedStudents = [...new Set(allStudents)]
  // console.log(reducedStudents)


  https://stackoverflow.com/questions/70729326/dynamically-change-type-with-react-chartjs-2-react

  https://stackoverflow.com/questions/58853006/how-do-i-do-two-api-calls-receive-the-json-then-store-this-data-in-a-local-json

     {/* <button onClick={() => {setToggle(!toggle); changeText("Bar")}} className='changeBtn'>{buttonText}</button> */}
          {/* {toggle?<Barchart data={filtered} />:  
          <Linechart data={filtered} /> } */}
         {/* <Barchart data={filtered} /> */}
         {/* <Student data={filtered}/> */}


         import React from 'react'
// import {
//   BarChart,
//   Bar,
//   Brush,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const Barchart = (props) => {
//     const data = props.data;

//     return (
//     <div className='chartContainer'>
//       <ResponsiveContainer width="100%" aspect={3 / 1}>
//       <BarChart
//       width={2000}
//       height={300}
//       data={data}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5
//       }}
//     >
//       <CartesianGrid strokeDasharray="1 1" stroke="white" />
//       <XAxis dataKey="project" stroke="white" tick={{fontSize: 12}}/>
//       <YAxis type="number" domain={[0, 'dataMax']} stroke="white" tick={{fontSize: 14}}/>
//       <Brush dataKey="project" height={20} stroke="#8884d8"/>
//       <Tooltip />
//       <Legend height={30} layout="vertical" wrapperStyle={{paddingTop: "20px", lineHeight: "24px"}} />
//       <Bar name="Difficulty Factor" dataKey="difficultyFactor" fill="#70E5F6" />
//       <Bar name="Fun Factor" dataKey="funFactor" fill="#F9418C" />
//       </BarChart>
//       </ResponsiveContainer>
//     </div>
//     )
//   }

// export default Barchart



              {
          // checkedOne? <Barchart data={dataFunFactor} />:  
          // <Barchart data={dataWithAverageScores} /> 
          //     }
          // {
        //  checkedTwo? <Barchart data={dataDifficultyFactor} />:  
        //   <Barchart data={dataWithAverageScores} /> 
        //   }     
        //   </div>
          // {/* <Barchart data={dataWithAverageScores} /> 
          // <Linechart data={dataWithAverageScores} />




          // switch (checkedOne) {
//           case (checkedOne === true):
//             return <Barchart data={dataFunFactor}/>
//           case (checkedTwo === true):
//             return <Barchart data={dataDifficultyFactor} />
//           default:
//             return <Barchart data={dataWithAverageScores} />


      // {(() => { 
        // if (checkedOne === false || checkedTwo === true && checkedOne === true) {
        //   return (<Barchart data={dataWithAverageScores} />)
        // } else {return (<Barchart data={dataFunFactor} />)
        // }
        
        
        // if (checkedTwo === true) {
        //   return (
        //     <Barchart data={dataDifficultyFactor}/>
        //   )
        // } else if (checkedTwo === true && checkedOne === true) {
        //   return (
        //     <Barchart data={dataWithAverageScores}/>
        //   )
        // } else {
        //   return (
        //     <Barchart data={dataWithAverageScores}/>
        //   )
        
        // }
    //     if (checkedOne === true) {
    //       if (checkedTwo === true) {
    //         return <Barchart data={dataWithAverageScores}/>
    //       }
        
    //     else 
    //     { if (checkedTwo === true) 
    //       {
    //       return <Barchart data={dataDifficultyFactor}/>
    //       } }
    //       else 
    //       {
    //       if (checkedOne ===true) {
    //       return <Barchart data={dataFunFactor}/>
    //       } }
    //     else {
    //       return <Barchart data={dataWithAverageScores} />
    //     }

    // )()}


    <!-- Component Student.js -->
    // import React, {useState, useEffect} from 'react'

// function Student(props) {
// const data = props.data;
// const name = data[0].name
// console.log(name)


// useEffect(() => {
//     fetchData();
// }, [])

// const [student, setStudent] = useState([]);

// const fetchData = async () => {
//    try{
//     const data = await fetch('https://my.api.mockaroo.com/students.json?key=146dcee0');
//     const students = await data.json();
//     showSt(students) 
//     console.log(students)
// }
//     catch (error) {
//         console.log("error")
//     }
// }

// const showSt = (students) => {
//         localStorage.setItem('students', JSON.stringify(students))
//         getStudent(students)
// }

// const getStudent = (students) => {
//     const student = students.indexOf('first_name')
//     if (student === name) {setStudent(student)}
//     console.log(student)
// }

//     // console.log(bla)

//     return (
//         <div>
//             <h4>{student.first_name}</h4>
            
//         </div>
// )}

// export default Student