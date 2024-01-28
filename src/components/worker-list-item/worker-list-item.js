import './worker-list-item.css'
import { Component } from 'react';


class WorkerListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase : false,
            like : false
        }
    }

    onIncreas = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onLike = () => {
        this.setState(({ like }) => {
            return { like: !like };
          });
    }

    render() {

        const {name,salary} = this.props
        const {increase} = this.state
        const {like} = this.state
        

        let classNames = "list-group-item d-flex justify-content-between"
            
        like ? classNames += ' like': classNames += ''
        increase ? classNames += ' increase': classNames += ''
        

        return (
            <li className= {classNames} >
                <span 
                className='list-group-item-label'
                onClick={this.onLike}>{name}</span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + "$"}
                />
                <div className="d-flex justify-content-center align-items-center">
                    <button  type="button" 
                            className="btn-cookie btn-sm"
                            onClick={this.onIncreas}                            >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default WorkerListItem