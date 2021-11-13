import posts from '../posts.json'
import Link from 'next/link'

import style from '../style/blog.module.css'

const Blog = () => (
    <div>
        <h1>Welcome to course page</h1>

        <ul className={style.list}>
            {Object.entries(posts).map((value, index) => {
                return <li key={index}>
                        <Link href = '/blog/[id]' as ={'/blog/' + value[0]}>
                            <a>{value[1].title}</a>
                        </Link>
                       </li>
            })}
        </ul>

    </div>
)

export default Blog