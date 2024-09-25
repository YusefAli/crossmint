const axios = require('axios');


// Helper function to retry API requests with delay
async function withRetries(apiCall, retries = 3, delay = 2000) {
    for (let i = 0; i < retries; i++) {
        try {
            await apiCall();
            return;  // Success
        } catch (error) {
            console.error(`Attempt ${i + 1} failed: ${error.message}`);
            if (i < retries - 1) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(res => setTimeout(res, delay));
            } else {
                console.error('All retries failed.');
            }
        }
    }
}

// MegaverseAPI class definition (from earlier)
class MegaverseAPI {
    constructor(candidateId) {
        this.baseUrl = 'https://challenge.crossmint.io/api/';
        this.candidateId = candidateId;
    }

    

    async createPolyanet(row, column) {
        console.log(row+","+column)
        const url = `${this.baseUrl}polyanets`;
        const data = {
            row: row,
            column: column,
            candidateId: this.candidateId
        };
            await withRetries(() => axios.post(url, data), 3, 2000);  // 3 retries, 2 seconds delay
            console.log(`Created Polyanet at (${row}, ${column})`);
       
    }
}

// Function to create an X-shape
async function createXShapeWithMargin(api, gridSize, margin) {
    const effectiveGridSize = gridSize - 2 * margin;

    for (let i = 0; i < effectiveGridSize; i++) {
        // Create Polyanet on the left diagonal (i, i) with margin
        await api.createPolyanet(margin + i, margin + i);

        // Create Polyanet on the right diagonal (i, effectiveGridSize - 1 - i) with margin
        const rightCol = margin + (effectiveGridSize - 1 - i);
        if (margin + i !== rightCol) {  // Avoid duplicate at the center for odd sizes
            await api.createPolyanet(margin + i, rightCol);
        }
    }
}

// Main function to trigger the process
async function main() {
    const candidateId = '5cce11b9-33d6-460d-9f22-bcae6947c0b9';  // Replace with your actual candidateId
    const api = new MegaverseAPI(candidateId);

    const gridSize = 11;  // You can adjust this to match the grid size for the X-shape
    const margin = 2;
    await createXShapeWithMargin(api, gridSize, margin);
}

main();
