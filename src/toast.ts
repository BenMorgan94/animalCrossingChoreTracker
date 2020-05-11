export function toast(message: string, duration = 2000) {
  const toast = document.createElement("ion-toast");
  toast.message = message;
  toast.duration = duration;
  toast.position = "top";
  toast.style.textAlign = "center";

  document.body.appendChild(toast);
  return toast.present();
}
