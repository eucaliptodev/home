import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Dots from './Dots'
import './carousel.scss';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {pos: -1, max: props.pictures.length, direction: 1};

        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    
    handleRight() {
        if (this.state.pos < this.state.max - 1) {
            this.setState((previous, props) => ({pos: Math.max(previous.pos + 1, 1), direction: 1}));
        }
    }

    handleLeft() {
        if (this.state.pos > 0) {
            this.setState((previous, props) => ({pos: previous.pos - 1, direction: -1}));
        }
    }

    handleSelect(selected) {
        this.setState((previous, props) => ({pos: selected, direction: 0}));
    }

    render() {    
        let pos = this.state.pos,
            size = this.state.max,
            dir = this.state.direction;
        const images = this.props.pictures.map(function(pic, i) {
            let cls = "",
                suffix = dir > 0 ? '-left' : '-right';
            if (pos == -1 && i == 0) {
                cls = 'top';
            }
            if (pos == i && dir == 0) {
                cls = 'top';
            }

            if (pos >-1 && i == pos && dir != 0) {
                cls = "top in" + suffix
            }
            if (pos >-1 && i == ((pos - dir + size)%size) && dir != 0) {
                cls = "almosttop out" + suffix;
            }
            return <img className={cls} src={pic}/>
        });        
        
        return <div className="carousel">
            <FontAwesome name="caret-left" onClick={this.handleLeft}/>
            <div className="carousel-pics">            
            {images}
            <Dots count={this.props.pictures.length} selected={Math.max(this.state.pos, 0)} onSelect={this.handleSelect}/>                
            </div>
            <FontAwesome name="caret-right" onClick={this.handleRight}/>
            
        </div>
    }
}
