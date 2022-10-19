// BÀI 1: SẮP XẾP SỐ THEO THỨ TỰ TĂNG DẦN 
/**
 * Mô hình 3 khối
 * Khối 1: 3 chữ số:num1,num2,num3
 * 
 * 
 * Khối 2:
 *  B1: Khai báo biến và lấy giá trị từ form
 *  B2: Phân tíc bài toán
 *  + Nếu num1 > num2 && num2 > num3 thì sắp xếp num3 => num2 => num1. 
 *  + Nếu num1 > num2 && num1 < num3 thì sắp xếp num2 => num1 => num3. 
 *  + Nếu num1 < num2 && num2 < num3 thì sắp xếp num1 => num2 => num3. 
 * Tương tự với các cặp còn lại.
 * Tạo hàm và câu lệnh điều kiện
 * Thông báo kết quả lên giao diện
 * 
 * Khối 3:
 * sắp xếp số theo thứ tự tăng dần.
 * 
 */
function sapXep() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    console.log(num1,num2,num3);
    var thongBao = "";

    if (num1 > num2 && num2 > num3) {
        thongBao = num3 +',' + num2 + ',' + num1;
    } else if (num1 > num2 && num1 < num3) {
        thongBao = num2 +',' + num1 + ',' + num3;
    } else if (num1 < num2 && num2 < num3) {
        thongBao = num1 +',' + num2 + ',' + num3;
    } else if (num1 < num3 && num3 <num2) {
        thongBao = num1 +',' + num3 + ',' + num2;
    } else if (num2 < num3 && num3 < num1) {
        thongBao = num2 +',' + num3 + ',' + num1;
    } else{
        thongBao = num3 +',' + num1 + ',' + num2;
    }
    
   document.getElementById("txtSapXep").innerHTML = thongBao;
}

document.getElementById("btnSapXep").onclick = sapXep;