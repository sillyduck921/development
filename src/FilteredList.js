import './App.css';
import DisplayList from './DisplayList';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FavoritesList from './FavoritesList';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "All",
            location: "All",
            popularity: true,
            price: false,
            favorite: false,
            total: 0,
        };
    }

    onSelectFilterType = event => {
        this.setState({
            type: event,
            location: this.state.location,
            popularity: this.state.popularity,
            price: this.state.price,
            favorite: this.state.favorite,
            total: this.state.total,
        });
    }

    onSelectFilterLocation = event => {
        this.setState({
            type: this.state.type,
            location: event,
            popularity: this.state.popularity,
            price: this.state.price,
            favorite: this.state.favorite,
            total: this.state.total,
        })
    }

    onSelectFilterFavorite = event => {
        this.setState({
            type: this.state.type,
            location: this.state.location,
            popularity: this.state.popularity,
            price: this.state.price,
            favorite: event,
            total: this.state.total,
        })
    }

    onSelectSortPrice = event => {
        this.setState({
            type: this.state.type,
            location: this.state.location,
            popularity: !event,
            price: event,
            favorite: this.state.favorite,
            total: this.state.total,
        })
    }

    onSelectSortPopularity = event => {
        this.setState({
            type: this.state.type,
            location: this.state.location,
            popularity: event,
            price: !event,
            favorite: this.state.favorite,
        })
    }

    matchesFilterType = item => {
        if (this.state.type === "All") {
            return true
        } else if (this.state.type === item.type) {
            return true
        } else {
            return false
        }
    }

    matchesFilterLocation = item => {
        if (this.state.location === "All") {
            return true
        } else if (this.state.location === item.location) {
            return true
        } else {
            return false
        }
    }

    matchesFilterFavorite = item => {
        if (item.favorite === true) {
            return true
        } else {
            return false
        }
    }

    calculateAddFavoriteTotal = item => {
        this.setState({
            type: this.state.type,
            location: this.state.location,
            popularity: this.state.popularity,
            price: this.state.price,
            favorite: this.state.favorite,
            total: this.state.total + item.price,
        })
    }

    calculateSubtractFavoriteTotal = item => {
        this.setState({
            type: this.state.type,
            location: this.state.location,
            popularity: this.state.popularity,
            price: this.state.price,
            favorite: this.state.favorite,
            total: this.state.total - item.price,
        })
    }

    render() {
        return (
            <div className="filter-container">
                <div className="filter">
                    <Form className="form">
                        <div>
                            Filter by Type
                        </div>
                        <div className="options">
                            <Form.Check
                                type="radio"
                                id="radio-button-all"
                                label="All"
                                onChange={() => this.onSelectFilterType("All")}
                                checked={this.state.type === "All"}
                            />
                            <Form.Check
                                type="radio"
                                id="radio-button-bread"
                                label="Bread"
                                onChange={() => this.onSelectFilterType("Bread")}
                                checked={this.state.type === "Bread"}
                            />
                            <Form.Check
                                type="radio"
                                id="radio-button-butter"
                                label="Butter"
                                onChange={() => this.onSelectFilterType("Butter")}
                                checked={this.state.type === "Butter"}
                            />
                        </div>
                    </Form>
                    <Form className="form">
                        <div>
                            Filter by Source
                        </div>
                        <div className="options">
                            <Form.Check
                                type="radio"
                                id="radio-button-all-location"
                                label="All"
                                onChange={() => this.onSelectFilterLocation("All")}
                                checked={this.state.location === "All"}
                            />
                            <Form.Check
                                type="radio"
                                id="radio-button-house"
                                label="Made In-House"
                                onChange={() => this.onSelectFilterLocation("Made In-House")}
                                checked={this.state.location === "Made In-House"}
                            />
                            <Form.Check
                                type="radio"
                                id="radio-button-local"
                                label="Sourced Locally"
                                onChange={() => this.onSelectFilterLocation("Sourced Locally")}
                                checked={this.state.location === "Sourced Locally"}
                            />
                            <Form.Check
                                type="radio"
                                id="radio-button-import"
                                label="Imported"
                                onChange={() => this.onSelectFilterLocation("Imported")}
                                checked={this.state.location === "Imported"}
                            />
                        </div>
                    </Form>
                    <Form className="form">
                        <div>
                            Sort by:
                        </div>
                        <div className="options">
                            <Form.Check
                                type="radio"
                                id="radio-button-popularity"
                                label="Popular"
                                onChange={() => this.onSelectSortPopularity(true)}
                                checked={this.state.popularity === true}
                            />
                            <Form.Check
                                type="radio"
                                id="radio-button-price"
                                label="Price"
                                onChange={() => this.onSelectSortPrice(true)}
                                checked={this.state.price === true}
                            />
                        </div>
                    </Form>
                    <FavoritesList onClick={() => this.state.favorite === true ? this.onSelectFilterFavorite(false) : this.onSelectFilterFavorite(true)} total={this.state.total} />
                </div>
                <div>
                    {this.state.favorite ?
                        (this.state.price ?
                            <DisplayList list={this.props.list.filter(this.matchesFilterType).filter(this.matchesFilterLocation).filter(this.matchesFilterFavorite).sort((a, b) => a.price - b.price)} add={this.calculateAddFavoriteTotal} subtract={this.calculateSubtractFavoriteTotal} /> :
                            <DisplayList list={this.props.list.filter(this.matchesFilterType).filter(this.matchesFilterLocation).filter(this.matchesFilterFavorite).sort((a, b) => a.popularity - b.popularity)} add={this.calculateAddFavoriteTotal} subtract={this.calculateSubtractFavoriteTotal} />) :
                        (this.state.price ?
                            <DisplayList list={this.props.list.filter(this.matchesFilterType).filter(this.matchesFilterLocation).sort((a, b) => a.price - b.price)} add={this.calculateAddFavoriteTotal} subtract={this.calculateSubtractFavoriteTotal} /> :
                            <DisplayList list={this.props.list.filter(this.matchesFilterType).filter(this.matchesFilterLocation).sort((a, b) => a.popularity - b.popularity)} add={this.calculateAddFavoriteTotal} subtract={this.calculateSubtractFavoriteTotal} /> )
                    }
                </div>
            </div>
        );
    }
}

export default FilteredList;