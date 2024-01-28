import { Component } from 'react'
import './worker-add-form.css'

class WorkerAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            salary : ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render() {
        const {name,salary} = this.state
        return (<div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звуть?" 
                    value={name}
                    onChange={this.onValueChange}
                    name='name'
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    value={salary}
                    onChange={this.onValueChange}
                    name='salary'
                    />

                <button type="submit"
                        className="btn btn-outline-light">Додати</button>
            </form>
    </div>)
    }
    
    
}

export default WorkerAddForm