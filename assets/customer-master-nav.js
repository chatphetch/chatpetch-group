/* ============================================================
   CHATPHETCH GROUP
   MASTER NAVIGATION
   Header + Desktop Navigation + Mobile Navigation + Footer
   ============================================================ */

(function () {
  "use strict";


  /* ==========================================================
     NAVIGATION DATA
     ========================================================== */

  const NAV = [
    {
      label: "หน้าแรก",
      href: "index.html"
    },

    {
      label: "เกี่ยวกับเรา",
      href: "about.html"
    },

    {
      label: "สินค้า",
      href: "products.html"
    },

    {
      label: "บริการ",
      dropdown: true,
      items: [
        {
          label: "ดูบริการทั้งหมด",
          href: "services.html"
        },

        {
          label: "บริการระบบงานพื้น",
          href: "service-detail.html?service=industrial"
        },

        {
          label: "บริการเคลือบผิว / สี",
          href: "service-detail.html?service=coating"
        },

        {
          label: "ปรึกษาและเลือกวัสดุ",
          href: "service-detail.html?service=consulting"
        },

        {
          label: "คำปรึกษางานติดตั้ง",
          href: "service-detail.html?service=installation"
        }
      ]
    },

    {
      label: "ผลงาน",
      href: "projects.html"
    },

    {
      label: "โครงการอ้างอิง",
      href: "reference.html"
    },

    {
      label: "ศูนย์เทคนิค",
      href: "technical-center.html"
    },

    {
      label: "คลังความรู้",
      href: "knowledge.html"
    },

    {
      label: "ติดต่อเรา",
      href: "contact.html"
    },

    {
      label: "🔎 ติดตามคำสั่งซื้อ",
      href: "order-status.html"
    },

    {
      label: "🛒 ตะกร้า",
      href: "cart.html",
      cart: true
    }
  ];


  /* ==========================================================
     HELPERS
     ========================================================== */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function currentPage() {

    const path =
      window.location.pathname
        .split("/")
        .pop();

    return path || "index.html";

  }


  function isActive(href) {

    if (!href) {
      return false;
    }

    const cleanHref =
      href
        .split("?")[0]
        .split("#")[0];

    return cleanHref === currentPage();

  }


  /* ==========================================================
     CART
     ========================================================== */

  function getCart() {

    try {

      const raw =
        localStorage.getItem("chatpetch_cart");

      if (!raw) {
        return [];
      }

      const cart =
        JSON.parse(raw);

      return Array.isArray(cart)
        ? cart
        : [];

    } catch (error) {

      return [];

    }

  }


  function getCartCount() {

    const cart = getCart();

    return cart.reduce(
      function (total, item) {

        const qty =
          Number(
            item.quantity ??
            item.qty ??
            1
          );

        return total +
          (Number.isFinite(qty)
            ? Math.max(0, qty)
            : 0);

      },
      0
    );

  }


  function updateCartBadges() {

    const count =
      getCartCount();

    document
      .querySelectorAll(
        "[data-cart-count]"
      )
      .forEach(function (element) {

        element.textContent =
          String(count);

        element.hidden =
          count <= 0;

      });

  }


  /* ==========================================================
     CSS
     ========================================================== */

  const STYLE = `
  /* ==========================================================
     CHATPHETCH MASTER NAV
     ========================================================== */

  :root {
    --cp-nav-bg: rgba(18, 12, 9, .91);
    --cp-nav-bg-mobile: rgba(16, 11, 8, .98);

    --cp-nav-border:
      rgba(225, 200, 149, .16);

    --cp-nav-gold:
      #c6a06a;

    --cp-nav-gold-light:
      #e1c895;

    --cp-nav-white:
      #f6f0e8;

    --cp-nav-muted:
      #aaa095;
  }


  /* ==========================================================
     HEADER
     ========================================================== */

  .customer-header {

    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    z-index: 9000;

    width: 100%;

    background:
      linear-gradient(
        180deg,
        rgba(10, 7, 5, .96),
        rgba(15, 10, 7, .88)
      );

    border-bottom:
      1px solid var(--cp-nav-border);

    backdrop-filter:
      blur(16px);

    -webkit-backdrop-filter:
      blur(16px);

  }


  .customer-navbar {

    width: 100%;

    min-height: 86px;

    display: flex;

    align-items: center;

  }


  .customer-nav-container {

    width:
      min(
        calc(100% - 48px),
        1440px
      );

    margin-inline: auto;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 28px;

  }


  /* ==========================================================
     BRAND
     ========================================================== */

  .customer-brand {

    flex: 0 0 auto;

    display: inline-flex;

    align-items: center;

    gap: 12px;

    color: var(--cp-nav-white);

    min-width: 0;

  }


  .customer-brand-logo {

    width: 54px;
    height: 54px;

    object-fit: contain;

    flex: 0 0 auto;

  }


  .customer-brand-copy {

    display: flex;

    flex-direction: column;

    line-height: 1;

    white-space: nowrap;

  }


  .customer-brand-name {

    color:
      var(--cp-nav-white);

    font-size: 14px;

    font-weight: 600;

    letter-spacing:
      .15em;

  }


  .customer-brand-sub {

    margin-top: 6px;

    color:
      var(--cp-nav-gold);

    font-size: 8px;

    letter-spacing:
      .20em;

    text-transform:
      uppercase;

  }


  /* ==========================================================
     DESKTOP NAV
     ========================================================== */

  .customer-nav {

    flex: 1 1 auto;

    display: flex;

    justify-content: flex-end;

    align-items: center;

  }


  .customer-nav-list {

    display: flex;

    align-items: center;

    justify-content: flex-end;

    gap: 3px;

    margin: 0;

    padding: 0;

    list-style: none;

  }


  .customer-nav-item {

    position: relative;

    list-style: none;

  }


  .customer-nav-link {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    min-height: 48px;

    padding:
      0 10px;

    color:
      rgba(246,240,232,.78);

    font-size: 12px;

    font-weight: 400;

    white-space: nowrap;

    transition:
      color .2s ease;

  }


  .customer-nav-link::after {

    content: "";

    position: absolute;

    left: 10px;
    right: 10px;

    bottom: 7px;

    height: 1px;

    background:
      var(--cp-nav-gold);

    transform:
      scaleX(0);

    transform-origin:
      center;

    transition:
      transform .25s ease;

  }


  .customer-nav-link:hover {

    color:
      var(--cp-nav-white);

  }


  .customer-nav-link:hover::after,
  .customer-nav-link.active::after {

    transform:
      scaleX(1);

  }


  .customer-nav-link.active {

    color:
      var(--cp-nav-gold-light);

  }


  /* ==========================================================
     DROPDOWN
     ========================================================== */

  .customer-nav-item.has-dropdown >
  .customer-nav-link {

    gap: 7px;

  }


  .customer-dropdown-arrow {

    display: inline-block;

    width: 6px;
    height: 6px;

    margin-top: -3px;

    border-right:
      1px solid currentColor;

    border-bottom:
      1px solid currentColor;

    transform:
      rotate(45deg);

    transition:
      transform .2s ease;

  }


  .customer-nav-item:hover
  .customer-dropdown-arrow {

    transform:
      rotate(225deg)
      translate(-1px,-1px);

  }


  .customer-dropdown {

    position: absolute;

    top: calc(100% - 2px);

    left: 50%;

    min-width: 270px;

    padding:
      10px;

    margin: 0;

    list-style: none;

    background:
      rgba(19, 13, 9, .98);

    border:
      1px solid var(--cp-nav-border);

    box-shadow:
      0 20px 50px rgba(0,0,0,.40);

    transform:
      translate(-50%, 8px);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transition:
      opacity .2s ease,
      transform .2s ease,
      visibility .2s ease;

  }


  .customer-nav-item:hover
  .customer-dropdown {

    opacity: 1;

    visibility: visible;

    pointer-events: auto;

    transform:
      translate(-50%, 0);

  }


  .customer-dropdown a {

    display: flex;

    align-items: center;

    min-height: 43px;

    padding:
      0 14px;

    color:
      rgba(246,240,232,.76);

    font-size: 12px;

    border-bottom:
      1px solid rgba(255,255,255,.05);

    transition:
      color .2s ease,
      background .2s ease,
      padding .2s ease;

  }


  .customer-dropdown li:last-child a {

    border-bottom: 0;

  }


  .customer-dropdown a:hover {

    color:
      var(--cp-nav-gold-light);

    background:
      rgba(198,160,106,.08);

    padding-left: 18px;

  }


  /* ==========================================================
     CART BADGE
     ========================================================== */

  .customer-cart-link {

    gap: 6px;

  }


  .customer-cart-badge {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    min-width: 17px;
    height: 17px;

    padding:
      0 4px;

    border-radius: 50px;

    color:
      #17100b;

    background:
      var(--cp-nav-gold-light);

    font-size: 9px;

    font-weight: 700;

  }


  /* ==========================================================
     MOBILE TOGGLE
     ========================================================== */

  .customer-menu-toggle {

    display: none;

    width: 44px;
    height: 44px;

    padding: 0;

    border: 0;

    background: transparent;

    cursor: pointer;

  }


  .customer-menu-toggle-inner {

    position: relative;

    width: 24px;
    height: 18px;

    margin: auto;

  }


  .customer-menu-toggle-inner span {

    position: absolute;

    left: 0;

    width: 24px;
    height: 1px;

    background:
      var(--cp-nav-white);

    transition:
      transform .25s ease,
      opacity .25s ease,
      top .25s ease;

  }


  .customer-menu-toggle-inner span:nth-child(1) {

    top: 0;

  }


  .customer-menu-toggle-inner span:nth-child(2) {

    top: 8px;

  }


  .customer-menu-toggle-inner span:nth-child(3) {

    top: 16px;

  }


  .customer-menu-toggle.open
  .customer-menu-toggle-inner
  span:nth-child(1) {

    top: 8px;

    transform:
      rotate(45deg);

  }


  .customer-menu-toggle.open
  .customer-menu-toggle-inner
  span:nth-child(2) {

    opacity: 0;

  }


  .customer-menu-toggle.open
  .customer-menu-toggle-inner
  span:nth-child(3) {

    top: 8px;

    transform:
      rotate(-45deg);

  }


  /* ==========================================================
     MOBILE BACKDROP
     ========================================================== */

  .customer-mobile-backdrop {

    display: none;

    position: fixed;

    inset: 0;

    z-index: 8998;

    background:
      rgba(0,0,0,.52);

  }


  /* ==========================================================
     FOOTER
     ========================================================== */

  .customer-footer {

    position: relative;

    z-index: 10;

    color:
      rgba(246,240,232,.78);

    background:
      linear-gradient(
        180deg,
        rgba(11,8,6,.94),
        rgba(7,5,4,.98)
      );

    border-top:
      1px solid var(--cp-nav-border);

  }


  .customer-footer-inner {

    width:
      min(
        calc(100% - 48px),
        1440px
      );

    margin-inline: auto;

    padding:
      65px 0 30px;

  }


  .customer-footer-top {

    display: grid;

    grid-template-columns:
      minmax(230px, 1.1fr)
      minmax(0, 2fr);

    gap: 60px;

    padding-bottom: 45px;

    border-bottom:
      1px solid rgba(255,255,255,.08);

  }


  .customer-footer-brand {

    display: flex;

    align-items: flex-start;

    gap: 15px;

  }


  .customer-footer-logo {

    width: 58px;
    height: 58px;

    object-fit: contain;

  }


  .customer-footer-brand-name {

    margin-top: 5px;

    color:
      var(--cp-nav-white);

    font-size: 15px;

    font-weight: 600;

    letter-spacing:
      .14em;

  }


  .customer-footer-brand-text {

    max-width: 330px;

    margin-top: 14px;

    color:
      #958b82;

    font-size: 12px;

    line-height: 1.8;

  }


  .customer-footer-links {

    display: grid;

    grid-template-columns:
      repeat(4, minmax(0,1fr));

    gap:
      10px 20px;

  }


  .customer-footer-links a {

    display: inline-flex;

    align-items: center;

    min-height: 32px;

    color:
      #9e958b;

    font-size: 11px;

    transition:
      color .2s ease;

  }


  .customer-footer-links a:hover {

    color:
      var(--cp-nav-gold-light);

  }


  .customer-footer-bottom {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    padding-top: 24px;

    color:
      #716961;

    font-size: 10px;

  }


  .customer-footer-credit {

    color:
      var(--cp-nav-gold);

  }


  /* ==========================================================
     MOBILE
     ========================================================== */

  @media (max-width: 1050px) {

    .customer-navbar {

      min-height: 78px;

    }


    .customer-nav-container {

      width:
        calc(100% - 32px);

    }


    .customer-brand-logo {

      width: 52px;
      height: 52px;

    }


    .customer-nav {

      position: fixed;

      top: 78px;
      left: 0;
      right: 0;

      z-index: 8999;

      display: block;

      max-height:
        calc(100vh - 78px);

      overflow-y: auto;

      background:
        var(--cp-nav-bg-mobile);

      border-top:
        1px solid var(--cp-nav-border);

      transform:
        translateY(-10px);

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .22s ease,
        transform .22s ease,
        visibility .22s ease;

    }


    .customer-nav.open {

      opacity: 1;

      visibility: visible;

      pointer-events: auto;

      transform:
        translateY(0);

    }


    .customer-nav-list {

      display: block;

      padding:
        12px 16px 24px;

    }


    .customer-nav-item {

      border-bottom:
        1px solid rgba(255,255,255,.06);

    }


    .customer-nav-link {

      width: 100%;

      min-height: 52px;

      justify-content: space-between;

      padding:
        0 8px;

      font-size: 13px;

    }


    .customer-nav-link::after {

      display: none;

    }


    .customer-nav-item.has-dropdown >
    .customer-nav-link {

      cursor: pointer;

    }


    .customer-dropdown {

      position: static;

      min-width: 0;

      padding:
        0 0 8px;

      background:
        transparent;

      border: 0;

      box-shadow: none;

      transform: none;

      opacity: 1;

      visibility: visible;

      pointer-events: auto;

      display: none;

    }


    .customer-nav-item.dropdown-open
    .customer-dropdown {

      display: block;

    }


    .customer-dropdown a {

      min-height: 45px;

      padding:
        0 18px 0 28px;

      color:
        #958c82;

      border-bottom: 0;

      font-size: 12px;

    }


    .customer-dropdown a:hover {

      padding-left: 32px;

      background:
        transparent;

    }


    .customer-menu-toggle {

      display: flex;

      flex: 0 0 auto;

    }


    .customer-mobile-backdrop {

      display: block;

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .2s ease,
        visibility .2s ease;

    }


    body.customer-menu-open
    .customer-mobile-backdrop {

      opacity: 1;

      visibility: visible;

      pointer-events: auto;

    }


    .customer-footer-top {

      grid-template-columns:
        1fr;

      gap: 35px;

    }


    .customer-footer-links {

      grid-template-columns:
        repeat(3, minmax(0,1fr));

    }

  }


  @media (max-width: 700px) {

    .customer-navbar {

      min-height: 72px;

    }


    .customer-nav-container {

      width:
        calc(100% - 28px);

    }


    .customer-brand-logo {

      width: 56px;
      height: 56px;

    }


    .customer-nav {

      top: 72px;

      max-height:
        calc(100vh - 72px);

    }


    .customer-brand-sub {

      display: none;

    }


    .customer-footer-inner {

      width:
        calc(100% - 28px);

      padding-top: 48px;

    }


    .customer-footer-links {

      grid-template-columns:
        repeat(2, minmax(0,1fr));

    }


    .customer-footer-bottom {

      flex-direction: column;

      align-items: flex-start;

    }

  }


  @media (max-width: 480px) {

    .customer-navbar {

      min-height: 68px;

    }


    .customer-nav-container {

      width:
        calc(100% - 20px);

    }


    .customer-brand-logo {

      width: 52px;
      height: 52px;

    }


    .customer-brand-copy {

      display: none;

    }


    .customer-nav {

      top: 68px;

      max-height:
        calc(100vh - 68px);

    }


    .customer-nav-list {

      padding-inline: 10px;

    }


    .customer-footer-links {

      grid-template-columns:
        1fr;

    }

  }


  /* ==========================================================
     ACCESSIBILITY
     ========================================================== */

  .customer-nav-link:focus-visible,
  .customer-dropdown a:focus-visible,
  .customer-menu-toggle:focus-visible,
  .customer-footer-links a:focus-visible {

    outline:
      1px solid var(--cp-nav-gold-light);

    outline-offset: 3px;

  }

  `;


  /* ==========================================================
     INJECT CSS
     ========================================================== */

  function injectStyles() {

    if (
      document.getElementById(
        "chatpetch-master-nav-style"
      )
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "chatpetch-master-nav-style";

    style.textContent =
      STYLE;

    document.head.appendChild(style);

  }


  /* ==========================================================
     BUILD NAV ITEM
     ========================================================== */

  function buildNavItem(item) {

    const li =
      document.createElement("li");

    li.className =
      "customer-nav-item";

    if (item.dropdown) {

      li.classList.add(
        "has-dropdown"
      );

    }


    const link =
      document.createElement("a");

    link.className =
      "customer-nav-link";

    if (
      !item.dropdown &&
      isActive(item.href)
    ) {

      link.classList.add(
        "active"
      );

    }


    link.href =
      item.href || "#";

    link.innerHTML =
      escapeHTML(item.label);


    if (item.cart) {

      link.classList.add(
        "customer-cart-link"
      );

      const badge =
        document.createElement("span");

      badge.className =
        "customer-cart-badge";

      badge.setAttribute(
        "data-cart-count",
        ""
      );

      badge.textContent =
        String(getCartCount());

      badge.hidden =
        getCartCount() <= 0;

      link.appendChild(
        badge
      );

    }


    if (item.dropdown) {

      const arrow =
        document.createElement("span");

      arrow.className =
        "customer-dropdown-arrow";

      link.appendChild(
        arrow
      );

      link.addEventListener(
        "click",
        function (event) {

          if (
            window.innerWidth <= 1050
          ) {

            event.preventDefault();

            li.classList.toggle(
              "dropdown-open"
            );

          }

        }
      );

    }


    li.appendChild(link);


    if (item.dropdown) {

      const dropdown =
        document.createElement("ul");

      dropdown.className =
        "customer-dropdown";


      item.items.forEach(
        function (subItem) {

          const subLi =
            document.createElement("li");

          const subLink =
            document.createElement("a");

          subLink.href =
            subItem.href;

          subLink.textContent =
            subItem.label;

          subLi.appendChild(
            subLink
          );

          dropdown.appendChild(
            subLi
          );

        }
      );


      li.appendChild(
        dropdown
      );

    }


    return li;

  }


  /* ==========================================================
     HEADER
     ========================================================== */

  function buildHeader() {

    if (
      document.querySelector(
        ".customer-header"
      )
    ) {
      return;
    }


    const header =
      document.createElement("header");

    header.className =
      "customer-header";


    const navbar =
      document.createElement("div");

    navbar.className =
      "customer-navbar";


    const container =
      document.createElement("div");

    container.className =
      "customer-nav-container";


    /* BRAND */

    const brand =
      document.createElement("a");

    brand.className =
      "customer-brand";

    brand.href =
      "index.html";

    brand.setAttribute(
      "aria-label",
      "CHATPHETCH GROUP"
    );


    const logo =
      document.createElement("img");

    logo.className =
      "customer-brand-logo";

    logo.src =
      "assets/logo.png";

    logo.alt =
      "CHATPHETCH GROUP";


    const brandCopy =
      document.createElement("span");

    brandCopy.className =
      "customer-brand-copy";


    const brandName =
      document.createElement("span");

    brandName.className =
      "customer-brand-name";

    /*
      แก้ spelling ตรงนี้ให้ถูกต้อง
    */
    brandName.textContent =
      "CHATPHETCH GROUP";


    const brandSub =
      document.createElement("span");

    brandSub.className =
      "customer-brand-sub";

    brandSub.textContent =
      "Flooring • Surface • Construction";


    brandCopy.appendChild(
      brandName
    );

    brandCopy.appendChild(
      brandSub
    );


    brand.appendChild(
      logo
    );

    brand.appendChild(
      brandCopy
    );


    /* NAV */

    const nav =
      document.createElement("nav");

    nav.className =
      "customer-nav";

    nav.setAttribute(
      "aria-label",
      "เมนูหลัก"
    );


    const navList =
      document.createElement("ul");

    navList.className =
      "customer-nav-list";


    NAV.forEach(
      function (item) {

        navList.appendChild(
          buildNavItem(item)
        );

      }
    );


    nav.appendChild(
      navList
    );


    /* TOGGLE */

    const toggle =
      document.createElement("button");

    toggle.type =
      "button";

    toggle.className =
      "customer-menu-toggle";

    toggle.setAttribute(
      "aria-label",
      "เปิดเมนู"
    );

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );


    const toggleInner =
      document.createElement("span");

    toggleInner.className =
      "customer-menu-toggle-inner";


    for (
      let i = 0;
      i < 3;
      i++
    ) {

      toggleInner.appendChild(
        document.createElement("span")
      );

    }


    toggle.appendChild(
      toggleInner
    );


    /* BACKDROP */

    const backdrop =
      document.createElement("div");

    backdrop.className =
      "customer-mobile-backdrop";


    container.appendChild(
      brand
    );

    container.appendChild(
      nav
    );

    container.appendChild(
      toggle
    );

    navbar.appendChild(
      container
    );

    header.appendChild(
      navbar
    );


    document.body.prepend(
      header
    );

    document.body.appendChild(
      backdrop
    );


    /* ========================================================
       MOBILE MENU EVENTS
       ======================================================== */

    function closeMenu() {

      nav.classList.remove(
        "open"
      );

      toggle.classList.remove(
        "open"
      );

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "เปิดเมนู"
      );

      document.body.classList.remove(
        "customer-menu-open"
      );

      document
        .querySelectorAll(
          ".customer-nav-item.dropdown-open"
        )
        .forEach(function (item) {

          item.classList.remove(
            "dropdown-open"
          );

        });

    }


    function openMenu() {

      nav.classList.add(
        "open"
      );

      toggle.classList.add(
        "open"
      );

      toggle.setAttribute(
        "aria-expanded",
        "true"
      );

      toggle.setAttribute(
        "aria-label",
        "ปิดเมนู"
      );

      document.body.classList.add(
        "customer-menu-open"
      );

    }


    toggle.addEventListener(
      "click",
      function () {

        if (
          nav.classList.contains(
            "open"
          )
        ) {

          closeMenu();

        } else {

          openMenu();

        }

      }
    );


    backdrop.addEventListener(
      "click",
      closeMenu
    );


    nav.addEventListener(
      "click",
      function (event) {

        const link =
          event.target.closest(
            "a"
          );

        if (!link) {
          return;
        }


        /*
          ถ้าเป็น submenu ให้ปิด menu
          เมื่อเลือกหน้าแล้ว
        */
        if (
          window.innerWidth <= 1050 &&
          !link.parentElement.classList.contains(
            "has-dropdown"
          )
        ) {

          closeMenu();

        }

      }
    );


    window.addEventListener(
      "resize",
      function () {

        if (
          window.innerWidth > 1050
        ) {

          closeMenu();

        }

      }
    );

  }


  /* ==========================================================
     FOOTER
     ========================================================== */

  function buildFooter() {

    if (
      document.querySelector(
        ".customer-footer"
      )
    ) {
      return;
    }


    const footer =
      document.createElement("footer");

    footer.className =
      "customer-footer";


    const inner =
      document.createElement("div");

    inner.className =
      "customer-footer-inner";


    const top =
      document.createElement("div");

    top.className =
      "customer-footer-top";


    /* ========================================================
       FOOTER BRAND
       ======================================================== */

    const brand =
      document.createElement("div");

    brand.className =
      "customer-footer-brand";


    const logo =
      document.createElement("img");

    logo.className =
      "customer-footer-logo";

    logo.src =
      "assets/logo.png";

    logo.alt =
      "CHATPHETCH GROUP";


    const brandContent =
      document.createElement("div");


    const brandName =
      document.createElement("div");

    brandName.className =
      "customer-footer-brand-name";

    /*
      แก้ spelling ให้ตรงกับ Header
    */
    brandName.textContent =
      "CHATPHETCH GROUP";


    const description =
      document.createElement("div");

    description.className =
      "customer-footer-brand-text";

    description.textContent =
      "ระบบงานพื้น วัสดุ การเคลือบผิว งานก่อสร้าง และคำปรึกษาสำหรับพื้นที่คุณภาพ";


    brandContent.appendChild(
      brandName
    );

    brandContent.appendChild(
      description
    );


    brand.appendChild(
      logo
    );

    brand.appendChild(
      brandContent
    );


    /* ========================================================
       FOOTER LINKS
       ======================================================== */

    const links =
      document.createElement("nav");

    links.className =
      "customer-footer-links";

    links.setAttribute(
      "aria-label",
      "เมนูท้ายเว็บไซต์"
    );


    /*
      Footer ให้ครบชุดเดียวกับเมนูบน
    */
    const FOOTER_NAV = [

      {
        label: "หน้าแรก",
        href: "index.html"
      },

      {
        label: "เกี่ยวกับเรา",
        href: "about.html"
      },

      {
        label: "สินค้า",
        href: "products.html"
      },

      {
        label: "บริการ",
        href: "services.html"
      },

      {
        label: "ผลงาน",
        href: "projects.html"
      },

      {
        label: "โครงการอ้างอิง",
        href: "reference.html"
      },

      {
        label: "ศูนย์เทคนิค",
        href: "technical-center.html"
      },

      {
        label: "คลังความรู้",
        href: "knowledge.html"
      },

      {
        label: "ติดต่อเรา",
        href: "contact.html"
      },

      {
        label: "🔎 ติดตามคำสั่งซื้อ",
        href: "order-status.html"
      },

      {
        label: "🛒 ตะกร้า",
        href: "cart.html"
      }

    ];


    FOOTER_NAV.forEach(
      function (item) {

        const link =
          document.createElement("a");

        link.href =
          item.href;

        link.textContent =
          item.label;

        links.appendChild(
          link
        );

      }
    );


    top.appendChild(
      brand
    );

    top.appendChild(
      links
    );


    /* ========================================================
       FOOTER BOTTOM
       ======================================================== */

    const bottom =
      document.createElement("div");

    bottom.className =
      "customer-footer-bottom";


    const copyright =
      document.createElement("div");

    copyright.textContent =
      "© " +
      new Date().getFullYear() +
      " CHATPHETCH GROUP. All rights reserved.";


    const credit =
      document.createElement("div");

    credit.className =
      "customer-footer-credit";

    credit.textContent =
      "QUALITY • DETAIL • SPACE";


    bottom.appendChild(
      copyright
    );

    bottom.appendChild(
      credit
    );


    inner.appendChild(
      top
    );

    inner.appendChild(
      bottom
    );


    footer.appendChild(
      inner
    );


    document.body.appendChild(
      footer
    );

  }


  /* ==========================================================
     INITIALIZE
     ========================================================== */

  function init() {

    injectStyles();

    buildHeader();

    buildFooter();

    updateCartBadges();

  }


  /* ==========================================================
     CART STORAGE CHANGE
     ========================================================== */

  window.addEventListener(
    "storage",
    function (event) {

      if (
        event.key ===
        "chatpetch_cart"
      ) {

        updateCartBadges();

      }

    }
  );


  /* ==========================================================
     CUSTOM CART EVENT
     ========================================================== */

  window.addEventListener(
    "cartUpdated",
    function () {

      updateCartBadges();

    }
  );


  /* ==========================================================
     START
     ========================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }


})();
