import { useEffect, useState } from "react";
import Headers from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const ref = setInterval(() => {
      dispatch(getFlights());
    }, 5000);

    return () => {
      clearInterval(ref);
    };
  }, [ ]);

  const openModal = (id) => {
    // detayı gösterilecvek uçağın state'e aktarma
    setDetailId(id);
    //  modal'ı açar
    setShowDetail(true);
  };

  return (
    <>
      <Headers />

      <div className="view-buttons">
        <button
          className={showMapView ? "active" : " "}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView ? "active" : " "}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>


      {/* Ekrana basılacaklar sorugusu yapılıyor */}
      {showMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
