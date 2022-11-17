import './App.css';
import { Component } from 'react';
import ItemCard from './ItemCard'

class DisplayList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.list.map(item => 
                        <ItemCard item={item} onSelectFavoriteAdd={this.props.setFavoriteAdd.bind(item)} onSelectFavoriteRemove={this.props.setFavoriteRemove.bind(item)} isFavorite={this.props.isFavorite.bind(item)}/>
                    )}
            </div>

        );
    }
}

export default DisplayList;
