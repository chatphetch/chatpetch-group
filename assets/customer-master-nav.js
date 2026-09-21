/* ============================================================
   CHATPHETCH GROUP
   MASTER NAVIGATION + FOOTER + FAVICON
   ============================================================ */

(function () {
  "use strict";

  /* ==========================================================
     1. CANONICAL SERVICES
     ========================================================== */

  const SERVICES = [
    {
      label: "พื้นอุตสาหกรรม / อีพ็อกซี่ / พียู",
      href: "service-detail.html?service=industrial"
    },
    {
      label: "งานกันรั่วซึม ดาดฟ้า หลังคา พื้นอาคาร",
      href: "service-detail.html?service=waterproof"
    },
    {
      label: "งานซ่อมปรับปรุง งานคอนกรีต",
      href: "service-detail.html?service=concrete"
    },
    {
      label: "พื้นสนามกีฬา",
      href: "service-detail.html?service=sports"
    },
    {
      label: "พื้นตกแต่งเพื่อความสวยงาม",
      href: "service-detail.html?service=decorative"
    },
    {
      label: "ระบบงานสัญลักษณ์และเส้นจราจร",
      href: "service-detail.html?service=traffic"
    }
  ];


  /* ==========================================================
     2. MAIN NAVIGATION
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
        ...SERVICES
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
     3. FOOTER MENU
     ========================================================== */

  const FOOTER = [
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
     4. GLOBAL CSS
     ========================================================== */

  const css = `

    /* ========================================================
       HEADER
       ======================================================== */

    .customer-header{
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:5000;

      background:rgba(4,3,2,.90);

      backdrop-filter:blur(18px);
      -webkit-backdrop-filter:blur(18px);

      border-bottom:
        1px solid rgba(201,164,92,.16);

      box-shadow:
        0 10px 35px rgba(0,0,0,.18);
    }


    .customer-navbar{
      height:92px;
    }


    .customer-nav-container{

      width:min(
        1440px,
        calc(100% - 42px)
      );

      height:100%;

      margin:auto;

      display:flex;

      align-items:center;

      gap:24px;
    }


    /* ========================================================
       BRAND
       ======================================================== */

    .customer-brand{

      flex:0 0 auto;

      display:flex;

      align-items:center;

      gap:13px;

      color:#fff;

      text-decoration:none;
    }


    .customer-brand-logo{

      width:66px;
      height:66px;

      object-fit:contain;
    }


    .customer-brand-copy{
      display:block;
    }


    .customer-brand-name{

      display:block;

      font-family:
        Kanit,
        Prompt,
        sans-serif;

      font-size:18px;

      font-weight:600;

      letter-spacing:1.7px;

      white-space:nowrap;
    }


    .customer-brand-sub{

      display:block;

      margin-top:2px;

      color:#c9a45c;

      font-size:8px;

      letter-spacing:2px;

      white-space:nowrap;
    }


    /* ========================================================
       NAV
       ======================================================== */

    .customer-nav{

      margin-left:auto;

      min-width:0;
    }


    .customer-nav-list{

      display:flex;

      align-items:center;

      justify-content:flex-end;

      gap:1px;

      margin:0;

      padding:0;

      list-style:none;
    }


    .customer-nav-item{

      position:relative;

      list-style:none;
    }


    .customer-nav-link,
    .customer-nav-trigger{

      position:relative;

      display:flex;

      align-items:center;

      min-height:45px;

      padding:10px 8px;

      border:0;

      background:transparent;

      color:#c8c3bb;

      font-family:
        Prompt,
        Kanit,
        sans-serif;

      font-size:11px;

      line-height:1.2;

      white-space:nowrap;

      text-decoration:none;

      cursor:pointer;

      transition:.25s ease;
    }


    .customer-nav-link::after,
    .customer-nav-trigger::after{

      content:"";

      position:absolute;

      left:8px;

      right:8px;

      bottom:2px;

      height:1px;

      background:#c9a45c;

      transform:scaleX(0);

      transition:.25s ease;
    }


    .customer-nav-link:hover,
    .customer-nav-link.active,
    .customer-nav-trigger:hover{

      color:#fff;
    }


    .customer-nav-link:hover::after,
    .customer-nav-link.active::after,
    .customer-nav-trigger:hover::after{

      transform:scaleX(1);
    }


    .customer-nav-arrow{

      margin-left:6px;

      color:#e9cf8b;

      font-size:8px;
    }


    /* ========================================================
       DROPDOWN
       ======================================================== */

    .customer-nav-dropdown{

      position:absolute;

      top:calc(100% - 1px);

      left:0;

      width:365px;

      padding:5px 0;

      background:
        rgba(5,4,3,.985);

      border:
        1px solid rgba(201,164,92,.34);

      box-shadow:
        0 24px 65px rgba(0,0,0,.72);

      opacity:0;

      visibility:hidden;

      transform:translateY(8px);

      transition:.2s ease;
    }


    .customer-nav-item.has-dropdown:hover
    .customer-nav-dropdown,

    .customer-nav-item.dropdown-open
    .customer-nav-dropdown{

      opacity:1;

      visibility:visible;

      transform:none;
    }


    .customer-nav-dropdown a{

      display:block;

      padding:14px 18px;

      border-bottom:
        1px solid rgba(255,255,255,.075);

      color:#cfc8bf;

      font-size:12px;

      line-height:1.45;

      text-decoration:none;

      transition:.2s ease;
    }


    .customer-nav-dropdown a:last-child{

      border-bottom:0;
    }


    .customer-nav-dropdown a:hover{

      color:#ead18d;

      background:
        rgba(201,164,92,.075);

      padding-left:23px;
    }


    /* ========================================================
       CART
       ======================================================== */

    .customer-nav-item.cart-item > a{

      margin-left:4px;

      border:
        1px solid rgba(201,164,92,.36);

      color:#ead18d;
    }


    .customer-cart-count{

      display:inline-grid;

      place-items:center;

      min-width:18px;

      height:18px;

      margin-left:5px;

      border-radius:50%;

      background:#c9a45c;

      color:#080604;

      font-size:10px;

      font-weight:700;
    }


    /* ========================================================
       MOBILE MENU BUTTON
       ======================================================== */

    .customer-menu-toggle{

      display:none;

      flex:0 0 auto;

      width:44px;

      height:44px;

      border:
        1px solid rgba(201,164,92,.34);

      background:
        rgba(201,164,92,.04);

      cursor:pointer;
    }


    .customer-menu-toggle-inner{

      width:20px;

      display:grid;

      gap:4px;
    }


    .customer-menu-toggle-inner span{

      display:block;

      height:1px;

      background:#e9cf8b;
    }


    .customer-mobile-backdrop{

      display:none;
    }


    /* ========================================================
       FLOATING PHONE
       ======================================================== */

    .customer-floating-phone{

      position:fixed;

      right:18px;

      bottom:18px;

      z-index:4900;

      width:56px;

      height:56px;

      display:grid;

      place-items:center;

      border:
        1px solid rgba(201,164,92,.55);

      border-radius:50%;

      background:
        rgba(10,7,4,.92);

      color:#ead18d;

      text-decoration:none;

      font-size:21px;

      box-shadow:
        0 12px 35px rgba(0,0,0,.5);
    }


    /* ========================================================
       FOOTER
       ======================================================== */

    .customer-footer{

      border-top:
        1px solid rgba(255,255,255,.08);

      background:#030302;

      color:#999;
    }


    .customer-footer-inner{

      width:min(
        1440px,
        calc(100% - 42px)
      );

      margin:auto;

      padding:62px 0 22px;
    }


    .customer-footer-upper{

      display:grid;

      grid-template-columns:
        minmax(0,1fr)
        280px;

      gap:50px;
    }


    .customer-footer-brand{

      display:flex;

      align-items:center;

      gap:14px;
    }


    .customer-footer-logo{

      width:64px;

      height:64px;

      object-fit:contain;
    }


    .customer-footer-brand-name{

      color:#fff;

      font-family:
        Kanit,
        Prompt,
        sans-serif;

      font-size:18px;

      letter-spacing:1.6px;
    }


    .customer-footer-brand-sub{

      margin-top:2px;

      color:#c9a45c;

      font-size:8px;

      letter-spacing:2px;
    }


    .customer-footer-info{

      margin-top:17px;
    }


    .customer-footer-company-line{

      color:#aaa39a;

      font-size:12px;

      line-height:1.8;
    }


    .customer-footer-company-line.strong{

      margin-top:8px;

      color:#c7bfb4;
    }


    .customer-footer-service-line{

      display:flex;

      flex-wrap:wrap;

      gap:12px;

      margin-top:5px;
    }


    .customer-footer-service-item{

      font-size:11px;

      color:#8f887f;
    }


    .customer-footer-service-item .icon{

      color:#c9a45c;

      margin-right:4px;
    }


    .customer-footer-menu-title{

      margin-bottom:14px;

      color:#ead18d;

      font-family:
        Kanit,
        Prompt,
        sans-serif;

      font-size:12px;

      letter-spacing:2px;
    }


    .customer-footer-menu-list{

      margin:0;

      padding:0;

      list-style:none;
    }


    .customer-footer-menu-list li{

      margin-bottom:10px;
    }


    .customer-footer-menu-list a{

      color:#999;

      font-size:12px;

      text-decoration:none;
    }


    .customer-footer-menu-list a:hover{

      color:#ead18d;
    }


    .customer-footer-divider{

      height:1px;

      margin:38px 0 16px;

      background:
        rgba(255,255,255,.08);
    }


    .customer-footer-bottom{

      display:grid;

      grid-template-columns:
        auto
        1fr
        auto
        auto;

      align-items:center;

      gap:18px;

      font-size:10px;
    }


    .customer-footer-copyright{

      color:#68645e;
    }


    .customer-footer-copyright strong{

      color:#9b948d;
    }


    .customer-footer-address{

      display:flex;

      align-items:center;

      gap:6px;

      color:#77716b;
    }


    .customer-footer-actions{

      display:flex;

      gap:7px;
    }


    .customer-footer-action{

      display:inline-flex;

      align-items:center;

      gap:6px;

      padding:8px 10px;

      border:
        1px solid rgba(201,164,92,.24);

      color:#c9a45c;

      text-decoration:none;
    }


    .customer-footer-social{

      display:flex;

      gap:6px;
    }


    .customer-social{

      width:31px;

      height:31px;

      display:grid;

      place-items:center;

      border:
        1px solid rgba(255,255,255,.10);

      color:#aaa;

      text-decoration:none;

      font-size:10px;
    }


    /* ========================================================
       TABLET / MOBILE
       ======================================================== */

    @media(max-width:1200px){

      .customer-nav-container{

        gap:12px;
      }


      .customer-brand-logo{

        width:58px;

        height:58px;
      }


      .customer-brand-name{

        font-size:15px;
      }


      .customer-nav-link,
      .customer-nav-trigger{

        padding-left:6px;

        padding-right:6px;

        font-size:10px;
      }
    }


    @media(max-width:1050px){

      .customer-navbar{

        height:78px;
      }


      .customer-nav-container{

        width:
          calc(100% - 28px);
      }


      .customer-menu-toggle{

        display:grid;

        place-items:center;

        margin-left:auto;
      }


      .customer-nav{

        position:fixed;

        top:78px;

        left:14px;

        right:14px;

        display:none;

        margin:0;

        padding:10px;

        max-height:
          calc(100vh - 92px);

        overflow:auto;

        background:
          rgba(5,4,3,.985);

        border:
          1px solid rgba(201,164,92,.34);

        box-shadow:
          0 25px 70px rgba(0,0,0,.75);
      }


      .customer-nav.open{

        display:block;
      }


      .customer-nav-list{

        display:block;
      }


      .customer-nav-item{

        width:100%;
      }


      .customer-nav-link,
      .customer-nav-trigger{

        width:100%;

        min-height:47px;

        padding:12px 14px;

        justify-content:space-between;
      }


      .customer-nav-dropdown{

        position:static;

        display:none;

        width:100%;

        opacity:1;

        visibility:visible;

        transform:none;

        box-shadow:none;
      }


      .customer-nav-item.has-dropdown.dropdown-open
      .customer-nav-dropdown{

        display:block;
      }


      .customer-mobile-backdrop{

        position:fixed;

        inset:78px 0 0;

        z-index:4990;

        background:
          rgba(0,0,0,.45);
      }


      body.customer-menu-open
      .customer-mobile-backdrop{

        display:block;
      }


      .customer-footer-upper{

        grid-template-columns:1fr;
      }


      .customer-footer-bottom{

        grid-template-columns:
          1fr
          1fr;
      }


      .customer-footer-actions{

        grid-column:1/-1;
      }
    }


    @media(max-width:650px){

      .customer-brand-logo{

        width:48px;

        height:48px;
      }


      .customer-brand-name{

        font-size:13px;

        letter-spacing:1px;
      }


      .customer-brand-sub{

        font-size:7px;

        letter-spacing:1.2px;
      }


      .customer-footer-inner{

        width:
          calc(100% - 28px);

        padding-top:45px;
      }


      .customer-footer-bottom{

        grid-template-columns:1fr;
      }


      .customer-footer-actions{

        grid-column:auto;

        flex-wrap:wrap;
      }


      .customer-footer-address{

        align-items:flex-start;
      }
    }

  `;


  /* ==========================================================
     5. INJECT CSS
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


    style.textContent = css;


    document.head.appendChild(style);
  }


  /* ==========================================================
     6. FAVICON
     ========================================================== */

  function ensureFavicon() {

    const faviconPath =
      "assets/logo.png";


    /*
     * Remove duplicate favicon declarations
     * that may already exist in the page.
     */

    const existingIcons =
      document.querySelectorAll(
        'link[rel="icon"], link[rel="shortcut icon"]'
      );


    let icon = null;


    if (existingIcons.length > 0) {

      /*
       * Keep the first one and remove
       * conflicting favicon links.
       */

      icon = existingIcons[0];


      for (
        let i = 1;
        i < existingIcons.length;
        i++
      ) {

        existingIcons[i].remove();
      }

    } else {

      icon =
        document.createElement("link");

      document.head.appendChild(icon);
    }


    icon.rel = "icon";

    icon.type = "image/png";

    icon.href =
      faviconPath +
      "?v=20260921";


    /*
     * Apple / mobile icon
     */

    let appleIcon =
      document.querySelector(
        'link[rel="apple-touch-icon"]'
      );


    if (!appleIcon) {

      appleIcon =
        document.createElement("link");

      appleIcon.rel =
        "apple-touch-icon";

      document.head.appendChild(
        appleIcon
      );
    }


    appleIcon.href =
      faviconPath +
      "?v=20260921";
  }


  /* ==========================================================
     7. CURRENT PAGE
     ========================================================== */

  function currentPage() {

    return (
      location.pathname
        .split("/")
        .pop() ||
      "index.html"
    );
  }


  /* ==========================================================
     8. ACTIVE NAV
     ========================================================== */

  function active(href) {

    return (
      href.split("?")[0] ===
      currentPage()
    );
  }


  /* ==========================================================
     9. CART COUNT
     ========================================================== */

  function cartCount() {

    try {

      const raw =
        localStorage.getItem(
          "chatpetch_cart"
        );


      const cart =
        raw
          ? JSON.parse(raw)
          : [];


      if (!Array.isArray(cart)) {
        return 0;
      }


      return cart.reduce(
        (
          total,
          item
        ) => {

          return (
            total +
            Number(
              item.quantity ??
              item.qty ??
              1
            )
          );

        },
        0
      );

    } catch (error) {

      return 0;
    }
  }


  /* ==========================================================
     10. BUILD NAV ITEM
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


    if (item.cart) {

      li.classList.add(
        "cart-item"
      );
    }


    /* --------------------------------------------------------
       DROPDOWN ITEM
       -------------------------------------------------------- */

    if (item.dropdown) {

      const button =
        document.createElement(
          "button"
        );


      button.type = "button";


      button.className =
        "customer-nav-trigger";


      button.innerHTML = `
        ${item.label}
        <span class="customer-nav-arrow">
          ▼
        </span>
      `;


      button.addEventListener(
        "click",
        function (event) {

          event.stopPropagation();


          document
            .querySelectorAll(
              ".customer-nav-item.dropdown-open"
            )
            .forEach(function (element) {

              if (element !== li) {

                element.classList.remove(
                  "dropdown-open"
                );
              }
            });


          li.classList.toggle(
            "dropdown-open"
          );
        }
      );


      li.appendChild(button);


      const box =
        document.createElement(
          "div"
        );


      box.className =
        "customer-nav-dropdown";


      item.items.forEach(
        function (sub) {

          const a =
            document.createElement(
              "a"
            );


          a.href =
            sub.href;


          a.textContent =
            sub.label;


          box.appendChild(a);
        }
      );


      li.appendChild(box);

    }

    /* --------------------------------------------------------
       NORMAL LINK
       -------------------------------------------------------- */

    else {

      const a =
        document.createElement(
          "a"
        );


      a.className =
        "customer-nav-link";


      if (
        active(item.href)
      ) {

        a.classList.add(
          "active"
        );
      }


      a.href =
        item.href;


      a.textContent =
        item.label;


      /* CART BADGE */

      if (item.cart) {

        const badge =
          document.createElement(
            "span"
          );


        badge.className =
          "customer-cart-count";


        badge.setAttribute(
          "data-cart-count",
          ""
        );


        badge.textContent =
          cartCount();


        a.appendChild(
          badge
        );
      }


      li.appendChild(a);
    }


    return li;
  }


  /* ==========================================================
     11. BUILD HEADER
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


    const wrap =
      document.createElement(
        "div"
      );


    wrap.className =
      "customer-nav-container";


    /* --------------------------------------------------------
       BRAND
       -------------------------------------------------------- */

    const brand =
      document.createElement(
        "a"
      );


    brand.className =
      "customer-brand";


    brand.href =
      "index.html";


    brand.innerHTML = `

      <img
        class="customer-brand-logo"
        src="assets/logo.png"
        alt="CHATPHETCH GROUP"
      >

      <span class="customer-brand-copy">

        <span class="customer-brand-name">
          CHATPHETCH GROUP
        </span>

        <span class="customer-brand-sub">
          FLOORING • SURFACE • CONSTRUCTION
        </span>

      </span>

    `;


    /* --------------------------------------------------------
       NAV
       -------------------------------------------------------- */

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


    const list =
      document.createElement(
        "ul"
      );


    list.className =
      "customer-nav-list";


    NAV.forEach(
      function (item) {

        list.appendChild(
          buildNavItem(item)
        );
      }
    );


    nav.appendChild(
      list
    );


    /* --------------------------------------------------------
       MOBILE TOGGLE
       -------------------------------------------------------- */

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


    toggle.innerHTML = `

      <span
        class="customer-menu-toggle-inner"
      >

        <span></span>
        <span></span>
        <span></span>

      </span>

    `;


    /* --------------------------------------------------------
       BACKDROP
       -------------------------------------------------------- */

    const backdrop =
      document.createElement(
        "div"
      );


    backdrop.className =
      "customer-mobile-backdrop";


    /* --------------------------------------------------------
       APPEND
       -------------------------------------------------------- */

    wrap.appendChild(
      brand
    );


    wrap.appendChild(
      nav
    );


    wrap.appendChild(
      toggle
    );


    navbar.appendChild(
      wrap
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


    /* --------------------------------------------------------
       MOBILE FUNCTIONS
       -------------------------------------------------------- */

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


      document.body.classList.remove(
        "customer-menu-open"
      );


      document
        .querySelectorAll(
          ".customer-nav-item.dropdown-open"
        )
        .forEach(
          function (element) {

            element.classList.remove(
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


        if (
          window.innerWidth <= 1050
        ) {

          closeMenu();
        }
      }
    );


    document.addEventListener(
      "click",
      function (event) {

        if (
          !event.target.closest(
            ".customer-nav-item.has-dropdown"
          )
        ) {

          document
            .querySelectorAll(
              ".customer-nav-item.dropdown-open"
            )
            .forEach(
              function (element) {

                element.classList.remove(
                  "dropdown-open"
                );
              }
            );
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
     12. BUILD FOOTER
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


    footer.innerHTML = `

      <div class="customer-footer-inner">

        <div class="customer-footer-upper">

          <div>

            <div class="customer-footer-brand">

              <img
                class="customer-footer-logo"
                src="assets/logo.png"
                alt="CHATPHETCH GROUP"
              >

              <div>

                <div class="customer-footer-brand-name">
                  CHATPHETCH GROUP
                </div>

                <div class="customer-footer-brand-sub">
                  FLOORING &amp; CONSTRUCTION
                </div>

              </div>

            </div>


            <div class="customer-footer-info">

              <div class="customer-footer-company-line">
                🌹 โรงงานผลิต-จำหน่าย วัสดุงานพื้นทุกประเภท 🌹
              </div>


              <div class="customer-footer-service-line">

                <span class="customer-footer-service-item">
                  <span class="icon">♠</span>
                  สร้างสรรค์ผลงาน
                </span>

                <span class="customer-footer-service-item">
                  <span class="icon">♠</span>
                  มาตรฐานเข้าถึง
                </span>

                <span class="customer-footer-service-item">
                  <span class="icon">♠</span>
                  ยืน 1 คุณภาพ
                </span>

              </div>


              <div class="customer-footer-company-line strong">
                บริการให้คำปรึกษาเกี่ยวกับพื้นทุกระบบแบบครบวงจร
              </div>

            </div>

          </div>


          <div class="customer-footer-menu">

            <div class="customer-footer-menu-title">
              MENU
            </div>


            <ul class="customer-footer-menu-list">

              ${FOOTER.map(
                function (item) {

                  return `
                    <li>
                      <a href="${item.href}">
                        ${item.label}
                      </a>
                    </li>
                  `;
                }
              ).join("")}

            </ul>

          </div>

        </div>


        <div class="customer-footer-divider"></div>


        <div class="customer-footer-bottom">

          <div class="customer-footer-copyright">

            © ${new Date().getFullYear()}

            <strong>
              CHATPHETCH GROUP CO., LTD.
            </strong>

            All Rights Reserved.

          </div>


          <div class="customer-footer-address">

            📍

            <span>
              10/1 ม.9 ต.นาหม่อม อ.นาหม่อม จ.สงขลา 90310
            </span>

          </div>


          <div class="customer-footer-actions">

            <a
              class="customer-footer-action"
              href="contact.html"
            >
              ☎ ติดต่อเรา
            </a>


            <a
              class="customer-footer-action"
              href="order-status.html"
            >
              🔎 ติดตามคำสั่งซื้อ
            </a>

          </div>


          <div class="customer-footer-social">

            <a
              class="customer-social"
              href="https://www.facebook.com/ChatphetchGroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>


            <a
              class="customer-social youtube"
              href="#"
              aria-label="YouTube"
            >
              ▶
            </a>


            <a
              class="customer-social line"
              href="#"
              aria-label="LINE"
            >
              LINE
            </a>

          </div>

        </div>

      </div>

    `;


    document.body.appendChild(
      footer
    );
  }


  /* ==========================================================
     13. UPDATE CART BADGE
     ========================================================== */

  function updateCartBadges() {

    const count =
      cartCount();


    document
      .querySelectorAll(
        "[data-cart-count]"
      )
      .forEach(
        function (element) {

          element.textContent =
            String(count);
        }
      );
  }


  /* ==========================================================
     14. INIT
     ========================================================== */

  function init() {

    /*
     * Favicon first
     */
    ensureFavicon();


    /*
     * CSS
     */
    injectStyles();


    /*
     * Header
     */
    buildHeader();


    /*
     * Footer
     */
    buildFooter();


    /*
     * Cart
     */
    updateCartBadges();
  }


  /* ==========================================================
     15. CART EVENTS
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
    updateCartBadges
  );


  /* ==========================================================
     16. START
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
