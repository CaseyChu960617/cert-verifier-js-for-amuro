import type { Issuer } from '../../../models/Issuer.js';

export default function parseRevocationKey (issuerProfileJson?: Issuer): string {
  if (!issuerProfileJson || !Object.prototype.hasOwnProperty.call(issuerProfileJson, 'revocationKeys')) {
    return '';
  }
  if (issuerProfileJson.revocationKeys.length > 0) {
    return issuerProfileJson.revocationKeys[0].key;
  }
  return '';
}
