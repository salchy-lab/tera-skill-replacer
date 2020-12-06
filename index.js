
let order = {
	order: -Infinity,
	filter: {
		fake: null
	}
};
const fs = require('fs');
const path = require('path');
module.exports = function SalchyReplacer(script) {
	let config= reloadModule('./config.js');
	let skills= reloadModule('./skills.js');
	
	let enabled = config[0].enabled;
	let no_target_prediction = config[0].no_target_prediction;
	let warrior_job = 0;
	let lancer_job = 1;
	let slayer_job = 2;
	let berserker_job = 3;
	let sorc_job = 4;
	let archer_job = 5;
	let priest_job = 6;
	let mystic_job = 7;
	let reaper_job = 8;
	let gunner_job = 9;
	let brawler_job = 10;
	let ninja_job = 11;
	let valk_job = 12;
	
	let warrior_enab = false;
	let lancer_enab = false;
	let slayer_enab = false;
	let berserker_enab = false;
	let sorc_enab = false;
	let archer_enab = false;
	let priest_enab = false;
	let mystic_enab = false;
	let reaper_enab = false;
	let gunner_enab = false;
	let brawler_enab = false;
	let ninja_enab = false;
	let valk_enab = false;
	
	let myPosition = null;
	let myAngle = null;
	let cid;
	let model;
	let job;

	
	script.command.add('salchyreplacer', (arg) => {
		
		switch (arg) {

			case "reload": {
				config= reloadModule('./config.js');
				skills= reloadModule('./skills.js');
				enabled = config[0].enabled;
				no_target_prediction = config[0].no_target_prediction;
				script.command.message('Script configuration reloaded');
				break;
			}		
			default: {
				enabled = !enabled;
				script.command.message(`Salchy's Skill Replacer Rework is now ${(enabled) ? 'en' : 'dis'}abled.`);
			}
		}
	});

	script.hook('S_LOGIN', 14, packet => {

		warrior_enab = false;
		lancer_enab = false;
		slayer_enab = false;
		berserker_enab = false;
		sorc_enab = false;
		archer_enab = false;
		priest_enab = false;
		mystic_enab = false;
		reaper_enab = false;
		gunner_enab = false;
		brawler_enab = false;
		ninja_enab = false;
		valk_enab = false;
		cid = packet.gameId;
		model = packet.templateId;
		job = (model - 10101) % 100;
		warrior_enab = [warrior_job].includes(job);
		lancer_enab = [lancer_job].includes(job);
		slayer_enab = [slayer_job].includes(job);
		berserker_enab = [berserker_job].includes(job);
		sorc_enab = [sorc_job].includes(job);
		archer_enab = [archer_job].includes(job);
		priest_enab = [priest_job].includes(job);
		mystic_enab = [mystic_job].includes(job);
		reaper_enab = [reaper_job].includes(job);
		gunner_enab = [gunner_job].includes(job);
		brawler_enab = [brawler_job].includes(job);
		ninja_enab = [ninja_job].includes(job);
		valk_enab = [valk_job].includes(job);
	});
	script.hook('S_SPAWN_ME', 3, packet => {
		myPosition = packet.loc;
		myAngle = packet.w;
	});	

	script.hook('C_START_TARGETED_SKILL', 7, { order: -100 }, ({ skill, loc, w, targets }) => {
		
		if (!enabled) return;
		if(!no_target_prediction) return;
		if ((skill.id == 61101) || (skill.id == 41001) || (skill.id == 330100) || (skill.id == 151000) || (skill.id == 151001) || (skill.id ==
				150900) || (skill.id == 150901) || (skill.id == 41000 && valk_enab) || (skill.id == 45000 && valk_enab) || (skill.id == 46000 &&
				valk_enab) || (skill.id == 170300 && slayer_enab)) {
			return;
		}
		if ((!targets[0].gameId) && (skill.id != 161000)) {
			Object.assign(skill, {
				type: 0,
				npc: false,
				huntingZoneId: 0,
				reserved: 0
			});
			script.send('S_CANNOT_START_SKILL', 4, {
				skill
			});
			return false;
		}
	});
	
	script.hook('C_NOTIFY_LOCATION_IN_DASH', 4, order, packet => {
		if (!enabled) return;
		myAngle = packet.w;
		myPosition = packet.loc;
	})
	script.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, order, packet => {
		if (!enabled) return;
		myAngle = packet.w;
		myPosition = packet.loc;
	})
	script.hook('C_START_SKILL', 7, { order: -100 }, packet => {
		if (enabled) {
				let sInfo = getSkillInfo(packet.skill.id);
				for (let s = 0; s < skills.length; s++) {
				if (skills[s].group == sInfo.group && skills[s].job == job && skills[s].enabled) {
						if(skills[s].dash == true) skills[s].to  = skills[s].to_dash;
						if(skills[s].pve == true) skills[s].to  = skills[s].to_pve;
						if(skills[s].adv == true) skills[s].to  = skills[s].to_adv;
						if(skills[s].instance == true) {
							script.toServer('C_START_INSTANCE_SKILL', 7, {
								skill: {
									reserved: 0,
									npc: false,
									type: 1,
									huntingZoneId: 0,
									id: skills[s].replace ? skills[s].to : packet.skill.id
								},
								loc: {
									x: packet.loc.x,
									y: packet.loc.y,
									z: packet.loc.z
								},
								w: packet.w,
								continue: packet.continue,
								targets: [{
									arrowId: 0,
									gameId: packet.target,
									hitCylinderId: 0
								}],
								endpoints: [{
									x: packet.dest.x,
									y: packet.dest.y,
									z: packet.dest.z
								}]
							});
								return false;
								break;
						} else {
							packet.skill.id = skills[s].replace ? skills[s].to : packet.skill.id	
								return true;
								break;
						}
				    }
				 }
		}
	})
	script.hook('C_START_COMBO_INSTANT_SKILL', 6, { order: -100 }, packet => {
		if (enabled) {
				let sInfo = getSkillInfo(packet.skill.id);
				for (let s = 0; s < skills.length; s++) {
				if (skills[s].group == sInfo.group && skills[s].job == job && skills[s].enabled && skills[s].combo) {
					packet.skill.id = skills[s].replace ? skills[s].to : packet.skill.id	
						return true;
						break;
				    }
				 }
		}
	})	
	script.hook('C_PLAYER_LOCATION', 5, (packet) => {
		myPosition = packet.loc;
		myAngle = packet.w;
	});

    function getSkillInfo(id) {
		let nid = id;
        return {
            id: nid,
            group: Math.floor(nid / 10000),
            level: Math.floor(nid / 100) % 100,
            sub: nid % 100
        };
    }

	function reloadModule(mod_to_reload){
		delete require.cache[require.resolve(mod_to_reload)]
		console.log('reloadModule: Reloading ' + mod_to_reload + "...");
		return require(mod_to_reload)
	}
}
