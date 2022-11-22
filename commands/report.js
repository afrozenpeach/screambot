const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Reports your progress to stop the screaming temporarily.')
		.addStringOption(option =>
			option
				.setName('progress')
				.setDescription('The progress you want to report.')
		),
	async execute(interaction, sm) {
        const progress = interaction.options.getString('progress');
		const userId = interaction.user.id;

		await interaction.reply({content: `${interaction.user.toString()} reported their progress!\n\n${progress}`, ephemeral: false});

		sm.resetTimeouts(userId);
	},
};