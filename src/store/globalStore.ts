import { makeAutoObservable } from "mobx";
import MailService from "./data/mail/mail";
import { secretToken } from "../config";
import ReservationService from "./data/reservation/reservation";

// Interface pour les propriétés du store global
interface GlobalStoreProps {
  secretToken: string | undefined;
  mailService: MailService;
  reservationService: ReservationService;
}

// Classe pour le store global
class GlobalStore implements GlobalStoreProps {
  secretToken: string | undefined;
  mailService: MailService;
  reservationService: ReservationService;

  constructor() {
    makeAutoObservable(this);
    this.secretToken = secretToken;
    this.reservationService = new ReservationService(this);
    this.mailService = new MailService(this);
  }
}

export default GlobalStore;
