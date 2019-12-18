function calculate()
{
    principal = document.getElementById("txt1").value
     
    rate = document.getElementById("txt2").value

    time = document.getElementById("txt3").value

    calc1 = principal*rate*time/100

    alert("SIMPLE INTEREST IS" + calc1);

    document.getElementById("si").innerHTML="SIMPLE INTEREST IS" +  calc1
}
