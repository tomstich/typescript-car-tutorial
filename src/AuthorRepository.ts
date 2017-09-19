import Author from './Author'

export default class AuthorRepository
{
    private authors: Author[] = []

    public save(author: Author)
    {
        this.authors.push(author)
    }

    public findAll(): Author[]
    {
        return this.authors
    }

    public findBySurname(surname: String): Author[] | undefined
    {
        for (let author of this.authors) {
            if (author.surname === surname) {
                return [author]
            }
        }
    }

    public delete(author: Author)
    {
        this.authors.splice(this.authors.indexOf(author), 1)
    }
}