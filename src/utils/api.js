export const fetchPlaces = async () => {
  const res = await fetch(`${import.meta.env.VITE_PAYLOAD_API_URL}/api/places?limit=100`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 🔐 Needed if you use sessions or protected routes
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Fetch error:', res.status, errText);
    throw new Error('Failed to fetch cities');
  }

  const data = await res.json();
  return data?.docs || []; 
};

