export const sortTypes = {
	BanPick: (sortType: string) => {
		if (sortType === 'asc') {
			return (a: Hero, b: Hero) => b.pro_pick + b.pro_ban - (a.pro_pick + a.pro_ban);
		}
		return (a: Hero, b: Hero) => a.pro_pick + a.pro_ban - (b.pro_pick + b.pro_ban);
	},
	Pick: (sortType: string) => {
		if (sortType === 'asc') {
			return (a: Hero, b: Hero) => b.pro_pick - a.pro_pick;
		}
		return (a: Hero, b: Hero) => a.pro_pick - b.pro_pick;
	},
	Ban: (sortType: string) => {
		if (sortType === 'asc') {
			return (a: Hero, b: Hero) => b.pro_ban - a.pro_ban;
		}
		return (a: Hero, b: Hero) => a.pro_ban - b.pro_ban;
	},
	Win: (sortType: string) => {
		if (sortType === 'asc') {
			return (a: Hero, b: Hero) =>
				Math.floor((b.pro_win / b.pro_pick) * 100) - Math.floor((a.pro_win / a.pro_pick) * 100);
		}
		return (a: Hero, b: Hero) =>
			Math.floor((a.pro_win / a.pro_pick) * 100) - Math.floor((b.pro_win / b.pro_pick) * 100);
	}
};
