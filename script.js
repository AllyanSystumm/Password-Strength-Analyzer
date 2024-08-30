const passwordInput = document.getElementById('password');
const strengthMessage = document.getElementById('strengthMessage');
const strengthMeter = document.getElementById('strengthMeter');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    updateUI(strength);
});

function calculatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
}

function updateUI(strength) {
    let strengthText;
    let meterWidth;
    let meterClass;

    switch (strength) {
        case 0:
            strengthText = 'Too short';
            meterWidth = '0%';
            meterClass = '';
            break;
        case 1:
            strengthText = 'Weak';
            meterWidth = '20%';
            meterClass = 'weak';
            break;
        case 2:
            strengthText = 'Medium';
            meterWidth = '50%';
            meterClass = 'medium';
            break;
        case 3:
            strengthText = 'Strong';
            meterWidth = '75%';
            meterClass = 'medium';
            break;
        case 4:
            strengthText = 'Very Strong';
            meterWidth = '100%';
            meterClass = 'strong';
            break;
        default:
            strengthText = 'Very Weak';
            meterWidth = '10%';
            meterClass = 'weak';
    }

    strengthMessage.textContent = strengthText;
    strengthMeter.innerHTML = `<span class="${meterClass}" style="width: ${meterWidth};"></span>`;
}
