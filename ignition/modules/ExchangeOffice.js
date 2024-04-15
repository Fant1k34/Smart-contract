const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ExchangeOfficeModule", (m) => {
    const lock = m.contract("ExchangeOffice");

    return { lock };
});