import Link from 'next/link'

const Index = () => (
    <div>
        <h1>INDIV Home Page</h1>

        <style jsx>{`
            h1 {
                background: pink;
            }
        `}</style>
        <Link href = '/blog'>
            <a>Click here to see our courses</a>
        </Link>
    </div>
)

export default Index