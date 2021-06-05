const map = () => {
  ymaps.ready(init);
  function init() {
    // Creating the map.
    const myMap = new ymaps.Map('map', {
      // The map center coordinates.
      // Default order: “latitude, longitude”.
      // To not manually determine the map center coordinates,
      // use the Coordinate detection tool.
      center: [55.76, 37.64],
      // Zoom level. Acceptable values:
      // from 0 (the entire world) to 19.
      zoom: 7,
    });
  }
};
export default map;
