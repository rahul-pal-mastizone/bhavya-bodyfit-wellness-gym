const VPA   = "9144376375-3@ybl";        // check that this VPA works in your UPI app
const PAYEE = "Bhavya Bodyfit Gym";      // shorter, safer name

function makeUpiLink(amount, plan) {
  const qs = [
    `pa=${VPA}`,  // keep @ as-is
    `pn=${encodeURIComponent(PAYEE)}`,
    `am=${Number(amount).toFixed(2)}`,
    `cu=INR`,
    `tn=${encodeURIComponent(`Gym membership – ${plan}`)}`,
    `tr=BBWG-${Date.now()}`
  ].join("&");
  return `upi://pay?${qs}`;
}


  // --- QR fallback modal (optional but nice) ---
  let __upi_deeplink = "";
  function fallback(url, plan) {
    __upi_deeplink = url;
    const modal = document.getElementById("upi-modal");
    if (modal) {
      document.getElementById("upi-link").value = url;
      document.getElementById("upi-plan").textContent = plan ? `Plan: ${plan}` : "";
      document.getElementById("upi-qr").src =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(url);
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    } else {
      alert("Copy this UPI link and open in your UPI app:\n\n" + url);
    }
  }
  function closeUpiModal(){ const m=document.getElementById("upi-modal"); if(m){ m.style.display="none"; document.body.style.overflow=""; } }
  function openUpiApp(){ if(__upi_deeplink) window.location.href = __upi_deeplink; }
  function copyUpiLink(){
    const i=document.getElementById("upi-link"); if(!i) return;
    i.select(); i.setSelectionRange(0,99999);
    (navigator.clipboard ? navigator.clipboard.writeText(i.value) : document.execCommand("copy"))
      .finally(()=>alert("UPI link copied. Open your UPI app and paste it if needed."));
  }
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeUpiModal(); });
  document.getElementById("upi-modal")?.addEventListener("click", e => { if (e.target.id === "upi-modal") closeUpiModal(); });

  // Safer click handler
  function upiClick(e, amount, plan) {
    const url = makeUpiLink(amount, plan);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    e.preventDefault();
    if (isMobile) {
      window.location.href = url;
      setTimeout(() => fallback(url, plan), 1200);
    } else {
      fallback(url, plan);
    }
    return false;
  }