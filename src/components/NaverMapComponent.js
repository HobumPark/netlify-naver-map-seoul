import { RenderAfterNavermapsLoaded, NaverMap,Marker } from 'react-naver-maps';


function NaverMapComponent() {
    return (
      <NaverMap
        mapDivId={"react-naver-map"}
        style={{ width: '500px', height: '500px' }}
        //defaultCenter={{ lat: 37.554722, lng: 126.970833 }} 
        defaultCenter={{ lat: 37.56679, lng: 126.97842 }}//서울시청 위도경도
        //defaultZoom={10}
        enableWheelZoom={true}//휠로 확대축소 줌 컨트롤
        zoomControl={true} //줌 컨트롤 박스 나오게
        defaultZoom={15}>
      <Marker position={{ lat: 37.56679, lng: 126.97842 }}/>
      </NaverMap>
    )
}
  
export default NaverMapComponent