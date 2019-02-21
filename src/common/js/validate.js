/**
 * Created by liuxiaoya on 2017/11/16 0016.
 */
export function checkPhone(phone){
  if ((/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
    return true;
  } else {
    return false;
  }
}
export function clearNotNumber(value){//只能输入数字
  return value.replace(/\D/g,'');
}
