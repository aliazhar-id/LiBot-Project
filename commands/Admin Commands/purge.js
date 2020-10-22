const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   if (!message.member.permissions.has("ADMINISTRATOR")) return;
const args1 = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
const amount = args.join(' '); // Amount of messages which should be deleted

if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
if (amount < 1) return message.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
)})
}

exports.help = {
  name: "purge",
  description: "Delete message ",
  usage: ";purge <amount>",
  example: ";purge 10"
};

exports.conf = {
  aliases: ["pg", "prune"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
