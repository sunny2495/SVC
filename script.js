document.getElementById('saveContact').addEventListener('click', function() {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Shagun Graphics
TEL;WORK;VOICE:+918287805477
EMAIL:infoy2012@gmail.com
ADR:;;11A, Veer Savarkar Block, Shakarpur, Delhi - 110092;Delhi;;110092;India
ORG:Shagun Graphics
URL:https://www.shagungraphics.com
END:VCARD
`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Shagun_Graphics_Contact.vcf';
    link.click();
});
