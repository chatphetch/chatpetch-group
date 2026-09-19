/* ============================================================
   CHATPHETCH GROUP
   MASTER NAVIGATION
   Header + Desktop Navigation + Mobile Navigation
   Footer - Corporate Premium Layout
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

  function currentPage() {

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

    return cleanHref === currentPage();

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

      const data =
        JSON.parse(raw);

      return Array.isArray(data)
        ? data
        : [];

    } catch (error) {

      return [];

    }

  }


  function getCartCount() {

    return getCart().reduce(
      function (total, item) {

        const quantity =
          Number(
            item.quantity ??
            item.qty ??
            1
          );

        return total +
          (
            Number.isFinite(quantity)
              ? Math.max(0, quantity)
              : 0
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
     VARIABLES
     ========================================================== */

  :root {

    --cp-nav-bg:
      rgba(14, 10, 8, .94);

    --cp-nav-bg-mobile:
      rgba(13, 9, 7, .99);

    --cp-nav-border:
      rgba(198, 160, 106, .20);

    --cp-nav-border-soft:
      rgba(255, 255, 255, .09);

    --cp-nav-gold:
      #c6a06a;

    --cp-nav-gold-light:
      #e3c88f;

    --cp-nav-white:
      #f6f1e9;

    --cp-nav-text:
      #aaa197;

    --cp-nav-dark:
      #0a0806;

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
        rgba(8, 6, 5, .97),
        rgba(14, 10, 8, .91)
      );

    border-bottom:
      1px solid
      var(--cp-nav-border);

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

    gap: 25px;

  }


  /* ==========================================================
     BRAND
     ========================================================== */

  .customer-brand {

    flex:
      0 0 auto;

    display: inline-flex;

    align-items: center;

    gap: 12px;

    min-width: 0;

    color:
      var(--cp-nav-white);

  }


  .customer-brand-logo {

    width: 54px;
    height: 54px;

    flex:
      0 0 auto;

    object-fit: contain;

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
     DESKTOP NAVIGATION
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
      rgba(246,241,233,.76);

    font-size: 12px;

    font-weight: 400;

    white-space: nowrap;

    transition:
      color .2s ease;

  }


  .customer-nav-link::after {

    content: "";

    position: absolute;

    left: 9px;
    right: 9px;

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

    top:
      calc(100% - 2px);

    left: 50%;

    min-width: 270px;

    margin: 0;
    padding: 10px;

    list-style: none;

    background:
      rgba(17, 12, 9, .99);

    border:
      1px solid
      var(--cp-nav-border);

    box-shadow:
      0 22px 55px
      rgba(0,0,0,.45);

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
      rgba(246,241,233,.76);

    font-size: 12px;

    border-bottom:
      1px solid
      rgba(255,255,255,.05);

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
      #1b120a;

    background:
      var(--cp-nav-gold-light);

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
      rgba(0,0,0,.55);

  }


  /* ==========================================================
     FOOTER
     ========================================================== */

  .customer-footer {

    position: relative;

    z-index: 10;

    width: 100%;

    color:
      var(--cp-nav-text);

    background:
      linear-gradient(
        180deg,
        rgba(8,7,6,.98),
        rgba(4,4,3,1)
      );

    border-top:
      1px solid
      var(--cp-nav-border);

  }


  .customer-footer-inner {

    width:
      min(
        calc(100% - 48px),
        1440px
      );

    margin-inline: auto;

    padding:
      28px 0 26px;

  }


  /* ==========================================================
     FOOTER TOP LINE
     ========================================================== */

  .customer-footer-line {

    width: 100%;
    height: 1px;

    margin-bottom: 25px;

    background:
      rgba(198,160,106,.24);

  }


  /* ==========================================================
     FOOTER MAIN BAR
     ========================================================== */

  .customer-footer-main {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 28px;

  }


  /* ==========================================================
     COPYRIGHT
     ========================================================== */

  .customer-footer-copyright {

    flex:
      1 1 auto;

    min-width: 300px;

    color:
      #77736f;

    font-size: 12px;

    line-height: 1.6;

    white-space: nowrap;

  }


  .customer-footer-copyright strong {

    color:
      #c8c4bf;

    font-weight: 600;

  }


  /* ==========================================================
     LOCATION
     ========================================================== */

  .customer-footer-location {

    flex:
      0 1 auto;

    display: flex;

    align-items: center;

    gap: 11px;

    min-width: 260px;

    padding-right: 22px;

    border-right:
      1px solid
      rgba(198,160,106,.20);

    color:
      #8b8580;

    font-size: 12px;

    white-space: nowrap;

  }


  .customer-footer-location-icon {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    width: 18px;
    height: 18px;

    color:
      var(--cp-nav-gold-light);

    font-size: 15px;

  }


  /* ==========================================================
     FOOTER ACTIONS
     ========================================================== */

  .customer-footer-actions {

    display: flex;

    align-items: center;

    gap: 14px;

    padding-right: 20px;

    border-right:
      1px solid
      rgba(198,160,106,.20);

  }


  .customer-footer-action {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 7px;

    min-height: 40px;

    padding:
      0 20px;

    border:
      1px solid
      rgba(198,160,106,.30);

    border-radius: 11px;

    color:
      var(--cp-nav-gold-light);

    background:
      rgba(20,15,11,.40);

    font-size: 12px;

    white-space: nowrap;

    transition:
      border-color .25s ease,
      background .25s ease,
      color .25s ease,
      transform .25s ease;

  }


  .customer-footer-action:hover {

    border-color:
      var(--cp-nav-gold);

    background:
      rgba(198,160,106,.10);

    color:
      #fff4df;

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

  }


  .customer-social {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    width: 60px;
    height: 60px;

    border:
      1px solid
      rgba(198,160,106,.36);

    border-radius: 50%;

    color:
      var(--cp-nav-gold-light);

    background:
      rgba(18,13,9,.35);

    font-size: 19px;

    transition:
      border-color .25s ease,
      background .25s ease,
      color .25s ease,
      transform .25s ease;

  }


  .customer-social:hover {

    border-color:
      var(--cp-nav-gold);

    background:
      rgba(198,160,106,.12);

    color:
      #fff3d8;

    transform:
      translateY(-2px);

  }


  .customer-social.line {

    font-size: 15px;

    letter-spacing:
      -.03em;

  }


  .customer-social.youtube {

    font-size: 17px;

  }


  /* ==========================================================
     FOOTER SECONDARY MENU
     ========================================================== */

  .customer-footer-secondary {

    display: flex;

    align-items: center;

    justify-content: flex-end;

    gap: 24px;

    margin-top: 18px;

    padding-top: 17px;

    border-top:
      1px solid
      rgba(255,255,255,.055);

  }


  .customer-footer-secondary a {

    color:
      #69645f;

    font-size: 10px;

    transition:
      color .2s ease;

  }


  .customer-footer-secondary a:hover {

    color:
      var(--cp-nav-gold-light);

  }


  /* ==========================================================
     FLOATING PHONE BUTTON
     ========================================================== */

  .customer-floating-phone {

    position: fixed;

    right: 24px;
    bottom: 24px;

    z-index: 8800;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    width: 58px;
    height: 58px;

    border:
      1px solid
      rgba(198,160,106,.50);

    border-radius: 50%;

    color:
      var(--cp-nav-gold-light);

    background:
      rgba(14,10,7,.92);

    box-shadow:
      0 10px 30px
      rgba(0,0,0,.35);

    backdrop-filter:
      blur(10px);

    font-size: 20px;

    transition:
      transform .25s ease,
      background .25s ease,
      border-color .25s ease;

  }


  .customer-floating-phone:hover {

    transform:
      translateY(-3px);

    border-color:
      var(--cp-nav-gold);

    background:
      rgba(198,160,106,.13);

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
        1px solid
        var(--cp-nav-border);

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

      margin: 0;

      padding:
        12px 16px 28px;

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

      min-width: 0;

      display: none;

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
        #928a82;

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

      flex:
        0 0 auto;

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


    /* FOOTER MOBILE */

    .customer-footer-inner {

      width:
        calc(100% - 32px);

    }


    .customer-footer-main {

      flex-wrap: wrap;

      align-items: stretch;

    }


    .customer-footer-copyright {

      min-width: 100%;

      white-space: normal;

      order: 1;

    }


    .customer-footer-location {

      min-width: auto;

      flex: 1 1 100%;

      padding-right: 0;

      padding-bottom: 15px;

      border-right: 0;

      border-bottom:
        1px solid
        rgba(198,160,106,.16);

      order: 2;

    }


    .customer-footer-actions {

      padding-right: 0;

      border-right: 0;

      order: 3;

      flex-wrap: wrap;

    }


    .customer-footer-social {

      order: 4;

      margin-left: auto;

    }


    .customer-footer-secondary {

      justify-content: flex-start;

      flex-wrap: wrap;

      gap: 12px 20px;

    }


    .customer-social {

      width: 48px;
      height: 48px;

    }


    .customer-floating-phone {

      width: 52px;
      height: 52px;

      right: 17px;
      bottom: 17px;

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

      padding:
        24px 0 22px;

    }


    .customer-footer-line {

      margin-bottom: 20px;

    }


    .customer-footer-main {

      display: grid;

      grid-template-columns:
        1fr;

      gap: 18px;

    }


    .customer-footer-location {

      width: 100%;

    }


    .customer-footer-actions {

      display: grid;

      grid-template-columns:
        1fr 1fr;

      width: 100%;

    }


    .customer-footer-action {

      width: 100%;

      padding:
        0 10px;

    }


    .customer-footer-social {

      justify-content: flex-start;

      margin-left: 0;

    }


    .customer-footer-secondary {

      justify-content: flex-start;

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


    .customer-footer-main {

      gap: 16px;

    }


    .customer-footer-copyright {

      font-size: 10px;

    }


    .customer-footer-location {

      font-size: 10px;

      white-space: normal;

      line-height: 1.6;

    }


    .customer-footer-actions {

      grid-template-columns:
        1fr;

    }


    .customer-footer-action {

      min-height: 44px;

    }


    .customer-social {

      width: 46px;
      height: 46px;

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
  .customer-footer-action:focus-visible,
  .customer-social:focus-visible,
  .customer-footer-secondary a:focus-visible {

    outline:
      1px solid
      var(--cp-nav-gold-light);

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
      document.createElement("style");

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

    link.href =
      item.href || "#";


    if (
      !item.dropdown &&
      isActive(item.href)
    ) {

      link.classList.add(
        "active"
      );

    }


    link.textContent =
      item.label;


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


    li.appendChild(
      link
    );


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


    /* --------------------------------------------------------
       BRAND
       -------------------------------------------------------- */

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


    /* --------------------------------------------------------
       NAV
       -------------------------------------------------------- */

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


    /* --------------------------------------------------------
       MOBILE TOGGLE
       -------------------------------------------------------- */

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


    /* --------------------------------------------------------
       BACKDROP
       -------------------------------------------------------- */

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
       MOBILE MENU FUNCTIONS
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
          window.innerWidth <= 1050 &&
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


    /* ========================================================
       TOP GOLD LINE
       ======================================================== */

    const line =
      document.createElement("div");

    line.className =
      "customer-footer-line";


    /* ========================================================
       MAIN FOOTER BAR
       ======================================================== */

    const main =
      document.createElement("div");

    main.className =
      "customer-footer-main";


    /* ========================================================
       COPYRIGHT
       ======================================================== */

    const copyright =
      document.createElement("div");

    copyright.className =
      "customer-footer-copyright";


    const year =
      new Date().getFullYear();


    copyright.innerHTML =
      "© " +
      year +
      " " +
      "<strong>CHATPHETCH GROUP CO., LTD.</strong>" +
      " All Rights Reserved.";


    /* ========================================================
       LOCATION
       ======================================================== */

    const location =
      document.createElement("div");

    location.className =
      "customer-footer-location";


    const locationIcon =
      document.createElement("span");

    locationIcon.className =
      "customer-footer-location-icon";

    locationIcon.textContent =
      "📍";


    const locationText =
      document.createElement("span");

    locationText.textContent =
      "10/1 ม.9 ต.ท่าหม่อ อ.ท่าหม่อ จ.สงขลา 90310";


    location.appendChild(
      locationIcon
    );

    location.appendChild(
      locationText
    );


    /* ========================================================
       ACTIONS
       ======================================================== */

    const actions =
      document.createElement("div");

    actions.className =
      "customer-footer-actions";


    /* CONTACT */

    const contact =
      document.createElement("a");

    contact.className =
      "customer-footer-action";

    contact.href =
      "contact.html";

    contact.setAttribute(
      "aria-label",
      "ติดต่อเรา"
    );


    const contactIcon =
      document.createElement("span");

    contactIcon.className =
      "customer-footer-action-icon";

    contactIcon.textContent =
      "☎";


    const contactText =
      document.createElement("span");

    contactText.textContent =
      "ติดต่อเรา";


    contact.appendChild(
      contactIcon
    );

    contact.appendChild(
      contactText
    );


    /* ORDER */

    const order =
      document.createElement("a");

    order.className =
      "customer-footer-action";

    order.href =
      "order-status.html";

    order.setAttribute(
      "aria-label",
      "ติดตามคำสั่งซื้อ"
    );


    const orderIcon =
      document.createElement("span");

    orderIcon.className =
      "customer-footer-action-icon";

    orderIcon.textContent =
      "🔎";


    const orderText =
      document.createElement("span");

    orderText.textContent =
      "ติดตามคำสั่งซื้อ";


    order.appendChild(
      orderIcon
    );

    order.appendChild(
      orderText
    );


    actions.appendChild(
      contact
    );

    actions.appendChild(
      order
    );


    /* ========================================================
       SOCIAL
       ======================================================== */

    const social =
      document.createElement("div");

    social.className =
      "customer-footer-social";


    /* FACEBOOK */

    const facebook =
      document.createElement("a");

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


    /* YOUTUBE */

    const youtube =
      document.createElement("a");

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


    /* LINE */

    const lineSocial =
      document.createElement("a");

    lineSocial.className =
      "customer-social line";

    lineSocial.href =
      "#";

    lineSocial.setAttribute(
      "aria-label",
      "LINE"
    );

    lineSocial.textContent =
      "LINE";


    social.appendChild(
      facebook
    );

    social.appendChild(
      youtube
    );

    social.appendChild(
      lineSocial
    );


    /* ========================================================
       APPEND MAIN
       ======================================================== */

    main.appendChild(
      copyright
    );

    main.appendChild(
      location
    );

    main.appendChild(
      actions
    );

    main.appendChild(
      social
    );


    /* ========================================================
       SECONDARY FOOTER NAV
       ======================================================== */

    const secondary =
      document.createElement("nav");

    secondary.className =
      "customer-footer-secondary";

    secondary.setAttribute(
      "aria-label",
      "เมนูเพิ่มเติม"
    );


    const secondaryLinks = [

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
        label: "ตะกร้า",
        href: "cart.html"
      }

    ];


    secondaryLinks.forEach(
      function (item) {

        const link =
          document.createElement("a");

        link.href =
          item.href;

        link.textContent =
          item.label;

        secondary.appendChild(
          link
        );

      }
    );


    /* ========================================================
       BUILD FOOTER
       ======================================================== */

    inner.appendChild(
      line
    );

    inner.appendChild(
      main
    );

    inner.appendChild(
      secondary
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

    const phone =
      document.createElement("a");

    phone.className =
      "customer-floating-phone";

    phone.href =
      "tel:";

    phone.setAttribute(
      "aria-label",
      "โทรติดต่อ CHATPHETCH GROUP"
    );

    phone.textContent =
      "☎";


    document.body.appendChild(
      phone
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
