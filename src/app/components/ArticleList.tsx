import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="" width={1280} height={300} />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700">Next.jsの勉強</Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2023/07/15</p>
          <Link href="#" className="pb-6 text-slate-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore labore veritatis architecto possimus? Deserunt voluptate adipisci totam, consequatur voluptatem architecto esse, necessitatibus eum, quo perspiciatis amet atque? Odit, earum blanditiis!
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>

      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" alt="" width={1280} height={300} />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700">Next.jsの勉強</Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2023/07/15</p>
          <Link href="#" className="pb-6 text-slate-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore labore veritatis architecto possimus? Deserunt voluptate adipisci totam, consequatur voluptatem architecto esse, necessitatibus eum, quo perspiciatis amet atque? Odit, earum blanditiis!
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  )
}
