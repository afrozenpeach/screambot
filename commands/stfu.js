const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stfu')
		.setDescription('Removes all of the screams for a user'),
	async execute(interaction, sm) {
        sm.removeScreams(interaction.user.id)
		await interaction.reply({content: `I will no longer scream at ${interaction.user.toString()}!`, ephemeral: false});
	},
};