import './App.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "All",
            dietary: "All",
        };
    
    }

    onSelectFilterType = event => {
        this.setState({
            price: event
        })
    }

    onSelectFilterDietary = event => {
        this.setState({
            dietary: event
        })
    }

    matchesFilterType = item => {
        // all items should be shown when no filter is selected
        if (this.state.type === "All") { 
            return true
        } else if (this.state.type === item.type) {
            return true
        } else {
            return false
        }
    }

    matchesFilterDietary = item => {
        // all items should be shown when no filter is selected
        if (this.state.dietary === "All") { 
            return true
        } else if (this.state.dietary === item.dietary) {
            return true
        } else {
            return false
        }
    }
    
    
}

export default FilteredList;