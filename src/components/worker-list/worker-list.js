import './worker-list.css'
import WorkerListItem from '../worker-list-item/worker-list-item'

const WorkerList = ({data, onDelete ,onCreate}) => {

    const elements = data.map((item) => {
        const {id} = item
        
        return (
            <WorkerListItem 
            key = {id}
            {...item}
            onDelete={()=> onDelete(id)} //* name = {item.name} salary = {item.salary} *//
            /> 
        )
    })

    return (
        
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
    
}

export default WorkerList