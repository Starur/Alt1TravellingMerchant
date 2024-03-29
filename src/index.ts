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
	"Unstable air rune": require("./imgs/Unstable_air_rune.png"),
	"Horn of honour": require("./imgs/Horn_of_honour.png")
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
			name: "Broken fishing rod",
			cost: "50,000",
			quantity: "1",
			use: "5-10% bonus catch rate for 3-30 minutes."
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
			name: "Menaphite gift offering (medium)",
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
		},
		{
			name: "Horn of honour",
			cost: "1,000,000",
			quantity: "1",
			use: "Awards 200 Barbarian Assault Honour Points in a role of the player's choice."
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
	'Crystal triskelion', 'Deathtouched dart', 'Horn of honour'	
]

const slotCitemMap = [
    'Dragonkin lamp', 'D&D token (weekly)', 'Deathtouched dart',
	'Menaphite gift offering (large)', 'Starved ancient effigy', 'Large goebie burial charm',
	'Crystal triskelion', 'Taijitu', 'Message in a bottle',
	'Unfocused reward enhancer', 'Dungeoneering Wildcard',	'Harmonic dust',
	'D&D token (monthly)'
]

const slotArotation = [
	1, 15, 1, 6, 4, 8, 14, 9, 12, 17, 9, 13, 2, 16, 2, 7, 1, 5, 11, 6,
	9, 14, 10, 14, 18, 13, 18, 4, 17, 2, 8, 3, 6, 11, 7, 11, 19, 14, 15, 1,
	14, 18, 5, 19, 7, 12, 8, 12, 16, 11, 12, 17, 15, 19, 6, 1, 4, 9, 5, 9,
	13, 8, 13, 18, 12, 16, 3, 17, 1, 6, 2, 6, 10, 5, 10, 15, 13, 17, 19, 14,
	17, 3, 18, 3, 11, 6, 11, 16, 10, 14, 16, 11, 18, 4, 19, 4, 8, 3, 8, 13,
	7, 11, 17, 12, 15, 1, 16, 1, 5, 19, 5, 10, 4, 8, 14, 9, 16, 2, 13, 17
]

const slotBrotation = [
	1, 15, 1, 1, 14, 9, 19, 14, 3, 17, 18, 18, 12, 7, 17, 12, 1, 15, 1, 1,
	10, 5, 15, 10, 18, 13, 18, 18, 8, 3, 13, 8, 16, 11, 16, 16, 10, 5, 11, 6,
	14, 9, 14, 14, 8, 3, 13, 8, 16, 11, 12, 12, 6, 1, 11, 6, 14, 9, 14, 14,
	4, 18, 9, 4, 12, 7, 12, 12, 2, 16, 7, 2, 10, 5, 10, 10, 4, 18, 5, 19,
	8, 3, 8, 8, 2, 16, 7, 2, 10, 5, 6, 6, 19, 14, 5, 19, 8, 3, 8, 8,
	17, 12, 3, 17, 6, 1, 6, 6, 15, 10, 1, 15, 4, 18, 4, 4, 17, 12, 18, 13
]

const slotABinitial = [
	32, 15, 9, 20, 25, 17, 5, 19, 18, 2, 3, 6, 11, 24, 22, 1, 8, 21, 14
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
	var current = rotation_days(120, slotABinitial.length, 39+(offsetFromNow || 0))

	var currentPos = rot[rotation - 1]
	var outputPos = ((currentPos + current -2) % slotABinitial.length) + 1
	var outputItemId = slotABinitial[outputPos - 1]
	var name = itemIDs[outputItemId - 1]
	
	var item = items.find(obj => obj.name.toLocaleLowerCase() == name.toLocaleLowerCase());

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

function changeClass(id, removeClass, addClass){
	$(id).removeClass(removeClass).addClass(addClass);
}

function hideMinimal(){
	changeClass('#output-minimal', 'shown-table', 'hidden-table');
	changeClass('#output', 'hidden-table', 'shown-table');
	$('#title').show();
}

function showMinimal(){
	changeClass('#output-minimal', 'hidden-table', 'shown-table');
	changeClass('#output', 'shown-table', 'hidden-table');
	$('#title').hide();
	$('input[name="lightweightMode"]').prop("checked", true);
}

export function start() {
	
	var _hidden = window.localStorage.getItem('merchant_settings');
	
	if(_hidden === "minimal" && $('#output-minimal').hasClass('hidden-table')) {
		showMinimal();
	} else {
		hideMinimal();
	}

	$('#lightweight').on('click', function(){
		if ($('#output-minimal').hasClass('hidden-table')) {
			showMinimal();
			window.localStorage.setItem('merchant_settings', "minimal");
		} else {
			hideMinimal();
			window.localStorage.setItem('merchant_settings', "full");
		}
	});

	var notifications = new Notifications();
	var currentItems: IItem[] = [items[0], slotA(0), slotB(0), slotC(0)]
	
	var $output_minimal = $("#output-minimal");
	var $output = $('#output');

	var $table = $('<table id="outputtable">');
	var $table_minimal = $('<table id="outputtable">');

	var _s = window.localStorage.getItem('merchant_notifications');
	var notificationSlotChart: string = "";
	var notificationSlotA: string = "";
	var notificationSlotB: string = "";
	var notificationSlotC: string = "";

	if(_s){
		var lsItems = JSON.parse(_s);
		lsItems.items.forEach(element => {
			notificationSlotChart += items[0].name.toLocaleLowerCase() === element.toLocaleLowerCase() ? "notis" : "";
			notificationSlotA += slotA(0).name.toLocaleLowerCase() === element.toLocaleLowerCase() ? "notis" : "";
			notificationSlotB += slotB(0).name.toLocaleLowerCase() === element.toLocaleLowerCase() ? "notis" : "";
			notificationSlotC += slotC(0).name.toLocaleLowerCase() === element.toLocaleLowerCase() ? "notis" : "";
		});
	}

	$table.append(
		$('<tr>').append(
			$('<th>').text('Item'),
			$('<th>').text('Cost'),
			$('<th>').text('Quantity'),
			$('<th>').text('Use')
		));

	$table_minimal.append(
		$('<tr>').append(
			$('<th colspan="4">').text('Item'),
		));

		$.each(currentItems, function(index, value: IItem){
			var notisClass: string = "";

			switch(index){
				case 0:
					notisClass = notificationSlotChart;
				break;
				case 1:
					notisClass = notificationSlotA;
				break;
				case 2:
					notisClass = notificationSlotB;
				break;
				case 3:
					notisClass = notificationSlotC;
				break;
				default: break;
			}
			$table.append(
				$('<tr id="row">').append(
					$('<td class="imgcell '+notisClass+'">').append($('<img>').attr('src', src_imgs[value.name]?.default)),
					$('<td class="qtycell '+notisClass+'">').append($('<img>').attr('src', src_imgs["coins"].default)).append(" " + value.cost.toString()),
					$('<td class="qtycell '+notisClass+'">').text(value.quantity),
					$('<td class="qtycell '+notisClass+'">').text(value.use)
				)
			);

			$table_minimal.append(
					$('<td class="imgcell '+notisClass+'">').append($('<img>').attr('src', src_imgs[value.name]?.default)),
			);
		});

		$output.empty().append($table);
		$output_minimal.empty().append($table_minimal);
}

if (window.alt1) {
	alt1.identifyAppUrl("./appconfig.json");
}

export function makeNewContract(){
	$('input[type=checkbox]').prop('checked',false);
	window.localStorage.setItem('merchant_notifications', "");
}

function log(...args) {
	args.forEach(arg => console.log(arg))
}

class Notifications {
	constructor() {
		$('#promolinks a').on('click', function(){
			window.open($(this).attr('js_href'), '_blank');
		});

		$('#showsettingsbutton').on('click', function(){
			if ($('#settingscontainer').hasClass('settings-hidden')) {
				$('#settingscontainer').removeClass('settings-hidden').addClass('settings-shown');
				$('#showsettingsbutton').text('Hide settings/notifications');
			} else {
				$('#settingscontainer').removeClass('settings-shown').addClass('settings-hidden');
				$('#showsettingsbutton').text('Handle settings/notifications');
			}
		});

		var $table = $('#notificationstable');
		var sortedItems = items;
		$.each(sortedItems, function(index, value: IItem){
			var $p = $('<tr id="row'+index+'">');
			var parentIndex = (index-1);

			if(index % 2){
				var $p2 = $("#row"+parentIndex);
				$p2.append($("<td class='qtycell'>").append("<input type='checkbox' name='"+value.name+"' value='"+value.name+"'>").append(value.name));
			} else {
				$table.append($p.append($("<td class='qtycell'>").append("<input type='checkbox' name='"+value.name+"' value='"+value.name+"'>").append(value.name)));
			}
		});

		var s: any = {
			items: []
		};

		var _s = window.localStorage.getItem('merchant_notifications');

		if(_s){
			var lsItems = JSON.parse(_s);

			lsItems.items.forEach(element => {
				s.items.push(element);
				$('input[name="'+element+'"]').prop("checked", true);
			});
		}

		$("#notificationstable").on("change", "input[type='checkbox']", function () {
			var $item = $(this);
			if($item.is(":checked")){
				s.items.push($item.val());
				window.localStorage.setItem('merchant_notifications', JSON.stringify(s));
			} else {
				s.items.splice($.inArray($item.val(), s));
				window.localStorage.setItem('merchant_notifications', JSON.stringify(s));
			}
		 });
	}
}

//This will sort your array
function SortByName(a, b){
	var aName = a.name.toLowerCase();
	var bName = b.name.toLowerCase(); 
	return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }