import './App.css';
import { Component } from 'react';
import { HeartFill } from 'react-bootstrap-icons';

class FavoritesList extends Component {
    render() {
        return (
            <button className="favorite-filter" onClick={this.props.onClick}>
                <HeartFill color="white" size="35px" />
                <div className="favorite-text">
                    <div>
                        Favorites
                    </div>
                    <div className="total">
                        Total: ${this.props.total}
                    </div>
                </div>
            </button>
        )
    }
}

export default FavoritesList;
