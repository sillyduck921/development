import './App.css';
import { Component } from 'react';
import { ArrowLeft, HeartFill } from 'react-bootstrap-icons';

class FavoritesButton extends Component {
    render() {
        return (
            <div>
                {this.props.favorite ?
                    <button className="favorite-filter-back" onClick={this.props.onClick}>
                        <ArrowLeft color="white" size="35px" />
                        <div className="favorite-text">
                            <div>
                                Favorites
                            </div>
                            <div className="total">
                                Total: ${this.props.total}
                            </div>
                        </div>
                    </button> :
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
                    </button> }
            </div>
        )
    }
}

export default FavoritesButton;
