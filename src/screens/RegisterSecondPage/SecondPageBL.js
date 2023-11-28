export const generateSecurity = (age, year, carValue) => {
    let baseValue = 1000
    let ageResult = 0
    let yearResult = 0
    let total = 0

    if (+carValue > 100000) baseValue = 2000
    if (+carValue > 50000 && +carValue <= 10000) baseValue = 1500

    if (+age < 22) {
        ageResult = (baseValue * 0.20)
        total = baseValue + ageResult
    }
    else if (+age >= 22 && +age < 28) {
        ageResult = (baseValue * 0.18)
        total = baseValue + ageResult
    }
    else if (+age >= 29) {
        ageResult = (baseValue * 0.15)
        total = baseValue - ageResult
    }

    if (+year < 2000) {
        yearResult = (total * 0.30)
        total += yearResult
    }
    else if (+year >= 2000 && +year <= 2009) {
        yearResult = (total * 0.15)
        total += yearResult
    }
    else if (+year >= 2016) {
        yearResult = (total * 0.10)
        total -= yearResult
    }

    return { total, ageResult, yearResult, baseValue }
}