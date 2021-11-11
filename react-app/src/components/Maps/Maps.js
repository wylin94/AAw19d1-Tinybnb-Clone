import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import CustomMarker from "./googleMarker.png";

const containerStyle = {
	width: "400px",
	height: "400px",
};

const center = {
	lat: 37.0902,
	lng: -95.7129,
};

const Maps = ({ apiKey, spots }) => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: apiKey,
	});

	return (
		<>
			{isLoaded && (
				<>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={3}
					>
						{spots?.map((spot) => (
							<Marker
								key={spot.id}
								position={{
									lat: spot.lat,
									lng: spot.lng,
								}}
								icon={{
									url: CustomMarker,
									scaledSize: new window.google.maps.Size(40, 30),
									labelOrigin: new window.google.maps.Point(18, 12),
									// anchor: new window.google.maps.Point(0, 0)
								}}
								label={`$`+spot.price.toString()}
							/>
						))}
					</GoogleMap>
				</>
			)}
		</>
	);
};

export default React.memo(Maps);
