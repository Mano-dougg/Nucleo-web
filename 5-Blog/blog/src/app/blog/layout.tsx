import './blog.css'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      <header>
        <Link href="/blog">
          <Image
            className="todaydesktop"
            src="/today.svg"
            alt="AITODAY"
            width={209}
            height={59}
          />
        </Link>
        <Link href="/blog">
          <Image
            className="todaymobile"
            src="/todaymobile.svg"
            alt="AITODAY"
            width={105}
            height={30}
          />
        </Link>
        <input name="myInput" />
      </header> 

      {children}

      <footer>

      </footer>
    </section>
 )
}
