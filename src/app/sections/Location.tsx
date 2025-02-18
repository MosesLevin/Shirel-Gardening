import Map from '@/components/Map'

function Location() {
  return (
    <section className="bg-black/10 w-full py-12">
      <div className="container">
        <Map
          title="גינון באיזור חיפה"
          description=" סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכ"
          latitude={32.803}
          longitude={34.99077}
        />
      </div>
    </section>
  )
}

export default Location
