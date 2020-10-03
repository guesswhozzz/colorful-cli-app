import React, { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import LineDndContainer from "./promptline";

const PromptPsOneLine = (state) => {
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    changeModeStatus,
    updateElement,
  } = state;

  function findCard(id, elements) {
    const [currentElement] = elements.filter((element) => element.id === id);
    return {
      currentElement,
      index: elements.indexOf(currentElement),
    };
  }

  useEffect(() => {
    if (status === "ADD_NEW") {
      let { currentElement, index } = findCard(
        resPsOneLine.length,
        resPsOneLine
      );
      updateElement({ curCard: currentElement, oringIndex: index });
      changeModeStatus("UDATE_CURRENT");
    }
  }, [resPsOneLine]);

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <LineDndContainer {...state} />
      </DndProvider>
    </div>
  );
};

export default PromptPsOneLine;
