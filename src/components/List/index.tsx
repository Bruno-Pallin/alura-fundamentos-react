import Item from './Item';
import style from './Lista.module.scss'
import { ITask } from '../../types/task'

interface IProps {
  tasks: ITask[],
  selectTask: (selectTask: ITask) => void
}

function List({ tasks, selectTask }: IProps) {
  return (
    <aside className={style.taskList}>
      <h2> Studies of Today </h2>
      <ul>
        {/* Index isn't the best way, will be update in next steps in the course */}
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;