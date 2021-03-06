import React from 'react';
import {
  InLinePromptElement,
  ElementContainer,
  InLineText,
} from './psonesingleline.styled';
import {
  elementHighLighter,
  IElmColorSyntax,
} from '../options/elemhighlighter';
import { useDispatch, useSelector } from 'react-redux';
import { TAppState } from '../../../../state/store';
import { appConditionActions } from '../../../../state/redux/condition';
import { styleActions } from '../../../../state/redux/style';

const PsOneSingleLine = ({ id, lineIndex, findCard }: any) => {
  const dispatch = useDispatch();

  const { status, psonemodel, currentElement, selectedLine } = useSelector(
    (state: TAppState) => {
      return {
        status: state.condition.appcondition.status,
        psonemodel: state.crud.psonecrud.psonemodel,
        currentElement: state.style.psoneelement.currentElement,
        selectedLine: state.style.psoneelement.selectedLine,
      };
    }
  );
  //const isSelected = currentElement.id === id && status;

  const { card, index, lineindex: selectedLineIndex } = findCard(id, lineIndex);

  // const lastIndex = psonemodel[lineindex].length - 1;

  const { text, color } = elementHighLighter(card) as Partial<IElmColorSyntax>;

  const isLineSelected = lineIndex === selectedLine;
  const isEditMode: boolean =
    !!status && currentElement.id !== +id && isLineSelected;

  const inlineHandeler = () => {
    if (isLineSelected) {
      dispatch(
        styleActions.updateElement({ curCard: card, oringIndex: index })
      );
      dispatch(appConditionActions.changeModeStatus('UPDATE'));
    }
  };

  return (
    <ElementContainer>
      <InLinePromptElement
        isEditMode={isEditMode}
        isEditable={isLineSelected}
        onClick={inlineHandeler}
      >
        <InLineText color={color} isEditable={isLineSelected}>
          {text}
        </InLineText>
      </InLinePromptElement>
    </ElementContainer>
  );
};

export default PsOneSingleLine;

{
  /* {index !== 0 && (
        <MoveBackControll
          flag={!!status}
          onClick={() => {
            // if (!status) {
            //   let forvIndex = index - 1;
            //   moveElementBack({
            //     index: index,
            //     card: card,
            //     atIndex: forvIndex,
            //     lineIndex: selectedLineIndex,
            //   });
            // }
          }}
        >
          <InLineDivider className="line__divider"> {'['} </InLineDivider>
          <InLineControll className="line__icon"> {'◀'} </InLineControll>
          <InLineDivider className="line__divider"> {']'} </InLineDivider>
        </MoveBackControll>
      )} */
}

// <MoveForwardControll
// flag={!!status}
// onClick={() => {
//   // if (!status) {
//   //   let toIndex = index + 1;
//   //   moveElementForward({
//   //     index: index,
//   //     card: card,
//   //     atIndex: toIndex,
//   //     lineIndex: selectedLineIndex,
//   //   });
//   // }
// }}
// >
// {/* <InLineDivider className="line__divider"> {'['} </InLineDivider>
// <InLineControll className="line__icon"> {'▶'} </InLineControll>
// <InLineDivider className="line__divider"> {']'} </InLineDivider> */}
// </MoveForwardControll>
