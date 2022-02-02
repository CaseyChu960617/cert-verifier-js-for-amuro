import { VerificationSteps } from '../../../../../../src/constants/verificationSteps';
import { IVerificationMapItem } from '../../../../../../src/domain/certificates/useCases/getVerificationMap';
import { SUB_STEPS } from '../../../../../../src/constants/verificationSubSteps';
import i18n from '../../../../../../src/data/i18n.json';
import currentLocale from '../../../../../../src/constants/currentLocale';

const defaultLanguageSet = i18n[currentLocale.locale];

const mainnetStepMapAssertion: IVerificationMapItem[] = [
  {
    code: VerificationSteps.formatValidation,
    label: defaultLanguageSet.steps.formatValidationLabel,
    labelPending: defaultLanguageSet.steps.formatValidationLabelPending,
    subSteps: [
      {
        code: SUB_STEPS.getTransactionId,
        label: defaultLanguageSet.subSteps.getTransactionIdLabel,
        labelPending: defaultLanguageSet.subSteps.getTransactionIdLabelPending,
        parentStep: VerificationSteps.formatValidation
      },
      {
        code: SUB_STEPS.computeLocalHash,
        label: defaultLanguageSet.subSteps.computeLocalHashLabel,
        labelPending: defaultLanguageSet.subSteps.computeLocalHashLabelPending,
        parentStep: VerificationSteps.formatValidation
      },
      {
        code: SUB_STEPS.fetchRemoteHash,
        label: defaultLanguageSet.subSteps.fetchRemoteHashLabel,
        labelPending: defaultLanguageSet.subSteps.fetchRemoteHashLabelPending,
        parentStep: VerificationSteps.formatValidation
      },
      {
        code: SUB_STEPS.getIssuerProfile,
        label: defaultLanguageSet.subSteps.getIssuerProfileLabel,
        labelPending: defaultLanguageSet.subSteps.getIssuerProfileLabelPending,
        parentStep: VerificationSteps.formatValidation
      },
      {
        code: SUB_STEPS.parseIssuerKeys,
        label: defaultLanguageSet.subSteps.parseIssuerKeysLabel,
        labelPending: defaultLanguageSet.subSteps.parseIssuerKeysLabelPending,
        parentStep: VerificationSteps.formatValidation
      }
    ]
  },
  {
    code: VerificationSteps.hashComparison,
    label: defaultLanguageSet.steps.hashComparisonLabel,
    labelPending: defaultLanguageSet.steps.hashComparisonLabelPending,
    subSteps: [
      {
        code: SUB_STEPS.compareHashes,
        label: defaultLanguageSet.subSteps.compareHashesLabel,
        labelPending: defaultLanguageSet.subSteps.compareHashesLabelPending,
        parentStep: VerificationSteps.hashComparison
      },
      {
        code: SUB_STEPS.checkMerkleRoot,
        label: defaultLanguageSet.subSteps.checkMerkleRootLabel,
        labelPending: defaultLanguageSet.subSteps.checkMerkleRootLabelPending,
        parentStep: VerificationSteps.hashComparison
      },
      {
        code: SUB_STEPS.checkReceipt,
        label: defaultLanguageSet.subSteps.checkReceiptLabel,
        labelPending: defaultLanguageSet.subSteps.checkReceiptLabelPending,
        parentStep: VerificationSteps.hashComparison
      }
    ]
  },
  {
    code: VerificationSteps.statusCheck,
    label: defaultLanguageSet.steps.statusCheckLabel,
    labelPending: defaultLanguageSet.steps.statusCheckLabelPending,
    subSteps: [
      {
        code: SUB_STEPS.checkRevokedStatus,
        label: defaultLanguageSet.subSteps.checkRevokedStatusLabel,
        labelPending: defaultLanguageSet.subSteps.checkRevokedStatusLabelPending,
        parentStep: VerificationSteps.statusCheck
      },
      {
        code: SUB_STEPS.checkAuthenticity,
        label: defaultLanguageSet.subSteps.checkAuthenticityLabel,
        labelPending: defaultLanguageSet.subSteps.checkAuthenticityLabelPending,
        parentStep: VerificationSteps.statusCheck
      },
      {
        code: SUB_STEPS.checkExpiresDate,
        label: defaultLanguageSet.subSteps.checkExpiresDateLabel,
        labelPending: defaultLanguageSet.subSteps.checkExpiresDateLabelPending,
        parentStep: VerificationSteps.statusCheck
      }
    ]
  }
];

export default mainnetStepMapAssertion;
