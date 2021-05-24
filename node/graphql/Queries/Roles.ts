import {currentSchema} from '../../utils'
const config: any = currentSchema('b2b_roles')

export const getRole = async (_: any, params: any, ctx: Context) => {
  const {
    clients: { masterdata },
  } = ctx


  try {
    const {id} = params
    await masterdata.getDocument({dataEntity: config.name, id, fields: ['id','name']})

    return { status: 'success', message: '' }
  } catch (e) {
    return { status: 'error', message: e }
  }
}

export const listRoles = async (_: any, __: any, ctx: Context) => {
  const {
    clients: { masterdata },
  } = ctx
  let ret: any = []
  try {
    ret = await masterdata.searchDocuments({dataEntity: config.name, fields: ['id','name'], schema: config.version, pagination: {page: 1, pageSize: 50}})
    console.log('Roles', ret)
    return ret
  } catch (e) {
    return { status: 'error', message: e }
  }
}