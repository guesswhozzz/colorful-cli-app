import React from 'react';
import DropDownMenu from '../../../global/select/dropdown';
import Palette from '../psonecontrolls/palette';
import { PsOneItem } from '../styled.psone';

const BackgroundColors: React.FC = (state: any): JSX.Element => {
  // STATE
  const {
    psOneOptions: {
      activeControls,
      currentElement: { bg },
      globalcolors,
    },
    closeControl,
    openControl,
    getBgColor,
  } = state as any;
  // OPEN && CLOSED FLAG
  const [, bgSubMenu] = activeControls;

  return (
    <PsOneItem flag={bgSubMenu.flag}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={bgSubMenu.flag}
          handler={bgSubMenu.flag ? openControl : closeControl}
          accessory={'bgColorMenu'}
          selectedItem={'Background colors'}
          // preview={<Preview style={{ color: bg.hexString }}>{"░░░"}</Preview>}
        >
          <Palette globalcolors={globalcolors} colorHandler={getBgColor} />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
export default React.memo(BackgroundColors);
