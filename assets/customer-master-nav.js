/* ============================================================
   CHATPHETCH GROUP
   MASTER NAVIGATION
   PREMIUM CORPORATE VERSION

   Header
   Desktop Navigation
   Mobile Navigation
   Footer
   Floating Contact Buttons
   Cart Badge
   ============================================================ */

(function () {

  "use strict";


  /* ==========================================================
     NAVIGATION
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
     FOOTER MENU
     ========================================================== */

  const FOOTER_MENU = [

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
      label: "ติดต่อเรา",
      href: "contact.html"
    }

  ];


  /* ==========================================================
     HELPERS
     ========================================================== */

  function getCurrentPage() {

    return (
      window.location.pathname
        .split("/")
        .pop() ||
      "index.html"
    );

  }


  function isActive(href) {

    if (!href) {
      return false;
    }

    const cleanHref =
      href
        .split("?")[0]
        .split("#")[0];

    return (
      cleanHref ===
      getCurrentPage()
    );

  }


  /* ==========================================================
     CART
     ========================================================== */

  function getCart() {

    try {

      const raw =
        localStorage.getItem(
          "chatpetch_cart"
        );

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

    return getCart().reduce(
      function (
        total,
        item
      ) {

        const quantity =
          Number(
            item.quantity ??
            item.qty ??
            1
          );

        if (
          !Number.isFinite(
            quantity
          )
        ) {

          return total;

        }

        return (
          total +
          Math.max(
            0,
            quantity
          )
        );

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
      .forEach(
        function (badge) {

          badge.textContent =
            String(count);

          badge.hidden =
            count <= 0;

        }
      );

  }


  /* ==========================================================
     MASTER CSS
     ========================================================== */

  const STYLE = `

  /* ==========================================================
     ROOT
     ========================================================== */

  :root {

    --cp-gold:
      #c6a06a;

    --cp-gold-light:
      #e3c88f;

    --cp-gold-bright:
      #f0d397;

    --cp-white:
      #f7f2ea;

    --cp-text:
      #9b948d;

    --cp-text-light:
      #b7b0a9;

    --cp-black:
      #050504;

    --cp-black-2:
      #090806;

    --cp-border:
      rgba(198,160,106,.26);

    --cp-border-soft:
      rgba(198,160,106,.14);

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
      rgba(9,7,5,.94);

    border-bottom:
      1px solid
      rgba(198,160,106,.18);

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

    gap: 24px;

  }


  /* ==========================================================
     HEADER BRAND
     ========================================================== */

  .customer-brand {

    flex:
      0 0 auto;

    display: inline-flex;

    align-items: center;

    gap: 12px;

    color:
      var(--cp-white);

    text-decoration: none;

  }


  .customer-brand-logo {

    width: 54px;
    height: 54px;

    object-fit: contain;

    flex:
      0 0 auto;

  }


  .customer-brand-copy {

    display: flex;

    flex-direction: column;

    line-height: 1;

    white-space: nowrap;

  }


  .customer-brand-name {

    color:
      var(--cp-white);

    font-size: 14px;

    font-weight: 600;

    letter-spacing:
      .15em;

  }


  .customer-brand-sub {

    margin-top: 6px;

    color:
      var(--cp-gold);

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

    flex:
      1 1 auto;

    display: flex;

    align-items: center;

    justify-content: flex-end;

  }


  .customer-nav-list {

    display: flex;

    align-items: center;

    justify-content: flex-end;

    gap: 2px;

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
      0 9px;

    color:
      rgba(247,242,234,.76);

    font-size: 12px;

    font-weight: 400;

    white-space: nowrap;

    text-decoration: none;

    transition:
      color .22s ease;

  }


  .customer-nav-link::after {

    content: "";

    position: absolute;

    left: 9px;
    right: 9px;

    bottom: 7px;

    height: 1px;

    background:
      var(--cp-gold);

    transform:
      scaleX(0);

    transform-origin:
      center;

    transition:
      transform .25s ease;

  }


  .customer-nav-link:hover {

    color:
      var(--cp-white);

  }


  .customer-nav-link:hover::after,
  .customer-nav-link.active::after {

    transform:
      scaleX(1);

  }


  .customer-nav-link.active {

    color:
      var(--cp-gold-light);

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

    top:
      calc(100% - 2px);

    left: 50%;

    min-width: 275px;

    margin: 0;

    padding: 10px;

    list-style: none;

    background:
      rgba(13,10,8,.99);

    border:
      1px solid
      var(--cp-border);

    box-shadow:
      0 25px 60px
      rgba(0,0,0,.48);

    transform:
      translate(-50%, 9px);

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

    min-height: 44px;

    padding:
      0 14px;

    color:
      rgba(247,242,234,.75);

    font-size: 12px;

    border-bottom:
      1px solid
      rgba(255,255,255,.055);

    text-decoration: none;

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
      var(--cp-gold-light);

    background:
      rgba(198,160,106,.08);

    padding-left:
      18px;

  }


  /* ==========================================================
     CART
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
      #1a120b;

    background:
      var(--cp-gold-light);

    font-size: 9px;

    font-weight: 700;

  }


  /* ==========================================================
     MOBILE MENU BUTTON
     ========================================================== */

  .customer-menu-toggle {

    display: none;

    width: 44px;
    height: 44px;

    padding: 0;

    border: 0;

    background:
      transparent;

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
      var(--cp-white);

    transition:
      top .25s ease,
      transform .25s ease,
      opacity .25s ease;

  }


  .customer-menu-toggle-inner
  span:nth-child(1) {

    top: 0;

  }


  .customer-menu-toggle-inner
  span:nth-child(2) {

    top: 8px;

  }


  .customer-menu-toggle-inner
  span:nth-child(3) {

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
      rgba(0,0,0,.56);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transition:
      opacity .2s ease,
      visibility .2s ease;

  }


  /* ==========================================================
     FOOTER
     ========================================================== */

  .customer-footer {

    position: relative;

    z-index: 10;

    width: 100%;

    background:
      linear-gradient(
        180deg,
        #080807 0%,
        #050504 100%
      );

    color:
      var(--cp-text);

    border-top:
      1px solid
      rgba(198,160,106,.14);

  }


  /* ==========================================================
     FOOTER INNER
     ========================================================== */

  .customer-footer-inner {

    width:
      min(
        calc(100% - 48px),
        1440px
      );

    margin-inline: auto;

    /*
      ลดจาก 58px
      ให้ Footer กระชับขึ้น
    */

    padding:
      38px 0 18px;

  }


  /* ==========================================================
     FOOTER UPPER
     ========================================================== */

  .customer-footer-upper {

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      320px;

    gap: 90px;

    /*
      ลดจาก 300px
      เพื่อให้เส้นทองเลื่อนขึ้น
    */

    min-height: 220px;

  }


  /* ==========================================================
     FOOTER BRAND
     ========================================================== */

  .customer-footer-brand-area {

    padding-top: 2px;

  }


  .customer-footer-brand {

    display: flex;

    align-items: center;

    gap: 20px;

  }


  .customer-footer-logo {

    width: 100px;
    height: 100px;

    object-fit: contain;

    flex:
      0 0 auto;

  }


  .customer-footer-brand-copy {

    display: flex;

    flex-direction: column;

  }


  .customer-footer-brand-name {

    color:
      #f5f1eb;

    font-size: 31px;

    line-height: 1;

    font-weight: 700;

    letter-spacing:
      -.025em;

  }


  .customer-footer-brand-sub {

    margin-top: 11px;

    color:
      var(--cp-gold-light);

    font-size: 14px;

    font-weight: 500;

    letter-spacing:
      .20em;

  }


  /* ==========================================================
     COMPANY INFORMATION
     ========================================================== */

  .customer-footer-info {

    /*
      ลดจาก 40px
    */

    margin-top: 28px;

  }


  .customer-footer-company-line {

    color:
      #89837d;

    font-size: 15px;

    line-height: 1.7;

  }


  .customer-footer-company-line.strong {

    color:
      #a39c95;

    font-size: 14px;

  }


  .customer-footer-company-line +
  .customer-footer-company-line {

    margin-top: 16px;

  }


  .customer-footer-company-line .flower {

    margin-right: 10px;

  }


  .customer-footer-service-line {

    display: flex;

    flex-wrap: wrap;

    align-items: center;

    gap: 28px;

    color:
      #918a84;

    font-size: 14px;

    line-height: 1.7;

  }


  .customer-footer-service-item {

    display: inline-flex;

    align-items: center;

    gap: 9px;

  }


  .customer-footer-service-item .icon {

    color:
      #7770ae;

    font-size: 19px;

  }


  /* ==========================================================
     FOOTER MENU
     ========================================================== */

  .customer-footer-menu {

    padding-top: 0;

  }


  .customer-footer-menu-title {

    display: inline-block;

    position: relative;

    padding-bottom: 14px;

    color:
      var(--cp-gold-light);

    font-size: 17px;

    font-weight: 600;

    letter-spacing:
      .08em;

    text-transform:
      uppercase;

  }


  .customer-footer-menu-title::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 53px;
    height: 2px;

    background:
      var(--cp-gold);

  }


  .customer-footer-menu-list {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    /*
      ลดระยะห่างเมนู
    */

    gap: 13px;

    margin:
      22px 0 0;

    padding: 0;

    list-style: none;

  }


  .customer-footer-menu-list li {

    margin: 0;
    padding: 0;

  }


  .customer-footer-menu-list a {

    display: inline-block;

    color:
      #78736e;

    font-size: 15px;

    line-height: 1.45;

    text-decoration: none;

    transition:
      color .2s ease,
      transform .2s ease;

  }


  .customer-footer-menu-list a:hover {

    color:
      var(--cp-gold-light);

    transform:
      translateX(3px);

  }


  /* ==========================================================
     FOOTER DIVIDER
     ========================================================== */

  .customer-footer-divider {

    width: 100%;

    height: 1px;

    /*
      ลดระยะจากเนื้อหาด้านบน
    */

    margin:
      8px 0 20px;

    background:
      rgba(198,160,106,.30);

  }


  /* ==========================================================
     FOOTER BOTTOM
     ========================================================== */

  .customer-footer-bottom {

    display: grid;

    grid-template-columns:
      minmax(270px, 1.25fr)
      minmax(220px, .9fr)
      auto
      auto;

    align-items: center;

    column-gap: 28px;

  }


  /* ==========================================================
     COPYRIGHT
     ========================================================== */

  .customer-footer-copyright {

    color:
      #77726c;

    font-size: 12px;

    line-height: 1.6;

    white-space: nowrap;

  }


  .customer-footer-copyright strong {

    color:
      #c9c4be;

    font-weight: 600;

  }


  /* ==========================================================
     ADDRESS
     ========================================================== */

  .customer-footer-address {

    display: flex;

    align-items: center;

    gap: 10px;

    min-width: 0;

    color:
      #858079;

    font-size: 12px;

    white-space: nowrap;

  }


  .customer-footer-address-icon {

    flex:
      0 0 auto;

    color:
      #f05b82;

    font-size: 17px;

  }


  /* ==========================================================
     ACTIONS
     ========================================================== */

  .customer-footer-actions {

    display: flex;

    align-items: center;

    gap: 14px;

    padding-left: 28px;

    border-left:
      1px solid
      rgba(198,160,106,.18);

  }


  .customer-footer-action {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 7px;

    min-height: 42px;

    padding:
      0 20px;

    border:
      1px solid
      rgba(198,160,106,.32);

    border-radius:
      12px;

    color:
      var(--cp-gold-light);

    background:
      rgba(16,12,9,.52);

    font-size: 12px;

    white-space: nowrap;

    text-decoration: none;

    transition:
      color .2s ease,
      background .2s ease,
      border-color .2s ease,
      transform .2s ease;

  }


  .customer-footer-action:hover {

    color:
      #fff5df;

    background:
      rgba(198,160,106,.10);

    border-color:
      var(--cp-gold);

    transform:
      translateY(-1px);

  }


  .customer-footer-action-icon {

    font-size: 14px;

  }


  /* ==========================================================
     SOCIAL
     ========================================================== */

  .customer-footer-social {

    display: flex;

    align-items: center;

    gap: 10px;

    padding-left: 26px;

    border-left:
      1px solid
      rgba(198,160,106,.18);

  }


  .customer-social {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    width: 60px;
    height: 60px;

    border:
      1px solid
      rgba(198,160,106,.38);

    border-radius: 50%;

    color:
      var(--cp-gold-light);

    background:
      rgba(15,11,8,.42);

    font-size: 19px;

    text-decoration: none;

    transition:
      color .2s ease,
      background .2s ease,
      border-color .2s ease,
      transform .2s ease;

  }


  .customer-social:hover {

    color:
      #fff5df;

    background:
      rgba(198,160,106,.10);

    border-color:
      var(--cp-gold);

    transform:
      translateY(-2px);

  }


  .customer-social.youtube {

    font-size: 17px;

  }


  .customer-social.line {

    font-size: 14px;

    font-weight: 500;

    letter-spacing:
      -.02em;

  }


  /* ==========================================================
     FLOATING PHONE
     ========================================================== */

  .customer-floating-phone {

    position: fixed;

    right: 24px;

    bottom: 92px;

    z-index: 8800;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    width: 58px;
    height: 58px;

    border:
      1px solid
      rgba(198,160,106,.45);

    border-radius: 50%;

    color:
      var(--cp-gold-light);

    background:
      rgba(10,8,6,.94);

    box-shadow:
      0 10px 35px
      rgba(0,0,0,.35);

    backdrop-filter:
      blur(10px);

    font-size: 20px;

    text-decoration: none;

    transition:
      transform .2s ease,
      border-color .2s ease,
      background .2s ease;

  }


  .customer-floating-phone:hover {

    transform:
      translateY(-3px);

    border-color:
      var(--cp-gold);

    background:
      rgba(198,160,106,.10);

  }


  /* ==========================================================
     TABLET / MOBILE NAV
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
        rgba(10,8,6,.99);

      border-top:
        1px solid
        var(--cp-border);

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
        12px 16px 25px;

    }


    .customer-nav-item {

      border-bottom:
        1px solid
        rgba(255,255,255,.06);

    }


    .customer-nav-link {

      width: 100%;

      min-height: 53px;

      justify-content: space-between;

      padding:
        0 8px;

      font-size: 13px;

    }


    .customer-nav-link::after {

      display: none;

    }


    .customer-dropdown {

      position: static;

      display: none;

      min-width: 0;

      padding:
        0 0 9px;

      background:
        transparent;

      border: 0;

      box-shadow: none;

      transform: none;

      opacity: 1;

      visibility: visible;

      pointer-events: auto;

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
        #8d8780;

      border: 0;

      font-size: 12px;

    }


    .customer-dropdown a:hover {

      padding-left: 32px;

      background:
        transparent;

    }


    .customer-menu-toggle {

      display: flex;

      flex:
        0 0 auto;

    }


    .customer-mobile-backdrop {

      display: block;

    }


    body.customer-menu-open
    .customer-mobile-backdrop {

      opacity: 1;

      visibility: visible;

      pointer-events: auto;

    }


    /* FOOTER TABLET */

    .customer-footer-inner {

      width:
        calc(100% - 36px);

    }


    .customer-footer-upper {

      grid-template-columns:
        minmax(0,1fr)
        250px;

      gap: 50px;

      min-height: 190px;

    }


    .customer-footer-brand-name {

      font-size: 26px;

    }


    .customer-footer-bottom {

      grid-template-columns:
        1fr 1fr;

      row-gap: 20px;

    }


    .customer-footer-copyright {

      white-space: normal;

    }


    .customer-footer-address {

      white-space: normal;

    }


    .customer-footer-actions {

      padding-left: 0;

      border-left: 0;

    }


    .customer-footer-social {

      padding-left: 0;

      border-left: 0;

      justify-content: flex-end;

    }

  }


  /* ==========================================================
     MOBILE 700
     ========================================================== */

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


    /* FOOTER */

    .customer-footer-inner {

      width:
        calc(100% - 28px);

      padding:
        38px 0 18px;

    }


    .customer-footer-upper {

      display: grid;

      grid-template-columns:
        1fr;

      gap: 38px;

      min-height: auto;

    }


    .customer-footer-brand {

      gap: 15px;

    }


    .customer-footer-logo {

      width: 78px;
      height: 78px;

    }


    .customer-footer-brand-name {

      font-size: 25px;

    }


    .customer-footer-brand-sub {

      font-size: 10px;

      letter-spacing:
        .17em;

    }


    .customer-footer-info {

      margin-top: 25px;

    }


    .customer-footer-company-line {

      font-size: 13px;

    }


    .customer-footer-service-line {

      gap: 12px 22px;

      font-size: 12px;

    }


    .customer-footer-menu {

      padding-top: 0;

    }


    .customer-footer-menu-list {

      display: grid;

      grid-template-columns:
        1fr 1fr;

      gap:
        12px 20px;

      margin-top: 22px;

    }


    .customer-footer-menu-list a {

      font-size: 13px;

    }


    .customer-footer-divider {

      margin:
        32px 0 20px;

    }


    .customer-footer-bottom {

      display: flex;

      flex-direction: column;

      align-items: stretch;

      gap: 16px;

    }


    .customer-footer-copyright {

      order: 1;

      font-size: 10px;

      white-space: normal;

    }


    .customer-footer-address {

      order: 2;

      font-size: 11px;

      white-space: normal;

    }


    .customer-footer-actions {

      order: 3;

      display: grid;

      grid-template-columns:
        1fr 1fr;

      width: 100%;

      gap: 10px;

    }


    .customer-footer-action {

      min-height: 44px;

      width: 100%;

      padding:
        0 10px;

      font-size: 11px;

    }


    .customer-footer-social {

      order: 4;

      justify-content: flex-start;

      padding-left: 0;

      border-left: 0;

    }


    .customer-social {

      width: 48px;
      height: 48px;

      font-size: 17px;

    }


    .customer-floating-phone {

      width: 52px;
      height: 52px;

      right: 17px;

      bottom: 17px;

      font-size: 18px;

    }

  }


  /* ==========================================================
     MOBILE 480
     ========================================================== */

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

      padding:
        10px 10px 25px;

    }


    .customer-footer-inner {

      width:
        calc(100% - 24px);

      padding:
        32px 0 16px;

    }


    .customer-footer-brand {

      align-items: flex-start;

    }


    .customer-footer-logo {

      width: 67px;
      height: 67px;

    }


    .customer-footer-brand-name {

      font-size: 21px;

    }


    .customer-footer-brand-sub {

      margin-top: 8px;

      font-size: 8px;

    }


    .customer-footer-company-line {

      font-size: 11px;

    }


    .customer-footer-service-line {

      display: grid;

      grid-template-columns:
        1fr;

      gap: 7px;

      font-size: 11px;

    }


    .customer-footer-menu-list {

      grid-template-columns:
        1fr;

      gap: 10px;

    }


    .customer-footer-action {

      font-size: 10px;

    }


    .customer-social {

      width: 45px;
      height: 45px;

    }


    .customer-floating-phone {

      width: 50px;
      height: 50px;

      right: 14px;

      bottom: 14px;

    }

  }


  /* ==========================================================
     ACCESSIBILITY
     ========================================================== */

  .customer-nav-link:focus-visible,
  .customer-dropdown a:focus-visible,
  .customer-menu-toggle:focus-visible,
  .customer-footer-menu-list a:focus-visible,
  .customer-footer-action:focus-visible,
  .customer-social:focus-visible,
  .customer-floating-phone:focus-visible {

    outline:
      1px solid
      var(--cp-gold-light);

    outline-offset: 3px;

  }

  `;


  /* ==========================================================
     INJECT STYLE
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
      document.createElement(
        "style"
      );

    style.id =
      "chatpetch-master-nav-style";

    style.textContent =
      STYLE;

    document.head.appendChild(
      style
    );

  }


  /* ==========================================================
     BUILD NAV ITEM
     ========================================================== */

  function buildNavItem(item) {

    const li =
      document.createElement(
        "li"
      );

    li.className =
      "customer-nav-item";


    if (item.dropdown) {

      li.classList.add(
        "has-dropdown"
      );

    }


    const link =
      document.createElement(
        "a"
      );

    link.className =
      "customer-nav-link";

    link.href =
      item.href || "#";

    link.textContent =
      item.label;


    if (
      !item.dropdown &&
      isActive(item.href)
    ) {

      link.classList.add(
        "active"
      );

    }


    /* CART */

    if (item.cart) {

      link.classList.add(
        "customer-cart-link"
      );


      const badge =
        document.createElement(
          "span"
        );

      badge.className =
        "customer-cart-badge";

      badge.setAttribute(
        "data-cart-count",
        ""
      );


      const count =
        getCartCount();


      badge.textContent =
        String(count);

      badge.hidden =
        count <= 0;


      link.appendChild(
        badge
      );

    }


    /* DROPDOWN */

    if (item.dropdown) {

      const arrow =
        document.createElement(
          "span"
        );

      arrow.className =
        "customer-dropdown-arrow";


      link.appendChild(
        arrow
      );


      link.addEventListener(
        "click",
        function (event) {

          if (
            window.innerWidth <=
            1050
          ) {

            event.preventDefault();

            li.classList.toggle(
              "dropdown-open"
            );

          }

        }
      );

    }


    li.appendChild(
      link
    );


    /* SUBMENU */

    if (item.dropdown) {

      const dropdown =
        document.createElement(
          "ul"
        );

      dropdown.className =
        "customer-dropdown";


      item.items.forEach(
        function (subItem) {

          const subLi =
            document.createElement(
              "li"
            );


          const subLink =
            document.createElement(
              "a"
            );


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
     BUILD HEADER
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
      document.createElement(
        "header"
      );

    header.className =
      "customer-header";


    const navbar =
      document.createElement(
        "div"
      );

    navbar.className =
      "customer-navbar";


    const container =
      document.createElement(
        "div"
      );

    container.className =
      "customer-nav-container";


    /* ========================================================
       BRAND
       ======================================================== */

    const brand =
      document.createElement(
        "a"
      );

    brand.className =
      "customer-brand";

    brand.href =
      "index.html";

    brand.setAttribute(
      "aria-label",
      "CHATPHETCH GROUP"
    );


    const logo =
      document.createElement(
        "img"
      );

    logo.className =
      "customer-brand-logo";

    logo.src =
      "assets/logo.png";

    logo.alt =
      "CHATPHETCH GROUP";


    const brandCopy =
      document.createElement(
        "span"
      );

    brandCopy.className =
      "customer-brand-copy";


    const brandName =
      document.createElement(
        "span"
      );

    brandName.className =
      "customer-brand-name";

    brandName.textContent =
      "CHATPHETCH GROUP";


    const brandSub =
      document.createElement(
        "span"
      );

    brandSub.className =
      "customer-brand-sub";

    brandSub.textContent =
      "FLOORING • SURFACE • CONSTRUCTION";


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


    /* ========================================================
       NAV
       ======================================================== */

    const nav =
      document.createElement(
        "nav"
      );

    nav.className =
      "customer-nav";

    nav.setAttribute(
      "aria-label",
      "เมนูหลัก"
    );


    const navList =
      document.createElement(
        "ul"
      );

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


    /* ========================================================
       MOBILE TOGGLE
       ======================================================== */

    const toggle =
      document.createElement(
        "button"
      );

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
      document.createElement(
        "span"
      );

    toggleInner.className =
      "customer-menu-toggle-inner";


    for (
      let i = 0;
      i < 3;
      i++
    ) {

      toggleInner.appendChild(
        document.createElement(
          "span"
        )
      );

    }


    toggle.appendChild(
      toggleInner
    );


    /* ========================================================
       BACKDROP
       ======================================================== */

    const backdrop =
      document.createElement(
        "div"
      );

    backdrop.className =
      "customer-mobile-backdrop";


    /* ========================================================
       APPEND HEADER
       ======================================================== */

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
       MENU FUNCTIONS
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
        .forEach(
          function (item) {

            item.classList.remove(
              "dropdown-open"
            );

          }
        );

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


        const parent =
          link.parentElement;


        if (
          window.innerWidth <=
          1050 &&
          !parent.classList.contains(
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
          window.innerWidth >
          1050
        ) {

          closeMenu();

        }

      }
    );

  }


  /* ==========================================================
     BUILD FOOTER
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
      document.createElement(
        "footer"
      );

    footer.className =
      "customer-footer";


    const inner =
      document.createElement(
        "div"
      );

    inner.className =
      "customer-footer-inner";


    /* ========================================================
       UPPER
       ======================================================== */

    const upper =
      document.createElement(
        "div"
      );

    upper.className =
      "customer-footer-upper";


    /* ========================================================
       LEFT
       ======================================================== */

    const brandArea =
      document.createElement(
        "div"
      );

    brandArea.className =
      "customer-footer-brand-area";


    const brand =
      document.createElement(
        "div"
      );

    brand.className =
      "customer-footer-brand";


    const logo =
      document.createElement(
        "img"
      );

    logo.className =
      "customer-footer-logo";

    logo.src =
      "assets/logo.png";

    logo.alt =
      "CHATPHETCH GROUP";


    const brandCopy =
      document.createElement(
        "div"
      );

    brandCopy.className =
      "customer-footer-brand-copy";


    const brandName =
      document.createElement(
        "div"
      );

    brandName.className =
      "customer-footer-brand-name";

    brandName.textContent =
      "CHATPHETCH GROUP";


    const brandSub =
      document.createElement(
        "div"
      );

    brandSub.className =
      "customer-footer-brand-sub";

    brandSub.textContent =
      "FLOORING & CONSTRUCTION";


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


    /* ========================================================
       COMPANY INFO
       ======================================================== */

    const info =
      document.createElement(
        "div"
      );

    info.className =
      "customer-footer-info";


    const companyLine =
      document.createElement(
        "div"
      );

    companyLine.className =
      "customer-footer-company-line";

    companyLine.innerHTML =
      '<span class="flower">🌹</span>' +
      'โรงงานผลิต-จำหน่าย วัสดุงานพื้นทุกประเภท ' +
      '<span class="flower">🌹</span>';


    const serviceLine =
      document.createElement(
        "div"
      );

    serviceLine.className =
      "customer-footer-service-line";


    const service1 =
      document.createElement(
        "span"
      );

    service1.className =
      "customer-footer-service-item";

    service1.innerHTML =
      '<span class="icon">♠</span>' +
      '<span>สร้างสรรค์ผลงาน</span>';


    const service2 =
      document.createElement(
        "span"
      );

    service2.className =
      "customer-footer-service-item";

    service2.innerHTML =
      '<span class="icon">♠</span>' +
      '<span>มาตรฐานเข้าถึง</span>';


    const service3 =
      document.createElement(
        "span"
      );

    service3.className =
      "customer-footer-service-item";

    service3.innerHTML =
      '<span class="icon">♠</span>' +
      '<span>ยืน 1 คุณภาพ</span>';


    serviceLine.appendChild(
      service1
    );

    serviceLine.appendChild(
      service2
    );

    serviceLine.appendChild(
      service3
    );


    const detailLine =
      document.createElement(
        "div"
      );

    detailLine.className =
      "customer-footer-company-line strong";

    detailLine.textContent =
      "บริการให้คำปรึกษาเกี่ยวกับพื้นทุกระบบแบบครบวงจร";


    info.appendChild(
      companyLine
    );

    info.appendChild(
      serviceLine
    );

    info.appendChild(
      detailLine
    );


    brandArea.appendChild(
      brand
    );

    brandArea.appendChild(
      info
    );


    /* ========================================================
       RIGHT MENU
       ======================================================== */

    const menu =
      document.createElement(
        "div"
      );

    menu.className =
      "customer-footer-menu";


    const menuTitle =
      document.createElement(
        "div"
      );

    menuTitle.className =
      "customer-footer-menu-title";

    menuTitle.textContent =
      "MENU";


    const menuList =
      document.createElement(
        "ul"
      );

    menuList.className =
      "customer-footer-menu-list";


    FOOTER_MENU.forEach(
      function (item) {

        const li =
          document.createElement(
            "li"
          );


        const link =
          document.createElement(
            "a"
          );


        link.href =
          item.href;

        link.textContent =
          item.label;


        li.appendChild(
          link
        );


        menuList.appendChild(
          li
        );

      }
    );


    menu.appendChild(
      menuTitle
    );

    menu.appendChild(
      menuList
    );


    /* ========================================================
       UPPER APPEND
       ======================================================== */

    upper.appendChild(
      brandArea
    );

    upper.appendChild(
      menu
    );


    /* ========================================================
       DIVIDER
       ======================================================== */

    const divider =
      document.createElement(
        "div"
      );

    divider.className =
      "customer-footer-divider";


    /* ========================================================
       BOTTOM
       ======================================================== */

    const bottom =
      document.createElement(
        "div"
      );

    bottom.className =
      "customer-footer-bottom";


    /* COPYRIGHT */

    const copyright =
      document.createElement(
        "div"
      );

    copyright.className =
      "customer-footer-copyright";

    copyright.innerHTML =
      "© " +
      new Date().getFullYear() +
      " " +
      "<strong>CHATPHETCH GROUP CO., LTD.</strong>" +
      " All Rights Reserved.";


    /* ADDRESS */

    const address =
      document.createElement(
        "div"
      );

    address.className =
      "customer-footer-address";


    const addressIcon =
      document.createElement(
        "span"
      );

    addressIcon.className =
      "customer-footer-address-icon";

    addressIcon.textContent =
      "📍";


    const addressText =
      document.createElement(
        "span"
      );

    addressText.textContent =
      "10/1 ม.9 ต.ท่าหม่อ อ.ท่าหม่อ จ.สงขลา 90310";


    address.appendChild(
      addressIcon
    );

    address.appendChild(
      addressText
    );


    /* ACTIONS */

    const actions =
      document.createElement(
        "div"
      );

    actions.className =
      "customer-footer-actions";


    const contact =
      document.createElement(
        "a"
      );

    contact.className =
      "customer-footer-action";

    contact.href =
      "contact.html";

    contact.innerHTML =
      '<span class="customer-footer-action-icon">☎</span>' +
      '<span>ติดต่อเรา</span>';


    const order =
      document.createElement(
        "a"
      );

    order.className =
      "customer-footer-action";

    order.href =
      "order-status.html";

    order.innerHTML =
      '<span class="customer-footer-action-icon">🔎</span>' +
      '<span>ติดตามคำสั่งซื้อ</span>';


    actions.appendChild(
      contact
    );

    actions.appendChild(
      order
    );


    /* SOCIAL */

    const social =
      document.createElement(
        "div"
      );

    social.className =
      "customer-footer-social";


    const facebook =
      document.createElement(
        "a"
      );

    facebook.className =
      "customer-social";

    facebook.href =
      "#";

    facebook.setAttribute(
      "aria-label",
      "Facebook"
    );

    facebook.textContent =
      "f";


    const youtube =
      document.createElement(
        "a"
      );

    youtube.className =
      "customer-social youtube";

    youtube.href =
      "#";

    youtube.setAttribute(
      "aria-label",
      "YouTube"
    );

    youtube.textContent =
      "▶";


    const line =
      document.createElement(
        "a"
      );

    line.className =
      "customer-social line";

    line.href =
      "#";

    line.setAttribute(
      "aria-label",
      "LINE"
    );

    line.textContent =
      "LINE";


    social.appendChild(
      facebook
    );

    social.appendChild(
      youtube
    );

    social.appendChild(
      line
    );


    /* ========================================================
       BUILD BOTTOM
       ======================================================== */

    bottom.appendChild(
      copyright
    );

    bottom.appendChild(
      address
    );

    bottom.appendChild(
      actions
    );

    bottom.appendChild(
      social
    );


    /* ========================================================
       BUILD FOOTER
       ======================================================== */

    inner.appendChild(
      upper
    );

    inner.appendChild(
      divider
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


    /* ========================================================
       FLOATING PHONE
       ======================================================== */

    const floatingPhone =
      document.createElement(
        "a"
      );

    floatingPhone.className =
      "customer-floating-phone";

    floatingPhone.href =
      "tel:";

    floatingPhone.setAttribute(
      "aria-label",
      "โทรหา CHATPHETCH GROUP"
    );

    floatingPhone.textContent =
      "☎";


    document.body.appendChild(
      floatingPhone
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
     CART EVENTS
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
