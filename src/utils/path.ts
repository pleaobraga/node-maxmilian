import nodePath from 'node:path'

export const getPath = (...args: string[]) =>
  nodePath.join(nodePath.dirname(__dirname), ...args)
