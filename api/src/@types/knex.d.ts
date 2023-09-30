// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    tasks: {
      id: string
      name: string
      description?: string
      completed?: boolean
      created_at: string
      updated_at?: string
    }
  }
}
