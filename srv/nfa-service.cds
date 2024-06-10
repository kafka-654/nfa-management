using { sap.ui.lstnfa as my } from '../db/schema';
@path: 'service/nfa'
service NfaService {
  entity Nfas as projection on my.Nfas;
    annotate Nfas with @odata.draft.enabled;
}
annotate NfaService with @(requires: ['support']);

