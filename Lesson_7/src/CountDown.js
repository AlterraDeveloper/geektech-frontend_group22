import moment from "moment";

export default class CountDown {
  constructor(endDate) {
    this.endDate = moment(endDate, "DD.MM.YYYY HH:mm");
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  calculate() {
    const dateNow = moment();
    //   console.log(this.endDate.format("DD MMMM YYYY HH:mm"));
    // console.log(dateNow.format("DD MMMM YYYY HH:mm:ss"));

    const diffDate = moment(this.endDate - dateNow);
    this.days = diffDate.format("DD");
    this.hours = diffDate.format("HH");
    this.minutes = diffDate.format("mm");
    this.seconds = diffDate.format("ss");
    // console.log(moment(diffDate).format("DD MMMM YYYY HH:mm:ss"));
  }
}

// {
//     endDate: "08.01.2023",
//      days: 0,
//      hours: 0,
//      ...
// }
