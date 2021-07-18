import Meta from '../components/Meta'
import Counter from '../components/Counter'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Meta title="x" desc="x" keywords="x" canonical="x" image="x" />
      <h1>Home page</h1>
      <Link href="/page1" >Page 1</Link>
      <Counter />
      <style jsx>{``}</style>
    </main>
  )
}
