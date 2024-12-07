"use client";

import { useEffect } from "react";

const MyCalInline = () => {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: { q: any[] }, ar: any) {
        a.q.push(ar);
      };

      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = [] as any[]; // Explicitly initialize 'q' as an array
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = [] as any[]; // Explicitly initialize 'q' as an array
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    (window as any).Cal("init", "consultation", { origin: "https://cal.com" });

    (window as any).Cal.ns.consultation("inline", {
      elementOrSelector: "#my-cal-inline",
      config: { layout: "month_view" },
      calLink: "dialwise/consultation",
    });

    (window as any).Cal.ns.consultation("ui", {
      styles: { branding: { brandColor: "#000000" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      id="my-cal-inline"
    ></div>
  );
};

export default MyCalInline;
