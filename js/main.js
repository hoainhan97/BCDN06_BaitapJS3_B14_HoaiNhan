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
    console.log(num1, num2, num3);
    var thongBao = "";

    if (num1 > num2 && num2 > num3) {
        thongBao = num3 + ',' + num2 + ',' + num1;
    } else if (num1 > num2 && num1 < num3) {
        thongBao = num2 + ',' + num1 + ',' + num3;
    } else if (num1 < num2 && num2 < num3) {
        thongBao = num1 + ',' + num2 + ',' + num3;
    } else if (num1 < num3 && num3 < num2) {
        thongBao = num1 + ',' + num3 + ',' + num2;
    } else if (num2 < num3 && num3 < num1) {
        thongBao = num2 + ',' + num3 + ',' + num1;
    } else {
        thongBao = num3 + ',' + num1 + ',' + num2;
    }

    document.getElementById("txtSapXep").innerHTML = thongBao;
}

document.getElementById("btnSapXep").onclick = sapXep;



// BÀI 2: CHƯƠNG TRÌNH CHÀO HỎI 

function chaoHoi() {
    var thanhVien = document.getElementById("thanhVien").value;
    
    console.log(thanhVien)
    switch (thanhVien) {
        case 'B': 
            document.getElementById("btnChao").innerHTML = " Xin chào Bố"
      
            break;
        case 'M': 
        document.getElementById("btnChao").innerHTML = " Xin chào Mẹ"
         break;
            
        case 'A': 
        document.getElementById("btnChao").innerHTML = " Xin chào Anh Trai"
        
           break;
        case 'E': 
        document.getElementById("btnChao").innerHTML = " Xin chào Em Gái"
         break;

         default: alert("Vui lòng chọn thành viên");
            


    }
}



//BÀI 3: ĐẾM SỐ CHẴN LẺ

function demChanLe() {
    var soThuNhat = Number(document.getElementById("num1").value);
    var soThuHai = Number(document.getElementById("num2").value);
    var soThuBa = Number(document.getElementById("num3").value);
    // console.log(soThuNhat,soThuHai,soThuBa);

    var count = 0;
    var le = 3 - count;
    

    if (soThuNhat % 2 ==0) {
        count ++;
        // console.log(count);
    } else {
        console.log("le");
    }
    if (soThuHai % 2 ==0) {
        count++;
    }else{
        // console.log(le)


    }
    if (soThuBa % 2 ==0) {
        count++;
    } else {
        // console.log(count);
    }
        
    
    
    document.getElementById("txtDem").innerHTML = "Có " +  count + " số chẵn và "  + le + " số lẻ";
}

document.getElementById("btnDem").onclick = demChanLe;



//BÀI 4: ĐOÁN HÌNH TAM GIÁC
function doanHinh() {
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);

    if (canh1 + canh2 > canh3 || canh1 + canh3 > canh2 || canh2 + canh3 > canh1) {
        if (canh1 == canh2 && canh2 == canh3)  {
            document.getElementById("txtDoan").innerHTML = "Hình tam giác đều";
        }else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
            document.getElementById("txtDoan").innerHTML = "Hình tam giác cân";
        } else if (canh1 * canh1 == canh2*canh2 + canh3*canh3 || canh2 * canh2 == canh1 * canh1 + canh3*canh3 || canh3 * canh3 == canh2*canh2 + canh1*canh1  ) {
            document.getElementById("txtDoan").innerHTML = "Hình tam giác vuông";
        }else{
            alert("Đây là loại tam giác khác")
        }
    }else{
        alert("Vui lòng nhập độ dài các cạnh")
    }
}
document.getElementById("btnDoan").onclick = doanHinh;