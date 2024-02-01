import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    constructor (props){
        super(props)
        this.state = {filter :{rises : false,searhSalary : false,all: false}}
    }
    onNonfilter = () => {
        this.props.onNonfilter()
        this.setState(({filter})=>{
            return  {filter :{rises : false,searhSalary : false, all : true}}
        })
    }
    onUpdateFilterRise = () =>{
        this.props.onUpdateFilterRise()
        this.setState(({filter})=>{
            return   {filter :{rises : !filter.rises,searhSalary : filter.searhSalary, all : false}}
        })
    }
    onUpdateFilterSalary = () =>{
        
        this.props.onUpdateFilterSalary()
        this.setState(({filter})=>{
            return  {filter :{rises : filter.rises,searhSalary : !filter.searhSalary, all : false}}
        })
        
    }
    

    render(){
        const { filter:{rises,all,searhSalary} } = this.state
        const btnActive = "btn btn-light"
        const btnNonActive = "btn btn-outline-light"
        const btnAllFilter = all? btnActive : btnNonActive
        const btnSalary = searhSalary? btnActive : btnNonActive
        const btnRises = rises? btnActive : btnNonActive
        return (
            <div className="btn-group">
                <button 
                className={btnAllFilter}
                type="button"
                onClick={this.onNonfilter}
                >
                    Всі співробітники
                </button>
                <button 
                className={btnRises}
                onClick={()=>{this.onUpdateFilterRise()}} //if need to give argument in function, we need use callback function in eventlistner
                type="button">
                    Підвищення
                </button>
                <button 
                className={btnSalary}
                onClick={()=>{this.onUpdateFilterSalary()}}
                type="button">
                    З.П більше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter