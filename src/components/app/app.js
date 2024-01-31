
import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import WorkerAddForm from '../worker-add-form/worker-add-form';
import WorkerList from '../worker-list/worker-list';



import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "loridium k",salary: 800,increase: false,rise: false,id: 1,},
                {name: "Vojd tRALL",salary: 4000,increase: false,rise: true,id: 2,},
                {name: "Mz123",salary: 3000,increase: false,rise: false,id: 3,},
                {name: "123 k",salary: 1000,increase: false,rise: false,id: 4,},
                {name: "Vo123jd tRALL",salary: 4000,increase: false,rise: false,id: 5,},
                {name: "fdsfs",salary: 3000,increase: false,rise: true,id: 6,},
            ],
            term: '',
            filter: {rises : false,searhSalary : false}
        };
        this.maxId = 7;
        
              
        
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id)
            // const before = data.slice(0,index)

            // const after = data.slice(index+1)

            // const newArr = [...before,...after]
            // console.log(newArr)
            return {
                // data : newArr
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    onCreate = (stateOfform) => {
        this.setState(() => {
            return {
                data: [
                    ...this.state.data,
                    {
                        ...stateOfform,
                        increase: false,
                        rise: false,
                        id: this.maxId++,
                    },
                ],
            };
        });
    };

    onTogleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id){
                    return {
                        ...item , increase : !item.increase
                    }
                }
                return item;
            }),
        }));
        
    };
    onTogleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id){
                    return {
                        ...item , rise : !item.rise
                    }
                }
                return item;
            }),
        }));
    };

    serchWorker = (items,term) => {
        if (term.length === 0){
            return items
        }
        return items.filter ((item) => {
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateFilterRise = () =>{
        
        this.setState(({filter})=>{
            return  filter.rises =!filter.rises
        })
    }
    onUpdateFilterSalary = () =>{
        this.setState(({filter})=>{
            
            return  filter.searhSalary =!filter.searhSalary
        })
        
    }
    onUpdateSrch = (term) => {
        this.setState({term})
    }
    filterWorker = ({data , filter}) => {
        console.log(data.filter((item) => item.salary > 1000))
            if (filter.rises && filter.searhSalary)
            {   
                return data.filter((item) => item.salary > 1000).filter((item) => item.rise)
            }
            else if (filter.rises)
            {
                return data.filter((item) => item.rise)
            }
            else if (filter.searhSalarym)
            {   
                return data.filter((item) => item.salary > 1000)
            }
            else
            {
                return data
            }
    }
    

    render() {
        const {term} = this.state
        const quantityWorkers = this.state.data.length;
        const quantityIncrease = this.state.data.filter(item => item.increase).length;
        const filterData = this.filterWorker(this.state)
        const visibleData = this.serchWorker(filterData,term)
        return (
            <div className="app">
                <AppInfo 
                    quantityIncrease = {quantityIncrease}
                    quantityWorkers = {quantityWorkers}
                />
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSrch = {this.onUpdateSrch}
                    />
                    <AppFilter
                    onUpdateFilterRise = {this.onUpdateFilterRise}
                    onUpdateFilterSalary = {this.onUpdateFilterSalary}
                    />
                </div>

                <WorkerList
                    data={visibleData}
                    onDelete={this.onDeleteItem}
                    onTogleIncrease={this.onTogleIncrease}
                    onTogleRise={this.onTogleRise}
                />
                <WorkerAddForm onCreate={this.onCreate} />
            </div>
        );
    }
}

export default App;