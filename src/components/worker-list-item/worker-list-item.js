import './worker-list-item.css'



const WorkerListItem = ({name,salary,increase}) => {
    
    let classNames = increase? 
    'list-group-item d-flex justify-content-between increase' 
    :
    'list-group-item d-flex justify-content-between';
    
    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default WorkerListItem