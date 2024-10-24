
export const fetchApartmentsData = async () => {
    try {
        const response = await fetch('../data/logements.json');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Récupérer un appartement par ID
export const fetchApartmentById = async (id) => {
    try {
        const apartments = await fetchApartmentsData();
        const apartment = apartments.find(apartment => apartment.id === id);
        return apartment;
    } catch (error) {
        console.error('Error fetching apartment:', error);
        throw error;
    }
};
