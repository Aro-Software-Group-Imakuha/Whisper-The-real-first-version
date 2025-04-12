document.addEventListener('DOMContentLoaded', () => {
    // Function to handle user interactions
    function handleUserInteraction(event) {
        console.log('User interaction:', event);
    }

    // Function to fetch and display data
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to display data
    function displayData(data) {
        const content = document.getElementById('content');
        content.innerHTML = JSON.stringify(data, null, 2);
    }

    // Add event listeners for user interactions
    document.addEventListener('click', handleUserInteraction);

    // Fetch initial data
    fetchData('https://api.example.com/data');
});
