import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    constructor (props){
        super(props)
        this.state = {
            rises : true,
            searhSalary : true
        }
    }

    

    render(){
        const {onUpdateFilterRise,onUpdateFilterSalary} = this.props
        return (
            <div className="btn-group">
                <button 
                className="btn btn-light"
                type="button">
                    Всі співробітники
                </button>
                <button 
                className="btn btn-outline-light"
                onClick={()=>{onUpdateFilterRise()}}
                type="button">
                    Підвищення
                </button>
                <button 
                className="btn btn-outline-light"
                onClick={()=>{onUpdateFilterSalary()}}
                type="button">
                    З.П більше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter