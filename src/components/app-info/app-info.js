import './app-info.css'

const AppInfo = (props) => {
    const {quantityWorkers ,quantityIncrease} = props
    return (
        <div className="app-info">
            <h1>Cпівробітники компанії:</h1>
            <h2>Загальна кількість співробітників: {quantityWorkers}  </h2>
            <h2>Премію отримають: {quantityIncrease}</h2>
        </div>
    )
}


export default AppInfo