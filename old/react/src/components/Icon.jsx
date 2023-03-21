const Icon = ({ name, style }) => {
  return (
    <svg className={ name } style={ style } aria-hidden="true">
      <use href={ '#icon-' + name } />
    </svg>
  )
}

export default Icon