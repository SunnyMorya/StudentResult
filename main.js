function cal()
{   


    let name = document.getElementsByClassName("Name")[0].value;
    let emark = document.getElementsByClassName("emarks")[0].value;
    let hmark = document.getElementsByClassName("emarks")[1].value;
    let smark =document.getElementsByClassName("emarks")[2].value;
    if(name == "" || emark == ""|| hmark ==   "" || smark == "" )
    {
        alert("Please fill info");
        return;
    }
    
        alert("wellcome  " +name);

        document.getElementsByClassName("Name1")[0].value = name;

        let emarks = Number(emark);
        let hmarks = Number(hmark);
        let smarks = Number(smark);

    let sum = emarks+hmarks+smarks;
    document.getElementsByClassName("total")[0].value = sum;

    let percentage = sum / 300 *100;
    document.getElementsByClassName("total")[1].value = percentage.toFixed(2) ;
    
    
    // pass or fail
    let res = document.querySelector("#res");
    if(emarks<40 || hmarks<40 || smarks<40)
    {
        res.textContent= "fail";
    res.style.color = "red";
        
    }
    else
    {
        res.textContent= "Pass";
        res.style.color = "Green";    
    }
    
    let grade = document.querySelector("#grade");
    if(percentage>=90)
    {
        grade.textContent = "A+";
    }
    else if (percentage>=80)
    {
        grade.textContent = "A";
    }
    else if (percentage>=70 )
    {
        grade.textContent = "B+";
    }
    else if (percentage>=60)
    {
        grade.textContent = "B";
    }
    else if (percentage>=40)
    {
        grade.textContent = "C+";
    }
    else{
        grade.textContent = "D ";
        let Message = document.querySelector("#bless");
        Message.style.color = "red";
        Message.textContent = "Better luck next time";
    }
}