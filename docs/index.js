let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+38 (999) 99-99-999');//экземпляр обьекта 

im.mask(inputs);//вызываем метод

function ValidateForm(selector, rules){//селектор формы и правило по которым она работает

    new window.JustValidate(selector,{
        rules: rules,
        submitHandler: function(form, values, ajax){
            console.log(form);

            let formData = new FormData(form); //помещаем все данные формы в спец обьект 
            console.log(formData);
            fetch("mail.php", {
                method:"POST",
                body: formData
            })
            .then(function(data){
                console.log(data);
                form.reset();
            })
        }
    })
}

ValidateForm('.form',{  //запускаем и передаем параметры
    email: { required: true, email: true },
    fio: {required: true},
    tel: {required: true},
    mas: {required: true}
});