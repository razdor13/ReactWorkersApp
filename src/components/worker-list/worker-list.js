import './worker-list.css'
import WorkerListItem from '../worker-list-item/worker-list-item'

const WorkerList = ({data}) => {

    const elements = data.map((item) => {
        
        return (
            <WorkerListItem {...item} /> //* name = {item.name} salary = {item.salary} *//
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default WorkerList