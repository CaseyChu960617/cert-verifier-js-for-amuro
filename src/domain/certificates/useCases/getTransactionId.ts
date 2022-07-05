import VerifierError from '../../../models/VerifierError.js';
import { getText } from '../../i18n/useCases/index.js';
import type { Receipt } from '../../../models/Receipt.js';
import type { MerkleProof2017Anchor } from '../../../models/MerkleProof2017.js';

export default function getTransactionId (certificateReceipt: Receipt = {}): string {
  try {
    const { anchors } = certificateReceipt;
    const anchor = anchors[0];
    if ((anchor as MerkleProof2017Anchor).sourceId) {
      return (anchor as MerkleProof2017Anchor).sourceId;
    }

    if (typeof anchor === 'string') {
      const dataArray = anchor.split(':');
      return dataArray.pop();
    }
  } catch (err) {
    throw new VerifierError('', getText('errors', 'getTransactionId'));
  }
}
