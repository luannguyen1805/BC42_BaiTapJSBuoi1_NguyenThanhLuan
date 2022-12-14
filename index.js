//--------BÀI TẬP VỀ NHÀ--------

//Bài 1: Tính tiền lương nhân viên
console.log("BÀI TẬP 1: Tính tiền lương nhân viên");
// Input: lương ngày, số ngày làm
let luongNgay = 100000;
let ngayLam = 30;
//Output: Tính lương
let luong = 0;
//Progress
luong = luongNgay * ngayLam;
//Input Output màn hình
console.log("Lương 1 ngày:", luongNgay);
console.log("Số ngày làm:", ngayLam);
console.log("Tính lương:", luong, "(Lương quá bèo)");
console.log("--------------***--------------");

//Bài 2: Tính giá trị trung bình
console.log("BÀI TẬP 2: Tính giá trị trung bình")
//Input: Nhập 5 số thực
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
//Output: giá trị trung bình 
let avg = 0;
//Progress
avg = (num1 + num2 + num3 + num4 + num5) / 5;
//Input Output màn hình
console.log("Nhập 5 số thực: ", num1, num2, num3, num4, num5);
console.log("Giá trị trung bình: ", avg);
console.log("--------------***--------------");

//Bài 3: Quy đổi tiền
console.log("BÀI TẬP 3: Quy đổi tiền");
//Input: giá USD, số lượng quy đổi
let USD = 23500;
let numUSD = 2;
//Output: số tiền sau quy đổi VNĐ
let tienVND = 0;
//Progress
tienVND = USD * numUSD;
//Input, output màn hình
console.log("Giá USD hiên nay là: ", USD);
console.log("Số tiền USD cần quy đổi:", numUSD);
console.log("Người dùng nhập", numUSD, "USD => Xuất ra", tienVND, "VNĐ");
console.log("--------------***--------------");

//Bài 4: Tính diện tích, chu vi hình chữ nhật.
console.log("BÀI TẬP 4: Tính diện tích, chu vi hình chữ nhật");
//Input: chiều dài, chiều rong
let chieuDai = 5;
let chieuRong = 10;
//Output : chu vi, dien tich
let chuVi = 0;
let dienTich = 0;
//Progress
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;
//Input, output ra màn hình
console.log("Nhập chiều dài:", chieuDai);
console.log("Nhập chiều rộng:", chieuRong);
console.log("Chu vi hình chữ nhật là :", chuVi);
console.log("Diện tích hình chữ nhật là:", dienTich);
console.log("--------------***--------------");

//Bài 5: Tính tổng 2 ký số
console.log("BÀI TẬP 5: Tính tổng 2 ký số");
//Input: 1 số có 2 chữ số,
let num = 67;
//Output: tổng 2 ký số
let sum = 0;
//Prgress
let firstNum = Math.floor(num / 10);
let lastNum = num % 10;
sum = firstNum + lastNum;
//Input Output ra màn hình
//console.log("Nhập số có 2 chữ số là:", num, "=> Tổng là", firstNum, "+", lastNum, "=", sum);
console.log(`Nhập số có 2 chữ số là: ${num} => Tổng là: ${firstNum} + ${lastNum} = ${sum}`);





