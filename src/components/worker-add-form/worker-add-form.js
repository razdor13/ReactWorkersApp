import { Component } from 'react'
import './worker-add-form.css'




class WorkerAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            salary : '',
            isValidName : null,
            isValidSalary : null
        }
        
        
    }
    
    

    onValueChange = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value
        })
        switch (e.target.name) {
            case 'name':
                e.target.value.trim()?this.setState({isValidName : true}):this.setState({isValidName : false})
                break;
            case 'salary':
                e.target.value.trim()?this.setState({isValidSalary : true}):this.setState({isValidSalary : false})
                break;
        }
        
    }
    onValueSabmit = (e) => {
        const {onCreate} =this.props
        e.preventDefault();
        onCreate(this.state)
        
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
        let isValidName = this.state.isValidName ?validFormStyles : invalidFormStyles
    
        let isValidSalary = this.state.isValidSalary ?validFormStyles : invalidFormStyles 
        
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