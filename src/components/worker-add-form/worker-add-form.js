import { Component } from 'react'
import './worker-add-form.css'




class WorkerAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            salary : '',
            isValidName : true,
            isValidSalary : true,
        }
        
        
    }
    
    

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    onValueSabmit = (e) => {
        const {onCreate} =this.props
        e.preventDefault();
        onCreate(this.state)
        if (this.state.name.trim()) {
            this.setState({
                isValidName : false
            })
        }else{
            this.setState({
                isValidName : true
            })
        }
        if (this.state.salary.trim()) {
            this.setState({
                isValidSalary : false
            })
        }else{
            this.setState({
                isValidSalary : true
            })
        }
        console.log(this.state.isValidName)

    }
    render() {
        const validFormStyles = {
            border: '2px solid transparent',
            boxShadow: 'none' 
        };
        const invalidFormStyles = {
            border: '2px solid red',
            boxShadow: '0 0 5px red',
        };
        const isValidName = this.state.isValidName ?   invalidFormStyles : validFormStyles
        const isValidSalary = this.state.isValidSalary ? invalidFormStyles : validFormStyles 
        const {name,salary} = this.state
        return (<div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    style={isValidName}
                    className="form-control new-post-label"
                    placeholder="Як його звуть?" 
                    value={name}
                    onChange={this.onValueChange}
                    name='name'
                    />
                <input type="number"
                    style={isValidSalary}
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    value={salary}
                    onChange={this.onValueChange}
                    name='salary'
                    />

                <button type="submit"
                        onClick={this.onValueSabmit}
                        className="btn btn-outline-light">Додати</button>
            </form>
    </div>)
    }
    
    
}

export default WorkerAddForm