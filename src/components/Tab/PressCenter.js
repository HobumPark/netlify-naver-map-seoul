import '../../css/Tab/PressCenter.css'
import { RenderAfterNavermapsLoaded, NaverMap,Marker } from 'react-naver-maps';

function PressCenter() {
    return (
        <div id='press-center'>
            <div id='map-area'>
                <RenderAfterNavermapsLoaded
                    ncpClientId={'3yna7clpbz'} 
                    error={<p>Maps Load Error</p>} 
                    loading={<p>Maps Loading...</p>}>
                    <NaverMap
                    mapDivId={"react-naver-map"}
                    style={{ width: '90%', height: '500px',margin:"0 auto" }}
                    defaultCenter={{ lat: 37.56724, lng: 126.97772 }}//서울시청 위도경도
                    enableWheelZoom={true}//휠로 확대축소 줌 컨트롤
                    zoomControl={true} //줌 컨트롤 박스 나오게
                    defaultZoom={15}>
                    <Marker position={{ lat: 37.56724, lng: 126.97772 }}/>
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

export default PressCenter;