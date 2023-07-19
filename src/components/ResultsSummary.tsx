import data from '../data/data.js';

function Result() {
    const score = Math.round(data.reduce((prev, curr) => prev + curr.score, 0) / data.length);
    return(
        <div className='card result'>
            <h2 className='light'>
                Your result
            </h2>
            <div className='circle'>
                <h1>{score}</h1>
                <p className='light'>of 100</p>
            </div>
            <h2>Great</h2>
            <p className='light'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}

interface CategoryProps {
    icon: string;
    name: string;
    score: number;
}

function Category({ icon, name, score }: CategoryProps) {
    return(
        <div className={`category ${name.toLowerCase()}`}>
            <div className='description'>
                <img src={icon}/>
                <p className={`name ${name.toLowerCase()}`}>{name}</p>
            </div>
            <div className='score'>
                {score}
                <span className='light'>/</span>
                <span className='light'>100</span>
            </div>
        </div>
    )
}

function Summary() {
    return(
        <div className='summary'>
            <h2>Summary</h2>
            <div className='categories'>
                {data.map((category) => <Category icon={category.icon} name={category.category} score={category.score}/>)}
            </div>
            <button className='continue'>Continue</button>
        </div>
    )
}

export function ResultsSummary() {
    return(
        <div className='resultsSummary card'>
            <Result/>
            <Summary/>
        </div>
    )
}