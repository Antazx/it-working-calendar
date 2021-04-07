function isPublicHoliday(date) {
    let year = date.getFullYear();
    let holidays = italianHolidays(year);
    for (let publicHoliday of holidays) {
        if (date.getTime() === publicHoliday.getTime()) return true;
    }

    return false;
}

function getEaster(year) {
    let f = Math.floor,
        // Golden Number - 1
        G = year % 19,
        C = f(year / 100),
        // related to Epact
        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
        // number of days from 21 March to the Paschal full moon
        I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
        // weekday for the Paschal full moon
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        // number of days from 21 March to the Sunday on or before the Paschal full moon
        L = I - J,
        month = 3 + f((L + 40) / 44),
        day = L + 28 - 31 * f(month / 4);

    return { month, day };
}

function italianHolidays(year) {
    let newYear = new Date(year, 0, 1);
    let epifania = new Date(year, 0, 6);
    let liberationDay = new Date(year, 3, 25);
    let labourDay = new Date(year, 4, 1);
    let whitMonday = new Date(year, 4, 24);
    let republicDay = new Date(year, 5, 2);
    let saintPeterPaul = new Date(year, 5, 29);
    let assumptionDay = new Date(year, 7, 15);
    let allSaintsDay = new Date(year, 10, 1);
    let stAmbrosse = new Date(year, 11, 7);
    let immacolata = new Date(year, 11, 8);
    let natale = new Date(year, 11, 25);
    let santoStefano = new Date(year, 11, 26);

    let easter = getEaster(year);
    let easterMonday = new Date(year, easter.month - 1, easter.day + 1);
    let easterSaturday = new Date(year, easter.month - 1, easter.day - 1);

    return [
        newYear,
        epifania,
        easterSaturday,
        easterMonday,
        liberationDay,
        labourDay,
        whitMonday,
        republicDay,
        saintPeterPaul,
        assumptionDay,
        allSaintsDay,
        stAmbrosse,
        immacolata,
        natale,
        santoStefano
    ];
}

module.exports = isPublicHoliday;
