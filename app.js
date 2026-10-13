const MENU = [
  {
    id: "sweet-1",
    name: "بقاشة",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 40],
      ["كبير", 70],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-2",
    name: "كاستر",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 50],
      ["كبير", 75],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-3",
    name: "نوتيلا",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 85],
      ["كبير", 125],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-4",
    name: "شوكولاتة بيضاء",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 90],
      ["كبير", 125],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-5",
    name: "ميكس شوكولاتة",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 90],
      ["كبير", 130],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-6",
    name: "لوتس أو بيستاشيو",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 100],
      ["كبير", 160],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-7",
    name: "بلح",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 60],
      ["كبير", 90],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "sweet-8",
    name: "فور سيزون",
    category: "فطير حلو",
    image: "assets/feteer-sweet.webp",
    description: "إضافات اختيارية: موز أو صوص كراميل.",
    variants: [
      ["وسط", 100],
      ["كبير", 165],
    ],
    addons: [
      ["إضافة موز", 10],
      ["صوص كراميل", 10],
    ],
  },
  {
    id: "savory-1",
    name: "مشكل جبن",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    description: "فطير سخن باختيارك المفضل.",
    variants: [
      ["وسط", 110],
      ["كبير", 150],
    ],
  },
  {
    id: "savory-2",
    name: "سجق شرقي",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 120],
      ["كبير", 165],
    ],
  },
  {
    id: "savory-3",
    name: "سجق بلدي",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 135],
      ["كبير", 190],
    ],
  },
  {
    id: "savory-4",
    name: "بسطرمة",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 120],
      ["كبير", 170],
    ],
  },
  {
    id: "savory-5",
    name: "مشكل لحوم",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 130],
      ["كبير", 180],
    ],
  },
  {
    id: "savory-6",
    name: "فراخ بسطرمة كيري",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 140],
      ["كبير", 200],
    ],
  },
  {
    id: "savory-7",
    name: "فراخ",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 125],
      ["كبير", 175],
    ],
  },
  {
    id: "savory-8",
    name: "تشيكن رانش",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 135],
      ["كبير", 190],
    ],
  },
  {
    id: "savory-9",
    name: "فراخ كرانشي",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 125],
      ["كبير", 185],
    ],
  },
  {
    id: "savory-10",
    name: "مشكل فراخ",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 135],
      ["كبير", 190],
    ],
  },
  {
    id: "savory-11",
    name: "جمبري",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 150],
      ["كبير", 205],
    ],
  },
  {
    id: "savory-12",
    name: "سي فود",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 140],
      ["كبير", 200],
    ],
  },
  {
    id: "savory-13",
    name: "شيش",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 125],
      ["كبير", 175],
    ],
  },
  {
    id: "savory-14",
    name: "تو سيزون",
    category: "فطير عادي",
    image: "assets/feteer-savory.webp",
    variants: [
      ["وسط", 130],
      ["كبير", 170],
    ],
  },
  {
    id: "rocket-1",
    name: "مشكل جبن بالخضروات",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 75]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-2",
    name: "سجق شرقي",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 90]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-3",
    name: "سجق بلدي",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 115]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-4",
    name: "بسطرمة",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 90]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-5",
    name: "مشكل لحوم",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 105]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-6",
    name: "فراخ",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 120]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-7",
    name: "تشيكن رانش",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 130]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-8",
    name: "فراخ كرانشي",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 120]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-9",
    name: "مشكل فراخ",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 130]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "rocket-10",
    name: "جمبري",
    category: "فطير صاروخ",
    image: "assets/feteer-savory.webp",
    variants: [["صاروخ", 135]],
    addons: [["إضافة جبنة كيري", 15]],
  },
  {
    id: "burger-1",
    name: "برجر كلاسيك",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    description: "اختار حجم البرجر.",
    variants: [
      ["100 جم", 65],
      ["250 جم", 95],
    ],
  },
  {
    id: "burger-2",
    name: "برجر جبنة",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["100 جم", 75],
      ["250 جم", 105],
    ],
  },
  {
    id: "burger-3",
    name: "برجر بيج تيستي",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["100 جم", 75],
      ["250 جم", 105],
    ],
  },
  {
    id: "burger-4",
    name: "برجر مشروم",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["100 جم", 75],
      ["250 جم", 110],
    ],
  },
  {
    id: "burger-5",
    name: "برجر مشوي",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["100 جم", 75],
      ["250 جم", 110],
    ],
  },
  {
    id: "burger-6",
    name: "برجر كاتشب",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["100 جم", 95],
      ["250 جم", 115],
    ],
  },
  {
    id: "burger-7",
    name: "باربيكيو برجر",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["100 جم", 85],
      ["250 جم", 110],
    ],
  },
  {
    id: "burger-8",
    name: "برجر دبل",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [["دبل", 120]],
  },
  {
    id: "burger-9",
    name: "قنبلة برجر",
    category: "برجر",
    image: "assets/hero-burger.jpeg",
    variants: [["قنبلة", 130]],
  },
  {
    id: "chickenburger-1",
    name: "برجر فراخ مشوي",
    category: "برجر فراخ",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["سنجل", 75],
      ["دبل", 140],
    ],
  },
  {
    id: "chickenburger-2",
    name: "جراند تشكن",
    category: "برجر فراخ",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["سنجل", 100],
      ["دبل", 195],
    ],
  },
  {
    id: "chickenburger-3",
    name: "ماك تشكن",
    category: "برجر فراخ",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["سنجل", 80],
      ["دبل", 150],
    ],
  },
  {
    id: "chickenburger-4",
    name: "جريل تشيز تشكن",
    category: "برجر فراخ",
    image: "assets/hero-burger.jpeg",
    variants: [["سنجل", 105]],
  },
  {
    id: "chickenburger-5",
    name: "تشكن ميجا",
    category: "برجر فراخ",
    image: "assets/hero-burger.jpeg",
    variants: [
      ["سنجل", 120],
      ["دبل", 220],
    ],
  },
  {
    id: "broast-1",
    name: "قطعة بروست",
    category: "بروست وبوكسات",
    image: "assets/broast.webp",
    variants: [["قطعة", 40]],
  },
  {
    id: "broast-2",
    name: "سناك بوكس",
    category: "بروست وبوكسات",
    image: "assets/broast.webp",
    description: "٢ قطعة دجاج + بطاطس + خبز + صوص.",
    variants: [["بوكس", 105]],
  },
  {
    id: "broast-3",
    name: "دينر بوكس",
    category: "بروست وبوكسات",
    image: "assets/broast.webp",
    description: "٣ قطع دجاج + بطاطس + خبز + كول سلو.",
    variants: [["بوكس", 150]],
  },
  {
    id: "broast-4",
    name: "سوبر دينر بوكس",
    category: "بروست وبوكسات",
    image: "assets/broast.webp",
    description: "٣ قطع دجاج + بطاطس + خبز + كول سلو.",
    variants: [["بوكس", 180]],
  },
  {
    id: "broast-5",
    name: "سمارت بوكس",
    category: "بروست وبوكسات",
    image: "assets/broast.webp",
    description: "٢ قطعة دجاج + ٢ قطعة استربس + أرز + بطاطس.",
    variants: [["بوكس", 190]],
  },
  {
    id: "broast-6",
    name: "ميكس بوكس",
    category: "بروست وبوكسات",
    image: "assets/broast.webp",
    description: "٣ قطع دجاج + ٤ قطع استربس + بطاطس + أرز + كول سلو.",
    variants: [["بوكس", 275]],
  },
  {
    id: "meal-1",
    name: "وجبة التوفير",
    category: "وجبات عائلية",
    image: "assets/broast.webp",
    description: "١٢ قطعة دجاج + أرز كبير + بطاطس + كول سلو + خبز.",
    variants: [["وجبة", 550]],
  },
  {
    id: "meal-2",
    name: "الوجبة العائلية",
    category: "وجبات عائلية",
    image: "assets/broast.webp",
    description: "١٥ قطعة دجاج + أرز كبير + بطاطس كبير + كول سلو + خبز.",
    variants: [["وجبة", 585]],
  },
  {
    id: "meal-3",
    name: "الوجبة الاقتصادية",
    category: "وجبات عائلية",
    image: "assets/broast.webp",
    description: "٩ قطع بروست + ١ باكت بطاطس + ٤ قطع خبز.",
    variants: [["وجبة", 450]],
  },
];

const categories = ["الكل", ...new Set(MENU.map((item) => item.category))];
const storageKey = "ketchup-cart-v1";
let cart = loadCart();
let selectedCategory = "الكل";
let searchText = "";
let checkoutCustomer = null;
let toastTimer;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = (value) => `${new Intl.NumberFormat("ar-EG").format(value)} ج.م`;
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char],
  );

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved)
      ? saved.filter(
          (row) => row && row.key && Number.isFinite(row.price) && Number.isFinite(row.qty),
        )
      : [];
  } catch {
    return [];
  }
}
function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  } catch {
    // Keep ordering usable in browsers that restrict storage for file:// pages.
  }
}
function cartTotal() {
  return cart.reduce((sum, line) => sum + line.price * line.qty, 0);
}
function cartQuantity() {
  return cart.reduce((sum, line) => sum + line.qty, 0);
}
function setHeaderCount() {
  const count = cartQuantity();
  $("#cartCount").textContent = new Intl.NumberFormat("ar-EG").format(count);
  $("#mobileCount").textContent = new Intl.NumberFormat("ar-EG").format(count);
  $("#mobileTotal").textContent = money(cartTotal());
  $("#mobileCart").hidden = count === 0;
}
function getVisibleItems() {
  const query = searchText.trim().toLocaleLowerCase("ar");
  return MENU.filter(
    (item) =>
      (selectedCategory === "الكل" || item.category === selectedCategory) &&
      (!query ||
        `${item.name} ${item.category} ${item.description || ""}`
          .toLocaleLowerCase("ar")
          .includes(query)),
  );
}
function renderCategories() {
  $("#categoryTabs").innerHTML = categories
    .map(
      (category) =>
        `<button type="button" role="tab" aria-selected="${category === selectedCategory}" class="category-tab ${category === selectedCategory ? "active" : ""}" data-category="${esc(category)}">${esc(category)}</button>`,
    )
    .join("");
}
function imageFallback(img) {
  img.onerror = () => {
    img.onerror = null;
    img.src = "assets/hero-burger.jpeg";
  };
}
function renderProducts() {
  const rows = getVisibleItems();
  $("#menuHeading").textContent = selectedCategory === "الكل" ? "كل الاختيارات" : selectedCategory;
  $("#resultsCount").textContent = `${new Intl.NumberFormat("ar-EG").format(rows.length)} صنف`;
  $("#emptyState").hidden = rows.length > 0;
  $("#productGrid").innerHTML = rows
    .map((item, index) => {
      const [variantLabel, price] = item.variants[0];
      const variantControl =
        item.variants.length > 1
          ? `<select class="variant-select" aria-label="اختيار حجم ${esc(item.name)}" data-variant>${item.variants.map(([label, cost], i) => `<option value="${i}">${esc(label)} — ${money(cost)}</option>`).join("")}</select>`
          : "";
      const addons = item.addons?.length
        ? `<div class="addon-options">${item.addons.map(([label, cost], i) => `<label class="addon-check"><input type="checkbox" data-addon="${i}" /><span>${esc(label)} +${new Intl.NumberFormat("ar-EG").format(cost)}</span></label>`).join("")}</div>`
        : "";
      return `<article class="product-card" style="animation-delay:${Math.min(index % 9, 8) * 35}ms"><div class="product-photo"><img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" /><span class="product-category">${esc(item.category)}</span></div><div class="product-body"><div class="product-title-row"><h3 class="product-title">${esc(item.name)}</h3><div class="product-price"><span data-current-price>${money(price)}</span>${item.variants.length > 1 ? "<small>السعر حسب الحجم</small>" : ""}</div></div><p class="product-description">${esc(item.description || "اختار الصنف وأضفه لسلتك.")}</p>${variantControl}${addons}<button class="product-add" type="button" data-add="${esc(item.id)}"><span>＋</span> ضيف للسلة</button></div></article>`;
    })
    .join("");
  $$(".product-photo img").forEach(imageFallback);
}
function showToast(text) {
  const node = $("#toast");
  node.textContent = text;
  node.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("show"), 2200);
}
function addItem(button) {
  const item = MENU.find((entry) => entry.id === button.dataset.add);
  if (!item) return;
  const card = button.closest(".product-card");
  const variantIndex = Number($("[data-variant]", card)?.value || 0);
  const [variant, basePrice] = item.variants[variantIndex] || item.variants[0];
  const extras = (item.addons || [])
    .filter((_, i) => $(`[data-addon="${i}"]`, card)?.checked)
    .map(([label, cost]) => ({ label, cost }));
  const key = [item.id, variant, ...extras.map((extra) => extra.label)].join("|");
  const price = basePrice + extras.reduce((sum, extra) => sum + extra.cost, 0);
  const existing = cart.find((line) => line.key === key);
  if (existing) existing.qty += 1;
  else
    cart.push({
      key,
      id: item.id,
      name: item.name,
      category: item.category,
      variant,
      extras,
      price,
      qty: 1,
    });
  saveCart();
  renderCart();
  setHeaderCount();
  showToast(`اتضاف ${item.name} للسلة`);
}
function renderCart() {
  const empty = cart.length === 0;
  $("#cartEmpty").hidden = !empty;
  $("#drawerFooter").hidden = empty;
  $("#cartItems").innerHTML = cart
    .map(
      (line) =>
        `<article class="cart-line"><div><strong class="cart-line-title">${esc(line.name)}</strong><span class="cart-line-detail">${esc(line.variant)}${line.extras?.length ? ` • ${esc(line.extras.map((x) => x.label).join("، "))}` : ""}</span><div class="cart-line-controls"><div class="qty-control"><button type="button" data-qty="-1" data-key="${esc(line.key)}" aria-label="تقليل الكمية">−</button><span>${new Intl.NumberFormat("ar-EG").format(line.qty)}</span><button type="button" data-qty="1" data-key="${esc(line.key)}" aria-label="زيادة الكمية">+</button></div><button class="remove-item" type="button" data-remove="${esc(line.key)}">حذف</button></div></div><strong class="cart-line-price">${money(line.price * line.qty)}</strong></article>`,
    )
    .join("");
  $("#cartTotal").textContent = money(cartTotal());
  setHeaderCount();
}
function openCart() {
  renderCart();
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  $("#drawerScrim").classList.add("open");
  document.body.classList.add("locked");
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  $("#drawerScrim").classList.remove("open");
  document.body.classList.remove("locked");
}
function makeMessage(customer) {
  const lines = [
    "طلب جديد من موقع كاتشب",
    "━━━━━━━━━━━━━━",
    "بيانات العميل:",
    `الاسم: ${customer.name}`,
    `رقم الموبايل: ${customer.phone}`,
    `العنوان: ${customer.address}`,
  ];
  if (customer.notes) lines.push(`ملاحظات: ${customer.notes}`);
  lines.push("━━━━━━━━━━━━━━", "تفاصيل الطلب:");
  cart.forEach((line) =>
    lines.push(
      `• ${line.name} (${line.variant}${line.extras?.length ? `، ${line.extras.map((x) => x.label).join("، ")}` : ""}) × ${line.qty} — ${line.price * line.qty} ج.م`,
    ),
  );
  lines.push("━━━━━━━━━━━━━━", `إجمالي الأصناف: ${cartTotal()} جنيه`);
  return lines.join("\n");
}
function openCheckout() {
  if (!cart.length) {
    showToast("ضيف أصناف للسلة الأول");
    return;
  }
  closeCart();
  checkoutCustomer = null;
  $("#checkoutForm").hidden = false;
  $("#checkoutReview").hidden = true;
  $("#checkoutForm").reset();
  $("#checkoutDialog").showModal();
}
function makeReview() {
  const data = new FormData($("#checkoutForm"));
  checkoutCustomer = {
    name: String(data.get("name") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    address: String(data.get("address") || "").trim(),
    notes: String(data.get("notes") || "").trim(),
  };
  $("#reviewCustomer").innerHTML =
    `<strong>${esc(checkoutCustomer.name)}</strong><span>موبايل: ${esc(checkoutCustomer.phone)}</span><span>العنوان: ${esc(checkoutCustomer.address)}</span>${checkoutCustomer.notes ? `<span>ملاحظات: ${esc(checkoutCustomer.notes)}</span>` : ""}`;
  $("#reviewLines").innerHTML = cart
    .map(
      (line) =>
        `<div class="review-line"><span>${esc(line.name)} • ${esc(line.variant)}${line.extras?.length ? ` • ${esc(line.extras.map((x) => x.label).join("، "))}` : ""} × ${new Intl.NumberFormat("ar-EG").format(line.qty)}</span><b>${money(line.price * line.qty)}</b></div>`,
    )
    .join("");
  $("#reviewTotal").textContent = money(cartTotal());
  $("#checkoutForm").hidden = true;
  $("#checkoutReview").hidden = false;
}
function sendToWhatsapp() {
  if (!checkoutCustomer || !cart.length) return;
  const url = `https://wa.me/201090204281?text=${encodeURIComponent(makeMessage(checkoutCustomer))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

renderCategories();
renderProducts();
renderCart();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.1 },
  );
  $$(".reveal").forEach((node) => observer.observe(node));
} else {
  $$(".reveal").forEach((node) => node.classList.add("visible"));
}
$("#categoryTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  renderCategories();
  renderProducts();
});
$("#menuSearch").addEventListener("input", (event) => {
  searchText = event.target.value;
  renderProducts();
});
$("#productGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addItem(button);
});
$("#productGrid").addEventListener("change", (event) => {
  if (!event.target.matches("[data-variant]")) return;
  const card = event.target.closest(".product-card");
  const item = MENU.find((entry) => entry.id === card.querySelector("[data-add]")?.dataset.add);
  if (item) {
    const selected = item.variants[Number(event.target.value)] || item.variants[0];
    $("[data-current-price]", card).textContent = money(selected[1]);
  }
});
$("#cartItems").addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove]");
  if (remove) cart = cart.filter((line) => line.key !== remove.dataset.remove);
  const change = event.target.closest("[data-qty]");
  if (change) {
    const line = cart.find((row) => row.key === change.dataset.key);
    if (line) {
      line.qty += Number(change.dataset.qty);
      if (line.qty <= 0) cart = cart.filter((row) => row.key !== line.key);
    }
  }
  saveCart();
  renderCart();
});
$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#drawerScrim").addEventListener("click", closeCart);
$("#browseMenu").addEventListener("click", () => {
  closeCart();
  $("#menu").scrollIntoView({ behavior: "smooth" });
});
$("#checkoutStart").addEventListener("click", openCheckout);
$("#closeCheckout").addEventListener("click", () => $("#checkoutDialog").close());
$("#checkoutDialog").addEventListener("click", (event) => {
  if (event.target === $("#checkoutDialog")) $("#checkoutDialog").close();
});
$("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  makeReview();
});
$("#reviewBack").addEventListener("click", () => {
  $("#checkoutReview").hidden = true;
  $("#checkoutForm").hidden = false;
});
$("#sendWhatsapp").addEventListener("click", sendToWhatsapp);
$("#mobileCart").addEventListener("click", (event) => {
  event.preventDefault();
  openCart();
});
$("#menuToggle").addEventListener("click", (event) => {
  const isOpen = $(".main-nav").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
$$(".main-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    $(".main-nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});
