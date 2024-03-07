import { Component } from 'react'
import './worker-add-form.css'




class WorkerAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            salary : '',
            isValidName: true,
            isValidSalary: true
        }
        
        
    }
    onValueChange = (e) => {
        const newValue = e.target.value
        const propName = e.target.name === 'name' ? 'isValidName' : 'isValidSalary'
        this.setState({
            [e.target.name] : newValue,
            [propName]: newValue.length >= 5
        })
        
    }
    resetForm = () => {
        this.setState({
            name: '',
            salary: '',
            isValidName: true,
            isValidSalary: true
        });
    }
    onValueSabmit = (e) => {
        const {isValidName , isValidSalary,name,salary} = this.state
        e.preventDefault();
        if (name.length >= 5 && salary.length >= 5) {
            const {onCreate} =this.props
            
            onCreate(this.state)
            this.resetForm()
        }
        
    }
    render() {
        const { name, salary, isValidName, isValidSalary } = this.state;
    
        const invalidFormStyles = {
            border: '2px solid red',
            boxShadow: '0 0 5px red',
        };

        return (<div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    style={isValidName ? {}: invalidFormStyles}
                    className="form-control new-post-label"
                    placeholder="Як його звуть?" 
                    value={name}
                    onChange={this.onValueChange}
                    name='name'
                    />
                <input type="number"
                    style={isValidSalary? {} : invalidFormStyles }
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