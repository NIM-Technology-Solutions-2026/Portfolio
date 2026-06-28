export default function GISDashboard() {
  return (
    <div className="overflow-hidden rounded-4xl border border-hairline bg-white shadow-lift">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-hairline bg-brand-50 px-4 py-3.5 sm:px-5">
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#E0524A]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#E8B84A]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#3FA66A]" />
        <span className="ml-3 min-w-0 truncate text-[0.68rem] font-600 text-muted">
          gis.nim-platform · Beneficiary Console
        </span>
      </div>

      {/* On mobile this is a single column; the sidebar only appears from sm up.
          (Previously the hidden sidebar still reserved a 130px grid track, which
          crushed the main panel on phones.) */}
      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr]">
        {/* sidebar */}
        <aside className="hidden flex-col gap-1.5 bg-brand-700 p-4 sm:flex">
          <div className="mb-3 text-[0.62rem] font-700 uppercase tracking-[0.16em] text-brand-200">
            GIS · Admin
          </div>
          {["Dashboard", "Beneficiaries", "Policies", "Claims", "Payments", "Reports", "Audit Log"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 text-[0.74rem] font-500 ${
                  i === 0 ? "bg-white text-brand-700" : "text-brand-100"
                }`}
              >
                {item}
              </div>
            )
          )}
        </aside>

        {/* main */}
        <div className="bg-[#F7FAFE] p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate text-sm font-700 text-ink">Scheme Overview</div>
              <div className="truncate text-[0.66rem] text-muted">
                Buldhana District · FY 2025–26
              </div>
            </div>
            <div className="shrink-0 rounded-full bg-brand-600 px-3 py-1 text-[0.6rem] font-600 text-white">
              ● LIVE
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
            {[
              { k: "Beneficiaries", v: "48,210" },
              { k: "Active Policies", v: "39,884" },
              { k: "Claims (mo.)", v: "1,127" },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-hairline bg-white p-3">
                <div className="text-sm font-800 text-brand-700 sm:text-base">{c.v}</div>
                <div className="mt-0.5 text-[0.55rem] font-600 uppercase tracking-wide text-muted sm:text-[0.58rem]">
                  {c.k}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-hairline bg-white">
            <div className="grid grid-cols-[1fr_1fr_auto] gap-2 border-b border-hairline px-3 py-2.5 text-[0.58rem] font-700 uppercase tracking-wide text-muted sm:px-4">
              <span>Beneficiary</span>
              <span>Policy</span>
              <span>Status</span>
            </div>
            {[
              { n: "R. Pawar", p: "GIS-HEALTH", s: "Approved", ok: true },
              { n: "S. Deshmukh", p: "GIS-CROP", s: "In review", ok: false },
              { n: "A. Khan", p: "GIS-HEALTH", s: "Approved", ok: true },
            ].map((row) => (
              <div
                key={row.n}
                className="grid grid-cols-[1fr_1fr_auto] items-center gap-2 border-b border-hairline px-3 py-2.5 text-[0.72rem] text-ink last:border-0 sm:px-4"
              >
                <span className="truncate font-600">{row.n}</span>
                <span className="truncate text-[0.64rem] text-muted">{row.p}</span>
                <span
                  className={`whitespace-nowrap text-[0.6rem] font-600 ${
                    row.ok ? "text-[#2F8F57]" : "text-brand-500"
                  }`}
                >
                  ● {row.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}