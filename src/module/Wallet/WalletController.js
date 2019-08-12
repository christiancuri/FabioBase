import WalletService from "./WalletService";

export default class WalletController {
	constructor(app, router, routerPrefix) {
		this.service = new WalletService();
		app.use(routerPrefix, router);
		this.routes(router);
	}

	async routes(router) {
		router
			.get("/:coin/:id", this.service.getById.bind(this.service))
			.get("/balance", this.service.getTotalBalance.bind(this.service));
	}
}
