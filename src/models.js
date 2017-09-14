import { List, Map, Record } from 'immutable'
import uuid from 'uuid/v4'

export const ApplictionState = Record({
    entities: new Map(),
    ui: new Map(),
})

export const HostsFile = Record({
    id: uuid(),
    name: '',
    content: '',
})