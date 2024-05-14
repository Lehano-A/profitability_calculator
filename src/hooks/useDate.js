function useDate() {
  function getCurrentYearMonthDay() {
    const date = new Date()
    return `${date.getFullYear()}-${transformMonth(date.getMonth())}-${transformDay(date.getDate())}`
  }

  // получить конечную дату инвестиционного периода
  // (происходит при монтировании и при изменении пользователем начальной даты)
  function getEndPeriod(startDate, valueInvestmentPeriod) {
    if (startDate === null) {
      startDate = new Date()
    }

    const endDate = getNewDateIncludeInvestmentPeriod(startDate, valueInvestmentPeriod)

    const { year, month, day } = decomposeDate(endDate)

    return `${year}-${transformMonth(month)}-${transformDay(day)}`
  }

  function getNewDateIncludeInvestmentPeriod(startDate, valueInvestmentPeriod) {
    const day = startDate.getDate()
    const month = startDate.getMonth()
    const year = startDate.getFullYear()
    const totalMonthsWithInvestmentPeriod = month + Number(valueInvestmentPeriod) // в полученной на вход дате, к месяцу прибавляем количество инвестиционных месяцев

    const endDate = new Date()
    endDate.setFullYear(year)
    endDate.setMonth(totalMonthsWithInvestmentPeriod + 1)
    endDate.setDate(day)

    checkLastDayEndPeriod(startDate, endDate)
    return endDate
  }

  function checkLastDayEndPeriod(startDate, endDate) {
    const startDay = startDate.getDate()
    const endDay = endDate.getDate()

    if (endDay < startDay) {
      // 2 < 30
      endDate.setDate(1)
    }
  }

  function decomposeDate(inputDate) {
    const year = inputDate.getFullYear()
    const month = inputDate.getMonth()
    const day = inputDate.getDate()

    return { year, month, day }
  }

  function transformDay(day) {
    if (day <= 9) {
      return `0${day}`
    } else {
      return day
    }
  }

  function transformMonth(month) {
    month += 1 // += 1, т.к. счёт месяцев идёт с 0

    if (month <= 9) {
      return `0${month}`
    } else {
      return month
    }
  }

  return {
    getCurrentYearMonthDay,
    getEndPeriod,
  }
}

export default useDate
