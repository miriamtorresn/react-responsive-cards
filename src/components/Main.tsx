// React & Redux
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Redux actions
import * as cardActions from "../redux/actions/cardActions";
import * as categoriesActions from "../redux/actions/categoriesActions";

// Components
import CardList from './CardList';
import CategoriesFilter from './CategoriesFilter';

// Interfaces
import { ICard } from "../interfaces/card";
import { ICategory } from '../interfaces/category';

interface IMainProps {
  cards: ICard[];
  categories: ICategory[];
  loading: boolean;
}

interface IMainActionProps {
  loadCards: () => void;
  loadCategories: () => void;
}

interface IMainState {
  filterCategories: ICategory[]
}

class Main extends React.Component<IMainProps & IMainActionProps, IMainState> {

  constructor(props: IMainProps & IMainActionProps) {
    super(props);

    this.state = {
      filterCategories: []
    };
  }

  componentDidMount() {
    const { cards, loadCards } = this.props;

    if (cards.length === 0) {
      loadCards();
    }
  }

  componentDidUpdate(prevProps: IMainProps) {
    const { cards, loadCategories } = this.props;
    // Uso tipico (no olvides de comparar las props):
    if (cards !== prevProps.cards) {
      loadCategories();
    }
  }

  clickOnCategory = (category: ICategory) => {
    const alreadyExists = this.state.filterCategories
      .some((_category: ICategory) => (_category.id === category.id));
    // If category has been already selected
    if (alreadyExists) {
      // Remove it from the filter
      this.setState({
        filterCategories: this.state.filterCategories
          .filter((_category: ICategory) => (_category.id !== category.id))
      });
    } else {
      // Add it to the filter
      this.setState({
        filterCategories: [...this.state.filterCategories, category]
      });
    }
  };

  render() {
    return (
      <>
        <CategoriesFilter
          categories={this.props.categories}
          clickAction={this.clickOnCategory}
          filterCategories={this.state.filterCategories}
        />
        <CardList
          cards={this.props.cards}
          filterCategories={this.state.filterCategories}
          loading={this.props.loading}
        />
      </>
    )
  }
}

const mapStateToProps = (state: any): IMainProps => {
  return {
    cards: state.cardsReducer.cards,
    loading: state.cardsReducer.loading,
    categories: state.categoriesReducer.categories
  }
}

const mapDispatchToProps = (dispatch: any): IMainActionProps => {
  return {
    loadCards: bindActionCreators(cardActions.loadCards, dispatch),
    loadCategories: bindActionCreators(categoriesActions.loadCategories, dispatch),
  };
}

export default connect<IMainProps, IMainActionProps, {}>(mapStateToProps, mapDispatchToProps)(Main)
