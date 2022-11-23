const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Reports your progress to stop the screaming temporarily.'),
	async execute(interaction, sm) {
		const userId = interaction.user.id;

		await interaction.reply({content: `Progress reported. Scream Timers are reset. `, ephemeral: true});

		sm.resetTimeouts(userId);
	},
};