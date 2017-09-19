import Article from './Article'
import Author from './Author'

export default class ArticleRepository {

    private articles: Article[] = []

    public save(article: Article)
    {
        this.articles.push(article)
    }

    public findAll(): Article[]
    {
        return this.articles
    }

    public findByAuthor(author: Author): Article[] | undefined
    {
        for (let article of this.articles) {
            if (article.author === author) {
                return [article]
            }
        }
    }

    public delete(article: Article)
    {
        this.articles.splice(this.articles.indexOf(article), 1)
    }
}