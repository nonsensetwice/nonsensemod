import { EmbedBuilder } from '@discordjs/builders';
import akaneko from 'akaneko';

const tiddyLinks = {
	'ass': akaneko.nsfw.ass(),
	'blowjob': akaneko.nsfw.blowjob(),
	'cum': akaneko.nsfw.cum(),
	'foxgirl': akaneko.nsfw.foxgirl(),
	'gifs': akaneko.nsfw.gifs(),
	'lezzies': akaneko.nsfw.yuri(),
	'random': akaneko.nsfw.hentai(),
	'orgy': akaneko.nsfw.orgy(),
	'pussy': akaneko.nsfw.pussy()
};

export default async function getHentai(interaction, tag) {
	if (!interaction.channel.nsfw) {
		return { content: 'this ain\'t no nsfw channel!', ephemeral: true };
	}
	const image = await tiddyLinks[tag];
	const embed = new EmbedBuilder();
	embed.setImage(image);
	return { embeds: [embed] };
}