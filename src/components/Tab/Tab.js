
import { useState } from 'react';
import '../../css/Tab/Tab.css';
import CityHallMain from './CityHallMain';
import SeoSoMunFirst from './SeoSoMunFirst';
import SeoSoMunSecond from './SeoSoMunSecond';
import NamSan from './NamSan';
import MuGyoDong from './MuGyoDong';
import CheongGye from './CheongGye';
import PressCenter from './PressCenter';

const menuList = {
    0: <CityHallMain />,
    1: <SeoSoMunFirst />,
    2: <SeoSoMunSecond />,
    3: <NamSan />,
    4: <MuGyoDong />,
    5: <CheongGye />,
    6: <PressCenter />,
  };

function Tab() {

    const [menu,setMenu] = useState(0)

    return (
        <div id='tab'>
            <div id='tab-btn'>
                <ul>
                    <li className={menu===0? 'active':''} onClick={() => setMenu(0)}>본청</li>
                    <li className={menu===1? 'active':''} onClick={() => setMenu(1)}>서소문 청사</li>
                    <li className={menu===2? 'active':''} onClick={() => setMenu(2)}>서소문 2청사</li>
                    <li className={menu===3? 'active':''} onClick={() => setMenu(3)}>남산 청사</li>
                    <li className={menu===4? 'active':''} onClick={() => setMenu(4)}>무교동 청사</li>
                    <li className={menu===5? 'active':''} onClick={() => setMenu(5)}>청계 청사</li>
                    <li className={menu===6? 'active':''} onClick={() => setMenu(6)}>프레스센터</li>
                </ul>
            </div>
            <div id='tab-contents'>
                {menuList[menu]}
            </div>
        </div>
    )
}

export default Tab;