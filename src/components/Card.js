import React, { PureComponent } from 'react';
import CardFooter from './card/CardFooter';
import CardBody from './card/CardBody';


class Card extends PureComponent {
    render() {
        const {title, content, createdAt, comments, likes} = this.props.card;
        return (
            <div className="card">
                <CardBody title={title} content={content} createdAt={createdAt}></CardBody>
                <CardFooter comments={comments} likes={likes}></CardFooter>
            </div>
        );
    }
}

Card.propTypes = {

};

export default Card;