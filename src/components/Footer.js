
import '../css/Footer.css';
import footer_mark_isms from '../images/footer_mark_isms-p.png';
import footer_mark_wah from '../images/footer_mark_wah.png';
import btn_top from '../images/btn_top.png';

function Footer() {

    const gotoTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div id='footer'>
            <div id='footer-top'>
                <ul id='bottom-menu'>
                    <li>
                        <a href="#">누리집 도우미</a>
                    </li>
                    <li>
                        <a href="#">개인정보처리방침</a>
                    </li>
                    <li>
                        <a href="#">저작권 정책</a>
                    </li>
                    <li>
                        <a href="#">영상정보처리기기 운영 관리방침</a>
                    </li>
                    <li>
                        <a href="#">누리집 바로잡기</a>
                    </li>
                    <li>
                        <a href="#">누리집지도</a>
                    </li>
                </ul>

                <ul id='sns-menu'>
                    <li>
                        <a href="#">
                            <span className='icon_sns wifi'></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon_sns facebook'></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon_sns twitter'></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon_sns instagram'></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon_sns kakao_stroy'></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon_sns youtube'></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon_sns blog'></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div id='footer-bottom'>
                <div id='footer-left'>
                    <span className='icon_common notice'></span>
                </div>
                <div id='footer-mid'>
                    <address>
                    서울특별시청 04524 서울특별시 중구 세종대로 110 [찾아오시는 길]<br/>
                    대표전화: 02-120 또는 02-731-2120<br/>
                    © Seoul Metropolitan Government all rights reserved<br/>
                    </address>
                </div>
                <div id='footer-right'>
                    <img src={footer_mark_isms} alt='푸터 이미지'/>
                    <img src={footer_mark_wah} alt='푸터 이미지'/>
                </div>
            </div>
            <button onClick={gotoTop}>
                <img src={btn_top} alt='상단이동'/>
            </button>
        </div>
    )
}

export default Footer;