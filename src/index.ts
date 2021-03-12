import * as $ from "jquery"; 
import * as a1lib from "@alt1/base";

//Credits to https://runescape.wiki/w/Module:Rotations/Merchant
//and to Elessar2 (https://runescape.wiki/w/User_talk:Elessar2)

require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./appconfig.json");

interface IItem {
	name: string,
	cost: string,
	quantity: string,
	use: string
}

const src_imgs = {
	"coins": require("./imgs/coins.png"),
	"Uncharted island map": require("./imgs/Uncharted_island_map.png"),
	"Advanced pulse core": require("./imgs/Advanced_pulse_core.png"),
	"Anima crystal": require("./imgs/Anima_crystal.png"),
	"Barrel of bait": require("./imgs/Barrel_of_bait.png"),
	"Bottled boost": require("./imgs/Bottled_boost.png"),
	"Broken fishing rod": require("./imgs/Broken_fishing_rod.png"),
	"Crystal triskelion": require("./imgs/Crystal_triskelion.png"),
	"D&D token (daily)": require("./imgs/D&D_token_(daily).png"),
	"D&D token (weekly)": require("./imgs/D&D_token_(weekly).png"),
	"D&D token (monthly)": require("./imgs/D&D_token_(monthly).png"),
	"Deathtouched dart": require("./imgs/Deathtouched_dart.png"),
	"Dragonkin lamp": require("./imgs/Dragonkin_lamp.png"),
	"Dungeoneering Wildcard": require("./imgs/Dungeoneering_Wildcard.png"),
	"Gift for the Reaper": require("./imgs/Gift_for_the_Reaper.png"),
	"Goebie burial charm": require("./imgs/Goebie_burial_charm.png"),
	"Harmonic dust": require("./imgs/Harmonic_dust.png"),
	"Large goebie burial charm": require("./imgs/Large_goebie_burial_charm.png"),
	"Livid plant": require("./imgs/Livid_plant.png"),
	"Menaphite gift offering (large)": require("./imgs/Menaphite_gift_offering_(large).png"),
	"Menaphite gift offering (medium)": require("./imgs/Menaphite_gift_offering_(medium).png"),
	"Menaphite gift offering (small)": require("./imgs/Menaphite_gift_offering_(small).png"),
	"Message in a bottle": require("./imgs/Message_in_a_bottle.png"),
	"Sacred clay": require("./imgs/Sacred_clay.png"),
	"Shattered anima": require("./imgs/Shattered_anima.png"),
	"Silverhawk down": require("./imgs/Silverhawk_down.png"),
	"Slayer VIP Coupon": require("./imgs/Slayer_VIP_Coupon.png"),
	"Small goebie burial charm": require("./imgs/Small_goebie_burial_charm.png"),
	"Starved ancient effigy": require("./imgs/Starved_ancient_effigy.png"),
	"Taijitu": require("./imgs/Taijitu.png"),
	"Tangled fishbowl": require("./imgs/Tangled_fishbowl.png"),
	"Unfocused damage enhancer": require("./imgs/Unfocused_damage_enhancer.png"),
	"Unfocused reward enhancer": require("./imgs/Unfocused_reward_enhancer.png"),
	"Unstable air rune": require("./imgs/Unstable_air_rune.png")
}

const items: IItem[] = [
		{
			name: "Uncharted island map",
			cost: "800,000",
			quantity: "1",
			use: "Allows travel to an uncharted island with the chance of 3-6 special resources at the cost of no supplies. In addition, players may also rarely receive a Uncharted island map (red).",
		},
		{
			name: "Barrel of bait",
			cost: "50,000",
			quantity: "1",
			use: "10% chance to gain an additional catch for 3 minutes."
		},
		{
			name: "Tangled fishbowl",
			cost: "50,000",
			quantity: "1",
			use: "5% Fishing experience boost for 3 minutes."
		},
		{
			name: "Small goebie burial charm",
			cost: "50,000",
			quantity: "1",
			use: "50 Goebie Reputation or 50 Teci."
		},
		{
			name: "Goebie burial charm",
			cost: "100,000",
			quantity: "1",
			use: "100 Goebie Reputation or 100 Teci."
		},
		{
			name: "Menaphite gift offering (small)",
			cost: "100,000",
			quantity: "1",
			use: "Variety of rewards."
		},
		{
			name: "Menaphite gift offering (Medium)",
			cost: "300,000",
			quantity: "1",
			use: "Variety of rewards."
		},
		{
			name: "Unstable air rune",
			cost: "250,000",
			quantity: "1",
			use: "5,000 Runespan points."
		},
		{
			name: "Anima crystal",
			cost: "150,000",
			quantity: "1",
			use: "500 faction reputation (Heart of Gielinor)."
		},
		{
			name: "Slayer VIP Coupon",
			cost: "200,000",
			quantity: "1",
			use: "Redeemed for 1-7 Slayer VIP tickets."
		},
		{
			name: "D&D token (daily)",
			cost: "250,000",
			quantity: "1",
			use: "One-time use to reset a daily (D&D)."
		},
		{
			name: "Unfocused damage enhancer",
			cost: "500,000",
			quantity: "1",
			use: "Allows choice of any damage enhancer at the cost of lower charges."
		},
		{
			name: "Sacred clay",
			cost: "600,000",
			quantity: "1",
			use: "50-100 Stealing Creation points."
		},
		{
			name: "Shattered anima",
			cost: "750,000",
			quantity: "500,000-2,000,000",
			use: "Currency for Shattered Worlds reward shop."
		},
		{
			name: "Anima crystal",
			cost: "150,000",
			quantity: "1",
			use: "500 faction reputation (Heart of Gielinor)."
		},
		{
			name: "Advanced pulse core",
			cost: "800,000",
			quantity: "1-3",
			use: "50% extra experience that does not stack with other sources of bonus experience, up to the equivalent of a Medium prismatic lamp."
		},
		{
			name: "Livid plant",
			cost: "1,000,000",
			quantity: "1",
			use: "10,000 to 40,000 produce points."
		},
		{
			name: "Gift for the Reaper",
			cost: "1,250,000",
			quantity: "1",
			use: "20 Reaper points."
		},
		{
			name: "Silverhawk down",
			cost: "1,500,000",
			quantity: "50-100",
			use: "Used to charge Silverhawk boots."
		},
		{
			name: "Large goebie burial charm",
			cost: "150,000",
			quantity: "1",
			use: "150 Goebie Reputation or 150 Teci."
		},
		{
			name: "Message in a bottle",
			cost: "200,000",
			quantity: "1",
			use: "One time choice between three Deep Sea Fishing boosts."
		},
		{
			name: "Dragonkin lamp",
			cost: "250,000",
			quantity: "1",
			use: "Rewards a set amount of experience and a 1/100 chance to obtain Effy."
		},
		{
			name: "Dungeoneering Wildcard",
			cost: "400,000",
			quantity: "1-3",
			use: "Consuming the card inside Daemonheim rewards 50% extra experience and tokens."
		},
		{
			name: "Menaphite gift offering (large)",
			cost: "500,000",
			quantity: "1",
			use: "Variety of rewards."
		},
		{
			name: "Taijitu",
			cost: "800,000",
			quantity: "3-5",
			use: "Secondary currency used for the Waiko Reward Shop."
		},
		{
			name: "D&D token (weekly)",
			cost: "400,000",
			quantity: "1",
			use: "One-time use to reset a weekly (D&D)."
		},
		{
			name: "D&D token (monthly)",
			cost: "1,000,000",
			quantity: "1",
			use: "One-time use to reset a monthly (D&D)."
		},
		{
			name: "Starved ancient effigy",
			cost: "1,000,000",
			quantity: "1",
			use: "Rewards a set amount of experience in multiple skills and a 1/100 chance to obtain Effy."
		},
		{
			name: "Harmonic dust",
			cost: "2,000,000",
			quantity: "500-1000",
			use: "Used for creating crystal tools."
		},
		{
			name: "Crystal triskelion",
			cost: "2,000,000",
			quantity: "1",
			use: "Deposited in a cliff face south of Rellekka to obtain a clue scroll (elite) and variety of other rewards."
		},
		{
			name: "Deathtouched dart",
			cost: "5,000,000",
			quantity: "1",
			use: "Insta-kill majority of all NPCs."
		},
		{
			name: "Unfocused reward enhancer",
			cost: "10,000,000",
			quantity: "1",
			use: "Allows choice of any reward enhancer at the cost of lower charges."
		}
	]

const itemIDs = [
	'Barrel of bait', 'Tangled fishbowl', 'Broken fishing rod', 'Message in a bottle',
	'Small goebie burial charm', 'Goebie burial charm', 'Large goebie burial charm',
	'Menaphite gift offering (small)', 'Menaphite gift offering (medium)', 'Menaphite gift offering (large)',
	'D&D token (daily)', 'D&D token (weekly)', 'D&D token (monthly)',
	'Unstable air rune', 'Anima crystal', 'Taijitu', 'Gift for the Reaper', 'Slayer VIP Coupon',
	'Shattered anima', 'Livid plant', 'Sacred clay',
	'Unfocused damage enhancer', 'Unfocused reward enhancer',
	'Silverhawk down', 'Advanced pulse core', 'Dungeoneering Wildcard',
	'Dragonkin lamp', 'Starved ancient effigy', 'Harmonic dust',
	'Crystal triskelion', 'Deathtouched dart'
]

const slotCitemMap = [
    'Dragonkin lamp', 'D&D token (weekly)', 'Deathtouched dart',
	'Menaphite gift offering (large)', 'Starved ancient effigy', 'Large goebie burial charm',
	'Crystal triskelion', 'Taijitu', 'Message in a bottle',
	'Unfocused reward enhancer', 'Dungeoneering Wildcard',	'Harmonic dust',
	'D&D token (monthly)'
]

const slotArotation = [
	18, 22, 17, 2, 15, 8, 1, 9, 8, 5, 11, 18, 21, 25, 2, 14, 25, 17, 14, 3,
	8, 5, 9, 21, 5, 11, 21, 19, 25, 17, 14, 3, 17, 2, 3, 5, 1, 9, 21, 19,
	11, 18, 19, 24, 2, 14, 22, 1, 14, 3, 5, 1, 9, 21, 8, 20, 21, 19, 20, 14,
	14, 3, 1, 17, 3, 5, 17, 6, 21, 19, 20, 14, 19, 24, 14, 18, 22, 1, 17, 6,
	5, 1, 6, 19, 8, 20, 18, 21, 20, 14, 18, 22, 1, 17, 15, 8, 17, 6, 8, 5,
	20, 14, 21, 25, 14, 18, 25, 17, 17, 6, 8, 5, 6, 19, 5, 11, 18, 21, 25, 17
]

const slotBrotation = [
	18, 22, 17, 8, 14, 3, 15, 19, 19, 24, 2, 5, 18, 22, 3, 8, 8, 20, 18, 17,
	21, 25, 22, 5, 5, 11, 21, 2, 19, 24, 25, 1, 1, 9, 19, 14, 5, 11, 24, 17,
	17, 6, 8, 18, 1, 9, 11, 14, 14, 3, 5, 21, 17, 6, 9, 18, 18, 22, 17, 8,
	2, 15, 6, 21, 21, 25, 2, 5, 14, 3, 15, 19, 19, 24, 14, 1, 21, 25, 3, 8,
	8, 20, 18, 17, 19, 24, 25, 1, 1, 9, 21, 2, 8, 20, 24, 17, 17, 6, 8, 18,
	5, 11, 20, 2, 2, 15, 5, 21, 1, 9, 11, 14, 14, 3, 1, 19, 2, 15, 9, 18
]

const slotCrotation = [
	1, 1, 2, 1, 3, 4, 9, 1, 8, 6, 6, 6, 5, 7, 8, 5, 7, 9, 7, 2,
	4, 4, 1, 4, 6, 10, 4, 11, 7, 2, 5, 5, 9, 12, 2, 9, 3, 12, 4, 12
]

const slotCinitial = [
	1, 8, 3, 7, 4, 11, 10, 13, 12, 2, 9, 5, 6
]

function rotation_days(interval: number, rotation_count: number, offset: number){
	var seconds_in_day = 24 * 60 * 60
	var now = new Date();
	
	var days_after_utc = Math.round(now.getTime() / seconds_in_day).toString().substring(0, 5);
	var days_into_period = (parseInt(days_after_utc) + offset) % (interval * rotation_count)

	var rotation = Math.floor(days_into_period / interval) + 1
	var days_until_next_rotation = interval - days_into_period % interval

	return rotation;
}

function slotAB(rot: number[], offsetFromNow){
	var rotation = rotation_days(1, rot.length, 39+(offsetFromNow || 0))
	
	var rotationWithOffset = (rotation - 1);
	var name = itemIDs[(rot[rotationWithOffset]-1)];
	
	var item = items.find( obj => obj.name === name);
	return item;
}

function slotA(offsetFromNow){
	return slotAB(slotArotation, offsetFromNow);
}
function slotB(offsetFromNow){
	return slotAB(slotBrotation, offsetFromNow);
}

function slotC(offsetFromNow){
	var rotation = rotation_days(1, slotCrotation.length, -1+(offsetFromNow || 0))
	var current = rotation_days(40, 13, -1+(offsetFromNow || 0))

	var rotationWithOffset = (rotation - 1);
	var currentItemId = slotCrotation[rotationWithOffset]

	var outputItemId = ((slotCinitial[(currentItemId - 1)] + current) % slotCitemMap.length) + 1

	var itemName = slotCitemMap[(outputItemId - 1)]
	var item = items.find( obj => obj.name === itemName);

	return item
}

export function start() {
	var currentItems: IItem[] = [items[0], slotA(0), slotB(0), slotC(0)]

	var $output = $('#output');
	var $table = $('<table id="outputtable">');

		$table.append(
			$('<tr>').append(
				$('<th>').text('Item'),
				$('<th>').text('Cost'),
				$('<th>').text('Quantity'),
				$('<th>').text('Use')
			));

		$.each(currentItems, function(index, value: IItem){
			$table.append(
				$('<tr id="plankrow">').append(
					$('<td class="imgcell">').append($('<img>').attr('src', src_imgs[value.name]?.default)),
					$('<td class="qtycell">').append($('<img>').attr('src', src_imgs["coins"].default)).append(" " + value.cost.toString()),
					$('<td class="qtycell">').text(value.quantity),
					$('<td class="qtycell">').text(value.use)
				)
			);
		});		

		$output.empty().append($table);
}

if (window.alt1) {
	// Tell alt1 about the app (this makes alt1 show the add app button when running inside the embedded browser)
	// Also updates app settings if they are changed
	alt1.identifyAppUrl("./appconfig.json");
}