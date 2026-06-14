export default function copyEmailToClipboardEffect(text) {
    const element = document.getElementById('email-text');

    element.addEventListener('click', (e) => {
        navigator.clipboard.writeText('max@example.com');
        alert('Copied email to clipboard');
    })
} 