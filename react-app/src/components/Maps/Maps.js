import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import CustomMarker from "./googleMarker2.png";
import styles from "./Maps.module.css";

const Maps = ({ apiKey, spot, spots , GMapSetting}) => {
	console.log('spots', spots)
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: apiKey,
	});

	const containerStyle = {
		width: '100%',
		height: '100%'
	};

	const center = {
		lat: GMapSetting.lat,
		lng: GMapSetting.lng,
	};

	return (
		<>
			{spot && isLoaded && (
				<>
					<div className={styles.mapWrapper}>
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							zoom={GMapSetting.zoom}
						>
							<Marker
								key={spot.id}
								position={{
									lat: spot.lat,
									lng: spot.lng,
								}}
								icon={{
									url: CustomMarker,
									scaledSize: new window.google.maps.Size(38, 26),
									labelOrigin: new window.google.maps.Point(18, 11),
									// anchor: new window.google.maps.Point(0, 0)
								}}
								label={`$`+spot.price.toString()}
							/>
						</GoogleMap>
					</div>
				</>
			)}

			{spots && isLoaded && (
				<>
					<div className={styles.mapWrapper}>
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							zoom={GMapSetting.zoom}
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
										scaledSize: new window.google.maps.Size(38, 26),
										labelOrigin: new window.google.maps.Point(18, 11),
										// anchor: new window.google.maps.Point(0, 0)
									}}
									label={`$`+spot.price.toString()}
								/>
							))}
						</GoogleMap>
					</div>
				</>
			)}
		</>
	);
};

export default React.memo(Maps);
