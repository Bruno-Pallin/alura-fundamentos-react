import Item from './Item';
import style from './Lista.module.scss'
import { ITasks } from '../../types/task'



function List({ tasks }: { tasks: ITasks[] }) {
  return (
    <aside className={style.taskList}>
      <h2> Studies of Today </h2>
      <ul>
        {/* Index isn't the best way, will be update in next steps in the course */}
        {tasks.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;