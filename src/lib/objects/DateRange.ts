import Utils from '../core/Utils';

export class DateRange {
	constructor(
		public readonly from: Date,
		public readonly to: Date,
	) {}

	toMapISO(): { from: string, to: string } {
		return {
			from: this.from.toISOString(),
			to: this.to.toISOString(),
		};
	}

	static today(): DateRange {
		return new DateRange(
			Utils.resetedTimeDate(new Date()),
			Utils.maxTimeDate(new Date()),
		);
	}

	static lastSevenDays(): DateRange {
		const today = Utils.resetedTimeDate(new Date());
		const lastWeek = new Date(today);
		lastWeek.setDate(lastWeek.getDate() - 7);
		return new DateRange(lastWeek, today);
	}

	static thisMonth(): DateRange {
		const date = new Date();
		const y = date.getFullYear();
		const m = date.getMonth();
		const firstDay = new Date(y, m, 1);
		const lastDay = new Date(y, m + 1, 0);
		lastDay.setDate(lastDay.getDate() + 1);

		return new DateRange(firstDay, lastDay);
	}

	static lastMonth(): DateRange {
		const date = new Date();
		date.setMonth(date.getMonth() - 1);
		const y = date.getFullYear();
		const m = date.getMonth();
		const firstDay = new Date(y, m, 1);
		const lastDay = new Date(y, m + 1, 0);
		lastDay.setDate(lastDay.getDate() + 1);

		return new DateRange(firstDay, lastDay);
	}
}
