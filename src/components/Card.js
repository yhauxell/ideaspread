import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardFooter from './card/CardFooter';
import CardBody from './card/CardBody';


class Card extends PureComponent {
    render() {
        return (
            <div class="card">
                <CardBody></CardBody>
                <CardFooter></CardFooter>
            </div>
        );
    }
}

Card.propTypes = {

};

export default Card;