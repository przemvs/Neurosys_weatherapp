import PropTypes from 'prop-types'
import React, {Component} from 'react'
import SVGInline from 'react-svg-inline'

class Svg extends Component {
  parseIcon = icon => {
    const parser = new DOMParser()
    return parser.parseFromString(icon, 'image/svg+xml')
  }

  serializeIcon = icon => {
    const serializer = new XMLSerializer()
    return serializer.serializeToString(icon)
  }

  injectStyles = (icon, styles = []) => {
    Object.keys(styles).map(item => (icon.documentElement.style[item] = styles[item]))
    return icon
  }

  render() {
    const {style, icon, fill, onClick} = this.props
    return (
      <SVGInline
        cleanup={fill ? ['fill'] : []}
        fill={fill}
        svg={this.serializeIcon(this.injectStyles(this.parseIcon(icon), style))}
        onClick={onClick}
      />
    )
  }
}

Svg.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

export default Svg
