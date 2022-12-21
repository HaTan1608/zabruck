import identity from "lodash/identity";
import isNil from "lodash/isNil";
import omitBy from "lodash/omitBy";
import pickBy from "lodash/pickBy";
import ShortUniqueId from "short-unique-id";

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const numberWithDot = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const numberWithDotChange = (x) => {
  x = x.split(".").join("");
  return x;
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const numberWithCommasChange = (x) => {
  x = x.split(",").join("");
  return x;
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const numberWithCommasV1 = (value) => {
  if (value.length > 0 && value[0] === "0") {
    return value
      .slice(1, value.length)
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
export const numberOnly = (value) => {
  return value.toString().replace(/[a-z]*/g, "");
};

export const change_alias = (alias) => {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
};

// export const calculateProfit = (month, amount, profit) => {
//   let result = 0

//   result = Math.round(((((30 * month) / 365) * profit) / 100) * amount)

//   return result
// }

export const calculateProfit = (day, amount, profit) => {
  let result = 0;

  result = Math.round((((day / 365) * profit) / 100) * amount);

  return result;
};

export const checkIsLinkURL = (str) => {
  return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
    str
  );
};
export const validatephone = (phone) => {
  const expression =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

  return expression.test(phone);
};
export const validatestrongpass = (pass) => {
  const expression = new RegExp("^(((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

  return expression.test(pass);
};
export const validatepass = (pass) => {
  const expression1 = /[A-Za-z\d@$!%*?&]{8,}$/;

  return expression1.test(pass);
};
export const mailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (email) => {
  return mailPattern.test(String(email).toLowerCase());
};

export function removeSign(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"); //eslint-disable-line
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"); //eslint-disable-line
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i"); //eslint-disable-line
  str = str.replace(/ò|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"); //eslint-disable-line
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"); //eslint-disable-line
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"); //eslint-disable-line
  str = str.replace(/đ/g, "d"); //eslint-disable-line
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A"); //eslint-disable-line
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E"); //eslint-disable-line
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I"); //eslint-disable-line
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O"); //eslint-disable-line
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U"); //eslint-disable-line
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y"); //eslint-disable-line
  str = str.replace(/Đ/g, "D"); //eslint-disable-line
  return str;
}

export function removeSignSpace(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"); //eslint-disable-line
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"); //eslint-disable-line
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i"); //eslint-disable-line
  str = str.replace(/ò|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"); //eslint-disable-line
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"); //eslint-disable-line
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"); //eslint-disable-line
  str = str.replace(/đ/g, "d"); //eslint-disable-line
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A"); //eslint-disable-line
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E"); //eslint-disable-line
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I"); //eslint-disable-line
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O"); //eslint-disable-line
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U"); //eslint-disable-line
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y"); //eslint-disable-line
  str = str.replace(/Đ/g, "D"); //eslint-disable-line
  str = str.replace(/\s/g, ""); //eslint-disable-line

  return str;
}

export function validateMobile(phone) {
  let flag = false;
  phone = phone.replace("(+84)", "0"); //eslint-disable-line
  phone = phone.replace("+84", "0"); //eslint-disable-line
  phone = phone.replace("0084", "0"); //eslint-disable-line
  phone = phone.replace(/ /g, ""); //eslint-disable-line
  if (phone !== "") {
    let vnf_regex =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/g; //eslint-disable-line
    if (vnf_regex.test(phone) === true && phone.length === 10) {
      flag = true;
    }
  }
  return flag;
}

export function isValid(string) {
  const re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g; //eslint-disable-line
  return re.test(removeSign(string));
}

export function regx(value) {
  // regx to validate currency number
  return `${value}`
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/[a-zA-Z\^!@#$%^&*()_?-{};:'"/.<>+=-|ƠƯ]/, ""); //eslint-disable-line
}

export const removeFalsy = (input = {}) => {
  return pickBy(input, identity); //eslint-disable-line
};

export const findAndRemove = (arr = [], index = -1) => {
  if (index === -1) return arr;
  arr.splice(index, 1);
  return arr;
};

export function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
}

export const formatNumber = (number) => {
  return new Intl.NumberFormat("vi-VN").format(number);
};

export const removeUnicode = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9 ]/g, "");
};

export const getAddressString = (a, w, d, p) => {
  let ret = "";
  ret += `${a ? a + ", " : ""}`; //eslint-disable-line
  ret += `${w ? w + ", " : ""}`; //eslint-disable-line
  ret += `${d ? d + ", " : ""}`; //eslint-disable-line
  ret += `${p ? p + ", " : ""}`; //eslint-disable-line
  return ret.replace(/,$/, "").replace(/, $/, "");
};

export function validateURL(url) {
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
  return Boolean(url.match(regex));
}

export const postMethod = (input = {}) => {
  return omitBy(input, isNil); //eslint-disable-line
};

export const exportPdf = (file) => {
  const url = window.URL.createObjectURL(
    new Blob([file], { type: "application/pdf" })
  );
  const link = document.createElement("a");
  link.href = url;
  // link.setAttribute('download', 'Report_' + year + month + date + '.xlsx'); //or any other extension
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link.click();
};

export const exportExcel = (file, name = "Report_") => {
  const url = window.URL.createObjectURL(new Blob([file]));
  const link = document.createElement("a");
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  link.href = url;
  link.setAttribute("download", name + year + month + date + ".xlsx"); //eslint-disable-line
  document.body.appendChild(link);
  link.click();
};

export const geneNameBank = (string) => {
  const stringRMS = removeSign(string);
  const convert = stringRMS.split(" ").join("");
  return convert.toUpperCase();
};

export const geneUniId = (id) => {
  const unique = `id${id}_${Math.random().toString(16).slice(2)}`;
  return unique;
};

export const parseCatchError = (error) => {
  const defaultMess = "Lỗi! Vui lòng thử lại";
  return JSON.parse(JSON.stringify(error?.data?.message)) ?? defaultMess;
};

export const phonePattern =
  /((03|05|07|08|09)+([0-9]{8}))\b|((02)+([0-9]{9}))\b|(^(19)+([0-9]{6,8}))\b|(^(18)+([0-9]){6,8})\b/;
export const isVietnamesePhoneNumber = (number) => {
  return phonePattern.test(number);
};

export const isValidPassword = (password) =>
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    password
  );
export const geneUniqueKey = () => {
  const uid = new ShortUniqueId();
  return uid();
};

export const convertNumberWithCommas = (inputValue) => {
  return inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertNumberWithDot = (inputValue) => {
  return inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const convertNumberWithDotChange = (inputValue) => {
  return inputValue.toString().replace(/\$\s?|(,*)/g, "");
};

export const convertSpaceOnURL = (url) => {
  return url.replaceAll(" ", "%20");
};

export const convertToConsucutiveString = (text, connectedSign = "_") => {
  const result = removeSign(text);

  return result
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, connectedSign)
    .slice(0, 255);
};

export const convertToConsucutiveString2 = (text) => {
  const result = removeSign(text);

  return result
    .toLowerCase()
    .trim()
    .replace(/[^\w-]+/g, "")
    .replace("_", "")
    .replace("--", "-")
    .slice(0, 255);
};

export const convertToOnlyNumber = (text) => {
  const result = removeSign(text);

  return result
    .trim()
    .replace(/[^0-9]+/g, "")
    .replace(/[^\w]+/g, "")
    .replace("_", "")
    .replace("-", "")
    .slice(0, 255);
};

export const removeMoreThanOneSpace = (str) => str.replace(/\s\s+/g, " ");

export const joinIntoAddress = (
  provinceName = "",
  districtName = "",
  wardName = "",
  address = ""
) => {
  let joinStr = "";
  const connectStr = ", ";
  if (address) {
    joinStr += address;
    joinStr += connectStr;
  }
  if (wardName) {
    joinStr = `${joinStr} ${wardName}`;
    joinStr += connectStr;
  }
  if (districtName) {
    joinStr = `${joinStr} ${districtName}`;
    joinStr += connectStr;
  }
  if (provinceName) {
    joinStr = `${joinStr} ${provinceName}`;
  }

  if (joinStr && joinStr.lastIndexOf(",") === joinStr.length - 2) {
    joinStr = joinStr.slice(0, joinStr.length - 2);
  }
  return removeMoreThanOneSpace(joinStr);
};

export const convertDatetime = (value) => {
  return value ? value.slice(0, 10) + " " + value.slice(11, 19) : "";
};

export const checkSlugValidation = /^[a-z0-9-/]+$/gim;

export function removeSignAllChacrter(str) {
  return (str = str.replaceAll("[^\\d]", ""));
}
