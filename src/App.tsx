import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';
import InfoItem from './components/InfoItem';
import Button from './components/Button';
import GridItem from './components/GridItem';
import { GridItemType } from './types/GridIteType';
import items from './data/items';
import formatTimeElepsed from './helpers/formatTimeElepsed';

const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElepsed, setTimeElepsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown)) {
      setPlaying(false);
    }
  }, [gridItems, moveCount]);

  useEffect(() => {
    if (playing) {
      const timer = setInterval(() => {

        setTimeElepsed(timeElepsed + 1);

      }, 1000);
      return () => clearInterval(timer);
    }
  }, [playing, timeElepsed]);

  //verificar se os card são iguais
  useEffect(() => {
    if (showCount === 2) {

      const opened = gridItems.filter(item => item.shown);

      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShowCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              if (tmpGrid[i].shown) {
                tmpGrid[i].shown = false;
              }
            }
            setGridItems(tmpGrid);
            setShowCount(0);
          }, 1000);
        }

        setMoveCount(moveCount => moveCount + 1);
      }
    }
  }, [showCount, gridItems]);

  const resetAndCreateGrid = () => {

    // Resetar o jogo
    setTimeElepsed(0);
    setMoveCount(0);
    setShowCount(0);

    // Criar o grid e começar o jogo

    // Criar o grid vazio
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) tmpGrid.push({
      item: null,
      shown: false,
      permanentShown: false,
    });

    // preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * tmpGrid.length);
        }
        tmpGrid[pos].item = i;
      }
    }

    // Atualizar o grid
    setGridItems(tmpGrid);

    // começar o jogo
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    if (playing && index != null && showCount < 2) {
      let tmpGrid = [...gridItems];

      if (!tmpGrid[index].permanentShown && !tmpGrid[index].shown) {
        tmpGrid[index].shown = true;
        setShowCount(showCount + 1);
      }

      setGridItems(tmpGrid);
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="DevMemory" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElepsed(timeElepsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>

        <Button
          label="Reiniciar"
          icon={restartIcon}
          onClick={resetAndCreateGrid}
        />

      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
