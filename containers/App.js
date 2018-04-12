import './main.scss';
import React, {Component} from 'react';
import Menu from './Menu';
import Home from './home/Home';
import Galleries from './galleries/Galleries';
import ContactUs from './contactus/ContactUs';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: 'home'};
        this.handleMenuSelection = this.handleMenuSelection.bind(this);
    }

    handleMenuSelection(selected) {
        this.setState({selected: selected});
    }

    getContent() {
        if(this.state.selected == 'galleries') {
            return <Galleries/>
        } else if (this.state.selected == 'contactus') {
            return <ContactUs/>
        } else {
            return <Home/>;
        }
    }

    render () {        
        return <article>
        <header>
            <h1>Constructor</h1>
            <Menu onSelect={this.handleMenuSelection}/>
        </header>
        <section>
            <div id="content">{this.getContent()}</div>
        </section>
        </article>
    }
}
