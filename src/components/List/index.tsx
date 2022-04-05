import React from 'react';

function List() {

    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Javascript',
        time: '01:00:00'
    }, {
        task: 'Typescript',
        time: '03:00:00'
    }]

    return (
        <div>
            <h2> Studies of Today </h2>
                {/* Index isn't the best way, will be update in next steps in the course */}
                {tasks.map((item, index) => (
                    <div key={index}>
                        <h3> {item.task} </h3>
                        <p> {item.time} </p>
                    </div>
                ))}
        </div>
    )
}

export default List;