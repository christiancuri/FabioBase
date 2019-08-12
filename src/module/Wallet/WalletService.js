import WalletHelper from "./WalletHelper";
export default class WalletService {
  constructor() {
    this.helper = new WalletHelper();
  }

  async getById(req, res) {
    const { coin, id } = req.params;
    this.helper.getWallet(coin, id).then(data => res.json(data));
  }

  async getTotalBalance(req, res) {
    const { coin } = req.query;
    this.helper
      .getTotalBalances(coin)
      .then(balance => res.json(balance))
      .catch(error => res.json(error));
  }
}
