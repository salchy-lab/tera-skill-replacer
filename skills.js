module.exports = [
{ job: 9, group: 1, enabled: true, to: 420101, instance: true, replace: true}, //Gunner -> Blast to Detonate (Apex)
{ job: 9, group: 5, enabled: true, to: 51021, combo: true, replace: true}, //Gunner -> Burst Fire -> Targeted Burst Fire
{ job: 9, group: 9, enabled: true, adv: false, to: 91012, to_adv: 93112, instance: false, replace: true}, //Gunner -> Mana Missiles
{ job: 9, group: 13, enabled: true, to: 440101, instance: false, replace: true}, //Gunner -> Balders -> Apex
{ job: 9, group: 40, enabled: true, dash: true, to: 400101, to_dash: 400102, instance: true, replace: true}, //Gunner -> No CD I-frame
{ job: 9, group: 43, enabled: false, to: 430151, instance: true, replace: true}, //Gunner -> Remote Trigger -> Apex Remote Trigger (No CD)
{ job: 10, group: 1, enabled: true, to: 21201, instance: true, replace: true}, //Brawler -> Punch to Stagger
{ job: 10, group: 4, enabled: true, to: 41130, instance: true, replace: true}, //Brawler -> Ground Punder SpeedCast
{ job: 10, group: 22, enabled: true, to: 220130, instance: true, replace: true}, //Brawler -> Flying Kick SpeedCast
{ job: 10, group: 26, enabled: true, to: 260102, instance: true, replace: true}, //Brawler -> Rhythmic Blows No CD
{ job: 10, group: 40, enabled: true, to: 400100, instance: true, replace: true}, //Brawler -> No CD I-Frame
{ job: 4, group: 34, enabled: true, to: 340230, instance: true, replace: true}, //Sorc -> Mana Boost (not for replacing purposes)
{ job: 4, group: 6, enabled: false, to: 320100, instance: false, replace: true}, //Sorc -> Fireblast -> Apex
{ job: 4, group: 4, enabled: true, to: 330112, instance: true, replace: true}, //Sorc -> Arcane Pulse -> Apex
{ job: 12, group: 8, enabled: true, to: 85101, instance: true, replace: true}, //Valk -> TitansBane No CD
{ job: 12, group: 15, enabled: true, to: 245103, instance: true, replace: true}, //Valk -> WindSlash to Twilight Waltz 2nd Hit No CD
{ job: 12, group: 16, enabled: true, to: 166230, instance: true, replace: true}, //Valk -> RuneBurst SpeedCast
{ job: 12, group: 23, enabled: true, to: 235102, instance: true, replace: true}, //Valk -> Gungnir's Bite No CD
{ job: 12, group: 24, enabled: true, to: 245102, instance: true, replace: true}, //Valk -> Twilight Waltz 1st Hit No CD
{ job: 12, group: 25, enabled: true, to: 250132, instance: true, replace: true}, //Valk -> Godsfall 2nd hit No CD (no buff)
{ job: 0, group: 1, enabled: true, to: 11200, instance: true, replace: true}, //Warrior -> always 1st hit of auto attack
{ job: 0, group: 4, enabled: true, to: 360130, instance: true, replace: true}, //Warrior -> Rain of Blows -> Deadly Gamble Buff + SpeedCast
{ job: 0, group: 19, enabled: true, to: 191101, instance: true, replace: true}, //Warrior -> Rising Fury SpeddCast
{ job: 0, group: 29, enabled: true, to: 370130, instance: true, replace: true}, //Warrior -> Blade Draw -> Deadly Gamble Buff + SpeedCast
{ job: 0, group: 30, enabled: true, to: 380130, instance: true, replace: true}, //Warrior -> Scythe Buff + SpeedCast
{ job: 0, group: 31, enabled: true, to: 310830, instance: true, replace: true}, //Warrior -> Reaping Slash SpeedCast
{ job: 0, group: 36, enabled: true, to: 360130, instance: true, replace: true}, //Warrior -> Deadly Gamble Rain of Blows SpeedCast
{ job: 0, group: 37, enabled: true, to: 370130, instance: true, replace: true}, //Warrior -> Deadly Gamble Blade Draw SpeedCast
{ job: 0, group: 38, enabled: true, to: 380130, instance: true, replace: true}, //Warrior -> Deadly Gamble Scythe SpeedCast
{ job: 0, group: 40, enabled: true, to: 400122, instance: true, replace: true}, //Warrior -> Blade Waltz No CD
{ job: 0, group: 41, enabled: true, to: 410131, instance: true, replace: true}, //Warrior -> Aerial Scythe No CD (2nd Hit)
{ job: 0, group: 42, enabled: true, to: 420130, instance: true, replace: true}, //Warrior -> Blade Frensy SpeedCast
{ job: 6, group: 3, enabled: true, to: 30730, instance: true, replace: true}, //Priest -> Healing Circle Buff + SpeedCast
{ job: 6, group: 11, enabled: true, pve: false, to: 111101, to_pve: 111102, instance: true, replace: true}, //Priest -> Metamorphic Blast -> SpeedCast (set pve to true for Apex buff)
{ job: 6, group: 16, enabled: true, pve: false, to: 161111, to_pve: 161121, instance: true, replace: true}, //Priest -> Shocking Implosion -> SpeedCast (set pve to true for Apex buff)
{ job: 6, group: 27, enabled: true, pve: false, to: 271111, to_pve: 271121, instance: true, replace: true}, //Priest -> Final Reprisal -> SpeedCast (set pve to true for Apex buff)
{ job: 6, group: 40, enabled: true, pve: false, to: 401010, to_pve: 401020, instance: true, replace: true}, //Priest -> Zenobias Vortex -> SpeedCast (set pve to true for Apex buff)
{ job: 6, group: 42, enabled: true, to: 0, instance: true, replace: false}, //Priest -> HolyBurst
{ job: 11, group: 1, enabled: true, to: 150732, instance: true, replace: true}, //Ninja -> Auto Attack to Harmonious Burst Fire (No CD)
{ job: 11, group: 2, enabled: true, to: 20100, instance: true, replace: true}, //Ninja -> No CD I-Frame
{ job: 11, group: 3, enabled: true, to: 30840, instance: true, replace: true}, //Ninja -> Leaves on the Wind -> Apex Buff
{ job: 11, group: 8, enabled: true, to: 80252, instance: true, replace: true}, //Ninja -> Fire Avalanche -> Apex Buff
{ job: 11, group: 21, enabled: true, to: 210113, instance: true, replace: true}, //Ninja -> Boomerang Shuriken -> Apex Buff (No CD)
{ job: 11, group: 22, enabled: true, to: 220140, instance: true, replace: true}, //Ninja -> Quick Attack -> Apex Buff
{ job: 2, group: 1, enabled: true, to: 11200, instance: true, replace: true}, //Slayer -> always 1st hit of auto attack
{ job: 2, group: 2, enabled: true, to: 21330, instance: true, replace: true}, //Slayer -> KDS SpeedCast
{ job: 2, group: 4, enabled: true, to: 40200, instance: true, replace: true}, //Slayer -> No CD I-Frame
{ job: 2, group: 8, enabled: true, to: 81130, instance: true, replace: true}, //Slayer -> OHS SpeedCast
{ job: 2, group: 12, enabled: true, to: 121102, instance: true, replace: true}, //Slayer -> HT SpeedCast
{ job: 2, group: 23, enabled: true, to: 230830, instance: true, replace: true}, //Slayer -> MS SpeedCast
{ job: 2, group: 24, enabled: true, to: 240830, instance: true, replace: true}, //Slayer -> Eviscerate SpeedCast
{ job: 2, group: 25, enabled: true, to: 250130, instance: true, replace: true}, //Slayer -> UOHS SpeedCast
{ job: 2, group: 26, enabled: true, to: 260130, instance: true, replace: true}, //Slayer -> Punishing Blow SpeedCast
{ job: 8, group: 3, enabled: true, to: 30341, instance: true, replace: true}, //Reaper -> Double Shear SpeedCast
{ job: 8, group: 4, enabled: true, to: 40331, instance: true, replace: true}, //Reaper -> Sundering Strike -> Apex
{ job: 8, group: 5, enabled: true, to: 50332, instance: true, replace: true}, //Reaper -> Grim Strike SpeedCast
{ job: 8, group: 6, enabled: true, to: 60242, instance: true, replace: true}, //Reaper -> Death Spiral No CD
{ job: 8, group: 8, enabled: true, to: 80230, instance: true, replace: true}, //Reaper -> Whipsaw SpeedCast
{ job: 8, group: 10, enabled: true, to: 100230, instance: true, replace: true}, //Reaper -> Pendulum Strike SpeedCast
{ job: 8, group: 11, enabled: true, to: 110203, instance: true, replace: true}, //Reaper -> Shadow Lash SpeedCast + No CD
{ job: 8, group: 12, enabled: true, to: 120231, instance: true, replace: true}, //Reaper -> Shadow Burst -> Apex
{ job: 8, group: 15, enabled: true, to: 150380, instance: true, replace: true}, //Reaper -> Retribution -> Insta 2nd Hit (2x2nd Hit)
{ job: 8, group: 40, enabled: true, to: 400100, instance: true, replace: true}, //Reaper -> No CD I-Frame
{ job: 1, group: 3, enabled: true, to: 30200, instance: true, replace: true}, //Lancer -> Onslaught SpeedCast
{ job: 1, group: 5, enabled: true, to: 50130, instance: true, replace: true}, //Lancer -> Shield Bash SpeedCast
{ job: 1, group: 10, enabled: true, to: 100330, instance: true, replace: true}, //Lancer -> Debilitate SpeedCast
{ job: 1, group: 13, enabled: true, to: 131130, instance: true, replace: true}, //Lancer -> Spring Attack SpeedCast
{ job: 1, group: 18, enabled: true, to: 181101, instance: true, replace: true}, //Lancer -> Shield Barrage SpeedCast + No CD
{ job: 1, group: 25, enabled: true, to: 251030, instance: true, replace: true}, //Lancer -> Wallop SpeedCast
{ job: 1, group: 28, enabled: true, to: 280101, instance: true, replace: true} //Lancer -> Super Leap SpeedCast
]