
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
                {
                    name: "loridium k",
                    salary: 1000,
                    increase: false,
                    rise: false,
                    id: 1,
                },
                {
                    name: "Vojd tRALL",
                    salary: 4000,
                    increase: false,
                    rise: false,
                    id: 2,
                },
                {
                    name: "Mz123",
                    salary: 3000,
                    increase: false,
                    rise: false,
                    id: 3,
                },
                {
                    name: "123 k",
                    salary: 1000,
                    increase: false,
                    rise: false,
                    id: 4,
                },
                {
                    name: "Vo123jd tRALL",
                    salary: 4000,
                    increase: false,
                    rise: false,
                    id: 5,
                },
                {
                    name: "fdsfs",
                    salary: 3000,
                    increase: false,
                    rise: false,
                    id: 6,
                },
            ],
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

  


    render() {
        const quantityWorkers = this.state.data.length;
        const quantityIncrease = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo
                    quantityIncrease = {quantityIncrease}
                    quantityWorkers = {quantityWorkers}
                />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <WorkerList
                    data={this.state.data}
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