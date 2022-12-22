import '../../css/Tab/CityHallMain.css'
import { RenderAfterNavermapsLoaded, NaverMap,Marker } from 'react-naver-maps';

function CityHallMain() {
    return (
        <div id='city-hall-main'>
            <div id='map-area'>
                <RenderAfterNavermapsLoaded
                    ncpClientId={'3yna7clpbz'} 
                    error={<p>Maps Load Error</p>} 
                    loading={<p>Maps Loading...</p>}>
                    <NaverMap
                    mapDivId={"react-naver-map"}
                    style={{ width: '90%', height: '500px',margin:"0 auto" }}
                    defaultCenter={{ lat: 37.56679, lng: 126.97842 }}//서울시청 위도경도
                    enableWheelZoom={true}//휠로 확대축소 줌 컨트롤
                    zoomControl={true} //줌 컨트롤 박스 나오게
                    defaultZoom={15}>
                    <Marker position={{ lat: 37.56679, lng: 126.97842 }}/>
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

export default CityHallMain;