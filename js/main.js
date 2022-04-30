/** Bài 1
 * Khối 1: input
 * num1, num2, num3
 * 
 * Khối 2: các bước xử lý
 * B1: khai báo biến và gán giá trị
 * B2: lấy giá trị trừ form
 * B3: tạo hàm tính 
 * B4: gắn click cho button
 * 
 * Khối 3: output
 *  
 */

function sortNumber() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;

    var so1 = parseInt(num1);
    var so2 = parseInt(num2);
    var so3 = parseInt(num3);

    if (so1 < so2 && so1 < so3) {
        if (so2 < so3) var resulAsc = so1 + "<" + so2 + "<" + so3;
        else var resulAsc = so1 + "<" + so3 + "<" + so2;
    }
    if (so2 < so1 && so2 < so3) {
        if (so1 < so3) var resulAsc = so2 + "<" + so1 + "<" + so3;
        else var resulAsc = so2 + "<" + so3 + "<" + so1;
    }
    if (so3 < so1 && so3 < so2) {
        if (so1 < so2) var resulAsc = so3 + "<" + so1 + "<" + so2;
        else var resulAsc = so3 + "<" + so2 + "<" + so1;
    }
    document.getElementById("show").innerHTML = resulAsc;
}




/**
 * Bài 2: Chương trình “Chào hỏi”
 * 
 * Khối 1: input
 * 
 * Khối 2: các bước xử lý
 *  B1: khai báo biến và gán giá trị
 * B2: lấy giá trị trừ form
 * B3: tạo hàm tính 
 * B4: gắn click cho button
 * 
 * Khối 3: output
 */

function greeting() {
    var chooseMember = document.getElementById("dropdownMenuButton").value;
    switch (chooseMember) {
        case "B":
            loiChao = "Xin chào Bố!"
            break;
        case "M":
            loiChao = "Xin chào Mẹ!"
            break;
        case "A":
            loiChao = "Xin chào Anh!"
            break;
        case "E":
            loiChao = "Chào em! Anh đứng đây từ chiều"
            break;
        default:
            alert("Vui lòng chọn thành viên")
            break;
    }
    document.getElementById("startHello").innerHTML = loiChao;
}



/** Bài 3: Đếm số chẵn lẻ
 *  Khối 1: input
 * 
 *  B1: khai báo biến và gán giá trị
 * B2: lấy giá trị trừ form
 * B3: tạo hàm tính 
 * B4: gắn click cho button
 * 
 * Khối 3: output
 */

function checkNumber() {
    var number1 = document.getElementById("firstnumber").value;
    var number2 = document.getElementById("secondnumber").value;
    var number3 = document.getElementById("thirdnumber").value;
    var soChan = 0;
    var soLe = 0;
    var so1 = parseInt(number1);
    var so2 = parseInt(number2);
    var so3 = parseInt(number3);

    // console.log(soChan, soLe)

    if (so1 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (so2 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (so3 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }

    document.getElementById("startCounting").innerHTML = "Có " + soChan + " số chẵn" + "</br>" + "Có " + soLe + " số lẻ";
}

/**Bài 3: Đoán hình tam giác
 *  Khối 1: input
 * 
 * Khối 2: các bước xử lý
 * B1: khai báo biến và gán giá trị
 * B2: lấy giá trị trừ form
 * B3: tạo hàm tính  
 * B4: gắn click cho button
 * 
 * Khối 3: output
 */


function forecast() {
    var a = document.getElementById('canhA').value;
    var b = document.getElementById('canhB').value;
    var c = document.getElementById('canhC').value;

    if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
        var tamGiacLaTacGiao = "Tam Giác Vuông";
    } else if (a == b && b == c) {
        var tamGiacLaTacGiao = "Tam Giác Đều";
    } else if (a == b || a == c || b == c) {
        var tamGiacLaTacGiao = "Tam Giác Cân";
    } else{
        alert("Đây không phải 3 cạnh của tam giác");
    }

    document.getElementById("magic").innerHTML = tamGiacLaTacGiao;
}





