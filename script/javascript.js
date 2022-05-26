const inp_res= document.querySelector(".inp-res");
const btn_go = document.querySelector(".btn-go");
const loading = document.querySelector(".result_loading");
function printResult() {
    const btn_inpField = document.querySelector(".btn-inpField");
    const btn_inpTime = document.querySelector(".btn-inpTime");
    const str_Field = document.querySelector(".str-Field");
    const str_Time = document.querySelector(".str-Time");
    let field = btn_inpField.value;
    let time = btn_inpTime.value;

    if(field== "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if (time == "") {
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (time  > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    } else if (isNaN(parseInt(time))) {
        alert('숫자를 입력해주세요.')
        return false;
    }

    loading.style.display = "flex";
    inp_res.style.display = "none";
    btn_go.style.display = "none";
    
    setTimeout(function() {
        loading.style.display = "none";
        str_Field.innerText  = field;
        str_Time.innerText = parseInt(10000/time);
        inp_res.style.display = "block";
        btn_go.style.display = "block";
    },1800);
}
