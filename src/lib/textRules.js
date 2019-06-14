export const textRules = [
  {
    enterSymbol: ['@'],
    escapeSymbol: ['.'],
    replaceWith: 'TODO',
    type: 'author',
    closingTag: true,
    regexRule: /(?<=\@).*(?=\.)/, //selects word between @ and .
    regexFunction: rawText => {
      const regex = new RegExp(/(?<=\@).*(?=\.)/)
      return rawText.match(regex)
    },
  },
  {
    enterSymbol: ['.'], // proceeding a hard return after author
    escapeSymbol: [],
    replaceWith: 'TODO',
    type: 'source',
    regexFunction: rawText => {
      const author = rawText.match(/(?<=\@).*(?=\.)/)
      const regex = new RegExp(`/(?<=${author}.).*(\n|\s{2,})/`)
      return rawText.match(regex)
    },
  },
  {
    enterSymbol: ['P.', 'pp.', 'p', 'p.', 'pp'], // proceeding new source
    escapeSymbol: [],
    replaceWith: 'TODO',
    type: 'page',
  },
  {
    enterSymbol: ['\n\n'], // proceeding new page
    escapeSymbol: [],
    replaceWith: 'TODO',
    type: 'new-entry',
  },
  {
    enterSymbol: ['mm/dd/yy'],
    escapeSymbol: [],
    replaceWith: 'TODO',
    type: 'date',
  },
  {
    enterSymbol: [':'], // colon proceeded by a hard return
    escapeSymbol: [],
    replaceWith: 'TODO',
    type: 'list',
  },
  {
    enterSymbol: ['```'], //following three ticks is the title of the note
    escapeSymbol: [],
    replaceWith: 'TODO',
    type: 'margin-note',
    closingTag: true,
  },
]
