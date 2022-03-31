// 將字串快速轉換成數字：
const a = "1";
const aTypeNumber = Number(a);
console.log(a, aTypeNumber);

// 跟據地點的不同將數字本地字串化
// 當沒有帶參數時，預設為美國地區的樣式
// 第一個參數為欲本地化的語系，參數可參考通用語系代碼
// 第二個參數則為貨幣的 format 格式，格式為物件
// 物件第一個屬性為欲 format 的格式
// 物件第二個屬性為貨幣代碼


const num = 6666;
const toLocaleNum = num.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });