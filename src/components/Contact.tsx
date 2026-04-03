import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaExternalLinkAlt } from 'react-icons/fa';

/* ─── Prismatic star canvas (same engine as Hero) ─────────────────────── */
const CrystalStarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    type Star = { x:number; y:number; r:number; phase:number; speed:number; hue:number };
    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * (canvas.width  || 1200),
      y: Math.random() * (canvas.height || 700),
      r: Math.random() * 1.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.006 + 0.002,
      hue: Math.random() * 60 + 180,
    }));
    let raf: number, t = 0;
    const draw = () => {
      const ctx = canvas.getContext('2d'); if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      stars.forEach(s => {
        const tw = 0.2 + 0.8 * Math.abs(Math.sin(t * s.speed * 50 + s.phase));
        const dynHue = (s.hue + t * 18) % 360;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${dynHue},50%,80%,${tw * 0.45})`; ctx.fill();
        if (s.r > 1.1) {
          const len = s.r * 4.5 * tw;
          ctx.strokeStyle = `hsla(${dynHue},55%,85%,${tw * 0.3})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x-len,s.y); ctx.lineTo(s.x+len,s.y);
          ctx.moveTo(s.x,s.y-len); ctx.lineTo(s.x,s.y+len);
          const d = len * 0.55;
          ctx.moveTo(s.x-d,s.y-d); ctx.lineTo(s.x+d,s.y+d);
          ctx.moveTo(s.x+d,s.y-d); ctx.lineTo(s.x-d,s.y+d);
          ctx.stroke();
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} aria-hidden style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0, opacity:0.65 }} />;
};

/* ─── Liquid glass lens ─────────────────────────────────────────────────── */
const GlassLens = ({ top, left, w, h, rotate, delay }: { top:string; left:string; w:number; h:number; rotate:number; delay:number }) => (
  <motion.div aria-hidden
    initial={{ opacity:0, scale:0.8 }}
    animate={{ opacity:[0.15,0.38,0.15], scale:[0.96,1.04,0.96], rotate:[rotate, rotate+3, rotate] }}
    transition={{ duration:10+delay, delay, repeat:Infinity, ease:'easeInOut' }}
    style={{
      position:'absolute', top, left, width:w, height:h, borderRadius:'50%',
      background:`
        radial-gradient(ellipse at 30% 28%, rgba(255,255,255,0.7) 0%, transparent 35%),
        radial-gradient(ellipse at 70% 20%, rgba(180,220,255,0.32) 0%, transparent 40%),
        radial-gradient(ellipse at 20% 72%, rgba(210,180,255,0.25) 0%, transparent 42%),
        radial-gradient(ellipse at 78% 76%, rgba(255,200,220,0.2) 0%, transparent 38%),
        conic-gradient(from ${rotate}deg at 50% 50%,
          rgba(255,255,255,0.05) 0deg, rgba(180,220,255,0.1) 60deg,
          rgba(210,180,255,0.09) 120deg, rgba(255,220,200,0.07) 180deg,
          rgba(200,255,220,0.06) 240deg, rgba(255,255,255,0.05) 300deg,
          rgba(255,255,255,0.05) 360deg)
      `,
      backdropFilter:'blur(10px) saturate(190%) brightness(1.1)',
      WebkitBackdropFilter:'blur(10px) saturate(190%) brightness(1.1)',
      border:'1px solid rgba(255,255,255,0.52)',
      boxShadow:`inset 0 1px 3px rgba(255,255,255,0.88), inset -5px -5px 18px rgba(180,200,255,0.18), inset 5px 5px 18px rgba(255,200,220,0.13), 0 14px 44px rgba(150,150,200,0.1)`,
      pointerEvents:'none', zIndex:1,
    }}
  />
);

/* ─── Prismatic streak ──────────────────────────────────────────────────── */
const PrismStreak = ({ top, delay, duration, color }: { top:string; delay:number; duration:number; color:string }) => (
  <motion.div aria-hidden
    initial={{ x:'-8%', opacity:0 }}
    animate={{ x:'108%', y:'12%', opacity:[0,0.65,0.65,0] }}
    transition={{ duration, delay, repeat:Infinity, repeatDelay:12+delay, ease:'easeIn' }}
    style={{
      position:'absolute', top, left:0, zIndex:3,
      width:'120px', height:'1.5px', pointerEvents:'none',
      background:`linear-gradient(to right, transparent, ${color}, transparent)`,
      borderRadius:'2px', filter:'blur(0.6px)',
      boxShadow:`0 0 8px ${color}`,
    }}
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState<'success'|'error'|null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xvgwdokn', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name:'', email:'', message:'' });
    } catch { setStatus('error'); }
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Crystal glass card — matches Hero's crystal() helper
  const crystalCard: React.CSSProperties = {
    padding:'32px', borderRadius:'20px',
    background:`linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.22) 40%, rgba(200,210,255,0.14) 100%)`,
    backdropFilter:'blur(22px) saturate(220%) brightness(1.06)',
    WebkitBackdropFilter:'blur(22px) saturate(220%) brightness(1.06)',
    border:'1px solid rgba(255,255,255,0.55)',
    boxShadow:`inset 0 1px 2px rgba(255,255,255,0.95), inset 0 -1px 1px rgba(200,200,255,0.18), 0 8px 32px rgba(150,150,220,0.09), 0 2px 8px rgba(200,180,255,0.07)`,
  };

  const crystalInput: React.CSSProperties = {
    width:'100%', padding:'11px 15px', borderRadius:'10px',
    background:'rgba(255,255,255,0.35)',
    backdropFilter:'blur(12px) saturate(180%)',
    WebkitBackdropFilter:'blur(12px) saturate(180%)',
    border:'1px solid rgba(255,255,255,0.5)',
    boxShadow:'inset 0 1px 2px rgba(255,255,255,0.9)',
    color:'rgba(20,15,50,0.85)', fontSize:'14px',
    outline:'none', transition:'all 0.2s',
    boxSizing:'border-box' as const,
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 relative overflow-hidden"
      style={{
        background:`
          radial-gradient(ellipse at 12% 10%, rgba(210,200,255,0.28) 0%, rgba(180,210,255,0.13) 38%, transparent 62%),
          radial-gradient(ellipse at 88% 88%, rgba(255,210,230,0.24) 0%, rgba(200,230,255,0.15) 42%, transparent 65%),
          radial-gradient(ellipse at 55%  3%, rgba(180,230,255,0.18) 0%, transparent 45%),
          radial-gradient(ellipse at  5% 80%, rgba(255,200,230,0.14) 0%, transparent 50%),
          linear-gradient(160deg, #f8f6ff 0%, #fafcff 35%, #f6f8ff 65%, #fdf8ff 100%)
        `,
      }}
    >
      {/* Prismatic star field */}
      <CrystalStarField />

      {/* Glass lenses */}
      <GlassLens top="-10%" left="70%"  w={320} h={320} rotate={0}   delay={0}   />
      <GlassLens top="60%"  left="-6%"  w={240} h={240} rotate={40}  delay={2}   />
      <GlassLens top="25%"  left="82%"  w={180} h={180} rotate={-15} delay={3.5} />

      {/* Prismatic streaks */}
      <PrismStreak top="12%" delay={3}   duration={1.6} color="rgba(180,210,255,0.85)" />
      <PrismStreak top="55%" delay={9}   duration={1.4} color="rgba(220,180,255,0.75)" />
      <PrismStreak top="78%" delay={15}  duration={1.5} color="rgba(255,200,220,0.65)" />

      {/* Top prismatic hairline */}
      <div aria-hidden style={{
        position:'absolute', top:0, left:0, right:0, height:'2px', zIndex:4,
        background:'linear-gradient(90deg, transparent, rgba(200,180,255,0.75), rgba(180,220,255,0.65), rgba(255,200,220,0.6), transparent)',
        boxShadow:'0 0 10px rgba(200,180,255,0.25)',
        opacity:0.85,
      }} />

      {/* Frosted base layer */}
      <div aria-hidden style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backdropFilter:'blur(20px) saturate(150%)',
        WebkitBackdropFilter:'blur(20px) saturate(150%)',
        background:'rgba(248,246,255,0.04)',
      }} />

      {/* Spectral light diagonal */}
      <div aria-hidden style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'linear-gradient(118deg, rgba(200,190,255,0.11) 0%, rgba(180,220,255,0.07) 30%, transparent 58%)',
      }} />

      {/* Crystal dot grid */}
      <div aria-hidden style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(circle, rgba(160,140,200,0.14) 1px, transparent 1px)',
        backgroundSize:'26px 26px',
        maskImage:'radial-gradient(ellipse at 50% 50%, black 30%, transparent 78%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 50%, black 30%, transparent 78%)',
      }} />

      {/* Ghost rings */}
      <div aria-hidden style={{
        position:'absolute', right:'-100px', top:'50%', transform:'translateY(-50%)',
        width:'500px', height:'500px', borderRadius:'50%',
        border:'1px solid rgba(200,180,255,0.12)', pointerEvents:'none', zIndex:0,
      }} />
      <div aria-hidden style={{
        position:'absolute', right:'-40px', top:'50%', transform:'translateY(-50%)',
        width:'350px', height:'350px', borderRadius:'50%',
        border:'1px solid rgba(180,220,255,0.1)', pointerEvents:'none', zIndex:0,
      }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} className="text-center mb-12">
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            marginBottom:'14px', padding:'5px 16px', borderRadius:'999px',
            background:'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(200,210,255,0.2) 100%)',
            backdropFilter:'blur(16px) saturate(200%)',
            WebkitBackdropFilter:'blur(16px) saturate(200%)',
            border:'1px solid rgba(255,255,255,0.58)',
            boxShadow:'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 16px rgba(180,160,255,0.1)',
          }}>
            <motion.span
              animate={{ scale:[1,1.5,1], opacity:[1,0.35,1] }}
              transition={{ duration:2.2, repeat:Infinity, ease:'easeInOut' }}
              style={{
                width:'7px', height:'7px', borderRadius:'50%', display:'inline-block', flexShrink:0,
                background:'linear-gradient(135deg, rgba(200,180,255,1), rgba(180,220,255,1))',
                boxShadow:'0 0 8px rgba(200,180,255,0.9)',
              }}
            />
            <span style={{ fontSize:'11px', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(110,90,160,0.9)', fontWeight:600 }}>
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-3"
            style={{ color:'#1a1530', textShadow:'0 1px 0 rgba(255,255,255,0.8), 0 -1px 0 rgba(200,180,255,0.12)' }}>
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:'rgba(100,80,160,0.7)' }}>
            Let's build something amazing together
          </p>
        </motion.div>

        {/* Toast */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}
              style={{
                position:'fixed', top:'16px', right:'16px', zIndex:50,
                padding:'12px 20px', borderRadius:'14px',
                display:'flex', alignItems:'center', gap:'10px', color:'#fff',
                background: status==='success'
                  ? 'linear-gradient(135deg, rgba(160,210,200,0.95), rgba(100,170,160,0.95))'
                  : 'linear-gradient(135deg, rgba(220,160,180,0.95), rgba(180,100,130,0.95))',
                backdropFilter:'blur(16px)',
                border:'1px solid rgba(255,255,255,0.5)',
                boxShadow:'0 8px 28px rgba(150,120,200,0.2)',
              }}
            >
              {status==='success'
                ? <><FaCheckCircle style={{ fontSize:'18px' }} /><span>Message sent successfully!</span></>
                : <><FaTimesCircle style={{ fontSize:'18px' }} /><span>Oops! Something went wrong.</span></>
              }
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2" style={{ columnGap:'56px', rowGap:'32px', alignItems:'stretch' }}>

          {/* Left — contact info crystal card */}
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
            style={{ ...crystalCard, position:'relative' }}>
            {/* Prismatic left border */}
            <div style={{
              position:'absolute', left:0, top:'18%', bottom:'18%',
              width:'3px', borderRadius:'0 3px 3px 0',
              background:'linear-gradient(to bottom, transparent, rgba(200,180,255,0.8) 25%, rgba(180,220,255,0.7) 60%, rgba(255,200,220,0.65) 85%, transparent)',
              boxShadow:'0 0 8px rgba(200,180,255,0.3)',
              opacity:0.75,
            }} />

            <h3 className="text-2xl font-light mb-3"
              style={{ color:'#1a1530', textShadow:'0 1px 0 rgba(255,255,255,0.8)' }}>
              Let's Connect
            </h3>
            <p style={{ color:'rgba(80,60,130,0.7)', fontSize:'15px', lineHeight:1.65, marginBottom:'28px' }}>
              I'm always open to discussing new opportunities, innovative projects, and creative ideas.
            </p>

            {/* Prismatic hairline */}
            <div style={{
              height:'1px', marginBottom:'28px',
              background:'linear-gradient(to right, rgba(200,180,255,0.5), rgba(180,220,255,0.3), transparent)',
            }} />

            <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
              {[
                { icon:FaEnvelope,    label:'Email',    value:'sallywanga2016@gmail.com', href:'mailto:sallywanga2016@gmail.com', hue:'rgba(180,220,255' },
                { icon:FaPhone,       label:'Phone',    value:'+254 707 720 597',          href:'tel:+254707720597',              hue:'rgba(200,180,255' },
                { icon:FaMapMarkerAlt,label:'Location', value:'Nairobi, Kenya',            href:undefined,                        hue:'rgba(255,200,220' },
              ].map(({ icon:Icon, label, value, href, hue }) => {
                const inner = (
                  <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
                    <div style={{
                      width:'44px', height:'44px', borderRadius:'12px', flexShrink:0,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      background:`${hue},0.12)`,
                      border:`1px solid ${hue},0.3)`,
                      boxShadow:`inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 8px ${hue},0.12)`,
                      backdropFilter:'blur(8px)',
                      transition:'all 0.2s',
                    }}>
                      <Icon style={{ color:`${hue},0.9)`, fontSize:'16px' }} />
                    </div>
                    <div>
                      <div style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(140,120,190,0.8)', marginBottom:'3px' }}>{label}</div>
                      <div style={{ fontSize:'14px', color:'rgba(30,20,60,0.75)', fontWeight:500 }}>{value}</div>
                    </div>
                  </div>
                );
                return href
                  ? <a key={label} href={href} style={{ textDecoration:'none', transition:'opacity 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity='0.7'}
                      onMouseLeave={e => e.currentTarget.style.opacity='1'}>{inner}</a>
                  : <div key={label}>{inner}</div>;
              })}
            </div>
          </motion.div>

          {/* Right — crystal glass form */}
          <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}>
            <form onSubmit={handleSubmit}
              style={{ ...crystalCard, position:'relative', transition:'box-shadow 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.95), 0 16px 48px rgba(180,160,255,0.18), 0 0 0 1px rgba(200,180,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.95), inset 0 -1px 1px rgba(200,200,255,0.18), 0 8px 32px rgba(150,150,220,0.09), 0 2px 8px rgba(200,180,255,0.07)'; }}
            >
              {/* Top prismatic accent line */}
              <div aria-hidden style={{
                position:'absolute', top:0, left:'28px', right:'28px', height:'2px', borderRadius:'0 0 2px 2px',
                background:'linear-gradient(to right, transparent, rgba(200,180,255,0.6), rgba(180,220,255,0.5), transparent)',
                boxShadow:'0 0 6px rgba(200,180,255,0.2)',
                pointerEvents:'none',
              }} />

              {/* Three crystal dots */}
              <div aria-hidden style={{ position:'absolute', top:'18px', right:'22px', display:'flex', gap:'5px', pointerEvents:'none' }}>
                {['rgba(200,180,255,0.7)', 'rgba(180,220,255,0.65)', 'rgba(255,200,220,0.65)'].map((c, i) => (
                  <div key={i} style={{ width:'7px', height:'7px', borderRadius:'50%', background:c, boxShadow:`0 0 5px ${c}` }} />
                ))}
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:'18px', position:'relative', zIndex:1, paddingTop:'10px' }}>
                {[
                  { id:'name',  label:'Name',  type:'text',  placeholder:'Your name' },
                  { id:'email', label:'Email', type:'email', placeholder:'your.email@example.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ display:'block', fontSize:'11px', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(120,100,180,0.85)', marginBottom:'8px' }}>
                      {label}
                    </label>
                    <input type={type} id={id} name={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange} required placeholder={placeholder}
                      style={crystalInput}
                      onFocus={e => { e.target.style.borderColor='rgba(200,180,255,0.6)'; e.target.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.9), 0 0 0 3px rgba(200,180,255,0.15)'; e.target.style.background='rgba(255,255,255,0.5)'; }}
                      onBlur={e => { e.target.style.borderColor='rgba(255,255,255,0.5)'; e.target.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.9)'; e.target.style.background='rgba(255,255,255,0.35)'; }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" style={{ display:'block', fontSize:'11px', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(120,100,180,0.85)', marginBottom:'8px' }}>
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message}
                    onChange={handleChange} required rows={4}
                    placeholder="Tell me about your project..."
                    style={{ ...crystalInput, resize:'none' }}
                    onFocus={e => { e.target.style.borderColor='rgba(200,180,255,0.6)'; e.target.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.9), 0 0 0 3px rgba(200,180,255,0.15)'; e.target.style.background='rgba(255,255,255,0.5)'; }}
                    onBlur={e => { e.target.style.borderColor='rgba(255,255,255,0.5)'; e.target.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.9)'; e.target.style.background='rgba(255,255,255,0.35)'; }}
                  />
                </div>

                {/* Prismatic hairline */}
                <div style={{ height:'1px', background:'linear-gradient(to right, transparent, rgba(200,180,255,0.4), rgba(180,220,255,0.3), transparent)' }} />

                <motion.button type="submit"
                  whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                  style={{
                    width:'100%', padding:'13px 24px', borderRadius:'10px',
                    background:'linear-gradient(135deg, rgba(200,180,255,0.85) 0%, rgba(180,200,255,0.75) 50%, rgba(210,180,255,0.8) 100%)',
                    backdropFilter:'blur(12px)',
                    border:'1px solid rgba(255,255,255,0.65)',
                    color:'rgba(40,20,90,0.9)', fontSize:'15px', fontWeight:600,
                    cursor:'pointer',
                    display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                    boxShadow:'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 18px rgba(180,160,255,0.3)',
                    transition:'all 0.2s',
                    letterSpacing:'0.02em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.95), 0 8px 28px rgba(180,160,255,0.45), 0 0 0 1px rgba(255,255,255,0.4)'; e.currentTarget.style.background='linear-gradient(135deg, rgba(210,190,255,0.92) 0%, rgba(190,215,255,0.85) 50%, rgba(220,190,255,0.88) 100%)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow='inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 18px rgba(180,160,255,0.3)'; e.currentTarget.style.background='linear-gradient(135deg, rgba(200,180,255,0.85) 0%, rgba(180,200,255,0.75) 50%, rgba(210,180,255,0.8) 100%)'; }}
                >
                  <FaPaperPlane style={{ fontSize:'13px' }} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <div style={{ position:'absolute', bottom:'12px', left:0, right:0, textAlign:'center', fontSize:'14px', color:'rgba(120,100,180,0.6)' }}>
        <a href="https://github.com/Mugishaa77/portfolio_" target="_blank" rel="noopener noreferrer" style={{ marginLeft:'8px', color:'rgba(120,100,180,0.6)', textDecoration:'underline', display:'inline-flex', alignItems:'center', gap:'6px' }}
          onMouseEnter={e => e.currentTarget.style.color='rgba(120,100,180,0.9)'}
          onMouseLeave={e => e.currentTarget.style.color='rgba(120,100,180,0.6)'}
        >
          <span>Open-Source</span>
          <FaExternalLinkAlt style={{ fontSize:'10px' }} />
        </a>
      </div>
    </section>
  );
};

export default Contact;