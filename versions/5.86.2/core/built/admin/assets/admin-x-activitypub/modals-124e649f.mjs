import { u as ce, a as ie, c as s, j as e, H as J, b as de, B as H, d as ee, e as ue, f as I, g as K, N as B, h as X, i as me, k as xe, s as pe, l as se, m as be, L as te, n as oe, A as ae, o as fe } from "./index-8aaa062c.mjs";
const ge = ({
  type: t = "text",
  inputRef: l,
  title: a,
  hideTitle: o,
  value: d,
  error: m,
  placeholder: x,
  rightPlaceholder: n,
  hint: i,
  onChange: p,
  onFocus: y,
  onBlur: f,
  clearBg: j = !1,
  className: g = "",
  maxLength: _,
  containerClassName: v = "",
  hintClassName: h = "",
  unstyled: L = !1,
  disabled: k,
  ...G
}) => {
  const T = ce(), { setFocusState: U } = ie(), A = (E) => {
    y == null || y(E), U(!0);
  }, V = (E) => {
    f == null || f(E), U(!1);
  }, O = s(
    "relative order-2 flex w-full items-center",
    a && !o && "mt-1.5"
  ), F = !L && s(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    m ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    k && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), Q = !L && s(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    k ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    n ? "w-0 grow rounded-l-lg" : "rounded-lg",
    g
  ), C = !L && s(
    "z-[1] order-3 rounded-r-lg",
    n ? typeof n == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let $ = /* @__PURE__ */ e.jsx(e.Fragment, {});
  const z = /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      className: Q || g,
      disabled: k,
      id: T,
      maxLength: _,
      placeholder: x,
      type: t,
      value: d,
      onBlur: V,
      onChange: p,
      onFocus: A,
      ...G
    }
  );
  return $ = /* @__PURE__ */ e.jsxs("div", { className: O, children: [
    z,
    !L && !j && /* @__PURE__ */ e.jsx("div", { className: F || "" }),
    n && /* @__PURE__ */ e.jsx("span", { className: C || "", children: n })
  ] }), h = s(
    "order-3",
    h
  ), v = s(
    "flex flex-col",
    v
  ), a || i ? /* @__PURE__ */ e.jsxs("div", { className: v, children: [
    $,
    a && /* @__PURE__ */ e.jsx(J, { className: o ? "sr-only" : "order-1", htmlFor: T, useLabelTag: !0, children: a }),
    i && /* @__PURE__ */ e.jsx(de, { className: h, color: m ? "red" : "default", children: i })
  ] }) : $;
}, he = ({ size: t = "md", buttons: l, link: a, linkWithPadding: o, clearBg: d = !0, outlineOnMobile: m, className: x }) => {
  let n = s(
    "flex items-center justify-start rounded",
    a ? "gap-4" : "gap-2",
    x
  );
  return a && !d && (n = s(
    "transition-all hover:bg-grey-200 dark:hover:bg-grey-900",
    t === "sm" ? "h-7 px-3" : "h-[34px] px-4",
    m && "border border-grey-300 hover:border-transparent md:border-transparent",
    n
  )), /* @__PURE__ */ e.jsx("div", { className: n, children: l.map(({ key: i, ...p }) => /* @__PURE__ */ e.jsx(H, { link: a, linkWithPadding: o, size: t, ...p }, i)) });
}, we = ({
  shiftY: t,
  footerBgColorClass: l = "bg-white dark:bg-black",
  contentBgColorClass: a = "bg-white dark:bg-black",
  height: o = 96,
  children: d
}) => {
  const m = s(
    "w-100 sticky bottom-[-24px] z-[297] m-0 box-border p-0"
  ), x = t ? `calc(${t} - 24px)` : "-24px", n = `${o + 24}px`, i = s(
    "sticky z-[298] block h-[24px]",
    a
  ), p = "0", y = s(
    "sticky z-[299] mb-[-24px] flex items-center justify-between",
    "h-[96px]",
    l
  ), f = "0", j = `${o}px`, g = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", _ = t ? `calc(${t} + ${o - 24}px)` : `${o - 24}px`;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: m,
      style: {
        bottom: x,
        height: n
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: i,
            style: {
              bottom: p
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: y,
            style: {
              bottom: f,
              height: j
            },
            children: d
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: g,
            style: {
              bottom: _
            }
          }
        )
      ]
    }
  );
};
function Y(t, l, a = {}) {
  t ? B.show(ke, {
    title: "Are you sure you want to leave this page?",
    prompt: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("p", { children: "Hey there! It looks like you didn't save the changes you made." }),
      /* @__PURE__ */ e.jsx("p", { children: "Save before you go!" })
    ] }),
    okLabel: "Leave",
    cancelLabel: "Stay",
    okColor: "red",
    onOk: (o) => {
      l(), o == null || o.remove();
    },
    ...a
  }) : l();
}
const ye = "bg-[rgba(98,109,121,0.2)] backdrop-blur-[3px]", R = ({
  size: t = "md",
  width: l,
  height: a,
  testId: o,
  title: d,
  okLabel: m = "OK",
  okLoading: x = !1,
  cancelLabel: n = "Cancel",
  footer: i,
  header: p,
  leftButtonProps: y,
  buttonsDisabled: f,
  padding: j = !0,
  onOk: g,
  okColor: _ = "black",
  onCancel: v,
  topRightContent: h,
  hideXOnMobile: L = !1,
  afterClose: k,
  children: G,
  backDrop: T = !0,
  backDropClick: U = !0,
  stickyFooter: A = !1,
  stickyHeader: V = !1,
  scrolling: O = !0,
  dirty: F = !1,
  animate: Q = !0,
  formSheet: C = !1,
  enableCMDS: $ = !0
}) => {
  const z = ee(), { setGlobalDirtyState: E } = ue(), [Z, le] = I(!1);
  K(() => {
    E(F);
  }, [F, E]), K(() => {
    const w = (N) => {
      N.key === "Escape" && (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        v ? v() : Y(F, () => {
          z.remove(), k == null || k();
        });
      }), N.stopPropagation());
    };
    return document.addEventListener("keydown", w), () => {
      document.removeEventListener("keydown", w);
    };
  }, [z, F, k, v]), K(() => {
    const w = setTimeout(() => {
      le(!0);
    }, 250);
    return () => clearTimeout(w);
  }, []), K(() => {
    if (g) {
      const w = (N) => {
        (N.metaKey || N.ctrlKey) && N.key === "s" && (N.preventDefault(), g());
      };
      if ($)
        return window.addEventListener("keydown", w), () => {
          window.removeEventListener("keydown", w);
        };
    }
  });
  const q = [];
  let S;
  const W = () => {
    Y(F, () => {
      z.remove(), k == null || k();
    });
  };
  i || (n && q.push({
    key: "cancel-modal",
    label: n,
    color: "outline",
    onClick: v || (() => {
      W();
    }),
    disabled: f
  }), m && q.push({
    key: "ok-modal",
    label: m,
    color: _,
    className: "min-w-[80px]",
    onClick: g,
    disabled: f,
    loading: x
  }));
  let c = s(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden bg-white dark:bg-black",
    t !== "bleed" && "rounded",
    C ? "shadow-md" : "shadow-xl",
    Q && !C && !Z && "animate-modal-in",
    C && !Z && "animate-modal-in-reverse",
    O ? "overflow-y-auto" : "overflow-y-hidden"
  ), u = s(
    "fixed inset-0 z-[1000] h-[100vh] w-[100vw]"
  ), b = "", r = s(
    !h || h === "close" ? "" : "flex items-center justify-between gap-5"
  );
  switch (V && (r = s(
    r,
    "sticky top-0 z-[200] -mb-4 bg-white !pb-4 dark:bg-black"
  )), t) {
    case "sm":
      c = s(
        c,
        "max-w-[480px]"
      ), u = s(
        u,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", r = s(
        r,
        "-inset-x-8"
      );
      break;
    case "md":
      c = s(
        c,
        "max-w-[720px]"
      ), u = s(
        u,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", r = s(
        r,
        "-inset-x-8"
      );
      break;
    case "lg":
      c = s(
        c,
        "max-w-[1020px]"
      ), u = s(
        u,
        "p-4 md:p-[4vmin]"
      ), b = "p-7", r = s(
        r,
        "-inset-x-8"
      );
      break;
    case "xl":
      c = s(
        c,
        "max-w-[1240px]0"
      ), u = s(
        u,
        "p-4 md:p-[3vmin]"
      ), b = "p-10", r = s(
        r,
        "-inset-x-10 -top-10"
      );
      break;
    case "full":
      c = s(
        c,
        "h-full"
      ), u = s(
        u,
        "p-4 md:p-[3vmin]"
      ), b = "p-10", r = s(
        r,
        "-inset-x-10"
      );
      break;
    case "bleed":
      c = s(
        c,
        "h-full"
      ), b = "p-10", r = s(
        r,
        "-inset-x-10"
      );
      break;
    default:
      u = s(
        u,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", r = s(
        r,
        "-inset-x-8"
      );
      break;
  }
  j || (b = "p-0"), c = s(
    c
  ), r = s(
    r,
    b,
    "pb-0"
  ), S = s(
    b,
    "py-0"
  ), u = s(
    u,
    "max-[800px]:!pb-20"
  );
  const re = s(
    `${b} ${A ? "py-6" : ""}`,
    "flex w-full items-center justify-between"
  );
  S = s(
    S,
    (t === "full" || t === "bleed" || a === "full" || typeof a == "number") && "grow"
  );
  const ne = (w) => {
    w.target === w.currentTarget && U && W();
  }, D = {};
  typeof l == "number" ? (D.width = "100%", D.maxWidth = l + "px") : l === "full" && (c = s(
    c,
    "w-full"
  )), typeof a == "number" ? (D.height = "100%", D.maxHeight = a + "px") : a === "full" && (c = s(
    c,
    "h-full"
  ));
  let M;
  return i ? M = i : i === !1 ? S += " pb-0 " : M = /* @__PURE__ */ e.jsxs("div", { className: re, children: [
    /* @__PURE__ */ e.jsx("div", { children: y && /* @__PURE__ */ e.jsx(H, { ...y }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ e.jsx(he, { buttons: q }) })
  ] }), M = A ? /* @__PURE__ */ e.jsx(we, { height: 84, children: M }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: M }), /* @__PURE__ */ e.jsxs("div", { className: u, id: "modal-backdrop", onMouseDown: ne, children: [
    /* @__PURE__ */ e.jsx("div", { className: s(
      "pointer-events-none fixed inset-0 z-0",
      T && !C && ye,
      C && "bg-[rgba(98,109,121,0.08)]"
    ) }),
    /* @__PURE__ */ e.jsxs("section", { className: c, "data-testid": o, style: D, children: [
      p === !1 ? "" : !h || h === "close" ? /* @__PURE__ */ e.jsxs("header", { className: r, children: [
        d && /* @__PURE__ */ e.jsx(J, { level: 3, children: d }),
        /* @__PURE__ */ e.jsx("div", { className: `${h !== "close" && "md:!invisible md:!hidden"} ${L && "hidden"} absolute right-6 top-6`, children: /* @__PURE__ */ e.jsx(H, { className: "-m-2 cursor-pointer p-2 opacity-50 hover:opacity-100", icon: "close", iconColorClass: "text-black dark:text-white", size: "sm", testId: "close-modal", unstyled: !0, onClick: W }) })
      ] }) : /* @__PURE__ */ e.jsxs("header", { className: r, children: [
        d && /* @__PURE__ */ e.jsx(J, { level: 3, children: d }),
        h
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: S, children: G }),
      M
    ] })
  ] });
}, ve = ({
  title: t = "Are you sure?",
  prompt: l,
  cancelLabel: a = "Cancel",
  okLabel: o = "OK",
  okRunningLabel: d = "...",
  okColor: m = "black",
  onCancel: x,
  onOk: n,
  customFooter: i,
  formSheet: p = !0
}) => {
  const y = ee(), [f, j] = I("");
  return /* @__PURE__ */ e.jsx(
    R,
    {
      backDropClick: !1,
      buttonsDisabled: f === "running",
      cancelLabel: a,
      footer: i,
      formSheet: p,
      okColor: m,
      okLabel: f === "running" ? d : o,
      testId: "confirmation-modal",
      title: t,
      width: 540,
      onCancel: x,
      onOk: async () => {
        j("running");
        try {
          await (n == null ? void 0 : n(y));
        } catch (g) {
          console.error("Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.", g);
        }
        j("");
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "py-4 leading-9", children: l })
    }
  );
}, ke = B.create(ve), je = B.create(() => {
  const { updateRoute: t } = X(), l = B.useModal(), a = me(), o = xe(), [d, m] = I(""), [x, n] = I(null), i = async () => {
    try {
      await a.mutateAsync({ username: d }), pe({
        message: "Site followed",
        type: "success"
      }), l.remove(), await o.refetchQueries({ queryKey: ["FollowingResponseData"], type: "active" }), t("");
    } catch {
      n(x);
    }
  };
  return /* @__PURE__ */ e.jsx(
    R,
    {
      afterClose: () => {
        a.reset(), t("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: i,
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ e.jsx(
        ge,
        {
          autoFocus: !0,
          error: !!x,
          hint: x,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: d,
          "data-test-new-follower": !0,
          onChange: (p) => m(p.target.value)
        }
      ) })
    }
  );
});
function P(t) {
  if (!t.username || !t.id)
    return "@unknown@unknown";
  try {
    return `@${t.username}@${new URL(t.id).hostname}`;
  } catch {
    return "@unknown@unknown";
  }
}
const Fe = ({}) => {
  const { updateRoute: t } = X(), l = se(), { data: { orderedItems: a = [] } = {} } = be("inbox");
  return /* @__PURE__ */ e.jsx(
    R,
    {
      afterClose: () => {
        l.reset(), t("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(te, { children: a.map((o) => /* @__PURE__ */ e.jsx(oe, { action: /* @__PURE__ */ e.jsx(H, { color: "grey", label: "Follow back", link: !0, onClick: () => l.mutate({ username: o.username }) }), avatar: /* @__PURE__ */ e.jsx(ae, { image: o.icon, size: "sm" }), detail: P(o), id: "list-item", title: o.name })) }) })
    }
  );
}, Ce = B.create(Fe), Ne = ({}) => {
  const { updateRoute: t } = X(), l = se(), { data: { orderedItems: a = [] } = {} } = fe("inbox");
  return /* @__PURE__ */ e.jsx(
    R,
    {
      afterClose: () => {
        l.reset(), t("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(te, { children: a.map((o) => /* @__PURE__ */ e.jsx(oe, { action: /* @__PURE__ */ e.jsx(H, { color: "grey", label: "Unfollow", link: !0, onClick: () => l.mutate({ username: P(o) }) }), avatar: /* @__PURE__ */ e.jsx(ae, { image: o.icon, size: "sm" }), detail: P(o), id: "list-item", title: o.name })) }) })
    }
  );
}, Le = B.create(Ne), Me = { FollowSite: je, ViewFollowing: Le, ViewFollowers: Ce };
export {
  Me as default
};
//# sourceMappingURL=modals-124e649f.mjs.map
