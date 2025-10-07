// ตั้งค่า Cloudinary ของคุณ
const CLOUD_NAME = "mymanga"; // ← ใส่ชื่อ Cloud Name ของคุณ
const UPLOAD_PRESET = "manga_upload"; // ← ใส่ชื่อ Upload Preset ของคุณ

const uploadBtn = document.getElementById("upload-btn");
const gallery = document.getElementById("gallery");

// เปิดหน้าต่างอัปโหลด
uploadBtn.addEventListener("click", function() {
  cloudinary.openUploadWidget(
    {
      cloudName: CLOUD_NAME,
      uploadPreset: UPLOAD_PRESET,
      sources: ["local", "url", "camera"],
      multiple: true,
      folder: "manga",
      maxFiles: 20,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        const imageUrl = result.info.secure_url;
        addImageToGallery(imageUrl);
      }
    }
  );
});

// ฟังก์ชันเพิ่มภาพในหน้าเว็บ
function addImageToGallery(url) {
  const img = document.createElement("img");
  img.src = url;
  gallery.appendChild(img);
}
