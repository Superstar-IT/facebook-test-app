import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.APP_PORT || process.env.PORT, 10) || 8080,
  apiPrefix: process.env.API_PREFIX || 'api',
  cacheTTL: parseInt(process.env.GOJIRX_CACHE_TTL_HOURS) || 0.5,
  adjudicationServer: process.env.GOJIRX_ADJUDICATION_SERVICE,
  adjudicationServerErrorMsg:
    process.env.GOJIRX_ADJUDICATION_SERVICE_DOWN_ERROR ||
    'Adjudication server is down for now. Please retry it later',
  adjudicationServerTimeout:
    parseInt(process.env.GOJIRX_ADJUDICATION_TIMEOUT) || 40,
  adjudicationServerTimeoutLimit:
    parseInt(process.env.GOJIRX_ADJUDICATION_TIMEOUT_LIMIT) || 300,
  adjudicationServerTimeoutRecoverLength:
    parseInt(process.env.GOJIRX_ADJUDICATION_TIMEOUT_RECOVER_LENGTH) || 900,
  adjudicationServerTimeoutErrorMsg:
    process.env.GOJIRX_ADJUDICATION_TIMEOUT_ERROR ||
    'Adjudication server is high timeout errors. Please retry it later',
  clientName: process.env.GOJIRX_CLIENT_NAME,
  initAdminAccount: process.env.GOJIRX_INITIAL_ADMIN_ACCOUNT,
  jwtSecretKey: process.env.GOJIRX_JWT_SECRET_KEY,
  pharmacyIds: process.env.GOJIRX_PHARMACY_ID,
  unsavedClaimLimit: process.env.GOJIRX_UNSAVED_CLAIM_LIMIT,
  azureInsightConnection: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
  pendingTicketLimit: parseInt(process.env.TICKET_LIMIT) || 10,
  testAccount: process.env.GOJIRX_TEST_EMAIL,
}));
