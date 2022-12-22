
import '../css/Header.css';
import notifyImage from '../images/icon_bul_notify.png';

function Header() {
    return (
        <div id='header'>
            <div id='header-top'>
                <div id='head'>
                    <h1>찾아오시는 길</h1>
                    <div>
                        <span className='icon_common printer'></span>
                    </div>
                </div>
                <div id='list'>
                    <ul>
                        <li>HOME</li>
                        <li>서울소개</li>
                        <li>시청안내</li>
                        <li>찾아오시는 길</li>
                    </ul>
                </div>
            </div>
            <div id='header-bottom'>
                <h1>시청방문 안내사항</h1>
                <div id='notice-box'>
                    <div id='notice-top'>
                        <ul>
                            <li><img src={notifyImage} alt='notify'/>민원서류 발급은 코로나19 감염 예방을 위하여 온라인 민원처리 시스템을 이용 해주시기 바랍니다.</li>
                            <li>-정부24 바로가기 <button>바로가기</button></li>
                            <li>-우리동네 무인민원발급 설치장소 및 운영시간 안내 <button>바로가기</button></li>
                        </ul>
                    </div>
                    <div id='notice-bottom'>
                        <ul>
                            <li><img src={notifyImage} alt='notify'/>방문 시에는 반드시 마스크를 착용해 주시고, 코로나19 방역수칙을 지켜주시기 바랍니다.</li>
                            <li>-코로나19 마스크 착용 준수 안내 <button>바로가기</button></li>
                            <li>-코로나19 방역수칙 <button>바로가기</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;