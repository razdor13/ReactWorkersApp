import './worker-list-item.css'



const WorkerListItem = (props) => {

    const {name, salary, onDelete, onTogleIncrease, onTogleRise ,rise,increase} = props;

    let classNames = "list-group-item d-flex justify-content-between";

    rise ? (classNames += " like") : (classNames += "");
    increase ? (classNames += " increase") : (classNames += "");

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onTogleRise}>
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={salary + "$"}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onTogleIncrease}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default WorkerListItem