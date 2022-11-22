const { SlashCommandBuilder } = require('discord.js');
const Scream = require('../modules/scream');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scream')
		.setDescription('Screams at the user every X minutes until told to /stfu unless they interact with /report!')
        .addIntegerOption(option =>
            option
                .setName('minutes')
                .setDescription('The number of minutes before you are screamed at.')
                .setRequired(true)
        )
        .addBooleanOption(option =>
            option
                .setName('autoreport')
                .setDescription('Any message in the current channel will count as reporting progress.')
        ),
	async execute(interaction, sm) {
        const minutes = interaction.options.getInteger('minutes');
        let autoReport = interaction.options.getBoolean('autoreport');

        if (autoReport !== true) {
            autoReport = false;
        }

        let scream = new Scream(interaction.user, minutes, interaction.channel, autoReport);
        sm.addScream(scream);

		await interaction.reply({
            content: `Started screaming at ${interaction.user} every ${minutes} minutes!`
        })
	},
};