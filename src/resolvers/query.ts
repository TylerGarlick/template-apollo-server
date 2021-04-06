import { join } from 'path'
import {
  existsSync,
  readFileSync,
} from 'fs'

export default {
  ping: () => `pong`,
  version: async () => {
    const cwd = join(__dirname, '../')
    const pkgPath = join(cwd, 'package.json')
    let version = `1.0.0`
    if (existsSync(pkgPath)) {
      // @ts-ignore
      const pkgFile = JSON.parse(readFileSync(pkgPath)
      .toString())
      version = pkgFile.version.toString()
    }
    return version
  },
}