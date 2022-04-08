import React from 'react';
import Item from './Item';
import style from './Lista.module.scss'

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
    <aside className={style.taskList}>
      <h2> Studies of Today </h2>
      <ul>
        {/* Index isn't the best way, will be update in next steps in the course */}
        {tasks.map((item, index) => (
          <Item 
            key = {index}
            task={item.task}
            time={item.time}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;