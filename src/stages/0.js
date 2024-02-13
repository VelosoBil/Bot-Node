import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá, como vai?
      Eu sou Juarez, a IA da ${venombot.getSessionName}.
      Posso te ajudar? 🙋‍♂️
      Todo contato e registrdo em minha base de dados, e aprendo com você, para melhorar meu atendimento, e sempre solucionar seus problemas ou duvids de forma rapida e eficaz.
      -----------------------------------
      1️⃣ - Desenvolvimento de aplicações ,sites,segurança, configurção de ambientes em cloud entre outros.
      2️⃣ - Orçamento
      0️⃣ - Data de entrega
      0️⃣ - Contrato PJ
      0️⃣ - Forma de pagamento e data do pagamento.
      0️⃣ - Falar com consultor
    `
    await venombot.sendText({ to: from, message })
  },
}
