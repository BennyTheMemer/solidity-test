async function main() {
  const [owner, somebodyElse] = await hre.ethers.getSigners();
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    "Keyboards"
  );
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("Contract deployed to:", keyboardsContract.address);

  const keyboardTx1 = await keyboardsContract.create("A really great keyboard");
  //This wait will be important later when implementing on a real network
  await keyboardTx1.wait();

  const keyboardTx2 = await keyboardsContract
    .connect(somebodyElse)
    .create("An even better keyboard!");
  await keyboardTx2.wait();

  const keyboards = await keyboardsContract.getKeyboards();

  console.log("We got the keyboards!", keyboards);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
