import './App.css';
import { Component } from 'react';
import ItemCard from './ItemCard'

class DisplayList extends Component {
    render() {
        return (
            <div>
                {this.props.list.map(item => 
                    <li>
                        <ItemCard item={item} />
                    </li>)}
            </div>

        );
    }
}

export default DisplayList;
