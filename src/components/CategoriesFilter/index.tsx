import { Row, Col, Dropdown } from "react-bootstrap";
import BEM from 'react-bem-helper';
import { ICategory } from '../../interfaces/category';
import Tag from '../Tag';
import './styles.scss';

interface ICategoriesFilterProps {
  categories: ICategory[];
  filterCategories: ICategory[];
  clickAction: (category: ICategory) => void;
}

const classes: any = new BEM({
  name: 'categories-filter',
});

const CategoriesFilter = (props: ICategoriesFilterProps) => {
  return (
    <div {...classes('wrapper')}>
      <Row>
        <Col className="d-none d-md-block">
          {props.categories
            .map((category: ICategory) => (
              <Tag
                key={`category-${category.id}`}
                category={category}
                enabled={props.filterCategories.some((_category: ICategory) => category.id === _category.id)}
                clickAction={props.clickAction}
              />
            ))}
        </Col>
        <Col className="d-block d-md-none" >
          <Dropdown>
            <Dropdown.Toggle {...classes('dropdown')}>
              {props.filterCategories.length === 0 ? 'Filter' : (
                props.filterCategories
                  .map((category: ICategory) => (
                    <div {...classes('dropdown', 'selected')}>
                      {category.name}
                    </div>
                  ))
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu {...classes('menu')}>
              {props.categories
                .map((category: ICategory) => (
                  <Dropdown.Item
                    key={`category-dropdown-${category.id}`}
                    active={props.filterCategories.some((_category: ICategory) => category.id === _category.id)}
                    onClick={() => props.clickAction(category)}
                  >{category.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
}

export default CategoriesFilter;