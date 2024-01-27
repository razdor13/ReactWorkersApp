import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import WorkerAddForm from '../worker-add-form/worker-add-form';
import WorkerList from '../worker-list/worker-list';



import './app.css';

function App(){
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/> 
            </div>

            <WorkerList/>
            <WorkerAddForm/>
        </div>
    )
}

export default App;