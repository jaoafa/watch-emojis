import config from 'config'
import { Client, Intents, TextChannel } from 'discord.js'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log(`I am ready! ${client.user?.tag}`)
})

client.on('messageCreate', async (message) => {
  if (!(message.channel instanceof TextChannel)) {
    return
  }
  if (message.content === 'ping') {
    message.reply('pong')
  }
})

client.login(config.get('discordToken'))
