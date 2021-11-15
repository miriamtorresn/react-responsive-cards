import { useState } from 'react';
import BEM from 'react-bem-helper';
import { Card } from "react-bootstrap";
import { ICard } from "../../interfaces/card";
import { ICategory } from '../../interfaces/category';
import Tag from '../Tag';
import './styles.scss';

interface IFlipCardProps {
  card: ICard;
}

const classes: any = new BEM({
  name: 'flip-card',
});

const FlipCard = (props: IFlipCardProps) => {
  const [tap, setTap] = useState(false);

  return (
    <div {...classes()}
      key={props.card.id}>
      <div
        onClick={() => { setTap(!tap) }}
        {...classes('wrapper', tap ? 'tap-front' : 'tap-back')}>

        <div
          {...classes('card', 'front')}
        >
          <Card
            {...classes('front')}
          >
            <Card.Img variant="top" src={props.card.image} />
            {
              props.card.featured && (
                <div {...classes('featured')}>Featured</div>
              )
            }
            <Card.Body>
              <Card.Title>{props.card.title}</Card.Title>
              <Card.Text>{props.card.description}</Card.Text>
            </Card.Body>
          </Card>

        </div>
        <div
          {...classes('card', 'back')}>
          <Card
            {...classes('back')}
          >
            <Card.Img variant="top" src={props.card.image} />
            <Card.Body>
              <Card.Title>{props.card.title}</Card.Title>
              <div>
                {props.card.tags.map((_category: ICategory, index: number) => (
                  <Tag
                    key={`card-category-${index}`}
                    category={_category}
                    enabled={true}
                    lowercase={true}
                  />
                ))}
              </div>
              <Card.Link href="#">READ MORE &gt;</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  );
}

export default FlipCard;