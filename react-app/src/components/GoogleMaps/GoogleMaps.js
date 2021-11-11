import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api'
import './GoogleMaps.css'



function GoogleMaps({ spot }) {
	// console.log(spot)
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyCTF4z3Ho1G4Jzkb6ZoIizcat-HwzOmFs0",
	});
	const mapContainerStyle = {
		width: '100%',
		height: '100%'
	}
	const center = {
		lat: spot.latitude,
		lng: spot.longitude,
	};
	if (loadError) return "Error loading maps"
	if (!isLoaded) return "Loading Maps"
	return (
		<div className="map-wrapper-comp">
			<GoogleMap mapContainerStyle={mapContainerStyle} zoom={7.3} center={center}></GoogleMap>
		</div>
	)
}

export default GoogleMaps
