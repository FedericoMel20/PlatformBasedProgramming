var motoGP = [
    {
        circuit : 'Lusail',
        location : 'Qatar',
        winner : {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit : 'Autodromo',
        location : 'Argentina',
        winner : {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        } 
    },
    {
        circuit : 'De Jerez',
        location : 'Spain',
        winner : {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit : 'Mugello',
        location : 'Italy',
        winner : {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
]
const groupedWinners = motoGP.reduce((acc, race) => {
    const winnerCountry = race.winner.country;
    const winnerDetails = {
        name: `${race.winner.firstName} ${race.winner.lastName}`,
        winLocation: `${race.circuit}, ${race.location}`
    };

    // Initialize the accumulator for each country if it doesn't exist
    if (!acc[winnerCountry]) {
        acc[winnerCountry] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    // Add the winner's details to the respective country
    acc[winnerCountry].winningCircuits.push(winnerDetails);
    acc[winnerCountry].totalWin++;

    return acc;
}, {});

// Log the grouped winners in a clear format
for (const country in groupedWinners) {
    console.log(`${country}:`);
    console.log('Winning Circuits:');

    // Loop through each winning circuit to display its details
    groupedWinners[country].winningCircuits.forEach(circuit => {
        console.log(`  Name: ${circuit.name}, Win Location: ${circuit.winLocation}`);
    });

    // Display the total wins for the country
    console.log(`Total Wins: ${groupedWinners[country].totalWin}\n`);
}
