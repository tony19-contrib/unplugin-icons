import { Compiler } from './types'

export const NoneCompiler = <Compiler>((svg: string) => {
  return svg
})