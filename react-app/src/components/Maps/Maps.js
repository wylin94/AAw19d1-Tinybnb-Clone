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

const Maps = ({ apiKey }) => {
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
						<Marker
							position={{
								// lat: parseFloat("42.3601"),
								// lng: parseFloat("-71.0589"),
								lat: 37.561299565623536,
								lng: -122.00983107099384,
							}}
						/>
					</GoogleMap>
				</>
			)}
		</>
	);
};

export default React.memo(Maps);
