import React, { Component } from 'react'
import { MentionsInput, Mention } from 'react-mentions'
import defaultStyle from './../lib/defaultStyle'
import defaultMentionStyle from './../lib/defaultMentionStyle'
import { users } from './../lib/users'
import { provideExampleValue } from './../utils/provideExampleValue'

class Content extends Component {
  render() {
    const { value, onChange, onAdd } = this.props
    return (
      <MentionsInput
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder={"Mention people using '@'"}
      >
        <Mention data={users} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>
    )
  }
}

const asExample = provideExampleValue('')

export default asExample(Content)
