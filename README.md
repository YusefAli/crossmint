# Crossmint Megaverse Builder

This project is designed to automate the process of building a "megaverse" by interacting with the Crossmint Megaverse API. It posts astral objects like 🪐 POLYanets, 🌙 SOLOONs, and ☄ comETHs according to a goal map fetched from the API. It also includes retry functionality for handling API failures.

## Features
- Automatically posts POLYanets, SOLOONs (colored), and COMETHs (with directions) to the API.
- Implements retry logic for failed requests.
- Utilizes `axios` for making HTTP requests.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 12.x or later)
- An active internet connection
- `npm` (comes with Node.js)
- A valid Crossmint candidate ID for the Megaverse challenge.

## challenge 1

```cmd
node megaverseChallenge1.js
```
## challenge 2
```cmd
node megaverseChallenge2.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)