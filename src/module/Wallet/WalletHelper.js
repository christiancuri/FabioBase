import * as BitGo from "bitgo";

export default class WalletHelper {
  constructor() {
    this.bitgo = new BitGo.BitGo({
      accessToken: process.env.BITGO_ACCESS_TOKEN
    });
  }

  async getWallet(coin, id) {
    return this.bitgo
      .coin(coin)
      .wallets()
      .get({ id });
  }

  async getTotalBalances(coin) {
    const a = await this.bitgo
      .coin(coin)
      .wallets()
      .list({});
    a.wallets.map(item => console.log(item));
    return this.bitgo
      .coin(coin)
      .wallets()
      .getTotalBalances();
  }
}
