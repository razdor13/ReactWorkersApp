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

        const invalidFormStyles = {
            border: '2px solid red',
            boxShadow: '0 0 5px red',
        };
        
        switch (e.target.name) {
            case 'name':
                e.target.value.trim().length<5?this.setState({isValidName : invalidFormStyles}):this.setState({isValidName : {}})
                break;
            case 'salary':
                e.target.value.trim().length<5?this.setState({isValidSalary : invalidFormStyles}):this.setState({isValidSalary : {}})
                break;
        }
        
    }
    resetForm = () => {
        this.setState({
            name: '',
            salary: '',
            isValidName: null,
            isValidSalary: null
        });
    }
    onValueSabmit = (e) => {
        e.preventDefault();
        if (this.state.isValidName && this.state.isValidSalary) {
            const {onCreate} =this.props
            
            onCreate(this.state)
            this.resetForm()
        }
        
    }
    render() {
        const { name, salary, isValidName, isValidSalary } = this.state;
    
        
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