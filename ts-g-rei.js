const { Client, GatewayIntentBits, Partials, PermissionsBitField } = require('discord.js');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
  ,restTimeOffset: 50
  ,partials: [Partials.Channel] });

  const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

  const { ActionRowBuilder, MessageActionRow, ButtonBuilder, ButtonStyle, InteractionType, ActivityType } = require('discord.js');

client.on('ready', () => {
    console.log(`${client.user.tag}is online!`)
    client.user.setPresence({ activities: [{ name: `test | Ver.0.0.1.G | ping:${client.ws.ping}`, type: ActivityType.PLAYING }],
    status: 'online'});
  })

  client.on('ready', () => {
    setInterval(() => {
      client.user.setPresence({ activities: [{ name: `test | Ver.0.0.1.G | ping:${client.ws.ping}`, type: ActivityType.PLAYING }],
      status: 'online'});
    }, 2500)
  })

client.on("messageCreate", async message => {
    if(message.author.bot) return;
      const data = [{
              name: "testcmd",
              description: "testcmd",
              options: [{
                type: ApplicationCommandOptionType.STRING,
                name: "aaa",
                description: "a",
                required: true,
              }]
                          },
        ]
    await client.application.commands.set(data,`${message.guildId}`);
    })

/////////////testcmd////////////
client.on("interactionCreate", async interaction => {
  if (!interaction.type === InteractionType.ApplicationCommand) return;
  
  if (interaction.commandName === 'testcmd') {

const intstring = interaction.options.getString('aaa')

interaction.reply({ embeds: [{
    footer: {
      icon_url: client.user.avatarURL({ format: 'jpg', size: 512}),
      text: "Create by : oSsmXun256"
    },
    author: {
        name: "tests",
        icon_url: client.user.avatarURL({ format: 'jpg', size: 512}),
      },
    description: `${intstring}`,
    color: 4303284,
    timestamp: new Date()
  }]
, ephemeral: true
})
}});

////////ログイン///////
client.login(process.env.TOKEN);
