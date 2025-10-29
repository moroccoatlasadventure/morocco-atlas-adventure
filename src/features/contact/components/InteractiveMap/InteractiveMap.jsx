import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css"; // ✅ Import in script, not in style tag
import L from "leaflet";
import styles from "./InteractiveMap.module.css";

// Fix Leaflet default marker icon issue with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const InteractiveMap = () => {
  const { t } = useTranslation();

  // Morocco coordinates (centered on Atlas Mountains region)
  const position = [31.7917, -7.0926]; // Marrakech coordinates

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.mapHeader}>
        <span className={styles.icon}>📍</span>
        <h3>{t("contact.info.mapTitle")}</h3>
      </div>
      <MapContainer
        center={position}
        zoom={6}
        className={styles.map}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Morocco Atlas Adventure <br /> Marrakech, Morocco
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
