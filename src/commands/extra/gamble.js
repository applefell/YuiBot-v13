function fruit(ran) {
    switch(ran) {
    case 1:
        return '🍎';
    case 2:
        return '🍎';
    case 3:
        return '🍎';
    case 4:
        return '🍎';
    case 5:
        return '🍎';
    case 6:
        return '🍒';
    case 7:
        return '🍒';
    case 8:
        return '🍒';
    case 9:
        return '🍒';
    case 10:
        return '🍉';
    case 11:
        return '🍉';
    case 12:
        return '🍉';
    case 13:
        return '🧀';
    case 14:
        return '🧀';
    case 15:
        return '🍔';
    };
};

function value(ran) {
    switch(ran) {
    case 1:
        return 1;
    case 2:
        return 1;
    case 3:
        return 1;
    case 4:
        return 1;
    case 5:
        return 1;
    case 6:
        return 1;
    case 7:
        return 1;
    case 8:
        return 2;
    case 9:
        return 2;
    case 10:
        return 2;
    case 11:
        return 3;
    case 12:
        return 3;
    case 13:
        return 3;
    case 14:
        return 4;
    case 15:
        return 5;
    };
};

function payout(ran1, ran2, ran3) {
    if (ran1 == 1 && ran2 == 1 && ran3 == 1) {
		return 1.25;
	} else if (ran1 == 2 && ran2 == 1 && ran3 == 1) {
		return 1;
	} else if (ran1 == 3 && ran2 == 1 && ran3 == 1) {
		return 1;
	} else if (ran1 == 4 && ran2 == 1 && ran3 == 1) {
		return 1;
	} else if (ran1 == 5 && ran2 == 1 && ran3 == 1) {
		return 1;
	} else if (ran1 == 1 && ran2 == 2 && ran3 == 1) {
		return 1;
	} else if (ran1 == 1 && ran2 == 3 && ran3 == 1) {
		return 1;
	} else if (ran1 == 1 && ran2 == 4 && ran3 == 1) {
		return 1;
	} else if (ran1 == 1 && ran2 == 5 && ran3 == 1) {
		return 1;
	} else if (ran1 == 1 && ran2 == 1 && ran3 == 2) {
		return 1;
	} else if (ran1 == 1 && ran2 == 1 && ran3 == 3) {
		return 1;
	} else if (ran1 == 1 && ran2 == 1 && ran3 == 4) {
		return 1;
	} else if (ran1 == 1 && ran2 == 1 && ran3 == 5) {
		return 1;
	} else if (ran1 == 2 && ran2 == 2 && ran3 == 2) {
		return 1.5;
	} else if (ran1 == 2 && ran2 == 2 && ran3 == 1) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 2 && ran3 == 3) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 2 && ran3 == 4) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 2 && ran3 == 5) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 1 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 3 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 4 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 2 && ran2 == 5 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 1 && ran2 == 2 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 3 && ran2 == 2 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 4 && ran2 == 2 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 5 && ran2 == 2 && ran3 == 2) {
		return 1.1;
	} else if (ran1 == 3 && ran2 == 3 && ran3 == 3) {
		return 1.75;
	} else if (ran1 == 1 && ran2 == 3 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 2 && ran2 == 3 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 4 && ran2 == 3 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 5 && ran2 == 3 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 1 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 2 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 4 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 5 && ran3 == 3) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 3 && ran3 == 1) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 3 && ran3 == 2) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 3 && ran3 == 4) {
		return 1.2;
	} else if (ran1 == 3 && ran2 == 3 && ran3 == 5) {
		return 1.2;
	} else if (ran1 == 4 && ran2 == 4 && ran3 == 4) {
		return 2;
	} else if (ran1 == 1 && ran2 == 4 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 2 && ran2 == 4 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 3 && ran2 == 4 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 5 && ran2 == 4 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 1 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 2 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 3 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 5 && ran3 == 4) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 4 && ran3 == 1) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 4 && ran3 == 2) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 4 && ran3 == 3) {
		return 1.3;
	} else if (ran1 == 4 && ran2 == 4 && ran3 == 5) {
		return 1.3;
	} else if (ran1 == 5 && ran2 == 5 && ran3 == 5) {
		return 3;
	} else {
		return 0;
	};
};

function color(mult) {
    if (mult === 0) {
        return '#ff0000';
    } else {
        return '#1dde47';
    };
};

function title(ran) {
    switch(ran) {
    case 1:
        return 'I sure do love gambling';
    case 2:
        return 'I hope I didn\'t lose anything';
    case 3:
        return 'Come on jackpot';
    };
};

module.exports = { fruit, value, payout, color, title };