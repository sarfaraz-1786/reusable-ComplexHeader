import moment from "moment";

export const sortingFunction = (dataToBeSort, sortBy) => {
  dataToBeSort.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }
    if (a[sortBy] < b[sortBy]) {
      return 1;
    }
    return 0;
  });
  return dataToBeSort;
};

export const currentDate = () => {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  const current_date = moment(year + "/" + month + "/" + day).format(
    "DD/MM/YYYY"
  );
  return current_date;
};

export const diffDays = (date1, date2) => {
  let a = moment(date1, "D/M/YYYY");
  let b = moment(date2, "D/M/YYYY");
  let diff_days = b.diff(a, "days");
  return diff_days;
};

export const tConv24 = (time24) => {
  let ts = time24;
  let H = +ts.substr(0, 2);
  let h = H % 12 || 12;
  h = h < 10 ? "0" + h : h;
  let ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};
