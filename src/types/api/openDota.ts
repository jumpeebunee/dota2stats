export interface Hero {
	id: number;
	name: string;
	localized_name: string;
	primary_attr: string;
	attack_type: string;
	roles: string[];
	img: string;
	icon: string;
	base_health: number;
	base_health_regen: number;
	base_mana: number;
	base_mana_regen: number;
	base_armor: number;
	base_mr: number;
	base_attack_min: number;
	base_attack_max: number;
	base_str: number;
	base_agi: number;
	base_int: number;
	str_gain: number;
	agi_gain: number;
	int_gain: number;
	attack_range: number;
	projectile_speed: number;
	attack_rate: number;
	base_attack_time: number;
	attack_point: number;
	move_speed: number;
	turn_rate: number;
	cm_enabled: boolean;
	legs: number;
	day_vision: number;
	night_vision: number;
	hero_id: number;
	turbo_picks: number;
	turbo_wins: number;
	pro_ban: number;
	pro_win: number;
	pro_pick: number;
	null_pick: number;
	null_win: number;
}

export type IRank = {
	account_id: number;
	score: number;
	steamid: string;
	avatar: string;
	avatarmedium: string;
	avatarfull: string;
	profileurl: string;
	personaname: string;
	last_login: string;
	full_history_time: string;
	cheese: number;
	fh_unavailable: boolean;
	loccountrycode: string;
	rank_tier: number;
};

export type IBenchs = {
	gold_per_min: IBench[];
	xp_per_min: IBench[];
	kills_per_min: IBench[];
	last_hits_per_min: IBench[];
	hero_damage_per_min: IBench[];
	hero_healing_per_min: IBench[];
	tower_damage: IBench[];
};

export type IBench = {
	percentile: number;
	value: number;
};

export interface Benchmarks {
	hero_id: number;
	result: IBenchs;
}

export interface Rankings {
	hero_id: number;
	rankings: IRank[];
}
