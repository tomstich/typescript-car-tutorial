import Author from './Author'

interface Config {
    headline: String;
    content: String;
    author: Author;
}

export default class Article {

    constructor(private config: Config) {}

    public get headline(): String
    {
        return this.config.headline
    }

    public get content(): String
    {
        return this.config.content
    }

    public get author(): Author
    {
        return this.config.author
    }
}