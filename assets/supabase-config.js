/* =====================================================
   CHATPETCH GROUP
   SUPABASE CONFIG
===================================================== */

(function () {

  const SUPABASE_URL =
    "ใส่_SUPABASE_URL_ตรงนี้";

  const SUPABASE_KEY =
    "ใส่_SUPABASE_PUBLISHABLE_KEY_หรือ_ANON_KEY_ตรงนี้";


  /* ---------------------------------------------------
     ตรวจสอบ Config
  --------------------------------------------------- */

  function validateConfig() {

    if (
      !SUPABASE_URL ||
      SUPABASE_URL.includes("ใส่_") ||
      !SUPABASE_URL.startsWith("https://")
    ) {

      throw new Error(
        "ยังไม่ได้ตั้งค่า SUPABASE_URL"
      );

    }


    if (
      !SUPABASE_KEY ||
      SUPABASE_KEY.includes("ใส่_")
    ) {

      throw new Error(
        "ยังไม่ได้ตั้งค่า SUPABASE_KEY"
      );

    }


    /*
      ป้องกันการเอาคีย์ที่มีอักขระ
      ผิดรูปแบบมาใส่
    */

    if (
      /[^\x00-\x7F]/.test(
        SUPABASE_KEY
      )
    ) {

      throw new Error(
        "SUPABASE_KEY มีอักขระไม่ถูกต้อง"
      );

    }

  }


  /* ---------------------------------------------------
     สร้าง Supabase Client
  --------------------------------------------------- */

  function createSupabaseClient() {

    validateConfig();

    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function"
    ) {

      throw new Error(
        "ไม่พบ Supabase JavaScript SDK"
      );

    }


    return window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );

  }


  /* ---------------------------------------------------
     Global
  --------------------------------------------------- */

  window.CHATPETCH_SUPABASE = {

    url: SUPABASE_URL,

    key: SUPABASE_KEY,

    createClient:
      createSupabaseClient

  };

})();
