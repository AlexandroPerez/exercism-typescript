class Gigasecond {
  // Your code here
  _date: Date;

  constructor(date: Date) {
    this._date = date;
  }

  date(): Date {
    const gigasecond: number = Math.pow(10, 9);
    //              date in miliseconds    seconds      miliseconds
    return new Date(this._date.getTime() + gigasecond * 1000);
  }
}

export default Gigasecond;
