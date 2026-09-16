/* ============================================================
   CHATPHETCH GROUP — CUSTOMER MASTER HEADER
   ใช้กับทุกหน้า Customer

   - Header เดียวกันทุกหน้า
   - บริการมี dropdown
   - ผลงานเป็นลิงก์ตรง ไม่มี dropdown
   - Active menu อัตโนมัติ
   - Mobile menu
   - Mobile service dropdown
   - Cart count จาก localStorage
   ============================================================ */

(function () {
  "use strict";

  /* ============================================================
     MENU
     ============================================================ */

  const NAV = [
    {
      href: "index.html",
      label: "หน้าแรก",
      key: "home"
    },

    {
      href: "about.html",
      label: "เกี่ยวกับเรา",
      key: "about"
    },

    {
      href: "products.html",
      label: "สินค้า",
      key: "products"
    },

    {
      type: "dropdown",
      label: "บริการ",
      key: "services",

      items: [
        {
          href: "services.html",
          label: "ดูบริการทั้งหมด"
        },

        {
          href: "service-detail.html?service=industrial",
          label: "บริการระบบงานพื้น"
        },

        {
          href: "service-detail.html?service=coating",
          label: "บริการเคลือบผิว / สี"
        },

        {
          href: "service-detail.html?service=consulting",
          label: "ปรึกษาและเลือกวัสดุ"
        },

        {
          href: "service-detail.html?service=installation",
          label: "คำปรึกษางานติดตั้ง"
        }
      ]
    },

    /*
      IMPORTANT:
      ผลงานเป็นลิงก์ตรง
      ไม่มี dropdown
    */

    {
      href: "projects.html",
      label: "ผลงาน",
      key: "projects"
    },

    {
      href: "reference.html",
      label: "โครงการอ้างอิง",
      key: "reference"
    },

    {
      href: "technical-center.html",
      label: "ศูนย์เทคนิค",
      key: "technical"
    },

    {
      href: "knowledge.html",
      label: "คลังความรู้",
      key: "knowledge"
    },

    {
      href: "contact.html",
      label: "ติดต่อเรา",
      key: "contact"
    },

    {
      href: "order-status.html",
      label: "🔎 ติดตามคำสั่งซื้อ",
      key: "orders"
    },

    {
      href: "cart.html",
      label: "🛒 ตะกร้า",
      key: "cart",
      shop: true
    }
  ];


  /* ============================================================
     PAGE → ACTIVE MENU
     ============================================================ */

  const PAGE_KEYS = {

    "index.html":
      "home",

    "about.html":
      "about",

    "products.html":
      "products",

    "product-detail.html":
      "products",

    "services.html":
      "services",

    "service-detail.html":
      "services",

    "projects.html":
      "projects",

    "project-detail.html":
      "projects",

    "reference.html":
      "reference",

    "technical-center.html":
      "technical",

    "knowledge.html":
      "knowledge",

    "knowledge-detail.html":
      "knowledge",

    "contact.html":
      "contact",

    "cart.html":
      "cart",

    "checkout.html":
      "cart",

    "order-status.html":
      "orders"
  };


  const pageName =
    (
      window.location.pathname
        .split("/")
        .pop() || "index.html"
    ).toLowerCase();


  const activeKey =
    PAGE_KEYS[pageName] || "home";


  /* ============================================================
     MASTER HEADER CSS
     ============================================================ */

  const css = `

    /* ========================================================
       HEADER
       ======================================================== */

    .cp-master-header,
    .cp-master-header * {
      box-sizing: border-box;
    }


    .cp-master-header {

      position: fixed;

      top: 3px;
      left: 0;

      width: 100%;

      z-index: 10000;

      background:
        rgba(3, 3, 3, .78);

      backdrop-filter:
        blur(18px);

      -webkit-backdrop-filter:
        blur(18px);

      border-bottom:
        1px solid rgba(201, 164, 92, .16);

      color: #fff;

      font-family:
        "Prompt",
        "Kanit",
        sans-serif;
    }


    /* ========================================================
       CONTAINER
       ======================================================== */

    .cp-master-header .cp-header-container {

      width:
        min(
          1280px,
          calc(100% - 80px)
        );

      margin:
        0 auto;
    }


    /* ========================================================
       NAVBAR
       ======================================================== */

    .cp-master-header .cp-navbar {

      height: 86px;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 20px;
    }


    /* ========================================================
       BRAND
       ======================================================== */

    .cp-master-header .cp-brand {

      min-width: 0;

      display: flex;

      align-items: center;

      gap: 14px;

      flex: 0 0 auto;

      color: #fff;

      text-decoration: none;
    }


    .cp-master-header .cp-brand img {

      width: 72px !important;

      height: 72px !important;

      max-width: 72px !important;

      max-height: 72px !important;

      object-fit: contain;

      display: block;

      flex: 0 0 72px;
    }


    .cp-master-header .cp-brand-text {

      min-width: 0;

      display: flex;

      flex-direction: column;

      justify-content: center;
    }


    .cp-master-header
    .cp-brand-text strong {

      display: block;

      font-family:
        "Prompt",
        "Kanit",
        sans-serif;

      font-size: 18px;

      line-height: 1.15;

      font-weight: 600;

      letter-spacing: 1.8px;

      white-space: nowrap;
    }


    .cp-master-header
    .cp-brand-text small {

      display: block;

      margin-top: 4px;

      color: #c9a45c;

      font-family: Arial, sans-serif;

      font-size: 9px;

      line-height: 1.1;

      letter-spacing: 2px;

      white-space: nowrap;
    }


    /* ========================================================
       MAIN NAV
       ======================================================== */

    .cp-master-header .cp-nav {

      display: flex;

      align-items: center;

      justify-content: flex-end;

      gap: 2px;

      min-width: 0;
    }


    .cp-master-header .cp-nav > a,
    .cp-master-header .cp-drop-trigger {

      position: relative;

      min-height: 46px;

      padding:
        11px 10px;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      gap: 5px;

      border: 0;

      background: transparent;

      color: #cfcfcf;

      font:
        500 12px/1.2
        "Prompt",
        "Kanit",
        sans-serif;

      text-decoration: none;

      cursor: pointer;

      white-space: nowrap;

      transition:
        color .25s ease,
        background .25s ease;
    }


    /* ========================================================
       ACTIVE / HOVER LINE
       ======================================================== */

    .cp-master-header .cp-nav > a::after,
    .cp-master-header .cp-drop-trigger::after {

      content: "";

      position: absolute;

      left: 10px;
      right: 10px;

      bottom: 4px;

      height: 1px;

      background: #c9a45c;

      transform:
        scaleX(0);

      transform-origin:
        center;

      transition:
        transform .25s ease;
    }


    .cp-master-header .cp-nav > a:hover,
    .cp-master-header .cp-drop-trigger:hover,
    .cp-master-header .cp-nav > a.cp-active,
    .cp-master-header .cp-drop-trigger.cp-active {

      color: #fff;
    }


    .cp-master-header .cp-nav > a:hover::after,
    .cp-master-header .cp-nav > a.cp-active::after,
    .cp-master-header .cp-drop-trigger:hover::after,
    .cp-master-header .cp-drop-trigger.cp-active::after {

      transform:
        scaleX(1);
    }


    /* ========================================================
       DROPDOWN
       ======================================================== */

    .cp-master-header .cp-dropdown {

      position: relative;
    }


    .cp-master-header
    .cp-drop-trigger
    .cp-arrow {

      font-size: 9px;

      color: #c9a45c;

      transition:
        transform .2s ease;
    }


    .cp-master-header
    .cp-dropdown:hover
    .cp-arrow,

    .cp-master-header
    .cp-dropdown.cp-open
    .cp-arrow {

      transform:
        rotate(180deg);
    }


    /* ========================================================
       SUB MENU
       ======================================================== */

    .cp-master-header .cp-submenu {

      position: absolute;

      top:
        calc(100% - 1px);

      left: 50%;

      transform:
        translateX(-50%)
        translateY(8px);

      width: 245px;

      padding: 8px;

      background:
        rgba(8, 8, 8, .98);

      border:
        1px solid
        rgba(201, 164, 92, .35);

      box-shadow:
        0 22px 55px
        rgba(0, 0, 0, .6);

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .2s ease,
        transform .2s ease,
        visibility .2s ease;
    }


    .cp-master-header
    .cp-dropdown:hover
    .cp-submenu,

    .cp-master-header
    .cp-dropdown.cp-open
    .cp-submenu {

      opacity: 1;

      visibility: visible;

      pointer-events: auto;

      transform:
        translateX(-50%)
        translateY(0);
    }


    .cp-master-header
    .cp-submenu a {

      display: flex;

      align-items: center;

      min-height: 42px;

      padding:
        9px 12px;

      color: #cfcfcf;

      font:
        400 12px/1.35
        "Prompt",
        "Kanit",
        sans-serif;

      text-decoration: none;

      border:
        1px solid transparent;

      transition:
        .2s ease;
    }


    .cp-master-header
    .cp-submenu a:hover {

      color: #fff;

      border-color:
        rgba(201, 164, 92, .22);

      background:
        rgba(201, 164, 92, .07);
    }


    /* ========================================================
       CART
       ======================================================== */

    .cp-master-header .cp-shop {

      margin-left: 5px;

      border:
        1px solid
        rgba(201, 164, 92, .4) !important;

      color:
        #e9cf8b !important;
    }


    .cp-master-header
    .cp-shop::after {

      display: none;
    }


    .cp-master-header
    .cp-cart-count {

      display: inline-grid;

      place-items: center;

      min-width: 18px;

      height: 18px;

      padding:
        0 4px;

      margin-left: 3px;

      border-radius: 50%;

      background:
        #c9a45c;

      color:
        #000;

      font:
        700 10px/1
        Arial,
        sans-serif;
    }


    /* ========================================================
       MOBILE BUTTON
       ======================================================== */

    .cp-master-header
    .cp-menu-toggle {

      display: none;

      width: 44px;

      height: 44px;

      flex: 0 0 44px;

      border:
        1px solid
        rgba(201, 164, 92, .35);

      background:
        rgba(255, 255, 255, .03);

      color: #fff;

      cursor: pointer;

      font-size: 20px;
    }


    /* ========================================================
       1250px
       ======================================================== */

    @media (max-width: 1250px) {

      .cp-master-header
      .cp-header-container {

        width:
          min(
            1280px,
            calc(100% - 40px)
          );
      }


      .cp-master-header
      .cp-nav > a,

      .cp-master-header
      .cp-drop-trigger {

        padding-left: 8px;

        padding-right: 8px;

        font-size: 11px;
      }


      .cp-master-header
      .cp-brand-text strong {

        font-size: 16px;
      }
    }


    /* ========================================================
       1050px — MOBILE / TABLET
       ======================================================== */

    @media (max-width: 1050px) {

      .cp-master-header
      .cp-header-container {

        width:
          calc(100% - 28px);
      }


      .cp-master-header
      .cp-navbar {

        height: 78px;
      }


      .cp-master-header
      .cp-brand img {

        width: 58px !important;

        height: 58px !important;

        max-width: 58px !important;

        max-height: 58px !important;

        flex-basis: 58px;
      }


      .cp-master-header
      .cp-brand-text strong {

        font-size: 15px;

        letter-spacing: 1.2px;
      }


      .cp-master-header
      .cp-brand-text small {

        font-size: 8px;

        letter-spacing: 1.4px;
      }


      .cp-master-header
      .cp-menu-toggle {

        display: block;
      }


      .cp-master-header
      .cp-nav {

        position: absolute;

        top:
          calc(100% + 1px);

        left: 0;

        right: 0;

        display: none;

        flex-direction: column;

        align-items: stretch;

        justify-content: flex-start;

        gap: 0;

        max-height:
          calc(100vh - 85px);

        overflow: auto;

        padding: 10px;

        background:
          rgba(5, 5, 5, .98);

        border-bottom:
          1px solid
          rgba(201, 164, 92, .25);

        box-shadow:
          0 25px 60px
          rgba(0, 0, 0, .65);
      }


      .cp-master-header
      .cp-nav.cp-show {

        display: flex;
      }


      .cp-master-header
      .cp-nav > a,

      .cp-master-header
      .cp-drop-trigger {

        width: 100%;

        min-height: 48px;

        justify-content: flex-start;

        padding:
          12px 14px;

        font-size: 13px;
      }


      .cp-master-header
      .cp-nav > a::after,

      .cp-master-header
      .cp-drop-trigger::after {

        display: none;
      }


      .cp-master-header
      .cp-dropdown {

        width: 100%;
      }


      /* mobile dropdown */

      .cp-master-header
      .cp-submenu {

        position: static;

        width: 100%;

        transform: none;

        padding:
          0 0 5px 12px;

        background: transparent;

        border: 0;

        box-shadow: none;

        opacity: 1;

        visibility: visible;

        pointer-events: auto;

        display: none;
      }


      .cp-master-header
      .cp-dropdown.cp-open
      .cp-submenu {

        display: block;

        transform: none;
      }


      .cp-master-header
      .cp-submenu a {

        min-height: 44px;

        padding:
          10px 14px;
      }


      .cp-master-header
      .cp-shop {

        margin:
          4px 0 0;
      }
    }


    /* ========================================================
       650px — PHONE
       ======================================================== */

    @media (max-width: 650px) {

      .cp-master-header
      .cp-header-container {

        width:
          calc(100% - 20px);
      }


      .cp-master-header
      .cp-brand {

        gap: 9px;
      }


      .cp-master-header
      .cp-brand img {

        width: 48px !important;

        height: 48px !important;

        max-width: 48px !important;

        max-height: 48px !important;

        flex-basis: 48px;
      }


      .cp-master-header
      .cp-brand-text strong {

        font-size: 13px;

        letter-spacing: 1px;
      }


      .cp-master-header
      .cp-brand-text small {

        font-size: 7px;

        letter-spacing: 1px;
      }
    }

  `;


  /* ============================================================
     INJECT CSS
     ============================================================ */

  function injectStyle() {

    if (
      document.getElementById(
        "cp-master-header-style"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");


    style.id =
      "cp-master-header-style";


    style.textContent =
      css;


    document.head.appendChild(style);
  }


  /* ============================================================
     CART COUNT
     ============================================================ */

  function cartCount() {

    try {

      const raw =
        localStorage.getItem(
          "chatpetch_cart"
        );


      if (!raw) {
        return 0;
      }


      const cart =
        JSON.parse(raw);


      if (Array.isArray(cart)) {

        return cart.reduce(
          (sum, item) =>
            sum +
            Number(
              item.quantity || 1
            ),
          0
        );
      }


      if (
        cart &&
        Array.isArray(cart.items)
      ) {

        return cart.items.reduce(
          (sum, item) =>
            sum +
            Number(
              item.quantity || 1
            ),
          0
        );
      }


      return 0;

    } catch (error) {

      console.warn(
        "CHATPHETCH cart count error:",
        error
      );

      return 0;
    }
  }


  /* ============================================================
     RENDER NAV
     ============================================================ */

  function renderNav() {

    return NAV.map(item => {

      /* ----------------------------------------
         DROPDOWN
         ---------------------------------------- */

      if (
        item.type === "dropdown"
      ) {

        const active =
          activeKey === item.key
            ? " cp-active"
            : "";


        return `
          <div
            class="cp-dropdown"
            data-cp-dropdown
          >

            <button
              type="button"
              class="cp-drop-trigger${active}"
              aria-expanded="false"
            >
              ${item.label}

              <span class="cp-arrow">
                ▼
              </span>

            </button>


            <div class="cp-submenu">

              ${item.items
                .map(
                  sub => `
                    <a href="${sub.href}">
                      ${sub.label}
                    </a>
                  `
                )
                .join("")}

            </div>

          </div>
        `;
      }


      /* ----------------------------------------
         NORMAL LINK
         ---------------------------------------- */

      const active =
        activeKey === item.key
          ? " cp-active"
          : "";


      const shop =
        item.shop
          ? " cp-shop"
          : "";


      const count =
        item.shop
          ? `
            <span
              class="cp-cart-count"
              id="cpCartCount"
            >
              0
            </span>
          `
          : "";


      return `
        <a
          href="${item.href}"
          class="${shop.trim()}${active}"
          ${item.shop
            ? 'id="cpCartLink"'
            : ""}
        >
          ${item.label}
          ${count}
        </a>
      `;
    }).join("");
  }


  /* ============================================================
     BUILD HEADER
     ============================================================ */

  function buildHeader() {

    const header =
      document.createElement(
        "header"
      );


    header.className =
      "cp-master-header";


    header.innerHTML = `

      <div class="cp-header-container">

        <nav class="cp-navbar">


          <!-- BRAND -->

          <a
            href="index.html"
            class="cp-brand"
            aria-label="CHATPHETCH GROUP"
          >

            <img
              src="assets/logo.png"
              alt="CHATPHETCH GROUP"
              width="72"
              height="72"
            >


            <div class="cp-brand-text">

              <strong>
                CHATPHETCH GROUP
              </strong>

              <small>
                FLOORING &amp; CONSTRUCTION
              </small>

            </div>

          </a>


          <!-- NAV -->

          <div
            class="cp-nav"
            id="cpNavMenu"
          >

            ${renderNav()}

          </div>


          <!-- MOBILE -->

          <button
            type="button"
            class="cp-menu-toggle"
            id="cpMenuToggle"
            aria-label="เปิดเมนู"
            aria-expanded="false"
          >
            ☰
          </button>


        </nav>

      </div>
    `;


    return header;
  }


  /* ============================================================
     REMOVE OLD HEADER
     ============================================================ */

  function removeOldHeader() {

    const candidates = [

      ...document.querySelectorAll(
        "header"
      ),

      ...document.querySelectorAll(
        ".header"
      )
    ];


    const unique =
      [...new Set(candidates)];


    unique.forEach(el => {

      if (
        el.classList.contains(
          "cp-master-header"
        )
      ) {
        return;
      }


      if (
        el.closest(
          ".cp-master-header"
        )
      ) {
        return;
      }


      el.remove();
    });
  }


  /* ============================================================
     UPDATE CART
     ============================================================ */

  function updateCartCount() {

    const el =
      document.getElementById(
        "cpCartCount"
      );


    if (el) {

      el.textContent =
        String(
          cartCount()
        );
    }
  }


  /* ============================================================
     EVENTS
     ============================================================ */

  function bindEvents(header) {

    const menuToggle =
      header.querySelector(
        "#cpMenuToggle"
      );


    const nav =
      header.querySelector(
        "#cpNavMenu"
      );


    /* ----------------------------------------
       MOBILE MENU
       ---------------------------------------- */

    menuToggle.addEventListener(
      "click",
      function () {

        const show =
          nav.classList.toggle(
            "cp-show"
          );


        menuToggle.setAttribute(
          "aria-expanded",
          String(show)
        );
      }
    );


    /* ----------------------------------------
       DROPDOWN
       ---------------------------------------- */

    header
      .querySelectorAll(
        "[data-cp-dropdown]"
      )
      .forEach(dropdown => {

        const trigger =
          dropdown.querySelector(
            ".cp-drop-trigger"
          );


        trigger.addEventListener(
          "click",
          function (event) {

            event.preventDefault();

            event.stopPropagation();


            const isOpen =
              dropdown.classList.toggle(
                "cp-open"
              );


            trigger.setAttribute(
              "aria-expanded",
              String(isOpen)
            );


            /* close other dropdowns */

            header
              .querySelectorAll(
                "[data-cp-dropdown]"
              )
              .forEach(other => {

                if (
                  other !== dropdown
                ) {

                  other.classList.remove(
                    "cp-open"
                  );


                  const otherTrigger =
                    other.querySelector(
                      ".cp-drop-trigger"
                    );


                  if (
                    otherTrigger
                  ) {

                    otherTrigger.setAttribute(
                      "aria-expanded",
                      "false"
                    );
                  }
                }
              });
          }
        );
      });


    /* ----------------------------------------
       CLOSE MOBILE AFTER LINK
       ---------------------------------------- */

    header
      .querySelectorAll(
        ".cp-nav > a, .cp-submenu a"
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          function () {

            nav.classList.remove(
              "cp-show"
            );


            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );
          }
        );
      });


    /* ----------------------------------------
       CLICK OUTSIDE
       ---------------------------------------- */

    document.addEventListener(
      "click",
      function (event) {

        if (
          !header.contains(
            event.target
          )
        ) {

          header
            .querySelectorAll(
              "[data-cp-dropdown]"
            )
            .forEach(dropdown => {

              dropdown.classList.remove(
                "cp-open"
              );


              const trigger =
                dropdown.querySelector(
                  ".cp-drop-trigger"
                );


              if (trigger) {

                trigger.setAttribute(
                  "aria-expanded",
                  "false"
                );
              }
            });
        }
      }
    );


    /* ----------------------------------------
       CART UPDATE
       ---------------------------------------- */

    window.addEventListener(
      "storage",
      updateCartCount
    );


    window.addEventListener(
      "cart:updated",
      updateCartCount
    );
  }


  /* ============================================================
     INIT
     ============================================================ */

  function init() {

    if (
      !document.body
    ) {
      return;
    }


    if (
      document.querySelector(
        ".cp-master-header"
      )
    ) {
      return;
    }


    injectStyle();


    /*
      ลบ Header เดิมของหน้าออก
    */

    removeOldHeader();


    /*
      สร้าง Master Header
    */

    const header =
      buildHeader();


    document.body.prepend(
      header
    );


    /*
      ผูก Event
    */

    bindEvents(
      header
    );


    /*
      อัปเดตจำนวนตะกร้า
    */

    updateCartCount();
  }


  /* ============================================================
     START
     ============================================================ */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );

  } else {

    init();
  }

})();
