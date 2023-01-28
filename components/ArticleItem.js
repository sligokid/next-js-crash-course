import articleStyles from '../styles/article.module.css'
import Link from 'next/link'

const ArticleItem = ({ article }) => {
    return (
        <Link legacyBehavior href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
