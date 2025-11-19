'use client';

import Image from 'next/image';

const mainFont = 'Heebo, Arial, sans-serif';

const sectionTitle: React.CSSProperties = {
  fontFamily: mainFont,
  fontWeight: 700,
  fontSize: '2.15rem',
  color: '#fff',
  marginBottom: 17,
  textAlign: 'center',
  position: 'relative',
  animation: 'fadeInUp 1.08s cubic-bezier(.44,.12,.54,1.12)'
};
const subtitleYellow: React.CSSProperties = {
  fontFamily: mainFont,
  fontWeight: 600,
  fontSize: '1.19rem',
  color: '#ffe47a',
  marginBottom: 11,
  textAlign: 'center',
  position: 'relative',
  animation: 'fadeInUp 1.21s cubic-bezier(.44,.12,.54,1.22)'
};
const subtitleWhite: React.CSSProperties = {
  fontFamily: mainFont,
  fontWeight: 600,
  fontSize: '1.18rem',
  color: '#fff',
  marginBottom: 13,
  textAlign: 'center',
  position: 'relative',
  animation: 'fadeInUp 1.24s cubic-bezier(.41,.13,.57,1.13)'
};
const contentText: React.CSSProperties = {
  fontFamily: mainFont,
  fontWeight: 400,
  fontSize: '1.09rem',
  color: '#fffde9',
  marginBottom: 18,
  lineHeight: 1.84,
  textAlign: 'center',
  maxWidth: 700,
  margin: '0 auto'
};
const glassBtnBase: React.CSSProperties = {
  minWidth: 232,
  minHeight: 52,
  fontFamily: mainFont,
  fontWeight: 600,
  fontSize: '1.14rem',
  background: 'rgba(34,38,62,0.19)',
  color: '#ffe47a',
  borderRadius: 36,
  border: '1.4px solid #a0a0c0',
  padding: '15px 30px',
  boxShadow: '0 7px 28px #161c26a3, 0 1.2px 8px #fff3 inset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  cursor: 'pointer',
  margin: '0 auto',
  backdropFilter: 'blur(16px)',
  transition: 'box-shadow 0.19s, background 0.22s, color 0.10s, transform 0.18s',
  gap: 10
};
const glassBtnGold: React.CSSProperties = {
  ...glassBtnBase,
  background: 'linear-gradient(97deg, #ffe47a 72%, #fff6d6 118%)',
  color: '#232323',
  border: 'none',
};
const glassBtnPurple: React.CSSProperties = {
  ...glassBtnBase,
  background: 'linear-gradient(96deg, #794aec 76%, #b5a0ff 120%)',
  color: '#fff',
  border: 'none',
};
const navLink: React.CSSProperties = {
  margin: '0',
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.09rem',
  fontFamily: mainFont,
  padding: '7px 20px',
  borderRadius: 888,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer'
};
const glassGridImg: React.CSSProperties = {
  borderRadius: 16,
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: 330,
  minHeight: 180,
  display: 'block',
  animation: 'fadeInUpImg 1.22s cubic-bezier(.48,.12,.45,1.15)'
};
const glassCardSection: React.CSSProperties = {
  background: 'rgba(26,28,42,0.77)',
  borderRadius: 28,
  maxWidth: 1100,
  margin: '37px auto 38px auto',
  padding: '38px 38px 27px 38px',
  boxShadow: '0 7px 38px #07091d1a, 0 1px 9px #fff3 inset',
  animation: 'fadeInUp 1.2s cubic-bezier(.45,.14,.51,1.12)',
  transition:'box-shadow 0.19s'
};

export default function Home() {
  return (
    <div dir="rtl" style={{ fontFamily: mainFont, background: '#0F1626', color: '#fff', minHeight: '100vh', margin: 0 }}>
      <header style={{
        position: 'fixed' as React.CSSProperties['position'], top: 0, right: 0, left: 0, zIndex: 10,
        background: 'rgba(26,30,46,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #192340'
      }}>
        <nav style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 1200, margin: '0 auto',
          padding: '7px 32px', gap: '24px', flexDirection: 'row-reverse'
        }}>
          <Image src="/LOGO.PNG" alt="Apollo Logo" width={46} height={46} style={{ borderRadius: '50%', background: '#06101c' }} />
          <a href="#about" style={navLink}>אודות</a>
          <a href="#clients" style={navLink}>לקוחות חדשים</a>
          <a href="#gallery" style={navLink}>גלריה מהשטח</a>
          <a href="#team" style={navLink}>הצטרפו לצוות</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        height: '98vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(180deg, #0F1626 70%, #191b22 100%)'
      }}>
        <div style={{
          position: 'absolute' as React.CSSProperties['position'], zIndex: 1, top: 0, right: 0,
          width: '100%', height: '98vh', overflow: 'hidden'
        }}>
          <Image src="/ראשונה.JPG" alt="אירוע Apollo" layout="fill" objectFit="cover"
            style={{ opacity: 0.71, filter: 'brightness(0.7) blur(0px)', transition: 'opacity 0.68s' }} priority />
          <div style={{
            position: 'absolute' as React.CSSProperties['position'], inset: 0,
            background: 'linear-gradient(180deg, rgba(15,22,38,0.10) 12%, rgba(15,22,38,0.89) 95%)'
          }} />
        </div>
        <div style={{
          position: 'relative' as React.CSSProperties['position'], zIndex: 3, textAlign: 'center',
          marginTop: 135, animation: 'fadeInUp 1.2s cubic-bezier(.36,.10,.56,1.15)'
        }}>
          <h1 style={{
            fontFamily: mainFont, fontWeight: 700, fontSize: '3.2rem', color: '#fff', letterSpacing: '-2px', marginBottom: 2,
            position: 'relative' as React.CSSProperties['position'], display: 'inline-block'
          }}>
            <span id="main-title" style={{ position: 'relative' as React.CSSProperties['position'] }}>Apollo Security | אפולו אבטחה</span>
            <span className="headline-underline" style={{
                position: 'absolute' as React.CSSProperties['position'], left: 0, right: 0, bottom: -7, height: 4, width: '100%', margin: 'auto',
                background: 'linear-gradient(88deg, #ffe47a 85%, #ffffff87 100%)', borderRadius: '3px', opacity: 1,
                animation: 'underlineFadeStatic 2.1s 0.3s cubic-bezier(.37,.23,.39,1.19) forwards'
              }} />
          </h1>
          <h2 style={{
            fontFamily: mainFont, fontWeight: 700, fontSize: '2.04rem', color: '#ffe47a',
            marginBottom: 0, marginTop: 14, lineHeight: 1.19, animation:'fadeInUp 1.12s cubic-bezier(.41,.08,.5,1.13)'
          }}>
            הסטנדרט הגבוה ביותר לביטחון וסדר באירועים
          </h2>
        </div>
        <a href="#about" style={{ position:'absolute' as React.CSSProperties['position'], left:0, right:0, margin:'auto', bottom:44, zIndex:12, width:55, height:55, display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', animation:'fadeInUp 1.8s cubic-bezier(.46,.08,.54,1.19)' }}>
          <svg width="38" height="38" viewBox="0 0 38 38" style={{display:'block'}}>
            <path d="M4 16 L19 33 L34 16" stroke="#ffe47a" strokeWidth="4.3" fill="none" strokeLinecap="round"
                  style={{ animation: 'arrowBounce 1.7s infinite alternate, fadeInUp 2.1s', opacity:0.93 }}/>
          </svg>
        </a>
        <style>{`
          @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(24px);} 100% { opacity: 1; transform: translateY(0);}}
          @keyframes fadeInUpImg { 0% { opacity: 0; filter: blur(12px) brightness(0.87) scale(1.08); } 50% { opacity: 0.6; filter: blur(8px) brightness(0.91) scale(1.028); } 100% { opacity: 1; filter: blur(0) brightness(1) scale(1);}}
          @keyframes underlineFadeStatic { 0% { opacity: 0; width:0; } 66% { opacity: 0.61; width:100%; } 90% { opacity: 1; width:100%; } 100% { opacity: 1; width:100%; }}
          @keyframes arrowBounce { 0% { transform: translateY(0);} 100% { transform: translateY(18px);}}
        `}</style>
      </section>

      {/* ניווט מהיר */}
      <section id="navsection" style={{
        background: 'linear-gradient(180deg, #161b26 65%, #181c36 105%)', padding: '32px 0', margin: 0,
        display: 'flex', justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', gap: '24px', animation: 'fadeInUp 1.12s cubic-bezier(.42,.18,.41,1.21)' }}>
          <a href="#clients" className="glass-btn" style={glassBtnGold}>לקוחות חדשים</a>
          <a href="#gallery" className="glass-btn" style={glassBtnPurple}>גלריה מהשטח</a>
          <a href="#team" className="glass-btn" style={glassBtnGold}>הצטרפות לצוות</a>
        </div>
        <style>{`
          .glass-btn { transition: box-shadow 0.29s, background 0.33s, transform 0.19s, color 0.13s!important;}
          .glass-btn:hover { background: rgba(255,255,255,0.13) !important; box-shadow: 0 18px 50px 0 #fff7, 0 1.2px 10px #ffe49d77 inset; color: #fffbe4 !important; transform: translateY(-3px) scale(1.053);}
        `}</style>
      </section>

      {/* אודות */}
      <section id="about" style={{...glassCardSection, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={sectionTitle}>
          אודות | Apollo
          <span style={{
            position: 'absolute' as React.CSSProperties['position'], left: '35%', right: '35%', bottom: -8, height: 4, width: '30%',
            margin: 'auto', background: 'linear-gradient(88deg, #ffe47a 85%, #ffffff99 100%)',
            borderRadius: '3px', opacity: 1
          }} />
        </h2>
        <div style={contentText}>
          Apollo Security מתמחה באבטחה מקצועית לאירועים, ממשחקי ספורט והופעות בינלאומיות ועד פסטיבלים ושטחים ציבוריים.<br/>
          אנו מציעים שירותי אבטחה מלאים הכוללים מאבטחים מוסמכים, סדרנים מקצועיים, דיילות מיומנות ובודקי כרטיסים מאומנים.<br/>
          צוות Apollo מחויב למקצועיות, אמינות ובטיחות ללא פשרות, תוך מתן מענה מדויק לכל צורכי האבטחה של לקוחותינו.
        </div>
        <a href="#gallery" className="glass-btn" style={{...glassBtnPurple, marginTop: '9px'}}>
          הצצה לאירועים מהשטח
        </a>
      </section>

      {/* שירותים */}
      <section id="services" style={{...glassCardSection, textAlign:'center'}}>
        <h2 style={{...sectionTitle, textAlign: 'center'}}>שירותים עיקריים</h2>
        <ul style={{
          listStyle: 'none', padding: 0, margin: 0, fontFamily: mainFont,
          display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '1.13rem', textAlign:'center'
        }}>
          <li>🔷 אבטחה באירועים המוניים</li>
          <li>🔷 סדרנות והכוונת קהל</li>
          <li>🔷 דיילות והושבה</li>
          <li>🔷 בידוק בטחוני, בידוק כרטיסים</li>
        </ul>
      </section>

      {/* לקוחות חדשים */}
      <section id="clients" style={{ ...glassCardSection, display:'flex', flexDirection:'row-reverse', alignItems:'center', gap:0 }}>
        <div style={{ flex: 1, minWidth: 0, position: 'relative' as React.CSSProperties['position'], padding:0 }}>
          <Image src="/IMG_5096.JPG" alt="לקוחות" width={480} height={320} style={glassGridImg} priority />
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '38px 38px 29px 28px' }}>
          <h2 style={sectionTitle}>
            לקוחות חדשים
            <span style={{
              position: 'absolute' as React.CSSProperties['position'], left: '35%', right: '35%', bottom: -8, height: 4, width: '30%',
              margin: 'auto', background: 'linear-gradient(88deg, #ffe47a 85%, #ffffff99 100%)',
              borderRadius: '3px', opacity:1
            }} />
          </h2>
          <h3 style={subtitleYellow}>כוח אדם מקצועי ומוסמך לאבטחה ולסדרנות לאירועים</h3>
          <div style={contentText}>
            צוותי APOLLO מורכבים ממאבטחים, סדרני ספורט, דיילות ושירותי ניהול קהל, הפועלים בסטנדרט עבודה גבוה, יציב ומבוקר.<br/><br/>
            <b style={{color:'#ffe47a'}}>הכשרה והסמכה:</b> מאבטחי החברה וסדרני הספורט עוברים קורס הכשרה רשמי של משטרת ישראל (4–6 ימי לימוד), ומוסמכים לביצוע תפקידים הכוללים בדיקות ביטחוניות, ניהול סדר ותיאום בשטחי אירוע מורכבים ורבי משתתפים.<br/><br/>
            <b style={{color:'#ffe47a'}}>תפקידי סדרנות ושירות:</b> בנוסף, מפעילה APOLLO צוותי סדרנות, הושבה, דיילות והכוונת קהל ליצירת חוויית אירוע בטוחה, מאורגנת וזורמת.<br/><br/>
            <b style={{color:'#ffe47a'}}>למה APOLLO?</b><br/>
            סטנדרט עבודה גבוה | צוותים מנוהלים ומתודרכים | נוכחות אחראית ושקטה | התאמה לאירועים מכל סדר גודל
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <a href="https://wa.me/972522922618" className="glass-btn" style={glassBtnGold} target="_blank" rel="noopener noreferrer">
              לפרטים נוספים ושירות - מאיר
            </a>
          </div>
        </div>
      </section>

      {/* הצטרפות לצוות */}
      <section id="team" style={{ ...glassCardSection, background:'rgba(38,34,70,0.96)', display:'flex', flexDirection:'row-reverse', alignItems:'center', gap:0 }}>
        <div style={{ flex: 1, minWidth: 0, position: 'relative' as React.CSSProperties['position'], padding:0 }}>
          <Image src="/IMG_5381.JPG" alt="עובדים" width={480} height={320} style={glassGridImg} priority />
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '38px 38px 29px 28px'}}>
          <h2 style={sectionTitle}>
            הצטרפו לצוות Apollo
            <span style={{
              position: 'absolute' as React.CSSProperties['position'], left: '35%', right: '35%', bottom: -8, height: 4, width: '30%',
              margin: 'auto', background: 'linear-gradient(88deg, #ffe47a 85%, #ffffff99 100%)',
              borderRadius: '3px', opacity:1
            }} />
          </h2>
          <h3 style={subtitleWhite}>תפקידי אבטחה, סדרנות ושירות – צוות אירועים מוביל</h3>
          <div style={contentText}>
            <b style={{color:'#ffe47a'}}>לתפקידי אבטחה וסדרנות ספורט (מגיל 21+):</b><br/>
            תפקידי שטח הכוללים אחריות ונוכחות באירועים גדולים.<br/>
            קורס הכשרה רשמי בפיקוח משטרת ישראל (4-6 ימים), ובסיומו תעודת הסמכה מוכרת.<br/>
            <span style={{fontWeight:600}}>תפקידים אפשריים לאחר הקורס:</span> בודקים ביטחוניים, סדרני ספורט, סדרנות אבטחתית באירועים.<br/><br/>
            <b style={{color:'#ffe47a'}}>לתפקידי סדרנות ושירות (מגיל 18+):</b> (ללא צורך בקורס מוקדם)<br/>
            תפקידים דינמיים באירועי תרבות וספורט: סדרני הושבה, סדרני הכוונת קהל, בודקי כרטיסים, דיילים/ות.<br/>
            <b style={{color:'#ffe47a'}}>מה אנחנו מחפשים?</b> אחריות, תקשורת טובה, יכולת עבודה בצוות ונוכחות חיובית.<br/>
            <b style={{color:'#ffe47a'}}>מה תקבלו?</b> עבודה משמעותית באירועים הגדולים בארץ + מסגרת מקצועית ותומכת.
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <a href="https://wa.me/972523918182" className="glass-btn" style={glassBtnPurple} target="_blank" rel="noopener noreferrer">
              לפרטים נוספים לעבודה - אילן
            </a>
          </div>
        </div>
      </section>

      {/* גלריה */}
      <section id="gallery" style={{ ...glassCardSection, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ ...sectionTitle, textAlign: 'center' }}>
          גלריה מהשטח
          <span style={{
            position: 'absolute' as React.CSSProperties['position'], left: '35%', right: '35%', bottom: -8, height: 4, width: '30%',
            margin: 'auto', background: 'linear-gradient(88deg, #ffe47a 85%, #ffffff99 100%)',
            borderRadius: '3px', opacity: 1
          }} />
        </h2>
        <div style={{ fontWeight:700, fontSize:'1.25rem', color:'#ffe47a', marginBottom: 20 }}>
          Apollo בפעולה – הצצה קטנה מהשטח, מהאירועים הגדולים, בזמן אמת
        </div>

        {/* אירוע 1 */}
        <h3 style={{ ...subtitleYellow, textAlign: 'center', marginTop: 17 }}>היכל הפיס ארנה ירושלים</h3>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 11, flexWrap:'wrap' }}>
          <Image src="/IMG_5184.JPG" alt="אירוע הפיס" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG_5379.JPG" alt="אירוע הפיס" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG_4918.JPG" alt="אירוע הפיס" width={230} height={150} style={glassGridImg} />
        </div>

        {/* אירוע 2 */}
        <h3 style={{ ...subtitleYellow, textAlign: 'center', marginTop: 13 }}>פארק הירקון גני יהושע</h3>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 11, flexWrap:'wrap' }}>
          <Image src="/IMG_5169.JPG" alt="פארק הירקון" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG_5194.JPG" alt="פארק הירקון" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG_5031.JPG" alt="פארק הירקון" width={230} height={150} style={glassGridImg} />
        </div>

        {/* אירוע 3 */}
        <h3 style={{ ...subtitleYellow, textAlign: 'center', marginTop: 13 }}>גן העצמאות</h3>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 11, flexWrap:'wrap' }}>
          <Image src="/IMG_5385.JPG" alt="גן העצמאות" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG_5387.JPG" alt="גן העצמאות" width={230} height={150} style={glassGridImg} />
        </div>

        {/* אירוע 4 */}
        <h3 style={{ ...subtitleYellow, textAlign: 'center', marginTop: 13 }}>מתחמי VIP ואולמות סגורים</h3>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 18, flexWrap:'wrap' }}>
          <Image src="/IMG_5383.JPG" alt="VIP" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG-20250123-WA0073.jpg" alt="VIP" width={230} height={150} style={glassGridImg} />
          <Image src="/IMG_5381.JPG" alt="VIP" width={230} height={150} style={glassGridImg} />
        </div>

        {/* כפתורים פרטים בסוף הגלריה */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 18 }}>
          <a href="https://wa.me/972522922618" className="glass-btn" style={glassBtnGold} target="_blank" rel="noopener noreferrer">
            לפרטים נוספים ושירות - מאיר
          </a>
          <a href="https://wa.me/972523918182" className="glass-btn" style={glassBtnPurple} target="_blank" rel="noopener noreferrer">
            לפרטים נוספים לעבודה - אילן
          </a>
        </div>
      </section>
    </div>
  );
}
