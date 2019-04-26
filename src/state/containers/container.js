import { Container } from "unstated"

export default class CounterContainer extends Container {
  state = { count: 0, text: "" }
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  update_text = text => {
    this.setState({ text: text })
  }
}
