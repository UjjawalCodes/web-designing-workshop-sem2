function calculateResult(){
    let n = document.getElementById("number").value
    let total =0;
    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks of Subject "+i))
        total = marks + total;
    }
    let avg = total/n;
    let grade;
    let result;

    if(avg>=90){
        grade = "A"
        result = "PASS"
    }
    else if(avg>=75){
        grade = "B"
        result = "PASS"
    }
    else if(avg>=50){
        grade = "C"
        result = "PASS"
    }
    else{
        grade = "F"
        result = "FAIL"
    }

    document.getElementById("result").innerHTML=
        "Total Marks:"+ total + "<br>" + "Grade:" + grade + "<br>"+ "Result:" + result
    
}