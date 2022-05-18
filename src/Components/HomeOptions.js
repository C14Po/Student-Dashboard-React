import React, {useState} from 'react'
import Barchart from './Charts/Barchart'
import Linechart from './Charts/Linechart'

const HomeOptions = (props) => {
    const dataA = props.dataA
    const dataB = props.dataB
    const dataC = props.dataC

    const [sortData, setSortData] = useState(dataA)
    
    const fun = dataC.map((project) => ({project: project, funFactor: dataB(project, 'Fun')}))
    const difficulty = dataC.map((project) => ({project: project, difficultyFactor: dataB(project, 'Difficulty')}))

    const handleChange = (e) => {
        const id = e.target.value
        const sortFun = fun.sort((a, b) => (a.funFactor - b.funFactor))
        const sortDif = difficulty.sort((a, b) => (a.difficultyFactor - b.difficultyFactor))

        switch(id) {
            case 'funLow':
            setSortData(sortFun)
            break;
            case 'funHigh':
            setSortData(sortFun.reverse())
            break;
            case 'difLow':
            setSortData(sortDif)
            break;
            case 'difHigh':
            setSortData(sortDif.reverse())
            break;
            default: setSortData(dataA)
          }
        };

    const [toggle, setToggle] = useState(true)
    const [buttonText, setButtonText] = useState('Show Linechart')

    const triggerToggle = () => {
        setToggle(!toggle)
        toggle ? setButtonText('Show Barchart') : setButtonText('Show Linechart')
    };

    return (
        <div className='optionsContainer'>
            <select onChange={handleChange} defaultValue={'default'} className='selectHome'>
                <option value='default'>Average scores per assignment</option>
                <option value='funLow'>Average scores fun low - high</option>
                <option value='funHigh'>Average scores fun high - low</option>
                <option value='difLow'>Average scores difficult low - high</option>
                <option value='difHigh'>Average scores difficult high - low</option>
            </select>
            <button onClick={triggerToggle} className='changeBtn'>{buttonText}</button>
            {toggle ? <Barchart data={sortData} /> : <Linechart data={sortData} />}
        </div>
    )
}

export default HomeOptions
