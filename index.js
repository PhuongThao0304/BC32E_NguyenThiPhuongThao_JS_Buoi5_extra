// bài 1
// input: họ tên, tổng thu nhập nă, số người phụ thuôc
// output: sôs thuế thu nhập cá nhân phải trả theo quy định
// xử lý: tính Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr => so sánh if trong từng trường hợp tổng thu nhập trong hạn mức chịu thuế => tính số thuế với % tương ứng


document.getElementById('btnTinhThue').onclick =function () {
    var consName = document.getElementById('Name').value;
    var thuNhapNam = Number(document.getElementById('thuNhapNam').value);
    var nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);
    var thunhapChiuThue = thuNhapNam - 4e+6 - nguoiPhuThuoc*1.6e+6;
    var tienThue = '';

    // xử lý
    if ( thunhapChiuThue >=0 && thunhapChiuThue<= 6e+7 ) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.05);
        
    } else if (thunhapChiuThue >6e+7 && thunhapChiuThue<= 12e+7) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.1);
        
    }
    else if (thunhapChiuThue >12e+7 && thunhapChiuThue<= 21e+7) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.15);
        
    }
    else if (thunhapChiuThue >21e+7 && thunhapChiuThue<= 384e+6) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.2);
        
    }
    else if (thunhapChiuThue >384e+6 && thunhapChiuThue<= 624e+6) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.25);
        
    }
    else if (thunhapChiuThue >624e+6 && thunhapChiuThue<= 960e+6) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.3);
        
    }
    else if (thunhapChiuThue >960e+6) {
        tienThue = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thunhapChiuThue*0.35);
        
    }
    else {
        tienThue = "không xác định";
    }

    

    //xuất ra màn hình
    document.getElementById('ketQua_1').innerHTML = "Tổng số thuế bạn phải trả là: " + tienThue;

}

// bài 2
/* input: mã KH, loại Kh, số kết nối (nếu là doanh nghiệp), số kênh cao cấp 
output: hoá đơn phải chi trả = phí xử lí hoá đơn + phí dich vụ cơ bản + thuê kênh cao cấp

*/

function disabledInput() {
    var loaiKH = document.getElementById('loaiKH').value;
    var soKetnoi = document.getElementById('soketnoi');
    if (loaiKH === "doanhnghiep") {
        soKetnoi.disabled= false;

    } else if (loaiKH === "nhadan") 
    {
        soKetnoi.disabled= true;
    }

}


document.getElementById('btnHoadon').onclick = function () {
    var maKH = Number(document.getElementById('maKH').value);
    var soKetnoi = Number(document.getElementById('soketnoi').value);
    var soKenh = Number(document.getElementById('sokenhcaocap').value);
    var loaiKH = document.getElementById('loaiKH').value;

    var hoaDon = 0;
 if (loaiKH= "doanhnghiep") {
    hoaDon = 15 + 75 +5*soKetnoi + 50*soKenh;
 } else if (loaiKH ="nhadan")
 {
    hoaDon = 7.5 + 20.5 +7.5*soKenh;
 }
    
//  xuất ra màn hình
document.getElementById('ketQua_2').innerHTML = "Hoá đơn phải trả là: " + hoaDon + "$";

}





