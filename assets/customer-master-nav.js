/* =========================================================
   CHATPETCH GROUP
   CUSTOMER MASTER HEADER + FOOTER
   Responsive Navigation
   Desktop = เมนูด้านบน
   Mobile  = Hamburger Menu ☰
   ========================================================= */

(function () {
  "use strict";

  const currentPage =
    (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  const NAV = [
    {
      key: "home",
      label: "หน้าแรก",
      href: "index.html"
    },

    {
      key: "about",
      label: "เกี่ยวกับเรา",
      href: "about.html"
    },

    {
      key: "products",
      label: "สินค้า",
      href: "products.html"
    },

    {
      key: "services",
      label: "บริการ",
      dropdown: [
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
      key: "projects",
      label: "ผลงาน",
      href: "projects.html"
    },

    {
      key: "reference",
      label: "โครงการอ้างอิง",
      href: "reference.html"
    },

    {
      key: "technical",
      label: "ศูนย์เทคนิค",
      href: "technical-center.html"
    },

    {
      key: "knowledge",
      label: "คลังความรู้",
      href: "knowledge.html"
    },

    {
      key: "contact",
      label: "ติดต่อเรา",
      href: "contact.html"
    },

    {
      key: "order",
      label: "🔎 ติดตามคำสั่งซื้อ",
      href: "order-status.html"
    },

    {
      key: "cart",
      label: "🛒 ตะกร้า",
      href: "cart.html",
      cart: true
    }
  ];

  const PAGE_KEY = {
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "service-detail.html": "services",
    "products.html": "products",
    "product-detail.html": "products",
    "projects.html": "projects",
    "project-detail.html": "projects",
    "reference.html": "reference",
    "technical-center.html": "technical",
    "knowledge.html": "knowledge",
    "knowledge-detail.html": "knowledge",
    "contact.html": "contact",
    "cart.html": "cart",
    "checkout.html": "cart",
    "order-status.html": "order"
  };

  const activeKey =
    PAGE_KEY[currentPage] || "";

  /* =========================================================
     MASTER CSS
     ========================================================= */

  const style =
    document.createElement("style");

  style.id =
    "chatpetch-master-layout-style";

  style.textContent = `

    @import url(
      'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&family=Prompt:wght@300;400;500;600;700&display=swap'
    );

    :root{
      --black:#030303;
      --black2:#080808;
      --dark:#101010;

      --gold:#c9a45c;
      --gold2:#e9cf8b;
      --gold3:#8d6b2f;

      --white:#fff;
      --muted:#a6a6a6;

      --line:rgba(255,255,255,.10);
      --gold-line:rgba(201,164,92,.35);

      --max:1280px;
    }


    *{
      box-sizing:border-box;
    }


    html{
      scroll-behavior:smooth;
    }


    body{
      margin:0;

      font-family:
        'Prompt',
        'Kanit',
        sans-serif !important;

      background:#030303 !important;

      color:#fff !important;

      overflow-x:hidden;
    }


    body::before{
      content:"";

      position:fixed;

      inset:0;

      pointer-events:none;

      z-index:-10;

      background-image:
        linear-gradient(
          rgba(255,255,255,.025)
          1px,
          transparent 1px
        ),

        linear-gradient(
          90deg,
          rgba(255,255,255,.025)
          1px,
          transparent 1px
        );

      background-size:60px 60px;

      mask-image:
        linear-gradient(
          to bottom,
          black,
          rgba(0,0,0,.5),
          transparent
        );
    }


    /* =====================================================
       HEADER
       ===================================================== */

    .header{

      position:fixed !important;

      top:0 !important;

      left:0 !important;

      width:100% !important;

      z-index:5000 !important;

      background:
        rgba(3,3,3,.88)
        !important;

      backdrop-filter:blur(18px);

      -webkit-backdrop-filter:blur(18px);

      border-bottom:
        1px solid
        rgba(201,164,92,.16)
        !important;
    }


    .header .container{

      width:
        min(
          var(--max),
          calc(100% - 80px)
        );

      margin:auto;
    }


    .navbar{

      min-height:86px;

      display:flex;

      align-items:center;

      justify-content:space-between;

      gap:20px;

      position:relative;
    }


    /* =====================================================
       BRAND
       ===================================================== */

    .customer-brand{

      display:flex;

      align-items:center;

      gap:14px;

      flex:0 0 auto;

      color:inherit;

      text-decoration:none;
    }


    .customer-brand img{

      width:72px !important;

      height:72px !important;

      max-width:72px !important;

      max-height:72px !important;

      object-fit:contain !important;

      display:block;

      flex:0 0 72px;
    }


    .customer-brand-text strong{

      display:block;

      font-size:18px;

      line-height:1.15;

      letter-spacing:1.8px;

      font-weight:600;

      white-space:nowrap;
    }


    .customer-brand-text small{

      display:block;

      color:var(--gold);

      font-size:9px;

      line-height:1.2;

      letter-spacing:2px;

      margin-top:4px;

      white-space:nowrap;
    }


    /* =====================================================
       DESKTOP NAV
       ===================================================== */

    .customer-nav{

      display:flex;

      align-items:center;

      justify-content:flex-end;

      gap:2px;

      min-width:0;
    }


    .customer-nav > a,
    .nav-drop-trigger{

      position:relative;

      min-height:46px;

      padding:11px 10px;

      display:inline-flex;

      align-items:center;

      justify-content:center;

      gap:6px;

      color:#cfcfcf;

      font-family:
        'Prompt',
        'Kanit',
        sans-serif;

      font-size:12px;

      font-weight:400;

      line-height:1.2;

      background:transparent;

      border:0;

      cursor:pointer;

      text-decoration:none;

      white-space:nowrap;

      transition:.25s;
    }


    .customer-nav > a::after,
    .nav-drop-trigger::after{

      content:"";

      position:absolute;

      left:10px;

      right:10px;

      bottom:4px;

      height:1px;

      background:var(--gold);

      transform:scaleX(0);

      transform-origin:center;

      transition:.25s;
    }


    .customer-nav > a:hover,
    .customer-nav > a.active,
    .nav-drop-trigger:hover,
    .nav-dropdown.open .nav-drop-trigger{

      color:#fff;
    }


    .customer-nav > a:hover::after,
    .customer-nav > a.active::after,
    .nav-dropdown.open
    .nav-drop-trigger::after{

      transform:scaleX(1);
    }


    /* =====================================================
       CART
       ===================================================== */

    .nav-shop{

      border:
        1px solid
        rgba(201,164,92,.4)
        !important;

      color:
        var(--gold2)
        !important;

      margin-left:5px;
    }


    .nav-shop::after{

      display:none !important;
    }


    .cart-count{

      display:inline-grid;

      place-items:center;

      min-width:18px;

      height:18px;

      margin-left:3px;

      padding:0 4px;

      border-radius:50%;

      background:var(--gold);

      color:#000;

      font-size:10px;

      font-weight:700;
    }


    /* =====================================================
       DROPDOWN
       ===================================================== */

    .nav-dropdown{

      position:relative;
    }


    .nav-drop-trigger .arrow{

      color:var(--gold);

      font-size:8px;

      transition:.25s;
    }


    .nav-dropdown.open
    .nav-drop-trigger
    .arrow{

      transform:rotate(180deg);
    }


    .nav-submenu{

      position:absolute;

      top:calc(100% + 2px);

      left:50%;

      transform:
        translateX(-50%)
        translateY(8px);

      width:245px;

      padding:8px;

      background:
        rgba(8,8,8,.98);

      border:
        1px solid
        rgba(201,164,92,.35);

      box-shadow:
        0 25px 70px
        rgba(0,0,0,.65);

      opacity:0;

      visibility:hidden;

      pointer-events:none;

      transition:.25s;
    }


    .nav-dropdown:hover
    .nav-submenu,
    .nav-dropdown.open
    .nav-submenu{

      opacity:1;

      visibility:visible;

      pointer-events:auto;

      transform:
        translateX(-50%)
        translateY(0);
    }


    .nav-submenu a{

      display:flex;

      align-items:center;

      min-height:42px;

      padding:9px 12px;

      color:#cfcfcf;

      font-size:12px;

      line-height:1.35;

      text-decoration:none;

      border-bottom:
        1px solid
        rgba(255,255,255,.06);

      transition:.2s;
    }


    .nav-submenu a:last-child{

      border-bottom:0;
    }


    .nav-submenu a:hover{

      color:var(--gold2);

      background:
        rgba(201,164,92,.07);

      padding-left:16px;
    }


    /* =====================================================
       HAMBURGER
       ===================================================== */

    .menu-toggle{

      display:none;

      width:44px;

      height:44px;

      flex:0 0 44px;

      padding:0;

      border:
        1px solid
        var(--gold-line);

      border-radius:10px;

      background:
        rgba(255,255,255,.035);

      color:#fff;

      cursor:pointer;

      align-items:center;

      justify-content:center;

      flex-direction:column;

      gap:5px;

      transition:.25s;

      position:relative;

      z-index:6000;
    }


    .menu-toggle:hover{

      border-color:var(--gold);

      background:
        rgba(201,164,92,.08);
    }


    .menu-toggle span{

      display:block;

      width:21px;

      height:2px;

      border-radius:2px;

      background:#fff;

      transition:
        transform .25s,
        opacity .2s,
        background .25s;
    }


    .menu-toggle.open{

      border-color:var(--gold);

      background:
        rgba(201,164,92,.08);
    }


    .menu-toggle.open span{

      background:var(--gold2);
    }


    .menu-toggle.open
    span:nth-child(1){

      transform:
        translateY(7px)
        rotate(45deg);
    }


    .menu-toggle.open
    span:nth-child(2){

      opacity:0;
    }


    .menu-toggle.open
    span:nth-child(3){

      transform:
        translateY(-7px)
        rotate(-45deg);
    }


    /* =====================================================
       MOBILE BACKDROP
       ===================================================== */

    .mobile-menu-backdrop{

      display:none;

      position:fixed;

      inset:0;

      z-index:4900;

      background:
        rgba(0,0,0,.55);

      backdrop-filter:blur(2px);

      -webkit-backdrop-filter:blur(2px);
    }


    .mobile-menu-backdrop.show{

      display:block;
    }


    /* =====================================================
       CONTENT OFFSET
       ===================================================== */

    main{

      position:relative;
    }


    /* =====================================================
       FOOTER
       ===================================================== */

    .footer{

      border-top:
        1px solid
        rgba(201,164,92,.22);

      background:#070707;

      padding:65px 0 28px;
    }


    .footer .container{

      width:
        min(
          var(--max),
          calc(100% - 80px)
        );

      margin:auto;
    }


    .footer-main{

      display:grid;

      grid-template-columns:
        minmax(0,1fr)
        430px;

      gap:8px;

      align-items:start;
    }


    .footer-brand .logo{

      display:flex;

      align-items:center;

      gap:14px;

      color:inherit;

      text-decoration:none;

      margin-bottom:20px;
    }


    .footer-brand .logo img{

      width:50px;

      height:50px;

      object-fit:contain;
    }


    .footer-brand .logo-text strong{

      display:block;

      font-size:18px;

      letter-spacing:2px;
    }


    .footer-brand .logo-text small{

      display:block;

      color:var(--gold);

      font-size:9px;

      letter-spacing:2px;

      margin-top:3px;
    }


    .footer-description{

      max-width:560px;

      color:#999;

      font-size:14px;

      line-height:2;
    }


    .footer-title{

      color:var(--gold2);

      font-size:12px;

      letter-spacing:2px;

      margin-bottom:16px;

      text-transform:uppercase;
    }


    .footer-menu{

      justify-self:start;

      margin-left:0;
    }


    .footer-links{

      display:flex;

      flex-direction:column;

      align-items:flex-start;

      gap:5px;
    }


    .footer-links a{

      color:#999;

      font-size:13px;

      line-height:1.8;

      text-decoration:none;

      transition:.2s;
    }


    .footer-links a:hover{

      color:var(--gold2);
    }


    .footer-bottom{

      margin-top:45px;

      padding-top:20px;

      border-top:
        1px solid
        var(--line);

      display:flex;

      align-items:center;

      justify-content:space-between;

      gap:20px;

      color:#666;

      font-size:11px;
    }


    .footer-address{

      color:#777;
    }


    .footer-actions{

      display:flex;

      flex-wrap:wrap;

      align-items:center;

      gap:8px;
    }


    .footer-action{

      display:inline-flex;

      align-items:center;

      justify-content:center;

      min-height:38px;

      padding:0 14px;

      border:
        1px solid
        rgba(201,164,92,.35);

      color:var(--gold2);

      font-size:12px;

      text-decoration:none;

      transition:.25s;
    }


    .footer-action:hover{

      background:
        rgba(201,164,92,.09);

      border-color:var(--gold);
    }


    .footer-social{

      display:flex;

      gap:7px;
    }


    .footer-social a{

      width:36px;

      height:36px;

      display:grid;

      place-items:center;

      border:
        1px solid
        rgba(201,164,92,.3);

      color:var(--gold2);

      text-decoration:none;

      font-size:12px;
    }


    /* =====================================================
       TABLET / MOBILE
       ===================================================== */

    @media(max-width:1250px){

      .header .container{

        width:
          min(
            var(--max),
            calc(100% - 40px)
          );
      }


      .customer-nav > a,
      .nav-drop-trigger{

        padding-left:7px;

        padding-right:7px;

        font-size:11px;
      }


      .customer-brand-text strong{

        font-size:16px;
      }


      .footer .container{

        width:
          min(
            var(--max),
            calc(100% - 40px)
          );
      }
    }


    /* =====================================================
       MOBILE MENU BREAKPOINT
       ===================================================== */

    @media(max-width:1050px){

      .header{

        top:0 !important;
      }


      .navbar{

        min-height:78px;

        height:78px;
      }


      .customer-nav{

        display:none;

        position:absolute;

        top:calc(100% + 1px);

        left:0;

        right:0;

        width:100%;

        max-height:
          calc(100vh - 78px);

        overflow-y:auto;

        overflow-x:hidden;

        padding:12px 14px 20px;

        flex-direction:column;

        align-items:stretch;

        justify-content:flex-start;

        gap:3px;

        background:
          rgba(5,5,5,.98);

        border-bottom:
          1px solid
          rgba(201,164,92,.3);

        box-shadow:
          0 25px 60px
          rgba(0,0,0,.55);

        overscroll-behavior:contain;
      }


      .customer-nav.show{

        display:flex;
      }


      .customer-nav > a,
      .nav-drop-trigger{

        width:100%;

        min-height:48px;

        justify-content:flex-start;

        padding:12px 14px;

        font-size:13px;

        border-radius:8px;
      }


      .customer-nav > a::after,
      .nav-drop-trigger::after{

        left:14px;

        right:auto;

        width:34px;

        bottom:4px;
      }


      .customer-nav > a:hover,
      .customer-nav > a.active,
      .nav-drop-trigger:hover,
      .nav-dropdown.open
      .nav-drop-trigger{

        background:
          rgba(201,164,92,.055);
      }


      .nav-shop{

        margin-left:0;

        margin-top:6px;

        border:
          1px solid
          rgba(201,164,92,.4)
          !important;
      }


      .nav-dropdown{

        width:100%;
      }


      .nav-drop-trigger{

        justify-content:space-between;
      }


      .nav-submenu{

        position:static;

        width:100%;

        transform:none !important;

        display:none;

        opacity:1;

        visibility:visible;

        pointer-events:auto;

        margin:0 0 4px;

        box-shadow:none;

        background:
          rgba(255,255,255,.025);

        border:
          1px solid
          rgba(201,164,92,.16);

        border-radius:8px;

        padding:5px;
      }


      .nav-dropdown.open
      .nav-submenu{

        display:block;
      }


      .nav-submenu a{

        min-height:43px;

        border-bottom:
          1px solid
          rgba(255,255,255,.06);

        border-radius:6px;

        padding:9px 12px;
      }


      .nav-submenu a:hover{

        padding-left:16px;

        background:
          rgba(201,164,92,.07);
      }


      .menu-toggle{

        display:flex;
      }


      .footer-main{

        grid-template-columns:
          1fr 300px;
      }
    }


    /* =====================================================
       SMALL MOBILE
       ===================================================== */

    @media(max-width:700px){

      .header .container{

        width:
          calc(100% - 28px);
      }


      .navbar{

        min-height:72px;

        height:72px;

        gap:10px;
      }


      .customer-brand{

        gap:10px;

        min-width:0;
      }


      .customer-brand img{

        width:56px !important;

        height:56px !important;

        max-width:56px !important;

        max-height:56px !important;

        flex-basis:56px;
      }


      .customer-brand-text{

        min-width:0;
      }


      .customer-brand-text strong{

        font-size:14px;

        letter-spacing:1.3px;
      }


      .customer-brand-text small{

        font-size:8px;

        letter-spacing:1.5px;
      }


      .menu-toggle{

        width:42px;

        height:42px;

        flex-basis:42px;
      }


      .customer-nav{

        top:calc(100% + 1px);

        max-height:
          calc(100vh - 72px);
      }


      .footer .container{

        width:
          calc(100% - 28px);
      }


      .footer-main{

        grid-template-columns:1fr;

        gap:35px;
      }


      .footer-bottom{

        flex-direction:column;

        align-items:flex-start;
      }
    }


    /* =====================================================
       VERY SMALL MOBILE
       ===================================================== */

    @media(max-width:480px){

      .customer-brand-text{

        display:none;
      }


      .customer-brand img{

        width:52px !important;

        height:52px !important;

        max-width:52px !important;

        max-height:52px !important;

        flex-basis:52px;
      }


      .navbar{

        min-height:68px;

        height:68px;
      }


      .customer-nav{

        top:calc(100% + 1px);

        max-height:
          calc(100vh - 68px);

        padding-left:10px;

        padding-right:10px;
      }


      .menu-toggle{

        width:40px;

        height:40px;

        flex-basis:40px;
      }
    }

  `;

  document.head.appendChild(style);


  /* =========================================================
     HEADER
     ========================================================= */

  function createHeader() {

    document
      .querySelectorAll("header")
      .forEach(el => el.remove());


    const header =
      document.createElement("header");

    header.className =
      "header";


    const container =
      document.createElement("div");

    container.className =
      "container";


    const nav =
      document.createElement("nav");

    nav.className =
      "navbar";


    /* =====================================================
       BRAND
       ===================================================== */

    const brand =
      document.createElement("a");

    brand.href =
      "index.html";

    brand.className =
      "customer-brand";

    brand.setAttribute(
      "aria-label",
      "CHATPHETCH GROUP"
    );


    brand.innerHTML = `

      <img
        src="assets/logo.png"
        alt="CHATPHETCH GROUP"
        width="72"
        height="72"
      >

      <div class="customer-brand-text">

        <strong>
          CHATPETCH GROUP
        </strong>

        <small>
          FLOORING &amp; CONSTRUCTION
        </small>

      </div>

    `;


    /* =====================================================
       NAV MENU
       ===================================================== */

    const navMenu =
      document.createElement("div");

    navMenu.className =
      "customer-nav";

    navMenu.id =
      "navMenu";


    NAV.forEach(item => {

      /* -----------------------------------------------
         DROPDOWN
         ----------------------------------------------- */

      if (item.dropdown) {

        const wrap =
          document.createElement("div");

        wrap.className =
          "nav-dropdown";


        const button =
          document.createElement("button");

        button.type =
          "button";

        button.className =
          "nav-drop-trigger";

        button.setAttribute(
          "aria-expanded",
          "false"
        );


        button.innerHTML = `

          <span>
            ${item.label}
          </span>

          <span class="arrow">
            ▼
          </span>

        `;


        const submenu =
          document.createElement("div");

        submenu.className =
          "nav-submenu";


        item.dropdown.forEach(child => {

          const a =
            document.createElement("a");

          a.href =
            child.href;

          a.textContent =
            child.label;

          submenu.appendChild(a);

        });


        button.addEventListener(
          "click",
          function (e) {

            e.stopPropagation();


            const wasOpen =
              wrap.classList.contains("open");


            document
              .querySelectorAll(
                ".nav-dropdown.open"
              )
              .forEach(other => {

                if (other !== wrap) {

                  other
                    .classList
                    .remove("open");

                  const trigger =
                    other.querySelector(
                      ".nav-drop-trigger"
                    );

                  trigger?.setAttribute(
                    "aria-expanded",
                    "false"
                  );
                }
              });


            wrap.classList.toggle(
              "open",
              !wasOpen
            );


            button.setAttribute(
              "aria-expanded",
              String(!wasOpen)
            );

          }
        );


        wrap.appendChild(button);

        wrap.appendChild(submenu);

        navMenu.appendChild(wrap);


        if (activeKey === item.key) {

          button.classList.add(
            "active"
          );
        }


        return;
      }


      /* -----------------------------------------------
         NORMAL LINK
         ----------------------------------------------- */

      const a =
        document.createElement("a");

      a.href =
        item.href;

      a.textContent =
        item.label;


      if (activeKey === item.key) {

        a.classList.add(
          "active"
        );
      }


      /* -----------------------------------------------
         CART
         ----------------------------------------------- */

      if (item.cart) {

        a.classList.add(
          "nav-shop"
        );


        a.innerHTML = `

          🛒 ตะกร้า

          <span
            class="cart-count"
            id="cartCount"
          >
            0
          </span>

        `;
      }


      navMenu.appendChild(a);

    });


    /* =====================================================
       HAMBURGER BUTTON
       ===================================================== */

    const menuToggle =
      document.createElement("button");

    menuToggle.type =
      "button";

    menuToggle.className =
      "menu-toggle";

    menuToggle.id =
      "menuToggle";

    menuToggle.setAttribute(
      "aria-label",
      "เปิดเมนู"
    );

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );


    menuToggle.innerHTML = `

      <span></span>

      <span></span>

      <span></span>

    `;


    /* =====================================================
       MOBILE BACKDROP
       ===================================================== */

    const backdrop =
      document.createElement("div");

    backdrop.className =
      "mobile-menu-backdrop";

    backdrop.id =
      "mobileMenuBackdrop";


    /* =====================================================
       CLOSE MENU
       ===================================================== */

    function closeMenu() {

      navMenu
        .classList
        .remove("show");


      menuToggle
        .classList
        .remove("open");


      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );


      menuToggle.setAttribute(
        "aria-label",
        "เปิดเมนู"
      );


      backdrop
        .classList
        .remove("show");


      document
        .querySelectorAll(
          ".nav-dropdown.open"
        )
        .forEach(dropdown => {

          dropdown
            .classList
            .remove("open");


          dropdown
            .querySelector(
              ".nav-drop-trigger"
            )
            ?.setAttribute(
              "aria-expanded",
              "false"
            );
        });


      document.body.style.overflow = "";

    }


    /* =====================================================
       TOGGLE MENU
       ===================================================== */

    function toggleMenu() {

      const isOpen =
        navMenu
          .classList
          .toggle("show");


      menuToggle
        .classList
        .toggle(
          "open",
          isOpen
        );


      backdrop
        .classList
        .toggle(
          "show",
          isOpen
        );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "ปิดเมนู"
          : "เปิดเมนู"
      );


      if (isOpen) {

        document.body.style.overflow =
          "hidden";

      } else {

        closeMenu();

      }

    }


    menuToggle.addEventListener(
      "click",
      function (e) {

        e.stopPropagation();

        toggleMenu();

      }
    );


    backdrop.addEventListener(
      "click",
      function () {

        closeMenu();

      }
    );


    /* =====================================================
       LINK EVENTS
       ===================================================== */

    navMenu
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          function () {

            closeMenu();

          }
        );

      });


    /* =====================================================
       OUTSIDE CLICK
       ===================================================== */

    document.addEventListener(
      "click",
      function (e) {

        if (
          !navMenu.contains(e.target) &&
          !menuToggle.contains(e.target)
        ) {

          document
            .querySelectorAll(
              ".nav-dropdown.open"
            )
            .forEach(dropdown => {

              dropdown
                .classList
                .remove("open");


              dropdown
                .querySelector(
                  ".nav-drop-trigger"
                )
                ?.setAttribute(
                  "aria-expanded",
                  "false"
                );

            });

        }

      }
    );


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
      "keydown",
      function (e) {

        if (e.key === "Escape") {

          closeMenu();

        }

      }
    );


    /* =====================================================
       RESIZE
       ===================================================== */

    window.addEventListener(
      "resize",
      function () {

        if (window.innerWidth > 1050) {

          closeMenu();

        }

      }
    );


    /* =====================================================
       BUILD HEADER
       ===================================================== */

    nav.appendChild(brand);

    nav.appendChild(navMenu);

    nav.appendChild(menuToggle);

    container.appendChild(nav);

    header.appendChild(container);


    document.body.insertBefore(
      header,
      document.body.firstChild
    );


    document.body.insertBefore(
      backdrop,
      header.nextSibling
    );

  }


  /* =========================================================
     FOOTER
     ========================================================= */

  function createFooter() {

    document
      .querySelectorAll("footer")
      .forEach(el => el.remove());


    const footer =
      document.createElement("footer");

    footer.className =
      "footer";


    footer.innerHTML = `

      <div class="container">

        <div class="footer-main">

          <div class="footer-brand">

            <a
              href="index.html"
              class="logo"
              aria-label="CHATPHETCH GROUP"
            >

              <img
                src="assets/logo.png"
                alt="CHATPHETCH GROUP"
                width="72"
                height="72"
              >

              <div class="logo-text">

                <strong>
                  CHATPETCH GROUP
                </strong>

                <small>
                  FLOORING &amp; CONSTRUCTION
                </small>

              </div>

            </a>


            <p class="footer-description">

              🌹 โรงงานผลิต-จำหน่าย วัสดุงานพื้นทุกประเภท 🌹
              <br>

              ♠️ สร้างสรรค์ผลงาน
              &nbsp;&nbsp;

              ♠️ มาตรฐานเข้าถึง
              &nbsp;&nbsp;

              ♠️ ยืน 1 คุณภาพ

              <br>

              บริการให้คำปรึกษาเกี่ยวกับพื้นทุกระบบแบบครบวงจร

            </p>

          </div>


          <div class="footer-menu">

            <div class="footer-title">
              MENU
            </div>


            <div class="footer-links">

              <a href="index.html">
                หน้าแรก
              </a>

              <a href="about.html">
                เกี่ยวกับเรา
              </a>

              <a href="products.html">
                สินค้า
              </a>

              <a href="services.html">
                บริการ
              </a>

              <a href="projects.html">
                ผลงาน
              </a>

              <a href="contact.html">
                ติดต่อเรา
              </a>

            </div>

          </div>

        </div>


        <div class="footer-bottom">

          <div>
            © 2026 CHATPETCH GROUP CO., LTD.
          </div>


          <div class="footer-address">

            10/1 ม.9 ต.นาหม่อม
            อ.นาหม่อม
            จ.สงขลา 90310

          </div>


          <div class="footer-actions">

            <a
              href="contact.html"
              class="footer-action"
            >
              ☎ ติดต่อเรา
            </a>


            <a
              href="order-status.html"
              class="footer-action"
            >
              🔎 ติดตามคำสั่งซื้อ
            </a>


            <div class="footer-social">

              <a
                href="https://www.facebook.com/ChatphetchGroup"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                f
              </a>


              <a
                href="#"
                aria-label="YouTube"
              >
                ▶
              </a>


              <a
                href="#"
                aria-label="LINE"
              >
                LINE
              </a>

            </div>

          </div>

        </div>

      </div>

    `;


    document.body.appendChild(
      footer
    );

  }


  /* =========================================================
     CART COUNT
     ========================================================= */

  function updateCartCount() {

    const targets =
      document.querySelectorAll(
        "#cartCount"
      );


    let count = 0;


    try {

      const raw =
        localStorage.getItem(
          "chatpetch_cart"
        );


      if (raw) {

        const cart =
          JSON.parse(raw);


        if (Array.isArray(cart)) {

          count =
            cart.reduce(
              (sum, item) => {

                return (
                  sum +
                  Number(
                    item.quantity || 1
                  )
                );

              },
              0
            );

        } else if (
          cart &&
          typeof cart === "object"
        ) {

          count =
            Object.values(cart)
              .reduce(
                (sum, item) => {

                  if (
                    typeof item === "number"
                  ) {

                    return sum + item;

                  }


                  return (
                    sum +
                    Number(
                      item?.quantity || 0
                    )
                  );

                },
                0
              );

        }

      }

    } catch (error) {

      console.warn(
        "Cart count error:",
        error
      );

    }


    targets.forEach(el => {

      el.textContent =
        count;

    });

  }


  /* =========================================================
     GLOBAL NAV BEHAVIOR
     ========================================================= */

  function initNavigation() {

    document.addEventListener(
      "click",
      function (e) {

        const dropdown =
          e.target.closest(
            ".nav-dropdown"
          );


        if (!dropdown) {

          document
            .querySelectorAll(
              ".nav-dropdown.open"
            )
            .forEach(el => {

              el.classList.remove(
                "open"
              );


              el.querySelector(
                ".nav-drop-trigger"
              )?.setAttribute(
                "aria-expanded",
                "false"
              );

            });

        }


        const link =
          e.target.closest(
            ".customer-nav a"
          );


        if (link) {

          document
            .getElementById(
              "navMenu"
            )
            ?.classList
            .remove("show");

        }

      }
    );


    window.addEventListener(
      "storage",
      updateCartCount
    );


    window.addEventListener(
      "pageshow",
      updateCartCount
    );

  }


  /* =========================================================
     RUN
     ========================================================= */

  function init() {

    createHeader();

    createFooter();

    updateCartCount();

    initNavigation();

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once:true
      }
    );

  } else {

    init();

  }

})();
