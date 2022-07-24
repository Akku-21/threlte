import { getContext } from 'svelte'
import type { RigidBodyContext } from '../types/types'

export const useRigidBody = (): RigidBodyContext => {
  return getContext<RigidBodyContext>('threlte-rapier-rigidbody')
}
