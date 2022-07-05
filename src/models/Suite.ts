import type { ExplorerAPI } from '@blockcerts/explorer-lookup';
import type VerificationSubstep from '../domain/verifier/valueObjects/VerificationSubstep.js';
import type { IBlockchainObject } from '../constants/blockchains.js';
import type { Receipt } from './Receipt.js';
import type { Blockcerts } from './Blockcerts.js';
import type { Issuer } from './Issuer.js';
import type { VCProof } from './BlockcertsV3.js';
import type { MerkleProof2017 } from './MerkleProof2017.js';

export interface SuiteAPI {
  actionMethod: (step: string, action) => Promise<any>;
  document: Blockcerts;
  explorerAPIs: ExplorerAPI[];
  proof: VCProof | MerkleProof2017;
  issuer: Issuer;
}

export abstract class Suite {
  abstract type: string;
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor (props: SuiteAPI) {}
  // this function executes the proof verification logic, as added to the Proof Verification step
  abstract verifyProof (): Promise<void>;
  // this function executes the identity verification logic, as added to the Identity Verification step
  abstract verifyIdentity (): Promise<void>;
  // returns the substeps of the Proof Verification step as defined by the suite.
  // This will populate the `subSteps` property of the Proof Verification step object
  abstract getProofVerificationSteps (parentStepKey: string): VerificationSubstep[];
  // similarly, this function will return the substeps of the Identity Verification step.
  // return an empty array if no identity verification needs to occur
  abstract getIdentityVerificationSteps (parentStepKey: string): VerificationSubstep[];
  abstract getIssuerPublicKey (): string;
  abstract getIssuerName (): string;
  abstract getIssuerProfileDomain (): string;
  abstract getIssuerProfileUrl (): string;
  abstract getSigningDate (): string;

  // only needed for Blockchain anchoring suites
  getChain? (): IBlockchainObject;
  getReceipt? (): Receipt;
  getTransactionIdString? (): string;
  getTransactionLink? (): string;
  getRawTransactionLink? (): string;

  // This method needs to become a reference to the `actionMethod` that's injected to the constructor.
  // `actionMethod` is bound to the verifier context to ensure proper execution of the steps
  abstract _doAction (step: string, action, verificationSuite: string): Promise<any>;
}
