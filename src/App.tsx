import { useState, type ReactNode } from 'react'

type IconName =
  | 'overview'
  | 'water'
  | 'rain'
  | 'prediction'
  | 'warning'
  | 'history'
  | 'device'
  | 'settings'
  | 'bell'
  | 'menu'
  | 'close'
  | 'chevron'
  | 'activity'
  | 'wifi'
  | 'sensor'
  | 'clock'
  | 'trending'
  | 'shield'

const paths: Record<IconName, ReactNode> = {
  overview: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
  water: <><path d="M12 2.7S5.3 10.2 5.3 15.4a6.7 6.7 0 0 0 13.4 0C18.7 10.2 12 2.7 12 2.7Z"/><path d="M9 16.2c.4 1.3 1.4 2.1 2.8 2.3"/></>,
  rain: <><path d="M16 13a4 4 0 1 0-7.7-1.5A3.5 3.5 0 0 0 8.5 18H17a2.5 2.5 0 0 0 0-5Z"/><path d="m8 21 1-1.5m4 1.5 1-1.5m4 1.5 1-1.5"/></>,
  prediction: <><path d="M4 19V9m5 10V5m5 14v-7m5 7V3"/><path d="m3 13 6-4 5 3 6-7"/></>,
  warning: <><path d="M10.3 3.9 2.5 17.3a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5m4-1v5l3 2"/></>,
  device: <><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 6h6M10 18h4"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  activity: <path d="M3 12h4l2.5-7 4.5 14 2.5-7H21"/>,
  wifi: <><path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r=".8" fill="currentColor" stroke="none"/></>,
  sensor: <><circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4m8.4 0a6 6 0 0 0 0-8.4M4.9 4.9a10 10 0 0 0 0 14.2m14.2 0a10 10 0 0 0 0-14.2"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  trending: <><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></>,
  shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
}

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

type PageKey = 'overview' | 'monitoring' | 'prediction' | 'history' | 'devices'

const navigation: { id: PageKey; label: string; icon: IconName }[] = [
  { id: 'overview', label: 'Overview', icon: 'overview' },
  { id: 'monitoring', label: 'Monitoring', icon: 'activity' },
  { id: 'prediction', label: 'Prediksi & Peringatan', icon: 'warning' },
  { id: 'history', label: 'Riwayat & Analitik', icon: 'history' },
  { id: 'devices', label: 'Perangkat', icon: 'device' },
]

function Sidebar({ open, active, onNavigate, onClose }: { open: boolean; active: PageKey; onNavigate: (page: PageKey) => void; onClose: () => void }) {
  return <>
    {open && <button aria-label="Tutup menu" className="fixed inset-0 z-30 bg-slate-950/30 backdrop-blur-sm lg:hidden" onClick={onClose} />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-[86vw] max-w-[264px] flex-col border-r border-white/5 bg-[#071739] text-white shadow-2xl shadow-slate-900/10 transition-transform duration-300 lg:w-[264px] lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-[70px] items-center justify-between px-5 sm:h-[82px] sm:px-7">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#4B6382] to-[#071739] text-white shadow-lg shadow-[#A4B5C4]/30"><Icon name="water" className="h-5 w-5" /></div>
          <div><p className="text-[19px] font-extrabold tracking-tight text-white">AquaSense</p><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-slate-400">Smart monitoring</p></div>
        </div>
        <button className="text-slate-400 lg:hidden" onClick={onClose}><Icon name="close" /></button>
      </div>
      <nav className="flex-1 px-4 pt-4">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">Menu Utama</p>
        <div className="space-y-1">
          {navigation.map((item) => <button key={item.id} onClick={() => { onNavigate(item.id); onClose() }} className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-semibold transition ${active === item.id ? 'bg-white/10 text-[#CDD5DB] shadow-inner shadow-white/5' : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'}`}>
            <Icon name={item.icon} className={`h-[18px] w-[18px] ${active === item.id ? 'text-[#A4B5C4]' : 'text-slate-500 group-hover:text-slate-300'}`} /><span className="flex-1">{item.label}</span>{item.id === 'prediction' && <span className="h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/10" />}
          </button>)}
        </div>
      </nav>
      <div className="m-4 rounded-2xl border border-white/10 bg-white/[.045] p-4">
        <div className="mb-3 flex items-center justify-between"><span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-[#CDD5DB]"><Icon name="device" className="h-4 w-4" /></span><span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ONLINE</span></div>
        <p className="text-xs font-bold text-slate-100">ESP32 — Drainase Utama</p>
        <p className="mt-1 text-[10px] text-slate-500">Terakhir sinkron 12 detik lalu</p>
      </div>
    </aside>
  </>
}

const metricSurfaces: Record<IconName, { background: string; border: string; accent: string }> = {
  water: { background: '#e3e9ed', border: '#c4d0d8', accent: '#2F80ED' },
  activity: { background: '#ebe6df', border: '#d9cbbc', accent: '#F59E0B' },
  rain: { background: '#eee3d8', border: '#ddc9b4', accent: '#8B5CF6' },
  warning: { background: '#e4e8e5', border: '#cbd5cf', accent: '#10B981' },
  prediction: { background: '#dfe6eb', border: '#bdcad4', accent: '#3B82F6' },
  clock: { background: '#ece1d6', border: '#dcc7b2', accent: '#F97316' },
  sensor: { background: '#e2e7e6', border: '#c5d0cd', accent: '#06B6D4' },
  trending: { background: '#eadfd5', border: '#dac5b2', accent: '#EF4444' },
  overview: { background: '#e5e9ec', border: '#c8d1d8', accent: '#6366F1' },
  device: { background: '#e1e6ea', border: '#c2cdd5', accent: '#0EA5E9' },
  history: { background: '#e9e3dc', border: '#d7c9ba', accent: '#F59E0B' },
  shield: { background: '#e3e8e4', border: '#c8d2cb', accent: '#10B981' },
  wifi: { background: '#e2e8eb', border: '#c3ced5', accent: '#06B6D4' },
  settings: { background: '#e5e7e8', border: '#cbd0d3', accent: '#667785' },
  bell: { background: '#ebe3dc', border: '#d8c8ba', accent: '#A68868' },
  menu: { background: '#e5e9ec', border: '#c8d1d8', accent: '#4B6382' },
  close: { background: '#e5e9ec', border: '#c8d1d8', accent: '#4B6382' },
  chevron: { background: '#e5e9ec', border: '#c8d1d8', accent: '#4B6382' },
}

function MetricCard({ icon, color, label, value, unit, footer }: { icon: IconName; color: string; label: string; value: string; unit: string; footer: ReactNode }) {
  const surface = metricSurfaces[icon]
  return <div className="card relative overflow-hidden p-4 sm:p-5" style={{ backgroundColor: surface.background, borderColor: surface.border }}>
    <span className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: surface.accent, boxShadow: `0 0 12px ${surface.accent}80` }} />
    <div className="mb-5 flex items-start justify-between">
      <div className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}><Icon name={icon} className="h-5 w-5" /></div>
      <button className="text-slate-300 hover:text-slate-500"><span className="text-lg leading-none">•••</span></button>
    </div>
    <p className="mb-1 text-xs font-semibold text-slate-400">{label}</p>
    <div className="flex items-end gap-1.5"><strong className="text-[28px] font-extrabold tracking-tight text-slate-900">{value}</strong><span className="mb-1 text-xs font-bold text-slate-400">{unit}</span></div>
    <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-slate-500">{footer}</div>
  </div>
}

const chartPoints = '0,104 24,100 48,94 72,98 96,88 120,84 144,77 168,79 192,67 216,70 240,59 264,61 288,46 312,50 336,36 360,39 384,27 408,32 432,23 456,19 480,24 504,11 528,15 552,5'
const rainPoints = '0,117 24,116 48,114 72,110 96,106 120,111 144,101 168,104 192,96 216,91 240,94 264,80 288,84 312,72 336,78 360,66 384,70 408,57 432,61 456,48 480,51 504,44 528,47 552,39'

function MainChart() {
  const [period, setPeriod] = useState('24 Jam')
  return <section className="card min-w-0 p-4 sm:p-6 md:col-span-2">
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div><h2 className="section-title">Tren Monitoring</h2><p className="mt-1 text-xs text-slate-400">Perubahan ketinggian air dan Rain Index</p></div>
      <div className="flex w-full overflow-x-auto rounded-lg bg-slate-100 p-1 sm:w-auto">
        {['1 Jam', '6 Jam', '12 Jam', '24 Jam'].map(item => <button key={item} onClick={() => setPeriod(item)} className={`shrink-0 flex-1 whitespace-nowrap rounded-md px-2 py-1.5 text-[10px] font-bold transition sm:px-3 ${period === item ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>{item}</button>)}
      </div>
    </div>
    <div className="mb-4 flex gap-5 text-[10px] font-semibold text-slate-500"><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#2F80ED] shadow-[0_0_8px_#2F80ED]" /> Ketinggian Air</span><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" /> Rain Index</span></div>
    <div className="relative h-[220px] w-full pl-8">
      <div className="absolute inset-y-0 left-0 flex flex-col justify-between pb-6 text-[9px] font-medium text-slate-300"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
      <div className="relative h-[194px] overflow-hidden">
        {[0,1,2,3,4].map(i => <div key={i} className="absolute left-0 right-0 border-t border-dashed border-slate-100" style={{top: `${i * 25}%`}} />)}
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 552 130" preserveAspectRatio="none">
          <defs><linearGradient id="waterFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2F80ED" stopOpacity=".24"/><stop offset="1" stopColor="#2F80ED" stopOpacity="0"/></linearGradient></defs>
          <polygon points={`${chartPoints} 552,130 0,130`} fill="url(#waterFill)" />
          <polyline points={rainPoints} fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
          <polyline points={chartPoints} fill="none" stroke="#2F80ED" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
          <circle cx="552" cy="5" r="4" fill="#f1eeea" stroke="#2F80ED" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="flex justify-between pr-1 text-[9px] font-medium text-slate-300"><span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span></div>
    </div>
  </section>
}

function WaterGauge() {
  return <section className="card p-5 sm:p-6">
    <div className="flex items-center justify-between"><div><h2 className="section-title">Kapasitas Air</h2><p className="mt-1 text-xs text-slate-400">Batas drainase saat ini</p></div><span className="status-safe">Aman</span></div>
    <div className="mt-6 flex items-center justify-center gap-7">
      <div className="relative h-40 w-[92px] overflow-hidden rounded-[26px] border-[5px] border-slate-100 bg-slate-50 shadow-inner">
        <div className="water-fill absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#2563EB] to-[#22D3EE]"><div className="wave" /></div>
        <div className="absolute inset-0 grid place-items-center"><div className="rounded-xl bg-white/90 px-2.5 py-1.5 text-center shadow-sm backdrop-blur"><b className="text-lg text-slate-900">42</b><span className="text-[10px] font-bold text-slate-400">%</span></div></div>
      </div>
      <div className="space-y-4">
        <div><p className="text-[10px] font-semibold text-slate-400">Ketinggian saat ini</p><p className="mt-1 text-lg font-extrabold text-slate-800">42.6 <span className="text-[10px] text-slate-400">cm</span></p></div>
        <div><p className="text-[10px] font-semibold text-slate-400">Batas peringatan</p><p className="mt-1 text-sm font-bold text-amber-500">75.0 <span className="text-[10px] text-slate-400">cm</span></p></div>
        <div><p className="text-[10px] font-semibold text-slate-400">Batas kritis</p><p className="mt-1 text-sm font-bold text-rose-500">90.0 <span className="text-[10px] text-slate-400">cm</span></p></div>
      </div>
    </div>
  </section>
}

function Prediction() {
  return <section className="dark-panel overflow-hidden rounded-2xl bg-gradient-to-br from-[#172e4d] to-[#071739] p-5 text-white shadow-lg shadow-[#071739]/10 sm:p-6 md:col-span-2">
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#CDD5DB]"><Icon name="prediction" /></div><div><div className="mb-1.5 flex items-center gap-2"><h2 className="text-sm font-bold">Prediksi Model ML</h2><span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9px] font-bold text-emerald-300">MODEL AKTIF</span></div><p className="max-w-md text-[11px] leading-relaxed text-slate-300">Ketinggian air diperkirakan naik secara bertahap dalam 60 menit ke depan.</p></div></div>
      <div className="flex items-center gap-7 border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
        <div><p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">Prediksi level</p><p className="mt-1 text-xl font-extrabold">48.2 <span className="text-[10px] text-slate-400">cm</span></p></div>
        <div><p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">Estimasi luapan</p><p className="mt-1 text-xl font-extrabold text-[#CDD5DB]">&gt; 6 <span className="text-[10px] text-slate-400">jam</span></p></div>
      </div>
    </div>
    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[48%] rounded-full bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] shadow-[0_0_10px_#22D3EE]" /></div>
    <div className="mt-2 flex justify-between text-[9px] font-medium text-slate-400"><span>Level saat ini</span><span>Batas luapan 100 cm</span></div>
  </section>
}

const devices = [
  { icon: 'wifi' as IconName, name: 'Koneksi ESP32', detail: 'WiFi • -58 dBm', state: 'Terhubung' },
  { icon: 'sensor' as IconName, name: 'Sensor HC-SR04', detail: 'Jarak: 57.4 cm', state: 'Normal' },
  { icon: 'rain' as IconName, name: 'Sensor FC-37', detail: 'ADC: 2.842', state: 'Normal' },
]

const pageMeta: Record<PageKey, { title: string; subtitle: string }> = {
  overview: { title: 'Dashboard Overview', subtitle: 'Pantau kondisi drainase secara real-time' },
  monitoring: { title: 'Monitoring', subtitle: 'Pantau ketinggian air dan kondisi hujan' },
  prediction: { title: 'Prediksi & Peringatan', subtitle: 'Analisis potensi luapan dan status peringatan dini' },
  history: { title: 'Riwayat & Analitik', subtitle: 'Telusuri dan analisis data historis sensor' },
  devices: { title: 'Perangkat', subtitle: 'Diagnostik perangkat dan komponen IoT' },
}

function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
    <div className="min-w-0"><p className="mb-1 text-[10px] font-bold uppercase tracking-[.15em] text-[#4B6382] sm:text-[11px]">{eyebrow}</p><h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">{title}</h2><p className="mt-1.5 max-w-2xl text-[11px] leading-relaxed text-slate-400 sm:text-xs">{description}</p></div>
    {action}
  </div>
}

function GraphCard({ title, subtitle, prediction = false }: { title: string; subtitle: string; prediction?: boolean }) {
  return <section className="card min-w-0 p-5 sm:p-6">
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="section-title">{title}</h3><p className="mt-1 text-xs text-slate-400">{subtitle}</p></div><button className="self-start rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] font-bold text-slate-500 hover:border-[#A4B5C4] hover:text-[#4B6382]">24 Jam</button></div>
    <div className="mb-4 flex gap-5 text-[10px] font-semibold text-slate-500"><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#4B6382]" /> Aktual</span>{prediction && <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#A68868]" /> Prediksi</span>}</div>
    <div className="relative h-[230px] pl-8">
      <div className="absolute inset-y-0 left-0 flex flex-col justify-between pb-6 text-[9px] text-slate-300"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
      <div className="relative h-[204px] overflow-hidden">
        {[0,1,2,3,4].map(i => <div key={i} className="absolute inset-x-0 border-t border-dashed border-slate-100" style={{ top: `${i * 25}%` }} />)}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 552 130" preserveAspectRatio="none">
          <defs><linearGradient id={`graph-${title.replaceAll(' ', '')}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4B6382" stopOpacity=".22"/><stop offset="1" stopColor="#4B6382" stopOpacity="0"/></linearGradient></defs>
          <polygon points={`${chartPoints} 552,130 0,130`} fill={`url(#graph-${title.replaceAll(' ', '')})`} />
          <polyline points={chartPoints} fill="none" stroke="#4B6382" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
          {prediction && <polyline points="360,39 384,33 408,26 432,18 456,14 480,8 504,5 528,2 552,0" fill="none" stroke="#A68868" strokeWidth="2.4" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />}
        </svg>
      </div>
      <div className="flex justify-between text-[9px] text-slate-300"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
    </div>
  </section>
}

function MonitoringPage() {
  const [tab, setTab] = useState<'water' | 'rain'>('water')
  return <>
    <PageHeading eyebrow="Live Sensor" title="Monitoring Kondisi" description="Data ilustratif untuk memantau sensor air dan hujan. Gunakan tab untuk berpindah jenis monitoring." />
    <div className="mb-5 grid w-full grid-cols-2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto">
      <button onClick={() => setTab('water')} className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-[10px] font-bold transition sm:gap-2 sm:px-4 sm:text-xs ${tab === 'water' ? 'bg-[#4B6382] text-white shadow-md shadow-[#CDD5DB]' : 'text-slate-500 hover:bg-slate-50'}`}><Icon name="water" className="h-4 w-4 shrink-0" /> Ketinggian Air</button>
      <button onClick={() => setTab('rain')} className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-[10px] font-bold transition sm:gap-2 sm:px-4 sm:text-xs ${tab === 'rain' ? 'bg-[#A68868] text-white shadow-md shadow-[#E3C39D]/50' : 'text-slate-500 hover:bg-slate-50'}`}><Icon name="rain" className="h-4 w-4 shrink-0" /> Kondisi Hujan</button>
    </div>
    {tab === 'water' ? <div className="animate-page">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon="water" color="bg-[#e7ebee] text-[#4B6382]" label="Ketinggian Air" value="65" unit="cm" footer={<><span className="text-amber-600">+2.4 cm</span><span>dalam 10 menit</span></>} />
        <MetricCard icon="activity" color="bg-[#e1e6ea] text-[#4B6382]" label="Kapasitas" value="65" unit="%" footer={<><span className="h-1.5 w-1.5 rounded-full bg-amber-400" />Mendekati batas peringatan</>} />
        <MetricCard icon="sensor" color="bg-[#dce3e8] text-[#071739]" label="Jarak Sensor" value="35" unit="cm" footer={<>HC-SR04 membaca normal</>} />
        <MetricCard icon="trending" color="bg-amber-50 text-amber-600" label="Laju Kenaikan" value="+0.24" unit="cm/mnt" footer={<>Tren air sedang naik</>} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3"><div className="lg:col-span-2"><GraphCard title="Perubahan Ketinggian Air" subtitle="Rekaman ketinggian air dalam 24 jam terakhir" /></div><WaterGauge /></div>
    </div> : <div className="animate-page">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon="rain" color="bg-[#eee4da] text-[#A68868]" label="Rain Index" value="28" unit="/ 100" footer={<><span className="rounded bg-[#e1e6ea] px-2 py-0.5 text-[#4B6382]">Hujan Ringan</span></>} />
        <MetricCard icon="sensor" color="bg-[#dce3e8] text-[#071739]" label="Nilai ADC" value="2.842" unit="" footer={<>Sensor FC-37 / YL-83</>} />
        <MetricCard icon="trending" color="bg-emerald-50 text-emerald-600" label="Rain Index Min." value="12" unit="" footer={<>Tercatat pukul 01:24</>} />
        <MetricCard icon="activity" color="bg-rose-50 text-rose-600" label="Rain Index Maks." value="54" unit="" footer={<>Tercatat pukul 08:42</>} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2"><GraphCard title="Perubahan Rain Index" subtitle="Tingkat kebasahan sensor dalam 24 jam terakhir" /></div>
        <section className="card p-6"><h3 className="section-title">Klasifikasi Hujan</h3><p className="mt-1 text-xs text-slate-400">Threshold Rain Index sensor</p><div className="mt-7 space-y-5">{[['Tidak Hujan','0–19','bg-slate-400'],['Hujan Ringan','20–44','bg-[#4B6382]'],['Hujan Sedang','45–74','bg-[#A68868]'],['Hujan Deras','75–100','bg-[#071739]']].map(([label, range, color]) => <div key={label} className={`flex items-center justify-between rounded-xl border p-3 ${label === 'Hujan Ringan' ? 'border-[#A4B5C4] bg-[#e1e6ea]' : 'border-slate-100'}`}><span className="flex items-center gap-2 text-[11px] font-bold text-slate-700"><i className={`h-2.5 w-2.5 rounded-full ${color}`} />{label}</span><span className="text-[10px] font-semibold text-slate-400">{range}</span></div>)}</div></section>
      </div>
    </div>}
  </>
}

function PredictionPage() {
  return <>
    <PageHeading eyebrow="Early Warning System" title="Prediksi & Peringatan" description="Prediksi model membantu mengidentifikasi potensi luapan dan memberi waktu respons lebih awal." action={<span className="flex items-center gap-2 self-start rounded-xl border border-emerald-100 bg-emerald-50 px-3.5 py-2.5 text-[11px] font-bold text-emerald-700"><Icon name="shield" className="h-4 w-4" /> Status saat ini: Aman</span>} />
    <div className="grid gap-4 sm:grid-cols-3">
      <MetricCard icon="prediction" color="bg-[#eee4da] text-[#A68868]" label="Prediksi 60 Menit" value="48.2" unit="cm" footer={<>Akurasi model 94.7%</>} />
      <MetricCard icon="clock" color="bg-[#e7ebee] text-[#4B6382]" label="Estimasi Luapan (ETA)" value="> 6" unit="jam" footer={<>Belum mencapai kondisi kritis</>} />
      <MetricCard icon="warning" color="bg-emerald-50 text-emerald-600" label="Peringatan Aktif" value="0" unit="" footer={<>Tidak ada ancaman terdeteksi</>} />
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2"><GraphCard title="Aktual vs Prediksi" subtitle="Perbandingan pembacaan aktual dan prediksi 60 menit" prediction /></div>
      <section className="card p-6"><h3 className="section-title">Informasi Model</h3><p className="mt-1 text-xs text-slate-400">Konfigurasi model prediksi aktif</p><div className="mt-6 space-y-4">{[['Algoritma','Random Forest Regressor'],['Input','Level, Rain Index, Rise Rate'],['MAE','2.1 cm'],['Akurasi','94.7%'],['Terakhir dilatih','18 Mei 2026']].map(([label,value]) => <div key={label} className="flex items-start justify-between gap-4 border-b border-slate-50 pb-3 text-[11px] last:border-0"><span className="text-slate-400">{label}</span><b className="text-right text-slate-700">{value}</b></div>)}</div></section>
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-2">
      <section className="card p-6"><div className="mb-5"><h3 className="section-title">Level Peringatan</h3><p className="mt-1 text-xs text-slate-400">Klasifikasi berdasarkan kondisi sistem</p></div><div className="grid gap-3 sm:grid-cols-2">{[['Aman','Kondisi normal','bg-emerald-500','border-emerald-200 bg-emerald-50'],['Waspada','Mendekati batas','bg-amber-400','border-slate-100'],['Siaga','Kenaikan signifikan','bg-orange-500','border-slate-100'],['Awas','Batas kritis','bg-rose-500','border-slate-100']].map(([name,desc,dot,style]) => <div key={name} className={`rounded-xl border p-4 ${style}`}><div className="flex items-center gap-2"><i className={`h-2.5 w-2.5 rounded-full ${dot}`} /><b className="text-xs text-slate-700">{name}</b></div><p className="mt-1 pl-[18px] text-[10px] text-slate-400">{desc}</p></div>)}</div></section>
      <section className="card p-6"><div className="mb-5 flex items-center justify-between"><div><h3 className="section-title">Indikator Lokal</h3><p className="mt-1 text-xs text-slate-400">Status buzzer dan LED perangkat</p></div><span className="status-safe">Normal</span></div><div className="space-y-3">{[['Buzzer peringatan','Standby'],['LED hijau','Menyala'],['LED kuning','Mati'],['LED merah','Mati']].map(([name,state],i) => <div key={name} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"><span className="text-[11px] font-semibold text-slate-600">{name}</span><span className={`text-[10px] font-bold ${i === 1 ? 'text-emerald-600' : 'text-slate-400'}`}>{state}</span></div>)}</div></section>
    </div>
  </>
}

const historyRows = [
  { time: '19 Mei 2026, 10:45:00', level: '42.6', capacity: '42', distance: '57.4', rain: '28', category: 'Hujan Ringan', adc: '2.842', rate: '+0.24', predicted: '48.2', eta: '> 6 jam', status: 'Aman' },
  { time: '19 Mei 2026, 10:30:00', level: '41.8', capacity: '41', distance: '58.2', rain: '26', category: 'Hujan Ringan', adc: '2.910', rate: '+0.18', predicted: '47.6', eta: '> 6 jam', status: 'Aman' },
  { time: '19 Mei 2026, 10:15:00', level: '40.9', capacity: '40', distance: '59.1', rain: '24', category: 'Hujan Ringan', adc: '2.976', rate: '+0.15', predicted: '46.9', eta: '> 6 jam', status: 'Aman' },
  { time: '19 Mei 2026, 10:00:00', level: '40.1', capacity: '40', distance: '59.9', rain: '21', category: 'Hujan Ringan', adc: '3.042', rate: '+0.12', predicted: '45.8', eta: '> 6 jam', status: 'Aman' },
  { time: '19 Mei 2026, 09:45:00', level: '39.4', capacity: '39', distance: '60.6', rain: '18', category: 'Tidak Hujan', adc: '3.184', rate: '+0.08', predicted: '44.2', eta: '> 8 jam', status: 'Aman' },
  { time: '19 Mei 2026, 09:30:00', level: '38.8', capacity: '38', distance: '61.2', rain: '16', category: 'Tidak Hujan', adc: '3.246', rate: '-0.02', predicted: '42.4', eta: '> 8 jam', status: 'Aman' },
  { time: '19 Mei 2026, 09:15:00', level: '38.4', capacity: '38', distance: '61.6', rain: '15', category: 'Tidak Hujan', adc: '3.288', rate: '-0.06', predicted: '41.8', eta: '> 8 jam', status: 'Aman' },
  { time: '19 Mei 2026, 09:00:00', level: '38.1', capacity: '38', distance: '61.9', rain: '14', category: 'Tidak Hujan', adc: '3.312', rate: '-0.04', predicted: '41.2', eta: '> 8 jam', status: 'Aman' },
]

function HistoryPage() {
  const [view, setView] = useState<'all' | 'sensor' | 'prediction'>('all')
  const [query, setQuery] = useState('')
  const columns = [
    { key: 'time', label: 'Timestamp', group: 'all' },
    { key: 'level', label: 'Water Level (cm)', group: 'sensor' },
    { key: 'capacity', label: 'Capacity (%)', group: 'sensor' },
    { key: 'distance', label: 'Distance (cm)', group: 'sensor' },
    { key: 'rain', label: 'Rain Index', group: 'sensor' },
    { key: 'category', label: 'Rain Category', group: 'sensor' },
    { key: 'adc', label: 'ADC', group: 'sensor' },
    { key: 'rate', label: 'Rise Rate', group: 'prediction' },
    { key: 'predicted', label: 'Predicted (cm)', group: 'prediction' },
    { key: 'eta', label: 'Overflow ETA', group: 'prediction' },
    { key: 'status', label: 'Warning Status', group: 'prediction' },
  ] as const
  const visibleColumns = columns.filter(column => view === 'all' || column.group === 'all' || column.group === view)
  const visibleRows = historyRows.filter(row => Object.values(row).some(value => value.toLowerCase().includes(query.toLowerCase())))
  const exportCsv = () => {
    const csv = [
      visibleColumns.map(column => column.label).join(','),
      ...visibleRows.map(row => visibleColumns.map(column => row[column.key]).join(',')),
    ].join('\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'aquasense-riwayat.csv'
    anchor.click()
    URL.revokeObjectURL(url)
  }
  return <>
    <PageHeading eyebrow="Data Historis" title="Spreadsheet Riwayat" description="Lihat seluruh data sensor dan hasil perhitungan dalam satu tabel terstruktur." />
    <section className="overflow-hidden rounded-2xl border border-slate-300/70 bg-[#f1eeea] shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-300/70 bg-[#e2e3e1] p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row">
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari data..." className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-medium text-slate-700 outline-none placeholder:text-slate-300 focus:border-[#4B6382] sm:max-w-[240px]" />
          <input type="date" defaultValue="2026-05-12" aria-label="Tanggal mulai" className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-semibold text-slate-600 outline-none focus:border-[#4B6382]" />
          <span className="hidden self-center text-xs text-slate-300 sm:block">—</span>
          <input type="date" defaultValue="2026-05-19" aria-label="Tanggal akhir" className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-semibold text-slate-600 outline-none focus:border-[#4B6382]" />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="relative flex min-w-0 items-center">
            <Icon name="overview" className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
            <select value={view} onChange={event => setView(event.target.value as typeof view)} className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-8 text-[11px] font-bold text-slate-600 outline-none hover:border-[#A4B5C4]">
              <option value="all">View: Semua Kolom</option>
              <option value="sensor">View: Data Sensor</option>
              <option value="prediction">View: Prediksi & Status</option>
            </select>
          </label>
          <button onClick={exportCsv} className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-[11px] font-bold text-white hover:bg-slate-800"><Icon name="history" className="h-4 w-4" /> Export CSV</button>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full min-w-max border-separate border-spacing-0 text-left">
          <thead className="sticky top-0 z-10">
            <tr className="bg-slate-100 text-[9px] font-extrabold uppercase tracking-wider text-slate-500">
              <th className="sticky left-0 z-20 w-12 border-b border-r border-slate-200 bg-slate-100 px-3 py-3 text-center">#</th>
              {visibleColumns.map(column => <th key={column.key} className="whitespace-nowrap border-b border-r border-slate-200 px-4 py-3 last:border-r-0">{column.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row, index) => <tr key={row.time} className="group text-[11px] hover:bg-[#e7ebee]/50">
              <td className="sticky left-0 border-b border-r border-slate-100 bg-slate-50 px-3 py-3.5 text-center font-semibold text-slate-300 group-hover:bg-[#e7ebee]">{index + 1}</td>
              {visibleColumns.map(column => <td key={column.key} className={`whitespace-nowrap border-b border-r border-slate-100 px-4 py-3.5 last:border-r-0 ${column.key === 'status' ? 'font-bold text-emerald-600' : column.key === 'time' ? 'font-semibold text-slate-700' : 'text-slate-500'}`}>{row[column.key]}</td>)}
            </tr>)}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50/70 px-4 py-3 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>Menampilkan {visibleRows.length} dari 4.032 rekaman</span>
        <div className="flex max-w-full items-center gap-1 overflow-x-auto pb-1 sm:pb-0"><button className="shrink-0 rounded border border-slate-200 bg-white px-2.5 py-1.5 font-bold text-slate-400">Sebelumnya</button><button className="shrink-0 rounded bg-[#4B6382] px-2.5 py-1.5 font-bold text-white">1</button><button className="shrink-0 rounded border border-slate-200 bg-white px-2.5 py-1.5 font-bold text-slate-500">2</button><button className="shrink-0 rounded border border-slate-200 bg-white px-2.5 py-1.5 font-bold text-slate-500">3</button><button className="shrink-0 rounded border border-slate-200 bg-white px-2.5 py-1.5 font-bold text-slate-500">Berikutnya</button></div>
      </div>
    </section>
  </>
}

const deviceDetails = [
  ['ESP32 Utama','Terhubung','192.168.1.24','device','emerald'],
  ['Koneksi Jaringan','Stabil','-58 dBm · WiFi','wifi','emerald'],
  ['Sensor HC-SR04','Normal','Jarak 57.4 cm','sensor','emerald'],
  ['Sensor FC-37 / YL-83','Normal','ADC 2.842','rain','emerald'],
  ['LCD 16×2','Aktif','I²C · 0x27','overview','emerald'],
  ['Buzzer & LED','Standby','Indikator tersedia','warning','amber'],
] as const

function DevicesPage() {
  const [tested, setTested] = useState(false)
  return <>
    <PageHeading eyebrow="Device Health" title="Status Perangkat" description="Pantau konektivitas, pembacaan sensor, dan kesehatan seluruh komponen AquaSense." action={<button onClick={() => setTested(true)} className="flex items-center gap-2 self-start rounded-xl bg-[#4B6382] px-4 py-3 text-[11px] font-bold text-white shadow-lg shadow-[#CDD5DB] hover:bg-[#071739]"><Icon name="activity" className="h-4 w-4" /> {tested ? 'Diagnostik Selesai' : 'Jalankan Diagnostik'}</button>} />
    {tested && <div className="mb-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-[11px] font-semibold text-emerald-700"><Icon name="shield" className="h-5 w-5" /> Semua komponen merespons dengan normal. Diagnostik selesai pada 10:43:02.</div>}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {deviceDetails.map(([name,state,detail,icon,tone]) => <section key={name} className="card relative overflow-hidden p-5" style={{ backgroundColor: metricSurfaces[icon].background, borderColor: metricSurfaces[icon].border }}><span className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: metricSurfaces[icon].accent, boxShadow: `0 0 12px ${metricSurfaces[icon].accent}80` }} /><div className="flex items-start justify-between"><span className={`grid h-11 w-11 place-items-center rounded-xl ${tone === 'emerald' ? 'bg-white/45 text-[#4B6382]' : 'bg-amber-50 text-amber-600'}`}><Icon name={icon} /></span><span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold ${tone === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}><i className={`h-1.5 w-1.5 rounded-full ${tone === 'emerald' ? 'bg-emerald-500' : 'bg-amber-400'}`} />{state}</span></div><h3 className="mt-5 text-sm font-extrabold text-slate-800">{name}</h3><p className="mt-1 text-[11px] text-slate-400">{detail}</p><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/45"><div className={`h-full rounded-full ${tone === 'emerald' ? 'w-[96%] bg-emerald-500' : 'w-[72%] bg-amber-400'}`} /></div></section>)}
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <section className="card p-6 lg:col-span-2"><div className="mb-5 flex items-center justify-between"><div><h3 className="section-title">Pengiriman Data</h3><p className="mt-1 text-xs text-slate-400">Aktivitas transmisi ESP32 selama 24 jam</p></div><span className="status-safe">99.8% berhasil</span></div><div className="flex h-32 items-end gap-1.5">{[42,58,51,70,66,82,73,91,88,72,79,94,86,96,90,83,88,98,92,95,89,93,97,92].map((h,i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#4B6382] to-[#A4B5C4] opacity-80" style={{height:`${h}%`}} />)}</div><div className="mt-2 flex justify-between text-[9px] text-slate-300"><span>00:00</span><span>12:00</span><span>24:00</span></div></section>
      <section className="card p-6"><h3 className="section-title">Informasi Sistem</h3><p className="mt-1 text-xs text-slate-400">Konfigurasi perangkat utama</p><div className="mt-6 space-y-4">{[['Firmware','v1.4.2'],['Uptime','12 hari 8 jam'],['Mode','Online'],['Interval kirim','15 detik'],['Terakhir sinkron','12 detik lalu']].map(([a,b]) => <div key={a} className="flex justify-between border-b border-slate-50 pb-3 text-[11px]"><span className="text-slate-400">{a}</span><b className={a === 'Mode' ? 'text-emerald-600' : 'text-slate-700'}>{b}</b></div>)}</div></section>
    </div>
  </>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastUpdate, setLastUpdate] = useState('12 detik lalu')
  const [activePage, setActivePage] = useState<PageKey>('overview')

  const refresh = () => {
    setLastUpdate('baru saja')
    window.setTimeout(() => setLastUpdate('5 detik lalu'), 5000)
  }

  return <div className="min-h-screen bg-[#e8e5e1] text-slate-800">
    <Sidebar open={menuOpen} active={activePage} onNavigate={setActivePage} onClose={() => setMenuOpen(false)} />
    <main className="dashboard-main min-w-0 lg:ml-[264px]">
      <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-slate-300/70 bg-[#e8e5e1]/90 px-3 backdrop-blur-xl sm:h-[82px] sm:px-7 lg:px-9">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3"><button className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-600 sm:h-10 sm:w-10 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Buka menu"><Icon name="menu" /></button><div className="min-w-0"><h1 className="truncate text-[15px] font-extrabold tracking-tight text-slate-900 sm:text-[18px]">{pageMeta[activePage].title}</h1><p className="hidden text-[11px] text-slate-400 sm:block">{pageMeta[activePage].subtitle}</p></div></div>
        <div className="ml-2 flex shrink-0 items-center gap-2 sm:gap-5">
          <button onClick={refresh} className="hidden items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-400 transition hover:bg-slate-50 hover:text-[#4B6382] sm:flex"><span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_#d1fae5]" /> Diperbarui {lastUpdate}</button>
          <button className="relative grid h-9 w-9 place-items-center rounded-xl border border-slate-300/80 bg-[#f1eeea] text-slate-500 hover:text-slate-800 sm:h-10 sm:w-10"><Icon name="bell" className="h-[18px] w-[18px]" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-[#f1eeea] sm:right-2.5" /></button>
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />
          <button className="hidden items-center gap-2.5 sm:flex"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-xs font-bold text-white">AR</span><span className="hidden text-left md:block"><b className="block text-[11px] text-slate-700">Admin</b><span className="block text-[9px] text-slate-400">System operator</span></span><Icon name="chevron" className="hidden h-3 w-3 rotate-90 text-slate-400 md:block" /></button>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] p-3 sm:p-7 lg:p-9">
        {activePage === 'overview' ? <>
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.15em] text-[#4B6382] sm:text-[11px]">Selasa, 19 Mei 2026</p><h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Selamat datang kembali, Admin</h2><p className="mt-1.5 text-[11px] leading-relaxed text-slate-400 sm:text-xs">Berikut kondisi terbaru sistem monitoring AquaSense.</p></div>
          <div className="flex items-center gap-2 self-start rounded-xl border border-emerald-100 bg-emerald-50 px-3.5 py-2.5 text-[11px] font-bold text-emerald-700"><Icon name="shield" className="h-4 w-4" /> Sistem dalam kondisi aman</div>
        </div>

        <div className="overview-metrics grid gap-3 sm:grid-cols-2 sm:gap-4">
          <MetricCard icon="water" color="bg-[#e7ebee] text-[#4B6382]" label="Ketinggian Air" value="42.6" unit="cm" footer={<><span className="flex items-center gap-1 text-emerald-600"><Icon name="trending" className="h-3 w-3" /> +1.8 cm</span><span>dari 1 jam lalu</span></>} />
          <MetricCard icon="activity" color="bg-[#e1e6ea] text-[#4B6382]" label="Kapasitas Drainase" value="42" unit="%" footer={<><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /><span>Masih dalam batas normal</span></>} />
          <MetricCard icon="rain" color="bg-[#eee4da] text-[#A68868]" label="Rain Index" value="28" unit="/ 100" footer={<><span className="rounded-md bg-[#e1e6ea] px-2 py-0.5 text-[#4B6382]">Hujan Ringan</span><span>ADC 2.842</span></>} />
          <MetricCard icon="warning" color="bg-emerald-50 text-emerald-600" label="Status Peringatan" value="Aman" unit="" footer={<><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /><span>Tidak ada ancaman terdeteksi</span></>} />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MainChart />
          <WaterGauge />
          <Prediction />
          <section className="card p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between"><div><h2 className="section-title">Status Perangkat</h2><p className="mt-1 text-xs text-slate-400">Kondisi perangkat & sensor</p></div><button className="text-[10px] font-bold text-[#4B6382] hover:text-[#071739]">Lihat detail</button></div>
            <div className="space-y-1">
              {devices.map(item => <div key={item.name} className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-slate-50"><span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-50 text-slate-500"><Icon name={item.icon} className="h-4 w-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-bold text-slate-700">{item.name}</p><p className="mt-0.5 text-[9px] text-slate-400">{item.detail}</p></div><span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600"><i className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{item.state}</span></div>)}
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <section className="card min-w-0 p-4 sm:p-6 lg:col-span-2">
            <div className="mb-5 flex items-center justify-between"><div><h2 className="section-title">Aktivitas Terbaru</h2><p className="mt-1 text-xs text-slate-400">Log pembacaan dan perubahan sistem</p></div><button className="text-[10px] font-bold text-[#4B6382]">Lihat semua</button></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left"><thead><tr className="border-b border-slate-100 text-[9px] font-bold uppercase tracking-wider text-slate-400"><th className="pb-3">Waktu</th><th className="pb-3">Aktivitas</th><th className="pb-3">Nilai</th><th className="pb-3 text-right">Status</th></tr></thead><tbody className="text-[11px]"><tr className="border-b border-slate-50"><td className="py-3.5 font-medium text-slate-400">10:42:18</td><td className="py-3.5 font-semibold text-slate-700">Pembacaan sensor diperbarui</td><td className="py-3.5 text-slate-500">42.6 cm · RI 28</td><td className="py-3.5 text-right"><span className="status-safe">Normal</span></td></tr><tr className="border-b border-slate-50"><td className="py-3.5 font-medium text-slate-400">10:30:02</td><td className="py-3.5 font-semibold text-slate-700">Kategori hujan berubah</td><td className="py-3.5 text-slate-500">Tidak Hujan → Ringan</td><td className="py-3.5 text-right"><span className="rounded-full bg-[#e1e6ea] px-2.5 py-1 text-[9px] font-bold text-[#4B6382]">Info</span></td></tr><tr><td className="pt-3.5 font-medium text-slate-400">10:15:44</td><td className="pt-3.5 font-semibold text-slate-700">Prediksi model diperbarui</td><td className="pt-3.5 text-slate-500">ETA &gt; 6 jam</td><td className="pt-3.5 text-right"><span className="status-safe">Aman</span></td></tr></tbody></table></div>
          </section>
          <section className="card p-5 sm:p-6">
            <div className="mb-5"><h2 className="section-title">Indeks Peringatan</h2><p className="mt-1 text-xs text-slate-400">Status berdasarkan level air</p></div>
            <div className="space-y-4">
              {[['Aman','0–49 cm','bg-emerald-500','w-[42%]'],['Waspada','50–74 cm','bg-amber-400','w-0'],['Siaga','75–89 cm','bg-orange-500','w-0'],['Awas','≥ 90 cm','bg-rose-500','w-0']].map(([name, range, color, width]) => <div key={name}><div className="mb-1.5 flex justify-between text-[10px]"><span className="font-bold text-slate-600">{name}</span><span className="font-medium text-slate-400">{range}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${color} ${width}`} /></div></div>)}
            </div>
          </section>
        </div>
        <p className="mt-7 text-center text-[10px] text-slate-400">AquaSense Monitoring System • Data sensor diperbarui otomatis setiap 15 detik</p>
        </> : activePage === 'monitoring' ? <MonitoringPage /> : activePage === 'prediction' ? <PredictionPage /> : activePage === 'history' ? <HistoryPage /> : <DevicesPage />}
      </div>
    </main>
  </div>
}

export default App
