const http = require('http');

const motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy',
    },
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK',
    },
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy',
    },
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy',
    },
  },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const url = req.url;

  if (url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify(motoGP));
  } else if (url === '/country') {
    res.statusCode = 200;
    const groupedByCountry = motoGP.reduce((acc, race) => {
      const country = race.winner.country;
      if (!acc[country]) acc[country] = [];
      acc[country].push(race);
      return acc;
    }, {});
    res.end(JSON.stringify(groupedByCountry));
  } else if (url === '/name') {
    res.statusCode = 200;
    const groupedByName = motoGP.reduce((acc, race) => {
      const name = `${race.winner.firstName} ${race.winner.lastName}`;
      if (!acc[name]) acc[name] = [];
      acc[name].push(race);
      return acc;
    }, {});
    res.end(JSON.stringify(groupedByName));
  } else {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Bad Request' }));
  }
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
