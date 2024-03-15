const { Web3 } = require('web3');
//const Web3 = require('web3');
const contractABI = require('./ABI.json');

// Connetti al provider della BSC
const web3 = new Web3('https://bsc-dataseed1.binance.org/');

// Imposta l'indirizzo del contratto
const contractAddress = '0x5B2bC17dd9E1f6528B5cbE9d8891929940667960'; // Sostituisci con l'indirizzo del tuo contratto

// Crea un'istanza del contratto
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Imposta l'indirizzo del wallet del proprietario
const ownerAddress = '0x75cCa65e4caaA2085d5A359f36d467Eab08671b6'; // Sostituisci con l'indirizzo del wallet del proprietario

// Chiama la funzione tokenOfOwner
async function getTokenOfOwner() {
    try {
        const result = await contract.methods.tokensOfOwner(ownerAddress).call();
        console.log('Token posseduti:', result);
    } catch (error) {
        console.error('Errore nel recuperare i token:', error);
    }
}

// Chiama la funzione Earn
async function callEarnFunction() {
    try {
        const result = await contract.methods.balanceOf(ownerAddress).call(); // Assumi che Earn non richieda parametri, aggiusta se necessario
        console.log('Risultato di Balance:', result);
    } catch (error) {
        console.error('Errore nella chiamata a Earn:', error);
    }
}

// Esegui le funzioni
getTokenOfOwner();
callEarnFunction();
