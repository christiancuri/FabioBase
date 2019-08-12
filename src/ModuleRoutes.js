import WalletController from "./module/Wallet/WalletController";
import express from "express";

export default class ModuleRoutes {
	static async init(app) {
		const router = express.Router();
		new WalletController(app, router, "/wallet");
	}
}
