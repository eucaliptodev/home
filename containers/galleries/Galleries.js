import React, {Component} from 'react';
import Carousel from '../controls/Carousel';
import './galleries.scss';

const pictures = ['./c09.jpg', './ciara.jpg', './ladybug.jpg', './quimil.jpg'].map((path) => (require(`${path}`)));

export default class Galleries extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="galleries">
            <p>Aca van galerías de fotos</p>
            <Carousel pictures={pictures}/>
        </div>
    }
}
