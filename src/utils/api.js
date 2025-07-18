export const fetchPlaces = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_PAYLOAD_API_URL}/api/places?limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Fetch error:', res.status, errText);
      throw new Error('Failed to fetch cities');
    }

    const data = await res.json();
    return data?.docs || [];
  } catch (error) {
    console.error('FETCH FAILED IN PRODUCTION:', error.message);
    return [];
  }
};
