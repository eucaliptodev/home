import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './dots.scss';

export default class Dots extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: props.selected};

        console.log('Dots ' + props.selected);

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(props) {
      this.setState({selected: props.selected});
    }

    handleClick(pos) {
        this.setState({selected: pos});
        this.props.onSelect(pos);
    }
    
    render() {
        let dots = [...Array(this.props.count).keys()].map(i => 
            (<FontAwesome name="circle" className={i == this.state.selected ? "selected" : ""} onClick={() => this.handleClick(i)}/>));
        return <div className="dots">{dots}</div>
    }
}
