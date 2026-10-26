// En-Garde-TH — shop page: product list + simple cart
const PRODUCTS = [
  { n: "หน้ากากฟันดาบ", p: 1890, i: "M12 14h56v30a28 28 0 0 1-56 0zM12 28h56M12 40h56M28 14v56M52 14v56" },
  { n: "ฟอยล์ฝึกซ้อม", p: 1250, i: "M10 70L66 14M58 10l12 12M18 62l-8 8" },
  { n: "ถุงมือฟันดาบ", p: 690, i: "M24 70V38l-6-14 8-2 6 12 4-22 8 2-2 22 10-14 8 6-14 22v18z" },
  { n: "แจ็กเก็ตฝึกซ้อม", p: 2490, i: "M28 12L10 24l8 14 8-5v37h28V33l8 5 8-14-18-12-12 8z" },
  { n: "เสื้อยืดชมรม", p: 450, i: "M26 12L8 22l8 14 8-4v38h32V32l8 4 8-14-18-10c-2 6-8 8-12 8s-10-2-12-8z" },
  { n: "สติกเกอร์ชุด Blueprint", p: 99, i: "M14 14h52v52H14zM14 34h52M14 54h52M34 14v52M54 14v52" },
];

const $ = (s) => document.querySelector(s);
const fmt = (n) => n.toLocaleString("th-TH");
const cart = {};

function renderProducts() {
  $("#products").innerHTML = PRODUCTS.map((x, k) => `
    <div class="cell prod">
      <div class="img"><svg viewBox="0 0 80 80"><path d="${x.i}"/></svg></div>
      <h2>${x.n}</h2>
      <div class="price">฿${fmt(x.p)}</div>
      <button data-add="${k}">+ เพิ่มลงตะกร้า</button>
    </div>`).join("");
}

function updateCart() {
  let count = 0, total = 0, html = "";
  for (const k in cart) {
    const q = cart[k], x = PRODUCTS[k];
    count += q;
    total += q * x.p;
    html += `<li><span>${x.n} × ${q}</span><span>฿${fmt(q * x.p)}</span></li>`;
  }
  $("#count").textContent = count;
  $("#total").textContent = fmt(total);
  $("#items").innerHTML = html;
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) { cart[add.dataset.add] = (cart[add.dataset.add] || 0) + 1; updateCart(); }
});
$("#clear").addEventListener("click", () => { for (const k in cart) delete cart[k]; updateCart(); });

renderProducts();
updateCart();
