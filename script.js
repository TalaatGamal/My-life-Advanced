

    // Security page



    document.addEventListener('DOMContentLoaded', (event) => {
    const correctPassword = 'GqoY2486WsmL0Quatra0M'; // حدد كلمة السر الصحيحة هنا

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
        alert('Incorrect password!');
        window.location.href = 'https://www.google.com'; // تحويل إلى Google
        }
    });

    document.body.style.display = 'block'; // عرض نموذج كلمة المرور
    });

