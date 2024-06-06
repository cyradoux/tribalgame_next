import { makeAutoObservable } from "mobx";
import { URL } from "@/store/constant/URL";
import GlobalStore from "@/store/globalStore";

class MailService {
  globalStore: GlobalStore;

  constructor(globalStore: GlobalStore) {
    makeAutoObservable(this);
    this.globalStore = globalStore;
  }

  products: any[] = [];

  async handleResponse(response: Response) {

    try {
      if (response.ok) {
        const data = await response.json();
        if (data["hydra:member"] !== undefined) {
          this.products = data["hydra:member"];
          return { success: true, data: this.products };
        } else {
          return { success: true, data };
        }
      } else {
        const errorData = await response.json();
        return {
          response,
          success: false,
          error: `Error with status: ${response.status}`,
          message: errorData.detail,
        };
      }
    } catch (error) {
      console.error("Error handling response:", error);
      return {
        response,
        success: false,
        error: "Error handling response",
        status: response.status,
      };
    }
  }

  async postMail(mailData: any) {

    try {
      const response = await fetch(URL.Mail, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.globalStore.secretToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      });

      return await this.handleResponse(response);
    } catch (error) {
      return {
        success: false,
        error: `Network or parsing error: ${error.message}`,
      };
    }
  }
}

export default MailService;
