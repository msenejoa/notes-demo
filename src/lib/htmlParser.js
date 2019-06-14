export function htmlParser(htmlState, ref) {
  let text = htmlState.rawText
  text = text.replace(/<div>/gi, '\n')
  text = text.replace(/<\/div>/gi, '')
  text = text.replace(/<br>/gi, '\n')

  const regex = new RegExp(
    /\@(\w+)?\.?(\w+)?(\n*)?[[Pp]*]?[\.\s]?\s?(\d+)?[\-*]?(\d+)?\n*([\w\s]*)?/
  )
  const match = text.match(regex)
  let matches = {}
  if (match) {
    matches = {
      source: match[1],
      author: match[2],
      pageFrom: match[4],
      pageTo: match[5],
      entry: match[6],
    }
  }
  let newHtmlState = { ...htmlState, entrySources: { ...matches } }

  return newHtmlState
}

export function setEndOfContenteditable(target) {
  const range = document.createRange()
  const sel = window.getSelection()
  range.selectNodeContents(target)
  range.collapse(false)
  sel.removeAllRanges()
  sel.addRange(range)
  target.focus()
  range.detach() // optimization

  // set scroll to the end if multiline
  target.scrollTop = target.scrollHeight
}

function getCaretCharacterOffsetWithin(element) {
  console.log('FIRED')
  var caretOffset = 0
  var doc = element.ownerDocument || element.document
  var win = doc.defaultView || doc.parentWindow
  var sel
  if (typeof win.getSelection != 'undefined') {
    sel = win.getSelection()
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0)
      var preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(element)
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      console.log(preCaretRange)
      caretOffset = preCaretRange.toString().length
    }
  } else if ((sel = doc.selection) && sel.type != 'Control') {
    console.log('here it is')
    var textRange = sel.createRange()
    var preCaretTextRange = doc.body.createTextRange()
    preCaretTextRange.moveToElementText(element)
    preCaretTextRange.setEndPoint('EndToEnd', textRange)
    caretOffset = preCaretTextRange.text.length
  }
  return caretOffset
}
