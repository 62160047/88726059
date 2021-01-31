function calculateGrade()
{
    var g = document.getElementById("g").value;
    var objDiv = document.getElementById("showGrade");

    if(g>=80)
        objDiv.innerHTML="ว้าววคุณเก่งสุดๆไปเลยได้เกรด A เลยนะเนี่ยย"
    else if(g>=75)
        objDiv.innerHTML="คุณได้เกรด B+ สุดยอดไปเลย"
    else if(g>=70)
        objDiv.innerHTML="คุณได้เกรด B ไม่ธรรมดาจริงๆ"
    else if(g>=65)
        objDiv.innerHTML="คุณก็เก่งเหมือนกันนิได้เกรด C+"
    else if(g>=60)
        objDiv.innerHTML="ก็ได้อยู่นะเกรด C เนี่ย"
    else if(g>=55)
        objDiv.innerHTML="คุณได้เกรด D+ พยายามอีกนิด"
    else if(g>=50)
        objDiv.innerHTML="คุณได้เกรด D เกือบไม่รอดนะเรา"
    else
        objDiv.innerHTML="คุณได้เกรด F อีกนิดเดียวเองสู้ต่อไปจ้า"

}