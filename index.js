// template_2m8a4rg

// service_c41i79v

// 2XhT_4zNIls54Jiy7

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_c41i79v',
            'template_2m8a4rg',
            event.target,
            '2XhT_4zNIls54Jiy7'
        ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at timdrudy@gmail.com"
            );
        })
    }