import './App.css';
import { Component } from 'react';
import ItemCard from './ItemCard'

class DisplayList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.list.map(item => 
                        <ItemCard item={item} />
                    )}
            </div>

        );
    }
}

export default DisplayList;
