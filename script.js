

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

                                            
                                            
                                            // private btn header
                                            
                                            

  document.addEventListener('DOMContentLoaded', (event) => {
    const protectedLinks = document.querySelectorAll('.pro2');
    const correctPassword = 'porn'; // حدد كلمة السر الصحيحة هنا

    protectedLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // لمنع التحويل التلقائي للصفحة
        const userPassword = prompt('Please enter the password:');
        
        if (userPassword === correctPassword) {
          window.location.href = link.href; // التحويل للصفحة المطلوبة
        } else {
          alert('Incorrect password!'); // عرض رسالة خطأ
        }
      });
    });
  });

                                            
                                            
                                            // private btn mobile
                                            
                                            

  document.addEventListener('DOMContentLoaded', (event) => {
    const protectedLinks = document.querySelectorAll('.pro');
    const correctPassword = 'porn'; // حدد كلمة السر الصحيحة هنا

    protectedLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // لمنع التحويل التلقائي للصفحة
        const userPassword = prompt('Please enter the password:');
        
        if (userPassword === correctPassword) {
          window.location.href = link.href; // التحويل للصفحة المطلوبة
        } else {
          alert('Incorrect password!'); // عرض رسالة خطأ
        }
      });
    });
  });