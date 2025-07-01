const API_URL = import.meta.env.VITE_PAYLOAD_API_URL;

export const fetchPlaces = async () => {
  const response = await fetch(`${API_URL}/api/places?depth=1&limit=100`);
  const data = await response.json();
  return data;
};
