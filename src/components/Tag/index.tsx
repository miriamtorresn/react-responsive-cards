import BEM from 'react-bem-helper';
import './styles.scss';
import { ICategory } from '../../interfaces/category';

interface ITagsProps {
  category: ICategory;
  enabled: boolean;
  clickAction?: (category: ICategory) => void;
  lowercase?: boolean;
};

const classes: any = new BEM({
  name: 'tag',
});

const Tag = (props: ITagsProps) => {

  const handleClick = (category: ICategory) => {
    if (!props.clickAction) return;
    props.clickAction(category);
  };

  const extraClasses = `${props.clickAction ? 'clickable' : 'not-clickable'} ${props.lowercase ? 'lowercase' : 'uppercase'}`;

  return (
    <div
      {...classes('badge', props.enabled ? 'highlighted' : 'regular', extraClasses)}
      onClick={() => { handleClick(props.category) }}>{props.category.name}</div>
  );
};

export default Tag;