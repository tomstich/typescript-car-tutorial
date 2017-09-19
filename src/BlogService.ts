import ArticleRepository from './ArticleRepository'
import AuthorRepository from './AuthorRepository'

import Article from './Article'
import Author from './Author'

export default class BlogService
{
    constructor(private articleRepository: ArticleRepository, private authorRepository: AuthorRepository) { }

    public createAuthor(forename: String, surname: String)
    {
        let author = new Author(forename, surname)
        this.authorRepository.save(author)

        return author
    }

    public createArticle(author: Author, headline: String, content: String)
    {
        let article = new Article({headline, content, author})
        this.articleRepository.save(article)

        return article
    }
}