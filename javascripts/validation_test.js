
function emailValidation(){
   
    const forms = document.getElementById("form");
    //console.log(forms);

    forms.addEventListener(`submit`, function(event){
        //debugger;
        const backgroundColor = document.getElementsByClassName("error-background");
        //debuggerで止めた場所でdocumentの要素を調べて、それを宣言するやり方を覚えておく。

        if(backgroundColor.length == 1){//backgroundcolorの個数が1と同じ＝エラーメッセージが出ている状態だったら、イベント停止。
            event.preventDefault();//デフォルトの送信は停止。 
        } else {
            window.alert("送信しました");
        };

    });

    const input_area01 = document.getElementById("email_confirm");//オブジェクトを取りたい。
    //console.log(typeof(input_area));

    
    input_area01.addEventListener(`input`, function(event){

        const email_input = document.getElementById("email").value;
        const email_confirmation = document.getElementById("email_confirm").value; 
        const email_confirmation_area = document.getElementById("email_confirm");
        //console.log(email_input);
        //console.log(email_confirmation);

        if (email_input != email_confirmation){
            email_confirmation_area.classList.add("error-background");
            let output_area = document.getElementById("email_confirm_message");
            const errorMessage = "Eメールが一致しません";
            output_area.innerHTML = errorMessage;
    
            //console.log(output_area);
            
        } 
        else {
            email_confirmation_area.classList.remove("error-background");//removeさせた。
            email_confirmation_area.classList.add("ok-background");
            //console.log(email_confirmation_area);
            let output_area = document.getElementById("email_confirm_message")
            output_area.innerHTML = "";
            //console.log("入力はあっています");            
        };
    

    });

};

window.onload = emailValidation;//()を入れると即座に実行されるのでこれではng。

