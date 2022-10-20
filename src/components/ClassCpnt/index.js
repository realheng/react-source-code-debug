import React from "react"
class ClassCpnt extends React.PureComponent {
  state = {
    counts: [1, 2, 3, 4, 5, 6],
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.state.counts[0] = Math.random()
            this.setState({ counts: this.state.counts })
          }}
        >
          点我
        </button>
        {this.state.counts.map((item, idx) => {
          return <span key={idx} style={{padding:5,display:'inline-block'}}>{item}</span>
        })}
      </div>
    )
  }
}

export default ClassCpnt
