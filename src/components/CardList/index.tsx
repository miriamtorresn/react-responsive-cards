import { Row, Col, Alert, Spinner } from "react-bootstrap";
import FlipCard from '../FlipCard';
import { ICard } from "../../interfaces/card";
import { ICategory } from "../../interfaces/category";
import './styles.scss';

interface ICardListProps {
  cards: ICard[];
  filterCategories: ICategory[];
  loading: boolean;
}

const CardList = (props: ICardListProps) => {
  const filteredCards = (): ICard[] => {
    return props.cards
      // Filter to show selected categories
      .filter((card: ICard) => {
        if (props.filterCategories.length === 0) return true;
        // foreach filter categories
        // are all in the tags
        return props.filterCategories.every((_category: ICategory) => (
          card.tags
            .map((_category) => _category.id)
            .includes(_category.id)
        ));
      });
  };

  const filtered = filteredCards();
  const cards = filtered.length === 0 ? props.cards : filtered;

  return (
    <>
      {props.loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        filtered.length === 0 ? (
          <Row>
            <Alert variant="danger">
              Sorry, couldn't find results for your search.
            </Alert>
          </Row>
        ) : (
          <Row>
            {cards.map((card: ICard) => (
              <Col key={`col-${card.id}`} xs={6} md={4}>
                <FlipCard card={card}></FlipCard>
              </Col>
            ))}
          </Row>
        )
      )}
    </>
  );
}

export default CardList;