import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSrch(term)
    }

    render() {
        return (
            <input 
            className="form-control search-input" //* form-control is  class of bootstrap *//
            type="text" 
            placeholder="Знайти співробітника"
            value={this.state.term}
            onChange={this.onUpdateSearchLocal}
            /> 
        )
    }
}

export default  SearchPanel