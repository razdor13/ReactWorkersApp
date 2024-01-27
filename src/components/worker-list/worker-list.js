import './worker-list.css'
import WorkerListItem from '../worker-list-item/worker-list-item'

const WorkerList = () => {
    return (
        <ul className="app-list list-group">
            <WorkerListItem/>
            <WorkerListItem/>
            <WorkerListItem/>
        </ul>
    )
}

export default WorkerList