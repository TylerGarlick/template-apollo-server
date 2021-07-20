import { join } from 'path'
import {
  existsSync,
  readFileSync,
} from 'fs'

export default {
  ping: () => true,
  me: async () => ({
    name: 'test',
    email: 'test@test.com'
  })
}
