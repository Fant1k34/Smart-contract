async function main() {
    const contract = await ethers.getContractFactory("ExchangeOffice");
    const contractDeployed = await contract.deploy();
    console.log("Contract Deployed to Address:", contractDeployed.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });