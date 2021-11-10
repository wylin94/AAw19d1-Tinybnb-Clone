import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

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
							/>
						))}
					</GoogleMap>
				</>
			)}
		</>
	);
};

export default React.memo(Maps);
