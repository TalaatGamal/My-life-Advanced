

    // Security page



    document.addEventListener('DOMContentLoaded', (event) => {
    const correctPassword = 'Talaat';

    const form = document.getElementById('form');
    const passwordInput = document.getElementById('password');
    const content = document.getElementById('content');
    const passwordForm = document.getElementById('password-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userPassword = passwordInput.value;

        if (userPassword === correctPassword) {
        passwordForm.style.display = 'none';
        content.style.display = 'block';
        document.body.style.display = 'block'; // عرض محتوى الصفحة
        } else {
        alert('Incorrect ⚠️ password!⚠️  please ⚠️ re enter ⚠️ your password ⚠️ ❌');
        window.location.href = 'https://www.kali.org/'; // this is nice site 555555😂😂←←←←←←
        }
    });

    document.body.style.display = 'block'; // عرض نموذج كلمة المرور
    });