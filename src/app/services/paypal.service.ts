import { Injectable } from '@angular/core';
import { loadScript } from "@paypal/paypal-js";
import type { PayPalScriptOptions } from "@paypal/paypal-js";

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  constructor() { }

  async initPayPal() {
    try {
      const options: PayPalScriptOptions = {
        clientId: "ATBp1CqPxrI04O0dPQGg_MrZ2pJzXoFcSWmKv6U0T5rVVW_uFa7hYYnb1RKdF09CKxgGXQNFvnHzJJ3B",
        currency: "MXN",
        intent: "capture"
      };

      return await loadScript(options);
    } catch (error) {
      console.error("Error al cargar PayPal:", error);
      throw error;
    }
  }
}
