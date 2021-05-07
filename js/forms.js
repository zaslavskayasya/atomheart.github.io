// поле ввода, а также элемент span, в который мы поместим сообщение об ошибке.

var form  = document.getElementsByTagName('form')[0];

var email = document.querySelector('.invest-mail');
var userName = document.querySelector('.invest-name');

let checkErrorClass = function(err){
	elemErr = err.nextElementSibling
	elemErr.classList.contains('active') ?
	elemErr.closest(".form-item").classList.add('error-decor') :
	elemErr.closest(".form-item").classList.remove('error-decor');
};

let changeItem = function(varName, content, classes){
	varName.nextElementSibling.innerHTML = content ?? "";
	varName.nextElementSibling.className = classes ?? "error";
};

let createEvent = function(varName, element = "input", func, prevent = false){
	/* Каждый раз, когда пользователь вводит что-либо, мы проверяем,
	   является ли корректным поле электронной почты. */
	varName.addEventListener(element, function(e){
		if (func){
			func(e);
		} else {
			if (varName.validity.valid){
				/* В случае появления сообщения об ошибке, если поле
				   является корректным, мы удаляем сообщение об ошибке. */
				changeItem(varName);
			};
			checkErrorClass(varName);
	
			if (prevent == true) {
				e.preventDefault();
			}
		}
	}, false);
};

createChecker = function(varName, ErrObj, classes = "error active"){
	createEvent(varName);
	var checker = false;
	for (var [key, value] of Object.entries(ErrObj)){
		if (checker = varName.validity[key]){
			changeItem(varName, value, classes);
			checkErrorClass(varName);
			return false;
		}
	}
	if (!checker){
		changeItem(varName);
		return true;
	}
};

// проверки при отправке

createEvent(form, "submit", function(e){
	
	var valid = false
	
	valid = createChecker(userName, {
		"valueMissing": "Enter your name, please",
		"patternMismatch": "Enter correct name, please"
	});

	valid = createChecker(email, {
		"valueMissing": "Enter your email, please",
		"patternMismatch": "Enter correct email, please"
	});

	e.preventDefault();
	
	// Enter event valid
	// ... .contact-page

    console.log(valid);

    if(valid ){
        let contactPageCheck = document.querySelector('.contact-page');
        console.log(contactPageCheck);
        

        if(!!contactPageCheck == true){
            contactPageCheck.classList.add('success');
        }
    }
});