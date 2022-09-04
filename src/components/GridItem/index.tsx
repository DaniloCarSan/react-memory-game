import { GridItemType } from '../../types/GridIteType';
import * as C from './styles';
import b7svg from '../../svgs/b7.svg';
import items from '../../data/items';

type Props = {
    item: GridItemType,
    onClick: () => void,
}

const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}>
            {!item.permanentShown && !item.shown &&
                <C.Icon src={b7svg} alt="b7web" />
            }
            {(item.shown || item.permanentShown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt={items[item.item].name} />
            }
        </C.Container>
    );
}

export default GridItem;