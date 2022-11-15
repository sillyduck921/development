import './App.css';
import { Component } from 'react';
import { Heart, HeartFill } from 'react-bootstrap-icons';

class ItemCard extends Component {

    setFavorite = event => {
        this.props.item.favorite = event;
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.item.image} className="image"/>
                <div className="card-bottom">
                    <div className="card-text">
                        <div className="item-name">
                            {this.props.item.name}
                        </div>
                        <div className="item-description">
                            <div className="categories">
                                <i>Type:</i> {this.props.item.type}, <i>Source:</i> {this.props.item.location}
                            </div>
                            {this.props.item.description}
                        </div>
                        <div className="item-price">
                            Price: ${this.props.item.price}
                        </div>
                    </div>
                    <div className="button">
                        {this.props.item.favorite ? 
                        <button className="favorite-button-remove" onClick={this.props.add}>
                        <HeartFill color="white" size="20px" />
                        Remove from Favorites
                    </button> : 
                    <button className="favorite-button" onClick={this.props.subtract}>
                            <Heart color="white" size="20px" />
                            Add to Favorites
                        </button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard;