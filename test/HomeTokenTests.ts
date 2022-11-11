import { expect } from "chai";
import { HomeToken } from "../typechain-types";
import hre from "hardhat";
import type { SignerWithAddress   } from "@nomiclabs/hardhat-ethers/signers";

describe("HomeToken", function () {
  let homeToken: HomeToken;
  let owner: SignerWithAddress;
  beforeEach(async () => {
    [owner] = await hre.ethers.getSigners();
    const HomeToken = await hre.ethers.getContractFactory("HomeToken", {signer: owner});
    homeToken = await HomeToken.deploy();
    // await homeToken.deployed();
  });

  describe("Check contract balance", () => {
    it("Should mint 1000 Home tokes", async function () {
      const mint_amount = BigInt(1000 * 10 ** 18);
      const balance = await homeToken.balanceOf(owner.address);
      expect(await balance).to.equal(mint_amount);
    });
  });

  describe("Check contract constructor", () => {

    it("Constructor should create ERC20 token with name HomwToken", async function () {
      console.log(await homeToken.name());
      expect(await homeToken.name()).to.equal("HomeToken");
    });

    it("Constructor should create ERC20 token with symbol HMT", async function () {
      console.log(await homeToken.symbol());
      expect(await homeToken.symbol()).to.equal("HMT");
    });
  });

});
