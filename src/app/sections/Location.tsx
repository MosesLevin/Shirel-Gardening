import Map from '@/components/Map'

function Location() {
  return (
    <section className="bg-black/10 w-full py-12">
      <div className="container">
        <Map
          title="גינון בצפון ובמרכז הארץ"
          description="איפה אנחנו עובדים:  צפון- גליל תחתון ועמקים, איזור קריות חיפה והסביבה שרון- מישור החוף , פרדס חנה נתניה והסביבה מרכז-תל אבי יפו, שוהם, הרצליה והסביבה"
          latitude={32.803}
          longitude={34.99077}
        />
      </div>
    </section>
  )
}

export default Location
