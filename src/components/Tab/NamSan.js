import '../../css/Tab/NamSan.css'
import { RenderAfterNavermapsLoaded, NaverMap,Marker } from 'react-naver-maps';

function NamSan() {
    return (
        <div id='nam-san'>
            <div id='map-area'>
                <RenderAfterNavermapsLoaded
                    ncpClientId={'3yna7clpbz'} 
                    error={<p>Maps Load Error</p>} 
                    loading={<p>Maps Loading...</p>}>
                    <NaverMap
                    mapDivId={"react-naver-map"}
                    style={{ width: '90%', height: '500px',margin:"0 auto" }}
                    defaultCenter={{ lat: 37.55890, lng: 126.99186 }}//서울시청 위도경도
                    enableWheelZoom={true}//휠로 확대축소 줌 컨트롤
                    zoomControl={true} //줌 컨트롤 박스 나오게
                    defaultZoom={15}>
                    <Marker position={{ lat: 37.55890, lng: 126.99186 }}/>
                    </NaverMap>   
                </RenderAfterNavermapsLoaded>   
            </div>
            <div id='desc'>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default NamSan;