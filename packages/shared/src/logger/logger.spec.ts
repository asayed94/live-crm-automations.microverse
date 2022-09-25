import { getLogger } from './index'

describe('shared', () => {
  it('should work', () => {
    const logger = getLogger('test')
    expect(logger.name).toEqual('test')
  })
})
