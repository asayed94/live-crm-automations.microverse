import { merge } from 'lodash/fp'
import pino from 'pino'

const LOGGER_DEFAULT_NAME = 'LIVE-CRM-AUTOMATIONS'

const loggerOptions: Partial<pino.LoggerOptions> = {
  base: {},
  level: 'debug',
  timestamp: false,
  enabled: true,
  redact: {
    censor: '**REDACTED**',
    paths: [
      '*.multiValueHeaders',
      'tokens.access_token',
      'tokens.refresh_token',
      '*.tokens.access_token',
      '*.tokens.refresh_token',
      'config.headers.Authorization',
      '*.config.headers.Authorization',
      '*.reason.config.headers.Authorization',
      '*.reason.response.config.headers.Authorization',
      'config.headers["x-wsse"]',
      '*.config.headers["x-wsse"]',
      '*.reason.config.headers["x-wsse"]',
      '*.response.config.headers["x-wsse"]',
      '*.config.httpAgent',
      '*.config.httpsAgent',
      '*.reason.config.httpAgent',
      '*.reason.config.httpsAgent',
      'config.retryConfig',
      '*.config.retryConfig',
      'config.agent',
      '*.config.agent',
      'config.userAgentDirectives',
      '*.config.userAgentDirectives',
      'response.config',
      '*.response.config',
    ],
  },
  prettyPrint: false,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      errorProps: 'name,reason,context',
    },
  },
}

/**
 * Get a logger instance
 */
export const getLogger = (loggerName = ''): pino.Logger => {
  const name = loggerName
    ? [LOGGER_DEFAULT_NAME, loggerName].join('/')
    : LOGGER_DEFAULT_NAME
  const options = merge(loggerOptions, {
    name,
  })

  return pino(options)
}
