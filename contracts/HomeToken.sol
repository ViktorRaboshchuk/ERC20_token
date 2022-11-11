pragma solidity ^ 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HomeToken is ERC20 {
  constructor() ERC20("HomeToken", "HMT") {
    _mint(msg.sender, 1000 * 10 ** 18);
  }
}
