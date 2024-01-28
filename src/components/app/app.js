import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import WorkerAddForm from '../worker-add-form/worker-add-form';
import WorkerList from '../worker-list/worker-list';



import './app.css';

function App(){

    const data = [
        {name : 'loridium k',salary : 1000, increase : false,like : false},
        {name : 'Vojd tRALL',salary : 4000, increase : false,like : false},
        {name : 'Mopser',salary : 3000, increase : false,like : false},
        {name : 'loridium k',salary : 1000, increase : false,like : false},
        {name : 'Vojd tRALL',salary : 4000, increase : false,like : false},
        {name : 'Mopser',salary : 3000, increase : false,like : false},
]

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/> 
            </div>

            <WorkerList data = {data}/>
            <WorkerAddForm/>
        </div>
    )
}

export default App;