// ตัวอย่าง: ทำให้ปุ่ม blink เปลี่ยนสีอัตโนมัติ
setInterval(() => {
  const blink = document.querySelector('.blink');
  if (blink) blink.style.color = blink.style.color === '#fff' ? '#b388ff' : '#fff';
}, 1000);
