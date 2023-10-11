import { Subcommand } from '@sapphire/plugin-subcommands';
import getHentai from '../../service/hentai.service.js';
import Log from '../../utils/Log.js';

export default class Hentai extends Subcommand {
	constructor(ctx) {
		super(ctx, {
			name: 'hentai',
			aliases: [
				'tits',
				'boobies',
				'kiss',
				'lick',
				'hug',
				'poke'
			],
			description: 'delivers anime titties to your conversation',
			detailedDescription: 'via subcommands, you are able to pull and display sexy, slutty, and perverted imagery for any occasion! use generously, but judiciously. or not. use it however you want.',
			// nsfw: true,
			subcommands: [
				{
					name: 'booty', // for 'ass' endpoint
					chatInputRun: 'booty'
				},
				{
					name: 'gifs', // for 'pussy' endpoint
					chatInputRun: 'gifs'
				},
				{
					name: 'lezzies', // for 'pussy' endpoint
					chatInputRun: 'lezzies'
				},
				{
					name: 'nut', // for 'cum' endpoint
					chatInputRun: 'nut'
				},
				{
					name: 'random', // for 'hentai' endpoint
					chatInputRun: 'random'
				},
				{
					name: 'pussy', // for 'lesbian' endpoint
					chatInputRun: 'pussy'
				}
			]
		});
	}

	registerApplicationCommands(registry) {
		registry.registerChatInputCommand((builder) =>
			builder
				.setName('hentai')
				.setDescription('delivers anime titties to your conversation')
				.addSubcommand(command => 
					command
						.setName('booty')
						.setDescription('drop some anime booty')
				)
				.addSubcommand(command => 
					command
						.setName('gifs')
						.setDescription('drop some anime hentai gifs')
				)
				.addSubcommand(command => 
					command
						.setName('lezzies')
						.setDescription('drop some anime lesbians')
				)
				.addSubcommand(command => 
					command
						.setName('nut')
						.setDescription('drop some anime cum spills')
				)
				.addSubcommand(command => 
					command
						.setName('pussy')
						.setDescription('drop some anime pussy')
				)
				.addSubcommand(command => 
					command
						.setName('random')
						.setDescription('drop random anime titties, pussy, nut, whatever')
				),
		{
			idHints: ['1161736182162526298']
		}
		);
	}

	async booty(interaction) {
		Log.info('Running hentai booty command');
		try {
			interaction.reply(await getHentai(interaction,'ass'));
		} catch (e) {
			Log.error('booty command is failing:', e);
		}
	}

	async gifs(interaction) {
		Log.info('Running hentai gifs command');
		try {
			interaction.reply(await getHentai(interaction,'gifs'));
		} catch (e) {
			Log.error('hentai gifs command is failing:', e);
		}
	}

	async lezzies(interaction) {
		Log.info('Running hentai lezzies command');
		try {
			interaction.reply(await getHentai(interaction,'lezzies'));
		} catch (e) {
			Log.error('hentai lezzies command is failing:', e);
		}
	}

	async nut(interaction) {
		Log.info('Running hentai nut command');
		try {
			interaction.reply(await getHentai(interaction,'cum'));
		} catch (e) {
			Log.error('hentai nut command is failing:', e);
		}
	}

	async pussy(interaction) {
		Log.info('Running hentai pussy command');
		try {
			interaction.reply(await getHentai(interaction,'pussy'));
		} catch (e) {
			Log.error('hentai pussy command is failing:', e);
		}
	}

	async random(interaction) {
		Log.info('Running random hentai command');
		try {
			interaction.reply(await getHentai(interaction,'random'));
		} catch (e) {
			Log.error('random hentai command is failing:', e);
		}
	}
}