import { getLogger } from '@live-crm-automations/shared'
import { APIGatewayProxyResult, Context, KinesisStreamEvent } from 'aws-lambda'

export default class App {
  private logger: any

  constructor() {
    this.logger = getLogger('lambda/crm-seminar-joined')
  }

  static getHandler(): (event: KinesisStreamEvent, context: Context) => Promise<APIGatewayProxyResult> {
    const app = new App()
    return app.handler.bind(app)
  }

  public async handler(event: KinesisStreamEvent, context: Context): Promise<APIGatewayProxyResult> {
    this.logger.info('Starting the service!!')
    return {
      headers: {
        'Content-Type': 'json',
      },
      statusCode: 200,
      body: JSON.stringify({ test: 'running' }),
    }
  }
}
