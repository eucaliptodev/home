import React, {Component} from 'react';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: 'home'};
    }

    handleClick(param) {
        this.setState({selected: param})
        this.props.onSelect(param);
    }

    render() {
        console.log(this.state.selected);
        return <nav>
            <a href="#" className={this.state.selected == 'home' ? 'selected' : ''} onClick={() => this.handleClick('home')}>Inicio</a>
            <a href="#" className={this.state.selected == 'galleries' ? 'selected' : ''} onClick={() => this.handleClick('galleries')}>Galerías</a>
            <a href="#" className={this.state.selected == 'contactus' ? 'selected' : ''} onClick={() => this.handleClick('contactus')}>Contacto</a>
        </nav>
    }
}
