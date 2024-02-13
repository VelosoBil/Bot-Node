import {
  initialStage,
  stageOne,
  stageTwo,
  stageThree,
  stageFour,
  finalStage,
} from './stages/index.js'

import { storage } from './storage.js'

export const stages = [
  {
    descricao: 'Bem vindo',
    stage: initialStage,
  },
  {
    descricao: 'Menu',
    stage: stageOne,
  },
  {
    descricao: 'Endereço',
    stage: stageTwo,
  },
  {
    descricao: 'Pedido',
    stage: stageThree,
  },
  {
    descricao: 'Novo pedido',
    stage: stageFour,
  },
  {
    descricao: 'Assistente',
    stage: finalStage,
  },
]

export function getStage({ from }) {
  if (storage[from]) {
    return storage[from].stage
  }

  storage[from] = {
    stage: 0,
    itens: [],
    address: '',
  }

  return storage[from].stage
}
