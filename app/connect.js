if (!typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log('Install MetaMask');
}

const ethereumButton = document.querySelector('.enableEthereumButton');
const showBalance = document.querySelector('.showBalance');

ethereumButton.addEventListener('click', () => {
    getAccount();
})

async function getAccount() {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    // console.log(account)
    const balance = await ethereum
    .request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
    });
    // console.log(balance)
    const read = parseInt(balance)/10**18;
    console.log(read.toFixed(5));
    showBalance.innerHTML = read.toFixed(5);
    
}